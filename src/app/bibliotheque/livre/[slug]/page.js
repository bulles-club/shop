import PropTypes from 'prop-types';

import BookView from 'src/containers/book/book-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Livre',
  };
}

export default function BookPage({ params }) {
  return <BookView slug={params.slug} />;
}

BookPage.propTypes = {
  params: PropTypes.object.isRequired,
};
