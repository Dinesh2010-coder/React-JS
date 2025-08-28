// Q1
class Complex{
    constructor (real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }

    add(num){
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }

    get real(){
        return this._real;
    }

    get imaginary(){
        return this._imaginary;
    }

    set real(newReal){
        this._real = newReal;
    }

    set imaginary(newImaginary){
        this._imaginary = newImaginary;
    }
}


let a = new Complex(2,3)
a.real = 10;
a.imaginary = 10;
let b = new Complex(6,8)

// Q2
a.add(b);
// console.log(a.real, a.imaginary);
console.log(`${a.real}+${a.imaginary}i`);


// Q3
class Human{
    walk(){
        console.log("Human is walking");
    }
}

class Student extends Human{
    walk(){
        console.log("Student is walking")
    }
}

let e = new Human()
e.walk()
let d = new Student()
d.walk()


// Q4
console.log(d instanceof Human);