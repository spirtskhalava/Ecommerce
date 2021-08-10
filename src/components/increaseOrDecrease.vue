<template>
  <ButtonDefault @click="decreaseProduct(product)">-</ButtonDefault
  ><span>{{ productQuantity }}</span
  ><ButtonDefault @click="addCart(product)">+</ButtonDefault>
</template>

<script>
import useCart from '@/hooks/cart';

export default {
  setup(){
   const cart=useCart();
   return {
     addCart: cart.addToCart,
     decreaseProduct:cart.decreaseProduct
   };
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    productQuantity() {
      const quantity = this.$store.state.cart.list.find(
        item => item.id == this.product.id
      );
      return quantity.quantity;
    }
  }
};
</script>