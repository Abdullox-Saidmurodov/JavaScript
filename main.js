// while loop

// for(let i = 0; i < 10; i++) {
//     console.log("Salom, " + i);
// }

// let a = 0;
// while(a < 5) {
//     console.log("hello");
//     a += 1;
// }
// console.log("loglar");

// while(true) {
//     a = prompt("Parolni kiriting: ");
//     if(a == "1234") {
//         alert("Parol to'g'ri!");
//         break;
//     } else {
//         alert("Parol xato!");
//     }
// }

// while(true) {
//     let a = +prompt("1-sonni kiriting: ");
//     let b = +prompt("2-sonni kiriting: ");
//     alert(a + b);
//     let amal = prompt("Amalni yakunlash uchun 0 ni bosing: ");
//     if(amal == "0") {
//         break;
//     }
// }

// while(true) {
//     let a = +prompt("1-sonni kiriting: ");
//     let b = +prompt("2-sonni kiriting: ");
//     alert(a + b);
//     let amal = prompt("Amalni yakunlash uchun 0 ni bosing: ");
//     while(true) {
//         alert("Salom ikkinchi while")
//         if(amal == "0") {
//             break;
//         }
//     }
// }

// let num = 0;
// while (num < 10) {
//     // console.log(num);
//     num++;
//     if(num == 5) {
//         // break;
//         continue;
//     }
//     console.log(num);
// }

// let number = 5;
// while (number <= 10) {
//     console.log(number);
//     number++;
// }

// while(true) {
//     let a = +prompt("1-sonni kiriting: ")
//     let b = +prompt("2-sonni kiriting: ")
//     let amal = prompt("Amal kiriting: ")
//     if(amal == "+") {
//         alert(a + b);
//     } else if(amal == "-") {
//         alert(a - b);
//     } else if(amal == "*") {
//         alert(a * b);
//     } else if(amal == "/") {
//         alert(a / b);
//     } 
//     let yakun = prompt("Agar yanlamoqchi bo'lsangiz 0 ni kiriting, davom ettirish uchun 1 ni kiriting: ")
//     if(yakun == "0") {
//         break;
//     } else if(yakun == "1") {
//         continue;
//     }
// }

// do {
//     console.log("Salom");


// } while(false);

// let yakun;
// do {
//     let a = +prompt("1-sonni kiriting: ")
//     let b = +prompt("2-sonni kiriting: ")
//     let amal = prompt("Amal kiriting: ")
//     if(amal == "+") {
//         alert(a + b);
//     } else if(amal == "-") {
//         alert(a - b);
//     } else if(amal == "*") {
//         alert(a * b);
//     } else if(amal == "/") {
//         alert(a / b);
//     } 
//     yakun = prompt("Agar yanlamoqchi bo'lsangiz 0 ni kiriting, davom ettirish uchun 1 ni kiriting: ")
// } while(yakun)

let k = 34;
let n = 10;
let i = 0
while(i < n) {
    console.log(k)
    i++;
}

for(let i = 0; i < n; i++) {
    console.log(k);
}
