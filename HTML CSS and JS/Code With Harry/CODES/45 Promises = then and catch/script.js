let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("Promise is fulfilled");
        resolve(true);
    }, 3000);
});

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("Promise is rejected");
        reject(new Error("I am an error"));
    }, 3000);
});

// To get the result
p1.then((result) => {
    console.log(result);
})

// To catch the error
// p2.catch((error) => {
//     console.log("We got some error in p2");
// })
p2.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("We got some error in p2");
})
console.log(p1, p2);