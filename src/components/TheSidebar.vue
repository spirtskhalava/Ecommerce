<template>
  <aside class="sidebar">
    <div class="col-12 text-center py-4">
      <router-link to="/">
        <h1 class="sidebar__logo">Ecommerce</h1>
      </router-link>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <CartButton />
    </div>
    <nav class="nav flex-column">
      <BaseMenu />
    </nav>
  </aside>
</template>

<script>
import BaseMenu from '@/components/Menu/BaseMenu.vue';
import CartButton from '@/components/Cart/CartButton.vue';

export default {
  name: 'TheSidebar',
  components: {
    BaseMenu,
    CartButton
  }
};
</script>

<style lang="scss">
.sidebar {
  background-color: #f5f5f5;
  min-height: calc(100vh - 420px);

  &__logo {
    font-size: 24px;
    color: cyan;
  }
}
</style>