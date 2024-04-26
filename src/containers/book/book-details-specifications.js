import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import BookDetailsItem from './book-details-item';

// ----------------------------------------------------------------------

export default function BookDetailsSpecifications({ book }) {
  return (
    <Stack
      spacing={2}
      sx={{
        py: { xs: 5, md: 5 },
      }}
    >
      <Typography variant="h6"> Spécifications </Typography>
      <BookDetailsItem label="Age" value={book.ageGroup} />
      <BookDetailsItem label="Nombre de pages" value={book.pageCount} />
      <BookDetailsItem label="Publication" value={book.publicationYear} />
      <BookDetailsItem label="ISBN 13" value={book.isbn13} />
    </Stack>
  );
}

BookDetailsSpecifications.propTypes = {
  book: PropTypes.shape({
    ageGroup: PropTypes.string,
    pageCount: PropTypes.number,
    publicationYear: PropTypes.number,
    isbn13: PropTypes.string,
  }),
};
