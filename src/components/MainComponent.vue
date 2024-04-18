<template>
  <main>

    <!-- section for movies -->
    <section>
      <CardList :cards="storage.movies" />
    </section>

    <!-- section for series -->
    <section>
      <CardList :cards="storage.series" />
    </section>
  </main>
</template>

<script>
import { storage } from "../data/storage.js";
import CardList from "./CardList.vue";
export default {
  name: "MainComponent",
  components: {
    CardList,
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
main {
  padding-top: 60px;
}

</style>
