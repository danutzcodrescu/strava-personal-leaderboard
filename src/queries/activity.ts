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
          distance
          average_grade
          elevation_high
          elevation_low
        }
        elapsed_time
        average_watts
      }
    }
  }
`;
