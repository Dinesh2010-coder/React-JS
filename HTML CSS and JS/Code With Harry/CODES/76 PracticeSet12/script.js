// Q1
// const a = async(text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 2000)
//     })
// }

// (
//     async () => {
//     let text = await a("Hello");
//     console.log(text);
//     text = await a("World");
//     console.log(text);
// }
// )()


// Q2
function sum(x,y,z) {
    return x+y+z
}

let x = [1,2,4]
console.log(sum(...x));

// Q3
const a = async(text, n=2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text);
        }, 1000 * n);
    });
}

(
    async () => {
    let text = await a("Resolving after 1 second", 1);
    console.log(text);
    text = await a("Resolving after 4 second", 4);
    console.log(text);
}
)()


// Q4
function simpleInterest(p,r,t){
    return p*r*t/100;
}

console.log(simpleInterest(100,50,2))