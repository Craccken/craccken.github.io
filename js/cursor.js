const cursor = document.querySelector("#inner-cursor");

document.addEventListener("mousemove", (event) => {
 cursor.style.top = event.clientY + window.scrollY + "px";
 cursor.style.left = event.clientX + window.scrollX + "px";
});
