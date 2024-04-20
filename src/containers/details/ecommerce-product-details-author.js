import PropTypes from 'prop-types';

import { Link } from '@mui/material';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import EcommerceProductDetailsItem from './ecommerce-product-details-item';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsAuthor({ label, authors }) {
  return (
    <EcommerceProductDetailsItem
      label={label}
      value={authors?.map((author) => (
        <div key={author.id}>
          <Link
            component={RouterLink}
            href={`${paths.library.author}/${author.slug}`}
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
