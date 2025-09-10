// Number in JavaScript

// In JavaScript , numbers reprsent both integer and floating point values.

//Unlike many other language javascript has only one number type: 
// Number . No seperate types for integers or floats.

// Number is technically a constructor function (also called a built in object) in JavaScript.

/*
EG: 

let age = 25; // Integer
let price = 19.99; // Floating Point
let neagtive = -7 // Negative Number
*/

/*
let num1 = 123456789;
let num2 = 1234.5678;
let num3 = 123456789123456789n;
console.log(num1);
console.log(typeof num1);
console.log(num2);
console.log(typeof num2);
console.log(num3);
console.log(typeof num3);
*/

// Number can be created by two methods:

// 1: Literal Method

/*
let num = 12345;
let num1 = Number("9876");
let num2 = Number("56")
*/


// 2: Constructor Method

/*
let num1 = new Number (123456789);
console.log(num1);
console.log(typeof num1);
let num2 = new Number ("123456789")
console.log(num2);
console.log(typeof num2);
*/

// new number() creates an object , not. aprimitive number.

// This can lead to confusing bugs and unexpected behaviour.

// Always use number literals or number(value) without new keyword.



// Property of a Number

// 1: Number.MAX_VALUE

// console.log(Number.MAX_VALUE);

// 2: Number.MIN_VALUE

// console.log(Number.MIN_VALUE);

// 3: Number.POSITIVE_INFINITY

// console.log(Number.POSITIVE_INFINITY)

// let a = 1/0
// console.log(a)
// 4: Number.NEGATIVE_INFINITY

// console.log(Number.NEGATIVE_INFINITY)

// 5: Number.NaN

// console.log(Number.NaN);

// let c = 0/0 
// console.log(c)

// 6: Number.EPSILON

// console.log(Number.EPSILON); // Smallest Difference between Numbers

// 7: Number.isNaN()

// console.log(Number.isNaN);


/*
Method of a Number

// 1: parseInt()
let num = 123.456 // Float Value
console.log(parseInt(num));

// 2: parseFloat()

let num1 = 123.456;
console.log(parseFloat(num1));

// 3: inNaN()

let num2 = "123.456"
console.log(isNaN(num2));

// 4: Number.isFinite()

let num3 = 1/0;
console.log(Number.isFinite(num3));

*/


// Number Instance Method (used on number Primitives)

// 1: .toFixed(n); // Formats number to n decimal places.
let num = 1234
console.log(num.toFixed(3));

// 2: .toExponential(n) // Converts to exponential notation.
let num1 = 123456;
console.log(num1.toExponential())

// 3: .toPrecision(n) // Formats to n total digits.
let num2 = 1234;
console.log(num2.toPrecision(2))
// 4: .toString()  // Converts Number to String.

let num3 = 12345678;
console.log(num3.toString());

// 5: .valueOf() // Return Primitive Value of Number Object.

let num4 = new Number("12345");
console.log(num4);
console.log(num4.valueOf());




