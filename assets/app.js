import { productQuery } from './components/queries';
import './scss/app.scss';
import 'bootstrap';
import './views/products';
// import client from './components/client';
//
// const data = client.query({
//   query: productQuery(10),
// });
//
// data.then(result => {
//   console.log(result);
// });

// (function () {
//   var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
//   if (window.ShopifyBuy) {
//     if (window.ShopifyBuy.UI) {
//       ShopifyBuyInit();
//     } else {
//       loadScript();
//     }
//   } else {
//     loadScript();
//   }
//
//   function loadScript() {
//     var script = document.createElement('script');
//     script.async = true;
//     script.src = scriptURL;
//     (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
//     script.onload = ShopifyBuyInit;
//   }
//
//   function ShopifyBuyInit() {
//     var client = ShopifyBuy.buildClient({
//       domain: 'krakaka.myshopify.com',
//       storefrontAccessToken: '349025d57e5cb6229248c6bae33094aa',
//     });
//     ShopifyBuy.UI.onReady(client).then(function (ui) {
//       ui.createComponent('product', {
//         id: '1710107263043',
//         node: document.getElementById('product-component-1635978689976'),
//         moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
//         options: {
//           "product": {
//             "styles": {
//               "product": {
//                 "@media (min-width: 601px)": {
//                   "max-width": "calc(25% - 20px)",
//                   "margin-left": "20px",
//                   "margin-bottom": "50px"
//                 }
//               }
//             },
//             "text": {
//               "button": "Add to cart"
//             }
//           },
//           "productSet": {
//             "styles": {
//               "products": {
//                 "@media (min-width: 601px)": {
//                   "margin-left": "-20px"
//                 }
//               }
//             }
//           },
//           "modalProduct": {
//             "contents": {
//               "img": false,
//               "imgWithCarousel": true,
//               "button": false,
//               "buttonWithQuantity": true
//             },
//             "styles": {
//               "product": {
//                 "@media (min-width: 601px)": {
//                   "max-width": "100%",
//                   "margin-left": "0px",
//                   "margin-bottom": "0px"
//                 }
//               }
//             },
//             "text": {
//               "button": "Add to cart"
//             }
//           },
//           "option": {},
//           "cart": {
//             "text": {
//               "total": "Subtotal",
//               "button": "Checkout"
//             }
//           },
//           "toggle": {}
//         },
//       });
//     });
//   }
// })();
