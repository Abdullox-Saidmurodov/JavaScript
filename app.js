// let a = +prompt("Sonni kiriting: ");
// alert(`${a**2},  ${a**3}`);



// let a = +prompt("Yoshingizni kiriting: ");
// alert(`Siz ${2023 - a}-yilda tug'ilgansiz.`);



// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");

// alert(`a + b = ${a + b}, a - b = ${a - b}, a * b = ${a * b}, a / b = ${a / b} `);



// let a = prompt("Loginni kiriting: ");
// if(a == "admin") {
//     alert(`"Xush kelibsiz, Admin. Foydalanuvchilar ro'yxatini ko'rasizmi?"`);
// } else {
//     alert(`"Xush kelibsiz, {Foydalanuvchi_ismi}!"`);
// }



// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");

// if(a == b)
// alert(`"Sonlar teng ekan" ekan`);


// let a = +prompt("Sonni kiriting: ");

// if(a > 0) {
//     alert(`Musbat`);
// } else if(a < 0) {
//     alert(`Manfiy`);
// }


// let a = +prompt("Sonni kiriting: ");

// if(a > 0) {
//     alert(`Sonning ildizi ${a**(1/2)}`);
// } else if(a < 0) {
//     alert(`Musbat son kiriting!`);
// }







// let a = +prompt("Musbat juft kiriting: ");

// if(a % 2 == 0) {
//     alert(`"Rahmat!"`);
// } else {
//     alert(`"Bu juft son emas!"`);
// }


// let a = +prompt("Yoshingizni kiriting: ");

// if(a < 4 || a > 60) {
//     alert(`"Chipta bepul siz uchun!"`);
// } else if(a < 18) {
//     alert(`"10000 so'm!"`);
// } else if(a >= 18) {
//     alert(`"20000 so'm!"`);
// }


// let a = +prompt("1-sonni kiriting: ");
// let b = +prompt("2-sonni kiriting: ");

// if(a > b) {
//     alert(`${a} > ${b}`);
// } else if(a < b) {
//     alert(`${a} < ${b}`);
// } else if(a == b) {
//     alert(`${a} = ${b}`);
// }


// let a;

// do {
//     a = prompt("Yoqtirgan kitoblaringizni kiriting: ");
//     console.log(a);
// } while(!(a == "stop"))


let a;

while(true) {
    a = prompt("Yoshingizni kiriting: ");
    if(a < 7) {
        alert(`2000 so'm`);
    } else if(a >= 7 && a < 18) {
        alert(`3000 so'm`);
    } else if(a >= 18 && a < 65) {
        alert(`10000 so'm`);
    } else if(a >= 65) {
        alert(`Bepul`);
    } else if(a == "exit" || a == "quit") {
        break;
    }
}
