const axios = require('axios');

async function graphql(query, variables) {
  return axios.post(
    process.env.REACT_APP_HASURA_ENDPOINT,
    {
      query,
      variables,
    },
    {
      headers: {
        'X-Hasura-Admin-Secret': process.env.HASURA_ADMIN_SECRET,
        'Content-Type': 'application/json',
      },
    }
  );
}

module.exports = graphql;
