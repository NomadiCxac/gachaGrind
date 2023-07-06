import { removeCompletedQuest, createAndDisplayQuestCards } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./localStorageFunctions";
import taskAndGoalController from "./indexViewFunctions";

export default function userInterfaceManager (currentQuestList, currencyContainer) {

    taskAndGoalController();
    displayPlayerCurrentCurrency(currencyContainer);
    removeCompletedQuest(currentQuestList, currencyContainer);
    saveDataToLocalStorage("currentQuestList", currentQuestList);
    saveDataToLocalStorage("currencyContainer", currencyContainer);
    createAndDisplayQuestCards(currentQuestList, currencyContainer);
}
