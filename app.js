const formCreate = document.getElementById("form-create");
const formEdit = document.getElementById("form-edit");
const listGroupTodo = document.getElementById("list-group-todo");
// const messageCreate = document.getElementById("message-create");
const time = document.getElementById("time");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

// time elements
const fullDay = document.getElementById("full-day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const closeEl = document.getElementById("close");

let editItemId;

// check
let todos = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [];
// console.log(todos);

if(todos.length) showTodos();

// console.log(todos);

// setTodos to localstorage
function setTodos() {
    localStorage.setItem("list", JSON.stringify(todos));
}

// time
function getTime() {
    const now = new Date();
    // console.log(now);
    const date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
    const month = (now.getMonth() + 1) < 10 ? "0" + (now.getMonth() + 1) : (now.getMonth() + 1);
    const year = now.getFullYear();
    const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
    const minute = now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
    const second = now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();

    // console.log(`${hour}:${minute}, ${date}.${month}.${year}`);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const month_title = now.getMonth();
    fullDay.textContent = `${date} ${months[month_title]}, ${year}`;

    hourEl.textContent = hour;
    minuteEl.textContent = minute;
    secondEl.textContent = second;

    return `${hour}:${minute}, ${date}.${month}.${year}`;
}
// getTime();
setInterval(getTime, 1000);

// show todos
function showTodos() {
    const todos = JSON.parse(localStorage.getItem("list"));
    listGroupTodo.innerHTML = "";
    todos.forEach((item, i) => {
        listGroupTodo.innerHTML += `
            <li ondblclick="setCompleted(${i})" class="list-group-item d-flex justify-content-between ${item.completed == true ? "completed" : ""}">
                ${item.text}
                <div class="todo-icons">
                    <span class="opacity-50 me-2">${item.time}</span>
                    <img onclick=(editTodo(${i})) src="./edit.svg" alt="edit icon" width="25" height="25">
                    <img onclick=(deleteTodo(${i})) src="./delete.svg" alt="delete icon" width="25" height="25">
                </div>
            </li>
        `
    });
}

// show error
function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message;

    setTimeout(() => {
        document.getElementById(`${where}`).textContent = "";
    }, 2500);
}

{/* <li class="list-group-item d-flex justify-content-between">
    Hello ...
    <div class="todo-icons">
        <span class="opacity-50 me-2">14.07.2022</span>
        <img src="./edit.svg" alt="edit icon" width="25" height="25">
        <img src="./delete.svg" alt="edit icon" width="25" height="25">
    </div>
</li> */}

// get Todos
formCreate.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const todoText = formCreate["input-create"].value.trim();
    formCreate.reset();
    // console.log(todoText);

    if(todoText.length) {
        // console.log(todoText);
        todos.push({text: todoText, time: /*"19:49, 14.07.2022"*/ getTime(), completed: false});
        // console.log(todos);
        setTodos();
        showTodos();
    } else {
        // messageCreate.textContent = "Please, enter some text...";
        // setTimeout(() => {
        //     messageCreate.textContent = "";
        // }, 2500);
        showMessage("message-create", "Please, Enter some text...");
    }
});

// delete todo
function deleteTodo(id) {
    // console.log(id);
    const deletedTodos = todos.filter((item, i) => {
        return i !== id;
    })

    // console.log(deletedTodos);
    todos = deletedTodos;
    setTodos();
    showTodos();
};

// setCompleted
function setCompleted(id) {

    const completedTodos = todos.map((item, i) => {
        if(id == i) {
            return { ...item, completed: item.completed == true ? false : true };
        } else {
            return { ...item };
        }
    });

    todos = completedTodos;
    setTodos();
    showTodos();
};

// edit Forms
formEdit.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = formEdit["input-edit"].value.trim();
    formEdit.reset();

    if(todoText.length) {
        todos.splice(editItemId, 1, {text: todoText, time: getTime(), completed: false});
        setTodos();
        showTodos();
        close();
    } else {
        showMessage("message-edit", "Please, Enter some text...");
    }
})

// edit Todo
function editTodo(id) {
    // console.log(id);
    open();
    editItemId = id;
}

overlay.addEventListener("click", close);
closeEl.addEventListener("click", close);

document.addEventListener("keydown", (e) => {
    // console.log(e);
    if(e.which == 27) {
        close();
    }
})

function open() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};
function close() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};