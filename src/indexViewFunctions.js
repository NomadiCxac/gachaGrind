import { currentQuestList, currentGoalList } from "./data";

export default function taskAndGoalController () {

    let header = document.querySelector(".gameContentHeader");
    if (header.hasChildNodes()) {
        while (header.firstChild) {
          header.removeChild(header.firstChild);
        }
      }


    // Case: User has no goals or tasks 
    if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
        let gameContainer = document.querySelector(".gameContent");
        let emptyContainer = document.createElement("div");
        emptyContainer.classList.add("emptyQuestList");
        emptyContainer.textContent = "Create a Goal or Task to Get Started"
        gameContainer.appendChild(emptyContainer);
    }

    // Case: User creates a task but no goals
    if (currentQuestList.length > 0) {
        let taskHeader = document.createElement("div");
        taskHeader.style.gridColumn = "1";
        taskHeader.textContent = "Tasks";
        header.appendChild(taskHeader);
    }

    // Case: User creates a goal
    if (currentGoalList.length > 0) {
        let goalHeader = document.createElement("div");
        goalHeader.style.gridColumn = "2";
        goalHeader.textContent = "Goals";
        header.appendChild(goalHeader);
      }
      

}

