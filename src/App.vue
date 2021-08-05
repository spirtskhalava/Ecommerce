<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';

const DefaultLayout = defineAsyncComponent(() =>
  import('@/layouts/Default.vue')
);
const Content = defineAsyncComponent(() => import('@/layouts/Sidebar.vue'));

export default {
  name: 'App',
  components: {
    DefaultLayout,
    Content
  },
  mounted() {
    if (localStorage.getItem('foundItem')) {
      this.$store.commit(
        'cart/set',
        JSON.parse(localStorage.getItem('foundItem'))
      );
    }
  },
  computed: {
    ...mapGetters({
      currentLayout: 'currentLayout'
    })
    // currentLayout() {
    //   return this.$store.state.layout;
    // }
  }
};
</script>
