import Project from "./projects";
import makeTaskCard from "./make-task-card";
import makeTodo from "./make-todo";

export default function addCardToPage(card) {
    const taskContainer = document.querySelector(".card-container");
    taskContainer.appendChild(card);
    
}