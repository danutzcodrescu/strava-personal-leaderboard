import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { QueryBuilder, ShowChart, Speed } from '@material-ui/icons';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { convertDurationForActivityTitle } from '../../toolbox/time';
import {
  PeriodTypography,
  SubtitleTypography,
} from '../../toolbox/typograpies';
import {
  getUserData_activitiesWeek_aggregate,
  getUserData_activitiesYear_aggregate,
  getUserData_user_dashboard_summary,
} from '../../types/getUserData';
import { useStyles } from './styles/UserData.styles';

export interface UserDataProps {
  profile: string;
  first_name: string;
  last_name: string;
  username: string;
  summary: getUserData_user_dashboard_summary;
  weekSummary: getUserData_activitiesWeek_aggregate;
  yearSummary: getUserData_activitiesYear_aggregate;
}

export function UserData({
  profile,
  first_name,
  last_name,
  username,
  summary,
  weekSummary,
  yearSummary,
}: UserDataProps) {
  const classes = useStyles();
  return (
    <Card variant="outlined" classes={{ root: classes.cardRoot }}>
      <Grid container alignItems="center" justify="center">
        <Avatar className={classes.avatar} alt={username} src={profile} />
      </Grid>

      <Typography variant="h2" className={classes.username} align="center">
        {first_name} {last_name}
      </Typography>
      <CardContent>
        <Grid container spacing={2} justify="center">
          <Grid item sm={5}>
            <SubtitleTypography align="center">Activities</SubtitleTypography>
            <Typography align="center">{summary.activities}</Typography>
          </Grid>
          <Grid item sm={5}>
            <SubtitleTypography>Distance</SubtitleTypography>
            <Typography>{convertDistance(summary.distance)}</Typography>
          </Grid>
        </Grid>
        <PeriodTypography>
          <>This week&nbsp;</>
          <>{weekSummary.count} activities</>
        </PeriodTypography>
        <Grid container style={{ fontSize: '0.8rem' }} spacing={1}>
          <Grid item alignItems="center" container md={4}>
            <Speed className={classes.icon} />
            {convertDistance(weekSummary.sum!.distance)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <QueryBuilder className={classes.icon} />
            {convertDurationForActivityTitle(weekSummary.sum!.moving_time!)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <ShowChart className={classes.icon} />
            {convertDistance(weekSummary.sum!.total_elevation_gain!)}
          </Grid>
        </Grid>
        <PeriodTypography>
          <>This year&nbsp;</>
          <>{yearSummary.count} activities</>
        </PeriodTypography>
        <Grid container style={{ fontSize: '0.8rem' }} spacing={1}>
          <Grid item alignItems="center" container md={4}>
            <Speed className={classes.icon} />
            {convertDistance(yearSummary.sum!.distance)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <QueryBuilder className={classes.icon} />
            {convertDurationForActivityTitle(yearSummary.sum!.moving_time!)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <ShowChart className={classes.icon} />
            {convertDistance(yearSummary.sum!.total_elevation_gain!)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
