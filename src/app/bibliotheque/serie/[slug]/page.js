import PropTypes from 'prop-types';

import SeriesView from 'src/containers/series/series-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Sèrie',
  };
}

export default function SeriesPage({ params }) {
  return <SeriesView slug={params.slug} />;
}

SeriesPage.propTypes = {
  params: PropTypes.object.isRequired,
};
