const { instance } = require('../constants');

async function authenticateOnStrava(code) {
  const stravaAuthentication = await instance.post('/oauth/token', null, {
    params: {
      client_id: process.env.REACT_APP_STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code',
    },
  });
  const {
    access_token,
    refresh_token,
    expires_at,
    token_type,
    athlete,
  } = stravaAuthentication.data;
  return { access_token, refresh_token, expires_at, token_type, athlete };
}

async function getAthleteProfile(token_type, access_token) {
  const stravaAthlete = await instance.get('/athlete', {
    headers: { Authorization: `${token_type} ${access_token}` },
  });
  const {
    username,
    firstname,
    lastname,
    city,
    state,
    country,
    sex,
    created_at,
    updated_at,
    profile_medium,
    profile,
    measurement_preference,
    ftp,
    date_preference,
  } = stravaAthlete.data;
  return {
    username,
    first_name: firstname,
    last_name: lastname,
    city,
    state,
    country,
    sex,
    created_at,
    updated_at,
    profile_medium,
    profile,
    measurement_preference,
    ftp,
    date_preference,
  };
}

async function refreshToken(token) {
  const exhangeToken = await instance.post('/oauth/token', null, {
    params: {
      client_id: process.env.REACT_APP_STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      refresh_token: token,
      grant_type: 'refresh_token',
    },
  });
  const {
    access_token,
    refresh_token,
    expires_at,
    token_type,
  } = exhangeToken.data;
  return { access_token, refresh_token, expires_at, token_type };
}

async function getActivity(token, activity_id) {
  const activity = await instance.get(`/activities/${activity_id}`, {
    params: {
      include_all_efforts: true,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return activity.data;
}

async function getGearDetails(token, gear_id) {
  const activity = await instance.get(`/gear/${gear_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return activity.data;
}

async function getSegmentDetails(token, segment_id) {
  const segment = await instance.get(`/segments/${segment_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return segment.data;
}

module.exports = {
  authenticateOnStrava,
  getAthleteProfile,
  refreshToken,
  getActivity,
  getGearDetails,
  getSegmentDetails,
};
