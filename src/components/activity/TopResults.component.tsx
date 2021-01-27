import { Box, Grid, Link } from '@material-ui/core';
import { EmojiEventsOutlined } from '@material-ui/icons';
import * as React from 'react';
import { trophyColors } from '../../toolbox/trophyColors';
import { getTopResults_segment_efforts } from '../../types/getTopResults';
import {
  SetSegmentPayload,
  useSegmentStore,
  SetSegmentAction,
} from './store/segment.store';

const selectResult = (obj: SetSegmentPayload) => (
  fn: (action: SetSegmentAction) => void
) => (e: any) => {
  e.preventDefault();
  fn({ type: 'setSegment', payload: obj });
};

interface Props {
  results: getTopResults_segment_efforts[];
}

export function TopResults({ results }: Props) {
  const dispatch = useSegmentStore((state) => state.dispatch);
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
                onClick={selectResult({
                  id: elem.id,
                  segmentId: elem.segment_id,
                })(dispatch)}
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
