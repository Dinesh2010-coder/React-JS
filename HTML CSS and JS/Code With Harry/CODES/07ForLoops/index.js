/*

// for loop

let sum = 0
let n = prompt("n : ")
n = Number.parseInt(n)

for(let i=1;i<=n;i++){
  sum+=i
}

console.log(sum)
*/


let obj = {
  dinesh:90,
  chirag: 89,
  mittali : 86,
  kapoor : 84
}

// for in loop

for(let a in obj){
  console.log("Marks of "+a+" are "+obj[a])
}

// for of loop

for(let b of "Dinesh"){
  console.log(b)
}