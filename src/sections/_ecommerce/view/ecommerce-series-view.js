'use client';

import PropTypes from 'prop-types';

import useStrapiQuery from 'src/hooks/use-strapi-query';

import { GET_SERIES } from 'src/services/queries';

import { SplashScreen } from 'src/components/loading-screen';

import EcommerceProductsView from './ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceSeriesView({ id }) {
  const { loading, data } = useStrapiQuery(GET_SERIES, { id });

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
