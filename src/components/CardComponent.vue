<template>
  <div class="flip-card" tabIndex="0">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="storage.imageUrl + media.poster_path" alt="" />
      </div>
      <div class="flip-card-back">
        <ul>
          <li><strong>Titolo</strong>: {{ media.title || media.name }}</li>
          <li>
            <strong>Titolo originale</strong>:
            {{ media.original_title || media.original_name }}
          </li>
          <li>
            <strong>Voto</strong>:
            <i
              v-for="n in 5"
              class="fa-star"
              :class="{ 'fa-solid': n <= transformVote, 'fa-regular': n > transformVote }"
            ></i>
          </li>
          <li><strong>Overview</strong>: {{ media.overview }}</li>
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
    media: Object,
  },
  data() {
    return {
      storage,
    };
  },
  methods: {},
  computed: {
    transformVote() {
      return Math.ceil(this.media.vote_average / 2);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.flip-card {
  flex-shrink: 0;
  background-color: transparent;
  width: 200px;
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
      overflow: hidden;
      img {
        width: 100%;
      }
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
