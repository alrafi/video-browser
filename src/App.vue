<template>
  <div class="container-fluid">
    <AppHeader></AppHeader>
    <div class="row">
      <Sidebar></Sidebar>
      <div class="col-lg-10 col-12 full__height content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import AppHeader from "./components/AppHeader";

export default {
  name: "App",
  components: {
    AppHeader,
    Sidebar
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background-color: #18141c;
  color: #d2cdd3;
  font-family: "Lato", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 300;
}

.main__content {
  padding: 20px;
}
</style>
