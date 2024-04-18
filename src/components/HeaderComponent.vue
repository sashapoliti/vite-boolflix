<template>
  <header class="d-flex">
    <img src="/images/disneylogo.png" alt="Logo Disney">
    <nav>
      <ul class="d-flex align-items-center h-100">
        <li><a href="#"><i class="fa-solid fa-house"></i> <span>Home</span></a></li>
        <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i> <span>Search</span></a></li>
        <li><a href="#"><i class="fa-solid fa-plus"></i> <span>Watchlist</span></a></li>
        <li><a href="#"><i class="fa-solid fa-star"></i> <span>Originals</span></a></li>
        <li><a href="#"><i class="fa-solid fa-film"></i> <span>Movies</span></a></li>
        <li><a href="#"><i class="fa-solid fa-tv"></i> <span>Series</span></a></li>
      </ul>
    </nav>
    <input
      type="text"
      placeholder="Cerca..."
      v-model.trim="storage.options.params.query"
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

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

header {
  width: 100%;
  background-color: $bg-header;
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 1000;
  img {
    height: 60px;
    padding: 0 20px;
  }
  nav {
    ul {
      li {
        margin-right: 10px;
        a {
          padding: 10px;
          font-size: 0.8rem;
          font-weight: 600;
          color: $c-text;
          text-decoration: none;
          text-transform: uppercase;
          i {
            margin-right: 5px;
          }
          &:hover span {
            border-bottom: 3px solid $c-text;
            transition-duration: 0.1s;
          }
        }
      }
    }
  }
}
</style>
