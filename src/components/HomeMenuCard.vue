<template>
  <div
    class="card-filter"
    :style="
      media.overEffect
        ? { 'background-image': `url(/images/${media.background})` }
        : {}
    "
    @mouseenter="setHover()"
    @mouseleave="setHover()"
  >
    <img :src="`/images/${media.image}`" alt="" />
  </div>
</template>

<script>
export default {
  name: "HomeMenuCard",
  props: {
    media: Object,
  },
  data() {
    return {};
  },
  methods: {
    setHover() {
      this.media.overEffect = !this.media.overEffect;
    }
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.card-filter {
  width: calc(100% / 5 - 50px);
  background-image: linear-gradient(357deg, #1f232b, #2b2c30);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid $border;
  border-radius: 15px;
  box-shadow: 0 4px 12px 1px #030618;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
    border-color: $c-text;
  }
  img {
    width: 100%;
  }
}
</style>
