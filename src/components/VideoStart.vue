<template>
    <div class="d-flex align-items-center justify-content-center" :class="storage.showVideo ? '' : 'd-none'">
        <video src="/videos/disneystart.mp4" autoplay muted></video>
    </div>
</template>

<script>
    import { storage } from "../data/storage.js";
    export default {
      name : "VideoStart",
      data () {
        return {
            storage
        }
      },
      mounted() {
        setTimeout(() => {
            this.storage.showVideo = false;
        }, 4000)
      }
    }
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
    width: 100%;
    overflow: hidden;
}
</style>