'use client';

import { transformBook } from 'src/utils/transformers';

import { GET_BOOK } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useBook(bookId) {
  const { loading, data, error } = useStrapiQuery(GET_BOOK, { id: bookId });
  return { book: transformBook(data), loading, error };
}
