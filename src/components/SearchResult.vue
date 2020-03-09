<template>
  <div class="search__result">
    <ul v-for="i in 10" :key="i">
      <SearchResultItem></SearchResultItem>
    </ul>
  </div>
</template>

<script>
import SearchResultItem from './SearchResultItem';

export default {
  name: 'SearchResult',
  components: {
    SearchResultItem
  }
};
</script>

<style></style>
