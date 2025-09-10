// Inheritance : Inheritance is an OOP concept where one class (child) can acquire properties and methods of another class (parent).

// Why Use Inheritance?

// Reuse existing Code.
// Create logical reltionship.
// Reduce duplication
// Easier maintenance and scalability.

// EG : 1

/*
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  start() {
    console.log(`${this.brand} is Starting...`);
  }

  stop() {
    console.log(`${this.brand} is Stopping`);
  }
}

class ElectricCar extends Car {
  constructor(brand , color , battery) {
    super(brand , color)
    this.battery = battery;
  }
  charging() {
    console.log(`${this.brand} is Charging..`);
  }
}

let tesla = new ElectricCar("tesla", "black" , "99%");
console.log(tesla);
tesla.start();
tesla.stop();
tesla.charging();


let obj1 = new Car ("tesla" , "black");
console.log(obj1);
*/