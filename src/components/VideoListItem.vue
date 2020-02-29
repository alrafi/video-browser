<template>
  <li class="list-group-item">
    <img class="mr-3" :src="video.snippet.thumbnails.default.url" />
    <div class="media-body">{{ video.snippet.title }}</div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: ["video"]
};
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>
