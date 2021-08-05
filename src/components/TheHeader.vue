<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Ecommerce</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <BaseMenu />
        </div>
        <div>
          <CartButton />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import BaseMenu from '@/components/Menu/BaseMenu.vue';
import CartButton from '@/components/Cart/CartButton.vue';

export default {
  name: 'TheHeader',
  components: {
    BaseMenu,
    CartButton
  }
};
</script>


<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f5f5f5;
  box-shadow: 0 2px 12px #cccc;
  z-index: 2000;
}
</style>
