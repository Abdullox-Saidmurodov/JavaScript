// let father = {
//     ism: 'Ali',
//     familiya: 'Aliyev',
//     yosh: '35',
//     manzil: 'Samarqand shahar Amir Temur kucha, 28 uy',
//     phone: '+99',
//     getInfo: function () {
//         console.log('')
//         console.log(`Otamning ismi ${this.ism}, familiyasi ${this.familiya}, yoshi ${this.yosh}, yashash manzili ${this.manzil}, telefon raqami ${this.phone}.`)
//     },
// }
// father.getInfo()

// let dust1 = {
//     ism: 'Nodir',
//     familiya: 'Hakimov',
//     yosh: '33',
//     manzil: 'Toyloq tuman, 28 kucha, 6 uy',
//     phone: '+99',
//     getInfo: function () {
//         console.log('')
//         console.log(`Dustimning ismi ${this.ism}, familiyasi ${this.familiya}, yoshi ${this.yosh}, yashash manzili ${this.manzil}, telefon raqami ${this.phone}.`)
//     },
// }
// dust1.getInfo()

// let dust2 = {
//     ism: 'Hoshim',
//     familiya: 'Narzillayev',
//     yosh: '24',
//     manzil: 'Qushrobod tuman, 6 kucha, 9 uy',
//     phone: '+99',
//     getInfo: function () {
//         console.log('')
//         console.log(`Ikkinchi do'stimning ismi ${this.ism}, familiyasi ${this.familiya}, yoshi ${this.yosh}, yashash manzili ${this.manzil}, telefon raqami ${this.phone}.`)
//     },
// }
// dust2.getInfo()

// let oshna = {
//     ism: 'Ahmad',
//     familiya: 'Baxodirov',
//     yosh: '35',
//     manzil: 'Samarqand shahar, kucha,  uy',
//     phone: '+99',
//     getInfo: function () {
//         console.log('')
//         console.log(`Oshnamning ismi ${this.ism}, familiyasi ${this.familiya}, yoshi ${this.yosh}, yashash manzili ${this.manzil}, telefon raqami ${this.phone}.`)
//     },
// }
// oshna.getInfo()

// let oilataom = {
//     akam: 'lkjfds',
//     ukam: 'djfoiwe',
//     opam: 'lkjdfsio',
//     singlim: 'ewojn',
//     otam: 'oefnw',
//     onam: 'iuhnfj',
//     getAkam () {
//         console.log(`Akamning yaxshi kurgan taomi ${this.akam},`)
//     },
//     getUkam () {
//         console.log(`Ukamning yaxshi kurgan taomi ${this.ukam},`)
//     },
//     getSinglim () {
//         console.log(`Singlimning yaxshi kurgan taomi ${this.singlim},`)
//     },
//     getOpam () {
//         console.log(`Opamning yaxshi kurgan taomi ${this.opam},`)
//     },
//     getOtam () {
//         console.log(`Otamning yaxshi kurgan taomi ${this.otam},`)
//     },
//     getOnam () {
//         console.log(`Onamning yaxshi kurgan taomi ${this.onam}.`)
//     }
// }

// oilataom.getAkam()
// oilataom.getUkam()
// oilataom.getOpam()
// oilataom.getSinglim()
// oilataom.getOtam()
// oilataom.getOnam()

// let java = {
//     if: 'Shart berish',
//     for: 'Sikl operatori',
//     switch: 'Shart operatori birxil takrorlanuvchi elementlar uchun',
//     while: 'Sikl operatori',
//     dowhile: "So'ng shart sikl operatori",
//     let: "O'zgaruvchi e'lon qilish uchun kalit so'z",
//     var: "O'zgaruvchi e'lon qilish uchun kalit so'z eskirgan usul",
//     function: "Funksiya e'lon qilish uchun kalit so'z",
//     typeof: "O'zgaruvchining turini aniqlaydi",
//     length: "Massivning uzunligini aniqlaydi"
// }

// let key = prompt("Kalit so'z kiriting: ")
// // alert(java[key])

// // if(key == `if`) alert(java.if)
// // else if(key == `for`) alert(java.for)
// // else if(key == `switch`) alert(java.switch)
// // else if(key == `while`) alert(java.while)
// // else if(key == `dowhile`) alert(java.dowhile)
// // else if(key == `let`) alert(java.let)
// // else if(key == `var`) alert(java.var)
// // else if(key == `function`) alert(java.function)
// // else if(key == `typeof`) alert(java.typeof)
// // else if(key == `length`) alert(java.length)

// let java = {
//     1: '(if)Shart berish',
//     2: '(for)Sikl operatori',
//     3: '(switch)Shart operatori birxil takrorlanuvchi elementlar uchun',
//     4: '(while)Sikl operatori',
//     5: "(dowhile)So'ng shart sikl operatori",
//     6: "(let)O'zgaruvchi e'lon qilish uchun kalit so'z",
//     7: "(var)O'zgaruvchi e'lon qilish uchun kalit so'z eskirgan usul",
//     8: "(function)Funksiya e'lon qilish uchun kalit so'z",
//     9: "(typeof)O'zgaruvchining turini aniqlaydi",
//     10: "(length)Massivning uzunligini aniqlaydi"
// }

let java = {
    if: 'Shart berish',
    for: 'Sikl operatori',
    switch: 'Shart operatori birxil takrorlanuvchi elementlar uchun',
    while: 'Sikl operatori',
    dowhile: "So'ng shart sikl operatori",
    let: "O'zgaruvchi e'lon qilish uchun kalit so'z",
    var: "O'zgaruvchi e'lon qilish uchun kalit so'z eskirgan usul",
    function: "Funksiya e'lon qilish uchun kalit so'z",
    typeof: "O'zgaruvchining turini aniqlaydi",
    length: "Massivning uzunligini aniqlaydi"
}

let key = prompt("Kalit so'z kiriting: ")
let a = Object.keys(java)
// console.log(a)

for(let i = 0; i < 10; i++) {
    if(key == a[i]) {
        alert(java[a[i]])
        console.log(java[a[i]])
    }
}