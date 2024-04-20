const { gql } = require('@apollo/client');

// ----------------------------------------------------------------------

export const GET_BOOK = gql`
  query GetBook($slug: String!) {
    books(filters: { Slug: { eq: $slug } }) {
      data {
        id
        attributes {
          Title
          Slug
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
                Slug
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
                Slug
              }
            }
          }
          ScriptWriters {
            data {
              id
              attributes {
                Name
                Slug
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
          Slug
          Ended
          FirstPublicationYear
          Description
          Creators {
            data {
              attributes {
                Name
                Slug
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
          Slug
          Bio
          Photo {
            data {
              attributes {
                url
              }
            }
          }
          series {
            data {
              id
              attributes {
                Name
                Slug
                Books(sort: "SeriesVolume") {
                  data {
                    id
                    attributes {
                      Title
                      Slug
                      Images {
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
            }
          }
        }
      }
    }
  }
`;
