const axios = require('axios');

async function graphql(query, variables) {
  return axios.post(process.env.REACT_APP_HASURA_ENDPOINT, {
    query,
    variables,
  });
}

module.exports = graphql;
