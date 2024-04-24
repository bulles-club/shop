import PropTypes from 'prop-types';

import { getSeriesMetadata } from 'src/services/seo';
import SeriesView from 'src/containers/series/series-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return getSeriesMetadata(params.slug);
}

export default function SeriesPage({ params }) {
  return <SeriesView slug={params.slug} />;
}

SeriesPage.propTypes = {
  params: PropTypes.object.isRequired,
};
