/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getDetailedSegmentLeaderboards
// ====================================================

export interface getDetailedSegmentLeaderboards_segment_efforts_segment_map {
  __typename: 'maps';
  map: string;
}

export interface getDetailedSegmentLeaderboards_segment_efforts_segment {
  __typename: 'segments';
  average_grade: any;
  climb_category: number;
  elevation_high: any;
  elevation_low: any;
  end_point: any;
  total_elevation_gain: any | null;
  start_point: any;
  /**
   * An object relationship
   */
  map: getDetailedSegmentLeaderboards_segment_efforts_segment_map;
  distance: any;
  maximum_grade: any;
}

export interface getDetailedSegmentLeaderboards_segment_efforts {
  __typename: 'segment_efforts';
  elapsed_time: number;
  moving_time: number;
  average_watts: any;
  average_heartrate: any | null;
  max_heartrate: any | null;
  start_date_local: any;
  /**
   * An object relationship
   */
  segment: getDetailedSegmentLeaderboards_segment_efforts_segment;
  name: string;
  id: number;
}

export interface getDetailedSegmentLeaderboards {
  /**
   * fetch data from the table: "segment_efforts"
   */
  segment_efforts: getDetailedSegmentLeaderboards_segment_efforts[];
}

export interface getDetailedSegmentLeaderboardsVariables {
  segmentId: any;
  userId: number;
}
