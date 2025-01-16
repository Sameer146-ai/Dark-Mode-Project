let body = document.querySelector("body");
let toggle = document.querySelector(".toggle-btn");
let circle = document.querySelector(".circle");

console.log(body,toggle,circle);
toggle.addEventListener("click" , () => body.classList.toggle("dark-mode"));
toggle.addEventListener("click" , () => circle.classList.toggle("active"));
