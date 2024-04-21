'use client';

import PropTypes from 'prop-types';

import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import BookDetailsItem from './book-details-item';
import EcommerceProductDetailsAuthor from './ecommerce-product-details-author';
import { buildLinkSeries } from 'src/utils/link-builder';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsInfo({
  name,
  ratingNumber,
  totalReviews,
  scriptWriters,
  artists,
  series,
  seriesVolume,
  type,
  genre,
  onAddToCart,
}) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {name} </Typography>

        <Stack spacing={0.5} direction="row" alignItems="center">
          <Rating size="small" value={ratingNumber} readOnly precision={0.5} />

          <Typography variant="caption" sx={{ color: 'text.disabled' }}>
            ({totalReviews} reviews)
          </Typography>
        </Stack>
      </Stack>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <EcommerceProductDetailsAuthor label="Scénario" authors={scriptWriters} />
        <EcommerceProductDetailsAuthor label="Illustration" authors={artists} />
        <BookDetailsItem
          label="Série"
          value={
            <Link
              component={RouterLink}
              href={buildLinkSeries(series?.slug)}
              color="inherit"
              underline="always"
            >
              {series?.name}
            </Link>
          }
        />
        <BookDetailsItem label="Volume" value={seriesVolume} />
        <BookDetailsItem label="Type" value={type} />
        <BookDetailsItem label="Genre" value={genre} />
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <Stack direction="row" spacing={2}>
          <Button
            // component={RouterLink}
            // href={paths.eCommerce.cart}
            fullWidth={!mdUp}
            size="large"
            color="primary"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
            onClick={() => {
              onAddToCart();
            }}
          >
            Ajouter
          </Button>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            fullWidth={!mdUp}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:favorite" />}
          >
            Sauvegarder
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

EcommerceProductDetailsInfo.propTypes = {
  name: PropTypes.string,
  // price: PropTypes.number,
  // priceSale: PropTypes.number,
  ratingNumber: PropTypes.number,
  totalReviews: PropTypes.number,
  scriptWriters: PropTypes.array,
  artists: PropTypes.array,
  series: PropTypes.object,
  seriesVolume: PropTypes.number,
  type: PropTypes.string,
  genre: PropTypes.string,
  onAddToCart: PropTypes.func,
};
