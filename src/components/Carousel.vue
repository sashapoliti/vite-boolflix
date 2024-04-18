<template>
  <div class="carousel">
      <img :src="storage.jumboSlides[visibleSlide]" alt="">

      <button @click="next" class="next">Next</button>
      <button @click="prev" class="prev">Prev</button>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";

export default {
  name: "Carousel",
  components: {
  },
  data() {
    return {
      storage,
      visibleSlide: 0,
    };
  },
  methods: {
    next() {
      if (this.visibleSlide < this.storage.jumboSlides.length - 1) {
        this.visibleSlide++;
      } else {
        this.visibleSlide = 0;
      }
    },
    prev() {
      if (this.visibleSlide > 0) {
        this.visibleSlide--;
      } else {
        this.visibleSlide = this.storage.jumboSlides.length - 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 1200px;
  height: 450px;
  margin: 0 auto;
  box-shadow: 0 2px 8px 3px #000;
  button {
    position: absolute;
    height: 40px;
    width: 50px;
    top: calc(50% - 20px);
    border: none;
    background-color: transparent;
    color: white;
    &.next {
      right: -50px;
    }
    &.prev {
      left: -50px;
    }
  }
}
</style>
