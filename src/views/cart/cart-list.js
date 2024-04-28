import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';

import Scrollbar from 'src/components/scrollbar';

import CartItem from './cart-item';

// ----------------------------------------------------------------------

export default function CartList({ id, products, wishlist = false, onRemoveItem }) {
  return (
    <Scrollbar>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          py: 2,
          typography: 'subtitle2',
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Stack sx={{ width: 36 }} />
        {wishlist && <Stack sx={{ width: 36 }} />}
      </Stack>

      {products?.map((product) => (
        <CartItem
          key={product.id}
          id={product.id}
          coverUrl={product.coverUrl}
          name={product.name}
          author={product.author}
          wishlist={wishlist}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </Scrollbar>
  );
}

CartList.propTypes = {
  id: PropTypes.string,
  products: PropTypes.array,
  wishlist: PropTypes.bool,
  onRemoveItem: PropTypes.func,
};
