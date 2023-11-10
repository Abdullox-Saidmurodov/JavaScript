// // objects
// let name = "Ali",
// let familiya = "Aliyev",
// let age = 18,
// let kasbi = "student",
// let student = {
//     name: "Ali",
//     familiya: "Aliyev",
//     age: 18,
//     kasbi: "student",
// };
// let player = {
//     name: "Uzbeksila",
//     level: 97,
// };
// let car = {
//     name: "BMW",
//     model: "x7",
//     year: "2022",
//     color: "black",
//     spead: "400km",
// };
// let student = {
//     name: "Ali",
//     familiya: "Aliyev",
//     age: 19,
//     kurs: 2,
//     fanlar: ["Algebra", "Chet tili"],
//     otasi: {
//         name: "Zarif",
//         familiya: "Aliyev",
//     },
//     onasi: {
//         name: "Zarina",
//         familiya: "Aliyeva",
//     },
// };
// console.log(student.name);
// console.log(student.familiya);
// console.log(student.age);
// console.log(student.kurs);
// console.log(student.fanlar[0]);
// console.log(student["fanlar"][0]);
// console.log(student.otasi.name);
// console.log(student.otasi.familiya);
// console.log(student.onasi.name);
// console.log(student.onasi.familiya);
// console.log(student);

// let student = {
//     name: "Zilola",
//     familiya: "Aliyev",
//     age: 19,
//     kurs: 2,
//     fanlar: ["Algebra", "Chet tili"],
//     otasi: {
//         name: "Zarif",
//         familiya: "Aliyev",
//     },
//     onasi: {
//         name: "Zarina",
//         familiya: "Aliyeva",
//     },
//     married: false,
// };
// console.log(student);
// student.familiya = "Valiyeva";
// student.age = 20;
// student.kurs = 3;
// student.married = true;
// console.log(student);
// student.kasbi = "uy bekasi";
// console.log(student);

// let calculator = {
//     title: "calc 2023 ultra 5G",
//     color: "gold",
//     batary: "5000",
//     hi: function () {
//         console.log("Hello Dasturchilar")
//     },
//     add: function (a, b) {
//         console.log(a + b);
//     },
//     addddd: function (a, b) {
//         console.log(a + b);
//     },
// }
// calculator.add(2, 3);
// calculator.hi();
// calculator.kupaytiruv = function (a, b) {console.log(a * b)};
// calculator.kupaytiruv(2, 3);
// calculator.ayiruv = function (a, b) {console.log(a - b)};
// calculator.ayiruv(2, 3);
// calculator.buluv = function buluv (a, b) {console.log(a / b)};
// calculator.buluv(2, 3);
// console.log(calculator.buluv);
// console.log(calculator);

// let retsept = {
//     title: "lksadjf",
//     servings: 6,
//     ingredients: {
//         mahsulot_1: "go'sht",
//         mahsulot_2: "piyoz",
//         mahsulot_3: "yog'",
//         mahsulot_4: "kl;asj",
//     },
// };
// console.log(retsept);

// let book = {
//     title: "erfvcio",
//     author: "wioefnvc",
//     read: false,
// }
// console.log(book);

// //////////////////////////////////////
// var str = "JavaScript va boshqa dasturlash tillarini o'rganmoqchimisiz? Unda Codeuz.uz saytiga kiring!"; 

// var n = str.search(/dasturlash/i);console.log(n);
// ////////////////////////////////////////

let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];
let myAlphabetLength = function () {
    console.log(myAlphabet.length);
}
myAlphabetLength();
let if_conditional = function () {
    if(myAlphabet.length > 4) console.log(true);
    else console.log(false);
}
if_conditional();