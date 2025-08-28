// Q1

// let response = fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
// // let response = fetch(url);
// response.then((v) => {
//     return v.json()
// }).then((v) => {
//     // console.log(v)
//     for (const item in v) {
//         console.log(v[item]);
//     }
// })


// Q3 
let n = localStorage.getItem("note");
alert("Your note is: "+n);

// Q2
let a = prompt("Enter your note: ");
if(a){
localStorage.setItem("note", a);
}


// Q4
let b = confirm("Delete Note?");
if (b) {
    localStorage.removeItem("note");
    alert("Deleted successfully");
}