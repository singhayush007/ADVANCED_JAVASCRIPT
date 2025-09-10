/* 
console.log(document)
console.dir(document)
*/

/* 
// 1: DOM
// 2: Selection
// 3: Manipulation The HTML
*/

/* 
let a = document.getElementsByTagName('div')
console.log(a);
*/


// console.log(document.getElementById('heading'))

// console.log(document.getElementsByClassName('example'))


/* let a = document.querySelector('#subheading')
console.log(a); */


/* let a = document.querySelector('.example')
console.log(a);

let b = document.querySelectorAll('.h1')
console.log(b);

let c = document.querySelectorAll('#heading')
console.log(c); */

// Selection : 

/* 
// 1: Selection With Tag :
document.getElementByTagName("h1")

// 2: Selecting With id:
document.getElementById("id")

// 3: Selecting With Class:
document.getElementsByClassName("Class")
*/



// NODE 

// THERE ARE 3 TYPE OF NODE 
// 1: ELEMENT NODE
// 2: TEXT NODE
// 3: ELEMENT NODE



/* 8 let mainheading = document.querySelector("#mainheading");
console.log(mainheading)

console.log(mainheading.firstChild); */


// 3: How to Manipulation Of HTML
// Here We change Tag, Text , ELement , HTML , and  Attribute.


/* let h1 = document.querySelector('h1');
console.log(h1.tagName); // It only return Tag Name 
console.log(h1.nodeName); // It is return Tag Name , Text Node , Comment Node 
console.log(h1.firstChild.nodeName);


/* let h1 = document.getElementsByTagName(h1);
console.log(h1); */



/* let h1 = document.querySelector('h1');
h1.innerText = 'Hello World ! Welcome to DOM Manipulation'
console.log(h1.innerText)
console.log(h1.textContent) */





/* let h1 = document.querySelector('h1');
h1.innerHTML = 'Hello World ! Welcome to DOM Manipulation'
console.log(h1.innerHTML)
console.log(h1.firstChild) */




/* let h1 = document.querySelector('h1');
h1.innerHTML = 'Hello World ! Welcome to DOM Manipulation'
console.log(h1.tagName)
console.log(h1.nodeName)
console.log(h1.innerText)
console.log(h1.textContent) */



// Inserting Elements

/* let div = document.querySelector('div');

// Step 1: Ek <p> element create karo
let p = document.createElement('p');
p.innerText = 'Finally I am Append';

// Step 2: Us <p> element ko div me append karo
div.appendChild(p); */



/* 📌 Summary:
--> createElement() se hum naya DOM element banate hain.

--> innerText usme text dalta hai.

--> append() ya appendChild() se us element ko kisi parent me add karte hain. */



// div.append('<p>Hello World!</p>')  
// Ye string ko append kar raha hai, na ki actual <p> element ko. append() string accept karta hai, lekin woh usse HTML element nahi banata, balki as plain text dal deta hai.


/* let div = document.querySelector('div');
let elem = document.createElement('p');
elem.innerText = "I am inner Text"
div.prepend(elem);
div.appendChild(elem);
div.before(elem);
div.after(elem); */




/*let div = document.querySelector('div');
let elem = document.createElement('p');
elem.innerText = "I am inner Text";


div.insertAdjacentElement('afterbegin' , element);
div.insertAdjacentElement('afterEnd' , element); */



/* let div = document.querySelector('div');
div.insertAdjacentElement('beforeend' , elem);
let p = div.children[3];
p.remove(); */





/* let alpha = document.querySelector('#alpha');
alpha.style.backgroundColor = 'blue';
console.log(alpha);


let div = document.querySelector('div');
let elem = document.createElement('p');
elem.innerText = "I am inner Text";
let parentNode = alpha.parentNode;
parentNode.appendChild(elem);
parentNode.append(elem);
console.log(parentNode); 


let newElement = document.createElement('div');
newElement.innerText = "Hey";

parentNode.replaceChild(newElement , alpha); */





/* 
let div = document.querySelector('div');
let elem = document.createElement('p');
elem.innerText = 'New Paragraph';

parentNode.replaceChild(newElem , aplha);
parentNode.removeChild(newElem);
parentNode.insertBefore(newElem);

let childrens = div.children[2];
*/



/*
let div = document.querySelector('div');           // 1. page ke first <div> ko select kiya
let elem = document.createElement('p');            // 2. ek naya <p> element banaya
elem.innerText = 'New Paragraph';                  // 3. usme text daala
let lastPara = div.children[2];                    // 4. div ke 3rd child ko target kiya (0-based index)
div.insertBefore(elem, lastPara);                  // 5. naya <p> uske pehle insert kar diya

*/


// ATTRIBUTES IN JAVASCRIPT

// getAttribute(attr): To get an attribute.
// setAttribute(attr , value): To set the attribute value.

// Example: 

/* 
let div = document.querySelector('.box');
console.log(div);
console.log(div.attributes);
console.log(div.getAttribute('class'));
console.log(div.attributes.class);
console.log(div.attributes.class.value);
console.log(div.attributes['class'].value);
console.log(div.getAttribute('class'));
div.setAttribute('class' , 'random');
console.log(div.attributes.class.value);
console.log(div.attributes.class.nodeValue);

let classValue = div.getAttribute('class')
console.log(classValue)

div.setAttribute('class' , `${classValue}random `);
console.log(div.attributes.class.value);
*/






