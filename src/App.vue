<template>
  <h1 class="text-center">Ciao</h1>
  <i class="fa fa-solid fa-home"></i>
</template>

<script>
import axios from 'axios';
import { storage } from './data/storage.js'
  export default {
    name: 'App',
    data() {
      return {
        storage
      }      
    },
    methods : {
        getMovies() {
          axios.get(this.storage.apiUrl + this.storage.endPoint.movie, this.storage.options).then((res) => {
            console.log(res.data.results);
          })
        }
      },
      created() {
        this.getMovies();
      }
  }
</script>

<style lang="scss" scoped>

</style>