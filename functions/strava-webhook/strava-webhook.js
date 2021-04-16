const axios = require('axios');

exports.handler = async (event, context) => {
  // validate Strava subscription
  if (event.httpMethod === 'GET') {
    const { queryStringParameters } = event;
    if (
      queryStringParameters['hub.mode'] === 'subscribe' &&
      queryStringParameters['hub.verify_token'] ===
        process.env.STRAVA_VERIFY_TOKEN
    )
      return {
        statusCode: 200,
        body: JSON.stringify({
          'hub.challenge': queryStringParameters['hub.challenge'],
        }),
      };
    // actual webhook
  } else {
    let request;
    try {
      request = JSON.parse(event.body);
    } catch (e) {
      return { statusCode: 400, body: 'cannot parse function body' };
    }
    if (
      request['object_type'] === 'activity' &&
      request['aspect_type'] === 'create'
    ) {
      try {
        const newActivity = await axios.post(
          `${process.env.URL}/.netlify/functions/create_activity`,
          {
            user_id: request['owner_id'],
            activity_id: request['object_id'],
          }
        );
        return {
          statusCode: 200,
          body: `Activity with id ${newActivity.data.data.insert_activities_one.external_id} created! Hooray ⚡`,
        };
      } catch (e) {
        return {
          statusCode: 500,
          body: JSON.stringify(e),
        };
      }
    }
  }
};
