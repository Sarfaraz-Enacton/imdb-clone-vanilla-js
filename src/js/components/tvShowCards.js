import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import mainCard from "./mainCard";

export default function tvShowCard(data) {
  const topTv = document.querySelector("#top-tv-show");
  const card = mainCard(data);

  if (topTv) {
    topTv.innerHTML = `
                    <div class="swiper top-cards">
                      <div class="swiper-wrapper">
                        ${card}
                      </div>
                      <div class="swiper-button-prev hidden lg:block"></div>
                      <div class="swiper-button-next hidden lg:block"></div>
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
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
