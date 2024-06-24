
import {Project} from "./projects";

class Todo {
    constructor(title, description, dueDate, priority){
        this.id = Date.now().toString();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isComplete = false;
        
    }

    completeStatus(status) {
        if(typeof status === "boolean"){
            this.isComplete = status;
            
            console.log(this.title, "'s completed status is set to" + status)
        } else {
            console.error("isComplete should be true or flase")
        }
        
    }

    addToProject(project){
        if(project instanceof Project){
            this.project = project;
            project.addTodo(this);
        }else {
            console.log("this project doesnt exist");
        }
    }

    editTodo(newName, newDescription, newDate, newPriority){
        this.name = newName
        this.description = newDescription;
        this.dueDate = newDate;
        
        if(typeof newPriority === "number"){
            this.priority = newPriority;
        } else {
            console.error("priority must be a number from 1-3");
        }
    }



    
}

export {Todo}