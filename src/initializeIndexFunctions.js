import './styles.css';
import { Quest, Currency, PlayerCharacter, PlayerStats, Goal } from "./classes/classes.js";
import { getNewQuest, addQuest, renderQuestList, createEmptyCardTemplate, createGhostCard} from "./questFunctions.js";
import { closeFormModal } from "./modalFunctions.js";
import userInterfaceManager from './eventManager';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorageFunctions';
import { calcHeroScore } from './playerCharacterFunctions';
import { currentQuestList, currencyContainer, playerEquippedItems, currentGoalList } from './data.js';
import { removeEmptyQuestState, createQuestParallax } from './indexViewFunctions';
import { createGetDataForm } from './generateForm';
import renderDefaultIndex from './renderDefaultIndexHtml';
import generateGoalCard from './goalFunctions';
import { renderGoalList } from './goalFunctions';
import renderGoalCreationPage from './goalCreationPage';



export default function initializeDefaultIndex () {

    let indexPage = document.querySelector(".appContent");

    renderDefaultIndex(indexPage);



let playerBirthday = new Date ("02-03-1996");
let heroSelection = ("Sorcerer");
let player = new PlayerCharacter("images/zeusSprite.png", heroSelection, playerEquippedItems, playerBirthday);
let pixelImageContainer = document.querySelector("#testImage");
pixelImageContainer.src = (player.spriteImage);
let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
let heroScore = calcHeroScore(player);
getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)
let currentGoalList = [];


let testGoal = new Goal ("Become Fluent in Spanish", new Currency("GGTokens", 12))
let gymGoal = new Goal (("Get Six Pack Abs"), new Currency ("GGTokens", 12));

currentGoalList.push(testGoal);
currentGoalList.push(gymGoal);

let gymQuest = gymGoal.generateQuest(4, 0);
gymGoal.quests.push(gymQuest);

renderGoalList(currentGoalList);


userInterfaceManager(currentQuestList, currencyContainer);



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
    
    while (indexPage.firstChild) {
        indexPage.removeChild(indexPage.firstChild);
  }

  renderGoalCreationPage();

})



}

