import { Button } from '@mui/material';
import * as React from 'react';

function getAuthorization() {
  window.location.href = `https://www.strava.com/oauth/authorize?client_id=${process.env.REACT_APP_STRAVA_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_URL}/callback&response_type=code&scope=activity:read_all,profile:read_all`;
}

export function Login() {
  return (
    <Button variant="contained" color="primary" onClick={getAuthorization}>
      Login
    </Button>
  );
}
