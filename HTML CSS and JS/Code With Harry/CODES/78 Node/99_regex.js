const regex = /very/g; // This line means that replace very globally.
const text = 'Harry is a very very nice boy'
// console.log(text.replace("very", "VERY"));
console.log(text.replace(regex, "VERY"));

// regexr.com