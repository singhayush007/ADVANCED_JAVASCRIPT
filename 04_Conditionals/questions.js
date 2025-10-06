// Q: 1 Give choice to the user to select theme color and set the selected theme color and console it.

/* 
let SelectedThemeColor = "dark"

if(SelectedThemeColor === "dark"){
    console.log("Dark Theme Selected");
} else if(SelectedThemeColor === "light"){
    console.log("Light Theme Selected")
} else {
    console.log("No Theme Selected");
} 
*/

// Q:2 Find the smallest of three numbers . Numbers are given by the user.

/*
let num1 = prompt("Enter number 1: ");
let num2 = prompt("Enter number 2: ");
let num3 = prompt("Enter number 3: ");

if(num1 < num2 && num1 < num3){
    console.log(`${num1} is smallest`);
} else if (num2 < num1 && num2 < num3){
    console.log(`${num2} is smallest`);
} else if (num3 < num1 && num3 < num2){
    console.log(`${num3} is smallest`);
}
*/

//  Q:3 Wirte a program to manage Role Based Acces Control.
// Given a user role ("admin", "editor", "viewer"),
// Admin : Full Access
// Editor : Edit Access
// Viewwer : Read Only
// Any Other : No Access
// Use Switch Case Statement

/* let userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("Full Access");
    break;
  case "editor":
    console.log("Edit Access");
    break;
  case "viewer":
    console.log("Read Only");
    break;
  case "anyOther":
    console.log("No Access");
} */


// Q:4 Check if number is divisble by 3 and 5 or both . Print "Fizz" for multiples of 3, "Buzz" for multiples of 5.

/* let number = 15;

if(number % 3 === 0 && number % 5 === 0){
    console.log("FizzBuzz");
} else if (number % 3 ===0){
    console.log("Fizz")
} else if (number % 5 ===0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
} */


// Q:5 Create a simple calculator. Take two number and an operator (+ , - , * , /) and calculate the result using switch case statement.


/* let num1 = 23;
let num2 = 7;
let operator = "+";

switch (operator) {
    case "+":
        console.log(`Result: ${num1 + num2}`);
        break;
    case "-":
        console.log(`Result: ${num1 - num2}`);
        break;
    case "*":
        console.log(`Result: ${num1 * num2}`);
        break;
    case "/":
        console.log(`Result: ${num1 / num2}`);
        break;
    default:
        console.log("Invalid operator");
        break;
} */


// Q: 6 Create a simple ATM Program.
//User can Choose : 
// 1. Check Balance  
// 2. Deposit Money
// 3. Withdraw Money
// 4. Exit   

/*let totalBalance = 10000;

let userChoice = Number(prompt("Choose an option: \n1. Check Balance \n2. Deposit Money \n3. Withdraw Money \n4. Exit"));

if(userChoice === 1) {
    console.log("Your total balance is: " + totalBalance);
} else if(userChoice === 2) {
    let depositAmount = Number(prompt("Enter amount to deposit: "));
    totalBalance += depositAmount;
    console.log("Deposited: " + depositAmount + ". New balance is: " + totalBalance);
} else if(userChoice === 3) {
    let withdrawAmount = Number(prompt("Enter amount to withdraw: "));
    if(withdrawAmount >= totalBalance) {
        console.log("Insufficient funds");
    } else {
        totalBalance -= withdrawAmount;
        console.log("Withdraw: " + withdrawAmount + ". New balance is: " + totalBalance);
    }
} else if(userChoice === 4) {
    console.log("Thank you for using the ATM");
} else {
    console.log("Invalid choice");
}*/