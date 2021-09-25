import { EmojiEventsOutlined } from '@mui/icons-material';
import { Grid } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { convertDistance, distanceElevation } from '../../toolbox/distance';
import {
  activityDate,
  convertDurationForActivityTitle,
  convertDurationForPR,
} from '../../toolbox/time';
import { SubtitleTypography, TitleTypography } from '../../toolbox/typograpies';
import { getRecentActivities_activities } from '../../types/getRecentActivities';
import { ValueTypography } from './styles/RecentActivities.styles';

interface Props {
  activity: getRecentActivities_activities;
}

export function RecentActivityCard({ activity }: Props) {
  return (
    <>
      <TitleTypography gutterBottom>
        <Link to={`/activity/${activity.external_id}`}>
          <span>{activity.name}</span>
        </Link>
        {/* @ts-ignore */}
        <SubtitleTypography component="span">
          {activityDate(activity.start_date_local)}
        </SubtitleTypography>
      </TitleTypography>
      <Grid container sx={{ marginBlock: 2, marginInline: 0 }}>
        <Grid item sm={3}>
          <SubtitleTypography>Distance</SubtitleTypography>
          <ValueTypography>
            {convertDistance(activity.distance)}
          </ValueTypography>
        </Grid>
        <Grid item sm={3}>
          <SubtitleTypography>Elev gain</SubtitleTypography>
          <ValueTypography>
            {distanceElevation(activity.total_elevation_gain)}
          </ValueTypography>
        </Grid>
        <Grid item sm={3}>
          <SubtitleTypography>Time</SubtitleTypography>
          <ValueTypography>
            {convertDurationForActivityTitle(activity.moving_time)}
            &nbsp;/&nbsp;
            {convertDurationForActivityTitle(activity.elapsed_time)}
          </ValueTypography>
        </Grid>
        <Grid item sm={3}>
          {activity.achievement_count ? (
            <>
              <SubtitleTypography align="right">
                Achievements
              </SubtitleTypography>
              <ValueTypography align="right">
                <EmojiEventsOutlined sx={{ marginBlock: 2, marginInline: 0 }} />
                {activity.achievement_count}
              </ValueTypography>
            </>
          ) : null}
        </Grid>
      </Grid>
      {activity.segment_efforts.map((effort) => {
        const movingTime = convertDurationForPR(effort.moving_time);
        const totalTime = convertDurationForPR(effort.elapsed_time);
        return (
          <SubtitleTypography key={effort.id} sx={{ fontSize: '0.65rem' }}>
            {effort.name} <strong>PR</strong> (
            {movingTime === totalTime
              ? movingTime
              : movingTime + ' / ' + totalTime}
            )
          </SubtitleTypography>
        );
      })}
    </>
  );
}
