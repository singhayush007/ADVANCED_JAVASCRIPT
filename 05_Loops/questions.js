// Q : 1 Print all even numbers from 1 to 100.
/*
for (let i = 0; i<= 100; i++){
    if(i%2 === 0)
    console.log(i)
} */

// Q : 2 Calculate how many vowels and consonents are in a given string using for of loop.

/* let str = 'alphabhtu';
let vowelCount = 0; 
let consonentCount = 0;

for (let ch of str) {
    if (
        ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ||
        ch === "A" || ch === "E" || ch === "I" || ch === "O" || ch === "U"
    ) {
        vowelCount++;
    } else if (ch === " ") {
        console.log("Space not counted");
    } else {
        consonentCount++;
    }
}

console.log("Vowel Count = ", vowelCount);
console.log("Consonent Count = ", consonentCount);
*/

// Q: 3 Calculate sum of first 'n' numbers.

/* let n = Number(prompt('Enter a number : '));

let sum = 0;
for(let i = 1; i<=n ; i++){
    sum = sum + i ;
    console.log(sum)
}

console.log("sum = ", sum)
*/

// Q : 4 Calculate the sum of numbers from 'm' to 'n'.

/* let m = Number(prompt("Enter first number: "));
let n = Number(prompt("Enter last  number: "));

let sum = 0;
for (let i = m; i <= n; i++) {
  sum = sum + i;
}
console.log("sum= ", sum);
*/

// Q: 5 Print all odd number from 0 to n.

/* let n = Number(prompt("Enter ending number: "));

for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
} */

// Q : 6 Create a Number Knock" game . (ask the user to keep guessing the number)
// until the user enters correct guess.
/*
let computerNumber = 6;
let guess = null;

while (guess !== computerNumber)
guess = Number (prompt("Enter Correct Number: "))

if(isNaN(guess)){
   alert("Number is invalid , Please try again")
} else if (guess < computerNumber){
    alert ("Number is too low!, Please try again")
}else if (guess > computerNumber){
    alert("Number is high, please try again!");
}else {
    alert("Congratulation!.. Your guess is correct!")
} */

// Q: 7 Simple password checker Fixed Attempts
/*
let password = "alpha";
let noOfAttempt = "0";
let userPassword = null;

while (password !== userPassword && noOfAttempt < 3) {
  userPassword = prompt("Enter Passowrd: ");
  noOfAttempt++;

  if (userPassword === password) {
    alert("Congratulations yout password match");
  } else if (noOfAttempt >= 3) {
    alert("Your attempt is over, sorry!");
  } else {
    alert("Your password is incorrect , please try again");
  }
} */

// Q: 8 Create a program to find the factorial of'n'.

/* 
let n = 2;
let fact = 1;
for(let  i = 1; i<=n; i++){
    fact = fact * i;
}
console.log("factorial: " , fact); */

// Q: 9 Print the following pattern . (build it for nth numbers)
// 1
// 12
// 123
// 1234
// 12345

/* let n = 5;

for (let i = 1; i <= 5; i++) {
    let str = "";
  for (let j = 1; j <= i; j++) {
    str = str + j;
  }
  console.log(str)
}
*/

// Q: 10 "You wake up in a dark forest...."
// " Do you go 'left' or 'right' ?
// "after choosing left:"

// "You walk into a swamp..."
// "You see something shinny in the mud . Do you pick it up? (Yes or No)"
// "if yes:" "It's a magic stone! You are teelported to saftery . Yow win!"
// "if no: " "Ypu sink slowly into the mud. Game over."

// "after chhosing right:"

// "You find a cave..."
//  "Do You enter the cave ? (Yes or No)"
// "If yes : " "A dragon wakes up and chase you away. You barely escape!"
// "If no:" "You set up camp outside the cave. A peaceful night under the stars . You Win!"

// "Do you want to play again ? (Yes or No)"


let playAgain = 'yes';

while (playAgain === 'yes') {
    alert("You wake up in the dark forest!");

    let userChoice = prompt("Do you want to go left or right? ");

    if (userChoice === 'left') {
        alert("You see something shiny in the mud!");
        userChoice = prompt("Do you pick it up? (yes or no) ");
        if (userChoice === 'yes') {
            alert("It is a magical stone! you are teleported to safety, you win!");
        } else {
            alert("mar gya tu!")
        }
    } else {
        alert("you find a cave!");
        userChoice = prompt("Do you enter the cave? (yes or no) ")
        if (userChoice === 'yes') {
            alert("you barely escape!")
        } else {
            alert("acha raat beetega apka!");
        }
    }

    userChoice = prompt("Do you want to play again? (yes or no)")
    if(userChoice === 'no'){
        playAgain = 'no';
        alert("Thanks for playing!")
    }
}