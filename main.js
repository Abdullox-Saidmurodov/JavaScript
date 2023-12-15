// function getDate() {
//     let date = new Date();
//     let time = date.toLocaleTimeString();
//     console.log(time);
// }
// getDate();

// // setTimeout(getDate, 5000);
// // setInterval(getDate, 2000);

// let student1 = {
//     ism: "Ali",
//     familiya: "Aliyev",
//     age: 23,
//     getInfo: function () {
//         console.log(`Mening ismim: ${this.ism}`);
//     }
// };

// function aStudent(ism, familiya, age) {
//     this.ism = ism;
//     this.familiya = familiya;
//     this.age = age;
// }

// let student = new aStudent("Ali", "Aliyev", 23);
// console.log(student);


// class

// class Student {
//     constructor(ism, familiya, yosh) {
//         this.name = ism;
//         this.surname = familiya;
//         this.age = yosh;
//     }
// }
// let student = new Student("a;lk", "kldsja", 23);
// console.log(student);

// class Student {
//     constructor(ism, familiya, yosh) {
//         this.name = ism;
//         this.surname = familiya;
//         this.age = yosh;
//     }
//     getInfo = function () {
//         return "Salom";
//     }
//     time = function () {
//         return new Date();
//     }
//     sayHello = function () {
//         return "Hello";
//     }
//     sayGoodMorning = function () {
//         return "Good Morning";
//     }
//     sayGoodbye = function () {
//         return "Good Bye";
//     }
// }
// let student = new Student();
// console.log(student.time());

class User {
    constructor(ism, foydalanuvchi_ismi, email) {
        this.name = ism;
        this.user_name = foydalanuvchi_ismi;
        this.email = email;
    }
    getInfo = () => {
        return `Foydalanuvchi ismi: ${this.name}`;
    }
}
let l = new User("lskjf", "klsj;f", "@kjd;f.fjlksja");
console.log(l.getInfo());