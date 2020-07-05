import { gql } from '@apollo/client';

export const GET_ACTIVITY = gql`
  query getActivity($id: bigint!) {
    activities_by_pk(external_id: $id) {
      external_id
      map {
        map
      }
      distance
      average_speed
      max_speed
      start_point
      end_point
      elapsed_time
      moving_time
      total_elevation_gain
      start_date_local
      segment_efforts {
        name
        id
        average_heartrate
        segment {
          external_id
          distance
          average_grade
          elevation_high
          elevation_low
          map {
            map
          }
        }
        elapsed_time
        moving_time
        average_watts
        average_heartrate
        max_heartrate
        pr_rank
      }
    }
  }
`;

export const GET_SEGMENT_LEADERBOARDS = gql`
  query getSegmentLeaderboards($segmentId: bigint!, $userId: Int!) {
    segment_efforts(
      where: {
        _and: [
          { segment_id: { _eq: $segmentId } }
          { user_id: { _eq: $userId } }
        ]
      }
      order_by: { moving_time: asc }
    ) {
      start_date_local
      moving_time
      elapsed_time
      id
    }
  }
`;
