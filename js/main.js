// Navigation Bar
let lastScrollTop = 0;
const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", function () {
  const navbarHeight = -navbar.offsetHeight + 3;
  if (window.scrollY === 0) {
    navbar.classList.add("bg-transparent");
  } else {
    navbar.classList.remove("bg-transparent");
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
  console.log(windowWidth);
  if (windowWidth >= 768) {
    const menuButton = document.getElementById("menu-button");
    menuButton.setAttribute("aria-expanded", "false");
    navbarNav.classList.remove("show");
  }
});
// Zoom Closes menu
