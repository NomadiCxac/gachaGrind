import './styles.css';
import { Quest, Currency, Weapon, Armour, PlayerCharacter, PlayerStats, Goal } from "./classes/classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest, generateTaskContainer, createQuestCardTemplate, displayQuestCardContent, renderQuestList, createCardTemplate, displayGoalCardContent, createEmptyCardTemplate} from "./questFunctions.js";
import { displayFormModal, closeFormModal } from "./modalFunctions.js";
import dueDate from "./dueDate.js";
import getObjective from "./getObjective.js";
import userInterfaceManager from './eventManager';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorageFunctions';
import { pullItemFromChest, getItemRarity, getItemStats, getItemType, getItemElement, getItemPrefix, getItemSuffix, generateRandomWeapon} from './shopFunction';
import { itemPossibleElements, itemPossibleRarity, itemPossibleStats, itemPossiblePrefix, itemPossibleSuffix } from './classes/itemStats';
import { spin, openSlotMachineModal, closeSlotMachineModal, resetSlotMachineImages} from './gachaSpinFunctions';
import { calcHeroScore } from './playerCharacterFunctions';
import { appendItemImage, createInventoryModal, createInventoryPage, generateInventoryItemImage, generateInventoryItems, updateInventoryPage, inventoryEventHandler}  from './inventoryFunctions';
import { getItemImage } from './helperFunctions/getItemImage';
import { currentQuestList, playerInventory, currencyContainer, playerEquippedItems, currentGoalList } from './data.js';
import { removeEmptyTaskGoalPrompt, createTaskContainer, questController, goalController, showEmptyQuestAndGoals, showEmptyState } from './indexViewFunctions';
import { createGetDataForm } from './generateForm';

console.log(currencyContainer)
// Globally Scoped Variables

let playerBirthday = new Date ("02-03-1996");
let heroSelection = ("Sorcerer");
let player = new PlayerCharacter("images/zeusSprite.png", heroSelection, playerEquippedItems, playerBirthday);
let pixelImageContainer = document.querySelector("#testImage");
pixelImageContainer.src = (player.spriteImage);
let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
let heroScore = calcHeroScore(player);
getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)

let testQuest = new Quest ("Finish Fn", "4:30pm - 8:00pm", false, new Currency("GGTokens", 12), null, false, null);

// currentQuestList.push(testQuest);
console.log(currentQuestList);
console.log(currentGoalList);

// let testGoal = new Goal ("Become Fluent in Spanish", new Currency("GGTokens", 12), null, 4, 30)

// testGoal.quests.push(testQuest);
// console.log(testGoal.quests);

// let testClick = document.querySelector(".gameContentHeader")
// testClick.addEventListener("click", function () {
//   testQuest.questComplete = true;
//   console.log(testGoal.quests);
// })

showEmptyState();



// let goalCard = createCardTemplate("goal");
// x.appendChild(goalCard);
// displayGoalCardContent(testGoal, goalCard, currencyContainer);



userInterfaceManager(currentQuestList, currencyContainer);

// console.log(currentGoalList);
// console.log(currentQuestList);

// testGoal.linkQuestToGoal(currentQuestList[0]);
// console.log(testGoal.timeRequired)


// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button.addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {
    // displayFormModal();
    currentQuestList.push(testQuest);
    renderQuestList(currentQuestList, currencyContainer);
    let x = document.querySelector(".questParallax");
    x.appendChild(createEmptyCardTemplate());
    console.log(currentGoalList);
})

let addGoalButtonClicked = document.querySelector("button.addGoalButton")
addGoalButtonClicked.addEventListener("click", function () {
    // removeEmptyTaskGoalPrompt();
    // createTaskContainer();
    // goalController();
    
    currentGoalList.push(testGoal);
    createGetDataForm("goal");
})


// Event Listener to Add Quest to Quest List and Display
let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    closeFormModal(e);
    removeEmptyQuestGoalPrompt();
    let newlyGeneratedQuest = getNewQuest();
    addQuest(currentQuestList, newlyGeneratedQuest);
    userInterfaceManager(currentQuestList, currencyContainer);
})

// showEmptyQuestAndGoals();

// let y = createQuestCardTemplate();
// x.appendChild(y);
// console.log(y);

// displayQuestCardContent(testQuest, y, currencyContainer);


// const weaponRollButton = document.querySelector("#weaponGenerator");
// weaponRollButton.addEventListener("click", function () {
//     openSlotMachineModal();
// })

// const spinSlot = document.querySelector("#spinSlotButton");
// spinSlot.addEventListener("click", function (){
//     userInterfaceManager(currentQuestList, currencyContainer);
//     let newItem = spin(testWeaponList, currencyContainer);
//     console.log(newItem);
//     console.log(getItemImage(newItem._rarity));

//     if (newItem != false) {
//       player.equipItem(newItem);
//       inventory.push(newItem)
//       let heroScore = calcHeroScore(player);
//       getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`);
//       updateInventoryPage(inventory);
//     }
    
// });

// const closeSlotModal = document.querySelector("#closeSlot");
// closeSlotModal.addEventListener("click", function() {
//   closeSlotMachineModal();
// })
    

// resetSlotMachineImages();
// inventoryEventHandler(inventory);