/*
Q: 1 Create a function that returns the last element of an array.

// 1st Method 
let arr = [1, 2, 3, 4, 5];

function getLastElement(arr) {
  if (arr.length === 0) {
    return null;
  }

  return arr[arr.length - 1];
}

console.log(getLastElement(arr));

// 2nd Method
let getLastElement = arr => arr.length ? arr[arr.length - 1] : null;
console.log(getLastElement(['2' , '4' , '5'])); 
*/

/*
Q: 2 Find the combination of two arrays.

// 1st Method
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

const combined = arr1.concat(arr2);
console.log(combined);


// 2nd Method

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
const combined = [...arr1, ...arr2];
console.log(combined);
 */

/*
Q: 3 Generate a random integer between 0 to 18 included.

let randomInteger = Math.floor(Math.random()*19);
console.log(randomInteger)
*/

/*
Q: 4 Create a function that takes an array containing both numbers and strings , and returns a new array containing only the string values.

let arr = [1, 2, 3, "a", "y", "u", "s", "h"];
let resultArr = arr.filter((element) => {
  if (typeof element === 'string') {
    return true;
  } else {
    return false;
  }
});

console.log(resultArr);
*/

/*
Q: 5 Find the maximum number of an array.

let arr = [12, 4, 8, 9 , 12];
console.log(Math.max(...arr));
*/

/*
Q: 6 Write a function that returns the length of a given object (number of keys).

let obj = {
  name: "Ayush",
  age: 23,
  city: "Delhi",
};

let getObjectlength = (object) => {
  return Object.keys(object).length;
};

let length = getObjectlength(obj);
console.log(length);

*/

/*
Q: 7 In an array of objects filter out those objects which have gender's value male.

let arr = [
  {
    name: "Ayush",
    age: "23",
    gender: "male",
  },
  {
    name: "Alexa",
    age: "25",
    gender: "female",
  },
];

let resultArr = arr.filter((obj) => {
  return obj.gender === "male";
});

console.log(resultArr);
*/

/*
Q: 8 Given an array of string and , return a new array where all strings are in Uppercase.

let arr = ['john' , 'alex' , 'peter' , 'alexa']

 let resultArr = arr.map((element)=>{
  return  element.toUpperCase()
 })

 console.log(resultArr)
*/

/*
Q: 9 Check if an object is empty or not.

let obj = {
  name: "Ayush",
};

let isEmptyObject = Object.keys(obj).length < 1;

if (isEmptyObject) {
  console.log("Object is Empty");
} else {
  console.log("Object is not Empty");
}

*/

/*
Q: 10 Create an array of numbers and double each value using .map()

let arr = [2,4,6,8,10];

let doubleArr = arr.map(Element=>{
  return Element*2
})

console.log(doubleArr);
*/

/*
Q: 11 Convert an array of Strings into a single comma-separated String.

const arr = ["Apple", "Banana", "Mango"];

const result = arr.join()
console.log(result);
*/

/*
Q: 12 Write a function to flattern a nested array (one level deep).(e.g. [1,[2,3],4]-> [1,2,3,4])

let arr = [1,2,3,['a' , 'b' , 'c'] , 5, 6];
console.log(arr.flat(1));
*/

/*
Q: 13 Write a functions that check if all element in an array are numbers.

// 1st Method:
let arr = [1, 2, 3, 4, "a", "b", "c"];

function checkNumberArray() {
  let isNumbers = true;
  arr.forEach((Element) => {
    if (typeof Element != "number") {
      isNumbers = false;
    }
  });
  return isNumbers;
}

let isAllNumbers = checkNumberArray(arr);
console.log(isAllNumbers)


// 2nd Method

let arr = [1, 2, 3, 4, "a", "b", "c"];


function checkNumberArray(localArr){
  let isNumbers = localArr.every(elem=> typeof elem === 'number')
  return isNumbers;
}

let  isAllNumbers = checkNumberArray(arr);
console.log(isAllNumbers);
*/

/*
Q: 14 Write a simple isPrime() function to check if a number is prime.

function isPrime(num) {
if (num === 0 || num === 1 )
return false;
}
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(5));

*/

/*
Q: 15 Create a function that removes duplicte values from an array.
// 1st Method
function removeDuplicate(arr){
 let set = new Set(arr);
 return [...set]
}

let resultArr = removeDuplicate([1,2,2,5,6,7])
console.log(resultArr);
*/




