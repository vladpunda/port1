const headerBurger = document.querySelector(".header__burger");
if (headerBurger) {
  const headerWrapperMenu = document.querySelector(".header__wrapper_menu");
  headerBurger.addEventListener("click", function (e) {
    headerBurger.classList.toggle("active");
    headerWrapperMenu.classList.toggle("active");
  });
}
