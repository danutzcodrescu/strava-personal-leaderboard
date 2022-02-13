import * as React from 'react';
import { Outlet, useMatch } from 'react-location';
import { LocationGenerics } from '../../toolbox/location';
import { Login } from './Login.component';

export function AuthGuard() {
  const {
    data: { isLoggedIn },
  } = useMatch<LocationGenerics>();
  if (isLoggedIn) {
    return <Outlet />;
  }
  return <Login />;
}
