'use client';

import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

import { useContentClient } from 'src/hooks/use-content-client';

import { SplashScreen } from 'src/components/loading-screen';

import EcommerceProductsView from './ecommerce-products-view';
// ----------------------------------------------------------------------

const QUERY = gql`
  query ($id: ID!) {
    serie(id: $id) {
      data {
        id
        attributes {
          Name
          Ended
          FirstPublicationYear
          Description
          Creators {
            data {
              attributes {
                Name
              }
              id
            }
          }
        }
      }
    }
  }
`;
// ----------------------------------------------------------------------

export default function EcommerceSeriesView({ id }) {
  const client = useContentClient();
  const { loading, data } = useQuery(QUERY, { client, variables: { id } });

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
