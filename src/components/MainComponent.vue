<template>
  <main>
    <!-- main section - home -->
    <section class="home" v-if="!storage.options.params.query">
      <Carousel />

      <div class="filter-cards d-flex justify-content-between">
        <HomeMenuCard v-for="card in storage.filterMenu" :media="card" />
      </div>
    </section>

    <!-- section for search movies -->
    <section v-if="storage.options.params.query">
      <h2>Movies</h2>
      <CardList :cards="storage.movies" />
    </section>

    <!-- section for search series -->
    <section v-if="storage.options.params.query" class="mt-4">
      <h2>Series</h2>
      <CardList :cards="storage.series" />
    </section>
  </main>
</template>

<script>
import { storage } from "../data/storage.js";
import CardList from "./CardList.vue";
import Carousel from "./Carousel.vue";
import HomeMenuCard from "./HomeMenuCard.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
    Carousel,
    HomeMenuCard,
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
    margin: 0 auto;
    max-width: 1800px;
    color: $c-text;
    .filter-cards {
      margin: 60px;
    }
  }
  h2 {
    color: $c-text;
    padding-left: 40px;
  }
}
</style>
