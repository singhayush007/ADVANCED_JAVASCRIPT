/* let firstButton = document.querySelector('.firstBtn');



firstButton.onclick = ()=>{
    console.log("I am an Event Handler of single click by Property Method")
}

firstButton.onclick = ()=>{
    console.log("I am an Event Handler of single click by Property Method")
}


firstButton.addEventListener('click' , ()=>{
    console.log("I am an event Listener")
})


firstButton.addEventListener('click' , ()=>{
    console.log("I am an second event Listener")
}) 
*/



/*
// ADD EVENT
let firstButton = document.querySelector('.firstBtn');


firstButton.addEventListener('click' , function(){
    console.log("Hello")
})
*/


/*
// REMOVE EVENT : 

// Here Event Listener is remove : 
let firstButton = document.querySelector('.firstBtn');

let showConsole = function (){
    console.log("hello")
}

firstButton.addEventListener('click' , showConsole);

firstButton.removeEventListener('click' , showConsole);

*/





// Here Event Listener is not remove even when we pass same function:
/*
let firstButton = document.querySelector('.firstBtn');

let showConsole = function (){
    console.log("hello")
}

firstButton.addEventListener('click' , function (){
    console.log("hello")
})

firstButton.removeEventListener('click' , showConsole);



// In this Example : 

📌 Issue:

1) : addEventListener me anonymous function diya hai (ek naya function).

2) : removeEventListener me alag named function diya hai (showConsole), jo kabhi add hi nahi hua.

3) : Isliye removeEventListener kaam nahi karega.


*/


// HOW TOT REMOVE EVENT LISTENERS:

// --> If you want to propery add and then remove an event listener , you must:
// 1: Use addEventListener()
// 2: Use a named function , not an anonymous arrow functions.

/*
let random = () =>{
    console.log("alpha")
}

div.addEventListener('click' , random)

div.removeEventListener('click' , random)
*/






