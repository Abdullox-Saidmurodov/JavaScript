// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         // console.log(request, request.responseText);
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             console.log("Ma'lumotni olishning iloji bo'lmadi");
//             callback("Ma'lumotni olishni iloji bo'lmadi", undefined);
//         }
//     });

//     request.open("GET", "https:jsonplaceholder.typicode.com/todos/");
//     request.send();
// }

// getTodos((err, data) => {
//     console.log("callback function ishga tushdi! ")
//     if(err) {
//             console.log(err);
//         } else {
//             console.log(data);
//         }
// });

const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.responseText);
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if(request.readyState === 4) {
            console.log("Ma'lumotni olishning iloji bo'lmadi");
            callback("Ma'lumotni olishni iloji bo'lmadi", undefined);
        }
    });

    request.open("GET", "./todos.json");
    request.send();
}

getTodos((err, data) => {
    console.log("callback function ishga tushdi! ")
    if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
});