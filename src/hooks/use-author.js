import { transformAuthor } from 'src/utils/transformers';

import { GET_AUTHOR } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useAuthor(authorId) {
  const { loading, data, error } = useStrapiQuery(GET_AUTHOR, { id: authorId });
  return { author: transformAuthor(data), loading, error };
}
