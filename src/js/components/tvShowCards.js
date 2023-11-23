import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import mainCard from "./mainCard";

export default function tvShowCard(data) {
  const topTv = document.querySelector("#top-tv-show");
  const card = mainCard(data, "tv");

  if (topTv) {
    topTv.innerHTML = `
                    <div class="swiper bottom-cards">
                      <div class="swiper-wrapper">
                        ${card}
                      </div>
                      <div class="swiper-button-prev hidden lg:block"></div>
                      <div class="swiper-button-next hidden lg:block"></div>
                    </div>
                    `;
  }

  var swiper = new Swiper(".bottom-cards", {
    // slidesPerView: 6,
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
      },
      540: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
      },
      768: {
        slidesPerView: 3.5,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 5,
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
