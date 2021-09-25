import { Grid } from '@mui/material';
import { styled } from '@mui/system';

export const GridDashboard = styled(Grid)(({ theme }) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));
