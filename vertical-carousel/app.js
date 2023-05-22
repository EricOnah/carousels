const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".carousel__button--right");
const prevBtn = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange the slide to be next to each other

//using loop

const hideShowArrow = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("is-hidden");
    nextBtn.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.add("is-hidden");
  } else {
    prevBtn.classList.remove("is-hidden");
    nextBtn.classList.remove("is-hidden");
  }
};

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

// right button clicked

nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetDot = currentDot.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);

  //   move to the next slide
  track.style.transform = "translateX(-" + nextSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");

  hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
});

prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetDot = currentDot.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);

  //   move to the next slide
  track.style.transform = "translateX(-" + prevSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  prevSlide.classList.add("current-slide");
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
  hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
});

//the buttons

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");

  hideShowArrow(slides, prevBtn, nextBtn, targetIndex);
});
