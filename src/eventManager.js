import { removeCompletedQuest, createAndDisplayQuestCards } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";
import { getDataFromLocalStorage, saveDataToLocalStorage } from "./localStorageFunctions";

export default function userInterfaceManager (currentQuestList, currencyContainer) {
    // let persistingCurrencyContainer = getDataFromLocalStorage(`${currencyContainer}`)
    // let persistingCurrentQuestList = getDataFromLocalStorage(`${currentQuestList}`)
    displayPlayerCurrentCurrency(currencyContainer);
    removeCompletedQuest(currentQuestList, currencyContainer);
    saveDataToLocalStorage("currentQuestList", currentQuestList);
    saveDataToLocalStorage("currencyContainer", currencyContainer);
    createAndDisplayQuestCards(currentQuestList, currencyContainer);
}