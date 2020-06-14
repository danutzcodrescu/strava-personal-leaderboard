import { Grid, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const GridDashboard = withStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}))(Grid);
