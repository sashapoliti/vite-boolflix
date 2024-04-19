<template>
  <main>
    <!-- main section - home -->
    <section class="home" v-if="!storage.options.params.query">
      <Carousel />

      <div class="filter-cards d-flex justify-content-between">
        <HomeMenuCard v-for="card in storage.filterMenu" :media="card" />
      </div>

      <div class="disney-classics">
        <h4>Disney Classics</h4>
        <CarouselList :cards="storage.filterMenu[0].movies" />
      </div>

      <div class="disney-classics">
        <h4>Disney Series</h4>
        <CarouselList :cards="storage.disneySeries" />
      </div>

      ciao
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
import CarouselList from "./CarouselList.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
    Carousel,
    HomeMenuCard,
    CarouselList,
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
  padding: 100px 30px 0;
  margin: 0 auto; 
  max-width: 2400px;
  section.home {       
    color: $c-text;
    .filter-cards {
      margin: 60px 50px;
    }
    .disney-classics {
      margin: 0 50px;
      h4 {
        font-weight: 600;
      }
    }
  }
  h2 {
    color: $c-text;
    padding-left: 40px;
  }
}
</style>
