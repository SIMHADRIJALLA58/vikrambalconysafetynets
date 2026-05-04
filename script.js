const slides = document.querySelectorAll('.slide');
let current = 0;

function changeSlide() {
  slides[current].classList.remove('active');

  current = (current + 1) % slides.length;

  slides[current].classList.add('active');
}

// Change every 2 seconds
setInterval(changeSlide, 5000);



AOS.init({
  duration: 1000,
  once: true
});
