import PropTypes from 'prop-types';

import EcommerceProductView from 'src/sections/_ecommerce/view/ecommerce-product-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'E-commerce: Product',
};

export default function EcommerceProductPage({ params }) {
  return <EcommerceProductView id={params.id} />;
}

EcommerceProductPage.propTypes = {
  params: PropTypes.object.isRequired,
};
