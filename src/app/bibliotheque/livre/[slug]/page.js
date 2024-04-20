import PropTypes from 'prop-types';

import EcommerceProductView from 'src/containers/ecommerce-product-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Livre',
  };
}

export default function BookPage({ params }) {
  return <EcommerceProductView slug={params.slug} />;
}

BookPage.propTypes = {
  params: PropTypes.object.isRequired,
};
