<template>
  <input @input="onInput" />
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput(event) {
      // console.log(event.target.value);
      this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<style>
</style>