let promise = new Promise((resolve, reject) => {
    console.log("Hello");
    resolve(56);
})
console.log("Hello One")
setTimeout(() => {
    console.log("Hello in 2 seconds");
}, 2000);

console.log("My name is: " + "John Doe");
console.log(promise)

// We use promise to run things parallelly.
// eg:
// Fetch google.com homepage ==> console.log("google.com done")
// Fetch data from an API 
// Fetch pictures from the server
// Print downloading
// Rest of the script

// So now all the above tasks can be done parallelly using promises. 