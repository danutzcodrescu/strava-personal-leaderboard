const axios = require('axios');

async function checkForExistingUser(id, access_token, refresh_token) {
  const updateUsers = await axios.post(
    `${process.env.URL}/.netlify/functions/update_user_token`,
    {
      pk: id,
      access_token,
      refresh_token,
    }
  );
  return updateUsers.data.data.update_users_by_pk !== null;
}
module.exports = checkForExistingUser;