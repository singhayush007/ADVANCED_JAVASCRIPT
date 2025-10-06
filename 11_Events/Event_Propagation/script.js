let grandParent = document.querySelector('.grand-parent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');


/*
grandParent.addEventListener('click' , function(){
    alert("Click Event Done on Grand-Parent")
}, true)

grandParent.addEventListener('click' , function(){
    alert("Click Event Done on Grand-Parent")
}, false)

parent.addEventListener('click' , function(){
    alert("Click Event Done on Parent")
}, true)

parent.addEventListener('click' , function(){
    alert("Click Event Done on Parent")
}, false)

child.addEventListener('click', function(){
    alert("Click Event Done On Child")
}, true)

child.addEventListener('click', function(){
    alert("Click Event Done On Child")
}, false) 
*/



// "EVENT.CURRENTTARGET"
/*
grandParent.addEventListener('click', function(eventTarget){
    console.log("GRAND PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

child.addEventListener('click' , function(eventTarget){
    console.log("CHILD")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})
*/

// "THIS"
/*
parent.addEventListener('click' , function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
    console.log(this)
})
*/

// "EVENT.STOPPROPAGATION()"

/*
grandParent.addEventListener('click', function(eventTarget){
    console.log("GRAND PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

child.addEventListener('click' , function(eventTarget){
    console.log("CHILD")
    console.log(eventTarget)
    console.log(event.currentTarget)
    event.stopPropagation()
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})
*/

//"CAPTURE"
/*
grandParent.addEventListener('click', function(eventTarget){
    console.log("GRAND PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

child.addEventListener('click' , function(eventTarget){
    console.log("CHILD")
    console.log(eventTarget)
    console.log(event.currentTarget)
}, {capture: true})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})
*/


// "STOP IMMEDIATE EVENT PROPAGATION"

/*
grandParent.addEventListener('click', function(eventTarget){
    console.log("GRAND PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})

child.addEventListener('click' , function(eventTarget){
    console.log("CHILD")
    console.log(eventTarget)
    console.log(event.currentTarget)
    event.stopImmediatePropagation()
}, {capture: true})

parent.addEventListener('click', function(eventTarget){
    console.log("PARENT")
    console.log(eventTarget)
    console.log(event.currentTarget)
})
*/

