const signupForm = document.querySelector("#signup-form");
// const username = document.querySelector("#username");
const message = document.querySelector(".message");
const regEx = /^[a-zA-Z0-9]{6,12}$/;

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = signupForm.username.value;

    if(regEx.test(inputVal)) {
        message.textContent = "Ma'lumot to'g'ri kiritildi ";
    } else {
        message.textContent = "Kiritilayotgan ma'lumot 6tadan 12tagacha belgidan iborat bo'lishi, shuningdek, Katta va kichik lotin alifbosi harflaridan yoki raqamlardan foydalanilishi kerak.";
    }
});

// Live feedback
signupForm.username.addEventListener("keyup", (e) => {
    // console.log(e.target.value)//, signupForm.username.value);
    if(regEx.test(e.target.value)) {
        signupForm.username.setAttribute("class", "success");
    } else {
        signupForm.username.setAttribute("class", "error");
    }
});