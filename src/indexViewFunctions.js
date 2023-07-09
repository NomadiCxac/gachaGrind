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

let taskHeader;

export function questController () {

    // Case: User creates a task but no goals
    if (currentQuestList.length > 0 && !taskHeader) {
        taskHeader = document.createElement("div");
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
    const emptyQuestList = document.querySelector(".emptyQuestList")
    if (emptyQuestList) {
        emptyQuestList.remove();
    } else {
      return;
    }
}



let taskContainer;

export function createTaskContainer() {

  if (!taskContainer) {
    let gameContainer = document.querySelector(".gameContent");
    taskContainer = document.createElement("div");
    taskContainer.classList.add("questContainer");
    gameContainer.appendChild(taskContainer);

  }
  // taskContainer.textContent = "";
}

let questParallax;

export function createQuestParallax() {

  if (!questParallax) {
    let questContainer = document.querySelector(".questContainer");
    questParallax = document.createElement("div");
    questParallax.classList.add("questParallax");
    questContainer.appendChild(questParallax);

  }
  questParallax.textContent = "";
}


let goalContainer;

export function createGoalContainer() {

  if (!goalContainer) {
    let gameContainer = document.querySelector(".gameContent");
    goalContainer = document.createElement("div");
    goalContainer.classList.add("goalContainer");
    gameContainer.appendChild(goalContainer);
  }
  goalContainer.textContent = "";
}

let goalParallax;

export function createGoalParallax() {

  if (!goalParallax) {
    let goalContainer = document.querySelector(".goalContainer");
    goalParallax = document.createElement("div");
    goalParallax.classList.add("goalParallax");
    goalContainer.appendChild(goalParallax);

  }
  goalParallax.textContent = "";
}

