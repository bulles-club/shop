import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

// ----------------------------------------------------------------------

export default function useStrapiQuery(query, variables, auth = false, skip = false) {
  const { data: session } = useSession();

  const isVariablesDefined = Object.values(variables).reduce(
    (res, value) => (value ? res : false),
    true
  );

  const skipQuery = skip || !isVariablesDefined || (auth ? !session || !session.jwt : false);
  const context = auth
    ? {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      }
    : {};

  return useQuery(query, {
    variables,
    context,
    skip: skipQuery,
  });
}
