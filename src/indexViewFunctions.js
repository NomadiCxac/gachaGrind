import { currentQuestList, currentGoalList } from "./data";

let header = document.querySelector(".gameContentHeader");

export function showEmptyState () {
   
    if (currentQuestList.length <= 0) {

        let emptyStateContainer = document.createElement('div');
        
        let questContainer = document.querySelector(".questContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyQuestContainer");
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
        emptyStateContainer.setAttribute("id", "emptyGoalContainer");
        goalContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Set Goals and track your progress here:"
        let goalButton = document.createElement("button");
        goalButton.classList.add("addGoalButton")
        goalButton.textContent = "Add Goal +"
        emptyStateContainer.appendChild(goalButton);
    
    }
}


export function removeEmptyState () {

    if (currentQuestList.length > 0) {
        const emptyQuestList = document.querySelector(".emptyStateContainer#emptyQuestContainer")
        if (emptyQuestList) {
                    emptyQuestList.remove();
                } else {
                  return;
                }
        } 

    if (currentGoalList.length > 0) {
        const emptyQuestList = document.querySelector(".emptyStateContainer#emptyGoalContainer")
        if (emptyQuestList) {
            emptyQuestList.remove();
        } else {
          return;
        }
    } 
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

