/*
Create a show/hide password Toggle.
*/

let button = document.querySelector("button");
let passwordInput = document.querySelector("#password");

button.addEventListener("click", () => {
  let passwordType = passwordInput.type;
  passwordInput.type = passwordType === "password" ? "text" : "password";

  button.innerText = passwordType === "password" ? "Hide" : "Show";
});

