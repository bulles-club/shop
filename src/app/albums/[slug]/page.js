import PropTypes from 'prop-types';

import { getBookMetadata } from 'src/services/seo';
import BookView from 'src/views/book/book-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return getBookMetadata(params.slug);
}

export default function BookPage({ params }) {
  return <BookView slug={params.slug} />;
}

BookPage.propTypes = {
  params: PropTypes.object.isRequired,
};
