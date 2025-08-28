
let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "blue"

let cid = document.getElementById("card-id")
cid.style.color = "orange"

let ctitles = document.querySelectorAll(".card-text")
ctitles[0].style.color = "grey"
ctitles[1].style.color = "brown"
ctitles[2].style.color = "green"

document.querySelector(".last").style.color = "purple"

console.log(document.getElementsByTagName("a"))
console.log(document.body.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))