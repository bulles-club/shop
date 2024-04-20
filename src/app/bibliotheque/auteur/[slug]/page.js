import PropTypes from 'prop-types';

import AuthorView from 'src/containers/author/author-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Auteur',
  };
}

export default function AuthorPage({ params }) {
  return <AuthorView slug={params.slug} />;
}

AuthorPage.propTypes = {
  params: PropTypes.object.isRequired,
};
