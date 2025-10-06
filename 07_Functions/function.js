/* function MyFunction(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  console.log("sum: ", sum);
}
MyFunction(5) */

// 1: Create a function without a Parameter and without Return
/* function alpha (){
    console.log("Hello")
    console.log("bro")
    console.log("How")
    console.log("are")
    console.log("you")
}

alpha();

let str = "Ayush";
console.log(str);

alpha(); */

// 2: Create a function without a Parameter but with a return.

/*function beta(){
  return 'Ayush';
}

console.log(beta());
let a = beta();
console.log(a);
*/

// 3: Create a function with a Parameter but without a return.

/* function gamma(name){
  console.log('Hello bro' , name)
}

gamma("Ayush") */


// 4: Create a function with a Parameter  and with a return.

// function greet(name){
//   return "hello bro" + " " + name;
// }
// greet();
// let a = greet ("Lambda")
// console.log(a)


// function greet(name){
//   console.log(name);
// }

// greet('Good Morning!');

/*
function greet(name = "Test"){
 console.log(name);
}

greet();
*/


// Only undefined value triggered the default value.



// Types of Functions.

// 1: Normal Function

/* function greet(name = 2+3+5-2){
  console.log(name)
}
greet() */


// 2: Function Expression

/*
let sun = function(){
  return a+b;
} */


// function sum(a,b){
//   return a+b;
// }

// let sum2 = function(a,b){
//   return a+b;
// }

// let a = sum(2 , 3);
// let b = sum2(2 , 3);
// console.log(a , b)

// 3: Arrow Function

// let alpha = ()=>{
//      console.log("Ayush")
// }
// alpha();

// 4: Annonymous Function

// setTimeout(function(){
//   console.log("Hello Ayush!")
// },3000);


// 5: Immediately invoked function expression


// console.log("Hello");

// (function(){
//   console.log("Hello")
// })();

// console.log("Hello");


/*
greet();
greet2();
function greet(){
  console.log("Hello")
}


let greet2 = ()=>{
  console.log("Hello")
} */

