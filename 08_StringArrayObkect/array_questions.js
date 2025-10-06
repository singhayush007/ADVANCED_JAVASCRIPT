// Q: 1 For an array with marks of students find the average marks of the entire class.


/* let marks = [ 75, 60, 90, 45, 80];

let sum = marks.reduce((acc , curr)=>{
    return acc + curr;
})


let average = sum / marks.length
console.log(`sum = ${sum}`)
console.log(`average = ${average}`) */


/* let marks = [100, 90 , 80, 70, 60, 50];

let sum = marks.reduce((acc , curr)=>{
    return acc + curr;
})

let average = sum / marks.length;

console.log("sum of marks :" , sum )
console.log("average of marks :" , average)*/



// Q: 2 Create an array with the given length(n) and fill with 0.

/* let array = ""
let constructorArray = new Array(20).fill(0)
console.log(array)
console.log(constructorArray); */

/* let n = 25; 
let arr = new Array(25).fill(0)
console.log(arr); */


// Q: 3 Create an array with the given length (n) and store natural number from 1 to n.

/* let n = 10;
let arr = new Array(10).fill(2)
arr.forEach((item, index)=>{
    return arr [index] =  index + 1;
})
console.log(arr); */


/* let n = 10; 
let arr = [];
for (let i = 1; i<= n; i++){
    arr.push(i)
}
console.log(arr); */


// Q: 4 Consider an array of MCU Heros ([Ironman , CaptainAmerica, BlackWidow, Wanda, Hulk , BlackPanther]).
// Now (a): Add Spidernamn at the end and add thor at the start.
//     (b): Remove black widow and add hawkeye in its place.
//     (c): Check weather captain is presetnin the array.

/* let mcuHeros = ["Ironman" , "CaptainAmerica", "BlackWidow", "Wanda", "Hulk" , "BlackPanther"];
console.log(mcuHeros.push("SpiderMan"))
console.log(mcuHeros); */


/* let mcuHeros = ["Ironman" , "CaptainAmerica", "BlackWidow", "Wanda", "Hulk" , "BlackPanther"];
console.log(mcuHeros.unshift("Thor"));
console.log(mcuHeros); */

/* let mcuHeros = ["Ironman" , "CaptainAmerica", "BlackWidow", "Wanda", "Hulk" , "BlackPanther"];
console.log(mcuHeros.splice(2 , 1 , "HawkEye")); */


/* let mcuHeros = ["Ironman" , "CaptainAmerica", "BlackWidow", "Wanda", "Hulk" , "BlackPanther"];
console.log(mcuHeros.includes("CaptainAmerica")); */



// Q: 5 How to chek if a given thing is array or not ? How to convert other datatypes to array ? What if we try to convert an object into an array.

/* let firstname = ['Ayush'];
console.log(Array.isArray(firstname));


let lastname = "Singh"
console.log(Array.from(lastname));

let obj = {
    name : 'Ayush',
    age : '23'
};

console.log(Array.from(obj)); */

// Q: 6 We have three variable a , b , c , d contains number , b contains any string , c contains any object , and d contains any array . Can we create an array from all these four variables ? If yes . How?


/* let firstname = "Ayush";
let lastname = 'Singh';

console.log(Array.from(firstname , lastname)); // Ye change nhi krega string ko array me agr 1 se jyaada varibale hue toh.

console.log(Array.of(firstname , lastname)); // Ye change kar dega ek varibale ho ya ek se jyada variable ho . Sare ko arrya me convert kar dega. */


// Q: 7 Check whether given string is palindrome or not.

/* let str = "madam";
let revstr = str.split("").reverse().join("")
if(str === revstr){
    console.log("Palindrome String")
} else {
    console.log("Not a palindrome String")
};
*/

// Q: 8 Capitalize the first letter of every word in a sentence.


/* let str = 'i love javascript';
let newArr = str.split(" ").map((element)=>{
   return element.charAt(0).toLocaleUpperCase() + element.slice(1)
});
console.log(newArr.join(" ")); */


