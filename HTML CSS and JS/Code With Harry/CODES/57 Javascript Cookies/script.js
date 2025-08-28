console.log(document.cookie);
document.cookie = 'name = dinesh1122334455';
document.cookie = 'name2 = dinesh112233445522';

let key = prompt("enter your key: ");
let value = prompt("enter your value: ");
// document.cookie = `${key} = ${value}`;  // this will not take semicolon in input in both key and value. So, for solving this we will be using encodeURIComponent which will make key and values accept semicolon as input
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);



// decodeURIComponent("a%3B%3B") // it will print a;; as it will decode a%3B%3B
