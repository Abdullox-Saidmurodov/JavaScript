// javascript destructuring

// const mevalar = ["olma", "gilos", "uzum", "nok"];
// const [olma, uzum, gilos, nok] = ["olma", "gilos", "uzum", "nok"];
// const [olma, uzum, ...boshqalar] = ["olma", "gilos", "uzum", "nok"]; // ... - bu rest operatori

// const olma = mevalar[0];
// const gilos = mevalar[1];
// const uzum = mevalar[2];
// const nok = mevalar[3];

// console.log(olma, uzum, gilos, nok);
// console.log(olma, uzum, gilos, nok);
// console.log(olma, uzum, boshqalar);

// const personObj = {
//     name: "Ahror",
//     age: 24,
//     job: "developer"
// }

// const {name, age, job: kasb, from = "Uzbekistan"} = {
//     name: "Ahror",
//     age: 24,
//     job: "developer",
//     from: "Korea"
// }

// console.log(name, age, kasb, from);

// const {name, age, job: kasb, from = "Uzbekistan"} = {
//     name: "Ahror",
//     age: 24,
//     job: "developer"
// }

// console.log(name, age, kasb, from);

const {name, age, ...boshqalar} = {
    name: "Ahror",
    age: 24,
    job: "developer",
    from: "Korea"
}

console.log(name, age, boshqalar);