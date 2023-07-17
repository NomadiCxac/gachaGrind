import './styles.css';
import { Quest, Currency, Weapon, Armour, PlayerCharacter, PlayerStats, Goal } from "./classes/classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest, generateTaskContainer, createQuestCardTemplate, displayQuestCardContent, renderQuestList, createCardTemplate, displayGoalCardContent, createEmptyCardTemplate, createGhostCard} from "./questFunctions.js";
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
import { removeEmptyTaskGoalPrompt, createTaskContainer, questController, goalController, showEmptyQuestAndGoals, showEmptyQuestsState, showEmptyGoalsState, emptyStateEventHandler, removeEmptyQuestState, createQuestParallax } from './indexViewFunctions';
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
let testQuest2 = new Quest ("Finish Fn", "4:30pm - 8:00pm", false, new Currency("GGTokens", 12), null, false, null);

// currentQuestList.push(testQuest);
console.log(currentQuestList);
console.log(currentGoalList);

let testGoal = new Goal ("Become Fluent in Spanish", new Currency("GGTokens", 12))

// class Goal {
//     constructor(objective, reward, frequency, frequencyValue, totalTimeRequired, totalTimeSpent) 

let gymGoal = new Goal (("Get Six Pack Abs"), new Currency ("GGTokens", 12));
let gymQuest = gymGoal.generateQuest(4, 0);
gymGoal.quests.push(gymQuest);
console.log(gymQuest);

console.log(gymGoal.quests[0].timesPerWeekRequired)

testGoal.quests.push(testQuest);
testGoal.quests.push(testQuest);
testGoal.quests.push(testQuest);
testGoal.quests.push(testQuest);
testGoal.quests.push(testQuest);
testGoal.quests.push(testQuest2);

console.log(testGoal.quests);

// testGoal.quests.push(testQuest);
// console.log(testGoal.quests);

// let testClick = document.querySelector(".gameContentHeader")
// testClick.addEventListener("click", function () {
//   testQuest.questComplete = true;
//   console.log(testGoal.quests);
// })

showEmptyQuestsState();
// showEmptyGoalsState();

let gcc = document.querySelector(".goalContainer");

function generateGoalCard(goal) {

    const goalCard = document.createElement('div');
    goalCard.classList.add('goalCard');
  
    const topHalfGoalCard = document.createElement('div');
    topHalfGoalCard.classList.add('topHalfGoalCard');
    goalCard.appendChild(topHalfGoalCard);
  
    const bottomHalfGoalCard = document.createElement('div');
    bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
    goalCard.appendChild(bottomHalfGoalCard);
  
    const goalObjectiveContainer = document.createElement('div');
    goalObjectiveContainer.classList.add('goalObjectiveContainer');
    topHalfGoalCard.appendChild(goalObjectiveContainer);
  
    const goalCompleteContainer = document.createElement('div');
    goalCompleteContainer.classList.add('goalCompleteContainer');
    topHalfGoalCard.appendChild(goalCompleteContainer);
  
    const goalObjective = document.createElement('h3');
    goalObjective.classList.add('goal-objective');
    goalObjective.textContent = goal.objective;
    goalObjectiveContainer.appendChild(goalObjective);
  
    const questListContainer = document.createElement('div');
    questListContainer.classList.add('questListContainer');
    bottomHalfGoalCard.appendChild(questListContainer);
  
    const questListParallax = document.createElement('div');
    questListParallax.classList.add('questListParallax');
    questListContainer.appendChild(questListParallax);
  
    const questList = document.createElement('ul');
    questList.classList.add('questList');
    for (let i = 0; i < goal.quests.length; i++) {
      const questItemContainer = document.createElement('div');
      questItemContainer.classList.add('questListItemContainer');
  
      const questItemContent = document.createElement('span');
      questItemContent.classList.add('questListItem');
      questItemContent.textContent = goal.quests[i].objective;
  
      const progressBarContainer = document.createElement('div');
      progressBarContainer.classList.add('progress-bar-container');
  
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
  
      progressBarContainer.appendChild(progressBar);
      questItemContainer.appendChild(questItemContent);
      questItemContainer.appendChild(progressBarContainer);
      questList.appendChild(questItemContainer);

      
      questItemContainer.addEventListener('click', function () {
          generateModal(goal.quests[i]);
      });
    }

    questListParallax.appendChild(questList);
  
    return goalCard;
  }

  function generateModal(goalQuest) {

    const goalQuestModal = document.createElement('div');
    goalQuestModal.classList.add('goalQuestModal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('goalQuestModalContent');
  
    let goalQuestModalTitle = document.createElement("h2");
    goalQuestModalTitle.innerText = "Completion Requirement(s): "

    let name = document.createElement("p");
    name.innerText = goalQuest.objective;


    modalContent.appendChild(goalQuestModalTitle);
    modalContent.appendChild(name)
    goalQuestModal.appendChild(modalContent);
    document.body.appendChild(goalQuestModal);
  
    return goalQuestModal;
  }
      
  

  let gCard = generateGoalCard(testGoal);

  gcc.appendChild(gCard);

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

    if (!removeEmptyQuestState()) {
        removeEmptyQuestState();
    }
    
    if (!createQuestParallax()) {
        createQuestParallax();
    }

    renderQuestList(currentQuestList, currencyContainer);
    
    let x = document.querySelector(".questParallax");
    x.appendChild(createEmptyCardTemplate());
    x.appendChild(createGhostCard());
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
