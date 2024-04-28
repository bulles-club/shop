import PropTypes from 'prop-types';

import { getAuthorMetadata } from 'src/services/seo';
import AuthorView from 'src/views/author/author-view';

// ----------------------------------------------------------------------

export async function generateMetadata({ params }) {
  return getAuthorMetadata(params.slug);
}

export default function AuthorPage({ params }) {
  return <AuthorView slug={params.slug} />;
}

AuthorPage.propTypes = {
  params: PropTypes.object.isRequired,
};
