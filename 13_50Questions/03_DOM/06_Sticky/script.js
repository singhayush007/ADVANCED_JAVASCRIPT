/*
q: 36 Create a sticky Header on Scroll . The Header becomes fixed to the top after scrolling down. (Key oncepts : Scroll Event , window.scrollY , classList.add/remove)
*/

let navbar = document.querySelector("nav");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 100) {
    navbar.classList.add("stick");
  } else {
    navbar.classList.remove("stick");
  }
});
