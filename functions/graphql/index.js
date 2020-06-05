const axios = require('axios');

async function graphql(query, variables) {
  return axios.post(`${process.env.HASURA_ENDPOINT}/v1/graphql`, {
    query,
    variables,
  });
}

module.exports = graphql;
