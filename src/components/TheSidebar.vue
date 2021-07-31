<template>
  <aside class="sidebar">
    <div class="col-12 text-center py-4">
      <router-link to="/">
        <h1 class="sidebar__logo">Ecommerce</h1>
      </router-link>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <ButtonDefault>
          <i class="bi bi-cart-4"></i>
      </ButtonDefault>
    </div>
    <nav class="nav flex-column">
      <a class="nav-link active" href="#">Active</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link" href="#">Link</a>
      <a class="nav-link disabled" href="#">Disabled</a>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'TheSidebar'
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