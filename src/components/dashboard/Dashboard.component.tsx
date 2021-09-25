import { useQuery } from '@apollo/client';
import { Grid, Typography } from '@mui/material';
import { startOfWeek, startOfYear } from 'date-fns';
import * as React from 'react';
import { GET_RECENT_ACTIVITIES } from '../../queries/dashboard';
import { GET_USER_DATA } from '../../queries/user';
import { getUserInfo } from '../../toolbox/setUserToken';
import { getRecentActivities } from '../../types/getRecentActivities';
import { getUserData } from '../../types/getUserData';
import { Loading } from '../utilities/Loading';
import { RecentActivities } from './RecentActivities.component';
import { GridDashboard } from './styles/Dashboard.styles';
import { UserData, UserDataProps } from './UserData.component';

interface UserDataPickProps
  extends Omit<UserDataProps, 'summary' | 'weekSummary' | 'yearSummary'> {
  [key: string]: string;
}

export function Dashboard() {
  const { loading: loadingUserData, data: userData } = useQuery<getUserData>(
    GET_USER_DATA,
    {
      variables: {
        id: parseInt(getUserInfo()!),
        weekStart: startOfWeek(new Date(), { weekStartsOn: 1 }),
        yearStart: startOfYear(new Date()),
      },
    }
  );
  const { loading: loadingDashboardData, data: dashboardData } =
    useQuery<getRecentActivities>(GET_RECENT_ACTIVITIES);
  if (loadingDashboardData || loadingUserData) {
    return <Loading />;
  }
  if (!userData || !userData) {
    return <Typography>Error</Typography>;
  }
  return (
    <GridDashboard container spacing={2}>
      <Grid item md={3}>
        <UserData
          {...['profile', 'first_name', 'last_name', 'username'].reduce(
            (acc, val) => {
              acc[val] = (userData?.users_by_pk as any)?.[val];
              return acc;
            },
            {} as UserDataPickProps
          )}
          summary={userData.user_dashboard_summary[0]}
          weekSummary={userData.activitiesWeek.aggregate!}
          yearSummary={userData.activitiesYear.aggregate!}
        />
      </Grid>
      <Grid item md={9}>
        <RecentActivities activities={dashboardData!.activities} />
      </Grid>
    </GridDashboard>
  );
}
