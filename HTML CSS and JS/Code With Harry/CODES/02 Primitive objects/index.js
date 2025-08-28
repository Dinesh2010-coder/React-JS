// nn ss bb u  -- > Primitives data types in JS
let a = 454
let b = null
let c = "dinesh"
let d = Symbol("This is a symbol")
let e = true  
let f = BigInt("565")
let g = undefined    // can also be written as let g

console.log(a, b, c, d, e, f, g)
console.log(typeof b)
let h = BigInt("456") + BigInt("97")
console.log(a, b, c, d, e, f, g, h) 


// Non Primitive Data Types   --->   Objects in JS
const item = {
  "Dinesh" :  true,
  "Chirag" : false,
  "Nikhil" : undefined,
  "Shivam" : 45
}

console.log(item["Shivam"])
console.log(item["jkfjkfhjk"])
