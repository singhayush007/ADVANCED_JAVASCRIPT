/*  
Q: 1 Get user to input number using prompt and print their possible arithmetic results .

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter 2nd number: "));
console.log("num1 + num2 = ", num1 + num2);
console.log("num1 - num2 = ", num1 - num2);
console.log("num1 * num2 = ", num1 * num2);
console.log("num1 / num2 = ", num1 / num2);
console.log("num1 % num2 = ", num1 % num2);
console.log("num1 ** num2 = ", num1 ** num2);
*/

/*
Q: 2 Can you chain assignment operators in a single line?
let a = b= c = 15;
console.log(a)
console.log(b)
console.log(c)
*/

/*Q: 3 Get user to input a number using prompt and check whether even or odd using a ternary operator.
let num1 = Number(prompt("Enter number: "));
let result = (num1 % 2 === 0) ? "Even number": "odd number";
console.log(result);
*/

/*
Q: 4 What is the final value of x?
let x = 5;
x += 3;
x -=2 ;
x *= 4;
x /= 6;
x %= 3;



let x = 5;
console.log(x)
x += 3; // x = x + 3 → 8
console.log(x)
x -= 2; // x = x - 2 → 6
console.log(x)
x *= 4; // x = x * 4 → 24
console.log(x)
x /= 6; // x = x / 6 → 4
console.log(x)
x %= 3; // x = x % 3 -> 1
console.log(x)
*/

/* 
Q: 5 Check if a number is within a range between 10 and 20 inclusive .
let num = 10;
let result = (num>=10 && num<=20)
console.log(result);
/*

/*
Q: 6 Write a program to find the largest number between 3 numbers using ternary operator.
let a = 1, b=13, c=2;
let result = a>b ? (a>c ? a : c) :(b>c ? b : c)
console.log(result);
*/

/*
Q: 7 Take an email and password  from the user . If the email or password is incorrect or does not match the stored values , display the message "Invalid email or password." If Both email and password match the stored values , display "You are Logged in successfully".

let username = "mkl";
let password = "12345";

let databaseUser = "mkl";
let databasePassword = "12345";

let result =
  username &&
  password &&
  username === databaseUser &&
  password === databasePassword
    ? "login successfull"
    : "invalid username or password";

console.log(result);
*/

/*
Q: 8 What will be the output of the following code?
let a = 5; b = 3; c = 2;
let result = a++ + --b * c-- - ++a + b-- / --c;
console.log("a" : , a);
console.log("b" : , b);
console.log("c" : , c);
console.log("result" : , result);  

let a = 5, b = 3, c = 2;
let result = a++ + --b * c-- - ++a + b-- / --c;
// result = 5 + 2 * 2 - 7 + 2 / 1
// result = 5 + 4 - 7 + 2
// result = 4

console.log("a :", a); // a = 7
console.log("b :", b); // b = 1
console.log("c :", c); // c = 1
console.log("result :", result); // result = 4
*/

/* 
Q: 9 What is the output of console.log(~a) where a = 0.
let a = 0;
console.log(~a) 
~a = -(a+1) = -(0+1) = -1
Output: -1
*/

/*
Q: 10 What is the output of the following code snippet?
let x = 10;
let y = 5;
let z = "10";

x += y * 2; // Arithmetic + Assignment => 10 + (5*2) = 20

let isEqual = x == z; // Loose Comparison => 20 == "10" → false
let isStrictEqual = x === z; // Strict Comparison => 20 === "10" → false

// Define logicTestCondition to simulate some condition
let logicTestCondition = true; 

// Ternary Operator + pre-Increment + pre-Decrement
let logicTest = logicTestCondition ? ++x : --y; 

// Define result for demonstration
let result = x + y; // simple addition just to show final result

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("isEqual:", isEqual);
console.log("isStrictEqual:", isStrictEqual);
console.log("logicTest:", logicTest);
console.log("result:", result);
console.log("typeof z:", typeof z);


x: 21
y: 5
z: 10
isEqual: false
isStrictEqual: false
logicTest: 21
result: 26
typeof z: string

*/


/*
Q: 11 What will be the output of the following code snippet?
let a = 6;
let b = 3;
let c = "6";

a += b << 1; //Bitwise left shift + assignment 
let d = a % b; // Bitwise AND
let e = a | b; // Bitwise OR
let f = a ^ b; // Bitwise XOR
let g = ~a; // Bitwise NOT

let check = (a === c) && (d < e) || !(f === e); // Mixed Logical , Comparison

let result = check ? typeof g : --b; // Ternary + Unary + typeof

console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);
console.log("d (a & b): ", d);
console.log("e (a | b): ", e);
console.log("f (a ^ b): ", f);
console.log("g (~a): ", g);
console.log("check: ", check);
console.log("result: ", result);


a:  12
b:  2
c:  6
d (a & b):  0
e (a | b):  15
f (a ^ b):  15
g (~a):  -13
check:  false
result:  2

*/


