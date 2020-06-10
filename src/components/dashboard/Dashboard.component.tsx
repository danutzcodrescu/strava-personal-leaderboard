import { useQuery } from '@apollo/react-hooks';
import { CircularProgress, Grid } from '@material-ui/core';
import * as React from 'react';
import { GET_RECENT_ACTIVITIES } from '../../queries/dashboard';
import { GET_USER_DATA } from '../../queries/user';
import { getUserInfo } from '../../toolbox/setUserToken';
import { getRecentActivities } from '../../types/getRecentActivities';
import { getUserData } from '../../types/getUserData';
import { RecentActivities } from './RecentActivities.component';
import { GridDashboard } from './styles/Dashboard.styles';
import { UserData, UserDataProps } from './UserData.component';

interface UserDataPickProps extends UserDataProps {
  [key: string]: string;
}

export function Dashboard() {
  const {
    loading: loadingUserData,
    data: userData,
    error: errorUserData,
  } = useQuery<getUserData>(GET_USER_DATA, {
    variables: { id: getUserInfo() },
  });
  const {
    loading: loadingDashboardData,
    data: dashboardData,
    error: errorDashboardData,
  } = useQuery<getRecentActivities>(GET_RECENT_ACTIVITIES);
  if (loadingDashboardData || loadingUserData) {
    return (
      <Grid container alignItems="center" justify="center">
        <CircularProgress />
      </Grid>
    );
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
        />
      </Grid>
      <Grid item md={9}>
        <RecentActivities />
      </Grid>
    </GridDashboard>
  );
}
