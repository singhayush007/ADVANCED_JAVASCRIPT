// Definition:
// A string is a sequence of characters (letters, numbers, or symbols) 
// enclosed in single (' '), double (" "), or backtick (` `) quotes.
// It is Unmutable , we can't change String.

/* let str1 = "Ayush"
let str2 = 'Ayush'
let str3 = `Ayush`
let str4 = "Ayush" + 23


console.log(str1 , typeof str1)
console.log(str2 , typeof str2)
console.log(str3 , typeof str3)
console.log(str4 , typeof str4)
*/

/* let firstName = "Ayush"
let middleName = "Singh"
let lastName = "Rajput"


let fullName1 = firstName + " "+ middleName + " "+ lastName
console.log(fullName1)

let fullName2 = `${firstName}  ${middleName}  ${lastName}`
console.log(fullName2) */

/* let a = 11;
let b = 22;
let c = 33

let str = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`
console.log(str) */


/*let str  = new String  ("Ayush")
console.log(str)*/


/*str = 'Hello\n How\n Are\n You.';
console.log(str)*/


/* str1 = "AyushSingh"
str2 = "Ayush\nSingh"

console.log(str1 , str1.length)
console.log(str2 , str2.length) */

/*str1 = "School4u"
str2 = 'School\n4u'
str3 = `Hello \\n beta`

console.log(str1 , str1.length)
console.log(str2 , str2.length)
console.log(str3 , str3.length)*/


/*
str = "Hello World"
console.log(str[1]) 
*/


// For of Loops
/* str = "Ayush Singh"
for(let ch of str){
    console.log(ch)
}

// For in Loops
for(let key in str){
    console.log(key)
} */



 
// String is Immutable.
/* let str = "Hello World!"

let str2 = " ";

for (let ch of str){
    str2 = str2 + ch + " ";
}


console.log(str2)*/


// Strings Methods 


/* let str = "Ayush";

let strcopy = str.toUpperCase();
console.log(strcopy)*/



/* let str ="Hello"
console.log(str.toUpperCase()) */

/* let str = "Ayush Singh"
console.log(str.toLowerCase())*/



/* let str = "    AyushSingh  "
let trimmedStr = str.trim()
console.log(trimmedStr); */


/* let FirstName = "manas"
let MiddleName = "Kumar"
let LastName = "lal"

let fullName = FirstName + MiddleName + LastName
console.log(fullName)

let fullName2 = FirstName.concat(MiddleName, LastName)
console.log(fullName2) */


/* let str = 'I am boy'
let check = str.includes('boy');
console.log(check) */

/* let str = "Ayush Singh"
console.log(str.indexOf("s"))*/

/* let str = "Ayush Singh"
console.log(str.charAt(2))*/


/* let str = "I am a boy"
console.log(str.replace("boy" , "male"))*/

/* let str = "I am an alpha male"
console.log(str.slice(8 , 13))
console.log(str.slice(-8, 13))*/


/* let str = "Ayush Singh is an alpha male "
console.log(str.substring(-8 , 11))*/

/* let str = "Ayush Singh is an alpha male."
console.log(str.split(" "))*/
