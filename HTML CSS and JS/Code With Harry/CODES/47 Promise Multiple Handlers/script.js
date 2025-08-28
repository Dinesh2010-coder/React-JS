let p1 = new Promise((resolve, reject) => {
    console.log("Hey I am not resolved");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
p1.then(()=>{
    console.log("Hurray");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        }, 6000);
    })
}).then((val) => {console.log(val);})

p1.then(()=>{
    console.log("Congarts this promise is now resolved");
})


// In this promise in line 16 and promise in line 8 are working parallely.