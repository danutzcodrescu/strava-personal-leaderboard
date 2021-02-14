/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSegmentLeaderboards
// ====================================================

export interface getSegmentLeaderboards_segment_efforts {
  __typename: 'segment_efforts';
  start_date_local: any;
  moving_time: number;
  elapsed_time: number;
  id: number;
  segment_id: any;
}

export interface getSegmentLeaderboards {
  /**
   * fetch data from the table: "segment_efforts"
   */
  segment_efforts: getSegmentLeaderboards_segment_efforts[];
}

export interface getSegmentLeaderboardsVariables {
  segmentId: any;
  userId: number;
}
