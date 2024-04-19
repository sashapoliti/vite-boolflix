<template>
  <div class="wrapped">
    <VideoStart />
    <HeaderComponent
      :class="storage.showVideo ? 'd-none' : ''"
      @startSearch="getMedia()"
    />
    <MainComponent :class="storage.showVideo ? 'd-none' : ''" />
  </div>
</template>

<script>
import axios from "axios";
import { storage } from "./data/storage.js";
import VideoStart from "./components/VideoStart.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    VideoStart,
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
  },
  created() {
    this.getDisney();
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
