import { currentQuestList, currentGoalList, currencyContainer } from "./data";
import { renderQuestList } from "./questFunctions";
import { createEmptyCardTemplate, createGhostCard } from "./questFunctions";

let header = document.querySelector(".gameContentHeader");


export function showEmptyQuestsState () {

        let emptyStateContainer = document.createElement('div');
        
        let questContainer = document.querySelector(".questContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyQuestContainer");
        questContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Create a Quest to get started and check them here:"
        let questButton = document.createElement("button");
        questButton.classList.add("addQuestButton")
        questButton.textContent = "Add Quest +"
        questButton.addEventListener("click", function() {
          
              if (!removeEmptyState()) {
                  console.log("Emptystate Removed");
                  removeEmptyState();
              }
              
              if (!createQuestParallax()) {
                  console.log("QuestParallax created");
                  createQuestParallax();
              }

              renderQuestList(currentQuestList, currencyContainer);
              
              let x = document.querySelector(".questParallax");
              x.appendChild(createEmptyCardTemplate());
              x.appendChild(createGhostCard());
              console.log(currentGoalList);
        })
        emptyStateContainer.appendChild(questButton);

        return;
    
    }


   export function showEmptyGoalsState () {

    
        let emptyStateContainer = document.createElement('div');
        console.log(emptyStateContainer);
        
        let goalContainer = document.querySelector(".goalContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyGoalContainer");
        goalContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Set Goals and track your progress here:"
        let goalButton = document.createElement("button");
        goalButton.classList.add("addGoalButton")
        goalButton.textContent = "Add Goal +"
        emptyStateContainer.appendChild(goalButton);
    
        return;
  }



export function removeEmptyQuestState () {

  const emptyQuestList = document.querySelector(".emptyStateContainer#emptyQuestContainer")
        if (emptyQuestList) {
                    emptyQuestList.remove();
                } else {
                  return;
                }
}

export function removeEmptyGoalState () {

  const emptyGoalList = document.querySelector(".emptyStateContainer#emptyGoalContainer")
        if (emptyGoalList) {
            emptyGoalList.remove();
        } else {
          return;
        }

}


export function createQuestParallax() {

  let questParallax = document.querySelector(".questParallax");

  // Check if the element already exists
  if (questParallax) {
      return false; // Return false to indicate that the element already exists
  }

  let questContainer = document.querySelector(".questContainer");
  questParallax = document.createElement("div");
  questParallax.classList.add("questParallax");
  questContainer.appendChild(questParallax);

  return true; // Return true to indicate that the element was created
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

