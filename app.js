// const content = document.querySelector("p");

// content.classList.add("success");
// console.log(content.classList);

// content.classList.remove("success");
// console.log(content.classList);

////////////////////////////////////////

// console.log(content.textContent.length);
// 1-variant
// const content = document.querySelectorAll("p");
// let a;

// content.forEach((i) => {
//     a = i.textContent.indexOf(" ");
//     if(i.textContent.substr(a+1, 7) == "success"){
//         i.classList.add("success");
//     } else if(i.textContent.substr(a+1, 5) == "error"){
//         i.classList.add("error");
//     }

//     // console.log(a);
// })
// 2-variant
// const para = document.querySelectorAll("p");

// para.forEach((text) => {
//     if(text.textContent.includes("success")) {
//         text.classList.add("success");
//     } else if(text.textContent.includes("error")) {
//         text.classList.add("error");
//     }
// })

// toggle
const heading = document.querySelector("h3");

heading.classList.toggle("success");
// heading.classList.toggle("success");