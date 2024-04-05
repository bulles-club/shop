import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

import { useContentClient } from 'src/hooks/use-content-client';

// ----------------------------------------------------------------------

export default function useAuthorizedQuery(query, options) {
  const { data: session } = useSession();
  const client = useContentClient();
  return useQuery(query, {
    client,
    ...options,
    context: {
      headers: {
        Authorization: `Bearer ${session?.jwt}`,
      },
      skip: !session,
    },
  });
}
