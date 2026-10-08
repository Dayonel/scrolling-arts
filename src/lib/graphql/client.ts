import { ApolloLink, HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';
import { ErrorLink } from '@apollo/client/link/error';
import {
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
} from '@apollo/client/errors';
import { get } from '@vercel/global-config';
import { SetContextLink } from '@apollo/client/link/context';

const read = async (key: string) =>
  (process.env.GLOBAL_CONFIG && (await get<string>(key))) ||
  process.env[key] ||
  '';

const authLink = new SetContextLink(async ({ headers }) => ({
  headers: {
    ...headers,
    'x-access-token': await read('ARTSY_ACCESS_TOKEN'),
    'x-user-id': await read('ARTSY_USER_ID'),
  },
}));

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([errorLink, authLink, httpLink]),
  });
});

const httpLink = new HttpLink({
  uri: 'https://metaphysics-production.artsy.net/v2',
});

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  } else if (CombinedProtocolErrors.is(error)) {
    error.errors.forEach(({ message, extensions }) =>
      console.log(
        `[Protocol error]: Message: ${message}, Extensions: ${JSON.stringify(
          extensions,
        )}`,
      ),
    );
  } else {
    console.error(`[Network error]: ${error}`);
  }
});
