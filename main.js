let addNewTask = document.getElementById('newTask');
let toDoContainer = document.getElementById('toDoContainer');
let inputItem = document.getElementById('input-item');

//creating todo paagraph
addNewTask.addEventListener('click', function(){
    let paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling')
    paragraph.innerText = inputItem.value;
    toDoContainer.appendChild(paragraph);
    inputItem.value = '';
    paragraph.addEventListener('click', function() {
           paragraph.style.textDecoration = "line-through";
    })

    //to delete todo
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    

})

