import PropTypes from 'prop-types';

import GenreView from 'src/views/genre/genre-view';
import { getGenreMetadata } from 'src/services/seo';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return getGenreMetadata(params.slug);
}

export const dynamic = 'force-dynamic';

export default function GenrePage({ params }) {
  return <GenreView slug={params.slug} />;
}

GenrePage.propTypes = {
  params: PropTypes.object,
};
