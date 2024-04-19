<template>
  <div class="wrapped">
    <VideoStart />
    <HeaderComponent
      :class="storage.showVideo ? 'd-none' : ''"
      @startSearch="getMedia()"
    />
    <MainComponent :class="storage.showVideo ? 'd-none' : ''" />
    <FooterComponent :class="storage.showVideo ? 'd-none' : ''" />
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "./data/storage.js";
import VideoStart from "./components/VideoStart.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    VideoStart,
    FooterComponent,
  },
  data() {
    return {
      storage,
    };
  },
  methods: {
    getMedia() {
      if (this.storage.options.params.query) {
        this.getMovies();
        this.getSeries();
        this.storage.showHome = false;
      }
    },
    getMovies() {
      axios
        .get(
          this.storage.apiUrl + this.storage.endPoint.movie,
          this.storage.options
        )
        .then((res) => {
          this.storage.movies = res.data.results;
        });
    },
    getSeries() {
      axios
        .get(
          this.storage.apiUrl + this.storage.endPoint.series,
          this.storage.options
        )
        .then((res) => {
          this.storage.series = res.data.results;
        });
    },
    getDisney() {
      axios
        .get(
          this.storage.apiUrl + this.storage.filterMenu[0].apiCall,
          this.storage.options
        )
        .then((res) => {
          console.log(res.data.results);
          this.storage.filterMenu[0].movies = res.data.results;
        });
    },
    getDisneySeries() {
      axios
        .get(
          this.storage.apiUrl + this.storage.endPoint.discoverSeries,
          this.storage.options
        )
        .then((res) => {
          console.log(res.data.results);
          this.storage.disneySeries = res.data.results;
        });
    },
    getTrending() {
      axios
        .get(
          this.storage.apiUrl + this.storage.endPoint.trending,
          this.storage.options
        )
        .then((res) => {
          console.log(res.data.results);
          this.storage.trending = res.data.results;
        });
    },
  },
  created() {
    this.getDisney();
    this.getDisneySeries();
    this.getTrending();
  },
};
</script>

<style lang="scss" scoped>
.wrapped {
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
}
</style>
