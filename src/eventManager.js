import { removeCompletedQuest, createAndDisplayQuestCards, renderQuestList, createGhostCard } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./localStorageFunctions";
import { taskAndGoalController, removeEmptyTaskGoalPrompt, createTaskContainer, showEmptyQuestAndGoalsEmptyQuestAndGoals, removeEmptyState, createQuestParallax } from "./indexViewFunctions";
// import { currentGoalList, currentQuestList } from "./data";

export default function userInterfaceManager (currentQuestList, currencyContainer, currentGoalList) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    displayPlayerCurrentCurrency(currencyContainer);

    if (currentQuestList.length > 0) {
        removeEmptyState();
        createQuestParallax();
        renderQuestList(currentQuestList, currencyContainer);
        let questParallax = document.querySelector(".questParallax")
        questParallax.appendChild(createGhostCard());
    }
    

    // if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
    //     showEmptyQuestAndGoals();
    // }
    
    // removeCompletedQuest(currentQuestList, currencyContainer);
    // saveDataToLocalStorage("currentQuestList", currentQuestList);
    // saveDataToLocalStorage("currencyContainer", currencyContainer);
    // createAndDisplayQuestCards(currentQuestList, currencyContainer);
}


