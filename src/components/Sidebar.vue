<template>
  <div class="col-2 full__height sidebar">
    <div class="title">
      <i class="fas fa-bars"></i>
      <router-link to="/" class="title__app">
        <img src="../assets/logo.png" alt="vue-logo" />
        <h1>ueTube</h1>
      </router-link>
    </div>
    <div class="menu__sidebar">
      <p>Menu</p>
      <ul>
        <li><i class="fas fa-home"></i>Home</li>
        <li><i class="fas fa-fire"></i>Trending</li>
        <li><i class="fab fa-youtube"></i>Live</li>
      </ul>
    </div>
    <div class="menu__sidebar">
      <p>Library</p>
      <ul>
        <li><i class="fas fa-heart"></i>Loved</li>
        <li><i class="fas fa-bookmark"></i>Saved</li>
      </ul>
    </div>
    <div class="menu__sidebar">
      <p>Category</p>
      <ul>
        <li><i class="fas fa-music"></i>Music</li>
        <li><i class="fas fa-gamepad"></i>Gaming</li>
        <li><i class="fas fa-plane"></i>Travel & Events</li>
        <li><i class="fas fa-football-ball"></i>Sports</li>
        <li><i class="fas fa-camera"></i>Entertainment</li>
        <li><i class="fas fa-video"></i>Film & Animation</li>
        <li><i class="fas fa-car"></i>Autos & Vehicles</li>
        <li><i class="fas fa-book-open"></i>News & Politics</li>
        <li><i class="fas fa-dna"></i>Science & Tech</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
};
</script>

<style>
/* SIDEBAR*/
h1 {
  font-size: 100%;
}

.title {
  display: flex;
  /* align-items: baseline; */
}

.title img {
  width: 25px;
  height: 25px;
}

.title h1 {
  margin: 0;
}

.title i {
  width: 14px;
  height: 14px;
  margin-right: 15px;
  margin-top: 3px;
}

.title a {
  text-decoration: none;
}

.title a:link,
.title a:active,
.title a:hover,
.title a:visited {
  color: #d2cdd3;
}

.title__app {
  display: flex;
}

.full__height {
  height: auto;
  /* border: 1px solid #ccc; */
}

.sidebar {
  padding: 20px;
  background-color: #0c0e1f;
}

.menu__sidebar {
  margin: 30px 0;
  font-size: 70%;
}

.menu__sidebar ul {
  list-style: none;
}

.menu__sidebar p {
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 500;
  color: #eee;
}

.menu__sidebar li {
  margin-bottom: 5px;
}

.menu__sidebar .fas,
.menu__sidebar .fab {
  width: 12px;
  height: 12px;
  margin-right: 20px;
}
</style>
