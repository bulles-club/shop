'use client';

import PropTypes from 'prop-types';

import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function BookCover({ coverUrl, sx }) {
  return (
    <Image
      src={coverUrl}
      sx={{
        mb: 1,
        borderRadius: 1.5,
        bgcolor: 'background.neutral',
        height: 220,
        width: 160,
        flexShrink: 0,
        padding: 1,
        ...sx,
      }}
      objectFit="cover"
    />
  );
}

BookCover.propTypes = {
  coverUrl: PropTypes.string,
  sx: PropTypes.object,
};
