const menuButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const body = document.body;
const desktopMediaQuery = window.matchMedia("(min-width: 961px)");

let scrollPosition = 0;

if (menuButton && mobileMenu) {
  const isMenuOpen = () => mobileMenu.classList.contains("open");

  const lockScroll = () => {
    scrollPosition = window.scrollY;
    body.classList.add("no-scroll");
    body.style.top = `-${scrollPosition}px`;
    body.style.position = "fixed";
    body.style.width = "100%";
  };

  const unlockScroll = () => {
    body.classList.remove("no-scroll");
    body.style.top = "";
    body.style.position = "";
    body.style.width = "";
    window.scrollTo(0, scrollPosition);
  };

  const setMenuState = (open) => {
    mobileMenu.classList.toggle("open", open);
    menuButton.classList.toggle("active", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close mobile menu" : "Open mobile menu",
    );
    mobileMenu.setAttribute("aria-hidden", String(!open));

    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  const closeMenu = () => setMenuState(false);
  const toggleMenu = () => setMenuState(!isMenuOpen());

  menuButton.addEventListener("click", toggleMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      closeMenu();
    }
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches && isMenuOpen()) {
      closeMenu();
    }
  });

  mobileMenu.setAttribute("aria-hidden", "true");
}
