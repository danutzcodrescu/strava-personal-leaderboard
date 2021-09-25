import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const StyledGrid = styled(Grid)(({ theme }) => ({
  container: {
    padding: theme.spacing(2, 4),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
}));

export const SegmentLeaderBoardGrid = styled(Grid)(({ theme }) => ({
  // TODO check this class
  '@global': {
    '.segmentHeader': {
      backgroundColor: theme.palette.grey[300],
      fontWeight: 555,
    },
  },
  root: {
    padding: theme.spacing(1, 0.5),
  },
}));
