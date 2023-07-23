
function showImage(image) {
  const zoomedImage = document.getElementById("zoomedImage");
  zoomedImage.src = image.src;
  zoomedImage.style.display = "inline-block";
}

const slides = document.querySelectorAll('.image-slide');
let currentSlide = 0;

function changeSlide(n) {
  currentSlide += n;
  showSlide();
}

function showSlide() {
  const totalSlides = slides.length;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  slides.forEach((slide, index) => {
    slide.classList.toggle('active', index === currentSlide);
  });
}

showSlide(); // Show the first slide initially


function zoomIn(image) {
  image.classList.add('zoom-in');
}

function zoomOut(image) {
  image.classList.remove('zoom-in');
}
