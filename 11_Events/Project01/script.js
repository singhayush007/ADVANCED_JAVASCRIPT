let openModalbtn = document.querySelector('.openModalbtn');
let closeModalbtn = document.querySelector('.closeModalBtn');
let button = document.querySelector('.openModalbtn');
let modalContainer = document.querySelector('.modalContainer');
let modelContent = document.querySelector('.modelContent');

button.addEventListener('click', function() {
    modalContainer.style.display = 'flex';
});

closeModalbtn.addEventListener('click', function() {
    modalContainer.style.display = 'none';
});


modalContainer.addEventListener('click', (event)=>{
    if(event.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});