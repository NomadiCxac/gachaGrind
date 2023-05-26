import './styles.css';
import { Quest, Currency } from "./classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest } from "./questFunctions.js";
import { displayFormModal, closeFormModal } from "./modalfunctions.js";
import dueDate from "./dueDate.js";
import getObjective from "./getObjective.js";
import currencyAggregator from "./currencyAggregator.js";
import GGTokens from "../src/images/GGToken.png"
import Keys from "../src/images/ChestKey.png"


// Globally Scoped Variables
let currentQuestList = [];
let currencyContainer = [new Currency("GGTokens", 0), new Currency("Keys", 0)]
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;
let questForm = document.getElementById("formDate");
questForm.setAttribute("min", formattedDate);
questForm.setAttribute("value", formattedDate);


// test cases
let gymTask = new Quest(getObjective("Gym"), dueDate(20, 30, 0), false, new Currency("Keys", 2));
let waterTask = new Quest(getObjective("Water"), dueDate(20, 30, 0), false, new Currency("GGTokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
(currencyAggregator(currencyContainer, gymTask));
(currencyAggregator(currencyContainer, waterTask));
createAndDisplayQuestCards(currentQuestList);


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

// Event Listener to Check if Quest Complete
let checkBoxes = document.querySelectorAll(".questCompleteCheckbox");
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener("change", function () {
        if (this.checked) {
            currentQuestList[(this.parentNode.parentNode.parentNode.id)].questComplete = true;
            console.log(currentQuestList);
        } else {
            currentQuestList[(this.parentNode.parentNode.parentNode.id)].questComplete = false;
        }
    })
} )