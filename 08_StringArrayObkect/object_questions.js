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

/* 
Q : 3 Write a function that takes object and returns the number of properties in an object.


let obj = {
    firstName: "Ayush",
    middleName: "Pratap",
    lastName: "Singh"
};

function countProperties(param) {
    return Object.keys(param).length;
}

let numberOfProperties = countProperties(obj);
console.log(`Number of properties: ${numberOfProperties}`);
*/

/* 
Q: 4 Wriet a function tht returns an array of names of users who have the role "admin".

let arr = [
    {name : "Alice" , role: "admin"},
    {name : "Bob" , role : "user"},
    { name : "Charlie" , role: "admin"}
]; 

function filterArray(arr){
    let filteredItem = arr.filter((item)=>{
        return item.role === "admin"
    })
    return filteredItem.map(item=> item.name)
}


console.log(filterArray(arr));
*/

/*
Q: 5 Write a function search Products (products , keyword) that returns an array of products whose name includes the given keyword (case-insensitive).

const products = [
 {id: 1, name: "Iphone 14"},
 {id: 2, name: "Samsung Galaxy"},
 {id: 3, name: "Google Pixel"}
];


let products = [
    { id: 1, name: "Iphone 14" },
    { id: 2, name: "Samsung Galaxy" },
    { id: 3, name: "Google Pixel" }
];

function search(products , searchKeyword){
    let filteredArray = products.filter(obj=>{
        return obj.name.toLowerCase().includes(searchKeyword.toLowerCase())
    })
    return filteredArray
}
*/

/*
Q: 6 Write a function groupByPost(comments) that returns an object grouping comments by postId.

const comments = [
 {postId: 1, text: "Great Post!"},
 {postId: 2, text: "Thanks!"},
 {postId: 1, text: "Very helpful"}
];


{
1: ['Great Post!', 'Very helpful'],
2: ['Thanks!']
}

let comments = [
  { postId: 1, comment: "hello" },
  { postId: 2, comment: "hi" },
  { postId: 1, comment: "greetings" },
  { postId: 3, comment: "good morning" },
  { postId: 2, comment: "good evening" }
];

function groupByPost(comments) {
  let groupedComments = {};

  comments.forEach((obj) => {
    if (groupedComments.hasOwnProperty(obj.postId)) {
      groupedComments[obj.postId].push(obj.comment);
    } else {
      groupedComments[obj.postId] = [obj.comment];
    }
  });

  return groupedComments;
}

let result = groupByPost(comments);
console.log(result);
*/

/*
Q: 7 Write a function buildQuery(params) that returns
const params = {search : "Laptop" , page: 2, sort: "price"};
Output: "search=Laptop&page=2&sort=price"


let params = {search : "Laptop" , page: 2, sort: "price", falna: "aldsjf"};

function createUrl(params){
    let url = "";
    for(let key in params){
        url = url + `${key}=${params[key]}&`
    }
    let finalUrl = url.slice(0 , url.length - 1)
    return finalUrl
}

let url = createUrl(params)
console.log(url);
*/
