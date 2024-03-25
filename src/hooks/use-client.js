import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import { STRAPI_URL } from 'src/config-global';

export const useClient = () => {
  const client = useMemo(
    () =>
      new ApolloClient({
        uri: `${STRAPI_URL}/graphql`,
        cache: new InMemoryCache(),
        defaultOptions: {
          mutate: {
            errorPolicy: 'all',
          },
          query: {
            errorPolicy: 'all',
          },
        },
      }),
    []
  );
  return client;
};
