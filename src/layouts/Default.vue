<template>
  <div class="default-layout">
    <TheHeader />
    <main class="content-wrapper">
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style lang="scss">
.default-layout {
  padding-top: 60px;
}

.content-wrapper {
  min-height: calc(100vh - 480px);
}
</style>
