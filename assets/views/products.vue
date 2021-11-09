<template>
  <div class="row">
    <div v-for="product in products" class="col-md-4 col">
      <v-button :product="product"></v-button>
      <hr>
    </div>

  </div>
</template>

<script>
import Client from './../shopify/client';
import VButton from './Button';

export default {
  data() {
    return {
      products: {},
    }
  },
  components: {
    VButton
  },
  mounted() {
    Client.product.fetchAll().then((products) => {
      // Do something with the products
      this.products = products;
    });
  }
}
</script>
