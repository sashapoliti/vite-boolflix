<template>
    <ul>
        <li class="mt-2" v-for="movie in storage.movies">
            <ol>
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li>{{ movie.original_language }}</li>
                <li>{{ movie.vote_average }}</li>
            </ol>
        </li>
    </ul>
</template>

<script>
import { storage } from '../data/storage.js'
    export default {
        name: 'MainComponent',
        data() {
            return {
                storage
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>