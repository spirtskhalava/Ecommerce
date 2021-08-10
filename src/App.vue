<template>
  <component :is="currentLayout">
    <Alert/>
    <router-view />
  </component>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapGetters } from 'vuex';
import Alert from '@/components/Alert.vue';

const DefaultLayout = defineAsyncComponent(() =>
  import('@/layouts/Default.vue')
);
const Content = defineAsyncComponent(() => import('@/layouts/Sidebar.vue'));

export default {
  name: 'App',
  components: {
    DefaultLayout,
    Content,
    Alert
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
