<template>
  <router-link to="/cart" tag="button">
    <i class="bi bi-cart4"></i>
    ${{ total }}
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CartButton',
  computed: {
    ...mapGetters({
      total: 'cart/total'
    })
  }
};
</script>