// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds");
//         resolve(56);
//     }, 2000);
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("Promise 2");
//         }, 2000);
//     })
//     return p2;
// }).then((value)=>{
//     console.log("We are done")
//     return 2;    
// }).then((value)=>{
//     console.log("We are pakka done");
// })


const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve(1)
        };
        script.onerror = () => {
            reject(0)
        }
    });
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
// let p1 = loadScript("https://cdn.jsdefdlivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
p1.then((value) => { 
    console.log(value); 
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js");
}).then((value) => {
    console.log("Second script loaded");
}).catch((error) => { 
    console.log("Error occured"); 
})