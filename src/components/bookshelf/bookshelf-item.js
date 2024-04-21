'use client';

import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { buildUrlBookPage } from 'src/utils/url-builder';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function BookshelfItem({ book }) {
  return (
    <Link
      component={RouterLink}
      href={buildUrlBookPage(book.slug)}
      color="inherit"
      underline="none"
    >
      <Stack>
        <Image
          src={book.coverUrl}
          sx={{
            mb: 2,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
            height: 175,
          }}
        />
        <TextMaxLine variant="body2" line={2} sx={{ fontWeight: 'fontWeightMedium' }}>
          {book.name}
        </TextMaxLine>
      </Stack>
    </Link>
  );
}

BookshelfItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    coverUrl: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
  }),
};
