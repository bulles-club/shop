import PropTypes from 'prop-types';

import { Link } from '@mui/material';

import { RouterLink } from 'src/routes/components';

import { buildUrlAuthorPage } from 'src/utils/url-builder';

import BookDetailsItem from './book-details-item';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsAuthor({ label, authors }) {
  return (
    <BookDetailsItem
      label={label}
      value={authors?.map((author) => (
        <div key={author.id}>
          <Link
            component={RouterLink}
            href={buildUrlAuthorPage(author.slug)}
            color="inherit"
            underline="always"
          >
            {author.name}
          </Link>
          &nbsp;
        </div>
      ))}
    />
  );
}

EcommerceProductDetailsAuthor.propTypes = {
  label: PropTypes.string,
  authors: PropTypes.array,
};
