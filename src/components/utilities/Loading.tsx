import { CircularProgress, Grid } from '@material-ui/core';
import * as React from 'react';

export function Loading() {
  return (
    <Grid container alignItems="center" justifyContent="center">
      <CircularProgress />
    </Grid>
  );
}
