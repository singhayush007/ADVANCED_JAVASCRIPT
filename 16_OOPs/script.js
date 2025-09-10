/*
let date = new Date();
console.log(date.toLocaleDateString());
*/


/*
let obj1 = {
    name: "John",
    age: 30,
    city: "New York",

    introduceMyself: function() {
        console.log('Hello!');
    }
}

console.log(obj1);
*/


/*
let obj2 = {
    name: "Jane",  // This is a property of obj2
    age: 25,
    city: "Los Angeles",

    introduceMyself: function() { // This function is a method of obj2
        console.log(this);
    }=
}   
obj2.introduceMyself(); // Calling the method of obj2
*/

/*
let obj2 = {
    name: "Jane",  // This is a property of obj2
    age: 25,
    city: "Los Angeles",

    introduceMyself: function() { // This function is a method of obj2
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}   
obj2.introduceMyself(); // Calling the method of obj2
*/




// Diffferent ways to create and use object in JavaScript
// These are the foundations for understating OOP in JS

// 1: Object Literal or Singleton Object or Normal Object

/*
let obj2 = {
    name: "Jane",  // This is a property of obj2
    age: 25,
    city: "Los Angeles",

    introduceMyself: function() { // This function is a method of obj2
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}   
obj2.introduceMyself(); 
*/


// 2: Factory Function or Functional Object

// A factory function is a function that returns a new object each time it is called. but , doesn't involve prototype by default.(unless you manually set them)

/*
function obj2(name , age , city) {
    return {
        myName: name,
        myAge: age,
        myCity: city,

        introduceMyself: function(){
            console.log(`${this.myName}, ${this.myAge}, ${this.myCity}`)
        }
    }
}

let person1 = obj2("John", 30, "New York");
let person2 = obj2("Jane", 25, "Los Angeles");  
person1.introduceMyself(); // Output: John, 30, New York
person2.introduceMyself(); // Output: Jane, 25, Los Angeles
*/



// NOTE : WE DONT USE THIS WAY TO CREATE OBJECTS IN REAL WORLD APPLICATIONS BECAUSE OF THE FOLLOWING REASONS
// 1. Code Duplication: If we need to create multiple objects, we have to call the factory function multiple times, leading to code duplication.
// 2. Performance: Each call to the factory function creates a new object, which can be less efficient than other methods.
// 3. Inheritance: This approach does not easily support inheritance, making it harder to create complex object hierarchies.



// 3: Constructor Function 

// A constructor function is a special type of function that is used to create objects. It is defined using the `function` keyword and is typically named with a capital letter to indicate that it is a constructor.

/*
function obj2 (name , city , age ){
    this.name = name;
    this.city = city;
    this.age = age;
}

let person1 = new obj2("John", 30, "New York");
let person2 = new obj2("Jane", 25, "Los Angeles"); 
console.log(person1);
console.log(person2);
*/


// NOTE : WE DONT USE THIS WAY TO CREATE OBJECTS IN REAL WORLD APPLICATIONS BECAUSE OF THE FOLLOWING REASONS
// 1. Code Duplication: If we need to create multiple objects, we have to call the constructor function multiple times, leading to code duplication.
// 2. Performance: Each call to the constructor function creates a new object, which can be less efficient than other methods.
// 3. Inheritance: This approach does not easily support inheritance, making it harder to create complex object hierarchies.
// 4. Prototype Chain: Constructor functions create a prototype chain, which can lead to confusion
//    and unexpected behavior if not understood properly.       



/*
4: Class Syntax (ES6+)
A class is a blueprint for creating objects. It encapsulates data and behavior in a single entity.


class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    introduceMyself() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("John", 30, "New York");
let person2 = new Person("Jane", 25, "Los Angeles");


person1.introduceMyself(); // Output: Hello, my name is John and I am 30 years old.
person2.introduceMyself(); // Output: Hello, my name is Jane and I am 25 years old.
*/

