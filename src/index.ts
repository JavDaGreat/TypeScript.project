const btn = document.querySelector("button")!
const input= document.querySelector("#todo")! as HTMLInputElement
const form= document.querySelector("#form")! as HTMLFormElement
const List=document.querySelector("ul")!

function readTodos():Todo[]{
  const todosJSON= localStorage.getItem("todos")
  if(todosJSON===null) return[]
  return JSON.parse(todosJSON);
}
interface Todo{
  text:string
  completed:boolean
}

function saveTodos(){
  localStorage.setItem("todos",JSON.stringify(todos))

}
const todos:Todo[]=readTodos()
todos.forEach(createTodo)


function handleSubmit(e:SubmitEvent){
  e.preventDefault()
  const newTodo:Todo={
    text:input.value,
    completed:false
  }
  createTodo(newTodo)
  todos.push(newTodo)
 saveTodos()
input.value=""
}
function createTodo(todo:Todo){
  
  const newLi=document.createElement("Li")
  const checkBox=document.createElement("input")
  checkBox.type="checkbox"
  checkBox.checked=todo.completed
  checkBox.addEventListener("change",()=>{
    todo.completed = checkBox.checked;
    saveTodos()
  })
  newLi.append(todo.text)
  newLi.append(checkBox)
  List?.append(newLi)
}
form.addEventListener("submit",handleSubmit)

// console.log(input);
// btn?.addEventListener("click",()=>{
//   alert(input.value)
//   input.value=""
// })

