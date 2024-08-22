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

// Padding to main section equal to nav bar
const mainSection = document.querySelector("#main");
mainSection.style.padding = `${navbar.offsetHeight * 4}px 0px 0px 0px`;
// Padding to main section equal to nav bar

// main section
const professions = document.querySelectorAll(".word");
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
  }
}, 1);
// main section

// stats section generatde random numbers
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const statsH4 = document.querySelectorAll("#stats h4");
      const len = statsH4.length;
      randomValues = [];
      currentValues = new Array(len).fill(0);
      const step = 1;
      for (let i = 0; i < len; i++) {
        randomValues.push(Math.floor(Math.random() * 1000));
      }
      setInterval(() => {
        for (let i = 0; i < len; i++) {
          if (randomValues[i] <= currentValues[i]) continue;
          currentValues[i] += Math.min(
            step,
            randomValues[i] - currentValues[i]
          );
          statsH4[i].innerHTML = currentValues[i];
        }
      }, 7);
    } else {
    }
  });
});

const stats = document.querySelector("#stats");
observer.observe(stats);
// stats section generatde random numbers

// Caruosel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1, // Display 1 item
    loop: true, // Enable looping
    margin: 10, // Add margin between items (optional)
    nav: false, // Show navigation arrows (optional)
    autoplay: false, // Enable autoplay (optional)
    autoplayTimeout: 3000, // Autoplay interval in milliseconds (optional)
  });
});
// Caruosel

// Form

const form = document.getElementById("form");

form.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.remove();
    }
    e.target.style = "";
  }
});
function isValidEmail(email) {
  const emailPattern = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");

  return emailPattern.test(email);
}
const inputId = ["inputMessage", "inputEmail", "inputName", "inputSubject"];
const inputMessage = [
  "Please provide message.",
  "Please provide email.",
  "Please provide first name.",
  "Subject is required.",
];
form.addEventListener("focusout", (e) => {
  console.log(e.target.value);
  if (e.target.value == "") {
    e.target.style.border = "2px solid red";
    if (!e.target.nextElementSibling) {
      const newSiblingElement = document.createElement("div");
      newSiblingElement.className = "new-sibling py-2";
      let content;
      for (let i = 0; i < inputId.length; i++)
        content = e.target.id == inputId[i] ? inputMessage[i] : content;
      newSiblingElement.textContent = content;
      e.target.insertAdjacentElement("afterend", newSiblingElement);
    }
  } else {
    e.target.style = "";
    if (e.target.id == "inputEmail") {
      console.log(isValidEmail(e.target.value));
      if (!isValidEmail(e.target.value)) {
        e.target.style.border = "2px solid red";
        if (!e.target.nextElementSibling) {
          const newSiblingElement = document.createElement("div");
          newSiblingElement.className = "new-sibling py-2";
          newSiblingElement.textContent =
            "Please enter valid email example@test.com";
          e.target.insertAdjacentElement("afterend", newSiblingElement);
        }
      }
    }
  }
});
// Form

// Toggle nav links color
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbarNav .nav-link");

  // Create an Intersection Observer instance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the section ID
          const id = entry.target.getAttribute("id");

          // Remove 'active' class from all nav links
          navLinks.forEach((link) => {
            link.classList.remove("active-text");
          });

          // Add 'active' class to the corresponding nav link
          const activeLink = document.querySelector(`[href="#${id}"]`);
          if (activeLink) {
            activeLink.classList.add("active-text");
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Toggle nav links color

// Initialize Isotope

$(window).on("load", function () {
  var $container = $(".portfolioContainer");
  var $filter = $("#filter");
  $container.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOptions: {
      duration: 750,
      easing: "linear",
    },
  });
  $filter.find("button").click(function () {
    var selector = $(this).attr("data-filter");
    $filter.find("button").removeClass("active-text");
    $(this).addClass("active-text");
    $container.isotope({
      filter: selector,
      animationOptions: {
        animationDuration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return false;
  });
});
// Initialize Isotope

// Modal

// Modal
