<template>
  <main class="container">
    <CardCarousel />
  </main>
</template>

<script>
import { storage } from "../data/storage.js";
import CardCarousel from "./CardCarousel.vue";
export default {
  name: "MainComponent",
  components: {
    CardCarousel,
  },
  data() {
    return {
      storage,
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>

</style>
