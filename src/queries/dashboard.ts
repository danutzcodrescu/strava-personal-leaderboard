import { gql } from '@apollo/client';

export const GET_RECENT_ACTIVITIES = gql`
  query getRecentActivities {
    activities(limit: 10, order_by: { start_date_local: desc }) {
      distance
      total_elevation_gain
      elapsed_time
      moving_time
      achievement_count
      start_date_local
      name
      map {
        map
      }
      pr_count
      external_id
      type
      start_date_local
      segment_efforts(where: { pr_rank: { _is_null: false } }, limit: 3) {
        id
        elapsed_time
        moving_time
        name
      }
    }
  }
`;
