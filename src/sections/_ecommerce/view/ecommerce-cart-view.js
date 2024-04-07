'use client';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import useCart from 'src/hooks/use-cart';

import Iconify from 'src/components/iconify';

import EcommerceCartList from '../cart/ecommerce-cart-list';
import EcommerceCartSummary from '../cart/ecommerce-cart-summary';

// ----------------------------------------------------------------------

export default function EcommerceCartView() {
  const { cart, removeBook } = useCart();

  const handleRemoveFromCart = (id) => {
    removeBook(id);
  };

  return (
    <Container
      sx={{
        overflow: 'hidden',
        pt: 5,
        pb: { xs: 5, md: 10 },
      }}
    >
      <Typography variant="h3" sx={{ mb: 5 }}>
        Panier
      </Typography>

      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={8}>
          <EcommerceCartList
            id={cart?.id}
            products={cart?.books}
            onRemoveItem={handleRemoveFromCart}
          />
        </Grid>

        <Grid xs={12} md={4}>
          <EcommerceCartSummary
            tax={7}
            total={357.09}
            subtotal={89.09}
            shipping={55.47}
            discount={16.17}
          />
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.library.root}
        color="inherit"
        startIcon={<Iconify icon="carbon:chevron-left" />}
        sx={{ mt: 3 }}
      >
        Retour à la bibliothèque
      </Button>
    </Container>
  );
}
