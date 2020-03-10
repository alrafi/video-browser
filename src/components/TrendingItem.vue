<template>
  <div class="col-12 col-sm-6 col-md-3 trending__item" @click="onVideoSelect">
    <img :src="thumbnail" alt="thumbnail" />
    <h3>{{ videoTitle }}</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TrendingItem",
  props: ["video"],
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.medium.url;
    },
    videoTitle() {
      return this.video.snippet.title;
    }
  },
  methods: {
    ...mapActions(["selectContent"]),
    onVideoSelect() {
      this.selectContent(this.video);
    }
  }
};
</script>

<style>
.trending__content p {
  font-weight: 600;
}

.trending__content .trending__item {
  background-color: #eee;
  border: 1px solid #363140;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0;
  color: #333;
  cursor: pointer;
}
.trending__content .trending__item h3 {
  font-size: 70%;
  margin: 10px;
}
.trending__content img {
  width: 100%;
  border-radius: 10px;
}
</style>
