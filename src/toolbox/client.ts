import { QueryClient } from 'react-query';
import { getUserInfo } from './setUserToken';
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      useErrorBoundary: true,
    },
  },
});

export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async () => {
    const userId = getUserInfo();
    const res = await fetch(process.env.REACT_APP_HASURA_ENDPOINT!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Hasura-Role': 'user',
        'X-Hasura-User-ID': userId!,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || 'Error..';
      throw new Error(message);
    }

    return json.data;
  };
};
