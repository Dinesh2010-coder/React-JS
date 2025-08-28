// Q1
let arr = [1,2,3,4,5]
// let a = prompt("No : ")
// let var1 = Number.parseInt(a);

// arr.push(var1)
// console.log(arr)

// Q2
// while(true){
  // let b = prompt()
  // let var2 = Number.parseInt(b)

  // if(var2 == 0){
  //   arr.push(var2)
  //   break
  // }

  // arr.push(var2)
// }

// console.log(arr)

// Q3
let arr1 = [5,78,10,100,20,98]
let ans = arr1.filter((c)=>{
  return c%10
})
console.log(ans)
console.log(arr1)

// Q4
let arr2 = [1,2,3,4,5]
/*
for(let i =0;i<arr2.length;i++){
  arr2[i] *= arr2[i]
}
console.log(arr2)
*/
let x = arr2.map((i)=>{
  return i*i
})
console.log(x)

// Q5

let y = arr2.reduce((x1,x2)=>{
  return x1*x2
})
console.log(y)