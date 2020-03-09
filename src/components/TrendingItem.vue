<template>
  <div class="col">
    <img :src="thumbnail" alt="thumbnail" />
    <h3>{{ videoTitle }}</h3>
  </div>
</template>

<script>
export default {
  name: 'TrendingItem',
  props: ['video'],
  computed: {
    thumbnail() {
      return this.video.snippet.thumbnails.default.url;
    },
    videoTitle() {
      return this.video.snippet.title;
    }
  }
};
</script>

<style>
.trending__content p {
  font-weight: 600;
}

.trending__content .col {
  background-color: #eee;
  border: 1px solid #363140;
  border-radius: 10px;
  padding: 0;
  margin-right: 15px;
  color: #333;
}
.trending__content .col h3 {
  font-size: 70%;
  margin: 10px;
}
.trending__content img {
  width: 100%;
  border-radius: 10px;
}
</style>
