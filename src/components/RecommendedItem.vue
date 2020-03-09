<template>
  <li @click="onVideoSelect">
    <div class="image__container">
      <img :src="thumbnail" alt="thumbnail" />
    </div>
    <div class="info__recommended">
      <h3>{{ videoTitle }}</h3>
      <p>{{ videoChannel }}</p>
    </div>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RecommendedItem',
  props: ['video'],
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.default.url;
    },
    videoTitle() {
      return this.video.snippet.title;
    },
    videoChannel() {
      return this.video.snippet.channel;
    }
  },
  methods: {
    ...mapActions(['selectVideo']),
    onVideoSelect() {
      this.selectVideo(this.video);
    }
  }
};
</script>

<style>
.recommended__video ul {
  list-style: none;
}

.recommended__video li {
  display: flex;
  margin-bottom: 15px;
  cursor: pointer;
}

.info__recommended h3 {
  font-size: 80%;
}

.info__recommended p {
  font-size: 70%;
}

.image__container {
  width: 200px;
  margin-right: 15px;
}

.image__container img {
  width: 100%;
}
</style>
