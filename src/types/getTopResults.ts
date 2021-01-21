/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTopResults
// ====================================================

export interface getTopResults_segment_efforts_segment {
  __typename: 'segments';
  start_point: any;
  end_point: any;
}

export interface getTopResults_segment_efforts {
  __typename: 'segment_efforts';
  id: number;
  name: string;
  pr_rank: number | null;
  segment_id: any;
  /**
   * An object relationship
   */
  segment: getTopResults_segment_efforts_segment;
}

export interface getTopResults {
  /**
   * fetch data from the table: "segment_efforts"
   */
  segment_efforts: getTopResults_segment_efforts[];
}

export interface getTopResultsVariables {
  id?: any | null;
}
