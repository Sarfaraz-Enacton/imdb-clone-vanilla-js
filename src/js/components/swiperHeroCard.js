import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { imgBaseUrl } from "../utils/api";

// Initialize Swiper here

function CardComponent(data) {
  const trendingMovies = document.querySelector("#trending-movies");
  // console.log(data);
  const card = data
    .slice(0, 9)
    .map((movie) => {
      return `
                <div class="swiper-slide hero-card cursor-pointer" data-id=${
                  movie.id
                } data-media-type=${
        movie.media_type
      } onclick="previewClick(this)">
                <div class="shadow-class"></div>
                <div class="hero-bg-wrapper relative min-h-[400px] w-full h-full object-cover">
                  <img class="w-full h-full object-cover" src=${
                    imgBaseUrl + movie.backdrop_path
                  } alt=${movie.title} />
                  <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="absolute -bottom-8 left-4 flex">
                  <div class="max-w-[165px] relative">
                    <img class="w-full h-full object-cover" src=${
                      imgBaseUrl + movie.poster_path
                    } alt=${movie.title} />
                    <div class="swiper-lazy-preloader"></div>
                  </div>
                  <div>
                    <h3 class="card-title">${movie?.title || movie?.name}</h3>
                    <p class="card-description">${movie.overview.slice(
                      0,
                      50
                    )}</p>
                  </div>
                </div>
              </div>
            `;
    })
    .join("");

  if (trendingMovies) {
    trendingMovies.innerHTML = `
            <div class="swiper hero-swiper">
              <div class="swiper-wrapper">
                ${card}
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          `;
  }

  var swiper = new Swiper(".hero-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default CardComponent;
