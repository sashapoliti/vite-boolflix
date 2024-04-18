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
  movies: [],
  series: [],
  jumboSlides: [
    "https://picsum.photos/id/237/1800/450",
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
        overEffect: false
    },
    {
        companie: 'Pixar',
        image: 'pixar_logo.png',
        background: 'pixar_bg.jpg',
        overEffect: false
    },
    {
        companie: 'Marvel',
        image: 'marvel_logo.png',
        background: 'marvel_bg.jpg',
        overEffect: false
    },
    {
        companie: 'Star Wars',
        image: 'starwars_logo.png',
        background: 'starwars_bg.jpg',
        overEffect: false
    },
    {
        companie: 'National Geographic',
        image: 'natgeo_logo.png',
        background: 'natgeo_bg.jpg',
        overEffect: false
    },
  ]
});
