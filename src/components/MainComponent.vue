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
        <h4>What to Watch Tonight</h4>
        <div class="wrap-more">
          <div class="more d-flex align-items-center">
            <div class="call-to-action w-25 d-flex flex-column align-items-center justify-content-center">
              <img src="/images/more_logo.png" alt="">
              <button>View More</button>
            </div>
            <div class="w-75 h-100 ">              
              <StretchCarouselList :cards="storage.trending" />
            </div>
          </div>
        </div>
      </div>

      <div class="disney-classics">
        <h4>Disney Series</h4>
        <CarouselList :cards="storage.disneySeries" />
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
import CarouselList from "./CarouselList.vue";
import StretchCarouselList from "./StretchCarouselList.vue";

export default {
  name: "MainComponent",
  components: {
    CardList,
    Carousel,
    HomeMenuCard,
    CarouselList,
    StretchCarouselList,
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
      .wrap-more {
        width: 100vw;
        height: 350px;
        margin-left: -80px;
        margin-bottom: 50px;
        background-image: url("/images/watchmore.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        .more {
          height: 100%;
          margin: 0 80px;
          .call-to-action {
            margin-top: -40px;
            margin-right: 80px;
            img {
              width: 100%;
            }
            button {
              font-size: 1.5rem;
              font-weight: 600;
              color: $c-text;
              background-color: transparent;
              padding: 5px 20px;
              border: 2px solid $c-text;
              &:hover {
                background-color: $c-text;
                color: #13387C;
                transition-duration: 0.3S;
              }
            }
          }
        }
      }
    }
  }
  h2 {
    color: $c-text;
    padding-left: 40px;
  }
}
</style>
