let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function(eventObj) {
    cursor.style.left = eventObj.x + "px";
    cursor.style.top = eventObj.y + "px";
});
