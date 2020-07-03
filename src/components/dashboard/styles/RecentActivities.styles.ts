import { Theme, Typography } from '@material-ui/core';
import { createStyles, makeStyles, withStyles } from '@material-ui/styles';

export const useRecentActivities = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      padding: theme.spacing(4, 3),
      marginBottom: theme.spacing(2),
    },
    map: {
      height: '270px',
    },
  })
);

export const ValueTypography = withStyles(() => ({
  root: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
}))(Typography);
