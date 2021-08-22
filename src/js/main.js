import preloader from "./preloader.js";
import carousel from "./carousel.js";

const init = () => {
  preloader();
  carousel();
};

window.addEventListener("DOMContentLoaded", init);
