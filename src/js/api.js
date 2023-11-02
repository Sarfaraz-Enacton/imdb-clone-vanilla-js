import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import CardComponent from "./card";
import { config } from "../../config";

// const apiKey = "767b968308d8414497b55720a1c73bef";
const imgBaseUrl = "https://image.tmdb.org/t/p/original/";
const baseUrl = "https://api.themoviedb.org/3/";
const endpoint = "trending/all/day";

const apiUrl = `${baseUrl}${endpoint}`;
console.log(apiUrl);

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${config.bearer_token}`,
  },
};

fetch(apiUrl, options)
  .then((res) => {
    if (res.status !== 200) {
      console.error("Error:" + res.status);
      return;
    }
    return res.json();
  })
  .then((data) => {
    const { results } = data;
    return console.log(results[0]) || getTrendingMovies(results);
  })
  .catch((err) => {
    console.error("Error:" + err);
  });

// function getTrendingMovies(data) {
//   return (document.querySelector("#trending-movies").innerHTML = data
//     .map((data) => {
//       return `
//         <div class="swiper-slide">
//             <div class="relative">
//             <img src="" class="w-full h-full object-cover" alt="" />
//             </div>
//             <div class="">
//             <div class="">
//                 <img src="" alt="" />
//             </div>
//             <div class="">
//                 <h3 class=''>${data?.title}</h3>
//                 <p>${data?.overview}</p>
//             </div>
//             </div>
//       </div>`;
//     })
//     .join(""));
// }

function getTrendingMovies(data) {
  const moviesHtml = data
    .slice(0, 5)
    .map((movie) => {
      return `
          <div class="swiper-slide hero-card">
            <div class="hero-bg-wrapper">
              <img class="hero-bg" src=${
                imgBaseUrl + movie.backdrop_path
              } alt=${movie.title} />
            </div>
            <div class="hero-card-content">
              <div class="hero-card-img-wrapper">
                <img class="hero-card-img" src=${
                  imgBaseUrl + movie.poster_path
                } alt=${movie.title} />
              </div>
              <div>
                <h3 class="card-title text-3xl">${movie.title}</h3>
                <p>${movie.overview.slice(0, 50)}</p>
              </div>
            </div>
          </div>
        `;
    })
    .join("");

  document.querySelector("#trending-movies").innerHTML = `
      <div class="swiper">
        <div class="swiper-wrapper overflow-hidden">
          ${moviesHtml}
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    `;

  // Initialize Swiper here
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
