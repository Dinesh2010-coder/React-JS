document.getElementById('jokes').addEventListener('click', () =>{
    let url = "https://official-joke-api.appspot.com/random_joke"
    fetch(url).then((v) => v.json()
    ).then((v) => {
        document.getElementById('setup').textContent = "Setup: "+v.setup;
        document.getElementById('punchline').textContent = "Punchline: "+v.punchline;
    }).catch(error => {
        console.log("Error: ", error);
    })
})