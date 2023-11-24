// // DOM (document object model)
// let head = document.getElementsByTagName('h1');
// console.log(head);
// let headClass = document.getElementsByClassName('lorem');
// console.log(headClass);
// let headId = document.getElementById('lorem');
// console.log(headId);

// function Change() {
//     headId.innerHTML = "Hello World";
//     headId.style.background = "yellow";
// }

// function Back() {
//     headId.innerHTML = "Lorem, ipsum dolor.";
//     headId.style.background = "red";
// }

// let one, oneClass, oneId, two, twoClass, twoId, three, threeClass, threeId, four, fourClass, fourId, five, fiveClass, fiveId;

// one = document.getElementsByTagName('h1');
// oneClass = document.getElementsByClassName('1');
// oneId = document.getElementById('1');
// console.log(one, " ", oneCLass, " ", oneId);


// two = document.getElementsByTagName('h2');
// twoClass = document.getElementsByClassName('2');
// twoId = document.getElementById('2');
// console.log(two, " ", twoCLass, " ", twoId);

// three = document.getElementsByTagName('h3');
// threeClass = document.getElementsByClassName('3');
// threeId = document.getElementById('3');
// console.log(three, " ", threeCLass, " ", threeId);

// four = document.getElementsByTagName('h4');
// fourClass = document.getElementsByClassName('4');
// fourId = document.getElementById('4');
// console.log(four, " ", fourCLass, " ", fourId);

// four = document.getElementsByTagName('h5');
// fourClass = document.getElementsByClassName('5');
// fourId = document.getElementById('5');
// console.log(five, " ", fiveCLass, " ", fiveId);



let hTagNomi = document.querySelectorAll('h1');
let hClassNomi = document.querySelector('.lorem');
let hIdNomi = document.querySelector('#lorem');
console.log(hTagNomi);
console.log(hClassNomi);
console.log(hIdNomi);

hTagNomi[0].innerHTML = "Salom";
hTagNomi[3].innerHTML = "Xayr";

hClassNomi.style.cssText = `
background: gray;
color: green;
width: 400px;
`;