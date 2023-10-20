// loop

// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");
// console.log("Salom");

// for(let i = 0; i < 10; i++) {
//     console.log("Salom");
// }

// for(let i = 10; i <= 50; i++) {
//     console.log(i);
// }

// let x = 0.2 + 0.1;
// console.log(x);

// for(let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// // JavaScripdagi raqamli o'zgarmaslar  oldidan ​0x​ kelsa ular 16 lik sanoq sistemasida deb qaraladi.
// var x = 0xFF; // 255
// console.log(x); 

// // JavaScriptdagi raqamli tiplar standart holatda 10 lik sanoq sistemasida deb qaraladi.
// // toString() metodi yordamida sonlarni ikkilik sanoq sistemasidan tortib 36 lik sanoq 
// // sistemasigacha yozish mumkin bo'ladi.
// var x = 35;
// console.log(x.toString(2)); // 2 lik sanoq sistemasida
// console.log(x.toString(4)); // 4 lik sanoq sistemasida
// console.log(x.toString(8)); // 8 lik sanoq sistemasida
// console.log(x.toString(16)); // 16 lik sanoq sistemasida
// console.log(x.toString(32)); // 32 lik sanoq sistemasida​

// for(let i = 0; i <= 100; i+=2) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i+=2) {
//     console.log(i);
// }

// for(let i = 1; i <= 100; i++) {
//     if(i % 2 == 0)
//     console.log(i + "juft");
//     else
//     console.log(i + "toq");
// }

// let a = 0;
// for(let i = 1; i <= 100; i+=2) {
//         a += i;
//     }
// console.log(a);

// // Raqam, matn va mantiqiy tipli o'zgaruvchilarni obyektlar sifatida 
// // e'lon qilishda new kalit so'zidan foydalanish mumkin.
// var x = new String(); // x obyekt sifatida e'lon qilindi
// var y = new Number(); // y obyekt sifatida e'lon qilindi​
// var z = new Boolean(); // z obyekt sifatida e'lon qilindi​

// let a = 1;
// for(let i = 1; i < 10; i++) {
//         a *= i;
//     }
// console.log(a);


// Hodisa	Vazifa
// onchange	HTML element o'zgargansa
// onclick	    Foydalanuvchi HTML element ustiga sichqonchani bossa
// onmouseover	Foydalanuvchi HTML element ustiga sichqonchani olib kirsa
// onmouseout	Foydalanuvchi HTML element ustidan sichqonchani olib chiqib ketsa
// onkeydown	Foydalanuvchi klaviaturadan bironta tugmani bossa
// onload	    Brauzer web sahifani to'liq yuklab bo'lsa

// let k = 5;
// let n = 4;
// for(let i = 0; i < n; i++) {
//     if(n > 0)
//     console.log(k);
// }

// let a = 17;
// let b = 5;
// let c = 0;

// a--;
// if(a > b){
//     for(let i = a; a > b; a--) {
//         console.log(a);
//         c++;
//     }
// }
// console.log(`Chiqarilgan sonlar soni ${c}`);

// let a = 10;

// if(a > 0){
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${i} kg konfet: ${a * i}`);
//     }
// }

// let a = 10;

// for(let i = 1; i <= 10; i++) {
//     console.log(`${i / 10} kg konfet: ${a * i / 10}`);
// }

// let a = 10;

// for(let i = 10; i <= 20; i += 2) {
//     console.log(`${i / 10} kg konfet: ${a * i / 10}`);
// }

// let a = 10;
// let b = 20;
// let c = 0;

// for(a; a <= b; a++) {
//     c += a;
// }
// console.log(c);

// let a = 10;
// let b = 20;
// let c = 1;

// for(a; a <= b; a++) {
//     c *= a;
// }
// console.log(c);

// let a = 10;
// let b = 20;
// let c = 0;

// for(a; a <= b; a++) {
//     c += (a ** 2);
// }
// console.log(c);

let n = 10;
let s = 0;
for(let i = 1; i <= n; i++) {
    s += (1 / i);
}
console.log(s);