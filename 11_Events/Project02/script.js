let listContainer = document.querySelector('.listContainer');

listContainer.addEventListener('click', function(event) {
    if(event.target.classList.contains('listItem')){
        event.target.style.textDecoration = 'line-through'; 
    }
});