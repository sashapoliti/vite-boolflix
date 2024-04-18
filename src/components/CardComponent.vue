<template>
  <div class="flip-card" tabIndex="0">
    <div class="flip-card-inner">
      <div
        class="flip-card-front"
        :style="`background-image: url(${storage.imageUrl}${movie.poster_path})`"
      ></div>
      <div class="flip-card-back">
        <ul>
          <li><strong>Titolo</strong>: {{ movie.title }}</li>
          <li><strong>Titolo originale</strong>: {{ movie.original_title }}</li>
          <li>
            <strong>Voto</strong>:
            <span
              v-for="index in 5"
              :key="index"
              :class="getStarClass(index, transformVote(movie.vote_average))"
            ></span>
          </li>
          <li><strong>Overview</strong>: {{ movie.overview }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";
export default {
  name: "CardComponent",
  props: {
    movie: Object,
  },
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
        return "fa fa-star";
      } else {
        return "far fa-star";
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.flip-card {
  background-color: transparent;
  width: calc(100% / 6 - 16px);
  height: 300px;
  margin: 8px;
  perspective: 1000px;
  &:focus {
    outline: 0;
  }
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .flip-card-front {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 2;
    }
    .flip-card-back {
      padding: 10px;
      background: black;
      color: white;
      transform: rotateY(180deg);
      z-index: 1;
      overflow-y: scroll;
      ul {
        margin: 0;
        padding: 0;
      }
    }
  }
  &:hover .flip-card-inner,
  &:focus .flip-card-inner {
    transform: rotateY(180deg);
  }
}
</style>
