'use client';

import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

import { useContentClient } from 'src/hooks/use-content-client';

import { seriesQuery } from 'src/services/queries';

import { SplashScreen } from 'src/components/loading-screen';

import EcommerceProductsView from './ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceSeriesView({ id }) {
  const client = useContentClient();
  const { loading, data } = useQuery(seriesQuery, { client, variables: { id } });

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <EcommerceProductsView
      productsViewMode="list"
      header={data?.serie.data.attributes.Name}
      filters={[`series:${data?.serie.data.attributes.Name}`]}
    />
  );
}

EcommerceSeriesView.propTypes = {
  id: PropTypes.string,
};
