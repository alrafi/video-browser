<template>
  <div class="row section__content">
    <GamingContent></GamingContent>
    <MusicContent></MusicContent>
  </div>
</template>

<script>
import GamingContent from "./GamingContent";
import MusicContent from "./MusicContent";

export default {
  name: "SectionContent",
  components: {
    GamingContent,
    MusicContent
  }
};
</script>

<style>
/* section content */
.row .section__content {
  margin: 30px 0;
}

.section__content .col {
  padding: 0;
}
</style>