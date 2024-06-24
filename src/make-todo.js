import { Todo } from "./to-do";

// export default function makeTaskForm(task){
//     const form = document.createElement("form");
//     const titleLbl = document.createElement("label");
//     titleLbl.innerText = "Title"
//     const descriptionLbl = document.createElement("label");
//     descriptionLbl.innerText = "Description";
//     const dateLbl = document.createElement("label");
//     dateLbl.innerText = "Date";

//     const titleInput = document.createElement("input");
//     titleInput.type = "text";
//     const descriptionInput = document.createElement("textarea");
//     const dateInput = document.createElement("input");
//     dateInput.type = "date";

//     const formBtnContainer = document.createElement("div");
//     const addBtn = document.createElement("button");
//     const cancelBtn = document.createElement("button");
//     addBtn.innerText = "Add";
//     addBtn.classList.add("addTodoBtn", "btn");
//     cancelBtn.classList.add("cancelTodoBtn", "btn");
//     cancelBtn.innerText = "Cancel";
//     formBtnContainer.append(addBtn, cancelBtn);

//     form.append(titleLbl, titleInput, descriptionLbl, descriptionInput, dateLbl, dateInput, formBtnContainer)
//     const mainContent = document.querySelector(".main-content");
//     mainContent.append(form);
// }
export default function makeTodo(title, desc, date) {
    

    title = todoTitleInput.value;
    desc = todoDescInput.value;
    date = todoDateInput.value;
    
    const newTodo = new Todo(title, desc, date);

    return newTodo;
}


