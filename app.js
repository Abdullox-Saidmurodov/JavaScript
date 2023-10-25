const signupForm = document.querySelector("#signup-form");
// const username = document.querySelector("#username");
const message = document.querySelector(".message");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const regEx = /^[a-zA-Z0-9]{6,12}$/;
    const inputVal = signupForm.username.value;

    if(regEx.test(inputVal)) {
        message.textContent = "Ma'lumot to'g'ri kiritildi ";
    } else {
        message.textContent = "Kiritilayotgan ma'lumot 6tadan 12tagacha belgidan iborat bo'lishi, shuningdek, Katta va kichik lotin alifbosi harflaridan yoki raqamlardan foydalanilishi kerak.";
    }
});

// const ism = "Ahror19980704";
// const ism = "Ahror1998";

// const regEx = /^[a-zA-Z0-9]{6,12}$/;

// const result = regEx.test(ism);

// console.log(result);

// const result = ism.search(regEx);

// console.log(result);