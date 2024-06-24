// function makeTaskCard(title){
//     //task portion
//     const taskCard = document.createElement("div");
//     taskCard.classList.add("task-card");
//     const cardCheckbox = document.createElement("input");
//     cardCheckbox.type = "checkbox";
//     const cardTitle = document.createElement("span");
//     cardTitle.innerText = title;
//     taskCard.append(cardCheckbox, cardTitle);
//     //contentcard portion
//     const contentCard = makeContentCard()
    


// }

// function makeContentCard(title, date,desc, priority) {
//     const cardContentContainer = document.createElement("div");
//     cardContentContainer.classList.add("card-content");
//     const contentTitle = document.createElement("p");
//     contentTitle.innerText = "Title: " + title;
//     const contentDate = document.createElement("p");
//     contentDate.innerText = "Date: " + date;
//     const contentDesc = document.createElement("p");
//     contentDesc.innerText = "Description: "+ desc;
//     const contentPriority = document.createElement("p");
//     contentPriority.innerText = "Priority: "+  priority;


//     cardContentContainer.append(contentTitle, contentDate, contentDesc, contentPriority);

//     return cardContentContainer;
// }

// function makeCardAndContentCard(taskCard, contentCard){
//     const cardAndContentContainer = document.createElement("div");
//     cardAndContentContainer.classList.add("card-and-content")
    

//     cardAndContentContainer.append(taskCard, contentCard);
    
//     const contentCards = document.querySelectorAll(".card-content");

//     contentCards.forEach(card => {
//         cardAndContentContainer.classList.add("hidden")
//         card.addEventListener("click", () => {
//             if (card.classList.contains("hidden")) {
//                 card.classList.remove("hidden");
//             } else {
//                 card.classList.add("hidden");
//             }
//         });
//     });
    

//     return cardAndContentContainer;
// }

function makeCard(title, date, desc, priority){
    //task container
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const cardCheckbox = document.createElement("input");
    cardCheckbox.type = "checkbox";
    const cardTitle = document.createElement("span");
    cardTitle.innerText = title;
    taskContainer.append(cardCheckbox, cardTitle);
    //content container
    const cardContentContainer = document.createElement("div");
    cardContentContainer.classList.add("content");
    const contentTitle = document.createElement("p");
    contentTitle.innerText = "Title: " + title;
    const contentDate = document.createElement("p");
    contentDate.innerText = "Date: " + date;
    const contentDesc = document.createElement("p");
    contentDesc.innerText = "Description: "+ desc;
    const contentPriority = document.createElement("p");
    contentPriority.innerText = "Priority: "+  priority;
    cardContentContainer.append(contentTitle, contentDate, contentDesc, contentPriority);
    
    //task and content card
    const taskAndContentCard = document.createElement("div");
    taskAndContentCard.classList.add("task-and-content");

    taskAndContentCard.append(taskContainer, cardContentContainer)
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.append(taskAndContentCard);
    //event listener to show/hide main content of task
    taskContainer.addEventListener("click", ()=> {
        cardContentContainer.classList.toggle("hidden");
        
        
    })

    return cardContainer
}


export{ makeCard}