<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about-us"> About </router-link> | 
    <router-link to="/about-us/company"> About Company </router-link>
    <teleport to="#modal">
      <router-view />
    </teleport>
  </div>
</template>


<script>
export default {};
</script>
