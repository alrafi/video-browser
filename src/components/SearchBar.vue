<template>
  <form class="col-6 col-md-7 col-lg-8 form__search" @submit="onSubmit">
    <button type="submit">
      <i class="fas fa-search"></i>
    </button>
    <input type="text" placeholder="Search..." v-model="searchTerm" />
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SearchBar",

  methods: {
    ...mapActions(["fetchVideos"]),
    onSubmit(event) {
      event.preventDefault();
      // const searchTerm = event.target.children[1].value;
      console.log(`v-model: ${this.searchTerm}`);
      this.fetchVideos(this.searchTerm);
    }
  }
};
</script>

<style>
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
