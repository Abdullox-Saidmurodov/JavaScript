
const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

button.addEventListener("click", () => {
    // ul.innerHTML += "<li>Something new text";

    // js da element yaratish
    const li = document.createElement("li");
    li.textContent = "Something new text";
    // console.log(li);
    // ul.appendChild(li);
    ul.prepend(li);
})

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//     item.addEventListener("click", (e) => {
//         // console.log(e);
//         // console.log(e.target);
//         console.log(item);
//         e.target.style.textDecoration = "line-through";
//         // e.target.style.opacity = 0.8;
//         item.style.opacity = 0.8;
//     });
// });

const items = document.querySelectorAll("li");

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.target.remove();
    });
});