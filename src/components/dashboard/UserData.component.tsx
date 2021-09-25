import { QueryBuilder, ShowChart, Speed } from '@mui/icons-material';
import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
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
  return (
    <Card variant="outlined" sx={{ padding: 1.5 }}>
      <Grid container alignItems="center" justifyContent="center">
        <Avatar
          sx={{
            width: '70px',
            height: '70px',
            marginBlockEnd: 1.5,
          }}
          alt={username}
          src={profile}
        />
      </Grid>

      <Typography
        variant="h2"
        sx={{ fontSize: '1.3rem', fontWeight: 'bold' }}
        align="center"
      >
        {first_name} {last_name}
      </Typography>
      <CardContent>
        <Grid container spacing={2} justifyContent="center">
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
            <Speed sx={{ marginRight: 1 }} />
            {convertDistance(weekSummary.sum!.distance)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <QueryBuilder sx={{ marginRight: 1 }} />
            {convertDurationForActivityTitle(weekSummary.sum!.moving_time!)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <ShowChart sx={{ marginRight: 1 }} />
            {convertDistance(weekSummary.sum!.total_elevation_gain!)}
          </Grid>
        </Grid>
        <PeriodTypography>
          <>This year&nbsp;</>
          <>{yearSummary.count} activities</>
        </PeriodTypography>
        <Grid container style={{ fontSize: '0.8rem' }} spacing={1}>
          <Grid item alignItems="center" container md={4}>
            <Speed sx={{ marginRight: 1 }} />
            {convertDistance(yearSummary.sum!.distance)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <QueryBuilder sx={{ marginRight: 1 }} />
            {convertDurationForActivityTitle(yearSummary.sum!.moving_time!)}
          </Grid>
          <Grid item alignItems="center" container md={4}>
            <ShowChart sx={{ marginRight: 1 }} />
            {convertDistance(yearSummary.sum!.total_elevation_gain!)}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
