// setTimeout

// setTimeout(function, time)

setTimeout(() => {console.log("Hello World!");}, 3000) // 3000 = 3 sekund

// setTimeout();

// console.log("Hello World!");

// setInterval

let a = 0;
const timerInterval = setInterval(() => {
    a++;
    console.log(a);
}, 1000);

setTimeout(() => {
    clearInterval(timerInterval);
}, 10000);