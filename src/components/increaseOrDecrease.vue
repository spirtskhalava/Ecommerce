<template>
          <ButtonDefault @click="decreaseProduct">-</ButtonDefault><span>{{productQuantity}}</span><ButtonDefault @click="addCart(product)">+</ButtonDefault>
</template>
<script>
import {  mapMutations } from 'vuex'
export default{
    
     props: {
    product: {
      type: Object,
      required: true
    }
  },
methods:{
decreaseProduct(){
     this.$store.commit("cart/decrease",this.product)
  },
  ...mapMutations({
   addCart:"cart/add"

  })


},
computed:{
     productQuantity(){
       const quantity = this.$store.state.cart.list.find(item => item.id == this.product.id);
       return quantity.quantity;
      }

}
}
</script>