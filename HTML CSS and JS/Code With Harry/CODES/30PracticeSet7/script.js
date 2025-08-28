// Q1
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "blue"

// Q2
// No it doesn't add on view page source 

// Q3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Q4
Array.from(document.getElementsByTagName("li")).forEach((element) => {
    element.style.background = "cyan"
})

// Q5
// None of these as there is no method which tells us about the farthest ancestor

