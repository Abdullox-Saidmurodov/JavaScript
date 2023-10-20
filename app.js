// textContent
// const title = document.getElementById("title");
// // console.log(title.textContent);
// // title.textContent = "New text";
// title.textContent += " New text";

// let content = document.querySelectorAll(".list-item");
// content.forEach((it) => {
//     it.textContent += " darslari";
// })

//innerHTML
// const title = document.getElementById("title");
// // title.innerHTML = " New Text HTML";
// title.innerHTML = "<i> New Text HTML</i>";

const names = ["Ahror", "Sardor", "Donyor"];
const ol = document.querySelector("ol");

names.forEach((name) => {
    ol.innerHTML += `<li>${name}</li>`;
})