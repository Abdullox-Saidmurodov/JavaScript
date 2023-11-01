// // function
// function func_name (a, d, f, g, h, j) {
//     console.log(a, d, f, g, h, j);
// }
// func_name(1, 2, 3, 4, 5, 6);

// function full_name (name, surname) {
//     console.log(`Mening ismim ${name}, familiyam ${surname}`);
// }

// full_name("Ali", "Aliyev");
// full_name("Zafar", "Aliyev");
// full_name("Ravshan", "Aliyev");
// full_name("Dilshod", "Aliyev");

// let full_name = (name, surname) => {
//     console.log(`Mening ismim ${name}, familiyam ${surname}`);
// };
// full_name("Ali", "Anvarov");

// let full_name = function(a, b) {
//     console.log(a + b);
// };
// full_name(2 + 4);

// let a = 34;
// let b = 12;
// function add() {
//     let a = 12;
//     let b = 14;
//     console.log(a + b);
// }
// // add();
// console.log(a + b);

// function addNumbers(...num) {
//     console.log(num);
// }
// addNumbers(1, 5, 9, 7, 5, 4);

// function ggg(a, b) {
//     return a + b;
// }
// console.log(1, 2);


// // 1-
// let ism1 = prompt("Ismingizni kiriting:");
// let familiya1 = prompt("Familiyangizni kiriting:");
// let yil1 = prompt("Tug'ilgan yilingizni kiriting:");
// let joy1 = prompt("Qayerda tug'ilgansiz:");
// let email1 = prompt("Email manzilingizni kiriting:");
// let tel1 = prompt("Telefon raqamingizni kiriting:");

// function malumot(ism, familiya, yil, joy, email, tel){
//     alert(`Siz ${familiya} ${ism} ${yil}-yilda ${joy}da tug'ilgansiz. Email manzilingiz: ${email}, Telefon raqamingiz: ${tel}.`);
// }
// malumot(ism1, familiya1, yil1, joy1, email1, tel1);

// let m = function(ism, familiya, yil, joy, email, tel){
//     console.log(`Siz ${familiya} ${ism} ${yil}-yilda ${joy}da tug'ilgansiz. Email manzilingiz: ${email}, Telefon raqamingiz: ${tel}. function`);
// }
// m(ism1, familiya1, yil1, joy1, email1, tel1);

// let mm = (ism, familiya, yil, joy, email, tel) => {
//     console.log(`Siz ${familiya} ${ism} ${yil}-yilda ${joy}da tug'ilgansiz. Email manzilingiz: ${email}, Telefon raqamingiz: ${tel}. arrow function`);
// }
// mm(ism1, familiya1, yil1, joy1, email1, tel1);


// // 2-
// let ism, familiya, yil, joy, email, tel;
// let tuxtatish;
// let i = 1;

// function malumot(){
//     ism = prompt("Ismingizni kiriting:");
//     familiya = prompt("Familiyangizni kiriting:");
//     yil = prompt("Tug'ilgan yilingizni kiriting:");
//     joy = prompt("Qayerda tug'ilgansiz:");
//     email = prompt("Email manzilingizni kiriting:");
//     tel = prompt("Telefon raqamingizni kiriting:");
//     tuxtatish = prompt(`Yana ma'lumot kititmoqchi bo'lsangiz "exit" yozuvini kiriting, davom etmoqchi bolsangiz "Enter' tugmasini bosing`);
// }
// do {
//     malumot();
//     console.log(`${i}-mijoz: ${familiya} ${ism} ${yil}-yilda ${joy}da tug'ilgan. Email manzil: ${email}, Telefon raqam: ${tel}.`);
// } while(tuxtatish != "exit")


// // 3-
// let a = +prompt("1-sonni kiriting:");
// let b = +prompt("2-sonni kiriting:");
// let c = +prompt("3-sonni kiriting:");



// function kattasi(a1, b1, c1) {
//     if(a1 > b1 && a1 > c1) return a1;
//     else if(b1 > a1 && b1 > c1) return b1;
//     else if(c1 > b1 && c1 > a1) return c1;
//     // console.log("ljd")
// };
// console.log(kattasi(a, b, c));


// // 4-
// let radius = +prompt("Radiusni kiriting: ");
// function aylana(r) {
//     return `Aylana radiusi: ${r}, diametri: ${2 * r}, perimetri: ${2 * 3.14 * r}, yuzasi: ${3.14 * (r**2)}.`;
// }
// let natija = aylana(radius);

// console.log(natija);

// // 5-
// let a,b, counter = 0;
// a = +prompt("1-sonni kiriting:");
// b = +prompt("2-sonni kiriting:");

// function tub_son(k, l) {
//     for(let i = k; i <= l; i++) {
//         for(let j = 2; j < i; j++) {
//             if(i % j == 0) {
//                 counter++;
//             }
//         }
//         if(counter == 0) {
//             console.log(i);
//         }
//         counter = 0;
//     }
// }
// tub_son(a, b);

// 6-
let a = +prompt("Son kiriting: ");
let k = 0, l = 1, m;
function fibonachchi(a_, k_, l_, m_) {
    do {
        m_ = k_ + l_;
        k_ = l_;
        l_ = m_;
        console.log(m_);
    } while(l_ <= a_)
}
fibonachchi(a, k, l, m);