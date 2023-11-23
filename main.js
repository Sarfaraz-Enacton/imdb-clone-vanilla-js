// import "./style.css";
import "./src/js/utils/api";
import fetchApi from "./src/js/utils/fetchApi";
import searchCards from "./src/js/components/searchCards";
import footer from "./src/js/components/footer";
import header from "./src/js/components/header";
// header
header();

// Search
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");
if (searchBtn && searchInput) {
  document.addEventListener("DOMContentLoaded", () => {
    searchInput.addEventListener("input", (e) => {
      const search_value = e.target.value;
      console.log(search_value);
      if (search_value === "") {
        return;
      } else {
        searchMovie();
      }
    });
  });
}
// console.log(dropdownBtnText.textContent.toLowerCase());
const searchMovie = () => {
  const search_value = searchInput.value.toLowerCase().trim();
  const searchCardParent = document.querySelector("#search-cards");
  const dropdownBtnText = document.querySelector("#dropdown-btn span");

  if (search_value.length < 2 || search_value === null) {
    searchCardParent.classList.add("hidden");
  } else {
    searchCardParent.classList.remove("hidden");
    const apiUrl = `https://api.themoviedb.org/3/search/${dropdownBtnText.getAttribute(
      "data-value"
    )}?query=${search_value}&page=1`;
    fetchApi(apiUrl, searchCards);
  }
};

footer();
