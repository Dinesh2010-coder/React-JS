// var hello = () => console.log("Hello"); console.log("hi")
// hello()

// var hello = (name, greeting) => console.log(greeting + " " + name)
// hello("Dinesh", "Good Afternoon");

// var hello = name => console.log("Hello " + name)   // In case of single parameter we don't need to add paranthesis
// hello("Dinesh");


// const x = {
//     name: "Dinesh",
//     role: "Developer", 
//     exp: 3,
//     show: function(){
//         let that = this;
//         console.log(this);
//         setTimeout(function(){
//            // console.log(this)   // It will be printing window object.
//             console.log(`The name is ${that.name}.\nThe role is ${that.role}`);
//            // console.log(`The name is ${this.name}.\nThe role is ${this.role}`);  // It will give error as it doesn't fetches the value of this inside another function
//         },2000)
//     }
// }

const x = {
    name: "Dinesh",
    role: "Developer", 
    exp: 3,
    show: function(){
        setTimeout(()=>{
            console.log(`The name is ${this.name}.\nThe role is ${this.role}`);
        },2000)
    }
}

x.show();