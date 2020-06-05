const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://www.strava.com/api/v3',
});

module.exports = {
  instance,
};
