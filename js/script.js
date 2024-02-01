const headerBurger = document.querySelector(".header__burger");
if (headerBurger) {
  const headerWrapperMenu = document.querySelector(".header__wrapper_menu");
  headerBurger.addEventListener("click", function (e) {
    headerBurger.classList.toggle("active");
    headerWrapperMenu.classList.toggle("active");
  });
}

$(".project__slider").slick({
  infinite: true,

  responsive: [
    { breakpoint: 3000, settings: "unslick" },
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
