<template>
  <main>
    <!-- main section - home -->
    <section class="home" v-if="!storage.options.params.query">
      <Carousel />
    </section>

    <!-- section for search movies -->
    <section>
      <CardList :cards="storage.movies" />
    </section>

    <!-- section for search series -->
    <section>
      <CardList :cards="storage.series" />
    </section>
  </main>
</template>

<script>
import { storage } from "../data/storage.js";
import CardList from "./CardList.vue";
import Carousel from "./Carousel.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
    Carousel
  },
  data() {
    return {
      storage,
      
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

main {
  padding-top: 100px;
  section.home {
    color: $c-text;
  }
}
</style>
