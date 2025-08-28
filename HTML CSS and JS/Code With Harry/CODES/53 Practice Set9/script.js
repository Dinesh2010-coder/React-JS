// It is for Q1 and Q2
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             resolve(src);
//         }
//         document.head.append(script);
//     });
// }

// Q1
// let a = loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js');
// a.then((res) => {
//     console.log(res);
// })

// Q2
// const run = async () => {
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.js');
//     console.log(new Date().getMilliseconds());
//     console.log(a)
// }

// run()


// Q3
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('Not Accepted');
//         }, 2000);
//     })
// }

// let a = async () => {
//     try {
//         let res = await p();
//         console.log(res);
//     } catch (e) {
//         console.log(e);
//     }
// }
// a()



// Q4
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}

const run = async () => {
    console.time('run');
    // let a = await p1(); // Fetch first 10 products from the database
    // let b = await p2(); // Fetch next 10 products from the database
    // let c = await p3(); // Fetch next 10 products from the database
    // console.log(a, b, c);

    let a = p1(); // Fetch first 10 products from the database
    let b = p2(); // Fetch next 10 products from the database
    let c = p3(); // Fetch next 10 products from the database
    let res = await Promise.all([a, b, c]);
    console.log(res);
    console.timeEnd('run');
}

run()