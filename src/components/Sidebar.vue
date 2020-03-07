<template>
  <div class="col-2 full__height sidebar">
    <div class="title">
      <i class="fas fa-bars"></i>
      <img src="./logo.png" alt="vue-logo" />
      <h1>ueTube</h1>
    </div>
    <div class="menu__sidebar">
      <p>Menu</p>
      <ul>
        <li>
          <i class="fas fa-home"></i>Home
        </li>
        <li>
          <i class="fas fa-fire"></i>Trending
        </li>
        <li>
          <i class="fab fa-youtube"></i>Live
        </li>
      </ul>
    </div>
    <div class="menu__sidebar">
      <p>Library</p>
      <ul>
        <li>
          <i class="fas fa-heart"></i>Loved
        </li>
        <li>
          <i class="fas fa-bookmark"></i>Saved
        </li>
      </ul>
    </div>
    <div class="menu__sidebar">
      <p>Category</p>
      <ul>
        <li>
          <i class="fas fa-music"></i>Music
        </li>
        <li>
          <i class="fas fa-gamepad"></i>Gaming
        </li>
        <li>
          <i class="fas fa-plane"></i>Travel & Events
        </li>
        <li>
          <i class="fas fa-football-ball"></i>Sports
        </li>
        <li>
          <i class="fas fa-camera"></i>Entertainment
        </li>
        <li>
          <i class="fas fa-video"></i>Film & Animation
        </li>
        <li>
          <i class="fas fa-car"></i>Autos & Vehicles
        </li>
        <li>
          <i class="fas fa-book-open"></i>News & Politics
        </li>
        <li>
          <i class="fas fa-dna"></i>Science & Tech
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
</style>