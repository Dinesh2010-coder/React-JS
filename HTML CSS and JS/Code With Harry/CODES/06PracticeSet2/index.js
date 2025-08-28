// Q1
/*
let age = prompt("Age:")
if(age>10 && age<20){
  console.log("True")
}
else{
  console.log("False")
}
*/
// Q2 --> Switch statement

let age = prompt("Age:")
age = Number.parseInt(age)
switch(age){
  case 12:
    console.log("Age = ",12)
    break
  case 13:
    console.log("Age = ",13)
    break
  case 14:
    console.log("Age = ",14)
    break
  case 15:
    console.log("Age = ",15)
    break
  case 16:
    console.log("Age = ",16)
    break
  default:
    console.log("Not special")
}

// Q3

let num = prompt("What is your age")
num = Number.parseInt(num)

if(num%2 ===0 && num%3 === 0){
  console.log("Yes")
}else{
  console.log("No")
}


// Q4

let val = prompt("What is your age")
val = Number.parseInt(val)

if(val%2 ===0 || val%3 === 0){
  console.log("Yes")
}else{
  console.log("No")
}

// Q5

let a = age>18 ? "You can drive" : "You can't drive"
console.log(a)