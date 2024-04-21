import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { STRAPI_URL } from 'src/config-global';

import Label from 'src/components/label';
import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

import ProductRating from 'src/sections/_ecommerce/common/product-rating';
import { buildLinkBook } from 'src/utils/link-builder';

// ----------------------------------------------------------------------

export default function BookSearchResultsGridItem({ product, sx, ...other }) {
  const pathToProduct = buildLinkBook(product.slug);
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

          <ProductRating ratingNumber={product.ratingNumber} />
        </Stack>
      </Link>
    </Stack>
  );
}

BookSearchResultsGridItem.propTypes = {
  product: PropTypes.shape({
    slug: PropTypes.string,
    label: PropTypes.string,
    category: PropTypes.string,
    priceSale: PropTypes.number,
    ratingNumber: PropTypes.number,
    objectID: PropTypes.string,
    title: PropTypes.string,
  }),
  sx: PropTypes.object,
};