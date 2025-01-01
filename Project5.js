const inputTask =document.querySelector("#input-task");
const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");


// Event Listener for the add Button;
if(!localStorage.getItem('todos')){
    localStorage.setItem(saveTodos());
}
let todos = getTodos();
updateTodos();
addTask.addEventListener("click", function(){
    addTodo();
})

function addTodo(){
    if(inputTask.value === ''){
        alert('Please enter todo');
    }

    else{
        let todoObj = {
            text: inputTask.value,
            completed: false
        }
        todos.push(todoObj);
        updateTodos();
        saveTodos();
        
    }

    inputTask.value = '';
}

function updateTodos(){
    taskContainer.innerHTML = '';
    todos.forEach( (todo, todoIndex) => {
        todoItem = createTodo(todo, todoIndex);
        taskContainer.appendChild(todoItem);
        
        
    })

   
}


function createTodo(todo, todoIndex){
    let todoId = "todo-" + todoIndex;
    let todoContainer = document.createElement('div');
    todoContainer.className = 'todo-container';
    todoContainer.innerHTML = `
    <input type = "checkbox" id="${todoId}" > 
    <label class ="custom-checkbox" for="${todoId}" > 
        <svg fill = "transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>    
    </label>
    <label  class ='todoText' id ="${todoId}">${todo.text}</label>
    <button id = 'edit-btn' class = 'btn'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
    </button>
    <button id='delete-btn' class = 'btn' >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
    </button>
    `
    
    let deleteBtn= todoContainer.querySelector('#delete-btn');
    let checkbox = todoContainer.querySelector('input');
    let editBtn = todoContainer.querySelector("#edit-btn");
    console.log(editBtn);

    checkbox.addEventListener('change', ()=>{
        todos[todoIndex].completed = checkbox.checked;
        saveTodos(); 
    } )

    checkbox.checked = todos[todoIndex].completed;

    deleteBtn.addEventListener('click', () => {
        deleteTodo(todoIndex);
       
    })

    editBtn.addEventListener('click', () => {
        todoContainer.innerHTML = `
        <input type = 'text' id = ${todoId}  class = 'input' spellcheck = 'false' placeholder = 'edit todo' value = ${todo.text}>
        <button id='save-btn' class = 'btn' >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/></svg>
        </button>`

        let editBox = todoContainer.querySelector('.input');
        let saveBtn  = todoContainer.querySelector('#save-btn');
        saveBtn.onclick = function() {
            todos[todoIndex].text = editBox.value;
            updateTodos();
            saveTodos();
            

            todoContainer.innerHTML = `
            <input type = "checkbox" id="${todoId}" > 
            <label class ="custom-checkbox" for="${todoId}" > 
                <svg fill = "transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>    
            </label>
            <label  class ='todoText' id ="${todoId}">${todo.text}</label>
            <button id = 'edit-btn' class = 'btn'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>
            </button>
            <button id='delete-btn' class = 'btn' >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </button>
            `
        }

    })
        ;
    return todoContainer;
}

function deleteTodo(todoIndex){ 
    todos = todos.filter( (_, i) => i!== todoIndex )
    saveTodos();
    updateTodos();
    
      
}




function saveTodos(){
    let JsonTodos = JSON.stringify(todos);
    localStorage.setItem('todos', JsonTodos);
}

function getTodos(){
    let todos = localStorage.getItem('todos') || '[]';
    return JSON.parse(todos);
}

function clearTodo(){
    localStorage.removeItem('todos')
}
















