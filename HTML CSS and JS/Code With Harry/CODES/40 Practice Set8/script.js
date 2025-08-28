/*
// Q3
document.getElementById("google").addEventListener("click", function () {
    window.location.href = "https://www.google.com";
    // let url = "https://www.google.com/search?q=javascript";
    // let win = window.open(url, "", "width=1000,height=800,scrollbars=yes,resizable=yes");
    // win.focus();
});
document.getElementById("linkedin").addEventListener("click", function () {
    // window.location.href = "https://www.linkedin.com";
    let url = "https://www.linkedin.com/";
    let win = window.open(url, "", "width=1000,height=800,scrollbars=yes,resizable=yes");
    win.focus();
});
*/
/*
// Q4
const fetchContent = async (url) => {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

setInterval(async () => {
    let url = "https://api.quotable.io/random";
    console.log(await fetchContent(url));
}, 3000)
*/

// Q5
setInterval(async function () {
    document.querySelector('#bulb').classList.toggle('light');
}, 1000);