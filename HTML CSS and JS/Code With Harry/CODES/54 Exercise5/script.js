let a = [
    "Initializing Hack tool",
    "Connecting to Instagram",
    "Connecting to Server 1",
    "Connection Failed. Retrying..",
    "Connecting to Server 2",
    "Connected Successfully.",
    "Username dinesh231",
    "200K passwords tried....",
    "Match not found",
    "Another 200K passwords tried....",
    "Match found",
    "Accessing Account",
    "Hacked Successfully"
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve(true)}, seconds*1000);
    })
}

const show = async (msg) => {
    await sleep(2);
    console.log(msg);
}

(async () => {
    for (let i = 0; i < a.length; i++) {
        await show(a[i]);
    }
})()