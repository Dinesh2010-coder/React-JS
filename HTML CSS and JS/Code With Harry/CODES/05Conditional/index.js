let a = prompt("Age: ")
console.log(typeof a)
a = Number.parseInt(a)
console.log(typeof a)

if(a<0){
  alert("This is an invalid age")
}
else if(a<9){
  alert("You are a kid")
}
else{
  alert("This is a valid age")
}

console.log("You can", (a<18 ? "not drive" : "drive"))