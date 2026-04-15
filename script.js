// text berjalan
var typed = new Typed(".multiple-text", {
  strings: ["Back-End Developer", "The Creator", "The Engginer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// menu togle
const menuToggle = document.querySelector(".menu-toggle input");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("slide");
});

// music
const music = document.getElementById("bgMusic");
const btn = document.getElementById("btnMusic");

function toggleSound() {
  if (music.paused) {
    music.play();
    btn.textContent = "Stop music";
  } else {
    music.pause();
    btn.textContent = "Play music";
  }
}
