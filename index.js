import Quest from "./questClass.js";
import dueDate from "./dueDate.js";
import Currency from "./currencyClass.js";
import getObjective from "./getObjective.js";
import isQuestComplete from "./checkQuestCompletion.js";

let gymTask = new Quest(getObjective("Gym"), dueDate(20, 30, 0), isQuestComplete(false), new Currency("Keys", 2));

console.log(gymTask);