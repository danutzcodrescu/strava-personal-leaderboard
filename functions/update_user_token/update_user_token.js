const graphql = require('../graphql');

const updateUserToken = `
mutation UpdateUserToken($pk: Int!, $access_token: String!, $refresh_token: String!, $expires_at: Int!) {
  update_users_by_pk(pk_columns: {external_id: $pk}, _set: {refresh_token: $refresh_token, access_token: $access_token, expires_at: $expires_at}) {
    external_id
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
    const user = await graphql(updateUserToken, {
      pk: request.pk,
      access_token: request.access_token,
      refresh_token: request.refresh_token,
      expires_at: request.expires_at,
    });
    return { statusCode: 200, body: JSON.stringify(user.data) };
  } catch (err) {
    console.log(err.response.data);
    return { statusCode: 500, body: err.toString() };
  }
};
