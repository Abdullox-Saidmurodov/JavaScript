// function

// function add() {
//     alert("Hello");
//     for(let i = 0; i < 100; i++) {
//         console.log(i);
//     }
//     console.log("Samardand");
//     console.log("Toshkent");
//     console.log("Buxoro");
//     console.log("Xorazm");
//     console.log("Andijon");
//     console.log("Namangan");
//     console.log("Farg'ona");
//     console.log("Jizzax");
// }

// add();
// console.log("Function1");
// add();
// console.log("Function2");
// add();
// console.log("Function3");
// add();
// console.log("Function4");
// add();
// console.log("Function5");

// function add() {
//     let a = 12;
//     let b = 14;
//     console.log(a + b);
// }

// add();
// add();
// add();
// add();
// add();
// add();
// add();


// function add(a, b) {
//     console.log(a + b);
// }

// add(3, 5);
// console.log("-------------------------------------------");
// add(9, 6);
// console.log("-------------------------------------------");
// add(8, 3);
// console.log("-------------------------------------------");

// function add(a, b) {
//     console.log(a + b);
// }
// add(3, 7);

// function minus(a, b) {
//     console.log(a - b);
// }
// minus(3, 7);

// function kupaytiruv(a, b) {
//     console.log(a * b);
// }
// kupaytiruv(3, 7);

// function buluv(a, b) {
//     console.log(a / b);
// }
// buluv(3, 7);

// =================================

// replace() metodidagi katta-kichik harflar bilan bo'gliq muammoni hal qilish uchun doimiy ifodalar 
// (regular expressions) /i bayroqchasidan foydalaniladi. Bu bayroqchadagi i harfi ingliz tlidagi "insensitive" 
// so'zidan olingan bo'lib o'zbek tilida "beparvo", "ahamiyat bermaydigan" degan ma'nolarni anglatadi.

// Namuna:

// var m = "Uzbekiston poytaxti Toshkent";
// var natija = m.replace(/UZBEKISTAN/i, "O'zbekiston");
// console.log(natija);​
// Natija:

// "O'zbekiston poytaxti Toshkent"

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// Barcha o'xshash iboralarni almashtirish uchun \g bayroqchasidan foydalaniladi.

// Namuna:

// var m = "Fargana viloyatining markazi Fergana shahri";
// var natija = m.replace(/Fergana/g, "Farg'ona");
// console.log(natija);
// ​Natija:

// Farg'ona viloyatining markazi Farg'ona shahri

// ==========================================

// function add(a, b) {
//     console.log(a + b);
// }

// function minus(a, b) {
//     console.log(a - b);
// }

// function kupaytiruv(a, b) {
//     console.log(a * b);
// }

// function buluv(a, b) {
//     console.log(a / b);
// }
// let aa = +prompt("1-sonni kiriting: ")
// let bb = +prompt("2-sonni kiriting: ")
// let amal = prompt("Amalni kitriting: ")
// if(amal == "+") add(aa, bb);
// else if(amal == "-") minus(aa, bb);
// else if(amal == "*") kupaytiruv(aa, bb);
// else if(amal == "/") buluv(aa, bb);

// =============================================================
// + operatoridan tashqari JavaScript dasturlash tilida concat() metodi mavjud bo'lib bu metod yordamida 
// ikki va undan ortiq matnli o'zgaruvchilarni konkatenatsiya qilish mumkin.

// Namuna:

// var m1 = "Salom";
// var m2 = "Bolalar";
// var natija = m1.concat(" ", m2);
// console.log(natija);​
// Natija:

// "Salom Bolalar"

//////////////////////////////////////////////////////////////////

// trim() metodi matnning boshi va oxiridagi keraksiz bo'sh joylarni olib tashlab yangi matnni qaytaradi.

// Namuna:

// var m = "    Salom, JavaScript! ";
// var natija = m.trim();
// console.log(natija);
// ​Natija:
// "Salom, JavaScript"

//////////////////////////////////////////////////////////////////

// charAt() metodi berilgan pozitsiyadagi belgini qaytaradi.

// Namuna:

// var m = "Salom Bolalar";
// var natija = m.charAt(1);
// console.log(natija);​
// Natija:
// 'a'

//////////////////////////////////////////////////////////////////

// charCodeAt() metodi matnning berilgan pozitsiyasidagi belgiga mos keladigan UTF-16 kodini qaytaradi 
// (0 va 65535 oralig'idagi natural son)

// Namuna:

// var m = "Salom JavaScript";
// var natija = m.charCodeAt(1);
// console.log(natija);​
// Natija:

// 97

// =============================================================


// // 1-:
// function foydalanuvchi(ism_, yosh_) {
//     alert(`${ism_}, siz ${2023 - yosh_}-yil tug'ilgansiz.`);
// }

// let ism = prompt("Ismingizni kiriting: ");
// let yosh = +prompt("Yoshingizni kiriting: ");
// foydalanuvchi(ism, yosh);

// // 2-:
// function foydalanuvchi(son_) {
//     alert(`Sonning kvadrati: ${son_**2}, sonning kubi: ${son_**3} sonlariga teng.`);
// }

// let son = +prompt("Son kiriting: ");
// foydalanuvchi(son);

// // 3-:
// function foydalanuvchi(son_) {
//     if(son_ % 2 == 0) alert(`Juft son.`);
//     else if(son_ % 2 != 0) alert(`Toq son.`);
// }

// let son = +prompt("Son kiriting: ");
// foydalanuvchi(son);

// // 4-:
// function foydalanuvchi(son1_, son2_) {
//     if(son1_ > son2_) alert(son1_);
//     else if(son1_ < son2_) alert(son2_);
//     else  alert(`Sonlar teng`);
// }

// let son1 = +prompt("1-soni kiriting: ");
// let son2 = +prompt("2-soni kiriting: ");
// foydalanuvchi(son1, son2);

// // 5-:
// function foydalanuvchi(son1_, son2_) {
//     alert(son1_**son2_);
// }

// let son1 = +prompt("1-soni kiriting: ");
// foydalanuvchi(son1, 2);

// 6-:
function foydalanuvchi(son1_) {
    for(let i = 2; i <= 10; i++){
        if(son1_ % i == 0)
        console.log(`${son1_} soni ${i} soniga bo'linadi`);
        else
        console.log(`${son1_} soni ${i} soniga bo'linmaydi`);
    }
}

let son1 = +prompt("1-soni kiriting: ");
foydalanuvchi(son1);