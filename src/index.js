import './styles.css';
import { Quest, Currency, Weapon, Armour, PlayerCharacter, PlayerStats } from "./classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest} from "./questFunctions.js";
import { displayFormModal, closeFormModal } from "./modalfunctions.js";
import dueDate from "./dueDate.js";
import getObjective from "./getObjective.js";
import userInterfaceManager from './eventManager';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorageFunctions';


// Globally Scoped Variables
let currentQuestList = getDataFromLocalStorage('currentQuestList') || []; // Load from local storage
let currencyContainer = (getDataFromLocalStorage('currencyContainer') || [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)]); // Load from local storage
let playerInventory = getDataFromLocalStorage('playerInventory') || [];
let playerEquippedItems = getDataFromLocalStorage('playerEquippedItems') || [];



userInterfaceManager(currentQuestList, currencyContainer);

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
    userInterfaceManager(currentQuestList, currencyContainer);
})

// Weapon Creation Test
let KratosChains = new Weapon("Kratos Chains", "Chains", "Legendary", {strength: 500});
let cheapWoodenArmour = new Armour("Wooden Armour", "Chest", "Normal", {strength: 5});
// console.log(fireSword);

let heroSelection = ("warrior");
let birthday = new Date("1997-09-28");
let birthday2 = new Date("1998-12-22");
let currentPlayerStats = new PlayerStats("warrior");
let currentPlayer = new PlayerCharacter(null, heroSelection, playerEquippedItems, birthday);

currentPlayer.equipItem(KratosChains);
currentPlayer.equipItem(cheapWoodenArmour);
currentPlayer.stats.levelUp();
currentPlayer.stats.allocateSkillPoint("strength");
console.log(currentPlayer);
console.log(birthday)
console.log(currentPlayer._elementalAffinity);

// // var currentDate = new Date();
// // var year = currentDate.getFullYear();
// // var month = String(currentDate.getMonth() + 1).padStart(2, '0');
// // var day = String(currentDate.getDate()).padStart(2, '0');
// // var formattedDate = year + '-' + month + '-' + day;
// // let questForm = document.getElementById("formDate");
// // questForm.setAttribute("min", formattedDate);
// // questForm.setAttribute("value", formattedDate);


// // test cases
// addQuest(currentQuestList, gymTask);
// addQuest(currentQuestList, waterTask);
// createAndDisplayQuestCards(currentQuestList, currencyContainer);

