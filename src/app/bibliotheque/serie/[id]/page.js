import PropTypes from 'prop-types';

import EcommerceSeriesView from 'src/sections/_ecommerce/view/ecommerce-series-view';
// ----------------------------------------------------------------------

export const metadata = {
  title: 'Serie',
};

export default function SeriesPage({ params }) {
  return <EcommerceSeriesView id={params.id} />;
}

SeriesPage.propTypes = {
  params: PropTypes.object.isRequired,
};
