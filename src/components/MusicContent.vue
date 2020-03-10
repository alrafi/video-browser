<template>
  <div class="col-12 col-sm-6">
    <div class="music__content">
      <p>Music</p>
      <div class="container">
        <div class="row">
          <MusicItem v-for="music in musicVideos" :key="music.etag" :video="music"></MusicItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicItem from "./MusicItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MusicContent",
  components: { MusicItem },
  computed: mapGetters(["musicVideos"]),
  methods: mapActions(["fetchMusic"]),
  created() {
    this.fetchMusic();
  }
};
</script>

<style>
</style>
