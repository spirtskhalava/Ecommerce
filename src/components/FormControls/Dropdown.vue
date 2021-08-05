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
data(){
    return {
sortBy:''
    };


},
watch: {
    sortBy(value) {
        // this.$emit('input', value); //For Vue 2
        this.$emit('update:modelValue', value);
    },
    modelValue: {
        immediate:true,
        handler(value) {
this.sortBy = value;
        }
    }
}



};
</script>