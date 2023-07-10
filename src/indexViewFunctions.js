import { currentQuestList, currentGoalList } from "./data";

let header = document.querySelector(".gameContentHeader");

export function showEmptyState () {
   
    if (currentQuestList.length <= 0) {

        let emptyStateContainer = document.createElement('div');
        
        let questContainer = document.querySelector(".questContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        questContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Create a Quest to get started and check them here:"
        let questButton = document.createElement("button");
        questButton.classList.add("addQuestButton")
        questButton.textContent = "Add Quest +"
        emptyStateContainer.appendChild(questButton);
    
    }

    if (currentGoalList.length <= 0) {

        let emptyStateContainer = document.createElement('div');
        
        let goalContainer = document.querySelector(".goalContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        goalContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Set Goals and track your progress here:"
        let goalButton = document.createElement("button");
        goalButton.classList.add("addGoalButton")
        goalButton.textContent = "Add Goal +"
        emptyStateContainer.appendChild(goalButton);
    
    }
}


export function removeEmptyState () {
    const emptyQuestList = document.querySelector(".emptyStateContainer")
    if (emptyQuestList) {
        emptyQuestList.remove();
    } else {
      return;
    }
}



// let questContainer;

// export function createQuestContainer() {

//   if (!questContainer) {
//     let gameContainer = document.querySelector(".gameContent");
//     questContainer = document.createElement("div");
//     questContainer.classList.add("questContainer");
//     gameContainer.appendChild(questContainer);

//   }
// }

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

