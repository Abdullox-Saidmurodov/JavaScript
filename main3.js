// document.querySelector("body").style.background = "red";
let a = document.querySelector("input");
let span = document.querySelector("span");
let form = document.querySelector("form");
let div = document.querySelector(".box");

// span.addEventListener("click", function (e) {
//   if (a.type == "password") {
//     a.type = "text";
//   } else {
//     a.type = "password";
//   }
// });
a.addEventListener("keydown", function (e) {
  if (e.key != "Backspace") {
    div.innerHTML += e.key;
  } else {
    div.innerHTML = "";
    a.value = "";
  }
});