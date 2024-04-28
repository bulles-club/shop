import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Image from 'src/components/image';
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function CartItem({ id, coverUrl, name, author, wishlist, onRemoveItem }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        py: 3,
        borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
      }}
    >
      <Stack direction="row" alignItems="center" flexGrow={1}>
        <Image
          src={coverUrl}
          sx={{
            width: 80,
            height: 80,
            flexShrink: 0,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
          }}
        />

        <Stack spacing={0.5} sx={{ p: 2 }}>
          {/* <Link component={RouterLink} href={`${paths.library.book}/${id}`} color="inherit">
            <TextMaxLine variant="h6" line={1}>
              {name}
            </TextMaxLine>
          </Link>
          <Link
            component={RouterLink}
            href={`${paths.library.book}/${id}`}
            // color="inherit"
            underline="none"
          >
            <Typography variant="subtitle2">{name}</Typography>
          </Link> */}
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {author}
          </Typography>
        </Stack>
      </Stack>

      <IconButton onClick={() => onRemoveItem(id)}>
        <Iconify icon="carbon:trash-can" />
      </IconButton>

      {wishlist && (
        <IconButton>
          <Iconify icon="carbon:shopping-cart-plus" />
        </IconButton>
      )}
    </Stack>
  );
}

CartItem.propTypes = {
  id: PropTypes.string,
  coverUrl: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  wishlist: PropTypes.bool,
  onRemoveItem: PropTypes.func,
};
