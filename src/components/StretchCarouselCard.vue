<template>
  <div class="card-carousel">
    <img
      :src="
        media.backdrop_path
          ? `${storage.imageUrl}${media.poster_path}`
          : '/images/default.jpg'
      "
      alt=""
    />
  </div>
</template>

<script>
import { storage } from "../data/storage.js";

export default {
  name: "StretchCarouselCard",
  props: {
    media: Object,
  },
  data() {
    return {
      storage,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card-carousel {
  height: 330px;
  margin-right: 59px;
  border-radius: 15px;
  box-shadow: 0 4px 12px 1px #030618;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border-color: $c-text;
  }
  img {
    height: 330px;
    border-radius: 15px;
    border: 2px solid $border;
    &:hover {
      border-color: $c-text;
    }
  }
}
</style>
