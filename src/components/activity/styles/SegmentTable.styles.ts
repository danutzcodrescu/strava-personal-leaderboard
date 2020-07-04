import { TableCell } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

export const StyledTableCell = withStyles(() => ({
  head: {
    fontWeight: 750,
  },
}))(TableCell);
