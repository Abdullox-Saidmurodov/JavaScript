const user = {
    name: "Ahror",
    age: 24,
    email: "akhrorteacher@gmail.com",
    location: "Farg'ona",
    langs: ["uzbek", "russian", "english"],
    login: function () {
        console.log("Siz bu saytdagi sahijangizga kirdingiz.");
    },
    logout: function () {
        console.log("Siz bu saytdagi sahijangizni tark etdingiz.");
    },
    speak: function () {
        console.log(this);
        // console.log("I can speak: ")
        // this.langs.forEach((lang) => {
        //     console.log(lang);
        // })
    },
    speak1: () => {
        console.log(this);
        // console.log("I can speak: ")
        // this.langs.forEach((lang) => {
        //     console.log(lang);
        // })
    },
}


// console.log(this);

// window.alert(";lkfdjsa");
// this.alert(";lkajs;lkaf");
user.speak();
user.speak1();
console.log(this);