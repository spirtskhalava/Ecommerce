<template>
<div>
  <select v-model="sortBy">
    <option value="asc">A-Z</option>
    <option value="desc">Z-A</option>
  </select>
</div>
</template>

<script>
export default{
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: String,
            default: ''
        }
    },
    computed: {
        sortBy: {
            get() {
                return this.modelValue;
            },
            set(value) {
                this.$emit('update:modelValue', value);
            }
        }
    }

};
</script>