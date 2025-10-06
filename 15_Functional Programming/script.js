// FUNCTIONAL PROGRAMMING: Functional Programming is a progrmming paradigm where functions are first-class citizens , and the focus  is on pure functions , immutability and function composition rather than shared state and side effects.

// Example of Functional Programming:
/*
let arr = ["Lion" , "Tiger" , "Leopard" , "Hyena" , "Ant"]
function removeLastItem(arr){
  let newArr = arr.slice(0 , -1);
  // let newArr = arr.slice(0 , arr.length-1);
  return newArr;
}
console.log(arr);
let newArr = removeLastItem(arr);
console.log(newArr);
*/

/*
1: Pure Functions
2: Immutability
3: Declarative
4: Avoid Shared State
5: Avoid Side Effects
6: Reuse or Compose Logic
7: Don't iterate
8: Loose Coupling
9: First-Class and Higher Order Functions.
*/

/*
Imperative forEach v/s Declarative forEach
Imperative map v/s Declarative map
Imperative filter v/s Declarative filter
Imperative reduce v/s Declarative reduce
Imperative every v/s Declarative every
Imperative find v/s Declarative find
Sort.
*/

// Imperative Programming Example:

/*
let arr1 = [1,2,3,4,5,6,7,8,9,10];
let doubled=[];

for (let i=0 ; i <arr1.length; i++){
    doubled.push(arr1[i] *2)
}
console.log(doubled);
*/

// Declarative Programming Example :

/*
let arr2 = [1,2,3,4,5,6,7,8,9,10];
let double = arr2.map(function(elem){
    return (elem * 2 )
})

console.log(double);
*/

/*
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let dbl = arr3.map(elem=> elem*2)
console.log(dbl);
*/

// 1: Pure Functions:

/*
A function is pure if:
--> It returns the same output for the same input.
--> It doesn't cause side effects (like modifying external variables or DOM).
*/

// 1: Example of Pure Function:
/*
function sum(a, b) {
  return a + b;
}

let result = sum(1, 5);
console.log(result);
*/
// 2: Example of Pure Function:
/*
function add(a, b) {
  return a + b;
}
*/
// 1: Example of Impure Function:
/*
let total = 0;
function increment() {
  total++; // Shared State
}

increment();
*/
// 2: Example of Impure Function
/*
let count = 0;
function increment() {
  count++; // Modifies External State
}
*/

// 2: Immutability:
// Do not modify existing data , istead , return new copies.

// Mutable:
// 1 Example of Mutalbe :
/*
const user = {name : "Alice"};
user.age = 25; // Directly modifies original Object

let obj = {
  name : "Alex"
}

function replaceName(name){
    obj.name = "Alice";
}

console.log(obj);
replaceName('Alice');
console.log(obj);
*/
// Immuatble:

// const updateUser = {...user, age: 25};

// 3: Declarative Code :
// Describe what should be done, not how.

// Imperative Code: It says , step by step how to do it.
/*
let doubled = [];
for (let i = 0; i<SVGAnimatedNumberList.length; i++){
    doubled.push(numbers[i]*2);
}
*/
// Declarative Code: It says What you want.
/*
const numbers = [1,2,3,4];
const doubles = numbers.map(n=> n*2);
*/

// 4: Avoid Shared State:

// Share mutable state can lead to bugs, especially in async or parallel systems:

// Shared State (Bad)
/*
let total = 0;
function addTotal(n){
    total += n;
}
*/
// Avoid Shared State:
/*
function add(a , b){
    return a + b;
}
*/

// 5: Avoid Side Effect:

// Side Effect are anything a function does outside its scope (API Call , DOM update , modifying globl vars)

// Side Effect
/*
function logMessafe(msg){
    console.log(msg); // SIde Effect : Interacts with Console.
}
*/
// No Side Effect:
/*
function getGreeting(name){
    return `Helllo , ${name}`;
}
*/

// Example : No Side Effect Porgramming
/*
function capitalizeFirstLetter(str){
    let newStr = str.charAt(0).toUpperCase()+str.slice(1);
    return newStr;
}

let newStr = capitalizeFirstLetter("Ayush")
console.log(newStr);
*/
/*
--> Ye pure function hai, kyunki:
1: Same input "Ayush" hamesha same output "Ayush" deta hai.
2: Ye koi external cheez ko change nahi karta, sirf return karta hai.
*/

// 6: Reuse or Compose Logic:
// Build small reusable functions and compose them together:

// Example: 1
/*
const tolower = str => str.tolowerCase();
const removeSpaces = str=>str.replaceAll(' ', '');
const atTheRate = str => '@' + str;

let str = "Ayush Singh";
let result = atTheRate(removeSpaces(tolower(str)))
console.log(result);
*/

// Example: 2
/*
let name = "Ayush Singh";
function createUsername(str){
    console.log("@" + str.tolowerCase().replaceAll(" ", " "));
}
*/

// Example : 7
/*
let name = "Ayush Singh";
let toLower = (str) => str.toLowerCase();
let removeSpaces = (str) => str.replaceAll(" ", " ");
let addAtTheRate = (str) => "@" + str;

function createUserName(str) {
  return addAtTheRate(removeSpaces(toLower(str)));
}

let result = createUserName(name);;
console.log(result);
*/

