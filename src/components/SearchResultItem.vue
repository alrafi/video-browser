<template>
  <li @click="onVideoSelect">
    <div class="col-4 col-sm-3 image__container">
      <img :src="thumbnails" alt="thumbnail" />
    </div>
    <div class="col-8 col-sm-9 info__content">
      <h3>{{ video.snippet.title }}</h3>
      <p>{{ video.snippet.channelTitle }}</p>
      <p class="d-none d-md-block">{{ video.snippet.description }}</p>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchResultItem",
  props: ["video"],
  computed: {
    thumbnails() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    ...mapActions(["selectVideo"]),
    onVideoSelect() {
      this.selectVideo(this.video);
    }
  }
};
</script>

<style>
/* search result */
.search__result {
  margin-top: 30px;
}

.search__result ul {
  list-style: none;
}

.search__result li {
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  cursor: pointer;
}

.info__content h3 {
  font-size: 120%;
  margin-bottom: 5px;
}

.info__content p {
  font-size: 70%;
  margin-bottom: 5px;
}

.image__container {
  /* width: 200px; */
  margin-right: 15px;
  padding: 0;
}

.image__container img {
  width: 100%;
}

@media (max-width: 768px) {
  .info__content h3 {
    font-size: 100%;
  }
}

@media (max-width: 576px) {
  .info__content h3 {
    font-size: 80%;
  }
}
</style>
