async function getWeather() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 Deg")
        }, 2000)
    })

    let mumbaiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("32 Deg")
        }, 5000)
    })

    // delhiWeather.then(alert);
    // mumbaiWeather.then(alert);

    console.log("Fetching Delhi Weather Please Wait");
    let delhi = await delhiWeather;
    console.log("Delhi Weather is: " + delhi);

    console.log("Fetching Mumbai Weather Please Wait");
    let mumbai = await mumbaiWeather;
    console.log("Mumbai Weather is: " + mumbai);

    return [delhi, mumbai]

}

const cherry = async () => {
    console.log("Cherry")
}

const dinesh = async () => {
    console.log("Welcome to Weather App")
    let a = await getWeather()
    let b = await cherry()
}
dinesh()

// console.log("Welcome to Weather App")
// let a = getWeather()
// let b = cherry()
// // console.log(a)
// a.then((data) => {
//     console.log(data)
// })




// async function dinesh() {  // async function always return a promise
//     return 5
// }

// dinesh.then((data) => {
//     console.log(data)
// })