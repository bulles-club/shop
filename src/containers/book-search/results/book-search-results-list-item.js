import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { buildUrlImage, buildUrlBookPage } from 'src/utils/url-builder';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function BookSearchResultsListItem({ book, ...other }) {
  const pathToProduct = buildUrlBookPage(book.slug);
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
      <Link component={RouterLink} href={pathToProduct} color="inherit">
        <Image
          src={buildUrlImage(book.images[0])}
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
        <Link component={RouterLink} href={pathToProduct} color="inherit">
          <TextMaxLine variant="h6" line={1}>
            {book.title}
          </TextMaxLine>
        </Link>

        <TextMaxLine variant="body2" line={3} sx={{ color: 'text.secondary' }}>
          {book.description}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}

BookSearchResultsListItem.propTypes = {
  book: PropTypes.shape({
    slug: PropTypes.string,
    images: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};
