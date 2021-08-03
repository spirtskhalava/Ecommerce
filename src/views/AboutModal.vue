<template>
<div class="about-modal d-flex align-items-center justify-content-center">
  <dialog class="about-modal__dialog p-4" open>
    <ButtonDefault  theme="brown" @click="closeModal()">
      &times;
    </ButtonDefault>
    <h1>About Modal</h1> 
  </dialog>
</div>
</template>

<script>
export default {
  name: 'AboutModal',
  methods: {
    closeModal() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.about-modal {
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: transparentize(#000000, 0.2);

  &__dialog {
    background-color: white;
  }
}
</style>