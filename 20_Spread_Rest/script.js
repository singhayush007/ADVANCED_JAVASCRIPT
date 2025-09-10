/*
SPREAD AND REST OPERATOR

-->Both use three dots(..) syntax but do different things based on context.

-->Spread operator expands / unpacks values.

-->Rest Opeartor collects / packs values.

*/


// Spread Array
let arr = [1,2,3,4,5]
let newArr = [...arr, 6,7,8,9,10]
console.log(newArr);

// Shallow Copy 
let arr1 = [1,2,3,4,5];
let copyArr = [...arr];
copyArr.push(6);
console.log(copyArr);
console.log(arr);


// Merging Array

let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

let mergedArray = [...array1 , ...array2];
console.log(mergedArray);


// Spread in String
let string = "Ayush";
console.log(...string);


// Spread in Functions

let users = ["Alex" , "John" , "Roy"];
function consoleThreeUsers (user1 , user2 , user3){
    console.log(user1);
    console.log(user2);
    console.log(user3);
}


consoleThreeUsers(...users)

// Spread in Objects

let obj = {
    name : "Ayush",
    age: "23",
    passion : "Coding",
    city : "Delhi"
}

let objCopy = {...obj}
objCopy.name = "John Doe"
console.log(objCopy);
console.log(obj);

// Merging Two Object

let obj1 = {
    name: "Alex",
    age: 22
}

let obj2 = {
   name1 : "John",
   age1 : 23
}

let mergeObject = {
    ...obj1,
    ...obj2,
}

console.log(mergeObject);


// Rest Opeartor in Function
function sum(...arr){
    let sumResult = arr.reduce((acc, currVal)=>{
      return acc + currVal
    })
    return sumResult;
}

let output = sum(1,2,3,4,5);
console.log(output);


// Rest with Destructuring Array


let arr3 = ["John" , "Alex" , "Bob"];

let [first , second , third , ...otherUsers] = arr3;
console.log(first);
console.log(second);
console.log(third);
console.log(otherUsers);


// Rest with Destructuring Object

let obj3 = {
    name : "Ayush",
    age : 21,
}

let {name , age} = obj3;
console.log(name);
console.log(age);


