const body = document.querySelector("body");
const container = document.querySelector(".container");
const colorText = document.querySelector(".color-text");
const values = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

// random color function
function getGradient() {
    let color = "#";
    for(let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length);
        // console.log(randomNumber);
        color += values[randomNumber];
    }
        // console.log(color);
    return color;
}
// getGradient();

// set color to body
function setGradient() {
    const color1 = getGradient();
    const color2 = getGradient();
    const randomDeg = Math.trunc(Math.random() * 361);
    const bgColor = `linear-gradient(
        ${randomDeg}deg,
        ${color1},
        ${color2}
    )`
    // console.log(bgColor);
    body.style.backgroundImage = bgColor;
    colorText.textContent = bgColor;
}

setGradient();

container.addEventListener("click", setGradient);