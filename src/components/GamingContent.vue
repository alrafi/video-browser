<template>
  <div class="col-12 col-sm-6">
    <div class="gaming__content">
      <p>Gaming</p>
      <ul>
        <GamingItem v-for="gaming in gamingVideos" :key="gaming.etag" :video="gaming"></GamingItem>
      </ul>
    </div>
  </div>
</template>

<script>
import GamingItem from "./GamingItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "GamingContent",
  components: {
    GamingItem
  },
  computed: {
    ...mapGetters(["gamingVideos"])
  },
  methods: {
    ...mapActions(["fetchGaming"])
  },
  created() {
    this.fetchGaming();
  }
};
</script>

<style>
/* gaming content */
.col .gaming__content {
  margin-right: 20px;
}
</style>
