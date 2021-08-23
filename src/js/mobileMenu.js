const mobileMenu = () => {
  const toggle = document.querySelector(".mobile-menu__toggle");
  const menu = document.querySelector(".menu");
  const menuIcon = document.querySelector(".mobile-menu__icon");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });
};

export default mobileMenu;
