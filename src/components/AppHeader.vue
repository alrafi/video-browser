<template>
  <div class="row header__app">
    <div class="col-4 col-md-3 col-lg-2 title">
      <i class="fas fa-bars"></i>
      <router-link to="/">
        <img src="../assets/logo.png" alt="vue-logo" />
      </router-link>
      <router-link to="/">ueTube</router-link>
    </div>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name: "AppHeader",
  components: {
    SearchBar
  }
};
</script>

<style>
h1 {
  font-size: 100%;
}

.header__app {
  height: 50px;
  display: flex;
  background-color: #272727;
  padding: 8px 0;
}

.title {
  display: flex;
  /* align-items: baseline; */
  /* margin-right: 50px; */
}

.title img {
  width: 22px;
  height: 22px;
  margin-bottom: 5px;
  cursor: pointer;
}

.title h1 {
  margin-top: 1px;
  cursor: pointer;
}

.title i {
  width: 14px;
  height: 14px;
  margin-right: 15px;
  margin-top: 6px;
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

.header__app form {
  box-sizing: border-box;
  border: solid 1px #7d6e73;
  border-radius: 50px;
  /* width: 50%; */
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0 10px;
  margin: 0 10px;
}

@media (max-width: 425px) {
  .title img {
    width: 18px;
    height: 18px;
    margin-bottom: 3px;
  }

  .title h1 {
    margin: 0;
    font-size: 80%;
    padding-top: 5px;
  }

  .title i {
    width: 10px;
    height: 10px;
    margin-right: 15px;
    margin-top: 7px;
  }
}
</style>