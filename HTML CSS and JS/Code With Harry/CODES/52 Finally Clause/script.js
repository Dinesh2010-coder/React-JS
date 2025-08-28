const f = () => {
    try {
        let a = 0
        // console.log(program)
        console.log("Program ran successfully");
        return
    } catch (error) {
        console.log("This is an error");
        console.log(p)
    }
    finally {
        console.log("This is a finally block");
    }
}

f()
console.log("End")

// try {
//     let a = 0
//     // console.log(program)
//     console.log("Program ran successfully");
// } catch (error) {
//     console.log("This is an error");
//     console.log(p)
// }
// finally {
//     console.log("This is a finally block");
// }