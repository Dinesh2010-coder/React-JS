submit.addEventListener("click", (e) => {
    e.preventDefault();
    let title1 =  title.value;
    let desc1 = desc.value;
    localStorage.setItem("todo", JSON.stringify([title1, desc1]));
    // console.log("Success");
    todos.innerHTML = `
    <h1>${title1}</h1>
    <p>${desc1}</p>
    `

    title.value = "";
    desc.value = "";
})

deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("todo");
    todos.innerHTML = ``;
})