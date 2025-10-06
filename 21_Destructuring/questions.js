/*
Q: 1 What will be the Output?
const arr = [1,2,3];
const obj = {...arr};
console.log(obj);
 */
/*
const arr = [1, 2, 3];
const obj = { ...arr };
console.log(obj);
*/
/*
Q: 2 How does using Spread help avoid mutation? Modify the object without affecting the original.
*/

/*
let originalObj = {
  name: "John",
  age: 30,
};

let copyObj = { ...originalObj  , city: "New York"};
console.log(copyObj);
*/

/*
Q: 3 Write a function that take numbers as argument and separate even and odd numbers and return an object with events and odds and destructurethe output while calling function.
*/

/*
function seperateEvenOdd(...array) {
  let even = array.filter((element) => {
    return element % 2 === 0;
  });
  let odd = array.filter((element) => {
    return element % 2 !== 0;
  });
  return { even, odd };
}

let { even, odd } = seperateEvenOdd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let { even, odd } = result;
// console.log(result);

console.log(even);
console.log(odd);
*/

/*
Q: 4 Create a custom JavaScript function that behaves like react's Usestate .
The Function should: 
1: Store a value (like state)
2: Return two things: The current value and a function to update it.


Use array destructuring to extract both the value and the setter when calling your function.
*/

function myCustomState(initialValue) {
  let value = initialValue;
  function setValue(val) {
    value = val;
  }
  function getValue() {
    return value;
  }

  return [getValue, setValue];
}

let [getCount, setCount] = myCustomState(0);
console.log(getCount());
setCount(5);
console.log(getCount());


// If we not using destructuring let [getCount , setCount] = myCustomState(0);


let state = myCustomState(0);
console.log(state[0]());
state[1](5);
console.log(state[0]());