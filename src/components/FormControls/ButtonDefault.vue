<template>
  <button class="button-default" :class="`button-default--${theme}`">
    <slot />
  </button>
</template>

<script>
const BUTTON_THEMES = ['transparent', 'brown', 'beige'];

export default {
  name: 'ButtonDefault',
  props: {
    theme: {
      type: String,
      default: 'transparent',
      validator: value => BUTTON_THEMES.includes(value)
    }
  }
};
</script>

<style lang="scss">
.button-default {
  border: none;
  padding: 10px 15px;

  &:focus {
    outline: 1px solid #cdbba7;
  }

  &--transparent {
    background-color: transparent;
  }

  &--brown {
    background-color: #cdbba7;
  }

  &--beige {
    background-color: #f4dfd0;
  }
}
</style>