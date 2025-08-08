const sections = document.querySelectorAll('.carousel-section');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0;

function showSection(newIndex, direction = 'right') {
  if (newIndex === currentIndex) return;

  const current = sections[currentIndex];
  const next = sections[newIndex];

  // remove active and start sliding out
  current.classList.remove('active');
  current.classList.add(direction === 'right' ? 'slide-left' : 'slide-right');

  // reset classes on next
  next.classList.remove('slide-left', 'slide-right');
  next.classList.add('active');

  // cleanup slide animation classes
  setTimeout(() => {
    current.classList.remove('slide-left', 'slide-right');
  }, 400);

  currentIndex = newIndex;
}

leftArrow.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + sections.length) % sections.length;
  showSection(newIndex, 'left');
});

rightArrow.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % sections.length;
  showSection(newIndex, 'right');
});

// Initial render
sections.forEach((s, i) => {
  if (i !== currentIndex) {
    s.classList.remove('active');
    s.classList.add('slide-right');
  }
});
sections[currentIndex].classList.add('active');
