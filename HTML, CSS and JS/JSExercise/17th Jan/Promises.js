let msg = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Hello, World!")
    },2000)
});

async function display() {
    try{
        const message = await msg;
        console.log(message);
    }catch (error){
        console.error(error);
    }
}

display();