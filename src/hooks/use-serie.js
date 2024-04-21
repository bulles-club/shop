import { transformSerie } from 'src/services/transformers';

import { GET_SERIES } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useSerie(slug) {
  const { loading, data, error } = useStrapiQuery(GET_SERIES, { slug });
  return { serie: transformSerie(data?.series?.data[0]), loading, error };
}
