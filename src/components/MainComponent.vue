<template>
    <ul>
        <li class="mt-2" v-for="movie in storage.movies">
            <ol>
                <li>{{ movie.title }}</li>
                <li>{{ movie.original_title }}</li>
                <li><span :class="movie.original_language === 'en' ? 'fi fi-gb' : movie.original_language === 'da' ? 'fi fi-dk' : movie.original_language === 'cs' ? 'fi fi-cz' : movie.original_language === 'ja' ? 'fi fi-jp' : `fi fi-${movie.original_language}`"></span></li>
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
@import "/node_modules/flag-icons/css/flag-icons.min.css";

</style>