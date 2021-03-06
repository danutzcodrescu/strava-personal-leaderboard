import { gql } from '@apollo/client';

export const GET_SEGMENT_LEADERBOARD = gql`
  query getDetailedSegmentLeaderboards($segmentId: bigint!, $userId: Int!) {
    segment_efforts(
      where: {
        _and: [
          { segment_id: { _eq: $segmentId } }
          { user_id: { _eq: $userId } }
        ]
      }
      order_by: { elapsed_time: asc }
    ) {
      elapsed_time
      moving_time
      average_watts
      average_heartrate
      max_heartrate
      start_date_local
      segment {
        average_grade
        climb_category
        elevation_high
        elevation_low
        end_point
        total_elevation_gain
        start_point
        map {
          map
        }
        distance
        maximum_grade
      }
      name
      id
    }
  }
`;
