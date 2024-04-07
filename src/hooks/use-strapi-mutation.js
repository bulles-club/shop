import { useSession } from 'next-auth/react';
import { useMutation } from '@apollo/client';

// ----------------------------------------------------------------------

export default function useStrapiMutation(query) {
  const { data: session } = useSession();

  return useMutation(query, {
    context: {
      headers: {
        Authorization: `Bearer ${session?.jwt}`,
      },
    },
  });
}
