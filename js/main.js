// Navigation Bar
let lastScrollTop = 0;
const navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function () {
  const navbarHeight = -navbar.offsetHeight + 3;
  if (window.scrollY != 0) {
    navbar.style.background = "#333333";
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
  }
  if (window.scrollY - lastScrollTop > 0) {
    navbar.style.top = navbarHeight.toString() + "px";
  } else {
    navbar.style.top = "0px";
  }
  console.log("last scroll: " + lastScrollTop);

  lastScrollTop = window.scrollY;
});
// Navigation Bar

// Zoom closes menu
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  const navbarNav = document.querySelector("#navbarNav");
  if (windowWidth >= 768) {
    const menuButton = document.getElementById("menu-button");
    menuButton.setAttribute("aria-expanded", "false");
    navbarNav.classList.remove("show");
  }
});
// Zoom Closes menu

// // Padding to main section equal to nav bar
// const mainSection = document.querySelector("#main");
// mainSection.style.padding = `${navbar.offsetHeight}px 0px 0px 0px`;
// // Padding to main section equal to nav bar

// main section
const professions = document.querySelectorAll("#word");
let i = 100,
  pos = 0;
let speed = 0.3;
let sign = -1;
const professionsContainer = document.getElementById("next-word");
setInterval(() => {
  i += speed * sign;
  professionsContainer.style.width = i + "%";
  if (i <= 0 || i >= 100) {
    sign *= -1;
  }
  if (i <= 0) {
    professions[pos].classList.add("d-none");
    pos = (pos + 1) % professions.length;
    professions[pos].classList.remove("d-none");
    console.log(pos);
  }
}, 1);
// main section
