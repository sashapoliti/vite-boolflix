<template>
  <div class="card-search" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <img :src="media.backdrop_path ? `${storage.imageUrl}${media.backdrop_path}` : '/images/default.jpg'" alt="" />
  </div>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ciao ciao
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { storage } from "../data/storage.js";

export default {
  name: "CardComponent",
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

.card-search {
  width: calc(100% / 6 - 20px);
  
  margin: 10px;
  border-radius: 15px;
  box-shadow: 0 4px 12px 1px #030618;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border-color: $c-text;
  }
  img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 15px;
    border: 2px solid $border;
    object-fit: fill;
    &:hover {
      border-color: $c-text;
    }
  }
}
</style>
