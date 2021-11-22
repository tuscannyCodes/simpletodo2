//variables
const inputBox = document.getElementById('mainInput');
const addToDoButton = document.getElementById('addToDoButton');
const clearToDoButton = document.getElementById('clearToDoButton');
let todoList = document.getElementById('toDoList')





//functions

const todoHandler = () => {

let todo = inputBox.value;
let newTodo = document.createElement('li');
newTodo.textContent= todo; 
todoList.appendChild(newTodo);
inputBox.value= "";
}

const clearToDoHandler = () => {
 while (todoList.hasChildNodes()){ 
todoList.removeChild(todoList.firstChild)
 } 

}

//events

addToDoButton.addEventListener('click',todoHandler);
clearToDoButton.addEventListener('click',clearToDoHandler);