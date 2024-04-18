<template>
    <div class="cards-list d-flex flex-wrap mt-5 ">
        <CardComponent v-for="card in cards" :key="card.id" :media="card" />
    </div>
</template>

<script>
import { storage } from "../data/storage.js";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  props: {
    cards : Array
  },
  components: {
    CardComponent,
  },
  data() {
    return {
      storage,
    };
  }
};
</script>

<style lang="scss">
  
</style>
