<template>
  <router-link to="/cart" tag="button">
    <i class="bi bi-cart4"></i>
    ${{ total }}
  </router-link>
</template>

<script>
import useCart from '@/hooks/cart';

export default {
  name: 'CartButton',
  setup(){
    const {total}  = useCart();
    return  {
      total
    };
  },
};
</script>