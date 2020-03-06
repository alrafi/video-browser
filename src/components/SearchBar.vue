<template>
  <div>
    <form @submit="onSubmit">
      <input />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$emit('termSubmit', event.target.children[0].value);
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  margin: 20px;
}
input {
  width: 75%;
}
</style>
