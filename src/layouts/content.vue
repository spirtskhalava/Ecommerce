<template>
  <div>
    <TheFooter />
    <slot />
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
  name: 'defaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>