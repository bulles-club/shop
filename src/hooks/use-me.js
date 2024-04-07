import { ME } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useMe() {
  const { data: { me } = {} } = useStrapiQuery(ME, {}, true);
  return me;
}
