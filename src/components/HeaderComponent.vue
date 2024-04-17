<template>
  <header>
    <input
      type="text"
      placeholder="Cerca..."
      v-model="storage.options.params.query"
      @keyup.enter="$emit('startSearch')"
    />
    <button @click="$emit('startSearch')">
      <i class="fa-solid fa-magnifying-glass"></i>
    </button>
  </header>
</template>

<script>
import { storage } from "../data/storage.js";
export default {
  name: "HeaderComponent",
  data() {
    return {
      storage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
