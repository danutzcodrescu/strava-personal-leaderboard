import gql from 'graphql-tag';

export const GET_USER_DATA = gql`
  query getUserData($id: Int!) {
    users_by_pk(external_id: $id) {
      external_id
      profile
      profile_medium
      date_preference
      first_name
      last_name
      username
    }
  }
`;
