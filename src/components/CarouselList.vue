<template>
  <div class="carousel-container" ref="carouselContainer">
    <button @click="prev()" class="prev d-flex align-items-center">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div
      class="carousel-list d-flex"
      :style="{ transform: `translateX(${translateX}px)` }"
    >
      <CarouselCard v-for="card in cards" :key="card.id" :media="card" />
    </div>
    <button @click="next()" class="next d-flex align-items-center">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";
import CarouselCard from "./CarouselCard.vue";

export default {
  name: "CarouselList",
  props: {
    cards: Array,
  },
  components: {
    CarouselCard,
  },
  data() {
    return {
      storage,
      translateX: 0,
    };
  },
  methods: {
    prev() {
      if (this.translateX < 0) {
        this.translateX += 1200;
      }
    },
    next() {
      if (this.translateX > -6000) {
        this.translateX -= 1200;
      }
    },
  },
};
</script>

<style lang="scss">
.carousel-container {
  position: relative;
  margin-bottom: 50px;
  .carousel-list {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  button {
    position: absolute;
    font-size: 2.7rem;
    border: none;
    background-color: transparent;
    color: white;
    &.prev {
      left: -50px;
      top: calc(50% - 27px);
      z-index: 3;
    }
    &.next {
      right: -50px;
      top: calc(50% - 27px);
      z-index: 3;
    }
  }
}
</style>
