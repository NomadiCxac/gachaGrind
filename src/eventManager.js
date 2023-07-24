import { renderQuestList, createGhostCard } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./localStorageFunctions";
import { removeEmptyQuestState, createQuestParallax } from "./indexViewFunctions";
// import { currentGoalList, currentQuestList } from "./data";

export default function userInterfaceManager (currentQuestList, currencyContainer, currentGoalList) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    displayPlayerCurrentCurrency(currencyContainer);

    if (currentQuestList.length > 0) {
        removeEmptyQuestState();
        createQuestParallax();
        renderQuestList(currentQuestList, currencyContainer);
        let questParallax = document.querySelector(".questParallax")
        questParallax.appendChild(createGhostCard());
    }
    
}


