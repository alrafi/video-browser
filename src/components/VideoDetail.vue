<template>
  <!-- <div v-if="video" class="col-md-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" :src="videoUrl" />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div> -->
  <div class="row detail__video">
    <div class="col-8">
      <img src="../assets/thumbnail.webp" alt="" thumbnail />
      <div class="info__detail">
        <h3>lofi hip hop radio - beats to relax/study to</h3>
        <h4>chilledcow music</h4>
        <p>
          Thank you for listening, I hope you will have a good time here :)
          Listen to the playlist on Spotify, Apple music and more
        </p>
      </div>
    </div>
    <div class="col-4 recommended__video">
      <p>Recommended</p>
      <ul>
        <li>
          <div class="image__container">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
          </div>
          <div class="info__recommended">
            <h3>lofi hip hop radio - beats to relax/study to</h3>
            <p>chilledcow music</p>
          </div>
        </li>
        <li>
          <div class="image__container">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
          </div>
          <div class="info__recommended">
            <h3>lofi hip hop radio - beats to relax/study to</h3>
            <p>chilledcow music</p>
          </div>
        </li>
        <li>
          <div class="image__container">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
          </div>
          <div class="info__recommended">
            <h3>lofi hip hop radio - beats to relax/study to</h3>
            <p>chilledcow music</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: ['video'],
  computed: {
    videoUrl() {
      const videoId = this.video.id.videoId;
      return `https://youtube.com/embed/${videoId}`;
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

.recommended__video ul {
  list-style: none;
}

.recommended__video li {
  display: flex;
  /* width: 80%; */
  margin-bottom: 15px;
}

.info__recommended h3 {
  font-size: 80%;
}

.info__recommended p {
  font-size: 70%;
}
</style>
