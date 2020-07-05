/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getActivity
// ====================================================

export interface getActivity_activities_by_pk_map {
  __typename: 'maps';
  map: string;
}

export interface getActivity_activities_by_pk_segment_efforts_segment {
  __typename: 'segments';
  external_id: any;
  distance: any;
  average_grade: any;
  elevation_high: any;
  elevation_low: any;
  start_point: any;
  end_point: any;
}

export interface getActivity_activities_by_pk_segment_efforts {
  __typename: 'segment_efforts';
  name: string;
  id: number;
  average_heartrate: any | null;
  /**
   * An object relationship
   */
  segment: getActivity_activities_by_pk_segment_efforts_segment;
  elapsed_time: number;
  moving_time: number;
  average_watts: any;
  max_heartrate: any | null;
  pr_rank: number | null;
}

export interface getActivity_activities_by_pk {
  __typename: 'activities';
  external_id: any;
  name: string;
  /**
   * An object relationship
   */
  map: getActivity_activities_by_pk_map;
  distance: any;
  average_speed: any;
  max_speed: any;
  start_point: any;
  end_point: any;
  elapsed_time: number;
  moving_time: number;
  total_elevation_gain: any;
  start_date_local: any;
  /**
   * An array relationship
   */
  segment_efforts: getActivity_activities_by_pk_segment_efforts[];
}

export interface getActivity {
  /**
   * fetch data from the table: "activities" using primary key columns
   */
  activities_by_pk: getActivity_activities_by_pk | null;
}

export interface getActivityVariables {
  id: any;
}
