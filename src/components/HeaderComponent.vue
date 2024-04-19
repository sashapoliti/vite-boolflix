<template>
  <header class="d-flex">
    <!-- logo -->
    <img src="/images/disneylogo.png" alt="Logo Disney" />
    <!-- navbar -->
    <nav>
      <ul class="d-flex align-items-center h-100">
        <li>
          <a href="#" @click.prevent="this.storage.showHome = true, this.storage.options.params.query = ''"
            ><i class="fa-solid fa-house"></i> <span>Home</span></a
          >
        </li>
        <li>
          <a href="#" @click.prevent=""
            ><i class="fa-solid fa-plus"></i> <span>Watchlist</span></a
          >
        </li>
        <li>
          <a href="#" @click.prevent=""
            ><i class="fa-solid fa-star"></i> <span>Originals</span></a
          >
        </li>
        <li>
          <a href="#" @click.prevent=""
            ><i class="fa-solid fa-film"></i> <span>Movies</span></a
          >
        </li>
        <li>
          <a href="#" @click.prevent=""
            ><i class="fa-solid fa-tv"></i> <span>Series</span></a
          >
        </li>
      </ul>
    </nav>
    <!-- input -->
    <div class="input-area d-flex align-items-center">
      <input
        type="text"
        placeholder="Search by title"
        v-model.trim="storage.options.params.query"
        @keyup.enter="$emit('startSearch')"
      />
      <button @click="$emit('startSearch')">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <!-- profile -->
    <div class="profile ms-auto d-flex align-items-center">
      <span>Sasha Politi</span>
      <div class="icon">
        <img src="/images/profileicon.png" alt="Profile Icon" />
      </div>
    </div>
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
  .input-area {
    margin-left: 40px;
    input {
      font-size: 0.8rem;
      background-color: $bg-header;
      border: 1px solid $c-text;
      border-right: none;
      padding: 5px 10px;
      height: 30px;
      border-radius: 7px 0 0 7px;
      outline: none;
      color: $c-text;
      &::placeholder {
        color: $c-text;
      }
    }
    button {
      width: 40px;
      height: 30px;
      border: 1px solid $c-text;
      background: $c-text;
      text-align: center;
      color: $bg-header;
      border-radius: 0 7px 7px 0;
      cursor: pointer;
      font-size: 20px;
    }
  }
  .profile {
    font-size: 0.9rem;
    color: $c-text;
  }
}
</style>
