import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { buildUrlBookPage } from 'src/utils/url-builder';

import TextMaxLine from 'src/components/text-max-line';

import BookCover from '../book-cover/book-cover';

// ----------------------------------------------------------------------

export default function BookListItem({ slug, authors, coverUrl, title, description }) {
  return (
    <Link component={RouterLink} href={buildUrlBookPage(slug)} color="inherit" underline="none">
      <Stack direction="row" sx={{ position: 'relative' }} spacing={2}>
        <BookCover coverUrl={coverUrl} />
        <Stack spacing={1} sx={{ my: 1 }}>
          <TextMaxLine variant="h6" line={1}>
            {title}
          </TextMaxLine>
          <TextMaxLine variant="body1" line={1}>
            {authors}
          </TextMaxLine>
          <TextMaxLine variant="body2" line={4} sx={{ color: 'text.secondary' }}>
            {description}
          </TextMaxLine>
        </Stack>
      </Stack>
    </Link>
  );
}

BookListItem.propTypes = {
  slug: PropTypes.string,
  coverUrl: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  authors: PropTypes.array,
};
