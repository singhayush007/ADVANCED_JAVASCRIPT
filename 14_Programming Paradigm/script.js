// PROGRAMMING PARADIGM : Programming Paradigm is a way or Style to do programming that is different different way.

// let arr = [9, 8, 7, 6, 5];

// By For Loop
// In For Loop we know internal Working.
/*
for (let i= 0; i<arr.length; i++){
    console.log(arr[i])
}
*/

// By Map Method:
// In Map Method we don't know internal Working.
/*
arr.map(element=>console.log(element));
*/

// There are 2 ways to do Programming:

// 1: Imperative Programming:

/*
In Imperative Programming we tell the computer how to do something step by step.


Think of it like : Giving someone exact instructions to make a sandwich - one step at a time.

let numbers = [1 , 2, 3];
let doubled = [];

for (let i = 0; i< numbers.length; i++){
doubled.puh(numbers[i]*2)
};

console.log(doubled)
*/

// 2: Declarative Programming
/*
Concept: You Describe what you want , not how to do it.

Think of it like: Ordering a coffee -> You just say "I want a cappuccino", you don't explain how to make it.

let numbers = [1,2,3];
let doubled = numbers.map(num=> num*2);
console.log(doubled);
*/

// PROGRAMMING PARADIGM:
/*
1: IMPERATIVE PARADIGM
--> Procedural Programming
--> Structured Programming

2: DECLARATIVE PARADIGM:
--> Functional Programming (Very Very IMPORTANT)
--> Reactive Programming(eg: RxJS)

3: Object-Oriented PARADIGM:
--> Class Based
--> Prototype-Based

4: Event-Driven Programming 
--> Based on Event Listener, calllback, DOM , events, etc.

5: Asynchronous Programming (cross-paradigm):
--> Callback-based
--> Promise-based
--> async/await(syntatic sugar over Promise)
*/

// Example-> Procedural Programming: It says you have to program through functions or with procedure.


/*
function consoleEnd() {
  console.log("Program is end...!");
}

function checkNumber(num) {
  if (num === 0) consoleZero();
  else if (num > 0) positive();
  else negative();

  consoleEnd();
}

function positive() {
  console.log("Number is Positive");
}

function negative() {
  console.log("Number is Negative");
}

let num = 10;
checkNumber(num);
*/





// Example-> Structured Programming: It says you have program in proper sequence and structured and you can use if , else and you can iterate.
/*
function  checkNumber(num){
    if(num === 0){
        console.log('Number is Zero');
    } else if (num > 0){
        console.log("Number is Positive")
    } else {
        console.log("Number is negative")
    }
    console.log("Program is End!")
}

checkNumber(27);
*/





// Pure Function : Pure Functions are those function which give us a specific output for a specific Input.



// Function Programming Example: 
/*
function sum (a , b){
    return a+b;
}

let result = sum (1, 5);
console.log(result);
*/

/*
let arr = [1 , 2 , 4, 5 ,6];

function doubleTheElement(arr){
    let result = arr.map((elem)=>{
      return elem*2;
    })

    return result;
}

let newArr = doubleTheElement(arr);
console.log(newArr);
*/







// Object-Oriented Programming Example: 
/*
class Car{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
    start(){
        console.log('Starting the Car...')
    }

    stop(){
        console.log("Stopping the Car...")
    }
}


let car = new Car("Porsche" , "360 kmph")

console.log(car);
car.start();
car.stop();
*/


// Event Drive Programming Example: 
/*
function consoleClick(){
   console.log("I am Clicked")
}
*/

// Asynchronous Programming Example: 

/*
console.log("Hey ! ");
console.log("How are you!");
*/


/*
setTimeout(()=>{
    console.log("Task 1")
}, 5000);

setTimeout(() => {
    console.log("Task 2")
}, 3000);

setTimeout(()=>{
    console.log("Task 3")
}, 4000);
*/


