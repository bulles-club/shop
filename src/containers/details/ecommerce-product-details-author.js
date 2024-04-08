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
        <>
          <Link
            component={RouterLink}
            href={`${paths.library.author}/${author.id}`}
            color="inherit"
            underline="always"
          >
            {author.name}
          </Link>
          &nbsp;
        </>
      ))}
    />
  );
}

EcommerceProductDetailsAuthor.propTypes = {
  label: PropTypes.string,
  authors: PropTypes.array,
};
