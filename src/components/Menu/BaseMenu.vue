<template>
  <ul class="navbar-nav">
    <li class="nav-item px-3" v-for="link in links" :key="link.path">
      <router-link class="nav-link" :to="link.path">
        {{ link.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BaseMenu',
  data() {
    return {
      links: [
        { name: 'Products', path: '/products' },
        { name: 'About', path: '/about' },
        { name: 'Login', path: '/login' },
        { name: 'Registration', path: '/register' },
      ]
    };
  }
};
</script>