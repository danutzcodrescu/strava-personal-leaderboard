const { getGearDetails } = require('../strava');
const graphql = require('../graphql');
const refreshToken = require('../refresh_user_token/refreshToken');

const enrichGear = `
mutation enrichGear($id: Int!, $obj: gears_set_input!) {
  update_gears_by_pk(pk_columns: {external_id: $id}, _set: $obj) {
    affected_rows
  }
}
`;

exports.handler = async (event, context) => {
  let request;
  try {
    request = JSON.parse(event.body);
  } catch (e) {
    return { statusCode: 400, body: 'cannot parse hasura event' };
  }

  try {
    const access_token = await refreshToken(
      request.equest.event.data.new.user_id
    );
    const gear = getGearDetails(
      access_token,
      request.event.data.new.external_id
    );
    await graphql(enrichGear, {
      id: request.event.data.new.external_id,
      obj: {
        description: gear.description,
        frame_type: gear.frame_type,
        model_name: gear.model_name,
      },
    });
    return { statusCode: 200, body: 'success' };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
