// Callback is a higher order function which takes another function as an arguemnt.

// Callback help us deal with task that take time , like loading data from a server, without other code from running.

// Example: 1
/*
function hod(name, callback) {
  callback(name);
}

function printName(name) {
  console.log("Hello", name);
}

hod("Ayush Singh", printName);
*/

/*
// Example: 2
function calculate(a , b, callback){
    callback(a , b);
}

function addition(a , b){
    console.log(a + b);
}

function substract(a , b){
    console.log(a - b);
}

function multiply(a , b){
    console.log(a * b);
}

calculate (5 , 3, addition);
calculate(5 , 3, substract);
calculate(5 , 5, multiply);
*/

// Example: 3 Async Example

/*
console.log("1. Fetching Data...");

function fetchData(processData) {
  setTimeout(() => {
    console.log("2. Data Fetch is Done...");
    processData();
  }, 3000);
}

function processData(){
    console.log('3. Processing with data...')
}
fetchData(processData);

console.log('4. Some other Task');

*/

// Example 4: Async Example:
/*
function getData(data, callback) {
  setTimeout(() => {
    console.log(data);
    if (callback) {
      callback();
    }
  }, 3000);
}

function func() {}
console.log("Fetching First Data....");
getData("1st Data");
getData("2nd Data");
getData("3rd Data");

getData("1st data", () => {
  console.log("Fetching 2nd Data");
  getData("2nd Data", () => {
    getData("3rd data", () => {
      getData("4th Data");
    });
  });
});
*/

// Real World Scenario of Callback
// Note:- Never try to understand 🙂, if you want to live long

// function getUsers(callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             const users = JSON.parse(xhr.responseText);
//             callback(null, users);
//         } else {
//             callback(`Error: ${xhr.status}`);
//         }
//     };

//     xhr.onerror = function () {
//         callback('Network error');
//     };

//     xhr.send();
// }

// CallBack Hell : Callback hell happens when you have many nested callbacks - one inside another - ususally in asynchronous code.


/*
console.log("start");

setTimeout(() => {
  console.log("1. Gettign user from database...");

  setTimeout(() => {
    console.log("2. Getting user's orders...");

    setTimeout(() => {
      console.log("3. Processing Payment...");

      setTimeout(() => {
        console.log("4. Sending confirmation email...");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

