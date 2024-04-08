const { gql } = require('@apollo/client');

// ----------------------------------------------------------------------

export const GET_BOOK = gql`
  query GetBook($id: ID!) {
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

export const GET_SERIES = gql`
  query GetSeries($id: ID!) {
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

export const ME = gql`
  query Me {
    me {
      id
      username
      email
      confirmed
      blocked
      firstname
      lastname
      dateofbirth
      addresses
      phonenumber
      cart {
        data {
          id
        }
      }
    }
  }
`;

export const GET_CART = gql`
  query GetCart($id: ID!) {
    cart(id: $id) {
      data {
        attributes {
          books {
            data {
              id
              attributes {
                Title
                Images {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                ScriptWriters {
                  data {
                    attributes {
                      Name
                    }
                  }
                }
              }
            }
          }
        }
        id
      }
    }
  }
`;

export const SET_CART = gql`
  mutation UpdateCart($id: ID!, $books: [ID!]!) {
    updateCart(data: { books: $books }, id: $id) {
      data {
        id
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  query GetAuthor($id: ID!) {
    author(id: $id) {
      data {
        id
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
  }
`;
