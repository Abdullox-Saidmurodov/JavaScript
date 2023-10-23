// const button = document.querySelector("button");

// // button.addEventListener("click", () => {
// //     console.log("You are clicked the button");
// // })

// button.addEventListener("mouseover", () => {
//     console.log("You are clicked the button");
// })

const items = document.querySelectorAll("li");

// items.forEach((item) => {
//     item.addEventListener("click", () => {
//         console.log("Item clicked " + item.textContent);
//     });
// });

items.forEach((item) => {
    item.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        console.log(item);
        e.target.style.textDecoration = "line-through";
        // e.target.style.opacity = 0.8;
        item.style.opacity = 0.8;
    });
});