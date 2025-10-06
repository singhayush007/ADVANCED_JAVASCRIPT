// Definition:
// An array is a collection of elements stored in a single variable. 
// These elements can be of any data type, and each element is accessed using its index (starting from 0).
// It is Mutable , we can change array.

// Array with literal methods
/* let arr = [4 , 5, 10, 23];
console.log(arr);*/


/* let arr2 = [Apple , Banana, Orange];
console.log(arr2); */

/* let arr3 = [1, 2, 3, 4, ['Ayush']];
console.log(arr3);*/

// Array with constructor methods
/* let arr = new Array (2,3,4,5, "Ayush");
console.log(arr);*/


/* let array = [20]
let constructorArray = new Array(20).fill(20)
console.log(array)
console.log(constructorArray)

console.log(array.length)
console.log(constructorArray.length)
console.log(typeof array); */



/* let arr = [2,4,6,8]
console.log(arr[1])
console.log(arr[2])

arr [2] = 12
console.log(arr) // Array are Mutable .It is not like string which is Immutable.
*/



/* let arr = [1 , 3, 5, 100, 99];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//For of Loops in Array (for element)
for(let element of arr){
    console.log(element)
};


// For in Loops in Array (For index)
for(let index in arr){
    console.log(index)
} */


// Array Methods

// 1: Push 

/* let arr = [2, 5, 'Ayush' , 5 , 8];
console.log(arr.push('Singh'));
console.log(arr);*/


// 2: Pop

/* let arr = [2, 5, 'Ayush' , 5 , 8];
console.log(arr.pop())
console.log(arr) */ 

// 3: UnShift

/* let arr = [2 , 4, 'Ayush' , 5, 8];
console.log(arr.unshift(100))
console.log(arr)*/

// 4: Shift

/* let arr = [2 , 4, 'Ayush' , 5, 8];
console.log(arr.shift(4))
console.log(arr)*/


// 5: Slice 

/* let arr = [2 , 4, 6 , 8]
console.log(arr.slice(1,3))
console.log(arr) */

// 6: Splice


/* let arr = [2 , 4, 6 , 8, 10]
arr.splice(2 , 3);
console.log(arr)


let test = arr.splice( 3 , 1 , 99, 100);
console.log(arr);
console.log(test) */


// 7: Concat

// let arr1 = [ 1 , 2 , 3 , 'Ayush'];
// let arr2 = ['Singh'];

// console.log(arr1.concat(arr2))


// 8: Join 

/* let fruits = ['mango' , "guava", "banana"];
let test = fruits.join(" ");
console.log(fruits);
console.log(test);
console.log(typeof test); */


// 9: Includes

/* let fruits = ["Apple" , "Banana", "Mango" , "Pineapple"]
console.log(fruits.includes("Apple")); */

// 10: To String

/* let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];
let result = fruits.toString();
console.log(result);

let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];
console.log(fruits.toString()) */


// 11: Index Of

/* let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];
console.log(fruits. indexOf("Apple")); */


// 12: Reverse 
/* let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];
console.log(fruits.reverse()); */

// 13: Find

/* let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];
console.log(fruits.find("Apple")); */ 

// This is not done by this because here we use function because ynha pe hum element ke upar custom logic apply kar rhe hai 


/*let fruits = ['Apple' , 'banana' , 'Pineapple' , 'Guava' , 'Litchi' , 'Mango'];

let test = fruits.find(function(item){
    return item === "Mango"
})*/

// 14: Flat

/* let heros = ["Spiderman", ["Hulk" , ["IronMan" , "SuperMan", "BatMan" , ["CaptainAmerica"]]]];
console.log(heros.flat(2));*/


// 15: Sort


/* let arr = [10 , 5 , 1 , 20];
console.log(arr.sort()); */ 

/* let heros = ["Spiderman", "Hulk" , "IronMan" , "SuperMan", "BatMan" , "CaptainAmerica"];
console.log(heros.sort());*/


/* let arr = [10 , 5 , 1 , 20];
arr.sort((a , b) =>{
    return b - a;
});
console.log(arr);*/

// 16: Map

/* arr = [5 , 6 , 14, 20, 1]
arr.map(function(element , index , arr){
   console.log(element , index , arr)
});*/


/* arr = [5 , 6 , 14, 20, 1]
let newArr = arr.map((elem , index , arr) =>{
    return elem*2;
})

console.log("Original array: " , arr);
console.log(newArr) */


/* let numbers = [1,2,3]
let objArr = numbers.map((num , idx) =>{
    return {id: idx + 1 , num }
});

console.log(objArr)*/

/* let names = ["Alex" , "John" , "Roy"]
let upperNames = names.map(( name ) =>
    name.toUpperCase());
console.log(upperNames); */



// 17: Filter

/* arr = [5 , 6 , 14, 20, 1]
arr.filter((elem , index , arr)=>{
  console.log(elem , index , arr)
  return elem % 2===0;
})
console.log(arr); */

/* arr = [5 , 6 , 14, 20, 1]
let evenArr = arr.filter((elem, index, arr) => {
  return elem % 2 === 0;
});

console.log(evenArr); */

// 18: Reduce

/* arr = [5 , 6 , 14, 20, 1]
let result = arr.reduce((preVal, currVal)=>{
    return preVal + currVal;
});
console.log(result); */


/* let arr = [5 , 10 , 15 , 20];

let max = arr.reduce((acc, curr)=>{
    return curr > acc ? curr : acc;
});

console.log(max);*/



