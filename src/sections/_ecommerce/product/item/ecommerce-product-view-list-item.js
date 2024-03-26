import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { STRAPI_URL } from 'src/config-global';

import Image from 'src/components/image';
import Label from 'src/components/label';
import TextMaxLine from 'src/components/text-max-line';

import ProductRating from '../../common/product-rating';

// ----------------------------------------------------------------------

export default function EcommerceProductViewListItem({ product, ...other }) {
  const pathToProduct = `${paths.eCommerce.product}/${product.objectID}`;
  return (
    <Stack
      direction="row"
      sx={{
        position: 'relative',
        '&:hover .add-to-cart': {
          opacity: 1,
        },
      }}
      {...other}
    >
      {product.label === 'new' && (
        <Label color="info" sx={{ position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9 }}>
          NEW
        </Label>
      )}

      {product.label === 'sale' && (
        <Label color="error" sx={{ position: 'absolute', m: 1, top: 0, left: 0, zIndex: 9 }}>
          SALE
        </Label>
      )}

      <Link component={RouterLink} href={pathToProduct} color="inherit">
        <Image
          src={`${STRAPI_URL}${product.images[0]}`}
          sx={{
            mr: 2,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
            float: 'left',
            width: 160,
            height: 200,
            objectFit: 'cover',
          }}
        />
      </Link>

      <Stack spacing={1}>
        <Stack spacing={0.5}>
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
            {product.category}
          </TextMaxLine>

          <Link component={RouterLink} href={pathToProduct} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {product.title}
            </TextMaxLine>
          </Link>
        </Stack>

        <ProductRating
          ratingNumber={product.ratingNumber}
          // label={`${product.sold} sold`}
        />

        <TextMaxLine variant="body2" line={3} sx={{ color: 'text.secondary' }}>
          {product.description}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}

EcommerceProductViewListItem.propTypes = {
  product: PropTypes.shape({
    caption: PropTypes.string,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    sold: PropTypes.number,
    ratingNumber: PropTypes.number,
  }),
};
