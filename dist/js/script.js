const menuBtn = document.getElementById('menu-bars');
const menuBars = document.querySelector('.navbar-menu');

// ketika menu di click navbar muncul
menuBtn.addEventListener("click", () => {
  menuBars.classList.toggle("menu-active");
});

// ketika click diluar navbar maka navbar hilang
document.addEventListener("click", (e) => {
  if (!menuBars.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBars.classList.remove("menu-active");
  }
});

// ketika di scroll navbar hilang
window.addEventListener("scroll", () => {
  menuBars.classList.remove("menu-active");
});