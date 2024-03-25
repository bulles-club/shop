import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () =>
  new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
    defaultOptions: {
      mutate: {
        errorPolicy: 'all',
      },
      query: {
        errorPolicy: 'all',
      },
    },
  });

export default createApolloClient;
