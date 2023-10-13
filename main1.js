let a = document.querySelector("input");
let span = document.querySelector("span");
let form = document.querySelector("form");
 
form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (a.value == "12345") {
        span.innerHTML = "Xush kelibsiz";
        span.style.color = "green";
    } else {
        span.innerHTML = "Parol xato";
        span.style.color = "red";
    }
});