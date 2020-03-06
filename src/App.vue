<template>
  <div>
    <SearchBar @termSubmit="onTermSubmit"></SearchBar>
    <div class="row">
      <VideoDetail :video="selectedVideo" />
      <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onTermSubmit(searchTerm) {
      console.log(searchTerm);
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: process.env.VUE_APP_API_KEY,
            part: 'snippet',
            q: searchTerm
          }
        })
        .then(res => {
          this.videos = res.data.items;
        });
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
};
</script>
