import { transformAuthor } from 'src/utils/transformers';

import { GET_AUTHOR } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useAuthor(slug) {
  const { loading, data, error } = useStrapiQuery(GET_AUTHOR, { slug });
  return { author: transformAuthor(data?.authors?.data[0]), loading, error };
}
