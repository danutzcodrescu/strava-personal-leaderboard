const axios = require('axios');

async function checkForExistingUser(
  id,
  access_token,
  refresh_token,
  expires_at
) {
  const updateUsers = await axios.post(
    `${process.env.URL}/.netlify/functions/update_user_token`,
    {
      pk: parseInt(id),
      access_token,
      refresh_token,
      expires_at,
    }
  );
  return updateUsers.data.data.update_users_by_pk !== null;
}
module.exports = checkForExistingUser;
