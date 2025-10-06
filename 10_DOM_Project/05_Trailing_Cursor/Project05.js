// DOM se .smallCursor aur .shadowCursor elements ko select kiya gaya
let smallCursor = document.querySelector(".smallCursor"); // Mouse ke sath turant move hone wala cursor
let shadowCursor = document.querySelector(".shadowCursor"); // Thoda delay ke sath follow karne wala cursor (shadow effect)

// Mouse ki current position ko track karne ke liye variables
let mouseX = 0;
let mouseY = 0;

// Animation frame aur timer ko manage karne ke liye variables
let animationId = null;
let timer = null;

// Jab bhi mouse move kare — event listener fire hoga
document.addEventListener("mousemove", function (eventObj) {
  // Mouse ki current X aur Y position ko store karo
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;

  // smallCursor ko direct mouse position pe move karo (without delay)
  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";

  // Agar abhi tak animation chalu nahi hua, toh start karo
  if (!animationId) {
    animateShadowCursor(); // Shadow cursor ko animate karna start karo
  }

  // Agar mouse ruk gaya toh kuch time baad animation ko stop kar do
  clearTimeout(timer); // pehle se koi timer chal raha ho toh hata do
  timer = setTimeout(() => {
    cancelAnimationFrame(animationId); // animation frame ko band karo
    animationId = null; // null set karo taaki fir se mouse move hone pe dobara animation shuru ho
  }, 2000); // 2 second ke baad animation stop ho jaayega
});

// Yeh function shadow cursor ko smoothly mouse ke peeche-peeche move karta hai
function animateShadowCursor() {
  // Shadow cursor ki current X aur Y position le lo (agar nahi mili toh 0)
  let currentX = parseFloat(shadowCursor.style.left) || 0;
  let currentY = parseFloat(shadowCursor.style.top) || 0;

  // Mouse aur shadow cursor ke beech ka distance calculate karo
  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  // Shadow cursor ko thoda (5%) distance move karo mouse ki direction me
  shadowCursor.style.left = currentX + distanceX * 0.05 + "px";
  shadowCursor.style.top = currentY + distanceY * 0.05 + "px";

  // Agle frame me phir se yehi function call karo — continuous animation ke liye
  animationId = requestAnimationFrame(animateShadowCursor);
}
