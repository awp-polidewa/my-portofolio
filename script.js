var typed = new Typed(".multiple-text", {
  strings: ["Back-End Developer", "The Creator", "The Engginer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const menuToggle = document.querySelector(".menu-toggle input");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});
