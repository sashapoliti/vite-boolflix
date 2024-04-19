<template>
  <div
    class="card-carousel"
    data-bs-toggle="modal"
    :data-bs-target="`#${media.id}`"
  >
    <img
      :src="
        media.backdrop_path
          ? `${storage.imageUrl}${media.poster_path}`
          : '/images/default.jpg'
      "
      alt=""
    />
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    :id="media.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <div class="image-container">
            <img
              :src="
                media.backdrop_path
                  ? `${storage.imageUrl}${media.backdrop_path}`
                  : '/images/default.jpg'
              "
              alt=""
            />
            <div class="info">
              <div class="disney d-flex align-items-center">
                <img src="/images/disneylogo.png" alt="Disney Logo" />
                <h4>Product</h4>
              </div>
              <h2>{{ media.original_title || media.original_name }}</h2>
              <div class="command d-flex align-items-center">
                <button class="play d-flex align-items-center">
                  <i class="fa-solid fa-play"></i> Play
                </button>
                <button
                  class="plus d-flex align-items-center justify-content-center"
                >
                  <i class="fa-solid fa-plus"></i>
                </button>
                <button
                  class="pref d-flex align-items-center justify-content-center"
                >
                  <i class="fa-regular fa-thumbs-up"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body">
          <p>{{ media.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { storage } from "../data/storage.js";

export default {
  name: "StretchCarouselCard",
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

.card-carousel {
  height: 330px;
  margin-right: 59px;
  border-radius: 15px;
  box-shadow: 0 4px 12px 1px #030618;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    border-color: $c-text;
  }
  img {
    height: 330px;
    border-radius: 15px;
    border: 2px solid $border;
    &:hover {
      border-color: $c-text;
    }
  }
}
.modal {
  z-index: 1050;
  .modal-dialog {
    max-width: 50%;
    .modal-content {
      overflow: hidden;
      background-color: $bg-primary;
      color: $c-text;
      .modal-header {
        position: relative;
        padding: 0;
        border-bottom: none;
        button.btn-close {
          color: $c-text;
          background-color: $bg-primary;
          border-radius: 50px;
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 1;
        }
        .image-container {
          position: relative;
          img {
            width: 100%;
          }
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%; /* Altezza della parte inferiore da rendere trasparente */
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(25, 32, 41, 1) 70%
            );
          }
          .info {
            position: absolute;
            bottom: 30px;
            left: 40px;
            z-index: 1;
            .disney {
              margin-bottom: -15px;
              margin-left: -10px;
              img {
                width: 120px;
              }
              h4 {
                color: rgba(255, 255, 255, 0.644);
                font-size: 1.3rem;
                font-weight: 600;
                margin-bottom: -25px;
                text-transform: uppercase;
                letter-spacing: 5px;
              }
            }
            h2 {
              font-size: 5rem;
              font-weight: 800;
              margin: 0;
              margin-left: -4px;
            }
            .command {
              button {
                margin-right: 7px;
                &.play {
                  color: black;
                  background-color: $c-text;
                  padding: 3px 30px;
                  font-weight: 600;
                  border: 0;
                  border-radius: 5px;
                  i {
                    font-size: 1.4rem;
                    margin-right: 10px;
                  }
                }
                &.plus,
                &.pref {
                  width: 28px;
                  aspect-ratio: 1 / 1;
                  padding: 5px;
                  color: $c-text;
                  background-color: rgba(0, 0, 0, 0.349);
                  border: 1px solid $c-text;
                  border-radius: 50px;
                }
                &:hover {
                  transform: scale(1.1);
                  transition-duration: 0.2s;
                }
              }
            }
          }
        }
      }
      .modal-body {
        padding: 0 40px;
      }
    }
  }
}
</style>
