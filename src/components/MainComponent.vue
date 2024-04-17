<template>
  <main>
    <CardList />
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

</style>
