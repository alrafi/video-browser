<template>
  <div class="col">
    <div class="music__content">
      <p>Music</p>
      <div class="container">
        <div class="row">
          <MusicItem
            v-for="music in musicVideos"
            :key="music.etag"
            :video="music"
          ></MusicItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MusicItem from './MusicItem';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'MusicContent',
  components: { MusicItem },
  computed: mapGetters(['musicVideos']),
  methods: mapActions(['fetchMusic']),
  created() {
    this.fetchMusic();
  }
};
</script>

<style>
/* music content */
.music__content {
  margin-left: 15px;
}

.music__content .item__music {
  padding: 0;
}

.music__content .row {
  box-sizing: border-box;
}
</style>
