// let options = {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     },
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// const createTodo = async() => {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }
    
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json();
//     return response;
// }

// const mainFunc = async () => {
//     let todo = await createTodo();
//     console.log(todo);
// }

const createTodo = async(todo) => {
    let options = {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json',
        },
    }
    
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    let r = await response.json();
    return r;
}

const mainFunc = async () => {
    let todo = {
        title: 'foo',
        body: 'boo',
        userId: 1100,
    }
    let todoR = await createTodo(todo);
    console.log(todoR);
    console.log(await getTodo(101));
}

mainFunc();