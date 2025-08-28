function play(){
    // var audio = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
    // audio.play()
    console.log("Alarm")
}

setInterval(() => {
    let d = new Date()
    time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000)

const setAlarm = (seconds)=>{
    setTimeout(() => {
        play();
    }, seconds*1000)
}

let s = prompt("After how many minutes you want an alarm?");
setAlarm(parseInt(s));