// const getTodos = (callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         // console.log(request, request.responseText);
//         if(request.readyState === 4 && request.status === 200) {
//             callback();
//         } else if(request.readyState === 4) {
//             console.log("Ma'lumotni olishning iloji bo'lmadi");
//             callback();
//         }
//     });

//     request.open("GET", "https:jsonplaceholder.typicode.com/todos/");
//     request.send();
// }

// getTodos(() => {
//     console.log("callback function ishga tushdi! ")
// });



const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.responseText);
        if(request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        } else if(request.readyState === 4) {
            console.log("Ma'lumotni olishning iloji bo'lmadi");
            callback("Ma'lumotni olishni iloji bo'lmadi", undefined);
        }
    });

    request.open("GET", "https:jsonplaceholder.typicode.com/todos/");
    request.send();
}

// getTodos((err, data) => {
//     // console.log(err, data);
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

console.log("1");
console.log("2");

getTodos((err, data) => {
    console.log("callback function ishga tushdi! ")
    if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
});

console.log("3");
console.log("4");