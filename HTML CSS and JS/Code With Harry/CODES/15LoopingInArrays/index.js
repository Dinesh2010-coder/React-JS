let num = [1,2,3,4,5]
// for each loop
num.forEach((element) => {
  console.log(element * element)
})

// Arrays.from
let name = "Dinesh"
let arr = Array.from(name)
console.log(arr)

// for of  --->  returns elements of array
for (let i of num){
  console.log(i)
}


// for in  --->  returns indices of elements of array
for (let item in num){
  console.log(item)
}