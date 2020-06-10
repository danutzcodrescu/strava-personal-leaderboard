import { Avatar, Card, Grid, Typography } from '@material-ui/core';
import * as React from 'react';

export interface UserDataProps {
  profile: string;
  first_name: string;
  last_name: string;
  username: string;
}

export function UserData({
  profile,
  first_name,
  last_name,
  username,
}: UserDataProps) {
  return (
    <Card variant="outlined">
      <Grid container alignItems="center" justify="center">
        <Avatar alt={username} src={profile} />
      </Grid>

      <Typography variant="h1">
        {first_name} {last_name}
      </Typography>
    </Card>
  );
}
