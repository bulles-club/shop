'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import useSerie from 'src/hooks/use-serie';

import EcommerceProductsView from 'src/containers/ecommerce-products-view';
import EcommerceProductDetailsItem from 'src/containers/details/ecommerce-product-details-item';
import EcommerceProductDetailsAuthor from 'src/containers/details/ecommerce-product-details-author';

import Label from 'src/components/label';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Serie',
};

export default function SeriesPage({ params }) {
  const { loading, serie } = useSerie(params.id);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <EcommerceProductsView
      productsViewMode="list"
      title={serie?.name}
      header={
        <>
          <EcommerceProductDetailsAuthor
            label={serie?.creators.length > 1 ? 'Créateur(s)' : 'Créateur'}
            authors={serie?.creators}
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

SeriesPage.propTypes = {
  params: PropTypes.object.isRequired,
};
