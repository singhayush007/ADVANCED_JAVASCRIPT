/*
function Student(name , age){
    this.name = name;
    this.age = age;
}

let student1 = new Student("Ayush", 20);
*/




/*
function Student (name , age){
    this.name = name;
    this.age = age;
    this.introduceMyself = function(){
        console.log(`My name is ${this.name}, age is ${this.age}`);
    }
}

let person1 = new Student("Ayush", 20);
console.log(person1);
person1.introduceMyself();
let person2 = new Student("Rohan", 22);
console.log(person2);
person2.introduceMyself();
*/


// Prototype in JavaScript
// In JavScript OOP, it allows us to share methods betweeb all instances of a class or constructor function, making code momory efficient and easier to maintain.

// Javascript is a prototype-based language, meaning that objects can inherit properties and methods from other objects. This is done through the prototype chain.

// How it Works:
// Every object has an internal link to another object called its prototype.

// When you try to access a property or method on an object , javascript looks for it in the object. If not found , it climbs the prototype chain to find it.


// So , what about class in JS?

// Javascript introduces the class keyword in ES6, but: class is just syntactic Sugar - underneath , it still uses prototypes.


/*
function BankAccount(holderName , balance = 0){
    this.holderName = holderName;
    this.balance = balance;
    this.deposit = function(balance){
        console.log("Deposit: " , balance)
    }
    // this.deposit = function(amount){
    //     this.balance = this.balance + amount;
    // }
    // this.withdraw = function(amount){
    //     this.balance = this.balance - amount;
    // };
}

BankAccount.prototype.deposit = function(amount){
    this.balance = this.balance + amount;
};

BankAccount.prototype.withdraw = function(amount){
    this.balance = this.balance - amount;
};

console.log(BankAccount.prototype);
let ayushAccount1 = new BankAccount("Ayush", 1000);
console.log(ayushAccount1);

*/

