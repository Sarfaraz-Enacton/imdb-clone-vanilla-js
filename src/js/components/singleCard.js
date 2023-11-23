import { imgBaseUrl } from "../utils/api";
import fetchApi from "../utils/fetchApi";
import noImagePlaceholder from "/noImagePlaceholder.svg";

function getQueryParams(url) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(url);
}
export default function singleCard(data) {
  const genre = data.genres.slice(0, 2).map((genre) => {
    return `<button class="border border-primary/70 rounded-full py-1 px-2 sm:px-3 text-xs sm:text-base">
    ${genre.name}
    </button>`;
  });
  console.log(data);
  console.log(data.production_countries[0].name);
  const singleDetails = document.querySelector("#single-details");
  const card = ` <h1 class="text-2xl md:text-4xl xl:text-5xl">${
    data.title || data.name
  }</h1>
                <div class="flex gap-4 w-full">
                  <div class="hidden sm:block sm:w-1/4">
                      <img class="w-full h-full object-cover" src="${
                        data.poster_path
                          ? imgBaseUrl + data.poster_path
                          : noImagePlaceholder
                      }" alt="${data.title || data.name}" />
                  </div>
                  <div class="w-full sm:w-3/4">
                      <img class="w-full h-full object-cover" src="${
                        data.poster_path
                          ? imgBaseUrl + data.backdrop_path
                          : noImagePlaceholder
                      }" alt="${data.title || data.name}" />
                  </div>
                </div>
                <div class="flex gap-4 sm:gap-4 pt-3 items-center sm:items-start">
                  <div class="max-w-[120px] max-h-[180px] sm:hidden">
                    <img class="w-full h-full object-cover" src="${
                      data.poster_path
                        ? imgBaseUrl + data.poster_path
                        : noImagePlaceholder
                    }" alt="${data.title || data.name}" />
                  </div>

                  <div class="space-y-1 sm:space-y-2 flex-shrink-0 md:w-1/4">
                    <div class="flex flex-wrap gap-2 sm:gap-4">
                    ${genre.join("")}
                    </div>
                    <div class="flex items-center gap-1">
                      <p class="text-sm sm:text-base">Ratings : </p>
                      <svg class="w-4 h-4 text-yellow flex-shrink-0" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path></svg>
                      <p class="text-sm sm:text-base pt-1">${data.vote_average.toFixed(
                        1
                      )}<span class="text-white/70">/10</span></p>
                    </div>
                    <p class="text-sm sm:text-base">Release Date : ${
                      data.release_date || data.first_air_date
                    }</p>
                    <p class="text-sm sm:text-base">Status : ${data.status}</p>
                    <p class="text-sm sm:text-base">Country : ${
                      data.production_countries[0].name
                    }</p>
                    <p class="text-sm sm:text-base">Language : ${
                      data.spoken_languages[0].english_name
                    }</p>
                  </div>
                  <div class="pl-5 md:pl-0 space-y-2 hidden sm:block md:w-3/4">
                    <p class="text-2xl md:text-4xl">Original Title : ${
                      data.original_name || data.original_title
                    }</p>
                    <p class="text-sm sm:text-base">Summary : <span class="text-white/70">${
                      data.overview
                    }</span></p>
                  </div>
                </div>
                <div class="space-y-2 sm:hidden">
                  <p class="text-base">Original Title : ${
                    data.original_name || data.original_title
                  }</p>
                  <p class="text-sm sm:text-base">Summary : <span class="text-white/70">${
                    data.overview
                  }</span></p>
                </div>
                `;
  singleDetails.innerHTML = card;
}
const dataId = getQueryParams("dataId");
const mediaType = getQueryParams("mediaType");
console.log(mediaType);
fetchApi(`https://api.themoviedb.org/3/${mediaType}/${dataId}`, singleCard);
