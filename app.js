const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.yandex.ru");
link.textContent = "Go To Yandex Main Page";

console.log(link.getAttribute("href"));

console.log(link.style);

link.style.margin = "50px";
link.style.fontSize = "50px";

console.log(link.style.margin);