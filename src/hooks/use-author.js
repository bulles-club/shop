import { transformAuthor } from 'src/services/transformers';
import { GetAuthor } from 'src/services/queries/author.graphql';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useAuthor(slug) {
  const { loading, data, error } = useStrapiQuery(GetAuthor, { slug });
  return { author: transformAuthor(data?.authors?.data[0]), loading, error };
}
