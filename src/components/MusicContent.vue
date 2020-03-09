<template>
  <div class="col">
    <div class="music__content">
      <p>Music</p>
      <div class="container">
        <div class="row">
          <div class="col item__music">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="col item__music">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="w-100"></div>
          <div class="col item__music">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="col item__music">
            <img src="../assets/thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicContent"
};
</script>

<style>
/* music content */
.music__content .item__music {
  padding: 0;
}

.music__content .col {
  background-color: #eee;
  border: 1px solid #363140;
  border-radius: 10px;
  padding: 0;
  margin-right: 15px;
  color: #333;
}

.music__content .col h3 {
  font-size: 70%;
  margin: 10px;
}

.music__content img {
  width: 100%;
  border-radius: 10px;
}

.item__music {
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>