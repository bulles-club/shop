'use client';

import PropTypes from 'prop-types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

import useSerie from 'src/hooks/use-serie';

import BookSearchView from 'src/containers/book-search/book-search-view';
import BookDetailsItem from 'src/containers/book/book-details-item';
import EcommerceProductDetailsAuthor from 'src/containers/book/ecommerce-product-details-author';

import Label from 'src/components/label';
import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export default function SeriesView({ slug }) {
  const { loading, serie } = useSerie(slug);

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <BookSearchView
      productsViewMode="list"
      title={serie?.name}
      header={
        <>
          <EcommerceProductDetailsAuthor
            label={serie?.creators.length > 1 ? 'Créateur(s)' : 'Créateur'}
            authors={serie?.creators}
          />
          <BookDetailsItem
            label="Première publication"
            value={serie?.firstPublicationYear}
          />
          <BookDetailsItem
            label="Statut"
            value={
              serie?.ended ? (
                <Label color="warning">Terminée</Label>
              ) : (
                <Label color="success">En cours</Label>
              )
            }
          />
          <BlocksRenderer content={serie? .description} />
        </>
      }
      filters={[`series:${serie?.name}`]}
      paging={false}
    />
  );
}

SeriesView.propTypes = {
  slug: PropTypes.object.isRequired,
};
