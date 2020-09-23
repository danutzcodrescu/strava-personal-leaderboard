import { Box, Grid } from '@material-ui/core';
import { EmojiEventsOutlined } from '@material-ui/icons';
import * as React from 'react';
import { trophyColors } from '../../toolbox/trophyColors';
import { getTopResults_segment_efforts } from '../../types/getTopResults';
import { ValueTypography } from '../dashboard/styles/RecentActivities.styles';

interface Props {
  results: getTopResults_segment_efforts[];
}

export function TopResults({ results }: Props) {
  return (
    // @ts-expect-error
    <Box component={Grid} container spacing={4} py={4}>
      <Grid sm={2} item>
        TOP RESULTS
      </Grid>
      <Grid sm={10} item>
        {results.map((elem) => (
          <Grid key={elem.id} container spacing={2} alignItems="center">
            <Grid item>
              <EmojiEventsOutlined htmlColor={trophyColors(elem.pr_rank)} />
            </Grid>
            <Grid item>
              <ValueTypography>{elem.name}</ValueTypography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
