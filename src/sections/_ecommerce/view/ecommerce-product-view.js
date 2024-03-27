'use client';

import PropTypes from 'prop-types';
import { gql, useQuery } from '@apollo/client';

import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import { useClient } from 'src/hooks/use-client';

import { SplashScreen } from 'src/components/loading-screen';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ReviewEcommerce from '../../review/ecommerce/review-ecommerce';
import EcommerceProductDetailsInfo from '../product/details/ecommerce-product-details-info';
import EcommerceProductDetailsCarousel from '../product/details/ecommerce-product-details-carousel';
import EcommerceProductDetailsDescription from '../product/details/ecommerce-product-details-description';
import EcommerceProductDetailsSpecifications from '../product/details/ecommerce-product-details-specifications';

// ----------------------------------------------------------------------

const QUERY = gql`
  query ($id: ID!) {
    book(id: $id) {
      data {
        id
        attributes {
          Title
          Description
          SeriesVolume
          PageCount
          ISBN10
          ISBN13
          AgeGroup
          Type
          PublicationYear
          Images {
            data {
              attributes {
                url
              }
            }
          }
          Artists {
            data {
              attributes {
                Name
              }
              id
            }
          }
          Genre {
            data {
              attributes {
                Title
              }
            }
          }
          Publisher {
            data {
              attributes {
                Name
                Country
              }
              id
            }
          }
          Series {
            data {
              id
              attributes {
                Name
              }
            }
          }
          ScriptWriters {
            data {
              id
              attributes {
                Name
              }
            }
          }
        }
      }
    }
  }
`;

// ----------------------------------------------------------------------
export default function EcommerceProductView({ id }) {
  const client = useClient();
  const { loading, data } = useQuery(QUERY, { client, variables: { id } });

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Container sx={{ overflow: 'hidden' }}>
        <CustomBreadcrumbs
          links={[
            {
              name: 'Home',
            },
            {
              name: 'Mobile Phones',
            },
            {
              name: 'Apple iPhone 14',
            },
          ]}
          sx={{ my: 5 }}
        />

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid xs={12} md={5} lg={5}>
            <EcommerceProductDetailsCarousel images={data.book.data.attributes.Images.data} />
          </Grid>

          <Grid xs={12} md={7} lg={7}>
            <EcommerceProductDetailsInfo
              name={data.book.data.attributes.Title}
              // price={_mockProduct.price}
              // priceSale={_mockProduct.priceSale}
              // ratingNumber={_mockProduct.ratingNumber}
              // totalReviews={_mockProduct.totalReviews}
              scriptWriters={data.book.data.attributes.ScriptWriters.data}
              artists={data.book.data.attributes.Artists.data}
              series={data.book.data.attributes.Series}
              seriesVolume={data.book.data.attributes.SeriesVolume}
              type={data.book.data.attributes.Type}
              genre={data.book.data.attributes.Genre.data.attributes.Title}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12}>
            <EcommerceProductDetailsDescription
              description={data.book.data.attributes.Description}
            />
            <EcommerceProductDetailsSpecifications
              ageGroup={data.book.data.attributes.AgeGroup}
              pageCount={data.book.data.attributes.PageCount}
              publicationYear={data.book.data.attributes.PublicationYear}
              isbn10={data.book.data.attributes.ISBN10}
              isbn13={data.book.data.attributes.ISBN13}
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
