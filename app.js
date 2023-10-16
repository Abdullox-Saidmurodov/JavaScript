// Ko'p ishlatiladigan string metodlari

let email = "akhrorweb@gmail.com";

// lastIndexOf()
console.log(email.lastIndexOf("a"));

// indexOf()
console.log(email.indexOf("a"));

// slice()
console.log(email.slice(0, 1));

// substr()
console.log(email.substr(4, 10));

// replace()
console.log(email.replace("a", "d"));

// charAt()
console.log(email.charAt(4));

// toApperCase()...toLowerCase()
console.log(email.toUpperCase());

// trim() probellarni(ya'ni bo'sh joylarni) yo'qotadi
console.log(email.trim());

// split()
console.log(email.split());
console.log(email.split(""));

console.log(`;alkjsdf ${email}, ${5+9}`);

console.log(email.includes("@"));

console.log(typeof email);  // o'zgaruvchi turini aniqlash

let natija = "100";
natija = Number(natija);
console.log(natija + 1);