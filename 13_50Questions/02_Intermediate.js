/* 
Q: 16 What's the difference between parseInt and number()?

console.log(parseInt("123.456")); // 123
console.log(Number("123.456")); // 123.456


console.log(parseInt("123.456px")); // 123
console.log(Number("123.456px")); // NaN
*/

/*
Q: 17 Why does 0.1 + 0.2 !== 0.3 in JavaScript.

//0.1 + 0.2 = 0.30000000000000004
console.log(0.1 + 0.2  === 0.3) // False
*/

/* 
Q: 18 Explain floating point precision issue in javaScript.

//0.1 + 0.2 = 0.30000000000000004
console.log(0.1 + 0.2  === 0.3) // False
*/

/*
Q: 19 How would you handle high precision decimal math in JS?

let sum = (0.1 + 0.2).toFixed(2);
console.log(sum !== 0.3);

*/

/*
Q: 20 What is the difference between slice and splice ?

-> Slice works on both string and array , but splice work on only an array.

-> Slice did't change an original string or an array , but splice did.

let string = "Ayush";
let array = ["A" , "Y" , "U" , "S" , "H"];
console.log(string.slice(1,3))
console.log(array.slice(1,3))

let string = "Ayush";
let array = ["A" , "Y" , "U" , "S" , "H"];
let test = array.splice(1 , 2);
console.log(test);
*/

/*
Q: 21 Create a function that reverse each word of a given sentence.E.g : Main hun manas -> sanam nuh niam


function reverseWords(sentence){
    let words = sentence.split(" ");

    let reverseWords = words.map(word => word.split("").reverse().join(""));

    return reverseWords.join(" ");
}

let sentence = 'Hello Words';
console.log(reverseWords(sentence));



function reverseWords(sentence) {
  let words = sentence.split(" ");

  let reverseWords = words.map((word) => word.split("").reverse().join(""));

  return reverseWords.join(" ");
}

let sentence = "I am Ayush";
console.log(reverseWords(sentence));
*/

/*
Q: 22 In an array of numbers and strings , only add those numbers which are not strings.

let array = ["1", 22, "Ayush", 2, "23"];
let sum = 0;

array.forEach((item) => {
  if (typeof item === "number") {
    sum = sum + item;
  }
});
console.log(sum);
*/

/*
Q: 23 How would you check if a number is an integer or not.


let num = 12;
console.log(typeof num);
console.log(Number.isInteger(num));
*/

/*
Q: 24 Write a Javascript function that reverse a number.

function reverseNumber(num){
    return Number(num.toString().split("").reverse().join(''))
}

let reverse = reverseNumber(12345);
console.log(reverse);
*/

/*
Q: 25 Write a javascript fuction that returns a passed string with letters in alphabetical order.

function alphabetizeString(str) {
  let chars = str.split("");
  let sortedChars = chars.sort();
  return sortedChars.join("");
}

console.log(alphabetizeString("JavaScript"));
*/

/*
Q: 26 Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.


let sentence  = "i love javascript"

const capitalizeFirstLetter = (string)=>{
    let resultArr = string.split(" ").map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1))
    })
        return (resultArr.join(" "))
}

let result = capitalizeFirstLetter(sentence);
console.log(result);
*/

/*
Q: 27 Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' element of the array. 

function getArrayElemenet(arr , n){
    if(!n){
        return arr[0]
    } else if(n > arr.length){
        return "Element is less than in an arrray"
    } else {
        return arr.slice(0 , n)
    }
}

let result = getArrayElemenet([1,2,3,4] , 5)
console.log(result);
*/

/*
Q: 28 Write a javascript function to get the number of occurnece of each letter in specified string.

function countLetterOccurence(str){
    str = str.toLowerCase();

    let count = {};

    for (let char of str){
        if(char >= 'a' && char <='z' ){
            count [char] = (count[char] || 0) + 1;
        }
    }
    return count;
}

console.log(countLetterOccurence("Hello World"))
*/

/*
Q: 29: Write a javascript program to find the most frequent item of an array. 

let str = [1, 5, 3, 4, 2, 3, 5, 2, 3, 2];

function getOccurence(array) {
  let freqObj = {};

  array.forEach((item) => {
    if (freqObj.hasOwnProperty(item)) {
      freqObj[item]++;
    } else {
      freqObj[item] = 1;
    }
  });

  let maxFreq = Math.max(...Object.values(freqObj));

  let keyvalueArr = Object.entries(freqObj);

  let filteredArray = keyvalueArr.filter((entryArr) => {
    return entryArr[1] === maxFreq;
  });

  console.log(`Most frequent item(s):`, filteredArray);
}

getOccurence(str);


*/

/*
Q: 30 Write a javascript program to shuffle an array.

// 1ST Method 
let arr = [1, 2, 3, 4, 5];

for (let ind in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let temp = arr[ind];
  arr[ind] = arr[randomIndex];
  arr[randomIndex] = temp;
}

console.log(arr);



// 2ND Method

let arr = [1, 2, 3, 4, 5];

for (let ind in arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  [arr[randomIndex], arr[ind]] = [arr[ind], arr[randomIndex]];
}
console.log(arr);

*/



