const graphql = require('../graphql');
const { refreshToken } = require('../strava');
const checkForExistingUser = require('../authenticate-user/check-for-existing-user');

const userQuery = `query getUser($pk: Int!) {
  users_by_pk(external_id: $pk) {
    refresh_token
    access_token
    expired
    expires_at
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
    const user = await graphql(userQuery, { pk: parseInt(request.user) });
    if (user.data.data.users_by_pk.expired === 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          access_token: user.data.data.users_by_pk.access_token,
          external_id: request.user,
          expires_at: user.data.data.users_by_pk.expires_at,
        }),
      };
    }
    const { refresh_token, access_token, expires_at } = await refreshToken(
      user.data.data.users_by_pk.refresh_token
    );
    await checkForExistingUser(
      request.user,
      access_token,
      refresh_token,
      expires_at
    );
    return {
      statusCode: 200,
      body: JSON.stringify({
        access_token,
        external_id: request.user,
        expires_at,
      }),
    };
  } catch (err) {
    console.log(err);
    return { statusCode: 500, body: err.toString() };
  }
};
