const menuBtn = document.getElementById('menu-bars');
const menuBars = document.querySelector('.navbar-menu');

// ketika menu di click navbar muncul
menuBtn.addEventListener("click", () => {
  menuBars.classList.toggle("menu-active");
});

// ketika di scroll navbar hilang
window.addEventListener("scroll", () => {
  menuBars.classList.remove("menu-active");
});

// ketika search di click keluar search input
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#search-input');

document.getElementById('search-btn').addEventListener("click", (e) => {
  searchForm.classList.toggle('active');
  searchInput.focus();
  e.preventDefault();
});

// ketika view di click muncul view details
const viewBtn = document.querySelectorAll('.view-btn');
const modalContainer = document.querySelector('#modal-content');
const modalClose = document.querySelector('.modal-icon')

viewBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    modalContainer.style.display = "flex";
    e.preventDefault();
  });
});

modalClose.addEventListener("click", (e) => {
  modalContainer.style.display = "none";
  e.preventDefault()
});

// ketika click diluar hilang
const searchBtn = document.querySelector('#search-btn');

document.addEventListener("click", (e) => {
  if (!menuBars.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBars.classList.remove("menu-active");
  }
  
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});