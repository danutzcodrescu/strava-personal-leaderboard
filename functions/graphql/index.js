const { hasuraEndpoint } = require('../constants');
const axios = require('axios');

async function graphql(query, variables) {
  return axios.post(hasuraEndpoint, { query, variables });
}

module.exports = graphql;
