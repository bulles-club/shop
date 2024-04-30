'use client';

import { transformGenre } from 'src/services/transformers';
import { GetGenre } from 'src/services/queries/genre.graphql';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useGenre(slug) {
  const { loading, data, error } = useStrapiQuery(GetGenre, { slug });
  return { genre: transformGenre(data?.genres.data[0]), loading, error };
}
