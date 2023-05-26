"use strict";
const btn = document.querySelector("button");
const input = document.querySelector("#todo");
const form = document.querySelector("#form");
const List = document.querySelector("ul");
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
const todos = readTodos();
todos.forEach(createTodo);
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLi = document.createElement("Li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.addEventListener("change", () => {
        todo.completed = checkBox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkBox);
    List === null || List === void 0 ? void 0 : List.append(newLi);
}
form.addEventListener("submit", handleSubmit);
// console.log(input);
// btn?.addEventListener("click",()=>{
//   alert(input.value)
//   input.value=""
// })
