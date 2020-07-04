import { Grid, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledGrid = withStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 4),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
}))(Grid);
