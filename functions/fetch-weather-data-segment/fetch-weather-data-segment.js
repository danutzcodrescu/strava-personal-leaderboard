const graphql = require('../graphql');
const midpoint = require('@turf/midpoint');
const { getWeatherData } = require('../weather');
const point = require('turf-point');

const segmentQuery = `
query Segment($id: bigint!) {
  segments_by_pk(external_id: $id) {
    start_point
    end_point
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

const updateSegment = `
mutation UpdateSegmentWithWeather ($id: uuid!, $segmentId: Int!) {
   update_segment_efforts_by_pk(pk_columns: {id: $segmentId}, _set: {weather_id: $id}) {
     id
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
    const segmentData = await graphql(segmentQuery, {
      id: request.event.data.new.segment_id,
    });
    const start = point(
      segmentData.data.data.segments_by_pk.start_point.slice(1, -1).split(',')
    );
    const end = point(
      segmentData.data.data.segments_by_pk.end_point.slice(1, -1).split(',')
    );
    console.log(midpoint);
    const center = midpoint(start, end);
    const weatherData = await getWeatherData({
      point: center.geometry.coordinates.reverse().join(','),
      startDate: request.event.data.new.start_date_local.slice(0, -6),
      elapsed: request.event.data.new.elapsed_time,
    });
    const weather = await graphql(insertWeather, { obj: weatherData });
    await graphql(updateSegment, {
      id: weather.data.data.insert_weather_one.id,
      segmentId: request.event.data.new.id,
    });
    return { statusCode: 200, body: 'success' };
  } catch (error) {
    console.log(error);
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
