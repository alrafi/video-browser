<template>
  <div class="col-2 d-none d-lg-block full__height sidebar">
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
          <i class="fas fa-plane"></i>Travel
        </li>
        <li>
          <i class="fas fa-football-ball"></i>Sports
        </li>
        <li>
          <i class="fas fa-camera"></i>Entertainment
        </li>
        <li>
          <i class="fas fa-video"></i>Films
        </li>
        <li>
          <i class="fas fa-car"></i>Vehicles
        </li>
        <li>
          <i class="fas fa-book-open"></i>News
        </li>
        <li>
          <i class="fas fa-dna"></i>Science
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
/* SIDEBAR*/

.full__height {
  height: auto;
  /* border: 1px solid #ccc; */
}

.sidebar {
  padding: 0 20px;
  background-color: #212121;
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
