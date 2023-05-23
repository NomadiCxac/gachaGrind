import Quest from "./questClass.js";
import dueDate from "./dueDate.js";
import Currency from "./currencyClass.js";
import getObjective from "./getObjective.js";
import isQuestComplete from "./checkQuestCompletion.js";
import currencyAggregator from "./currencyAggregator.js";

let currentQuestList = [];
let currencyContainer = [new Currency("GG Tokens", 0), new Currency("Keys", 0)]

function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);
}

console.log(currencyContainer);

let gymTask = new Quest(getObjective("Gym"), dueDate(20, 30, 0), isQuestComplete(true), new Currency("Keys", 2));
let waterTask = new Quest(getObjective("Water"), dueDate(20, 30, 0), isQuestComplete(true), new Currency("GG Tokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
(currencyAggregator(currencyContainer, gymTask));
(currencyAggregator(currencyContainer, waterTask));

console.log(currentQuestList);
console.log(currencyContainer);