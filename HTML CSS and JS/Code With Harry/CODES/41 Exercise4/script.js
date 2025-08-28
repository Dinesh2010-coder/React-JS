

// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();

// document.write(h,":",m,":",s);

setInterval(() => {
    let a = new Date()
    time.innerHTML = `<b style = "font-size: 20px; color:blue">${a.toLocaleString()}</b>`;
}, 1000)