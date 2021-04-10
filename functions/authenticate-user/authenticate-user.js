const graphql = require('../graphql');
const checkForExistingUser = require('./check-for-existing-user');
const { authenticateOnStrava, getAthleteProfile } = require('../strava');

const insertUserMutation = `
mutation insertUser($object:  users_insert_input!) {
  insert_users_one(object: $object) {
    external_id
    access_token
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
    const {
      athlete,
      refresh_token,
      token_type,
      expires_at,
      access_token,
    } = await authenticateOnStrava(request.code);
    console.log(JSON.stringify(athlete));
    // const existingUser = await checkForExistingUser(
    //   athlete.id,
    //   access_token,
    //   refresh_token,
    //   expires_at
    // );
    // if (existingUser) {
    //   return {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //       external_id: athlete.id,
    //       access_token,
    //     }),
    //   };
    // }
    return {
      statusCode: 200,
      body: 'test',
    };

    // const athleteProfile = await getAthleteProfile(token_type, access_token);
    // const variables = {
    //   external_id: athlete.id,
    //   access_token,
    //   refresh_token,
    //   scope: request.scope,
    //   ...athleteProfile,
    // };
    // const user = await graphql(insertUserMutation, {
    //   object: variables,
    // });
    // const {
    //   data: { insert_users_one },
    // } = user.data;
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify({
    //     access_token: insert_users_one.access_token,
    //     external_id: insert_users_one.external_id,
    //     expires_at,
    //   }),
    // };
  } catch (err) {
    console.log(err?.data?.errors);
    return { statusCode: 500, body: err.toString() };
  }
};
