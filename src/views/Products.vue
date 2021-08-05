<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-3">
        <Dropdown v-model="sortBy"/>
      </div>
      <div class="col-9">
        <div class="row">
          <div class="col-3 mb-3" v-for="item in productList" :key="item.id">
            <ProductItem :product="item" />
          </div>
          <ButtonDefault theme="beige" @click="showMore()">
            Load More
          </ButtonDefault>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import Dropdown from '@/components/FormControls/Dropdown.vue';
import axios from 'axios';

export default {
  components: {
    ProductItem,
    Dropdown
  },
  data() {
    return {
      products: [],
      itemsToShow: 8,
      sortBy:'asc'
    };
  },
  mounted() {
    axios.get('/products.json').then(response => {
      this.products = response.data;
    });
  },
  computed: {
    productList() {

      return this.products.slice(0, this.itemsToShow);
    }
  },
  methods: {
    showMore() {
      this.itemsToShow += 8;
    },
    
  }
};
</script>

