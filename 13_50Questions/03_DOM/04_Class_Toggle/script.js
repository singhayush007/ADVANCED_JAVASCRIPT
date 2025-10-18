/* 
Q: 34 How would you toggle a class on an element when another element is clicked (e.g, show/hide sidebar)?
*/

let sidebar = document.querySelector(".sidebar");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  sidebar.classList.toggle("showSidebar");
});
