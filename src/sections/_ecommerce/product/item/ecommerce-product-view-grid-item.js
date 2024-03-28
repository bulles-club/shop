import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { STRAPI_URL } from 'src/config-global';

import Label from 'src/components/label';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import ProductRating from '../../common/product-rating';

// ----------------------------------------------------------------------

export default function EcommerceProductViewGridItem({ product, sx, ...other }) {
  const pathToProduct = `${paths.library.book}/${product.objectID}`;
  return (
    <Stack
      sx={{
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      {product.label === 'new' && (
        <Label color="info" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          NEW
        </Label>
      )}

      {product.label === 'sale' && (
        <Label color="error" sx={{ position: 'absolute', m: 1, top: 0, right: 0, zIndex: 9 }}>
          SALE
        </Label>
      )}

      <Link component={RouterLink} href={pathToProduct} color="inherit">
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Image
            src={`${STRAPI_URL}${product.images[0]}`}
            sx={{
              flexShrink: 0,
              borderRadius: 1.5,
              bgcolor: 'background.neutral',
              float: 'left',
              width: 160,
              height: 200,
              objectFit: 'cover',
            }}
          />
        </Box>
      </Link>

      <Link component={RouterLink} href={pathToProduct} color="inherit">
        <Stack spacing={0.5}>
          <TextMaxLine variant="caption" line={1} sx={{ color: 'text.disabled' }}>
            {product.category}
          </TextMaxLine>

          <TextMaxLine variant="body2" line={2} sx={{ fontWeight: 'fontWeightMedium' }}>
            {product.title}
          </TextMaxLine>

          {/* <ProductPrice price={product.price} priceSale={product.priceSale} /> */}

          <ProductRating
            ratingNumber={product.ratingNumber}
            // label={`${product.sold} sold`}
          />
        </Stack>
      </Link>
    </Stack>
  );
}

EcommerceProductViewGridItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    sold: PropTypes.number,
    label: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    coverUrl: PropTypes.string,
    priceSale: PropTypes.number,
    ratingNumber: PropTypes.number,
    objectID: PropTypes.string,
    images: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  sx: PropTypes.object,
};
