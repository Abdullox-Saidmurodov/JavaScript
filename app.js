const API = "https://restcountries.com/v3.1/all";
// old => new XMLHttpRequest()
const getData = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener("readystatechange", () => {
            // console.log(request);
            if(request.readyState == 4 && request.status == 200) {
                const data = JSON.parse(request.responseText);
                // console.log(data);
                resolve(data);
            } else if(request.readyState == 4) {
                // console.log("Error !");
                reject("Error !");
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

// getData(API);

// getData(API)
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// fetch
fetch(API)
    .then((data) => {
        // console.log(data);
        return data.json();
    })
    .then((dataJson) => {
        console.log(dataJson);
    })
    .catch((err) => {
        console.log(err);
    });