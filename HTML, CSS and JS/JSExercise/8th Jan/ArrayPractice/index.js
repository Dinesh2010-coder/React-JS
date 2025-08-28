/*
// push
let arr = [1,2,3];
arr.push(4);
console.log(arr);
arr.push(5,6);
console.log(arr);
*/


/*
// pop
let arr = [1,2,3,4,5,6];
arr.pop();
console.log(arr);
*/

/*
// shift
let arr = [0,1,2,3,4,5,6,7];
arr.shift();
console.log(arr);
*/

/*
// unshift 
let arr = [2,3,4,5,6];
arr.unshift(1);
console.log(arr);
*/

/*
// splice
let arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.slice(1,5));
*/

/*
// splice
let arr = [1,2,3,4,5,6,7,8];
arr.splice(2,1,'a', 'b');
console.log(arr);
*/

/*
// map
let arr = [1,2,3,4,5,6,7]
let mappedArr = arr.map(i => i*2);
console.log(mappedArr);
*/

/*
// filter
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(arr.filter(x => x%2 == 0))
*/

/*
// reduce
let arr = [1,2,3,4,5,6,7,8];
console.log(arr.reduce((a,b) => {return a+b})) 
*/

/*
// toString
let arr = [1,2,3,4,5,6,7,8];
let a = arr.toString();
console.log(a, typeof a)
*/

/*
// join
let arr = [1,2,3,4,5,6,7,8];
let a = arr.join(" ");
console.log(a, typeof a)
*/

/*
// concat
let num1 = [1,2,3,4,5,6,7,8,9]
let num2 = [11,12,13,14,15,16,17,18,19]
let num3 = [211,212,213,214,215,216,217,218,219]
let newArr = num1.concat(num2)
let newArr1 = num1.concat(num2, num3)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(newArr)
console.log(newArr1)
*/

/*
// sort
let arr = [56,78,121,45,31,12,2123,789]
arr.sort()
console.log(arr)
*/

/*
// sort in ascending order
let compare = (a,b) => {
  return a-b
}
let arr = [56,78,121,45,31,12,2123,789]
arr.sort(compare)
console.log(arr)
*/

/*
// sort in descending order
let compare = (a,b) => {
  return b-a
}
let arr = [56,78,121,45,31,12,2123,789]
arr.sort(compare)
console.log(arr)
*/

/*
// reverse array
let arr = [56,78,121,45,31,12,2123,789]
arr.reverse()
console.log(arr)
*/


let input = prompt("Enter a list of numbers separated by commas: ");
let numArr = input.split(',').map(Number);
console.log(numArr);