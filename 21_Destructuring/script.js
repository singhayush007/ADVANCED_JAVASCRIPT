/* Destructuring
--> Destructuring is a JavScript expression used to unpack values from arrays or propertes from objects into distinct variables.

--> Think of it like unpacking a suitcase
*/

/* 

EX: 
const [a , b] = [10 , 20];
const {name , age} = {name: "John", age: 30};
*/

/*
let person = {
  name: "John",
  age: 30,
  city: "New York",
  isMarried: false,
  job: "Software Engineer"
}
*/

/*
let name = person.name;
let age = person.age;
let city = person.city;
let isMarried = person.isMarried;
*/

// Destructuring

/*

let {name , age , city , isMarried , job} = person;


console.log(name);
console.log(age);
console.log(city);
console.log(isMarried);
console.log(job);
*/
/*
let user1 = {
  name: "Alice",
  age: 28,
  address: { city: "Los Angeles", zip: "90001" },
  isMarried: true,
  job: "Product Manager",
};
*/
// Destructuring

/*
let {
  name,
  age,
  address: { city, zip },
  isMarried,
  job,
} = user1;

console.log(name, age, city, zip, isMarried, job);

let ar = [1, 2, 3];

let [a, b, c1] = ar;
console.log(a, b, c1);
*/
// Destructuring With an Array:

/*
let arr = [1 , 2, 3 , "Ayush" , false];

let [first , second , third , fourth , fifth] = arr;

console.log(first , second , third , fourth , fifth);
*/

/*
let array = [1, 2, 3, "Ayush", false];

let [first, second, third, ...others] = array;

console.log(first, second, third, others);

*/

// Default Values.
/*
let [x, y = 2, c = 3, d = 4] = [1];
console.log(x, y, c, d);
*/

// Skip Items
/*
let [, , c, , e] = [1, 2, 3, 4, 5];
console.log(c, e);
*/
// Swap Items With normal Variables

/*
let a = 5;
b = 10;

let temp = a;
a = b;
b = temp;
console.log(a, b);
*/

/*
let x = 10;
let y = 20;

let swap = x;
x = y;
y = swap;
console.log(x, y);
*/

// Swap item with Destructuring
/*
let a = 5;
b = 10;
[a, b] = [b, a];
console.log(a, b);
*/

// Nested Arrays
/*
let [a, [b, c]] = [1, [2, 3]];
console.log(a);
console.log(b, c);
*/
// Destructuring With an Objects
/*
let person = {
    name : 'John',
    age : 25,
    city : 'New York'
}


let {name, age, city} = person;
console.log(name , age , city);
*/

// Nested Objects

/*
let obj ={
    name : "Alice",
    age : 28,
    city : "Los Angeles",
    zip : "90001"
}

let {name , age , ...others} = obj;
console.log(name ,  age , others);
*/

// Default Value:
/*
let {name , age = 18} ={
    name : "Ayush",
}

console.log(name , age);
*/

/*
let { name } = {
    name: "John"
};

console.log(name);
*/

// Rename Variables
/*
let { name: fullName } = {
    name: "Alex"
};

console.log(fullName);
*/

// Nested Destructuring In Object

/*
let obj = {
  name: "Alice",
  age: 21,
  address: {
    city: "Wonderland",
    zip: "12345",
    arr: [1, 2, 3, 4, 5],
  },
};

let {
  name: fullname,
  age,
  address: {
    city,
    zip: pinCode,
    arr: [a, b],
  },
} = obj;

console.log(fullname);
console.log(age);
console.log(city);
console.log(pinCode);
console.log(a, b);
*/


// Array destructuring in function parameters.

/*
function sum (a , b){
    // console.log(a + b);
    console.log(a , b);
}

// let a = 10 , b = 5;
// sum (a, b);

// let arr = [10, 5];
// sum(arr[0] , arr[1]);

let arr = [10, 5];
sum(arr);
*/



// Object destructuring in Function Parameter.
function greet({name , age}) {
    console.log(`hello ${name}, you are ${age} years old.`);
}

let obj = {
    name : "John",
    age : 30
}

// greet(obj.name , obj.age);
greet(obj);