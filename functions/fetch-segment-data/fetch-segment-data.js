const { getSegmentDetails } = require('../strava');
const graphql = require('../graphql');
const refreshToken = require('../refresh_user_token/refreshToken');

const createMap = `
mutation createMap($obj: maps_insert_input!) {
  insert_maps_one(object: $obj, 
    on_conflict: {
      constraint: maps_id_key,
      update_columns: []
    }) {
    external_id
  }
}
`;

const enrichSegment = `
mutation enrichSegment($id: bigint!, $obj: segments_set_input!) {
  update_segments_by_pk(pk_columns: {external_id: $id}, _set: $obj) {
    external_id
  }
}
`;

const getUser = `query getUser {
  users(limit: 1) {
    external_id
  }
}`;

exports.handler = async (event, context) => {
  let request;
  try {
    request = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'cannot parse hasura event' };
  }

  try {
    // workaround until authentication in hasura is set to get a valid user id
    const user = await graphql(getUser);
    const access_token = await refreshToken(
      user.data.data.users[0].external_id
    );
    const segment = await getSegmentDetails(
      access_token,
      request.event.data.new.external_id
    );
    const map = await graphql(createMap, {
      obj: {
        external_id: segment.map.id,
        map: segment.map.polyline,
      },
    });
    await graphql(enrichSegment, {
      id: request.event.data.new.external_id,
      obj: {
        total_elevation_gain: segment.total_elevation_gain,
        map_id: map.data.data?.insert_maps_one?.external_id || segment.map.id,
      },
    });
    return { statusCode: 200, body: 'success' };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() };
  }
};
