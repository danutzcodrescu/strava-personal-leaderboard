import { Grid } from '@mui/material';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { convertSpeed } from '../../toolbox/speed';
import {
  activityDate,
  convertDurationForActivityTitle,
} from '../../toolbox/time';
import { SubtitleTypography, TitleTypography } from '../../toolbox/typograpies';
import { getActivity_activities_by_pk } from '../../types/getActivity';
import { ValueTypography } from '../dashboard/styles/RecentActivities.styles';

interface Props {
  activity: getActivity_activities_by_pk;
}

export function ActivityDetails({ activity }: Props) {
  return (
    <Grid container spacing={2}>
      <Grid md={5} item>
        <TitleTypography>{activity.name}</TitleTypography>
        <SubtitleTypography>
          {activityDate(activity.start_date_local)}
        </SubtitleTypography>
      </Grid>
      <Grid md={7} item container justifyContent="space-between">
        <Grid item md={3}>
          <ValueTypography>
            {convertDistance(activity.distance)}
          </ValueTypography>
        </Grid>
        <Grid item md={3}>
          <ValueTypography>
            {convertDurationForActivityTitle(activity.elapsed_time)}
          </ValueTypography>
          <SubtitleTypography>elapsed time</SubtitleTypography>
        </Grid>
        <Grid item md={3}>
          <ValueTypography>
            {convertDurationForActivityTitle(activity.moving_time)}
          </ValueTypography>
          <SubtitleTypography>moving time</SubtitleTypography>
        </Grid>
        <Grid item container md={12}>
          <Grid item md={3}>
            Speed
          </Grid>
          <Grid item md={3}>
            {convertSpeed(activity.average_speed)}
          </Grid>
          <Grid item md={3}>
            {convertSpeed(activity.max_speed)}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
