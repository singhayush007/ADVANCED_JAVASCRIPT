// QUESTIONS ON HTML MANIPULATION:

// Q: 1: Create a paragraph with text "I Love JavaScript" and add background color to black and font color to green using Javascript.

/* 
let p = document.createElement('p');
p.innerText = "I Love JavaScript";
p.style.backgroundColor = 'black';
p.style.color = 'Green';
let body = document.querySelector('body')
body.append(p);
console.log(p);
*/
// Q: 2: Insert a button with text "click me" as the first element inside the paragraph created in 1st Question.

/*
let p = document.createElement('p');
p.innerText = "I Love JavaScript";
p.setAttribute('style' , 'background-color: black; color: green')

let body = document.querySelector('body')
body.append(p);

let button = document.createElement('button');
button.innerText = "click me";
p.prepend(button);
*/

// 3: Create a <div></div>. tag in html and give it a class and some styling . Now create a new class in CSS and try to append this class to <div></div> element.

/*
let div = document.querySelector('.box');
div.setAttribute('class',`${div.getAttribute('class')} box2`);
console.log(div.getAttribute('class'));
*/

// Q: 4 Create a function that takes node and newTagName and replace the node from the new node with changes tag name in the DOM.

/* function changeTagName(oldNode , newTagName){
    if (oldNode instanceof Element) { // Kya valid HTML element hai?


        // Agar hai valid HTML Element toh ye karo 


        // Naya element banao (newTagName jaise "p", "section", etc.)
        let p = document.createElement(newTagName);

        // Purane node ka inner text naya element me daal do
        p.innerHTML = oldNode.innerText;

        // Sare attributes (id, class, style, etc.) naya element me copy karo
        for(let attr of oldNode.attributes){
            p.setAttribute(attr.name , attr.value)
        }

        // Purane element ko naye se replace kar do DOM me
        oldNode.replaceWith(p);


        // Agar nahi hai valid HTML Element toh ye karo.
    } else {
        console.log("Invalid Node")
    }
}
let div = document.querySelector('.box');  // .box wala pehla element lo

changeTagName(div, 'p');  // Usko <p> tag se replace kar do
*/

// QUESTIONS ON CSS MANIPULATION:

// Q: 1 Create a simple website with theme changing functionality.

/* let button = document.querySelector('button');
let body = document.querySelector('body');

let theme = 'light'
button.addEventListener('click', ()=>{
    if(theme === 'light'){
    body.style.backgroundColor = "black"
    body.style.color = 'white'
    theme = 'black'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        theme = 'light'
    }
}) */

// Q: 2 Solve First Question by changing CSS Class.

/*
let button = document.querySelector('button')
let body = document.querySelector('body');

button.addEventListener('click' , ()=>{
    if(body.className === 'light'){
        body.className = 'dark'
    } else {
        body.className = 'light'
    }
})
*/

// Q: 3 Solve the first question by Toggle CSS class.

/*
let button = document.querySelector('button')
let body = document.querySelector('body');

button.addEventListener('click', () =>{
    body.classList.toggle('dark);
}) */

// QUESTION ON EVENT LISTENER

// Q: 1 Build an increment and decrement counter similar to what you see in the shoppping cart on Amazon or Flipkart.

/*
let decBtn = document.querySelector('.decBtn')
let incBtn = document.querySelector('.incBtn')
let counterValue = document.querySelector('.counterValue')

decBtn.addEventListener('click' , () => {
   let value = Number (counterValue.innerText)
   if(value <= 1){
    return;
   }
   counterValue.innerText = value - 1
})

incBtn.addEventListener('click' , ()=>{
    let value = Number (counterValue.innerText);
    counterValue.innerText = value + 1
})
*/

// Q: 2 Create a simple form and display the submitted details on the webpage. Ensure that if any filed is left empty, the form should not be submitted.


/*
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let form = document.querySelector("form");
let body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 
  if (!nameInput.value || !emailInput.value) {
    alert("Please fill all the details.");
    return;
  }

  let div = document.createElement('div');
  div.innerHTML = `
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
  `;

  body.append(div);

 
  nameInput.value = '';
  emailInput.value = '';
});
*/