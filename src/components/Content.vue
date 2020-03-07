<template>
  <div class="col-10 full__height content">
    <form class="form__search">
      <button type="submit">
        <i class="fas fa-search"></i>
      </button>
      <input type="text" placeholder="Search..." />
    </form>
    <div class="trending__content">
      <p>Trending</p>
      <div class="container">
        <div class="row">
          <div class="col">
            <img src="./thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="col">
            <img src="./thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="col">
            <img src="./thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
          <div class="col">
            <img src="./thumbnail.webp" alt="thumbnail" />
            <h3>lofi hip hop radio - beats to relax/study to</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="row section__content">
      <div class="col">
        <div class="gaming__content">
          <p>Gaming</p>
          <ul>
            <li class="item__gaming">
              <img src="./thumbnail.webp" alt="thumbnail" />
              <h3>lofi hip hop radio - beats to relax/study to</h3>
            </li>
            <li class="item__gaming">
              <img src="./thumbnail.webp" alt="thumbnail" />
              <h3>lofi hip hop radio - beats to relax/study to</h3>
            </li>
            <li class="item__gaming">
              <img src="./thumbnail.webp" alt="thumbnail" />
              <h3>lofi hip hop radio - beats to relax/study to</h3>
            </li>
            <li class="item__gaming">
              <img src="./thumbnail.webp" alt="thumbnail" />
              <h3>lofi hip hop radio - beats to relax/study to</h3>
            </li>
            <li class="item__gaming">
              <img src="./thumbnail.webp" alt="thumbnail" />
              <h3>lofi hip hop radio - beats to relax/study to</h3>
            </li>
          </ul>
        </div>
      </div>
      <div class="col">
        <div class="music__content">
          <p>Music</p>
          <div class="container">
            <div class="row">
              <div class="col item__music">
                <img src="./thumbnail.webp" alt="thumbnail" />
                <h3>lofi hip hop radio - beats to relax/study to</h3>
              </div>
              <div class="col item__music">
                <img src="./thumbnail.webp" alt="thumbnail" />
                <h3>lofi hip hop radio - beats to relax/study to</h3>
              </div>
              <div class="w-100"></div>
              <div class="col item__music">
                <img src="./thumbnail.webp" alt="thumbnail" />
                <h3>lofi hip hop radio - beats to relax/study to</h3>
              </div>
              <div class="col item__music">
                <img src="./thumbnail.webp" alt="thumbnail" />
                <h3>lofi hip hop radio - beats to relax/study to</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
};
</script>

<style scoped>
/* CONTENT */
.content {
  padding: 20px;
}

.form__search {
  border: solid 1px #7d6e73;
  border-radius: 50px;
  width: 75%;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 2px 10px;
}

.form__search input {
  background-color: transparent;
  border: none;
  width: 100%;
  color: #7d6e73;
  font-size: 80%;
}

.form__search input:focus,
.form__search button:focus {
  border: none;
  outline: none;
}

.form__search button {
  background-color: transparent;
  border: none;
  margin-right: 10px;
  display: flex;
}

.form__search i {
  color: #7d6e73;
  font-size: 15px;
}

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

/* section content */
.row .section__content {
  margin: 30px 0;
}

.section__content .col {
  padding: 0;
}

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