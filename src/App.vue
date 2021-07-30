<template>
  <component :is="currentLayout">
    <router-view/>
  </component>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const DefaultLayout = defineAsyncComponent(() => import('@/layouts/defaultLayout.vue'))
const Content = defineAsyncComponent(() => import('@/layouts/content.vue'));

export default {
  name:'App',
  components:{
    DefaultLayout,
    Content
  },
  computed: {
    currentLayout() {
      return this.$store.state.layout;
    }
  }
}
</script>
