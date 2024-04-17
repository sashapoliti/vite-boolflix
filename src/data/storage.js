import {reactive} from 'vue';

export const storage = reactive({
    apiUrl : 'https://api.themoviedb.org/3/',
    endPoint : {
        movie : 'search/movie',
        series : 'search/tv',
    },
    options : {
        params : {
            api_key : '9e338abc216e9177a5ac8c366d5d489e',
            query : ''
        }
    },
    movies : [],
    series : []
});