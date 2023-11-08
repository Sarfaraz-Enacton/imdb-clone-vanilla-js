import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import mainCard from "./mainCard";

export default function movieCard(data) {
  const topMovies = document.querySelector("#top-movies");
  const card = mainCard(data);

  if (topMovies) {
    topMovies.innerHTML = `
                    <div class="swiper top-cards">
                      <div class="swiper-wrapper">
                        ${card}
                      </div>
                      <div class="swiper-button-prev"></div>
                      <div class="swiper-button-next"></div>
                    </div>
                    `;
  }

  var swiper = new Swiper(".top-cards", {
    slidesPerView: 6,
    spaceBetween: 24,
    slidesPerGroup: 6,
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        navigation: false,
      },
      540: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        navigation: false,
      },
      768: {
        slidesPerView: 3.5,
        slidesPerGroup: 3,
        navigation: false,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        navigation: true,
      },
      1280: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
