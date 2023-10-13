// document.querySelector("body").style.background = "red";
let a = document.querySelector("input");
let span = document.querySelector("span");
let form = document.querySelector("form");


span.addEventListener("click", function (e) {
  if (a.type == "password") {
    a.type = "text";
  } else {
    a.type = "password";
  }
});