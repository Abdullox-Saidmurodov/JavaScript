// // const getTodos = (resurse, callback) => {
// //     const request = new XMLHttpRequest();

// //     request.addEventListener("readystatechange", () => {
// //         // console.log(request, request.responseText);
// //         if(request.readyState === 4 && request.status === 200) {
// //             const data = JSON.parse(request.responseText);
// //             callback(undefined, data);
// //         } else if(request.readyState === 4) {
// //             console.log("Ma'lumotni olishning iloji bo'lmadi");
// //             callback("Ma'lumotni olishni iloji bo'lmadi", undefined);
// //         }
// //     });

// //     request.open("GET", resurse);
// //     request.send();
// // }

// // getTodos("./ahror.json" ,(err, data) => {
// //     console.log(data);
// //     getTodos("./doniyor.json" ,(err, data) => {
// //         console.log(data);
// //         getTodos("./sardor.json" ,(err, data) => {
// //             console.log(data);
// //         });
// //     });
// // });

// // promise

// // const internet = true;

// // const getData = () => {
// //     return "Hello Promise";
// // }

// // console.log(getData());

// const internet = false;

// const getData = () => {
//     return new Promise((resolve, reject) =>{

//         // serverga so'rov jo'natamiz

//         if(internet) {
//             resolve("Some data");
//         } else {
//             reject("Some error");
//         }
//     })
// }

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


//////////////////////////////////////////////////////////////


const getTodos = (resurse) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            // console.log(request, request.responseText);
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                // console.log("Ma'lumotni olishning iloji bo'lmadi");
                reject("Ma'lumotni olishni iloji bo'lmadi");
            }
        });

        request.open("GET", resurse);
        request.send();
    })
}

getTodos("./ahror.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// getTodos("./ahror.json" ,(err, data) => {
//     console.log(data);
//     getTodos("./doniyor.json" ,(err, data) => {
//         console.log(data);
//         getTodos("./sardor.json" ,(err, data) => {
//             console.log(data);
//         });
//     });
// });

// promise

// const internet = true;

// const getData = () => {
//     return "Hello Promise";
// }

// console.log(getData());
//////////////////////////////////////////
// const internet = false;

// const getData = () => {
//     return new Promise((resolve, reject) =>{

//         // serverga so'rov jo'natamiz

//         if(internet) {
//             resolve("Some data");
//         } else {
//             reject("Some error");
//         }
//     })
// }

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });