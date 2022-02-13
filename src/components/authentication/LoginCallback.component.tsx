import { Center } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate, useSearch } from 'react-location';
import { LocationGenerics } from '../../toolbox/location';
import { setUserInfo } from '../../toolbox/setUserToken';
import { Loading } from '../utilities/Loading';

export function LoginCallback() {
  const { code, scope } = useSearch<LocationGenerics>();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (code && scope) {
      fetch(
        `${process.env.REACT_APP_URL!}/.netlify/functions/authenticate-user`,
        {
          method: 'POST',
          body: JSON.stringify({ code, scope }),
        }
      )
        .then((resp) => resp.json())
        .then((resp) => {
          setUserInfo(resp);
          navigate({ to: '/', replace: true });
        });
    }
  }, [code, scope, navigate]);
  return (
    <Center w="100vw" h="100vh">
      <Loading />
    </Center>
  );
}
