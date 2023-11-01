const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if(request.readyState === 4) {
        console.log(request.responseText);
    }
});

// open
request.open("GET", "https:jsonplaceholder.typicode.com/todos/");

// send
request.send();

// 1 open tayyor
// 2 send qilindi
// 3 loading... yuklanyapti
// 4 ma'lumot keldi