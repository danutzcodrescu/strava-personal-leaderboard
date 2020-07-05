import { Grid, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledGrid = withStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 4),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
}))(Grid);

export const SegmentLeaderBoardGrid = withStyles((theme: Theme) => ({
  '@global': {
    '.segmentHeader': {
      backgroundColor: theme.palette.grey[300],
      fontWeight: 555,
    },
  },
  root: {
    padding: theme.spacing(1, 0.5),
  },
}))(Grid);
