import { Link, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import * as React from 'react';
import { calculateSpeed } from '../../toolbox/speed';
import {
  activityDateForSegment,
  convertDurationForPR,
} from '../../toolbox/time';
import { getSegmentLeaderboards } from '../../types/getSegmentLeaderboards';
import { SegmentLeaderBoardGrid } from './styles/SegmentTable.styles';

interface Props extends getSegmentLeaderboards {
  distance: number;
  selectedId: number;
}

export function SegmentPersonalLeaderboard({
  segment_efforts,
  distance,
  selectedId,
}: Props) {
  const theme = useTheme();
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
        sx={{
          textAlign: 'center',
          width: '100%',
          border: `1px solid ${theme.palette.grey[300]}`,
          display: 'block',
          padding: theme.spacing(1, 2),
          marginTop: 1,
          borderRadius: '5px',
          '&:hover': {
            textDecoration: 'underline',
            // TODO add this color to theme
            color: '#007FB6',
            backgroundColor: 'grey.100',
          },
        }}
      >
        View full leaderboard
      </Link>
    </>
  );
}
