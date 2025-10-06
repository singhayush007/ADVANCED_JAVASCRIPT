// Async Await : Async / Await helps you write asynchronous code in a cleaner and more readable way - almost like it's synchronous.

async function getData() {
  try {
    const response = await fetch("https:// api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
// Code Outside the async function continues immediately.

// Code inside the async function pauses at await.

// Async: Makes a function always return a Promise.

// Await: Pause inside an 'async' function until the promise is resolved.

