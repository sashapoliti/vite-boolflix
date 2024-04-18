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
    "https://picsum.photos/id/237/1200/450",
    "https://picsum.photos/id/238/1200/450",
    "https://picsum.photos/id/239/1200/450",
    "https://picsum.photos/id/241/1200/450",
    "https://picsum.photos/id/243/1200/450",
    "https://picsum.photos/id/230/1200/450",
  ],
});
