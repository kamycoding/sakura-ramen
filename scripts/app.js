const menuButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

let scrollPosition = 0;

if (menuButton && mobileMenu) {
  function openMenu() {
    scrollPosition = window.scrollY;

    mobileMenu.classList.add("open");
    menuButton.classList.add("active");
    menuButton.setAttribute("aria-expanded", "true");

    document.body.classList.add("no-scroll");
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");

    document.body.classList.remove("no-scroll");
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollPosition);
  }

  menuButton.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 960 && mobileMenu.classList.contains("open")) {
      closeMenu();
    }
  });
}
