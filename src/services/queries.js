const { gql } = require('@apollo/client');

// ----------------------------------------------------------------------

export const bookQuery = gql`
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

export const seriesQuery = gql`
  query ($id: ID!) {
    serie(id: $id) {
      data {
        id
        attributes {
          Name
          Ended
          FirstPublicationYear
          Description
          Creators {
            data {
              attributes {
                Name
              }
              id
            }
          }
        }
      }
    }
  }
`;
