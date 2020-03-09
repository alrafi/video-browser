<template>
  <li class="item__gaming" @click="onVideoSelect">
    <img :src="thumbnail" alt="thumbnail" />
    <h3>{{ videoTitle }}</h3>
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'GamingItem',
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
.gaming__content img {
  max-width: 120px;
  margin-right: 10px;
}

.item__gaming {
  padding: 0;
  display: flex;
}

.gaming__content li {
  margin-bottom: 10px;
  background-color: #363140;
  border: 1px solid #0c0e1f;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.gaming__content h3 {
  font-size: 70%;
  color: #d2cdd3;
}
</style>
