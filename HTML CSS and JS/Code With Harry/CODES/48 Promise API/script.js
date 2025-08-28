let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1");
        // reject(new Error("Error")) // used for promise.allSettled
    // }, 10000);
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2");
        // reject(new Error("Error")) // used for promise.allSettled
    }, 2000);
})      

let p3 = new Promise((resolve, reject) => {      
    setTimeout(() => {
        resolve("Value 3");
    }, 3000);
})

// p1.then((val) => {
//     console.log(val);
// })
// p2.then((val) => {
//     console.log(val);
// })
// p3.then((val) => {
//     console.log(val);
// })

// let promise_all = Promise.all([p1, p2, p3]); // Promise.all will not work if any of the promises is rejected
// let promise_all = Promise.allSettled([p1, p2, p3]); // Promise.allSettled will resolve our problem
// let promise_all = Promise.race([p1, p2, p3]); // It will give the value of the promise that resolves/rejects first
// let promise_all = Promise.any([p1, p2, p3]); // It will give the value of the promise that resolves first i.e. it will ignore the rejected promise
// let promise_all = Promise.resolve(6); // It will resolve the promise with the value 6
let promise_all = Promise.reject(new Error("Hey")); // It will reject the promise with the error "Hey"
promise_all.then((values) => {
    console.log(values);
})