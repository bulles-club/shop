'use client';

import PropTypes from 'prop-types';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import useCart from 'src/hooks/use-cart';
import useBook from 'src/hooks/use-book';

import Bookshelf from 'src/components/bookshelf/bookshelf';
import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import BookDetailsInfo from './book-details-info';
import BookDetailsCarousel from './book-details-carousel';
import BookDetailsDescription from './book-details-description';
import BookDetailsSpecifications from './book-details-specifications';

// ----------------------------------------------------------------------

export default function BookView({ slug }) {
  const { loading, book } = useBook(slug);
  const { addBook } = useCart();

  const authors = book ? [...new Set([...book.scriptWriters, ...book.artists])] : [];

  const handleAddToCart = () => {
    addBook(book.id, book.name, book.images[0].url, book.scriptWriters[0].name);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Container sx={{ overflow: 'hidden' }}>
      <CustomBreadcrumbs
        links={[
          {
            name: book?.name,
          },
          {
            name: book?.name,
          },
        ]}
        sx={{ my: 5 }}
      />

      <Grid container spacing={{ xs: 5, md: 8 }}>
        <Grid xs={12} md={5} lg={5}>
          <BookDetailsCarousel images={book?.images} />
        </Grid>

        <Grid xs={12} md={7} lg={7}>
          <BookDetailsInfo book={book} onAddToCart={handleAddToCart} />
        </Grid>
      </Grid>

      <Grid container columnSpacing={{ md: 8 }}>
        <Grid xs={12}>
          <BookDetailsDescription description={book?.description} />
          <BookDetailsSpecifications book={book} />
        </Grid>
      </Grid>

      {book?.series && (
        <Bookshelf title="Dans la même série" books={book.series.books} excludeBookId={book.id} />
      )}

      {authors.map((author) => (
        <Bookshelf
          title={`Autres albums de ${author.name}`}
          books={author.scripts}
          excludeBookId={book.id}
        />
      ))}
    </Container>
  );
}

BookView.propTypes = {
  slug: PropTypes.string.isRequired,
};
