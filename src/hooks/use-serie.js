import { transformSerie } from 'src/services/transformers';
import { GetSeries } from 'src/services/queries/series.graphql';

import useStrapiQuery from './use-strapi-query';

// ----------------------------------------------------------------------

export default function useSerie(slug) {
  const { loading, data, error } = useStrapiQuery(GetSeries, { slug });
  return { serie: transformSerie(data?.series?.data[0]), loading, error };
}
