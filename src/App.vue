<template>
  <HeaderComponent @startSearch="getMedia()" />
  <MainComponent />
</template>

<script>
import axios from "axios";
import { storage } from "./data/storage.js";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
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
          console.log(res.data.results);
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
          console.log(res.data.results);
          this.storage.series = res.data.results;
        });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
