import { Box, Grid, Link, Skeleton } from '@chakra-ui/react';
import * as React from 'react';
import { Link as RouterLink } from 'react-location';
import { routePreloadTime } from '../../toolbox/location';
import { getUserInfo } from '../../toolbox/setUserToken';
import { calculateSpeed } from '../../toolbox/speed';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { useGetSegmentLeaderboardsQuery } from '../../types/graphql';

interface Props {
  distance: number;
  selectedId: number;
}

export function SegmentPersonalLeaderboard({ distance, selectedId }: Props) {
  const { data, isLoading } = useGetSegmentLeaderboardsQuery({
    segmentId: selectedId,
    userId: parseInt(getUserInfo() as string),
  });
  if (isLoading) {
    return (
      <>
        {Array.from(Array(10).keys()).map((val) => (
          <Skeleton key={val} spacing="1" />
        ))}
      </>
    );
  }
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
      {data?.segment_efforts.map((segment, index) => (
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
        to={`/segment/${data?.segment_efforts[0].segment_id}`}
        textAlign="center"
        width="100%"
        border="1px solid"
        borderColor="gray.300"
        display="block"
        paddingX={2}
        paddingY={4}
        mt={2}
        preload={routePreloadTime}
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
