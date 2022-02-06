import { CircularProgress } from '@chakra-ui/react';
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { parse } from 'url';
import { setUserInfo } from '../../toolbox/setUserToken';

export function LoginCallback() {
  const { query } = parse(window.location.href, true);
  const { replace } = useHistory();
  React.useEffect(() => {
    fetch(
      `${process.env.REACT_APP_URL!}/.netlify/functions/authenticate-user`,
      {
        method: 'POST',
        body: JSON.stringify({ code: query.code, scope: query.scope }),
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        setUserInfo(resp);
        replace('/');
      });
  }, [query.code, query.scope, replace]);
  return <CircularProgress />;
}
