'use client';

import { transformBook } from 'src/services/transformers';

import { GET_BOOK } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useBook(slug) {
  const { loading, data, error } = useStrapiQuery(GET_BOOK, { slug });
  return { book: transformBook(data?.books.data[0]), loading, error };
}
