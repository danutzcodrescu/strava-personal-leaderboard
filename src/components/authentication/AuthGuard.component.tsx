import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { setUserInfo } from '../../toolbox/setUserToken';

interface Props {
  children: any;
}

export function AuthGuard({ children }: Props) {
  const { replace } = useHistory();
  React.useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      fetch(
        `${
          process.env.URL! ?? process.env.REACT_APP_URL!
        }/.netlify/functions/refresh_user_token`,
        {
          method: 'POST',
          body: JSON.stringify({ user }),
        }
      )
        .then((resp) => resp.json())
        .then(setUserInfo);
    } else {
      replace('/login');
    }
  }, [replace]);
  return children;
}
