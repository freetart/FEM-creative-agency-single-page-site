import Glide from "@glidejs/glide";

const carousel = () => {
  const carouselConfig = {
    type: "carousel",
    autoplay: 12000,
    perView: 1,
    hoverpause: true,
  };

  new Glide(".glide", carouselConfig).mount();
};
carousel();

const preloader = () => {
  const preloaderEl = document.querySelector(".preloader");

  window.addEventListener("load", function () {
    preloaderEl.classList.add("hide-preloader");
  });
};
preloader();
