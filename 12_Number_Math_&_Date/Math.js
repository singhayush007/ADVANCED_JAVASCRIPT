// MATH in JavaScript

// JavaScript provides a built in math object for mathematical operations.


// Method of MATH

// 1: Math.round(x) // Rounds to nearest integer.
let num  = 123.26;
console.log(Math.round(num));

// 2: Math.floor(x) // Rounds down.
let num1 = 12.3
console.log(Math.floor(num1));

// 3: Math.ceil(x) // Rounds Up.
let num2 = 12.3
console.log(Math.ceil(num2));

// 4: Math.abs(x) // Absolute Value.
let num3 = -12;
let num4 = 12;
console.log(Math.abs(num3));
console.log(Math.abs(num4));

// 5: Math.sqrt(x) // Square Root.
let num5 = 3;
console.log(Math.sqrt(num5))

// 6: Math.pow(x , y) // X to the power of Y.
console.log(Math.pow(2 , 3))

// 7: Math.min(..args) // Smallest Number.
console.log(Math.min(2, 3, 5, 6, 7 , 1));

// 8: Math.max(//args) // Largest Number.
console.log(Math.max(2, 3, 5, 6, 7 , 1));

// 9: Math.random() // Rnadom nUMBER BETWEEN 0 (Inclusive) and 1 (exclusive).
console.log(Math.random(0, 10))*10



// Generating Random Number in a given Range:


// Rnadom Number between 0 and 1;
let rand = Math.random();

// Random Integer between min and max (inclusive)
function getRandomInt(min , max){
    return Math.floor(Math.random()*(max - min + 1))+min;
}

console.log(getRandomInt(1, 10)) // Random Integer is 1 to 10

// NOTE: 
// Math.ceil() gives 0 only if math.random() return exactly 0 - but that's extremely rare.

// Math.floor(..+1) is slightly more consisitent in intent and avoids the edge case of 0.

