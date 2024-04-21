import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BookDetailsItem from './book-details-item';

// ----------------------------------------------------------------------

export default function EcommerceProductDetailsSpecifications({
  ageGroup,
  pageCount,
  publicationYear,
  isbn10,
  isbn13,
}) {
  return (
    <Stack
      spacing={2}
      sx={{
        py: { xs: 5, md: 5 },
      }}
    >
      <Typography variant="h6"> Spécifications </Typography>
      <BookDetailsItem label="Age" value={ageGroup} />
      <BookDetailsItem label="Nombre de pages" value={pageCount} />
      <BookDetailsItem label="Publication" value={publicationYear} />
      <BookDetailsItem label="ISBN 10" value={isbn10} />
      <BookDetailsItem label="ISBN 13" value={isbn13} />
    </Stack>
  );
}

EcommerceProductDetailsSpecifications.propTypes = {
  ageGroup: PropTypes.string,
  pageCount: PropTypes.number,
  publicationYear: PropTypes.number,
  isbn10: PropTypes.string,
  isbn13: PropTypes.string,
};
