/*
let firstButton = document.querySelector('.firstBtn');

let showConsole = function () {
    console.log("hello")
}
firstButton.addEventListener('click' , function (event){
    console.log(event.type)
})
*/


// Event:


// 1: MOUSE UP , MOUSE DOWN 

/*
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

firstButton.addEventListener('mousedown' , function(){
     console.log('Mouse Down')
})

firstButton.addEventListener('mouseup' , function(){
    console.log('Mouse Up')
})
    */

// 2: MOUSE ENTER , MOUSE LEAVE

/*
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

box.addEventListener('mouseenter' , ()=>{
    console.log("Mouse Enter Done")
})

box.addEventListener('mouseleave' , ()=>{
    console.log('Mouse Leave Done')
})
*/

// 3: MOUSE MOVE  
/* 
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

box.addEventListener('mousemove' , ()=>{
    console.log("Mouse Move Done")
})
*/

// 4: CONTEXT MENU
/*
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

box.addEventListener('contextmenu' , ()=>{
    console.log("Context Menu Done")
})
*/

// 5: AUX CLICK

/*
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

box.addEventListener('auxclick' , ()=>{
    console.log("Aux Click Done")
})
*/

// 6: KEY PRESS , KEY UP , KEY DOWN 

/*
let firstButton = document.querySelector('.firstBtn');

let box = document.querySelector('.box');

box.addEventListener('keypress' , ()=>{
    console.log("Key Press Done")
})

box.addEventListener('keypup' , ()=>{
    console.log("Key UP Done")
})

box.addEventListener('keydown' , ()=>{
    console.log("Key Down Done")
})
*/

// 7: SUBMIT
/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let  submitBtn= document.querySelector('.submitBtn')


form.addEventListener('submit' , function(e){
    e.preventDefault();
    console.log('Submit Done')
});
*/


// 8: FOCUS , BLUR
/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let  submitBtn= document.querySelector('.submitBtn')

nameInput.addEventListener('focus' , ()=>{
    console.log("Focus is Applied")

nameInput.addEventListener('blur' , ()=>{
console.log("Blur is Applied")
})
*/


// 9 : INPUT 

/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let  submitBtn= document.querySelector('.submitBtn')

nameInput.addEventListener('input' , ()=>{
    console.log(nameInput.value)
});
*/

// 10: CHANGE
/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let  submitBtn= document.querySelector('.submitBtn')

nameInput.addEventListener('change' , ()=>{
    console.log(nameInput.value)
});
*/



// 11: TOUCH MOVE
/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let  submitBtn= document.querySelector('.submitBtn')


box.addEventListener('touchmove' , ()=>{
    console.log("Mobile Screen Touch Done")
});
*/


// 12: WINDOW EVENT


/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let submitBtn= document.querySelector('.submitBtn')


window.addEventListener('scroll' , ()=>{
    console.log("Scroll Done")
});
*/

// 13: RESIZE

/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let submitBtn= document.querySelector('.submitBtn')


window.addEventListener('resize' , ()=>{
    console.log("Resize Done")
});
*/

// 14: COPY

/*
let firstButton = document.querySelector('.firstBtn');
let box = document.querySelector('.box');
let nameInput = document.querySelector('.name');
let form = document.querySelector('form');
let submitBtn= document.querySelector('.submitBtn')
let h1 = document.querySelector('.h1')



h1.addEventListener('copy' , ()=>{
    console.log("Copy Done")
})

h1.addEventListener('copy' , ()=>{
    console.log(window.getSelection().toString())
})
*/




