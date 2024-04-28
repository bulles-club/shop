import PropTypes from 'prop-types';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { RouterLink } from 'src/routes/components';

import { buildUrlBookPage } from 'src/utils/url-builder';

import Image from 'src/components/image';
import TextMaxLine from 'src/components/text-max-line';

// ----------------------------------------------------------------------

export default function BookListItem({ slug, coverUrl, title, description }) {
  return (
    <Link component={RouterLink} href={buildUrlBookPage(slug)} color="inherit" underline="none">
      <Stack direction="row" sx={{ position: 'relative' }}>
        <Image
          src={coverUrl}
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
        <Stack spacing={1}>
          <TextMaxLine variant="h6" line={1}>
            {title}
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
};
