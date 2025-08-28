let number = Math.floor(Math.random()*100)
console.log(number)
let count = 0;
while(true){
let val = prompt("Enter your guess : ")
let guess = Number.parseInt(val)

if(guess > number){
  console.log("Number is less than ",guess)
  count++
}else if(guess < number){
  console.log("Number is greater than ",guess)
  count++
}else{
  count++
  break
}
}
console.log(number)
let score = 100-count;
console.log("Your score is ", score)