import { Box, Grid, Link } from '@material-ui/core';
import { EmojiEventsOutlined } from '@material-ui/icons';
import * as React from 'react';
import { trophyColors } from '../../toolbox/trophyColors';
import { getTopResults_segment_efforts } from '../../types/getTopResults';
import { useSegmentData } from './contexts/selectedSegment.context';

const selectResult = (id: number, segmentId: number) => (
  fn: (id: number, segmentId: number) => void
) => (e: any) => {
  e.preventDefault();
  fn(id, segmentId);
};

interface Props {
  results: getTopResults_segment_efforts[];
}

export function TopResults({ results }: Props) {
  const { setValue } = useSegmentData();
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
              <Link
                type="button"
                onClick={selectResult(elem.id, elem.segment_id)(setValue)}
              >
                {elem.name}
              </Link>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
