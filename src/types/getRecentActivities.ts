/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getRecentActivities
// ====================================================

export interface getRecentActivities_activities_map {
  __typename: 'maps';
  map: string;
}

export interface getRecentActivities_activities {
  __typename: 'activities';
  distance: any;
  total_elevation_gain: any;
  elapsed_time: number;
  moving_time: number;
  achievement_count: number | null;
  start_date_local: any;
  /**
   * An object relationship
   */
  map: getRecentActivities_activities_map;
  pr_count: number | null;
}

export interface getRecentActivities {
  /**
   * fetch data from the table: "activities"
   */
  activities: getRecentActivities_activities[];
}
