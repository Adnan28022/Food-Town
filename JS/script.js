/*-----------------------------------*\
  Preloader
\*-----------------------------------*/
window.addEventListener("load", () => {
  var loader = document.querySelector(".loader");
  loader.classList.add("preloader");

  setTimeout(() => {
    loader.classList.remove("preloader");
  }, 3000);
});

/*-----------------------------------*\
  Navbar and Fixed Navbar
\*-----------------------------------*/
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 200) {
    navbar.classList.add("fixed-navbar");
    navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--loader-color');

  } else if (window.scrollY < 200) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.classList.remove("fixed-navbar");
  }
};

/*-----------------------------------*\
  Home Pagee Hero Section Image Slider
\*-----------------------------------*/
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const heroes = document.querySelectorAll(".hero");

var currentSlide = 0;
var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  heroes.forEach((hero) => {
    hero.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  heroes[manual].classList.add("active");
}

// Function to automatically change slides
var autoSlide = function () {
  currentSlide++;
  if (currentSlide >= btns.length) {
    currentSlide = 0;
  }
  sliderNav(currentSlide);
}
var slideInterval = setInterval(autoSlide, 5000);

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(slideInterval);
    sliderNav(i);
    currentSlide = i;
    slideInterval = setInterval(autoSlide, 5000);
  });
});