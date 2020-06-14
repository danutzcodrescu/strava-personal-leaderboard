import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: '70px',
      height: '70px',
      marginBlockEnd: theme.spacing(1.5) + 'px',
    },
    username: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
    },

    cardRoot: {
      padding: theme.spacing(1.5),
    },

    icon: {
      marginRight: theme.spacing(1),
    },
  })
);
