//Burger for mobile, nav
document.getElementById("burger").addEventListener("click", (e) => {
    document.querySelector("nav").classList.toggle("col");
    document.getElementById("menu").classList.toggle("offscreen");
});

// Expandable text boxes
document.querySelectorAll('.text-box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('expanded');
    });
});

let lastScrollY = window.scrollY;

// The initial position of the nav menu
const navMenu = document.getElementById("nav-menu");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // If the user scrolls up, show the nav menu
  if (currentScrollY < lastScrollY) {
      navMenu.style.transform = `translateY(+${currentScrollY}px)`; // Move the nav up as you scroll down
  } else {
      // If the user scrolls down, hide the nav menu
      navMenu.style.transform = "translateY(-100%)";
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
});