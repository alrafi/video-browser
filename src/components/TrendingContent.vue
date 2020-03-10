<template>
  <div class="trending__content">
    <p>Trending</p>
    <div class="container-fluid">
      <div class="row">
        <TrendingItem v-for="trending in trendingVideos" :key="trending.etag" :video="trending"></TrendingItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TrendingItem from "./TrendingItem";

export default {
  name: "TrendingContent",
  components: {
    TrendingItem
  },
  computed: mapGetters(["trendingVideos"]),
  methods: mapActions(["fetchContent"]),
  created() {
    this.fetchContent();
  }
};
</script>

<style>
/* trending content */
.trending__content {
  margin-top: 30px;
}
</style>
