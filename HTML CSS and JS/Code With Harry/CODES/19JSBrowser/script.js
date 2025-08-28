console.log(console)
console.info("info")
console.warn("warn")
console.error("err")

console.time("p1");
console.timeEnd("p1");

// console.time can be used to compare time taken between for loop and while loop

console.time("For loop")
for (let i = 0; i < 5; i++) {
    console.log(12);
}
console.timeEnd("For loop")


console.time("while loop")
let i=0;
while (i<5) {
    console.log(12)
       i++;
}
console.timeEnd("while loop")
/*
console.log(5>0)
  true
  undefined

// console.assert
console.assert(5>53)
  Error: Assertion failed:  console.asserthttps://348bca11-3a17-4474-af50-175a00145b06.id.repl.co/__replco/static/devtools/devtools.js:74
  undefined
console.assert(5<53)
  undefined
console.clear()

// console.table
obj = {a: 1, b: 2, c: 3}
console.table(obj)
(index)	Value
a	1
b	2
c	3
undefined


*/

