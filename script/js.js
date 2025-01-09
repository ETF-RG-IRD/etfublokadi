//Burger for mobile, nav
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
});

function highlightCurrentSection(currentScrollY) {
sections.forEach((section, index) => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  if (currentScrollY >= sectionTop - sectionHeight / 1.5 && currentScrollY < sectionTop + sectionHeight - sectionHeight / 1.5) {
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[index].classList.add('active');
    sections.forEach(sec => sec.classList.remove('focused'));
    section.classList.add('focused');
  }
});
}