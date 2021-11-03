import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://krakaka.myshopify.com/api/2021-10/graphql.json',
  headers: {
    'X-Shopify-Storefront-Access-Token': 'b9822ec8bac3a4834a31f64d97d36a63',
  }
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default apolloClient;
