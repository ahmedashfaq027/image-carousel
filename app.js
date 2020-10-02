const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

let counter = 1;
setInterval(() => {
  const size = carouselImages[counter].clientWidth;

  console.log(size);
  carouselSlide.style.transition = "transform .7s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  counter++;
  if (counter > carouselImages.length - 1) {
    counter = 0;
  }
}, 2000);
