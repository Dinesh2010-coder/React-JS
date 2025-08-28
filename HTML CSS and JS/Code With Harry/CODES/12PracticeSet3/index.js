// Q1
console.log("har\"".length)

// Q2
const sentence = "The quick brown fox jumps over lazy dog"
const word = "fox"

console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`)
console.log(sentence.startsWith('The'))
console.log(sentence.endsWith('dog'))

// Q3
let var1 = "Dinesh"
console.log(var1.toLowerCase())


// Q4
let var2 = "Please give Rs 1000"
console.log(var2.slice("Please give Rs ".length))
console.log(var2.slice(15))
console.log(Number.parseInt(var2.slice(15)))


// Q5
// strings cannot be changed as strings are immutable
console.log(var1.replace("s", "h"))