try {
    let age = prompt('Enter your age');
    age = Number.parseInt(age);
    if (age>150) {
        throw new ReferenceError('This is not a valid age');
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log('This is a message after the try catch block');


// try {
//     console.log(dinesh);
//     throw new Error('This is a custom error');
//     // throw new ReferenceError('This is a reference error');
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// try {
//     dinesh
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }