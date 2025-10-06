// PROMISES: A promise is a special type of object in javascript that represent a task that will finish in the future.

/*
let promise = new promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Phone delievered successfulyy...!!");
  }, 2000);
});

promise.then((result) => console.log(result));
promise.catch((error) => console.log("error"));
*/

// A promise has 3 States :

// 1: Pending - Still Waiting.
// 2: Reolved - (fullfilled) - Taks Completed.
// 3: Rejected - Something went Wrong.

/*
let p1 = new Promise((resolve , reject)=>{
       console.log("This is Promise...")
});

console.log(p1);
*/

/*
// Resolve:
let p1 = new Promise((resolve , reject)=>{
    resolve("Data Fetched Successfully...")
}, 2000)
console.log(p1);


// Reject
let p2 = new Promise((resolve , reject)=>{
    reject("Data does not Fetched...")
}, 2000)

console.log(p2);
*/

/*
let p1 = new Promise ((resolve , reject)=>{
         console.log("This is a Promise")
        //  resolve({
        //     name : "Ayush Singh"
        //  })
         reject('Something Went Wrong...')
})

p1.then((data)=>{
    console.log(data);
})

p1.catch((err)=>{
    console.log(err);
})
*/

// For Handling error We use this:
/*
p1.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
*/

/*
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Ayush Singh",
    });
  }, 3000);
});

p1.then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err);
});
*/

function fetchData() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        {
          name: "Ayush Singh",
        },
        3000
      );
    });
  });
}

let result = fetchData();

result
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Something Went Wrogn", err);
  });

/*
  console.log("Fetching Data...")
  fetchData()
  .then((data)=>{
    console.log("Data is Coming..." , data);
    return fetchData2()
  })
  .then((data)=>{
    console.log("Data 2 is Coming..." , data)
    return fetchData2()
  })
  .then((data)=>{
    console.log("Fianl Data3 is coming..." , data)
  })
  .catch((err)=>{
    console.log(err)
  })

 */






/*
let response = fetch("https://jsonplaceholder.typicode.com/users");
response
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
*/


