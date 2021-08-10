<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-3">
        <Dropdown v-model="sortBy" />
        <Dropdown :modelValue="sortBy" @update:modelValue="sortBy = $event" />
        <input type="text" v-model="search" class="mt-2">
      </div>
      <div class="col-9">
        
           <transition-group name="flip-list" class="row" tag="div">
          <div class="col-3 mb-3" v-for="item in productList" :key="item.id">
            <ProductItem :product="item" />
          </div>
          </transition-group>
          <ButtonDefault theme="beige" @click="showMore()">
            Load More
          </ButtonDefault>
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
      sortBy:'asc',
      search:'',
    };
  },
  mounted() {
    axios.get('/products.json').then(response => {
      this.products = response.data;
    });
  },
  computed: {
    sortedProducts() {
const products = [...this.filterProduct];
      products.sort((a, b) => {
        if(this.sortBy === 'asc') {
      return a.title.localeCompare(b.title);
        }
        return b.title.localeCompare(a.title);
      
      });
      return products;
    },
    productList() {
     
      return this.sortedProducts.slice(0, this.itemsToShow);
    },
    filterProduct(){
      if(this.search.length>=3){
        const search = this.search.toLowerCase();
        const inc = t => t.toLowerCase().includes(search);
return this.products.filter(item=> inc(item.title) || inc(item.description));
      }
      return this.products;
   
    }
  },
  methods: {
    showMore() {
      this.itemsToShow += 8;
    },
    
  }
};
</script>
<style>
.flip-list-move {
  transition: transform 0.8s ease;
}

</style>

