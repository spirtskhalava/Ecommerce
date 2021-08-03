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
          <ul class="navbar-nav">
            <li class="nav-item px-3">
              <router-link class="nav-link" :to="{ name: 'Products' }"
                >Products</router-link
              >
            </li>
            <li class="nav-item px-3">
              <router-link class="nav-link" :to="{ name: 'About' }"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Register"
                >Registration</router-link
              >
            </li>
          </ul>
        </div>
        <div>
          <ButtonDefault>
            <i class="bi bi-cart4"></i>
          </ButtonDefault>
        </div>
      </div>
    </nav>
  </header>
</template>

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
