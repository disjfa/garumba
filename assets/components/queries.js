import gql from 'graphql-tag'

function productQuery(amount) {
  return gql`{
    products(first: ${amount}, query: "description:'shirt'") {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          description
          handle
          tags
          availableForSale
          options {
            name
            values
          }
          images(first: 20) {
            edges {
              node {
                src
                id
              }
            }
          }
        }
      }
    }
  }`
}

export {
  productQuery
};
