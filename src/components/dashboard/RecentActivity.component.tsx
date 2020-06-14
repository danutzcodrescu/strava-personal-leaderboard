import { createStyles, Grid, Theme } from '@material-ui/core';
import { EmojiEventsOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import * as React from 'react';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dataInfo: {
      margin: theme.spacing(2, 0),
    },
    PR: {
      fontSize: '0.65rem',
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
export function RecentActivityCard({ activity }: Props) {
  const classes = useStyles();
  return (
    <>
      <TitleTypography gutterBottom>
        <span>Title placeholder</span>
        {/* @ts-ignore */}
        <SubtitleTypography component="span">
          {activityDate(activity.start_date_local)}
        </SubtitleTypography>
      </TitleTypography>
      <Grid container className={classes.dataInfo}>
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
                <EmojiEventsOutlined className={classes.icon} />
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
          <SubtitleTypography key={effort.id} className={classes.PR}>
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
