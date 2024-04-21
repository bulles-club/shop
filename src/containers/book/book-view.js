'use client';

import PropTypes from 'prop-types';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import useCart from 'src/hooks/use-cart';
import useBook from 'src/hooks/use-book';

import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import BookDetailsInfo from './book-details-info';
import BookDetailsCarousel from './book-details-carousel';
import BookDetailsDescription from './book-details-description';
import BookDetailsSpecifications from './book-details-specifications';
import ReviewEcommerce from '../../sections/review/ecommerce/review-ecommerce';

// ----------------------------------------------------------------------

export default function BookView({ slug }) {
  const { loading, book } = useBook(slug);
  const { addBook } = useCart();

  const handleAddToCart = () => {
    addBook(book.id, book.name, book.images[0].url, book.scriptWriters[0].name);
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
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
            <BookDetailsInfo
              name={book?.name}
              // ratingNumber={_mockProduct.ratingNumber}
              // totalReviews={_mockProduct.totalReviews}
              scriptWriters={book?.scriptWriters}
              artists={book?.artists}
              series={book?.series}
              seriesVolume={book?.seriesVolume}
              type={book?.type}
              genre={book?.genre}
              onAddToCart={handleAddToCart}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12}>
            <BookDetailsDescription description={book?.description} />
            <BookDetailsSpecifications
              ageGroup={book?.ageGroup}
              pageCount={book?.pageCount}
              publicationYear={book?.publicationYear}
              isbn10={book?.isbn10}
              isbn13={book?.isbn13}
            />
          </Grid>
        </Grid>
      </Container>

      <ReviewEcommerce />
    </>
  );
}

BookView.propTypes = {
  slug: PropTypes.string.isRequired,
};
