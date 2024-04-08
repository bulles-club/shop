'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import useSerie from 'src/hooks/use-serie';

import Label from 'src/components/label';
import { SplashScreen } from 'src/components/loading-screen';

import EcommerceProductsView from './ecommerce-products-view';
import EcommerceProductDetailsItem from '../product/details/ecommerce-product-details-item';

// ----------------------------------------------------------------------

export default function EcommerceSeriesView({ id }) {
  const { loading, serie } = useSerie(id);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <EcommerceProductsView
      productsViewMode="list"
      title={serie?.name}
      header={
        <>
          <EcommerceProductDetailsItem
            label={serie?.creators.length > 1 ? 'Créateur(s)' : 'Créateur'}
            value={serie?.creators.map((item) => item.name)}
          />
          <EcommerceProductDetailsItem
            label="Première publication"
            value={serie?.firstPublicationYear}
          />
          <EcommerceProductDetailsItem
            label="Statut"
            value={
              serie?.ended ? (
                <Label color="warning">Terminée</Label>
              ) : (
                <Label color="success">En cours</Label>
              )
            }
          />
          <BlocksRenderer content={serie.description} />
        </>
      }
      filters={[`series:${serie?.name}`]}
      paging={false}
    />
  );
}

EcommerceSeriesView.propTypes = {
  id: PropTypes.string,
};
