const menu = document.querySelector(".header-list-menu");
const trigger = document.querySelector(".header-list__item--trigger");
const svgArrow = document.querySelector(".header-list__svg");

trigger.addEventListener("click", () => {
  menu.classList.toggle("visible");
  svgArrow.classList.toggle("active");
});
