import { imgBaseUrl } from "../utils/api";
import fetchApi from "../utils/fetchApi";
import noImagePlaceholder from "/noImagePlaceholder.svg";

function getQueryParams(url) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(url);
}
export default function singleCard(data) {
  console.log(data);
  const singleDetails = document.querySelector("#single-details");
  const card = ` <h1>${data.title || data.name}</h1>
                <div class="max-w-[300px]">
                    <img class="w-full h-full object-cover" src="${
                      data.poster_path
                        ? imgBaseUrl + data.poster_path
                        : noImagePlaceholder
                    }" alt="${data.title || data.name}" />
                </div>
                <p>${data.overview}</p>`;
  singleDetails.innerHTML = card;
}
const dataId = getQueryParams("dataId");
const mediaType = getQueryParams("mediaType");
console.log(mediaType);
fetchApi(`https://api.themoviedb.org/3/${mediaType}/${dataId}`, singleCard);
