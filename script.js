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
      //  SMTP JS
         function sendEmail() {

  Email.send({
    SecureToken:'a09f26f6-fa3d-4786-b430-435552b7ccf2',
    To : 'harisdev2005@gmail.com',
    From : 'harisdev2005@gmail.com',
    Subject : subjectBody.value,
    Body : "Name: " + usrName.value 
          + "<br> Email: " + usrEmail.value
          + "<br> Message: " + messageBody.value
  }).then(
  message => alert("Form Submited")
  )
};


            // 
