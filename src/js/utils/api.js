import movieCard from "../components/movieCard";
import tvShowCard from "../components/tvShowCards";
import upcomingCards from "../components/upcomingCards";
import CardComponent from "../components/swiperHeroCard";
import fetchApi from "./fetchApi";

export const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
//hero swiper card
fetchApi(
  "https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US",
  CardComponent
);

//upcoming card
fetchApi(
  "https://api.themoviedb.org/3/movie/upcoming?include_adult=false&language=en-US",
  upcomingCards
);

//top tv show card
fetchApi(
  "https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200",
  tvShowCard
);

//top movie card
fetchApi(
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
  movieCard
);
