// Q:1 What is pure Function, and why is it useful in UI rendering?

/* Answer: 
Pure Function are that type of function which return same output for same input, there is no shared state no side effects.  

1: Since output depends only on input , UI can reliably render the same data 
2: Esier to debug: No hidden side effects.
3: Improve Maintainibility and testibility.
*/

// Example :
/*
function add(a, b) {
  return a + b; // Always return Same result for same a same output.
}
*/

// Q:2 How would you use .map() to transform a list of products into a list of a HTML elements?

/*
Answer: 
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];


const productElements = product.map(product=>{
    return`
    <div id = "product-${product.id}">
    <h2>${product.name}</h2>
    <p>Price: ${product.price}</p>
    </div>)
    `;
});

document.getElementById('product-container').innerHTML = productElements.join('');
 */

// Q:3 How do you use .reduce() to calculate the total price in a shopping cart?

/*
Answer: 
let shoppingCartArrPrice = [100 , 200, 300, 400];

let totalPrice = shoppingCartArrPrice.reduce((acc, currVal)=>{
    return acc + currVal;
}, 0)

console.log(totalPrice);
*/

// Q: 4 Explain immutability and how you would you update an object in an array without mutating the original.

/*
Answer:
let user = {
  user: "Ayush",
  age: 23,
};

function updateName(originalUser, newName) {
  let newUser = { ...originalUser, newName };
  return newUser;
}
let updateUser = updateName(user, "Rishu");
console.log(user);
console.log(updateUser);
*/

// Q: 5 How would you compose multiple functions to tranform data step-by-step (e.g., sanitize --> trim --< capitalize)? Scenario: You're prepring user input before storing it. (Expected Knowledge: Function composition, chaining , pipe or compose logic.)

/*
Answer: 
--> Function composition lets you apply multiple transformations step-by-step.
--> Keeps code clean, reusable , and readable.
--> Very usefu for processing user Input or data pipelines.


let str = "Ayush";
let reverseString = str.split(" ").reverse().join('')
console.log(reverseString);


let add2 = num => num + 2;
let multiply5 = multiply => multiply * 5;
let substract10 = num => num - 10;

// substract10(multiply5(add2(6)))
// console.log(result)
*/

/*
let add2 = (num) => num + 2;
let multiply5 = (multiply) => multiply * 5;
let substract10 = (num) => num - 10;

function compose(...fns) {
  return function (val) {
    return fns.reduceRight((acc, currFn) => {
      return currFn(acc);
    }, val);
  };
  // Compose --> Right To Left
  // Pipe --> Left To Right
}
let result1 = compose(substract10, multiply5, add2)(5);


function pipe(...fns) {
  return function (val) {
    return fns.reduce((acc, currFn) => {
      return currFn(acc);
    }, val);
  };
  // Compose --> Right To Left
  // Pipe --> Left To Right
}
let result2 = pipe(substract10 , multiply5 , add2)(6)
console.log(result1);
console.log(result2);

*/

/*
// Helper Functions

let trim = (str) => str.trim();
let capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
let addExclamation = (str) => str + "!";

// Compose Function (Right To Left)

function compose(...fns) {
  return function (val) {
    return fns.reduceRight((acc, fn) => fn(acc), val);
  };
}
// Pipe Function (Left To Right)

function pipe(...fns) {
  return function (val) {
    return fns.reduce((acc, fn) => fn(acc), val);
  };
}

// Using Compose
let result1 = compose(addExclamation, capitalize, trim)("   hello world     ");
console.log(result1);

// Using pipe
let result2 = pipe(trim, capitalize, addExclamation)("hello world  ");
console.log(result2);
*/

// Q: 6 What is the difference between forEach and Map , and when is it wrogn to use map?

/**
For Each --> Kuch Return nahi karta hai (alays undefined). Only use for Iteration.

let arr = [1,2,3];
let result1 = arr.forEach(x => x*2);
console.log(result1)

Map --> It alwasy return New Array , in which callback result is present.

let arr = [1,2,3];
let resut2 = arr.map(x => x*2);
console.log(result2);

 */

// Q: 7 How do you implement your own version of .map() function on arrays?

/*
let arr = [1,2,3,4,5,6,7,8,9]

function square(arr){
    let outputArr = [];
    for(let i =0; i<arr.length; i++){
        outputArr.push(arr[i] * arr[i])
    }

    return outputArr;
}

function cube(arr){
    let outputArr = [];
    for(let i =0; i<arr.length; i++){
        outputArr.push(arr[i] * arr[i] * arr[i])
    }

    return outputArr;
}

function diameter(arr){
    let outputArr = [];
    for(let i =0; i<arr.length; i++){
        outputArr.push(2 * arr[i])
    }

    return outputArr;
}

let resultArr1 = square(arr);
console.log(resultArr1);
let resultArr2 = cube(arr);
console.log(resultArr2);
let resultArr3 = diameter(arr);
console.log(resultArr3);
*/

/*

let arr = [1, 2, 3, 4, 5, 6];

let squareLogic = (r) => {
  return r * r;
};

let cubeLogic = (r) => {
  return r * r * r;
};

let diameterLogic = (r) => {
  return r * 2;
};

let Calculate = function (logicFn) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    outputArr.push(logicFn(arr[i]));
  }
  return outputArr;
};

Array.prototype.ownMap = Calculate;
let result = arr.ownMap(diameterLogic);

let squareArr = Calculate(arr, squareLogic);
let cubeArr = Calculate(arr, cubeLogic);
let diameterArr = Calculate(arr, diameterLogic);

let diamterArr = arr.map(diameterLogic);
console.log(diamterArr);

console.log(squareArr);
console.log(cubeArr);
console.log(diameterArr);
*/

/*
Array.prototype.ownMap = function(logicFn){
   let outputArr = [];
   for(let i = 0; i < this.length; i++){
    outputArr.push(logicFn(this[i]));
   }
   return outputArr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

let squareArr = arr.ownMap(x => x*x);
let cubeArr = arr.ownMap(x => x*x*x);
let doubleArr = arr.ownMap(x=> x*2);

console.log(squareArr);
console.log(cubeArr);
console.log(doubleArr);
*/

