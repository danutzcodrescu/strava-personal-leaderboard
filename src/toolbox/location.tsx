import { MakeGenerics, ReactLocation, Route } from 'react-location';
import { AuthGuard } from '../components/authentication/AuthGuard.component';
import { LoginCallback } from '../components/authentication/LoginCallback.component';
import { Dashboard } from '../components/dashboard/Dashboard.component';
import { Loading } from '../components/utilities/Loading';
import { setUserInfo } from './setUserToken';

export type LocationGenerics = MakeGenerics<{
  Params: {
    activityId: string;
    segmentId: string;
  };
  Search: {
    code: string;
    scope: string;
  };
  LoaderData: {
    isLoggedIn: boolean;
  };
}>;

export const location = new ReactLocation<LocationGenerics>();

export const routePreloadTime = 1000 * 60 * 60;

export const loaderPreload = 1000 * 60 * 60 * 10;

export const routes: Route<LocationGenerics>[] = [
  {
    element: <AuthGuard />,
    pendingElement: async () => <Loading />,
    loader: async (_, { dispatch }) => {
      const user = localStorage.getItem('user');
      if (!user)
        return {
          isLoggedIn: false,
        };
      const data = await fetch(
        `${process.env.REACT_APP_URL!}/.netlify/functions/refresh_user_token`,
        {
          method: 'POST',
          body: JSON.stringify({ user }),
        }
      ).then((resp) => resp.json());
      setUserInfo(data);
      dispatch({
        type: 'maxAge',
        maxAge: loaderPreload,
      });
      return {
        isLoggedIn: true,
      };
    },
    children: [
      {
        path: 'activity/:activityId',
        element: () =>
          import('../components/activity/Activity.component').then((mod) => (
            <mod.ActivityComponent />
          )),
      },
      {
        path: 'segment/:segmentId',
        element: () =>
          import('../components/segment/SegmentComponent').then((mod) => (
            <mod.SegmentComponent />
          )),
      },
      {
        element: <Dashboard />,
        path: '/',
      },
    ],
  },
  { path: 'callback', element: <LoginCallback /> },
];
