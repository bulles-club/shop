'use client';

import PropTypes from 'prop-types';

import { Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { buildUrlGenrePage, buildUrlSeriesPage } from 'src/utils/url-builder';

import Label from 'src/components/label';
import Iconify from 'src/components/iconify';

import BookDetailsItem from './book-details-item';
import BookDetailsAuthor from './book-details-author';

// ----------------------------------------------------------------------

export default function BookDetailsInfo({ book, onAddToCart }) {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Label color="success" sx={{ mb: 3 }}>
        In Stock
      </Label>

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography variant="h4"> {book.title} </Typography>
      </Stack>

      <Stack spacing={2} sx={{ mb: 3 }}>
        <BookDetailsItem label="Editeur" value={book.publisher.name} />
        <BookDetailsAuthor label="Scénario" authors={book.scriptWriters} />
        <BookDetailsAuthor label="Illustration" authors={book.artists} />
        {!book.isOneShot && (
          <>
            <BookDetailsItem
              label="Série"
              value={
                <Link
                  component={RouterLink}
                  href={buildUrlSeriesPage(book.series.slug)}
                  color="inherit"
                  underline="always"
                >
                  {book.series.name}
                </Link>
              }
            />
            <BookDetailsItem label="Volume" value={book.seriesVolume} />
          </>
        )}

        <BookDetailsItem label="Type" value={book.type} />
        <BookDetailsItem
          label="Genre"
          value={
            <Link
              component={RouterLink}
              href={buildUrlGenrePage(book.genre.slug)}
              color="inherit"
              underline="always"
            >
              {book.genre.title}
            </Link>
          }
        />
      </Stack>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} alignItems={{ md: 'center' }}>
        <Stack direction="row" spacing={2}>
          <Button
            fullWidth={!mdUp}
            size="large"
            color="primary"
            variant="contained"
            startIcon={<Iconify icon="carbon:shopping-cart-plus" />}
            onClick={() => {
              onAddToCart();
            }}
          >
            Ajouter
          </Button>

          <Button
            component={RouterLink}
            href={paths.eCommerce.cart}
            fullWidth={!mdUp}
            size="large"
            color="inherit"
            variant="contained"
            startIcon={<Iconify icon="carbon:favorite" />}
          >
            Sauvegarder
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

BookDetailsInfo.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    scriptWriters: PropTypes.array,
    artists: PropTypes.array,
    isOneShot: PropTypes.bool,
    series: PropTypes.object,
    seriesVolume: PropTypes.number,
    type: PropTypes.string,
    genre: PropTypes.string,
    publisher: PropTypes.object,
  }),
  onAddToCart: PropTypes.func,
};
