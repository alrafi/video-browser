<template>
  <div class="row detail__video">
    <div class="col-8">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" :src="videoUrl" />
      </div>
      <div class="info__detail">
        <h3>{{ videoTitle }}</h3>
        <h4>{{ videoChanel }}</h4>
        <p>{{ videoDescription }}</p>
      </div>
    </div>
    <div class="col-4 recommended__video">
      <p>Recommended</p>
      <ul>
        <RecommendedItem
          v-for="video in videosResult"
          :key="video.etag"
          :video="video"
        ></RecommendedItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RecommendedItem from './RecommendedItem';

export default {
  name: 'VideoDetail',
  components: {
    RecommendedItem
  },
  computed: {
    ...mapGetters(['getSelectedVideo', 'videosResult']),
    videoUrl() {
      const videoId = this.getSelectedVideo.id.videoId;
      return `https://youtube.com/embed/${videoId}`;
    },
    videoTitle() {
      return this.getSelectedVideo.snippet.title;
    },
    videoChanel() {
      return this.getSelectedVideo.snippet.channelTitle;
    },
    videoDescription() {
      return this.getSelectedVideo.snippet.description;
    }
  }
};
</script>

<style>
/* video detail */
.detail__video {
  margin-top: 30px;
}

.info__detail {
  margin-top: 20px;
}

.info__detail h3,
.info__detail h4,
.info__detail p {
  margin-bottom: 10px;
}

.info__detail h3 {
  font-size: 120%;
}

.info__detail h4 {
  font-size: 85%;
}

.info__detail p {
  font-size: 80%;
}
</style>
