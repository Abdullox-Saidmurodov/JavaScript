// 1-mashq

// let ism = prompt("Ismingizni kiriting: ");
// let yosh = +prompt("Yoshingizni kiriting: ");

// alert(`Tug'ilgan yil: ${2023 - yosh}, Yashagan oy: ${yosh * 12}, 
// Hafta: ${yosh * 12 * 4}, Kun: ${yosh * 365}, Soat: ${yosh * 365 * 24}, 
// Daqiqa: ${yosh * 365 * 24 * 60}, Sekund: ${yosh * 365 * 24 * 60 * 60}`);

// console.log(2.46432.toFixed(2));

// 2-mashq

const ism = prompt("Ism kiriting: ");

const ismlar = ["Ahror", "Sardor", "Doniyor"];

if(ismlar.includes(ism)) {
    alert(`Ha ${ism} bor`);
} else {
    alert(`Yoq ${ism} yo'q`);
}