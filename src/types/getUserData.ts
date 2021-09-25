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

export interface getUserData_user_dashboard_summary {
  __typename: 'user_summary';
  activities: any | null;
  distance: any | null;
}

export interface getUserData_activitiesWeek_aggregate_sum {
  __typename: 'activities_sum_fields';
  distance: any | null;
  moving_time: number | null;
  total_elevation_gain: any | null;
}

export interface getUserData_activitiesWeek_aggregate {
  __typename: 'activities_aggregate_fields';
  count: number;
  sum: getUserData_activitiesWeek_aggregate_sum | null;
}

export interface getUserData_activitiesWeek {
  __typename: 'activities_aggregate';
  aggregate: getUserData_activitiesWeek_aggregate | null;
}

export interface getUserData_activitiesYear_aggregate_sum {
  __typename: 'activities_sum_fields';
  distance: any | null;
  total_elevation_gain: any | null;
  moving_time: number | null;
}

export interface getUserData_activitiesYear_aggregate {
  __typename: 'activities_aggregate_fields';
  count: number;
  sum: getUserData_activitiesYear_aggregate_sum | null;
}

export interface getUserData_activitiesYear {
  __typename: 'activities_aggregate';
  aggregate: getUserData_activitiesYear_aggregate | null;
}

export interface getUserData_segment_efforts {
  __typename: 'segment_efforts';
  name: string;
  start_date_local: any;
  pr_rank: number | null;
}

export interface getUserData {
  /**
   * fetch data from the table: "users" using primary key columns
   */
  users_by_pk: getUserData_users_by_pk | null;
  /**
   * execute function "user_dashboard_summary" which returns "user_summary"
   */
  user_dashboard_summary: getUserData_user_dashboard_summary[];
  /**
   * An aggregate relationship
   */
  activitiesWeek: getUserData_activitiesWeek;
  /**
   * An aggregate relationship
   */
  activitiesYear: getUserData_activitiesYear;
  /**
   * An array relationship
   */
  segment_efforts: getUserData_segment_efforts[];
}

export interface getUserDataVariables {
  id: number;
  weekStart: any;
  yearStart: any;
}
