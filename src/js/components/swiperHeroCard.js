import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { imgBaseUrl } from "../utils/api";

// Initialize Swiper here

function CardComponent(data) {
  const trendingMovies = document.querySelector("#trending-movies");
  const card = data
    .slice(0, 9)
    .map((movie) => {
      return `
                <div class="swiper-slide hero-card cursor-pointer" onclick="previewClick(${
                  movie.id
                })">
                <div class="shadow-class"></div>
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
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

export default CardComponent;
