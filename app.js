const getTodos = (resurse, callback) => {
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

    request.open("GET", resurse);
    request.send();
}

getTodos("./ahror.json" ,(err, data) => {
    console.log(data);
    getTodos("./doniyor.json" ,(err, data) => {
        console.log(data);
        getTodos("./sardor.json" ,(err, data) => {
            console.log(data);
        });
    });
});