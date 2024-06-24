let listOfProjects = [];


class Project {
    constructor(name){
        this.id = Date.now().toString();
        this.name = name;
        this.toDos = [];
        this.completed = [];
    }

    addTodo(toDo){
        this.toDos.push(toDo);
    }

    deleteTodo(toDo){
        let index = this.toDos.indexOf(toDo)
        this.toDos.splice(index,1);
    }

    printProject(){
        console.log("Project Name: " + this.name + "\n",this.toDos);
    }

    static addProjectToList(...projects){

        projects.forEach(project => {
            if(listOfProjects.find(list => list.name === project.name)){
                console.error("project with this name already exists");
            }else {
                listOfProjects.push(project);
            }
        })
        
    }

    editName(newName){
        this.name = newName
    }

    getTodos(){
        return this.toDos;
    }

    // deleteProject(id){
    //     const indexOfObject = listOfProjects.findIndex(project => project.id === id);
    //     listOfProjects.splice(indexOfObject, 1);
    // }

    // getProject(name){
    //     const project = listOfProjects.find(project => project.name === name);
    //     return project
    // }


}

export {Project, listOfProjects}

