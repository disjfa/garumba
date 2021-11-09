<template>
  <div></div>
</template>

<script>
import { parseGid } from '@shopify/admin-graphql-api-utilities';
import ui from './../shopify/ui';

export default {
  props: {
    product: Object,
  },
  mounted() {
    ui.createComponent('product', {
      id: parseGid(atob(this.product.id)),
      node: this.$el,
      options: {
        product: {
          // iframe: false,
          width: '100%',
          buttonDestination: 'modal',
          contents: {
            // description: true,
            //   img: false,
            //   imgWithCarousel: true,
          }
        },
      }
    });
  }
}
</script>
