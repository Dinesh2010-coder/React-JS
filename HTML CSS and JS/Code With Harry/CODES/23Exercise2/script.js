let user = prompt("S,W or G")
let comp = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][comp]

const match = (cpu, user) => {
    if (cpu === user) {
        return "Draw";
    }

    else if((user === "G" && cpu === "S") || (user === "S" && cpu === "W") || (user === "W" && cpu === "G")){
        return "You Win";
    }
    
    else{
        return "You Lose";
    }
}

let result = match(cpu,user)
document.write(`CPU: ${cpu} <br> User: ${user} <br> ${result}`)