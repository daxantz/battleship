import { Projectlist } from "./projectList";
import { Project } from "./projects";
import { Todo } from "./to-do";
const list = new Projectlist();
const mainContainer = document.querySelector("#container");
let selectedProject = null;
const mainHeading = document.querySelector(".heading-text");
const cardContainer = document.querySelector(".card-container");
function renameProject(listElement, listItemName,projectOptions, project){
    //div - renameConifm btn - cancelRename btn
    const renameInput = document.createElement("input");
    const buttonContainer = document.createElement("div");
    const confirmRenameBtn = document.createElement("button");
    const cancelRenameBtn = document.createElement("button");
    confirmRenameBtn.innerText = "Confirm rename";
    cancelRenameBtn.innerText = "Cancel Rename";

    buttonContainer.classList.add("rename-btn-container");
    confirmRenameBtn.classList.add("confirm-rename-btn");
    cancelRenameBtn.classList.add("cancel-rename-btn");
    buttonContainer.append(confirmRenameBtn, cancelRenameBtn);
    listElement.append(renameInput, buttonContainer);

    confirmRenameBtn.addEventListener("click" ,()=>{
        project.editName(renameInput.value);
        listItemName.innerText = renameInput.value;
        renameInput.replaceWith(listItemName);
        buttonContainer.replaceWith(projectOptions);
        console.log("clicked confirm rename", list);
    });

    cancelRenameBtn.addEventListener("click", ()=>{
        renameInput.replaceWith(listItemName);
        buttonContainer.replaceWith(projectOptions);
        
        console.log("rename canceled");
    })
    
    
}
function makeProjectListItem(project){
    //elements
    const projectList = document.querySelector("#project-list");
    const listElement = document.createElement("li");
    const errorElement = document.createElement("span");
    const projectOptions = document.createElement("div");
    const renameProjectBtn = document.createElement("button");
    const deleteProjectBtn = document.createElement("button");
    const listItemName = document.createElement("p");


    
    //add classes to elements
    renameProjectBtn.classList.add("rename-project-btn");
    deleteProjectBtn.classList.add("delete-project-btn");
    listItemName.classList.add("list-item-name");
    listElement.classList.add("list-item");

    
    renameProjectBtn.innerText = "Rename";
    deleteProjectBtn.innerText = "Delete";
    errorElement.innerText = "Project with this name already exists";
    listItemName.innerText = project.name
    
    projectOptions.append(renameProjectBtn, deleteProjectBtn);
    listElement.append(listItemName, projectOptions);
    projectList.append(listElement);


    //event listeners to rename and delete projects

    listElement.addEventListener("click", ()=>{
        selectProject(project.name);
        
    })
    renameProjectBtn.addEventListener("click", () =>{
        // const renameInput = document.createElement("input"); 
        // listItemName.replaceWith(renameInput);
        // project.editName(renameInput.value)
        listElement.removeChild(projectOptions);
        renameProject(listElement, listItemName,projectOptions, project);
        
    })

    deleteProjectBtn.addEventListener("click", ()=>{
        list.deleteProject(project.name);
        listElement.remove();
        console.log(list);
    })
}

function addNewProject(nameValue){ //checks projectlist array to see if it exists makes it, adds to dom 
    
    const projectExists = list.projects.some(item => {
        if(item.name === nameValue){
            return true
        } else {
            return false;
        }
    });

    if(projectExists){
        console.log("Project Exists already, choose a new name")
    } else {
        const project = new Project(nameValue);
        list.addProject(project);
        makeProjectListItem(project);
        console.log(list);
    }
    
}

function makeProjectForm(){
    
    const createProjectForm = document.createElement("dialog");
    

    const formHeading = document.createElement("h2");
    formHeading.innerText = "New Project";
    const nameLbl = document.createElement("label");
    nameLbl.innerText = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    const closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    const addProjectBtn = document.createElement("button");
    addProjectBtn.innerText = "Add Project";

    
    
    createProjectForm.append(formHeading, nameLbl, nameInput, closeBtn, addProjectBtn);
    mainContainer.append(createProjectForm);
    createProjectForm.showModal();


    closeBtn.addEventListener("click", ()=>{
        createProjectForm.close();
    })

    addProjectBtn.addEventListener("click",()=>{
        addNewProject(nameInput.value);
        createProjectForm.close();
    });
}

function showTaskForm(){
    const taskForm = document.querySelector("form");
    if(taskForm.classList.contains("hidden")){
        taskForm.classList.toggle("hidden");
    }else {
        taskForm.classList.add("hidden");
    }


}

