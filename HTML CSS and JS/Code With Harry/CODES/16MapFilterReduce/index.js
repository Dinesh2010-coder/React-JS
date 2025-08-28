// MAP METHOD
let arr = [1,2,3,4,5]
let a = arr.map((value) => {
  // console.log(value)
  return value+1
})
// console.log(a)
let b = arr.map((value, index) => {
  // console.log(value, index)
  return value+1
})
// console.log(b)
let c = arr.map((value, index, array) => {
  // console.log(value, index, array)
  return value+1
})
// console.log(c)
// console.log(arr)


// FILTER
let arr2 = [4,5,6,78,12,32]
let a2 = arr2.filter((a) => {
  return a<10
})
// console.log(a2)
// console.log(arr2)


// REDUCE
let arr3 = [1,2,3,5,3,2,1]
let a3 = arr3.reduce((h1,h2)=>{
  return h1+h2    // it will return sum of array
})
console.log(a3)