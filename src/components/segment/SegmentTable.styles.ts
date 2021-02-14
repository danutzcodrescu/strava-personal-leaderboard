import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export const useTableStyles = makeStyles((theme: Theme) => ({
  tableRow: {
    backgroundColor: theme.palette.grey[300],
  },
  headerCell: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));
