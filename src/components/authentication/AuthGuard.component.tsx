import * as React from 'react';
import { Outlet, useMatch } from 'react-location';
import { LocationGenerics } from '../../toolbox/location';
import { TopNav } from '../nav/TopNav';
import { Login } from './Login.component';

export function AuthGuard() {
  const {
    data: { isLoggedIn },
  } = useMatch<LocationGenerics>();
  if (isLoggedIn) {
    return (
      <>
        <TopNav />
        <Outlet />
      </>
    );
  }
  return <Login />;
}
