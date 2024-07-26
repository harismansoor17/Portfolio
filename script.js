let ham = document.querySelector(".mobile");
let close = document.querySelector("#close");
let menu = document.querySelector(".off-screen");
 
let submitBtn = document.querySelector("#submit");


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

        //  SMTP JS
submitBtn. addEventListener("click", () => {
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");
let name = document.querySelector("#name");
let message = document.querySelector("#message");

  Email.send({
    SecureToken: "02466251-0830-4d33-9541-8d1c49342502",
    To : 'harisdev2005@gmail.com',
    From : email.value,
    Subject : subject.value,
    Body : "Name: " + name.value 
          + "<br> Email: " + email.value
          + "<br> Message: " + message.value
  }).then(
  message => alert(message)
  ).then(
    message => alert("Submited")
  )

});


            // 