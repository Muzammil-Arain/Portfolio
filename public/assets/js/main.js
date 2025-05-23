/*==================== MENU SHOW Y HIDDEN ====================*/

const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navclose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navclose) {
  navclose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");

  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillcontect = document.getElementsByClassName("skill_contect"),
  skillheader = document.querySelectorAll(".skill_header");

function toggleskill() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillcontect.length; i++) {
    skillcontect[i].className = "skill_contect skill_close";
  }

  if (itemClass === "skill_contect skill_close") {
    this.parentNode.className = "skill_contect skill_open";
  }
}

skillheader.forEach((el) => {
  el.addEventListener("click", toggleskill);
});

/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click"),
    () => {
      const target = document.querySelector(tab.dataset.target);

      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("qualification_active");
      });

      target.classList.add("qualification_active");

      tabs.forEach((tab) => {
        tab.classList.remove("qualification_active");
      });

      tab.classList.add("qualification_active");
    };
});

/*==================== SERVICES MODAL ====================*/

const modalviews = document.querySelectorAll(".services_model"),
  modalbtns = document.querySelectorAll(".services_button"),
  modalcloses = document.querySelectorAll(".services_model-close");

let modal = function (modalClick) {
  modalviews[modalClick].classList.add("active-modal");
};

modalbtns.forEach((modalbtn, i) => {
  modalbtn.addEventListener("click", () => {
    modal(i);
  });
});

modalcloses.forEach((modalclose) => {
  modalclose.addEventListener("click", () => {
    modalviews.forEach((modalview) => {
      modalview.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/

var swiper = new Swiper(".Portfolio_container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/

var swiperTestimonal = new Swiper(".Testimonal_container", {
  loop: true,
  grabCursor: true,
  SpaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      sliderPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollup() {
  const scrollup = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollup.classList.add("show-scroll");
  else scrollup.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollup);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Functions to get current theme and icon
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// Apply the theme based on user preference or default to dark
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
} else {
  // Default to dark theme
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
  localStorage.setItem("selected-theme", "dark");
  localStorage.setItem("selected-icon", "uil-sun");
}

// Theme toggle
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
