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
  // add a bool
    

  // If the user scrolls up, show the nav menu
  if (currentScrollY < lastScrollY) {
      navMenu.style.transform = `translateY(+${currentScrollY}px)`; // Move the nav up as you scroll down
        //z-index to 9999 to make sure it's on top
        navMenu.style.zIndex = "999";




  } else {
      // If the user scrolls down, hide the nav menu
      navMenu.style.transform = "translateY(-100%)";
        //z-index to 0 to make sure it's on bottom
        navMenu.style.zIndex = "0";
        
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
});