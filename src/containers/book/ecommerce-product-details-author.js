import PropTypes from 'prop-types';

import { Link } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import BookDetailsItem from './book-details-item';
import { buildLinkAuthor } from 'src/utils/link-builder';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsAuthor({ label, authors }) {
  return (
    <BookDetailsItem
      label={label}
      value={authors?.map((author) => (
        <div key={author.id}>
          <Link
            component={RouterLink}
            href={buildLinkAuthor(author.slug)}
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
