<template>
  <div>
    <TheHeader />
    <slot />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader';
import TheFooter from '../components/TheFooter';
export default {
  name: 'defaultLayout',
  components: {
    TheHeader,
    TheFooter
  }
};
</script>