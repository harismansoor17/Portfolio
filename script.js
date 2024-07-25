let ham = document.querySelector(".mobile");
let close = document.querySelector("#close");
let menu = document.querySelector(".off-screen");

     // HAM MENU

ham.addEventListener("click", () => {
  // console.log('clicked');
  menu.style.right = "0";
});

close.addEventListener("click", () => {
  // console.log('clicked');
  menu.style.right = "-500px";
});
         //

     // Type Script
var typed = new Typed("#element", {
  strings: ["Web Designer", "WordPress", "Front-End Developer"],
  typeSpeed: 25,
});
         //  