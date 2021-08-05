<template>
  <div
    class="row border-top border-bottom"
    v-for="item in products"
    v-bind:key="item.id"
  >
    <div class="row main align-items-center">
      <div class="col-2">
        <img class="img-fluid" src="https://i.imgur.com/1GrakTl.jpg" />
      </div>
      <div class="col">
        <div class="row text-muted">{{ item.title }}</div>
        <div class="row">{{ item.description }}</div>
      </div>
      <div class="col"><increaseOrDecrease :product="item" /></div>
      <div class="col">&euro; {{ item.price.toFixed(2) }}</div>
      <div class="col">
        &euro; {{ (item.price * item.quantity).toFixed(2) }}
        <button class="close" @click="remove(item.id)">&#10005;</button>
      </div>
    </div>
  </div>
</template>
<script>
import increaseOrDecrease from '@/components/increaseOrDecrease.vue';

export default {
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  components: {
    increaseOrDecrease
  },
  methods: {
    remove(id) {
      this.$store.commit('cart/remove', id);
    }
  }
};
</script>

