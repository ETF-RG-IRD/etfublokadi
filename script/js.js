// Burger for mobile, nav
document.getElementById("burger").addEventListener("click", (e) => {
  document.querySelector("nav").classList.toggle("col");
  document.getElementById("menu").classList.toggle("offscreen");
});

document.querySelectorAll('.text-box').forEach(box => {
  const details = box.querySelector('.details');
  box.addEventListener('click', () => {
      document.querySelectorAll('.text-box').forEach(b => {
          if (b !== box) {
              b.classList.remove('expanded');
              b.querySelector('.details').style.maxHeight = null;
          }
      });
      box.classList.toggle('expanded');
      if (box.classList.contains('expanded')) {
          details.style.maxHeight = details.scrollHeight + 'px';
      } else {
          details.style.maxHeight = null;
      }
  });
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener("scroll", () => {
const currentScrollY = window.scrollY;

// Highlight the current section in the navigation
highlightCurrentSection(currentScrollY);

// Apply scroll effect for static-header
applyScrollEffectOnHeader(currentScrollY);

// Reapply hover effect if at the top of the page
if (currentScrollY === 0) {
  enableHoverEffect();
} else {
  disableHoverEffect();
}
});

function highlightCurrentSection(currentScrollY) {
sections.forEach((section, index) => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const h2 = section.querySelector('h2');
  if (currentScrollY >= sectionTop - sectionHeight / 1.5 && currentScrollY < sectionTop + sectionHeight - sectionHeight / 1.5) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
    sections.forEach(sec => sec.classList.remove('focused'));
    section.classList.add('focused');
    h2.classList.add('active'); // Add active class to h2
  } else {
    h2.classList.remove('active'); // Remove active class from h2
  }
});
}

function applyScrollEffectOnHeader(currentScrollY) {
  const header = document.querySelector('.static-header');
  const headerTop = header.offsetTop;
  const headerHeight = header.offsetHeight;
  const h1 = header.querySelector('h1');
  const paragraphs = header.querySelectorAll('p');

  // Set the initial state with the first element increased
  h1.classList.add('scroll-active');
  paragraphs.forEach(p => p.classList.remove('scroll-active'));

  if (currentScrollY >= headerTop && currentScrollY < headerTop + headerHeight) {
    const scrollPosition = currentScrollY - headerTop;
    const totalElements = paragraphs.length -2; // Including h1
    const elementHeight = headerHeight / (totalElements * 3); // Reduce divisor to make changes happen faster

    if (scrollPosition > 0) {
      h1.classList.remove('scroll-active');
    }

    paragraphs.forEach((p, index) => {
      if (index === 0) return; // Skip the first <p> element

      if (scrollPosition >= elementHeight * index && scrollPosition < elementHeight * (index + 1)) {
        p.classList.add('scroll-active');
        if (index > 1) {
          paragraphs[index - 1].classList.remove('scroll-active');
        }
      } else if (scrollPosition < elementHeight) {
        p.classList.remove('scroll-active');
      }
    });
  } else {
    h1.classList.remove('scroll-active');
    paragraphs.forEach(p => p.classList.remove('scroll-active'));
  }
}

// Add hover effect
const header = document.querySelector('.static-header');
const h1 = header.querySelector('h1');
const paragraphs = header.querySelectorAll('p');

function enableHoverEffect() {
  h1.addEventListener('mouseover', addHoverClass);
  h1.addEventListener('mouseout', removeHoverClass);
  paragraphs.forEach(p => {
    p.addEventListener('mouseover', addHoverClass);
    p.addEventListener('mouseout', removeHoverClass);
  });
}

function disableHoverEffect() {
  h1.removeEventListener('mouseover', addHoverClass);
  h1.removeEventListener('mouseout', removeHoverClass);
  paragraphs.forEach(p => {
    p.removeEventListener('mouseover', addHoverClass);
    p.removeEventListener('mouseout', removeHoverClass);
  });
}

function addHoverClass(event) {
  event.target.classList.add('hover-active');
}

function removeHoverClass(event) {
  event.target.classList.remove('hover-active');
}

// Initially enable hover effect if at the top of the page
if (window.scrollY === 0) {
  enableHoverEffect();
}

// Hide nav menu after 3 seconds of inactivity
let inactivityTimeout;

function resetInactivityTimeout() {
  clearTimeout(inactivityTimeout);
  document.querySelector("nav").classList.remove("hidden");
  inactivityTimeout = setTimeout(() => {
    if (window.scrollY !== 0) { // Check if not at the top of the page
      document.querySelector("nav").classList.add("hidden");
    }
  }, 1000); // Set to 3 seconds
}

window.addEventListener("mousemove", resetInactivityTimeout);
window.addEventListener("keydown", resetInactivityTimeout);
window.addEventListener("scroll", resetInactivityTimeout);
resetInactivityTimeout(); // Initialize the timeout

// Change background images of static-header every 5 seconds
const backgroundImages = [
  'assets/background/1.jpg',
  'assets/background/2.jpg',
  'assets/background/3.jpg',
  'assets/background/4.jpg',
  'assets/background/5.jpg'
];


// Preload background images
backgroundImages.forEach(src => {
  const img = new Image();
  img.src = src;
});

let currentImageIndex = 0;

function changeBackgroundImage() {
  const header = document.querySelector('.static-header');
  header.classList.add('flash');
  setTimeout(() => {
    header.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    header.classList.remove('flash');
  }, 250); // Half of the flash animation duration
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

// Initialize the first background image
changeBackgroundImage();

// Hide loading screen when content is fully loaded
window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const randomLoadingTime = Math.random() * (2000 - 400) + 400; // Random time between 0.5s and 2s
  setTimeout(() => {
    loadingScreen.style.opacity = 0;
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      document.body.classList.add('loaded');
    }, 100); // Match the duration of the fade-out transition
  }, randomLoadingTime);
});