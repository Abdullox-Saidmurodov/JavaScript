// callback function

const myFunc = (callbackFunc) => {
    let number = 50;
    callbackFunc(number);
}

// const callbackFunc = function(value) {
//     console.log(value);
// }

myFunc(function(value) {
    console.log(value);
})

// // errow function

// myFunc((value) => {
//     console.log(value);
// })

