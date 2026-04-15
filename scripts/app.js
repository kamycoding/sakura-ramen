const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const body = document.body;

if (hamburger && mobileMenu) {
  const openMobileMenu = () => {
    hamburger.classList.add("active");
    mobileMenu.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    body.classList.add("no-scroll");
  };

  const closeMobileMenu = () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    body.classList.remove("no-scroll");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");

    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMobileMenu();
    }
  });
}
