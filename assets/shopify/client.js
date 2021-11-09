// import Client from 'shopify-buy';
//
// // Initializing a client to return content in the store's primary language
// const client = Client.buildClient({
//   domain: 'krakaka.myshopify.com',
//   storefrontAccessToken: 'b9822ec8bac3a4834a31f64d97d36a63'
// });
//
// export default client;

import ShopifyBuy from '@shopify/buy-button-js';

const client = ShopifyBuy.buildClient({
  domain: 'krakaka.myshopify.com',
  storefrontAccessToken: 'b9822ec8bac3a4834a31f64d97d36a63', // previously apiKey, now deprecated
});

export default client;
