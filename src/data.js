import { getDataFromLocalStorage } from "./localStorageFunctions";

export let currentQuestList = getDataFromLocalStorage('currentQuestList') || [];
export let currencyContainer = getDataFromLocalStorage('currencyContainer') || [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)];
export let playerInventory = getDataFromLocalStorage('playerInventory') || [];
export let playerEquippedItems = getDataFromLocalStorage('playerEquippedItems') || [];