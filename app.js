const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// add classlist hidden
const addHidden = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

// remove classlidt hidden
const removeHidden = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}


// showBtn.addEventListener("click", () => {
    // modal.classList.remove("hidden");
    // overlay.classList.remove("hidden");
// });

// showBtn.addEventListener("click", () => {
//     removeHidden();
// });

showBtn.addEventListener("click", removeHidden);



// closeBtn.addEventListener("click", () => {
//     addHidden();
// });
closeBtn.addEventListener("click", addHidden);

// overlay.addEventListener("click", () => {
//     addHidden();
// });
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
    // console.log(e);
    if(e.key == "Escape") {
        // console.log("You ara clicked escape");
        addHidden();
    }
});