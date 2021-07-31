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
