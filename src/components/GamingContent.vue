<template>
  <div class="col">
    <div class="gaming__content">
      <p>Gaming</p>
      <ul>
        <li class="item__gaming">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </li>
        <li class="item__gaming">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </li>
        <li class="item__gaming">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </li>
        <li class="item__gaming">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </li>
        <li class="item__gaming">
          <img src="../assets/thumbnail.webp" alt="thumbnail" />
          <h3>lofi hip hop radio - beats to relax/study to</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GamingContent"
};
</script>

<style>
/* gaming content */
.col .gaming__content {
  margin-right: 20px;
}

.gaming__content img {
  max-width: 120px;
  margin-right: 10px;
}

.item__gaming {
  padding: 0;
  display: flex;
}

.gaming__content li {
  margin-bottom: 10px;
  background-color: #363140;
  border: 1px solid #0c0e1f;
  border-radius: 10px;
  padding: 5px;
}

.gaming__content h3 {
  font-size: 70%;
  color: #d2cdd3;
}
</style>