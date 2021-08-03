<template>
<div class="container">
    <div class="row mt-3">
       <div class="col-3">
         test
         </div>
      <div class="col-9">
        <div class="row">
          <div class="col-3 mb-3" v-for="item in products" :key="item.id">
   <div v-if="item.id<=loadMore">
   <ProductItem :product="item"/>
   </div>
   </div>
     <ButtonDefault @click="commentsToShow += 3">
            Load More
          </ButtonDefault>
   </div>
</div>
    </div>
    </div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue'
import axios from 'axios'
export default {
components:{
  ProductItem
},
data(){
return {
  products:[],
  loadMore: 3
}
},
mounted(){
  axios.get('/products.json').then(response=>{
  this.products=response.data;
  
  })
}

}
</script>

