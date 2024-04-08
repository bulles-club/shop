'use client';

import PropTypes from 'prop-types';

import useSerie from 'src/hooks/use-serie';

import { SplashScreen } from 'src/components/loading-screen';

import EcommerceProductsView from './ecommerce-products-view';

// ----------------------------------------------------------------------

export default function EcommerceSeriesView({ id }) {
  const { loading, serie } = useSerie(id);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <EcommerceProductsView
      productsViewMode="list"
      header={serie.name}
      filters={[`series:${serie?.name}`]}
    />
  );
}

EcommerceSeriesView.propTypes = {
  id: PropTypes.string,
};
