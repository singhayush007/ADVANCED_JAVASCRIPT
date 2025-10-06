/*
Event Delegation ek technique hai jisme child elements ke events ko unke parent element par handle kiya jaata hai.
Yaani:
Instead of har ek .box par click event lagane ke, hum ek hi event listener parent .container pe lagate hain, aur check karte hain ki click hua exactly kis box pe.

*/



let container = document.querySelector(".container")
let box = document.querySelector(".box")


/*
container.childNodes.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
        console.log(elem.innerText)
    })
}
*/


/*
container.addEventListener('click' , function(event){
    if(event.target.classList.contains('box')){
        console.log("event.target.textContent")
    }
})
*/

/*
container.addEventListener('click' , function(event){
    let targetElem = event.target;
    if(targetElem.className === 'box'){
        console.log(targetElem.textContent)
    }
})
*/

 

