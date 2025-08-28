// A closure is the combination of a function bundled together(enclosed) with its references to its
//  surrounding state(the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function.

/*
msg = "Good global"
// function hello1(){
//     // msg = "Good Morning"
//     console.log("Hello: " + msg)
// }

function hello1() {
    let msg = "Good Morning"
    {
        let msg = "Good Afternoon"
        console.log(msg)
    }
    // console.log(msg)
    let c = function hello2() {
        console.log("I am c " + msg)
    }
    return c;
}

c = hello1();
c();
// hello1()

*/



function returnFunc() {
    const x = () => {
        let a = 1;
        console.log(a);
        const y = () => {
            let a = 2;
            console.log(a);
            const z = () => {
                let a = 3;
                console.log(a);
            }
            z()
        }
        y()
    }
    return x;
}

let a = returnFunc()
a()