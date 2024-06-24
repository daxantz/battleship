class Projectlist{
    constructor(){
        this.projects = [];
    }

    addProject(...projects){
        projects.forEach(project => {
            if(this.projects.find(list => list.name === project.name)){
                console.error("project with this name already exists");
            }else {
                this.projects.push(project);
            }
        })
    }

    deleteProject(projectName){
        if(!this.projects.find(project => project.name === projectName)){
            console.log("this project doesnt exist");
        } else{
            const indexOfObject = this.projects.findIndex(project => project.name  === projectName);
            this.projects.splice(indexOfObject, 1);
        }
        
    }

    getProject(name){
        const project = this.projects.find(project => project.name === name);
        return project
    }

    getAllProjects(){
        return this.projects;
    }

}

export {Projectlist}