<template>
  <div class="full__height content">
    <TrendingContent></TrendingContent>
    <SectionContent></SectionContent>
  </div>
</template>

<script>
// import SearchBar from "./SearchBar";
import TrendingContent from "./TrendingContent";
import SectionContent from "./SectionContent";

export default {
  name: "Content",
  components: {
    // SearchBar,
    TrendingContent,
    SectionContent
  }
};
</script>

<style>
/* CONTENT */
.content {
  padding: 20px;
}

.full__height {
  height: auto;
  /* border: 1px solid #ccc; */
}
</style>