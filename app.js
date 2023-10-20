// DOM Selectors

// 1) getElementsByTagName
// const listItem = document.getElementsByTagName("li");
// console.log(listItem.length);

// 2) getElementsByClassName
// const listItem = document.getElementsByClassName("list-item");
// console.log(listItem[0]);

// 3) getElementById
// const clickBtn = document.getElementById("click-btn");
// console.log(clickBtn);

// 4) querySelector / querySelectorAll \
const listItem = document.querySelectorAll(".list-item");
// console.log(listItem);
listItem.forEach((item) => {
    console.log(item);
})