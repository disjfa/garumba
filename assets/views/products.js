import { createApp } from 'petite-vue';
import { productQuery } from "../components/queries";
import { normalizeProducts } from "../components/normalize";
import client from '../components/client';


createApp({
  products: {},
  mounted() {
    client.query({
      query: productQuery(10),
    }).then(result => {
      this.products = normalizeProducts(result);
    })
  }
}).mount('#shopify-products');
