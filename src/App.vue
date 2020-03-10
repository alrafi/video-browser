<template>
  <div class="container-fluid">
    <AppHeader></AppHeader>
    <div class="row">
      <Sidebar></Sidebar>
      <div class="col-lg-10 col-12 full__height content">
        <router-view></router-view>
        <!-- <Content></Content> -->
        <!-- <SearchResult></SearchResult> -->
      </div>
    </div>
  </div>
</template>

<script>
// import SearchBar from './components/SearchBar';
// import VideoList from './components/VideoList';
// import VideoDetail from './components/VideoDetail';
// import axios from "axios";
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AppHeader";
// import SearchBar from "./components/SearchBar";
// import Content from "./components/Content";
// import SearchResult from './components/SearchResult';

export default {
  name: "App",
  components: {
    AppHeader,
    Sidebar
    // Content,
    // SearchResult
  },
  // data() {
  //   // return { videos: [], selectedVideo: null };
  // },
  methods: {
    // onTermSubmit(searchTerm) {
    //   console.log(searchTerm);
    //   axios
    //     .get("https://www.googleapis.com/youtube/v3/search", {
    //       params: {
    //         key: process.env.VUE_APP_API_KEY,
    //         part: "snippet",
    //         q: searchTerm
    //       }
    //     })
    //     .then(res => {
    //       this.videos = res.data.items;
    //     });
    // },
    // onVideoSelect(video) {
    //   this.selectedVideo = video;
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: #18141c;
  color: #d2cdd3;
  font-family: "Lato", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 300;
}

.main__content {
  padding: 20px;
}
</style>
