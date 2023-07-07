import { currentQuestList, currentGoalList } from "./data";

let header = document.querySelector(".gameContentHeader");

export function showEmptyQuestAndGoals () {
   
      if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
        if (header.hasChildNodes()) {
            while (header.firstChild) {
              header.removeChild(header.firstChild);
            }
          }
        let gameContainer = document.querySelector(".gameContent");
        if (gameContainer.hasChildNodes()) {
            while (gameContainer.firstChild) {
              gameContainer.removeChild(gameContainer.firstChild);
            }
          }
        let emptyContainer = document.createElement("div");
        emptyContainer.classList.add("emptyQuestList");
        emptyContainer.textContent = "Create a Goal or Task to Get Started"
        gameContainer.appendChild(emptyContainer);
    }
}

export function questController () {
    if (header.hasChildNodes()) {
        while (header.firstChild) {
          header.removeChild(header.firstChild);
        }
      }

    // Case: User creates a task but no goals
    if (currentQuestList.length > 0) {
        let taskHeader = document.createElement("div");
        taskHeader.style.gridColumn = "1";
        taskHeader.textContent = "Tasks";
        header.appendChild(taskHeader);
    }

   
}

export function goalController () {
     // Case: User creates a goal
     if (currentGoalList.length > 0) {
        let goalHeader = document.createElement("div");
        goalHeader.style.gridColumn = "2";
        goalHeader.textContent = "Goals";
        header.appendChild(goalHeader);
      }
      
}

export function removeEmptyTaskGoalPrompt () {
    console.log("Empty is working")
    const emptyQuestList = document.querySelector(".emptyQuestList")
    console.log(emptyQuestList)
    if (emptyQuestList) {
        console.log("true");
        emptyQuestList.remove();
    }
}

export function createTaskContainer () {
    console.log("Create is working")
    let gameContainer = document.querySelector(".gameContent");
    let createTaskContainer = document.createElement("div");
    createTaskContainer.classList.add("questContainer"); 
    gameContainer.appendChild(createTaskContainer);
    let taskContainer = document.querySelector(".questContainer");
    taskContainer.textContent = "";
}
