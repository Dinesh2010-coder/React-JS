let a = {
    name1:"Dinesh",
    language:"JS"
};

console.log(a);

let p = {
    run: () =>{
        alert("run")
    }
}

p.__proto__ = {
    name:"Khemka"
}

a.__proto__ = p;
a.run();
console.log(a.name);
