/*
class Car {
  constructor(color, brand, speed) {
    this.color = color;
    this.brand = brand;
    this.speed = speed;
  }
  shine() {
    console.log(`${this.color} is Shine..`);
  }
  dull() {
    console.log(`${this.color} is dull...`);
  }
}

let Bmw = new Car("Blue", "Bmw", "200kmph");
let Audi = new Car("White", "Audi", "220kmph");
let Mercedes = new Car("Black", "Mercedes", "250kmph");

console.log(Bmw);
console.log(Audi);
console.log(Mercedes);
*/


// FOUR PILLARS OF OOPS

// 1: ABSTRACTION : In abstraction, we hide complex implementation details and showing only the essential features to the user. 

// GOAL: Hiding Complexity and showing what is relevenat

// EG: 1

/*
class Car {
  #feul = 100; // Private

  #burnFuel(){ // Hidden Internal Method
    this.fuel = this.fuel - 10
  }

  // Add Method
  start(){
    this.#burnFuel();
    console.log("Car is Started");
  }
}

const myCar = new Car ();
myCar.start(); // Only Iteract whith Start
// myCar.#burnFuel(); Not Accessible
*/


// EG: 2
/*
class Car {
   ac = "off"

   acOn (){
    this.acOn = "on"
   }
   start(){
    this.acOn();
    console.log("AC is On")
   }
   stop(){
    this.acOn();
    console.log("AC is Off")
   }
}

let bugatti = new Car ();
bugatti.start();
console.log(bugatti)
*/


// EG: 3
/*
class Car {
  speed = 0

  speedoMeter (){
    this.speed = 100
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
Audi.stop()
console.log(Audi)
*/


