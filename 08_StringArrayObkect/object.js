// Definition:
// An object is a data structure that stores data in the form of key-value pairs. 
// It is used to represent real-world entities with properties and values.
// It is Mutable , we can change Object.

/* let car = {
    brand : 'RollsRoyce',
    color: 'Black',
    maxSpeed: 220,
    stop: ()=>{
        console.log("Stopping the car..")
    },
    start: function(){
        console.log('Starting the car...')
    }
}
console.log(car); 
console.log(car.brand)
car.start()
car.stop()
console.log(car["brand"]) */




// Here brand , color , maxSpeed is Properties because ye kuch property ko bata rha hai .
// Stop function ,  Start function is here not a function anymore because ye kisi object k andr use ho rha hai , so ye method kehlaaega.
// Koi bhi function specifically agr  object me use hoga toh wo method kehlaaega , hota function hai but kehte method hai.



// Object Constructor: 

/* let obj = new Object ({
    name : "Ayush"
});


obj.age = 23
console.log(obj); */


// Object Literals

/* let obj2 = {
    name : 'Ayush'
};
obj2.age = 23
console.log(obj2); */


/* let obj3 = {
    "*" : 'Star',
};

console.log(obj3) */


/* let obj = {
    name : "alpha",
    greet: function(){
        console.log(`Hello i am an ${this.name}`)
    }
}
obj.greet(); */



// Objects Methods

// 1: Object.keys()

/* let obj = {
    name: 'Ayush',
    age : 23,
}

console.log(Object.keys(obj)); */

// 2: Object.values()

/* let obj = {
    name: 'Ayush',
    age : 23,
}

console.log(Object.values(obj)); */


// For of loop is not use for iterable.
// Here For of loop is throw error when we try to access key because it is not iterable.
/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
}

for( let test of obj ){
    console.log(test)
}
*/

// Here we can use For in loop which is not throw error , it is iterable . It give us key. 

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
}

for( let test in obj){
    console.log(test)
} */

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
}

for (let test in obj){
    console.log(obj[test])
} */

// 3: Object.entries

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
}

console.log(Object.entries(obj)); */

// 4: Object.assign(target, source)

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
};


let obj2 = {};
Object.assign(obj2 , obj);
console.log(obj2); */



// Same things we can aachieve by Spread Operator.

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
};
let obj2 = {...obj}
console.log(obj2) */


// 5: Object.freeze

// Freeze object ko completely immutable (unchangeable) bana deta hai:

// ❌ You cannot add new properties

// ❌ You cannot delete existing properties

// ❌ You cannot modify existing values

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
};

console.log(Object.freeze(obj));

obj.city = "Delhi"

console.log(obj);*/


// 6: Object.seal

// Seal object ko partially lock karta hai:

// ✅ You can modify existing values

// ❌ You cannot add new properties

// ❌ You cannot delete properties


/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
}; 

console.log(Object.seal(obj));

obj.age = 24;

console.log(Object.seal(obj)); */


// 7: ObjName.hasOwnProperty(key)

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
};

console.log(obj.hasOwnProperty("city")); */


// Destructuring in Objects

/* let obj = {
    name : "Ayush",
    age : 23,
    gender: "Male"
};

let {name , age} = obj;
console.log(name , age); */

// Destructuring in an Array.

/* let arr = [ "Ayush" , 23 , {city : "Delhi"}];

let [item1 , item2, item3] = arr;
console.log(item1 , item2, item3); */




