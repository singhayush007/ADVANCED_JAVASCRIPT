/*
Q: 31 How can you update theDOM based on user input in real-time(e.g live preview of a form)
*/

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");

let nameValue = document.querySelector(".nameValue");
let emailValue = document.querySelector(".emailValue");

nameInput.addEventListener("input", function (e) {
  nameValue.innerText = e.target.value;
});

emailInput.addEventListener("input", function (e) {
  emailValue.innerText = e.target.value;
});
