<template>
  <div class="trending__content">
    <p>Trending</p>
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </div>
        <div class="col">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </div>
        <div class="col">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </div>
        <div class="col">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendingContent"
};
</script>

<style>
/* trending content */
.trending__content {
  margin-top: 30px;
}

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