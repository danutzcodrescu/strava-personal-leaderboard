const graphql = require('../graphql');
const polyUtils = require('polyline-encoded');
const { default: center } = require('@turf/center');
const multiPoint = require('turf-multipoint');
const { getWeatherData } = require('../weather');

const mapQuery = `
query Map($id: String!) {
  maps_by_pk(external_id: $id) {
    map
  }
}
`;

const insertWeather = `
mutation AddWeatherMutation ($obj: weather_insert_input
!) {
  insert_weather_one(object: $obj) {
    id
  }
}
`;

const updateActivity = `
mutation UpdateActivityWithWeather ($id: uuid!, $activityId: bigint!) {
   update_activities_by_pk(pk_columns: {external_id: $activityId}, _set: {weather_id: $id}) {
     external_id
     weather_id
   }
}
`;

const handler = async (event) => {
  let request;
  try {
    request = JSON.parse(event.body);
  } catch (error) {
    return { statusCode: 400, body: 'cannot parse hasura event' };
  }
  try {
    const mapId = request.event.data.new.map_id;
    const mapData = await graphql(mapQuery, { id: mapId });
    const decoded = polyUtils
      .decode(mapData.data.data.maps_by_pk.map)
      .map((elem) => elem.reverse());
    const activityCenter = center(multiPoint(decoded));
    const weatherData = await getWeatherData({
      point: activityCenter.geometry.coordinates.reverse().join(','),
      startDate: request.event.data.new.start_date_local.slice(0, -6),
      elapsed: request.event.data.new.elapsed_time,
    });
    const weather = await graphql(insertWeather, { obj: weatherData });
    await graphql(updateActivity, {
      id: weather.data.data.insert_weather_one.id,
      activityId: request.event.data.new.external_id,
    });
    return { statusCode: 200, body: 'success' };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
