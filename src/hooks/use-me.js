import { Me } from 'src/services/queries/user.graphql';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useMe() {
  const { data: { me } = {} } = useStrapiQuery(Me, {}, true);
  return me;
}
