import preloader from "./preloader.js";
import carousel from "./carousel.js";
import mobileMenu from "./mobileMenu.js";

const init = () => {
  preloader();
  mobileMenu();
  carousel();
};

window.addEventListener("DOMContentLoaded", init);
