import { Theme } from '@material-ui/core';
import createStyles from '@material-ui/styles/createStyles';
import { makeStyles } from '@material-ui/styles';

export const useLinkLeaderboardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      width: '100%',
      border: `1px solid ${theme.palette.grey[300]}`,
      display: 'block',
      padding: theme.spacing(1, 2),
      marginTop: theme.spacing(1),
      borderRadius: '5px',
      '&:hover': {
        textDecoration: 'underline',
        color: '#007FB6',
        backgroundColor: theme.palette.grey[100],
      },
    },
  })
);