// 7: Don't Iterate (Imperatively)
// Avoid  for , while , etc . Use Map , Filter , Reduce.

// Imperative Style:
/*
let evens = [];
for (let n of [1,2,3,4]){
    if(n % 2 === 0) evens.push(n);
}
*/
// FP (Declarative Style)
/*
const evens = [1,2,3,4].filter(n => n%2 === 0);
*/

// Example :
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  }
}

// let evenArr = arr.filter(arr=>{
//     return arr % 2 === 0;
// })

let evenArr = arr.filter((elem) => elem % 2 === 0);
console.log(even);
console.log(evenArr);
*/

// 8: Loose Coupling:
/*
Coupling refers to how dependent one piece of code is on another.
Loose Coupling means less dependent, keep functions and modules independent.
*/

// Example:

//Tightly Coupled:
/*
function getUserData() {
  return fetch("https://api.example.com/user").then((res) => res.json());
}
*/

// Loosely Coupled:
/*
function getData(api) {
  return fetch(api).then((res) => res.json());
}
*/

/*
function getUser(){
    fetch('https://api.example.com/user')
}

function getProducts(){
  fetch('https://www.example.com/product')
}

function getReviews(){
    fetch('https://www.example.com/reviews')
}
*/

// Example Loose Coupling:
/*
let endPoint = "https://www.example.com";

function getUser(endPoint) {
  fetch(`${endPoint}/user`);
}

function getProducts(endPoint) {
  fetch(`${endPoint}/getProducts`);
}

function getReviews(endPoint) {
  fetch(`${endPoint}/getReviews`);
}


getUser(endPoint );
getProducts(endPoint);
getReviews(endPoint);
*/

/*
function fetchData(endPoint , route){
    fetch(`${endPoint}/${route}`)
}


getUser(endPoint , user);
getProducts(endPoint , product);
getReviews(endPoint , reviews);
*/

// Example Notification System : 1 Loose Coupling :
/*
function sendEmail(user) {
  console.log("Email send to: ", user.email);
}

function sendSms(user) {
  console.log("Sms send to: ", user.phone);
}

function sendWpMsg(user) {
  console.log("MSG sned to: ", user.phone);
}

function sendWpMsg(user) {
  console.log("MSG send to WhatsApp to: ", user.phone);
}

let user = {
  name: "Ayush",
  email: "ayushsingh@gmail.com",
  phone: +123456789,
};

sendEmail(user)
sendSms(user)
sendWpMsg(user)

*/

/*
function sendMessage (msg, sendTo){
    console.log(`${msg} ${sendTo}`)
}

sendMessage("Eail send to:", user.email)
sendMessage("SMS send to:", user.phone)
sendMessage("WHATSAp send to:", user.phone)
*/

//Example Notification System 2: Loose Coupling

/*
function sendEmail(user) {
    console.log("Email send to: ", user.email)
}

function sendSms(user) {
    console.log("SMS send to: ", user.phone)
}

function sendWpMsg(user) {
    console.log("MSG send on Whatsap to: ", user.phone)
}


function sendMessage(user, notifyFn) {
    console.log("since You are authorized")
    notifyFn(user)
}

let user1 = {
    name: 'john',
    email: 'john@gmail.com',
    phone: 2343,
}
let user2 = {
    name: 'Alex',
    email: 'alex@gmail.com',
    phone: 26243663,
}

sendMessage(user1, sendEmail)
sendMessage(user2, sendSms)
*/

// 9: First Class Funciton and Higher order Function:

// First Class Function : Functions can be stored in variables, passed and returned.

// Higher Order Function: Function that takes another functions as an argument or return them.

// Example:

/*
const greet = () => "Hello";
const callWithName = fb => name => `${fn()} ${name}`;

const greetUser = callWithName(greet);
console.log(greetUser("Ayush Singh"));
*/

/*
NOTE :
--> All callbacks are first class functions , but not all first-class functions are callbacks.
--> All higher order functions are first class functions but not all first class functions are higher order functions.
*/

// Example:
/*
function greetHello() {
  return "Hello";
}

function greetNamaste() {
  return "Hello";
}

function greetWithName(fn, name) {
  return fn() + " " + name;
}

let result = greetWithName(greetHello, "Ayush Singh");

console.log(result);
*/

/*
function func() {
  console.log("func1");
}

function HOD(cf) {
  return cf;
}

let result = HOD(func);
result();
*/

// Imperative every v/s Declarative every
/*
let arr1 = [1,2,3,4,5,99,1000];

let result1 = arr1.every((elem)=>{
    return typeof elem === 'number'
})

console.log(result1)
*/

// Imperative find v/s Declarative find:

/*
let arr2 = [1,2,3,4,5,99,1000];

let result2 = arr2.find((elem)=>{
    return elem === 5
})

console.log(result2);
*/

/*

let arr = [1, 2, 3, 4, 99, 1000];

let logicFn = (elem) => {
  return elem % 2 === 0;
};

function MyForEach(logic) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (logic(arr[i])) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
}

Array.prototype.OwnForEach = MyForEach;

let resultArr = arr.OwnForEach((elem) => {
  return elem % 2 !== 0;
});

console.log(resultArr);
*/

