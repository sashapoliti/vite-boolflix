import { reactive } from "vue";

export const storage = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
    discoverSeries: "discover/tv?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=670",
    trending: 'trending/movie/day?language=en-US' 
  },
  options: {
    params: {
      api_key: "9e338abc216e9177a5ac8c366d5d489e",
      query: "",
    },
  },
  imageUrl: "https://image.tmdb.org/t/p/original",
  showVideo: false,
  showHome: true,
  movies: [],
  series: [],
  trending: [],
  jumboSlides: [
    "/images/wish.jpg",
    "/images/simpson.jpg",
    "/images/guardians.jpg",
    "/images/insideout.jpg",
    "/images/natgeo.jpg",
    "/images/more.jpg",
  ],
  filterMenu: [
    {
        companie: 'Disney',
        image: 'disney_logo.png',
        background: 'disney_bg.jpg',
        overEffect: false,
        apiCall: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166',
        movies: []
    },
    {
        companie: 'Pixar',
        image: 'pixar_logo.png',
        background: 'pixar_bg.jpg',
        overEffect: false,
        apiCall: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166',
    },
    {
        companie: 'Marvel',
        image: 'marvel_logo.png',
        background: 'marvel_bg.jpg',
        overEffect: false,
        apiCall: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166',
    },
    {
        companie: 'Star Wars',
        image: 'starwars_logo.png',
        background: 'starwars_bg.jpg',
        overEffect: false,
        apiCall: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166',
    },
    {
        companie: 'National Geographic',
        image: 'natgeo_logo.png',
        background: 'natgeo_bg.jpg',
        overEffect: false,
        apiCall: 'discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_companies=3166',
    },
  ],
  disneySeries: []
});
