const axios = require('axios');

async function refreshToken(userId) {
  const getTokens = await axios.post(
    `${process.env.URL}/.netlify/functions/refresh_user_token`,
    { user: userId }
  );
  return getTokens.data.access_token;
}

module.exports = refreshToken;
