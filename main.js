import "./style.css";
import "./src/js/swiper";
import "./src/js/api";
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const navMenuPcBtn = document.querySelector("#menu-btn-pc");
const menuPc = document.querySelector("#MenuPc");
const navMenuCloseBtn = document.querySelector("#menu-close-btn-pc");
navMenuPcBtn.addEventListener("click", () => {
  menuPc.classList.remove("-translate-y-full");
  menuPc.classList.add("translate-y-0");
});
navMenuCloseBtn.addEventListener("click", () => {
  menuPc.classList.remove("translate-y-0");
  menuPc.classList.add("-translate-y-full");
});
