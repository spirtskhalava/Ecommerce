<template>
  <div class="row">
    <div class="col-3 col-xl-2">
      <TheSidebar />
    </div>
    <div class="col-9 col-xl-10">
      <slot />
    </div>
    <div class="col-12">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'SidebarLayout',
  components: {
    TheSidebar,
    TheFooter
  }
};
</script>