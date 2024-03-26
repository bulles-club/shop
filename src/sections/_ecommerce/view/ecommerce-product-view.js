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
                Bio
                Photo {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
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
        }
      }
    }
  }
`;

export default function EcommerceProductView({ id }) {
  const client = useClient();
  const { loading, error, data } = useQuery(QUERY, { client, variables: { id } });

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
              caption={data.book.data.attributes.Description}
              // priceSale={_mockProduct.priceSale}
              // ratingNumber={_mockProduct.ratingNumber}
              // totalReviews={_mockProduct.totalReviews}
            />
          </Grid>
        </Grid>

        <Grid container columnSpacing={{ md: 8 }}>
          <Grid xs={12} md={6} lg={7}>
            <EcommerceProductDetailsDescription
              // description={data.book.data.attributes}
              specifications={[
                { label: 'Category', value: 'Mobile' },
                { label: 'Manufacturer', value: 'Apple' },
                { label: 'Warranty', value: '12 Months' },
                { label: 'Serial number', value: '358607726380311' },
                { label: 'Ships From', value: 'United States' },
              ]}
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
