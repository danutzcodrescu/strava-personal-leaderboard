import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getUserInfo } from '../toolbox/setUserToken';

const httpLink = createHttpLink({ uri: process.env.REACT_APP_HASURA_ENDPOINT });

const authLink = setContext((_, { headers }) => {
  const userId = getUserInfo();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-Hasura-Role': 'user',
      'X-Hasura-User-ID': userId,
    },
  };
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
