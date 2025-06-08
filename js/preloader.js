// preloader.js
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("fade-out");

    // Optional: remove from DOM after fade
    setTimeout(() => {
      preloader.remove();
      document.body.classList.remove("loading");
    }, 800); // matches the fade duration
  });
});
