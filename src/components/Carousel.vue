<template>
  <div class="carousel d-flex ">
      <button @click="next" class="next">Next</button>
      <div class="slide">
        <img :src="storage.jumboSlides[visibleSlide]" alt=""> 
      </div>     
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
  height: 450px;
  margin: 0 auto;
  .slide {
    overflow: hidden;
    width: calc(100% - 100px);
    box-shadow: 0 2px 8px 3px #000;
  }
  button {
    height: 100%;
    width: 50px;
    border: none;
    background-color: transparent;
    color: white;
    &.next {
      padding-right: 10px;
    }
    &.prev {
      padding-left: 10px;
    }
  }
}
</style>
