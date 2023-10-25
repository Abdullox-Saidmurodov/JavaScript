// // local Storage

// // setItem
// localStorage.setItem("name", "Ahror");

// // getItem
// localStorage.getItem("name");
// console.log(localStorage.getItem("name"));

// // clear
// localStorage.clear();


// local Storage

// setItem
const names = ["Ahror", "Sardor", "Donyor"];
localStorage.setItem("names", JSON.stringify(names));

// getItem
// console.log(localStorage.getItem("names"));
// console.log(typeof localStorage.getItem("names"));
// console.log(typeof JSON.parse(localStorage.getItem("names")));
console.log(JSON.parse(localStorage.getItem("names")));

// clear
// localStorage.clear();