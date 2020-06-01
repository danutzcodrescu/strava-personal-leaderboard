const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://www.strava.com/api/v3',
});
const hasuraEndpoint = process.env.HASURA_ENDPOINT;

module.exports = {
  instance,
  hasuraEndpoint,
};
