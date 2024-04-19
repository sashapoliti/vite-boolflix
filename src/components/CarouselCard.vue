<template>
    <div class="card-carousel">
      <img :src="media.backdrop_path ? `${storage.imageUrl}${media.backdrop_path}` : '/images/default.jpg'" alt="" />
    </div>
  </template>
  
  <script>
  import { storage } from "../data/storage.js";
  
  export default {
    name: "CarouselCard",
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
    /* width: calc(100% / 5); */
    margin-right: 59px;
    border-radius: 15px;
    box-shadow: 0 4px 12px 1px #030618;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
      border-color: $c-text;
    }
    img {
      max-height: 167px;
      border-radius: 15px;
      border: 2px solid $border;
      &:hover {
        border-color: $c-text;
      }
    }
  }
  </style>