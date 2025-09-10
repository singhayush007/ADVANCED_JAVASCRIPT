

// 5 PHASE OR PILLARS OF DOM MANUPULATION


// 1: DOM

//console.log("Hello JavaScript");

// 2: Selection of HTML Elements.


/* let a = document.querySelector('h1')
console.log(a);

let b = document.querySelector('h1')
console.log(h1) */



// 3: How to change or manipulate HTML.

/* let h1 = document.querySelector('h1');
h1.innerHTML = 'Welcome to JavaScript';

let p = document.querySelector('p');
p.innerHTML = "DOM Manipulation World" */



// 4: How to Chnage or Manipulate CSS .

/* let a = document.querySelector('h1');
a.style.backgroundColor = 'rgba(0 , 255, 0)'
a.style.color = 'black'


let b = document.querySelector('p');
b.style.backgroundColor = 'rgba(0 , 255, 0)'
b.style.color = 'black' */





// 5: Event Listeners (Event ko kaise suna jaaye).


/* let h1 = document.querySelector('h1');
h1.addEventListener('click' , ()=>{
    h1.style.backgroundColor = 'green'
    h1.style.color = 'yellow'
    h1.innerHTML = 'Hello JavaScript'
}); */



let box = document.querySelector('p');

let button = document.querySelector('button')
let offbutton = document.querySelector('.offButton')
button.addEventListener('click' , ()=>{
   box.style.scale = "1"
})

offbutton.addEventListener('click', ()=>{
    box.style.scale = "0.5"
});




// WINDOW OBJECT :






