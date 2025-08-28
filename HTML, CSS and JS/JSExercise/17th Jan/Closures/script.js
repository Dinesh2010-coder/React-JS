function myfunc(){
    let count = 0;
    return function(){
        count++;
        console.log(`Count: ${count}`);
    }
}

const num = myfunc();
document.getElementById("btn").addEventListener('click', num);