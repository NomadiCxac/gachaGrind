import Quest from "./questClass.js";
import dueDate from "./dueDate.js";
import Currency from "./currencyClass.js";
import getObjective from "./getObjective.js";
import isQuestComplete from "./checkQuestCompletion.js";
import currencyAggregator from "./currencyAggregator.js";
import createQuestCard from "./questCard.js";
import getNewQuest from "./getNewQuest.js";

const modalDiv = document.getElementById('modal-form');
let currentQuestList = [];
let currencyContainer = [new Currency("GG Tokens", 0), new Currency("Keys", 0)]
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');

var formattedDate = year + '-' + month + '-' + day;
let questForm = document.getElementById("formDate");
questForm.setAttribute("min", formattedDate);
questForm.setAttribute("value", formattedDate);

function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);
}

function displayFormModal () {
 
    // Display modal by setting display to block
    modalDiv.style.display = 'block';
 
    }
 
function closeFormModal (event) {
 
    event.preventDefault();
    modalDiv.style.display = 'none';
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

let taskButton = document.querySelector("button#taskButton")
taskButton.addEventListener("click", function (e) {
    displayFormModal();
})

let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    closeFormModal(e);
    let newlyGeneratedQuest = getNewQuest();
    console.log(newlyGeneratedQuest);
    createQuestCard(newlyGeneratedQuest);
})