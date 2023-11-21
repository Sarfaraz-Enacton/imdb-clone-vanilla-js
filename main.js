import "./style.css";
import "./src/js/utils/api";
import fetchApi from "./src/js/utils/fetchApi";
import searchCards from "./src/js/components/searchCards";
import footer from "./src/js/components/footer";
import header from "./src/js/components/header";
header();

// setupCounter(document.querySelector('#counter'))
const navMenuPcBtn = document.querySelector("#menu-btn-pc");
const menuPc = document.querySelector("#MenuPc");
const navMenuCloseBtn = document.querySelector("#menu-close-btn-pc");
if (menuPc && navMenuPcBtn && navMenuCloseBtn) {
  document.addEventListener("DOMContentLoaded", () => {
    navMenuPcBtn.addEventListener("click", () => {
      menuPc.classList.remove("hidden");
      menuPc.classList.remove("-translate-y-full");
      menuPc.classList.add("translate-y-0");
    });
    navMenuCloseBtn.addEventListener("click", () => {
      menuPc.classList.remove("translate-y-0");
      menuPc.classList.add("-translate-y-full");
    });
  });
}

// dropdown menu
const dropdownBtn = document.querySelector("#dropdown-btn");
const dropdownBtnText = document.querySelector("#dropdown-btn span");
const dropdownMenu = document.querySelector("#dropdown-menu");
const dropdownOptions = document.querySelectorAll("#dropdown-menu div div");
if (dropdownBtn && dropdownMenu) {
  document.addEventListener("DOMContentLoaded", () => {
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("opacity-0");
      dropdownMenu.classList.toggle("opacity-1");
    });
  });
  dropdownOptions.forEach((option) => {
    option.addEventListener("click", (e) => {
      const selectText = e.target.textContent;
      dropdownBtnText.textContent = selectText;
      dropdownMenu.classList.remove("opacity-1");
      dropdownMenu.classList.add("opacity-0");
    });
  });
}

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

  if (search_value.length < 2 || search_value === null) {
    searchCardParent.classList.add("hidden");
  } else {
    searchCardParent.classList.remove("hidden");
    if (dropdownBtnText.textContent.toLowerCase() === "all") {
      console.log("all");
      fetchApi(
        `https://api.themoviedb.org/3/search/multi?query=${search_value}&language=en-US&page=1&include_adult=false`,
        searchCards
      );
      // window.location.href = `search.html?search=${search_value}&mediaType=tv`;
    } else if (dropdownBtnText.textContent.toLowerCase() === "shows") {
      console.log("shows");
      fetchApi(
        `https://api.themoviedb.org/3/search/tv?query=${search_value}&language=en-US&include_adult=false&page=1`,
        searchCards
      );
    } else if (dropdownBtnText.textContent.toLowerCase() === "movies") {
      console.log("movies");
      fetchApi(
        `https://api.themoviedb.org/3/search/movie?language=en-US&query=${search_value}&include_adult=false&page=1`,
        searchCards
      );
    }
    // const dropdownText = dropdownBtnText.textContent.toLowerCase();
    // const apiUrl = `https://api.themoviedb.org/3/search/${dropdownText}?query=${searchValue}&page=1`;
    // fetchApi(apiUrl, searchCards);
  }
};

footer();
