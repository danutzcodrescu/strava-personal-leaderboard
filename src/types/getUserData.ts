/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserData
// ====================================================

export interface getUserData_users_by_pk {
  __typename: 'users';
  external_id: number;
  profile: string;
  profile_medium: string;
  date_preference: string | null;
  first_name: string;
  last_name: string;
  username: string;
}

export interface getUserData {
  /**
   * fetch data from the table: "users" using primary key columns
   */
  users_by_pk: getUserData_users_by_pk | null;
}

export interface getUserDataVariables {
  id: number;
}
