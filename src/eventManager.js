import { removeCompletedQuest, createAndDisplayQuestCards } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./localStorageFunctions";
import { taskAndGoalController, removeEmptyTaskGoalPrompt, createTaskContainer, showEmptyQuestAndGoalsEmptyQuestAndGoals } from "./indexViewFunctions";
// import { currentGoalList, currentQuestList } from "./data";

export default function userInterfaceManager (currentQuestList, currencyContainer) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    displayPlayerCurrentCurrency(currencyContainer);

    // if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
    //     showEmptyQuestAndGoals();
    // }
    
    removeCompletedQuest(currentQuestList, currencyContainer);
    saveDataToLocalStorage("currentQuestList", currentQuestList);
    saveDataToLocalStorage("currencyContainer", currencyContainer);
    createAndDisplayQuestCards(currentQuestList, currencyContainer);
}
