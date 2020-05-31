import { CircularProgress } from '@material-ui/core';
import * as React from 'react';
import { parse } from 'url';

function setUrl(code: string) {
  const url = new URL('https://www.strava.com/api/v3/oauth/token');
  url.search = new URLSearchParams({
    client_id: process.env.REACT_APP_STRAVA_CLIENT_ID!,
    client_secret: process.env.REACT_APP_STRAVA_CLIENT_SECRET!,
    code: code,
    grant_type: 'authorization_code',
  }).toString();
  return url;
}

export function LoginCallback() {
  const { query } = parse(window.location.href, true);
  const url = setUrl(query.code as string);
  React.useEffect(() => {
    fetch(url.toString(), {
      method: 'POST',
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  });
  return <CircularProgress />;
}
