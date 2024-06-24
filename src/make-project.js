import Project from "./projects";

function projectCreationForm(){
    const mainContainer = document.querySelector("#container")
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
        makeProject(nameInput.value);
        
        createProjectForm.close();
    });
}


//adds project to sidebar list 
function makeProject(name){
    
    const project = new Project(name);
    const projectHeader = document.querySelector("#heading-text");
    const projectListItem = document.createElement("li");
    const projectList = document.querySelector("#project-list");
    projectListItem.innerText = project.name;
    

    projectList.append(projectListItem);

    projectListItem.addEventListener("click", ()=>{
        projectHeader.innerText = project.name;
        
        projectList.classList.add("project-task-list");
        console.log("switced to " + projectListItem.innerText)
    })
    
}


export {projectCreationForm}