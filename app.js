// forEach

const ismlar = ["ahror", "sardor", "doniyor", "farxod"];
const newIsmlar = [];

// ismlar.forEach(function (ism) {
//     console.log(ism);
// })

// ismlar.forEach(function (ism) {
//     const newIsm = ism.charAt().toUpperCase() + ism.slice(1) + "bek";
//     console.log(newIsm);
// })

ismlar.forEach(function (ism) {
    const newIsm = ism.charAt().toUpperCase() + ism.slice(1) + "bek";
    newIsmlar.push(newIsm);
})

console.log(newIsmlar);