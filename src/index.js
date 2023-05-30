import './styles.css';
import { Quest, Currency } from "./classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest} from "./questFunctions.js";
import { displayFormModal, closeFormModal } from "./modalfunctions.js";
import dueDate from "./dueDate.js";
import getObjective from "./getObjective.js";
import { displayPlayerCurrentCurrency} from './currencyFunctions';


// Globally Scoped Variables
let currentQuestList = [];
window.currencyContainer = [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)]
displayPlayerCurrentCurrency(currencyContainer);
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;
let questForm = document.getElementById("formDate");
questForm.setAttribute("min", formattedDate);
questForm.setAttribute("value", formattedDate);


// test cases
let gymTask = new Quest(getObjective("Gym"), dueDate(20, 30, 0), false, new Currency("ChestKeys", 2));
let waterTask = new Quest(getObjective("Water"), dueDate(20, 30, 0), false, new Currency("GGTokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
createAndDisplayQuestCards(currentQuestList, window.currencyContainer);


// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button#addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {
    displayFormModal();
})




// Event Listener to Add Quest to Quest List and Display
let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    closeFormModal(e);
    let newlyGeneratedQuest = getNewQuest();
    addQuest(currentQuestList, newlyGeneratedQuest);
    createAndDisplayQuestCards(currentQuestList);
})

