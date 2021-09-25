import { CircularProgress, Grid } from '@mui/material';
import * as React from 'react';

export function Loading() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <CircularProgress />
    </Grid>
  );
}
