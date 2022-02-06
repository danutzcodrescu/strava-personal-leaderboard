import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import { calculateSpeed } from '../../toolbox/speed';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { getSegmentLeaderboards } from '../../types/getSegmentLeaderboards';
import { Box, Grid, Link } from '@chakra-ui/react';

interface Props extends getSegmentLeaderboards {
  distance: number;
  selectedId: number;
}

export function SegmentPersonalLeaderboard({
  segment_efforts,
  distance,
  selectedId,
}: Props) {
  return (
    <Box role="table">
      <Grid
        gridTemplateColumns={'1fr 3fr 2fr 2fr 3fr'}
        justifyContent="space-around"
        role="rowheader"
        bgColor="gray.100"
        py={1}
      >
        <Box role="columnheader" gridColumnStart={2}>
          Date
        </Box>
        <Box role="columnheader">Moving time</Box>
        <Box role="columnheader">Elapsed time</Box>
        <Box role="columnheader">Avg speed</Box>
      </Grid>
      {segment_efforts.map((segment, index) => (
        <Grid
          key={segment.id}
          gridTemplateColumns="1fr 3fr 2fr 2fr 3fr"
          role="row"
          bgColor={segment.id === selectedId ? 'gray.100' : 'transparent'}
        >
          <Box role="cell" textAlign="center">
            {index + 1}
          </Box>
          <Box role="cell">
            {activityDateForSegment(segment.start_date_local)}
          </Box>
          <Box role="cell">{convertDurationForPR(segment.moving_time)}</Box>
          <Box role="cell">{convertDurationForPR(segment.elapsed_time)}</Box>
          <Box role="cell">
            {calculateSpeed(distance, segment.elapsed_time)}
          </Box>
        </Grid>
      ))}
      <Link
        as={RouterLink}
        to={`/segment/${segment_efforts[0].segment_id}`}
        textAlign="center"
        width="100%"
        border="1px solid"
        borderColor="gray.300"
        display="block"
        paddingX={2}
        paddingY={4}
        mt={2}
        fontWeight="bold"
        borderRadius="5px"
        _hover={{
          textDecoration: 'underline',

          color: 'blue.600',
          backgroundColor: 'grey.100',
        }}
      >
        View full leaderboard
      </Link>
    </Box>
  );
}
