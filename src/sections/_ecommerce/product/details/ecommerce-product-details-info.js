import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import EcommerceProductDetailsItem from './ecommerce-product-details-item';

// ----------------------------------------------------------------------

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
        <EcommerceProductDetailsItem
          label="Scénario"
          value={scriptWriters.map((item) => item.attributes.Name)}
        />
        <EcommerceProductDetailsItem
          label="Illustration"
          value={artists.map((item) => item.attributes.Name)}
        />
        <EcommerceProductDetailsItem
          label="Série"
          value={series?.data.attributes.Name}
          link={`${paths.library.series}/${series?.data.id}`}
        />
        <EcommerceProductDetailsItem label="Volume" value={seriesVolume} />
        <EcommerceProductDetailsItem label="Type" value={type} />
        <EcommerceProductDetailsItem label="Genre" value={genre} />
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <Stack direction="row" spacing={2}>
          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            fullWidth={!mdUp}
            size="large"
            color="primary"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
          >
            Emprunter
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
};
