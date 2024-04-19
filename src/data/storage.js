import { reactive } from "vue";

export const storage = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
  },
  options: {
    params: {
      api_key: "9e338abc216e9177a5ac8c366d5d489e",
      query: "",
    },
  },
  imageUrl: "https://image.tmdb.org/t/p/original",
  showVideo: true,
  movies: [],
  series: [],
  jumboSlides: [
    "https://images.ecestaticos.com/2O8n-y2kcXMhWoRFN4uKIW-82cQ=/0x0:1918x1078/1600x900/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/a73/f85/d17/a73f85d17f0b2300eddff0d114d4ab10.png,0,860,1)/f.elconfidencial.com/original/506/c40/931/506c40931bdbb5de2b16db8dac8f3766.jpg",
    "https://picsum.photos/id/238/1800/450",
    "https://picsum.photos/id/239/1800/450",
    "https://picsum.photos/id/241/1800/450",
    "https://picsum.photos/id/243/1800/450",
    "https://picsum.photos/id/230/1800/450",
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
  ]
});
