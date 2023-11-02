import Swiper from "swiper/bundle";
import "swiper/css/bundle";

// Initialize Swiper here

function CardComponent(data) {
  const moviesHtml = data
    .slice(0, 5)
    .map((movie) => {
      return `
              <div class="swiper-slide">
                <div class="relative">
                  <img src="" class="" alt="" />
                </div>
                <div>
                  <div>
                    <img src="" alt="" />
                  </div>
                  <div>
                    <h3 class="text-3xl">${movie.title}</h3>
                    <p>${movie.overview.slice(0, 50)}</p>
                  </div>
                </div>
              </div>
            `;
    })
    .join("");

  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  return (document.querySelector("#trending-movies").innerHTML = `
            <div class="swiper">
              <div class="swiper-wrapper">
                ${moviesHtml}
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
          `);
}

export default CardComponent;
