'use client';

import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { STRAPI_URL } from 'src/config-global';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';
import { buildLinkBook } from 'src/utils/link-builder';

// ----------------------------------------------------------------------

export default function BookShelfItem({ book }) {
  return (
    <Link component={RouterLink} href={buildLinkBook(book.slug)} color="inherit" underline="none">
      <Stack>
        <Image
          src={`${STRAPI_URL}${book.coverUrl}`}
          sx={{
            mb: 2,
            borderRadius: 1.5,
            bgcolor: 'background.neutral',
            height: 175,
          }}
        />
        <TextMaxLine variant="body2" line={2} sx={{ fontWeight: 'fontWeightMedium' }}>
          {book.title}
        </TextMaxLine>
      </Stack>
    </Link>
  );
}

BookShelfItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    coverUrl: PropTypes.string,
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
};
