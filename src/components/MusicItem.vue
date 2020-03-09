<template>
  <div class="col-5 item__music" @click="onVideoSelect">
    <img :src="thumbnail" alt="thumbnail" />
    <h3>{{ videoTitle }}</h3>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MusicItem',
  props: ['video'],
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.medium.url;
    },
    videoTitle() {
      return this.video.snippet.title;
    }
  },
  methods: {
    ...mapActions(['selectContent']),
    onVideoSelect() {
      this.selectContent(this.video);
    }
  }
};
</script>

<style>
.music__content .col-5 {
  background-color: #eee;
  border: 1px solid #363140;
  border-radius: 10px;
  padding: 0;
  color: #333;
  cursor: pointer;
}

.music__content .col-5 h3 {
  font-size: 70%;
  margin: 10px;
}

.music__content img {
  width: 100%;
  border-radius: 10px;
}

.item__music {
  margin-right: 30px;
  margin-bottom: 40px;
}
</style>
