'use client';

import { transformBook } from 'src/services/transformers';
import { GetBook } from 'src/services/queries/book.graphql';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useBook(slug) {
  const { loading, data, error } = useStrapiQuery(GetBook, { slug });
  return { book: transformBook(data?.books.data[0]), loading, error };
}
