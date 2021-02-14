import { Grid } from '@material-ui/core';
import * as React from 'react';
import { convertDistance } from '../../toolbox/distance';
import { SubtitleTypography } from '../../toolbox/typograpies';
import { getDetailedSegmentLeaderboards_segment_efforts_segment } from '../../types/getDetailedSegmentLeaderboards';

interface Props {
  segment: getDetailedSegmentLeaderboards_segment_efforts_segment;
}

export function SegmentInfo({ segment }: Props) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <SubtitleTypography>Distance:</SubtitleTypography>
          <SubtitleTypography>
            {convertDistance(segment.distance)}
          </SubtitleTypography>
        </Grid>
        <Grid item>
          <SubtitleTypography>Avg grade:</SubtitleTypography>
          <SubtitleTypography>{segment.average_grade}%</SubtitleTypography>
        </Grid>
        <Grid item>
          <SubtitleTypography>Lowest elev:</SubtitleTypography>
          <SubtitleTypography>{segment.elevation_low}m</SubtitleTypography>
        </Grid>
        <Grid item>
          <SubtitleTypography>Highest elev:</SubtitleTypography>
          <SubtitleTypography>{segment.elevation_high}m</SubtitleTypography>
        </Grid>
        <Grid item>
          <SubtitleTypography>Elev difference:</SubtitleTypography>
          <SubtitleTypography>
            {segment.total_elevation_gain}m
          </SubtitleTypography>
        </Grid>
      </Grid>
    </>
  );
}
