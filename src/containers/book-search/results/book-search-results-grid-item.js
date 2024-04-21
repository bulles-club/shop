import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { buildUrlImage, buildUrlBookPage } from 'src/utils/url-builder';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function BookSearchResultsGridItem({ book, sx, ...other }) {
  const pathToProduct = buildUrlBookPage(book.slug);
  return (
    <Stack
      sx={{
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Link component={RouterLink} href={pathToProduct} color="inherit">
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Image
            src={buildUrlImage(book.images[0])}
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

      <Link component={RouterLink} href={pathToProduct} color="inherit" sx={{ p: 1 }}>
        <TextMaxLine variant="body2" line={2} sx={{ fontWeight: 'fontWeightMedium' }}>
          {book.title}
        </TextMaxLine>
      </Link>
    </Stack>
  );
}

BookSearchResultsGridItem.propTypes = {
  book: PropTypes.shape({
    slug: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    images: PropTypes.string,
  }),
  sx: PropTypes.object,
};
