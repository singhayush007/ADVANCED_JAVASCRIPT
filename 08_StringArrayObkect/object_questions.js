// Q: 1 Create a person object with properties: name , age and city. Then
// a) Log each property as: value of "name" property is "manas" using loop.
// b) Add a new property called email to the person object.
// c) Delete "city" property from person object.

/* let person = {
    name : "Ayush",
    age : 23,
    city : "Delhi"
}

for (let  key in  person){
    console.log(`Value of ${key} is ${person[key]}`)
};


person.email = "ayushsingh@gmail.com";

for (let  key in  person){
    console.log(`Value of ${key} is ${person[key]}`)
};


delete person.city
for (let  key in  person){
    console.log(`Value of ${key} is ${person[key]}`)
}; */




// Q: 2 Create a function that takes an object with firstName , middleNmae , lastName properties and returns the full name.

/* let obj = {
    firstName: "Ayush",
    middleName : "Pratap",
    lastName : "Singh"
}

let convertToFullName = (param)=> {
    return `${param.firstName} ${param.middleName} ${param.lastName}`
} 


let fullName = convertToFullName(obj)
console.log(fullName); */

// Destructuring Way : 

/* let obj = {
    firstName: "Ayush",
    middleName : "Pratap",
    lastName : "Singh"
}

let convertToFullName = ({ firstName, middleName, lastName }) => {
    return `${firstName} ${middleName} ${lastName}`;
};

let fullName = convertToFullName(obj);
console.log(fullName); */


// Q : 3 Write a function that takes object and returns the number of properties in an object.


let ojb = {
    irstName: "Ayush",
    middleName : "Pratap",
    lastName : "Singh"
}

let proper



// Q: 4 Wriet a function tht returns an array of names of users who have the role "admin".

/* const users = [
    {name : "Alice" , role: "admin"},
    {name : "Bob" , role : "user"},
    { name : "Charlie" , role: "admin"}
]; */



