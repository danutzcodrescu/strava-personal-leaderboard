const { getActivity } = require('../strava');
const generateVars = require('./generate_graphql_variables');
const graphql = require('../graphql');
const refreshToken = require('../refresh_user_token/refreshToken');

const insertActivityMutation = `
mutation insertActivity ($obj: activities_insert_input!, $gear: gears_insert_input!, $segments: [segments_insert_input!]!) { 
  insert_gears_one(object: $gear, on_conflict: {constraint: gears_id_key, update_columns: distance}) {
    external_id
  }
  
  insert_activities_one(object: $obj) {
    external_id
  }

  insert_segments(objects: $segments, on_conflict: {constraint: segments_external_id_key, update_columns: [distance]}) {
    returning {
      external_id
      segment_efforts {
        id
        user_id
        activity_id
      }
    }
  }
}
`;

exports.handler = async (event, context) => {
  let request;
  try {
    request = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'cannot parse function body' };
  }
  try {
    const access_token = await refreshToken(request.user_id);
    const activityFromStrava = await getActivity(
      access_token,
      request.activity_id
    );
    const { object, segments } = generateVars(
      activityFromStrava,
      request.user_id
    );
    const newActivity = await graphql(insertActivityMutation, {
      obj: object,
      gear: {
        distance: activityFromStrava.gear.distance,
        external_id: activityFromStrava.gear.id,
        brand_name: activityFromStrava.gear.name,
        user_id: request.user_id,
      },
      segments,
    });
    return { statusCode: 200, body: JSON.stringify(newActivity.data) };
  } catch (err) {
    console.log(err.response.data);
    return { statusCode: 500, body: err.toString() };
  }
};
