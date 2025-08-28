document.write("Hello")

const sum = (a,b,c) => {
    console.log("Yes I am running "+(a+b+c));
    a+b+c
}

setTimeout(sum,1000,1,2,7)

let i = setInterval( () => {
    console.log("Set Interval")
}, 5000)

clearInterval(i)
// let a = setTimeout(function(){
//     alert("Inside set timeout")
// }, 5000)

// let b = prompt("Do you want to run the set timeout?")
// if(b=="n"){
//     clearTimeout(a)
// }
// console.log(a);