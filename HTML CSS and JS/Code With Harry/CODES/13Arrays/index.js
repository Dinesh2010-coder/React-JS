let arr = [1,2,3,4,5,null, false, "Dinesh"]
console.log(arr)
console.log(arr[0])
console.log(arr[8])
console.log(arr.length)
arr[8] = "Khemka"
console.log(arr)
console.log(arr[8])
arr[2] = 10
console.log(arr)
console.log(typeof arr)

for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
