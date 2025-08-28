alert("Hello")
let a = prompt("Value : ")
alert(typeof(a))
a = Number.parseInt(a)
alert(typeof(a))

let write = confirm("Do you want to write it on page?")
if(write){
document.write(a)
}
else{
  document.write("Please allow")
}