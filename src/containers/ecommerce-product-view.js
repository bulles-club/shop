'use client';

import PropTypes from 'prop-types';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import useCart from 'src/hooks/use-cart';
import useBook from 'src/hooks/use-book';

import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ReviewEcommerce from '../sections/review/ecommerce/review-ecommerce';
import EcommerceProductDetailsInfo from './details/ecommerce-product-details-info';
import EcommerceProductDetailsCarousel from './details/ecommerce-product-details-carousel';
import EcommerceProductDetailsDescription from './details/ecommerce-product-details-description';
import EcommerceProductDetailsSpecifications from './details/ecommerce-product-details-specifications';

// ----------------------------------------------------------------------

export default function EcommerceProductView({ id }) {
  const { loading, book } = useBook(id);
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
            <EcommerceProductDetailsCarousel images={book?.images} />
          </Grid>

          <Grid xs={12} md={7} lg={7}>
            <EcommerceProductDetailsInfo
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
            <EcommerceProductDetailsDescription description={book?.description} />
            <EcommerceProductDetailsSpecifications
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

EcommerceProductView.propTypes = {
  id: PropTypes.string.isRequired,
};
