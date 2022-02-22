import {
  MakeGenerics,
  ReactLocation,
  Route,
  createBrowserHistory,
} from 'react-location';
import { AuthGuard } from '../components/authentication/AuthGuard.component';
import { LoginCallback } from '../components/authentication/LoginCallback.component';
import { Dashboard } from '../components/dashboard/Dashboard.component';
import { Loading } from '../components/shared/Loading';
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

export const history = createBrowserHistory();

export const location = new ReactLocation<LocationGenerics>({ history });

export const routePreloadTime = 1000 * 60 * 60;

export const loaderPreload = 1000 * 60 * 60 * 10;

export const routes: Route<LocationGenerics>[] = [
  { path: 'callback', element: <LoginCallback /> },
  {
    element: <AuthGuard />,
    pendingElement: async () => <Loading />,
    loaderMaxAge: loaderPreload,
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
      return {
        isLoggedIn: true,
      };
    },
    children: [
      {
        id: 'activity',
        path: 'activity/:activityId',
        element: () =>
          import('../components/activity/Activity.component').then((mod) => (
            <mod.ActivityComponent />
          )),
      },
      {
        id: 'segment',
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
];
