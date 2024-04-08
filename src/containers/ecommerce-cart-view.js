'use client';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import useCart from 'src/hooks/use-cart';

import Iconify from 'src/components/iconify';

import EcommerceCartList from '../sections/_ecommerce/cart/ecommerce-cart-list';

// ----------------------------------------------------------------------

export default function EcommerceCartView() {
  const { books, removeBook } = useCart();

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
          <EcommerceCartList products={books} onRemoveItem={handleRemoveFromCart} />
        </Grid>

        <Grid xs={12} md={4}>
          <Button
            sx={{ mt: 4 }}
            component={RouterLink}
            href={paths.eCommerce.checkout}
            size="large"
            fullWidth
            variant="contained"
            color="inherit"
            disabled={books.length === 0}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>

      <Button
        component={RouterLink}
        href={paths.library.root}
        color="inherit"
        startIcon={<Iconify icon="carbon:chevron-left" />}
        sx={{ mt: 3 }}
      >
        Bibliothèque
      </Button>
    </Container>
  );
}
