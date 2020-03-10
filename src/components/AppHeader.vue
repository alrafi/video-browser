<template>
  <div class="row header__app">
    <div class="col-4 col-md-3 col-lg-2 title">
      <i class="fas fa-bars"></i>
      <img src="../assets/logo.png" alt="vue-logo" />
      <h1>ueTube</h1>
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
  /* border-bottom: 1px solid #eee; */
  display: flex;
  background-color: #272727;
  padding: 10px 0;
}

.title {
  display: flex;
  /* align-items: baseline; */
  /* margin-right: 50px; */
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
    margin-top: 7px;
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
    margin-top: 5px;
  }
}
</style>