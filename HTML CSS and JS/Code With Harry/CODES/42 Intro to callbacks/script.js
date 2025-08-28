// Synchronous Programming 
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has "  + c + " as favorite color.");

// Asynchronous Programming
// console.log("Start");
// setTimeout(() => {
//     console.log("We are in the timeout");
// }, 3000);

// console.log("End");

// Callbacks
function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
        console.log("Script loaded with src: " + src);
        // callback(src);
        callback(null, src); // In case of error, pass null
    };
    script.onerror = () => {
        console.log("Script not loaded with src: " + src);
        callback(new Error("Could not load script with src: " + src));
    }
    document.body.appendChild(script);
}

// // function without error handling
// function hello(src) {
//     alert("Hello World" + src);
// }

// // function with error handling
function hello(error, src) {
    if(error){
        console.log("Error: " + error);
        return;
    }
    alert("Hello World" + src);
}

// // function with error handling
// function bye(error, src) {
//     if(error){
//         console.log("Error: " + error);
//         return;
//     }
//     alert("Goodbye" + src);
// }


// // function without error handling
// function bye(src) {
//     alert("Goodbye" + src);
// }

// loadScript("https://cdn.jsdessdlivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)  // Script with error
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)