import { imgBaseUrl } from "../utils/api";

export default function upcomingCards(data) {
  const upcomingMovies = document.querySelector("#upcoming-movies");
  const moviesHtml = data.slice(0, 3).map((movie) => {
    const type = movie.media_type;
    console.log(movie);
    // console.log(type);
    return `
            <div class="upcoming-card flex gap-3 cursor-pointer" data-id=${
              movie.id
            } data-media-type=${"movie"} onclick="previewClick(this)">
                <div class="max-w-[88px] flex-shrink-0 relative w-full">
                <img class="h-full w-full object-cover" src=${
                  imgBaseUrl + movie.poster_path
                } alt=${movie.title} loading="lazy" />
                
                </div>
                <div class="card-content">
                <h5 class="font-medium">${movie.title}</h5>
                <p class="text-white/70 text-sm">${movie.overview.slice(
                  0,
                  50
                )}</p>
                </div>
            </div>
            `;
  });
  if (upcomingMovies) {
    upcomingMovies.innerHTML = moviesHtml.join("");
  }
}
