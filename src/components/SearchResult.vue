<template>
  <div class="search__result">
    <ul>
      <SearchResultItem
        v-for="video in videosResult"
        :key="video.etag"
        :video="video"
      ></SearchResultItem>
    </ul>
  </div>
</template>

<script>
import SearchResultItem from './SearchResultItem';
import { mapGetters } from 'vuex';

export default {
  name: 'SearchResult',
  components: {
    SearchResultItem
  },
  computed: mapGetters(['videosResult'])
};
</script>

<style></style>
