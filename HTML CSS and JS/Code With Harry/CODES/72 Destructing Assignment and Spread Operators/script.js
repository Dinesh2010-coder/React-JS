// let arr = [3,4]
// let arr = [3,4,5]

// let arr = [3,4,45,6,7,8,9,12,44,45]
// No need to do this
// let a = arr[0]
// let b = arr[1]

// Instead use this. It is destructing
// let [a,b] = arr;

// spread operator
// let [a,b,c , ...rest] = arr;
// console.log(a, b,c,rest);

// let [a, , , ...rest] = arr;
// console.log(a,rest);

// let {a,b} = {a:1, b:2}
// console.log(a, b);


// SPREAD OPERATOR
let arr1 = [1,3,5]
let obj1 = {...arr1}
console.log(obj1);

function sum(v1,v2,v3) {
    return v1+v2+v3;    
}

console.log(sum(...arr1));

let obj2 = {
    name : "Harry",
    company: "XYZ Company",
    address: "XYZ"
}

console.log({...obj2, name : "Dinesh"});
// console.log({name : "Dinesh", ...obj2}); // This will not change values
