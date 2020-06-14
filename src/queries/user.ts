import gql from 'graphql-tag';

export const GET_USER_DATA = gql`
  query getUserData(
    $id: Int!
    $weekStart: timestamptz!
    $yearStart: timestamptz!
  ) {
    users_by_pk(external_id: $id) {
      external_id
      profile
      profile_medium
      date_preference
      first_name
      last_name
      username
    }

    user_dashboard_summary(args: { id: $id }) {
      activities
      distance
    }

    activitiesWeek: activities_aggregate(
      where: { user_id: { _eq: $id }, start_date_local: { _gte: $weekStart } }
    ) {
      aggregate {
        count
        sum {
          distance
        }
        sum {
          moving_time
        }
        sum {
          total_elevation_gain
        }
      }
    }

    activitiesYear: activities_aggregate(
      where: { user_id: { _eq: $id }, start_date_local: { _gte: $yearStart } }
    ) {
      aggregate {
        count
        sum {
          distance
        }
        sum {
          total_elevation_gain
        }
        sum {
          moving_time
        }
      }
    }

    segment_efforts(
      distinct_on: [name]
      order_by: [{ name: asc }, { pr_rank: asc }, { start_date_local: desc }]
      where: { pr_rank: { _eq: 1 }, user_id: { _eq: $id } }
      limit: 3
    ) {
      name
      start_date_local
      pr_rank
    }
  }
`;
