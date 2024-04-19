<template>
  <div class="carousel d-flex">
    <button @click="prev" class="prev d-flex align-items-center">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div class="slide d-flex align-items-center justify-content-center position-relative ">
      <div class="logo">
        <img :src="storage.jumboSlides[visibleSlide].logo" alt="">
      </div>
      <img :src="storage.jumboSlides[visibleSlide].image" alt="" />
    </div>
    <button
      @click="next"
      class="next d-flex align-items-center justify-content-end"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";

export default {
  name: "Carousel",
  components: {},
  data() {
    return {
      storage,
      visibleSlide: 0,
    };
  },
  mounted() {
    this.interval = setInterval(this.next, 5000);
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
    beforeUnmount() {
      clearInterval(this.interval);
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  height: 550px;
  margin: 0 auto;
  .slide {
    overflow: hidden;
    width: 100%;
    box-shadow: 0 2px 8px 3px #000;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }
    .logo {
      width: 500px;
      position: absolute;
      left: 100px;
      img {
        width: 100%;
        filter: drop-shadow(5px 4px 5px rgb(0, 0, 0));
      }
    }
  }
  button {
    font-size: 2.7rem;
    height: 100%;
    width: 50px;
    border: none;
    background-color: transparent;
    color: white;
  }
}
</style>
