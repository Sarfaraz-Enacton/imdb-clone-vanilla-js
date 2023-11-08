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

// function getTrendingMovies(data) {
//   const moviesHtml = data
//     .slice(0, 5)
//     .map((movie) => {
//       return `
//           <div class="swiper-slide hero-card">
//             <div class="hero-bg-wrapper">
//               <img class="hero-bg" src=${
//                 imgBaseUrl + movie.backdrop_path
//               } alt=${movie.title} />
//             </div>
//             <div class="hero-card-content">
//               <div class="hero-card-img-wrapper">
//                 <img class="hero-card-img" src=${
//                   imgBaseUrl + movie.poster_path
//                 } alt=${movie.title} />
//               </div>
//               <div>
//                 <h3 class="card-title text-3xl">${movie.title}</h3>
//                 <p>${movie.overview.slice(0, 50)}</p>
//               </div>
//             </div>
//           </div>
//         `;
//     })
//     .join("");

//   document.querySelector("#trending-movies").innerHTML = `
//       <div class="swiper">
//         <div class="swiper-wrapper overflow-hidden">
//           ${moviesHtml}
//         </div>
//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>
//       </div>
//     `;

//   // Initialize Swiper here
//   var swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 20,
//     loop: false,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// }
