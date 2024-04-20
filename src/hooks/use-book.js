'use client';

import { transformBook } from 'src/utils/transformers';

import { GET_BOOK } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useBook(slug) {
  const { loading, data, error } = useStrapiQuery(GET_BOOK, { slug: slug });
  return { book: transformBook(data?.books.data[0]), loading, error };
}
