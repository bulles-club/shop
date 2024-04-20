import { transformSerie } from 'src/utils/transformers';

import { GET_SERIES } from 'src/services/queries';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useSerie(serieId) {
  const { loading, data, error } = useStrapiQuery(GET_SERIES, { id: serieId });
  return { serie: transformSerie(data?.serie.data), loading, error };
}
