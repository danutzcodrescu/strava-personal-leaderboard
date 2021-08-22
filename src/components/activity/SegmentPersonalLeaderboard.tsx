import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import { calculateSpeed } from '../../toolbox/speed';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { getSegmentLeaderboards } from '../../types/getSegmentLeaderboards';
import { SegmentLeaderBoardGrid } from './styles/SegmentTable.styles';
import { useLinkLeaderboardStyles } from './styles/SegmentLeaderboard.styles';

interface Props extends getSegmentLeaderboards {
  distance: number;
  selectedId: number;
}

export function SegmentPersonalLeaderboard({
  segment_efforts,
  distance,
  selectedId,
}: Props) {
  const classes = useLinkLeaderboardStyles();
  return (
    <>
      <SegmentLeaderBoardGrid
        container
        className="segmentHeader"
        justifyContent="space-around"
      >
        <SegmentLeaderBoardGrid item md={1}></SegmentLeaderBoardGrid>
        <SegmentLeaderBoardGrid item md={3}>
          Date
        </SegmentLeaderBoardGrid>
        <SegmentLeaderBoardGrid item md={2}>
          Moving time
        </SegmentLeaderBoardGrid>
        <SegmentLeaderBoardGrid item md={2}>
          Elapsed time
        </SegmentLeaderBoardGrid>
        <SegmentLeaderBoardGrid item md={3}>
          Avg speed
        </SegmentLeaderBoardGrid>
      </SegmentLeaderBoardGrid>
      {segment_efforts.map((segment, index) => (
        <SegmentLeaderBoardGrid
          container
          key={segment.id}
          justifyContent="space-between"
          className={selectedId === segment.id ? 'segmentHeader' : ''}
        >
          <SegmentLeaderBoardGrid item md={1}>
            {index + 1}
          </SegmentLeaderBoardGrid>
          <SegmentLeaderBoardGrid item md={3}>
            {activityDateForSegment(segment.start_date_local)}
          </SegmentLeaderBoardGrid>
          <SegmentLeaderBoardGrid item md={2}>
            {convertDurationForPR(segment.moving_time)}
          </SegmentLeaderBoardGrid>
          <SegmentLeaderBoardGrid item md={2}>
            {convertDurationForPR(segment.elapsed_time)}
          </SegmentLeaderBoardGrid>
          <SegmentLeaderBoardGrid item md={3}>
            {calculateSpeed(distance, segment.elapsed_time)}
          </SegmentLeaderBoardGrid>
        </SegmentLeaderBoardGrid>
      ))}
      <Link
        component={RouterLink}
        to={`/segment/${segment_efforts[0].segment_id}`}
        classes={{ root: classes.root }}
      >
        View full leaderboard
      </Link>
    </>
  );
}
