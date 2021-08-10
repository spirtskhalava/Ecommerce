<template>
  <div class="card w-100">
    <!-- <img src="..." class="card-img-top" alt="..."> -->
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <div v-if="count">
        <increaseOrDecrease :product="this.product" />
      </div>
      <router-link :to="`/product/${product.slug}`" class="btn btn-primary"
        >Learn More</router-link
      >
      <ButtonDefault @click="addCart(product)">
        <i class="bi bi-cart-plus"></i>
      </ButtonDefault>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import increaseOrDecrease from '@/components/increaseOrDecrease.vue';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  components: {
    increaseOrDecrease
  },
  computed: {
    ...mapGetters({
      productIds: 'cart/productIds'
    }),
    count() {
      return this.productIds.includes(this.product.id);
    }
  },
  methods: {
    ...mapActions({
      addCart: 'cart/add'
    })
  }
};
</script>
