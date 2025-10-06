// Q: 1 Write a program to take full name from user and generate a username start with @ , followed by their full name and ends with underscore followed by the length of fulll name.

/* let fullName = prompt("Enter Your Full Name");
let username = `@${fullName.trim().replaceAll(" ", "")}_${fullName.length}`
console.log(username) */

// Q: 2 Take a string and a character from the user and :
// a) Count how many times that the character appears in the string.
// b) Case-insesitive Versions
// ) Find all occurence Positions

/* let str = prompt('Enter any string');
let ch = prompt('Enter any character');

let count = 0;
for (let val of str){
    if (val.toLocaleLowerCase() === ch.toLocaleLowerCase()){
        count++
    }
}
console.log(count)

let count = 0;
for(let index in str){
    if(str[index].toLocaleLowerCase() === ch.toLocaleLowerCase()){
        console.log("Occurence position:" , index)
        count++;
    }
    console.log("count: = " , count)
} */

// Q: 3 Count the words present in a given string.

/* let str = "Hi I am a boy"
console.log(str.split("").length) */
