import { removeCompletedQuest, createAndDisplayQuestCards } from "./questFunctions";
import { displayPlayerCurrentCurrency } from "./currencyFunctions";

export default function userInterfaceManager (currentQuestList, currencyContainer) {
    displayPlayerCurrentCurrency(currencyContainer);
    removeCompletedQuest(currentQuestList, currencyContainer);
    createAndDisplayQuestCards(currentQuestList);
}