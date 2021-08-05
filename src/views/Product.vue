<template>
  <h2>Product Page {{ $route.params.slug }}</h2>
  <p>{{ this.product.description }}</p>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      product: {}
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      axios.get('/products.json').then(response => {
        this.product = response.data.find(
          product => product.slug === this.$route.params.slug
        );
      });
    }
  }
};
</script>