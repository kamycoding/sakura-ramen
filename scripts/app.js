const menuButton = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const body = document.body;
const desktopMediaQuery = window.matchMedia("(min-width: 961px)");

if (menuButton && mobileMenu) {
  const isMenuOpen = () => mobileMenu.classList.contains("open");

  const setMenuState = (open) => {
    mobileMenu.classList.toggle("open", open);
    menuButton.classList.toggle("active", open);
    menuButton.setAttribute("aria-expanded", String(open));
    body.classList.toggle("no-scroll", open);
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
}
