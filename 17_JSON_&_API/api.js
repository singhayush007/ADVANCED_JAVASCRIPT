// API in JavaScript

// API Stands for Application Programming Interface.

// Application Programming Interface , is a set of rules and protocols that allows different software applications to communicate and interact with each other.




/* 
async function fetchData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(await response.json());
} 
*/



let jagah = "Delhi";

async function fetchData() {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f0a8bb594db94d9484472235252006&q=${jagah}&aqi=yes`);
    console.log(await response.json());
}


fetchData();
