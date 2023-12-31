export default function header() {
  const header = document.querySelector(".header");
  const navMenuPc = `
  <div
  id="MenuPc"
  class="absolute inset-0 min-h-screen w-full hidden -translate-y-full transition ease-in-out duration-300 bg-secondary-300 py-8 overflow-auto z-30"
>
  <div class="max-w-[1024px] mx-auto px-4">
    <div class="flex justify-between">
      <div class="w-24">
        <img class="w-full h-auto" src="/logo.svg" alt="" />
      </div>
      <button
        id="menu-close-btn-pc"
        class="bg-yellow rounded-full w-12 h-12 flex items-center justify-center"
      >
        <svg
          class="text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="ipc-icon ipc-icon--clear"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-3 py-12">
      <div class="space-y-4">
        <div class="flex gap-2 items-center">
          <svg
            class="text-yellow"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M18 4v1h-2V4c0-.55-.45-1-1-1H9c-.55 0-1 .45-1 1v1H6V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"
            ></path>
          </svg>
          <h3 class="text-2xl font-medium">Movies</h3>
        </div>
        <ul class="space-y-3 pl-8">
          <li>
            <a class="hover:underline" href="#">Release Calendar</a>
          </li>
          <li>
            <a class="hover:underline" href="#"> Top 250 Movies</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Most Popular Movies</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Browse Movies by Genre</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Top Box Office</a>
          </li>

          <li>
            <a class="hover:underline" href="#"
              >Showtimes &amp; Tickets</a
            >
          </li>

          <li>
            <a class="hover:underline" href="#">Movie News</a>
          </li>

          <li>
            <a class="hover:underline" href="#">India Movie Spotlight</a>
          </li>
        </ul>
      </div>
      <div class="space-y-7">
        <div class="space-y-4">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="text-yellow"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h5c1.1 0 1.99-.9 1.99-2L23 5a2 2 0 0 0-2-2zm-1 14H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"
              ></path>
            </svg>
            <h3 class="text-2xl font-medium">TV Shows</h3>
          </div>
          <ul class="space-y-3 pl-8">
            <li>
              <a class="hover:underline" href="#"
                >What's on TV & Streaming</a
              >
            </li>
            <li>
              <a class="hover:underline" href="#">Top 250 TV Shows</a>
            </li>

            <li>
              <a class="hover:underline" href="#"
                >Most Popular TV Shows</a
              >
            </li>

            <li>
              <a class="hover:underline" href="#"
                >Browse TV Shows by Genre</a
              >
            </li>

            <li>
              <a class="hover:underline" href="#">TV News</a>
            </li>
          </ul>
        </div>
        <div class="space-y-4">
          <div class="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              class="text-yellow"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path
                d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1-.45-1-1V7c0-.55-.45-1-1-1zm17-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l5.47 4.1c.27.2.27.6 0 .8L12 14.5z"
              ></path>
            </svg>
            <h3 class="text-2xl font-medium">Watch</h3>
          </div>
          <ul class="space-y-3 pl-8">
            <li>
              <a class="hover:underline" href="#">What to Watch</a>
            </li>
            <li>
              <a class="hover:underline" href="#">Top 250 TV Shows</a>
            </li>

            <li>
              <a class="hover:underline" href="#">Latest Trailers</a>
            </li>

            <li>
              <a class="hover:underline" href="#">IMDb Originals</a>
            </li>

            <li>
              <a class="hover:underline" href="#">IMDb Picks</a>
            </li>
            <li>
              <a class="hover:underline" href="#">IMDb Podcasts</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="space-y-4">
        <div class="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="text-yellow"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94a.502.502 0 0 1-.75-.54l.85-3.66-2.83-2.45a.505.505 0 0 1 .29-.88l3.74-.32 1.46-3.45c.17-.41.75-.41.92 0l1.46 3.44 3.74.32a.5.5 0 0 1 .28.88l-2.83 2.45.85 3.67c.1.43-.36.77-.74.54z"
            ></path>
          </svg>
          <h3 class="text-2xl font-medium">Awards & Events</h3>
        </div>
        <ul class="space-y-3 pl-8">
          <li>
            <a class="hover:underline" href="#">Oscars</a>
          </li>
          <li>
            <a class="hover:underline" href="#">Emmys</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Halloween Picks</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Scary Good Horror</a>
          </li>

          <li>
            <a class="hover:underline" href="#"
              >Hispanic Heritage Month</a
            >
          </li>

          <li>
            <a class="hover:underline" href="#">MAMI</a>
          </li>

          <li>
            <a class="hover:underline" href="#">STARmeter Awards</a>
          </li>

          <li>
            <a class="hover:underline" href="#">Award Central</a>
          </li>
          <li>
            <a class="hover:underline" href="#">Festival Central</a>
          </li>
          <li>
            <a class="hover:underline" href="#">All Events</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>  
  `;

  const headerDropdownHtml = `<div class="dropdown relative inline-block text-left">
  <button
    id="dropdown-btn"
    class="bg-primary text-secondary px-3 rounded-l border-r border-secondary inline-flex items-center justify-center h-full"
  >
    <span data-value="multi">All</span>
    <svg
      class="-mr-1 h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
  <div
    class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-secondary-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 transition-opacity"
    id="dropdown-menu"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="menu-button"
    tabindex="-1"
  >
    <div class="py-1 text-primary" role="none">
      <div
        class="block px-4 py-2 text-sm cursor-pointer"
        role="menuitem"
        tabindex="-1"
        data-value="multi"
      >
        All
      </div>
      <div
        class="block px-4 py-2 text-sm cursor-pointer"
        role="menuitem"
        tabindex="-1"
        data-value="tv"
      >
        Shows
      </div>
      <div
        class="block px-4 py-2 text-sm cursor-pointer"
        role="menuitem"
        tabindex="-1"
        data-value="movie"
      >
        Movies
      </div>
    </div>
  </div>
</div>`;

  header.innerHTML = `
  <div class="py-3 bg-secondary-250">
  <nav class="container">
    <div class="flex gap-2 text-sm font-medium">
      <a href="/index.html" class="block w-16 h-8 flex-shrink-0">
        <img class="w-full h-auto" src="/logo.svg" alt="" />
      </a>
      <button
        id="menu-btn-pc"
        class="hidden items-center gap-1 px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="ipc-icon ipc-icon--menu ipc-responsive-button__icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path
            d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"
          ></path>
        </svg>
        <span>Menu</span>
      </button>
      <div class="flex w-full relative">
        ${headerDropdownHtml}

        <div class="w-full">
          <input
            class="w-full h-full outline-none bg-primary px-3 caret-secondary text-secondary"
            type="text"
            placeholder="Search IMDb"
            id="search-input"
          />
        </div>

        <button
          id="search-btn"
          class="bg-primary text-secondary px-2 rounded-r"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            class="ipc-icon ipc-icon--magnify"
            viewBox="0 0 24 24"
            fill="currentColor"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path
              d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            ></path>
          </svg>
        </button>

        <div
          id="search-cards"
          class="absolute right-0 left-0 top-8 mt-2 origin-top-right z-10 bg-secondary-300 py-2 rounded w-full divide-y-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-1 transition-opacity hidden"
        >
          <div class="w-full h-[300px] flex items-center justify-center gap-2">
            <div
              class="w-4 h-4 rounded-full animate-pulse bg-yellow"
            ></div>
            <div
              class="w-4 h-4 rounded-full animate-pulse bg-yellow"
            ></div>
            <div
              class="w-4 h-4 rounded-full animate-pulse bg-yellow"
            ></div>
          </div>
        </div>
      </div>
      <button
        class="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex"
      >
        <svg
          width="52"
          height="14"
          viewBox="0 0 52 14"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g fill="currentColor">
            <rect x="0" y="1" width="3.21" height="12.34"></rect>
            <path
              d="M10,1 L9.3,6.76 L8.84,3.63 C8.7,2.62 8.58,1.75 8.45,1 L4.3,1 L4.3,13.34 L7.11,13.34 L7.11,5.19 L8.3,13.34 L10.3,13.34 L11.42,5 L11.42,13.33 L14.22,13.33 L14.22,1 L10,1 Z"
            ></path>
            <path
              d="M19.24,3.22 C19.3711159,3.29185219 19.4602235,3.42180078 19.48,3.57 C19.5340993,3.92393477 19.554191,4.28223587 19.54,4.64 L19.54,9.42 C19.578852,9.92887392 19.5246327,10.4405682 19.38,10.93 C19.27,11.12 18.99,11.21 18.53,11.21 L18.53,3.11 C18.7718735,3.09406934 19.0142863,3.13162626 19.24,3.22 Z M19.24,13.34 C19.8163127,13.3574057 20.3928505,13.3138302 20.96,13.21 C21.3245396,13.1481159 21.6680909,12.9969533 21.96,12.77 C22.2288287,12.5438006 22.4209712,12.2398661 22.51,11.9 C22.643288,11.1679419 22.6969338,10.4236056 22.67,9.68 L22.67,5.34 C22.6662002,4.55669241 22.6060449,3.77467335 22.49,3 C22.43037,2.59841431 22.260779,2.22116094 22,1.91 C21.6636187,1.56093667 21.2326608,1.317654 20.76,1.21 C19.7709421,1.02848785 18.7647002,0.958050915 17.76,1 L15.32,1 L15.32,13.34 L19.24,13.34 Z"
            ></path>
            <path
              d="M27.86,10.34 C27.8769902,10.7218086 27.8501483,11.1043064 27.78,11.48 C27.72,11.63 27.46,11.71 27.26,11.71 C27.0954951,11.7299271 26.9386363,11.6349863 26.88,11.48 C26.7930212,11.1542289 26.7592527,10.8165437 26.78,10.48 L26.78,7.18 C26.7626076,6.84408875 26.7929089,6.50740774 26.87,6.18 C26.9317534,6.03447231 27.0833938,5.94840616 27.24,5.97 C27.43,5.97 27.7,6.05 27.76,6.21 C27.8468064,6.53580251 27.8805721,6.87345964 27.86,7.21 L27.86,10.34 Z M23.7,1 L23.7,13.34 L26.58,13.34 L26.78,12.55 C27.0112432,12.8467609 27.3048209,13.0891332 27.64,13.26 C28.0022345,13.4198442 28.394069,13.5016184 28.79,13.5 C29.2588971,13.515288 29.7196211,13.3746089 30.1,13.1 C30.4399329,12.8800058 30.6913549,12.5471372 30.81,12.16 C30.9423503,11.6167622 31.0061799,11.0590937 31,10.5 L31,7 C31.0087531,6.51279482 30.9920637,6.02546488 30.95,5.54 C30.904474,5.28996521 30.801805,5.05382649 30.65,4.85 C30.4742549,4.59691259 30.2270668,4.40194735 29.94,4.29 C29.5869438,4.15031408 29.2096076,4.08232558 28.83,4.09 C28.4361722,4.08961884 28.0458787,4.16428368 27.68,4.31 C27.3513666,4.46911893 27.0587137,4.693713 26.82,4.97 L26.82,1 L23.7,1 Z"
            ></path>
          </g>
          <g fill="#33C5F3">
            <path
              d="M32.13,1 L35.32,1 C35.9925574,0.978531332 36.6650118,1.04577677 37.32,1.2 C37.717112,1.29759578 38.0801182,1.50157071 38.37,1.79 C38.6060895,2.05302496 38.7682605,2.37391646 38.84,2.72 C38.935586,3.27463823 38.9757837,3.8374068 38.96,4.4 L38.96,5.46 C38.9916226,6.03689533 38.9100917,6.61440551 38.72,7.16 C38.5402933,7.53432344 38.2260614,7.82713037 37.84,7.98 C37.3049997,8.18709035 36.7332458,8.28238268 36.16,8.26 L35.31,8.26 L35.31,13.16 L32.13,13.16 L32.13,1 Z M35.29,3.08 L35.29,6.18 L35.53,6.18 C35.7515781,6.20532753 35.9725786,6.12797738 36.13,5.97 C36.2717869,5.69610033 36.3308522,5.38687568 36.3,5.08 L36.3,4.08 C36.3390022,3.79579475 36.2713114,3.5072181 36.11,3.27 C35.8671804,3.11299554 35.5771259,3.04578777 35.29,3.08 Z"
            ></path>
            <path
              d="M42,4.36 L41.89,5.52 C42.28,4.69 43.67,4.42 44.41,4.37 L43.6,7.3 C43.2290559,7.27725357 42.8582004,7.34593052 42.52,7.5 C42.3057075,7.61238438 42.1519927,7.81367763 42.1,8.05 C42.0178205,8.59259006 41.9843538,9.14144496 42,9.69 L42,13.16 L39.34,13.16 L39.34,4.36 L42,4.36 Z"
            ></path>
            <path
              d="M51.63,9.71 C51.6472876,10.3265292 51.6003682,10.9431837 51.49,11.55 C51.376862,11.9620426 51.1639158,12.3398504 50.87,12.65 C50.5352227,13.001529 50.1148049,13.2599826 49.65,13.4 C49.0994264,13.5686585 48.5257464,13.6496486 47.95,13.64 C47.3333389,13.6524659 46.7178074,13.5818311 46.12,13.43 C45.6996896,13.322764 45.3140099,13.1092627 45,12.81 C44.7275808,12.5275876 44.5254637,12.1850161 44.41,11.81 C44.2627681,11.2181509 44.1921903,10.6098373 44.2,10 L44.2,7.64 C44.1691064,6.9584837 44.2780071,6.27785447 44.52,5.64 C44.7547114,5.12751365 45.1616363,4.71351186 45.67,4.47 C46.3337168,4.13941646 47.0688388,3.97796445 47.81,4 C48.4454888,3.98667568 49.0783958,4.08482705 49.68,4.29 C50.1352004,4.42444561 50.5506052,4.66819552 50.89,5 C51.1535526,5.26601188 51.3550281,5.58700663 51.48,5.94 C51.6001358,6.42708696 51.6506379,6.92874119 51.63,7.43 L51.63,9.71 Z M48.39,6.73 C48.412199,6.42705368 48.3817488,6.12255154 48.3,5.83 C48.2091142,5.71223121 48.0687606,5.64325757 47.92,5.64325757 C47.7712394,5.64325757 47.6308858,5.71223121 47.54,5.83 C47.447616,6.12046452 47.4136298,6.42634058 47.44,6.73 L47.44,10.93 C47.4168299,11.2204468 47.4508034,11.5126191 47.54,11.79 C47.609766,11.9270995 47.7570827,12.0067302 47.91,11.99 C48.0639216,12.0108082 48.2159732,11.9406305 48.3,11.81 C48.3790864,11.5546009 48.4096133,11.2866434 48.39,11.02 L48.39,6.73 Z"
            ></path>
          </g>
        </svg>
      </button>
      <div class="border-l-2 border-primary/25 hidden lg:block"></div>
      <button
        class="hidden items-center gap-1 px-3 rounded cursor-pointer hover:bg-primary/20 sm:flex"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          role="presentation"
        >
          <path
            d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
            fill="currentColor"
          ></path>
        </svg>
        <span>Watchlist</span>
      </button>
      <button
        class="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 flex-shrink-0 sm:flex"
      >
        Sign In
      </button>
      <button
        class="hidden items-center px-3 rounded cursor-pointer hover:bg-primary/20 lg:flex"
      >
        EN
      </button>
    </div>
  </nav>
  <!-- nav menu pc -->
  ${navMenuPc}
</div>
`;
  // nav menu pc
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
        // dropdownMenu.classList.toggle("hidden");
        dropdownMenu.classList.toggle("opacity-0");
        dropdownMenu.classList.toggle("opacity-1");
      });
    });
    dropdownOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        const selectText = e.target.textContent;
        const selectAttribute = option.getAttribute("data-value");
        dropdownBtnText.textContent = selectText;
        dropdownBtnText.setAttribute("data-value", selectAttribute);
        dropdownMenu.classList.remove("opacity-1");
        dropdownMenu.classList.add("opacity-0");
      });
    });
    document.addEventListener("click", (e) => {
      let isClickInside = document
        .querySelector(".dropdown")
        .contains(e.target);
      if (!isClickInside) {
        dropdownMenu.classList.remove("opacity-1");
        dropdownMenu.classList.add("opacity-0");
      }
    });
  }
}
