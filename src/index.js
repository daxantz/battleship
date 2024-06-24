// import  {Todo}  from "./to-do";
// import Project from "./projects";
// import "./style.css"
// import addTaskToPage from "./make-todo";
// import addCardToPage from "./add-card-to-page";
// import {makeCard, taskCreationForm} from "./make-task-card";
// import {projectCreationForm, makeProject} from "./make-project";

// const todoTitleInput = document.querySelector("#todo-title");
// const todoDescInput = document.querySelector("#todo-desc");    
// const todoDateInput = document.querySelector("#todo-date");



// const addTaskBtn = document.querySelector(".create-task");
// const taskCards = document.querySelectorAll(".task-card");
// const card = document.querySelector(".task-card");
// const cardContent = document.querySelector(".task-and-content");
// const newProjectBtn = document.querySelector("#project-btn");
// addTaskBtn.addEventListener("click", (e) =>{
//     e.preventDefault();
//     // const titleInputValue = todoTitleInput.value;
//     // const descInputValue = todoDescInput.value;
//     // const dateInputValue = todoDateInput.value;
//     // const todo = new Todo(titleInputValue, descInputValue, dateInputValue);
//     // const todoTitle = todo.title;
//     // const todoDate = todo.dueDate;
//     // const todoDesc = todo.description;
//     // const todoPriority = todo.priority;
//     // const taskCard = makeCard(todoTitle, todoDate, todoDesc, todoPriority)

    
//     // addCardToPage(taskCard); 
//     taskCreationForm()
// })

// newProjectBtn.addEventListener("click", () =>{
//     projectCreationForm()
// })

import  {Todo}  from "./to-do";
import {Project, listOfProjects} from "./projects";
import {Projectlist} from "./projectList";
import { makeProjectForm , showTaskForm} from "./dom";
import "./style.css"

const createProjectBtn = document.querySelector("#project-btn");
const createTaskBtn = document.querySelector(".create-task");
const addTaskFormBtn = document.querySelector(".addTodoBtn");
const cancelFormBtn = document.querySelector(".cancelTodoBtn");
createProjectBtn.addEventListener("click", ()=>{
    makeProjectForm();
})

createTaskBtn.addEventListener("click", ()=>{
    showTaskForm();
})

addTaskFormBtn.addEventListener("click", (e)=>{
    e.preventDefault();
})

cancelFormBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    showTaskForm();
})










