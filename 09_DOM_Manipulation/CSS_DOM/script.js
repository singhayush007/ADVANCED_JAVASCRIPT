let div = document.querySelector ('div');
// div.setAttribute ("class" , "redBg")


div.style.backgroundColor = 'blue'
div.style.fontSize = '60'

// div.style.cssText = 'background-color: red; , fontSize: 60px'

/* console.log(div.className);
div.className = 'redBg'
div.className = 'blueBg'
console.log(div.className)*/


div.classList.add('redBg')
div.classList.add('blueBg');

div.classList.remove('blueBg')

let isAvailable = div.classList.contains('redBg')
console.log(isAvailable);

div.classList.toggle('blueBg')
console.log(div.className)