// 2: ENCAPSULATION : In Encapsulation we provide security or privacy  on that method (functions) which is not in used and only show that method (functions) which is in use. or we can say, we wrapping data(properties) and methods (functions) together into a single unit, usually a class or an object and restricting direct access to some of the components.

// WHY ENCAPSULATION ?

// Protects data from unauthorised access .
// Prevents misuse of Code.
// Makes code easier to maintain.
// Supports data Hiding


// GOAL : Hide internal details and only expose what's necessary.


// EG : 1

/*
class Car {
  #speed = 0

  speedoMeter (){
    this.#speed = 100
  }

  start(){
    this.speedoMeter()
    console.log("Speed is 100")
  }

  stop(){
    this.speedoMeter()
    console.log("Speed is 0")
  }
}


let Audi = new Car()
Audi.start();
Audi.stop();
console.log(Audi)
*/

// EG:2
/* class BankAccount{

  #balance = 100;
  constructor(holderName , balance = 100){
    this.holderName = holderName;
    this.#balance = balance;
  }
  deposit(balance){
    this.#balance = this.#balance + balance;
  }
  setBalance(balance){
    console.log("Balance Set Successfully")
    this.#balance = balance;
  }
  getBalance (){
    return this.#balance;
  }
}

let ayushAcc = new BankAccount ("Ayush Singh" , 500)
ayushAcc.deposit(500);
console.log(ayushAcc);
// ayushAcc.#balance = 1000; 
// console.log(ayushAcc.#balance;

ayushAcc.setBalance(500)
console.log(ayushAcc.getBalance())

*/

// EG: 3

/*
class Account {
  #balance = 0;
  constructor(balance){
   this.#balance = balance;
  }
  #privateDetails(){
    console.log("My Private Details")
  }
  getBalance(){
    this.#privateDetails()
    console.log(this.#balance)
  }
  setBalance(balance){
    this.#balance = balance
  }
}

let A1 = new Account(400);
A1.#balance = 99;
A1.setBalance(10000);
A1.#privateDetails();
A1.getBalance();
*/

// GET & SET

// EG: 1
/*
class Account {
   #balance = 0;
   constructor (balance){
     this.#balance = balance;
   }
   get balance (){
    console.log(this.#balance)
   }
  set balance(balance){
    if(isNaN(balance)){
      console.log("Please Enter a valid Number")
    } else {
      this.#balance = balance
    }
  }
}

let A1 = new Account(0);
A1.balance = '55';
A1.balance ();
*/
// They Allow you to control how a property is read or written - Like a secuurity gate for your variables.

// You can check values before setting them.

// Hide sensitive data

// Access methods like regular properties(obj.name)


// ABSTRACTION VS ENCAPSULATION

// Abstraction  hide the process or logic and encapulation hide the data which is not in use.
// Abstraction show only a simple interface and encapsulation show only what allowed to access.


// USE CASES: 

// Use abstraction to make system easy to use .
// Use encapsulation to make system safe and secure.

