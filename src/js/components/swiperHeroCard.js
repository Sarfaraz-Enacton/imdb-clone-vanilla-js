import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { imgBaseUrl } from "../utils/api";

// Initialize Swiper here

function CardComponent(data) {
  const trendingMovies = document.querySelector("#trending-movies");
  // console.log(data[1]);
  const card = data
    .slice(0, 9)
    .map((movie) => {
      return `
                <div class="swiper-slide" data-id=${movie.id} data-media-type=${
        movie.media_type
      } onclick="previewClick(this)">
                <div class="shadow-class"></div>
                <div class="relative w-full h-full object-cover pb-16">
                  <img class="w-full h-full object-cover cursor-pointer transition ease-in-out duration-300 hover:opacity-90 hero-bg-wrapper" src=${
                    imgBaseUrl + movie.backdrop_path
                  } alt=${movie.title} />
                  <div class="inset-shadow mb-16"></div>
                  <div class="swiper-lazy-preloader"></div>
                </div>
                <div class="absolute bottom-0 left-4 flex gap-4 items-end">
                  <div class="max-w-[90px] md:max-w-[130px] xl:max-w-[165px] relative">
                    <img class="w-full h-full object-cover transition ease-in-out duration-300 hover:opacity-90" src=${
                      imgBaseUrl + movie.poster_path
                    } alt=${movie.title} />
                    <div class="swiper-lazy-preloader"></div>
                  </div>
                  <div class="pb-3 md:pb-8 md:space-y-1 cursor-pointer">
                    <h3 class="text-lg md:text-2xl font-medium line-clamp-1">${
                      movie?.title || movie?.name
                    }</h3>
                    <div class="flex">
                      <svg class="w-4 h-4 text-yellow flex-shrink-0 pt-1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                      <span class="ml-2 text-sm md:text-base">${movie.vote_average.toFixed(
                        1
                      )}</span>
                    </div>
                    <p class="text-sm md:text-base">${
                      movie.release_date || movie.first_air_date
                    }</p>
                    <p class="text-white/70 text-sm md:text-base line-clamp-1 sm:line-clamp-2 xl:line-clamp-3">${
                      movie.overview
                    }</p>
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
    breakpoints: {
      0: {
        navigation: {
          nextEl: null,
          prevEl: null,
        },
      },
      768: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    // },
  });
}

export default CardComponent;
