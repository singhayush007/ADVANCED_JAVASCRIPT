// All Indian mothers are by default Asynchronous in nature beacuse they perform multiple task.

// Javascript is by default Synchronous in nature.

// Javascript is Single Threaded Language so it is by default Synchronous in nature but we can make it Asynchronous in nature too.

// SYNCHRONOUS:
/*
Synchronous code runs line by line . Each operation must complete before the next one starts.
*/

// ASYNCHRONOUS
/* 
Asynchronous code can start a task and move on without waiting for it to finish.

Asynchronous code execution allows to execute next instructions (code) immediately and doesn't block the flow.
*/

/*
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
console.log("Task 5");
*/

// Synchronous Task:
/*
console.log("Kapde Dhul gye")
console.log("Shower Le lia");

for(let i = 1; i <=400000; i++){
    console.log("Task" , i)
}

console.log("Pooja kar lia");
console.log("Brekafast bna dia");
console.log("Breakfast kar lia");
*/

// Asynchronous Task:
/*
console.log("First Task")
setTimeout(()=>{
    console.log("Async Task")
}, 4000);


console.log("Second Task");
console.log("Third Task");
console.log("Fourth Task");
*/

// SetTimeout Asynchronous Behaviour
/*
setTimeout(()=>{
    console.log("Kapde Dhul Gye")
}, 4000)

setTimeout(()=>{
    console.log("Shower Le lia")
}, 5000)

setTimeout(()=>{
    console.log("Breakfast Kar lia")
}, 2000)
*/

/*
console.log("Hey Gus, Do you want Coffee");
console.log("Ayush Serve Coffee");

for(let i = 1; i<=400000; i++){
    console.log("person" , i)
}

console.log("Coding Seekhna hai");
*/

/*
console.log("Hey Gus, Do you want Coffee");
console.log("Ayush Serve Coffee");

setTimeout(() => {
  for (let i = 1; i <= 400000; i++) {
    console.log("person", i);
  }
}, 1000);

console.log("Coding Seekhna hai");
*/


// Why do we get a promise instead of data?

/*
let data = fetch ("https://jsonplaceholder.typicode.com/users");
console.log(data);
*/

// You get a promise - not the real data - because the data isn't ready yet.

/* 
API Class are Asynchronous:

Fetching data takes time (maybe 500ms , 2s or more).

JavaScript dosen't want to stop everything and wait (it's single threaded).

So instead , it gives you a promise, Saying.

"I'll give you the data later , once it arrives."

*/



/*
let data = fetch ("https://jsonplaceholder.typicode.com/users");
console.log(data);

console.log("Hello");
console.log("Some Inportant Task");
*/



/*
async function fetchData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await response.json())
}

fetchData();

console.log("hello");
console.log("Some Important task");
*/





/*
Callbacks ---> Callback Hell ---> Promise ---> Promise Chaining --> Async/Await.
*/

