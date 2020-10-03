import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledPaper = withStyles(() => ({
  root: {
    width: '80%',
    maxWidth: '1000px',
  },
}))(Paper);
