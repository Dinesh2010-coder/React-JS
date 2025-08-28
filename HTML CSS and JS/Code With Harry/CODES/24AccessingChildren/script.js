console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes) // It will not return array it will return nodelist
let arr = Array.from(document.body.childNodes)
console.log(arr)