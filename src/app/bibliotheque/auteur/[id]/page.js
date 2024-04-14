import PropTypes from 'prop-types';

import AuthorView from 'src/containers/author-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return {
    title: 'Auteur',
  };
}

export default function AuthorPage({ params }) {
  return <AuthorView id={params.id} />;
}

AuthorPage.propTypes = {
  params: PropTypes.object.isRequired,
};