function makeTaskForm(){
    //make form to take inputs for creating a task element/object
    //form 
    const form = document.createElement("dialog");
    //labels
    const titleLabel = document.createElement("label");
    const descriptionLabel = document.createElement("label");
    const dateLabel = document.createElement("label");
    const projectLabel = document.createElement("label");
    const priorityLabel = document.createElement("label")
    //inputs
    const titleInput = document.createElement("input");
    const descriptionInput = document.createElement("textarea");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    const projectInput = document.createElement("input");
    const priorityInput = document.createElement("input");
    priorityInput.type = "number";

    //buttons
    const buttonContainer = document.createElement("div");
    const addTaskBtn = document.createElement("button");
    const cancelTaskBtn = document.createElement("button");
    //element texts
    titleLabel.innerText = "Title";
    descriptionLabel.innerText = "Description";
    dateLabel.innerText = "Date";
    addTaskBtn.innerText = "Add";
    cancelTaskBtn.innerText = "Cancel";
    projectLabel.innerText = "Project";
    priorityLabel.innerText = "Priority"
    //ids
    titleInput.setAttribute("id", "todo-title");
    descriptionInput.setAttribute("id", "todo-desc");
    dateInput.setAttribute("id", "todo-date");
    projectInput.setAttribute("id", "todo-project");

    buttonContainer.append(addTaskBtn, cancelTaskBtn);
    form.append(titleLabel, titleInput, descriptionLabel, descriptionInput, dateLabel, dateInput,priorityLabel, priorityInput, projectLabel, projectInput, buttonContainer);
    mainContainer.append(form);
    form.showModal();

    addTaskBtn.addEventListener("click", ()=>{
        addNewTask(titleInput.value, descriptionInput.value, dateInput.value,priorityInput.value, projectInput.value);
        selectProject(projectInput.value);
        
        form.close();
    })

    cancelTaskBtn.addEventListener("click", ()=>{
        form.close();
    })

    buttonContainer.append(addTaskBtn, cancelTaskBtn);


}

function addNewTask(title, description, date,priority, projectName){
    let project = list.projects.find(project => project.name === projectName);
    project = list.getProject(projectName);
    
    if(project){
        //create new task
        const todo = new Todo(title, description, date, priority);
        //add task to project array
        project.addTodo(todo);
        console.log(`${todo.title} has been added to the ${project.name} task array`);
        
        
        //make project todo element
        makeTaskElement(todo);
    } else {
        console.error("The project you're attempting to add this task to doesnt exist");
    }
    
}

function makeTaskElement(todo, projectName){
    
    const todoContainer = document.createElement("div");
    const buttonContainer = document.createElement("div");
    const todoTitle = document.createElement("p");
    const todoDate = document.createElement("span");
    const editTodoBtn = document.createElement("button");
    const deleteTodoBtn = document.createElement("button");

    todoTitle.innerText = todo.title;
    todoDate.innerText = todo.dueDate;
    editTodoBtn.innerText = "Edit";
    deleteTodoBtn.innerText = "Delete";

    

    buttonContainer.append(editTodoBtn, deleteTodoBtn);
    todoContainer.append(todoTitle, todoDate, buttonContainer);

    
    let title = todo.getTitle();
    let desc = todo.getDescription();
    let date = todo.getDate();
    let priority = todo.getPriority();
    let details = createTaskDetails(title, desc, date, priority);
    details.classList.add("hidden");
    todoContainer.append(details);
        
        
    // cardContainer.append(todoContainer);

    editTodoBtn.addEventListener("click", ()=>{
        //render form to edit details
        
    });

    deleteTodoBtn.addEventListener("click", ()=>{
        //delete todo
        deleteTodoFromPage(todo, projectName)
        todoContainer.remove();
        
    })

    todoContainer.addEventListener("click", ()=>{
        details.classList.toggle("hidden");
    })
    return todoContainer;
}

function setPageHeading(project){
    if(project){
        mainHeading.innerText = project.name;
    } else {
        console.error("Invalid project provided")
    }
    
    

    
}

function addTodosToPage(project){
    cardContainer.innerHTML = "";

    if(project === selectedProject){
        let todos = project.getTodos();
        todos.forEach(item => {
            const taskElement = makeTaskElement(item, project.name);
            cardContainer.appendChild(taskElement);
        });
        
    }

    

        
}

function selectProject(projectName){

    selectedProject = list.projects.find(project => project.name === projectName);
    setPageHeading(selectedProject);
    addTodosToPage(selectedProject);
    
}

function deleteTodoFromPage(todo, projectName){
    let project = list.getProject(projectName);
    project.deleteTodo(todo);
    console.log(project);
}

function createTaskDetails(todoTitle, todoDesc, todoDate, todoPriority){
    const projectDetails = document.createElement("div");
    const titleText = document.createElement("p");
    const descText = document.createElement("p");
    const dateText = document.createElement("p");
    const priorityText = document.createElement("p");

    titleText.innerText = `Title: ${todoTitle}`;
    descText.innerText = `Description: ${todoDesc}`;
    dateText.innerText = `Date: ${todoDate}`;
    priorityText.innerText = `Priority: ${todoPriority}`;

    

    projectDetails.classList.add("project-details");

    projectDetails.append(titleText,descText, dateText, priorityText);
    return projectDetails;
}

export {makeProjectForm, showTaskForm, addNewTask, makeTaskForm}