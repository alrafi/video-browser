<template>
  <div>
    <form class="form__search">
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
      <input type="text" placeholder="Search..." />
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    // onSubmit(event) {
    //   event.preventDefault();
    //   this.$emit('termSubmit', event.target.children[0].value);
    // }
  }
};
</script>

<style>
.form__search {
  border: solid 1px #7d6e73;
  border-radius: 50px;
  width: 75%;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 2px 10px;
}

.form__search input {
  background-color: transparent;
  border: none;
  width: 100%;
  color: #7d6e73;
  font-size: 80%;
}

.form__search input:focus,
.form__search button:focus {
  border: none;
  outline: none;
}

.form__search button {
  background-color: transparent;
  border: none;
  margin-right: 10px;
  display: flex;
}

.form__search i {
  color: #7d6e73;
  font-size: 15px;
}
</style>
