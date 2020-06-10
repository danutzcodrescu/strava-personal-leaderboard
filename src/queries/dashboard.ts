import gql from 'graphql-tag';

export const GET_RECENT_ACTIVITIES = gql`
  query getRecentActivities {
    activities(limit: 10, order_by: { start_date_local: desc }) {
      distance
      total_elevation_gain
      elapsed_time
      moving_time
      achievement_count
      start_date_local
      map {
        map
      }
      pr_count
    }
  }
`;
