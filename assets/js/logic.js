const sidebar_hamburger = document.getElementById("dashboard-logo");
const nav_hamburger = document.getElementById("nav-container");
const option_hamburger = document.getElementById("option-container");
const logo = document.querySelector(".dashboard-logo");
const menu = document.querySelector(".dashboard-menu");
const sidebar = document.getElementById("sidebar");

sidebar_hamburger.addEventListener("click", () => {
  sidebar_hamburger.classList.toggle("hamburger");
  nav_hamburger.classList.toggle("nav-hamburger");
  option_hamburger.classList.toggle("nav-hamburger");
  logo.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  sidebar.classList.toggle("closed-sidebar");
});
