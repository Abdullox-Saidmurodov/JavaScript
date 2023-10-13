// document.querySelector("body").style.background = "red";
let a = document.querySelector("button");

// span.addEventListener("click", function (e) {
//   if (a.type == "password") {
//     a.type = "text";
//   } else {
//     a.type = "password";
//   }
a.addEventListener("click", function () {
  if (a.innerText == "A") {
    a.innerText = "B";
  } else {
    a.innerText = "A";
  }
});