var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});
window.addEventListener("load", function () {
  var preloader = document.getElementById("preloader");
  preloader.style.opacity = 1;

  setTimeout(function () {
    preloader.style.opacity = 0;
    setTimeout(function () {
      preloader.style.display = "none";
    }, 500); // Adjust the delay as needed
  }, 2000); // Adjust the delay as needed
});
