<template>
  <ul>
    <h2>Movies</h2>
    <li class="mt-2" v-for="movie in storage.movies">
      <ol>
        <li>
          <img
            :src="storage.imageUrl + movie.poster_path"
            :alt="movie.original_title"
          />
        </li>
        <li>{{ movie.title }}</li>
        <li>{{ movie.original_title }}</li>
        <li>
          <span
            :class="
              movie.original_language === 'en'
                ? 'fi fi-gb'
                : movie.original_language === 'da'
                ? 'fi fi-dk'
                : movie.original_language === 'cs'
                ? 'fi fi-cz'
                : movie.original_language === 'ja'
                ? 'fi fi-jp'
                : movie.original_language === 'ko'
                ? 'fi fi-kr'
                : `fi fi-${movie.original_language}`
            "
          ></span>
        </li>
        <li>{{ transformVote(movie.vote_average) }}</li>
        <li>
          <span
            v-for="index in 5"
            :key="index"
            :class="getStarClass(index, transformVote(movie.vote_average))"
          ></span>
        </li>
      </ol>
    </li>
  </ul>

  <ul>
    <h2>Series</h2>
    <li class="mt-2" v-for="series in storage.series">
      <ol>
        <li>
          <img
            :src="storage.imageUrl + series.poster_path"
            :alt="series.original_title"
          />
        </li>
        <li>{{ series.name }}</li>
        <li>{{ series.original_name }}</li>
        <li>
          <span
            :class="
              series.original_language === 'en'
                ? 'fi fi-gb'
                : series.original_language === 'da'
                ? 'fi fi-dk'
                : series.original_language === 'cs'
                ? 'fi fi-cz'
                : series.original_language === 'ja'
                ? 'fi fi-jp'
                : series.original_language === 'ko'
                ? 'fi fi-kr'
                : `fi fi-${series.original_language}`
            "
          ></span>
        </li>
        <li>{{ transformVote(series.vote_average) }}</li>
      </ol>
    </li>
  </ul>
</template>

<script>
import { storage } from "../data/storage.js";
export default {
  name: "MainComponent",
  data() {
    return {
      storage,
    };
  },
  methods: {
    transformVote(vote) {
      return Math.ceil(vote / 2);
    },
    getStarClass(index, vote) {
      if (index <= vote) {
        return 'fa fa-star';
      } else {
        return 'far fa-star';
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";
</style>
