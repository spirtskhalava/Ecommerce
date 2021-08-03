<template>
     <div class="card w-100">
  <!-- <img src="..." class="card-img-top" alt="..."> -->
  <div class="card-body">
    <h5 class="card-title">{{ product.title }}</h5>
    <p class="card-text">{{product.description}}</p>
    <router-link :to="`/product/${product.slug}`" class="btn btn-primary">Learn More</router-link>
  </div>
</div>
</template>
<script>
export default{
    props:{
    product:{
        type:Object,
        required:true
    }
    }

}
</script>
