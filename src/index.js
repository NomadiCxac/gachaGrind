import './styles.css';
import { Quest, Currency, Weapon, Armour, PlayerCharacter, PlayerStats } from "./classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest} from "./questFunctions.js";
import { displayFormModal, closeFormModal } from "./modalFunctions.js";
import dueDate from "./dueDate.js";
import getObjective from "./getObjective.js";
import userInterfaceManager from './eventManager';
import { getDataFromLocalStorage, saveDataToLocalStorage } from './localStorageFunctions';
import { pullItemFromChest, getItemRarity, getItemStats, getItemType, getItemElement, getItemPrefix, getItemSuffix, generateRandomWeapon} from './shopFunction';
import { itemPossibleElements, itemPossibleRarity, itemPossibleStats, itemPossiblePrefix, itemPossibleSuffix } from './itemStats';
import importAllImages from './imageHandler';

const weaponImages = importAllImages(
  require.context('./images/weapons', false, /\.(png)$/)
);

const armourImages = importAllImages(
  require.context('./images/armour', false, /\.(png)$/)
);

const elementImages = importAllImages(
  require.context('./images/elements', false, /\.(png)$/)
);


console.log(weaponImages);

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

function openSlotMachine() {
    document.getElementById('slotMachineModal').style.display = 'block';
  }
  
  function closeSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'none';
  }

let heroSelection = ("Warrior");
let birthday = new Date("1996-09-17");
let birthday2 = new Date("1998-12-22");
let currentPlayerStats = new PlayerStats("Warrior");
let currentPlayer = new PlayerCharacter(null, heroSelection, playerEquippedItems, birthday);
getRandomSymbol(); 
// console.log(pullItemFromChest("Rogue", 0));

let symbolImage = `${weaponImages[Math.floor(Math.random() * weaponImages.length)]}`
console.log(symbolImage)
let testSource = document.getElementById('testImage');
console.log(testSource);
testSource.src = symbolImage;

function getRandomSymbol() {
    const symbols = ['symbol1', 'symbol2', 'symbol3']; // Add more symbols if desired
   
    let chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    // console.log(chosenSymbol);
    // chosenSymbol.style.backgroundImage = symbolImage
    // // console.log(chosenSymbol);
    return chosenSymbol;
  }
  
  function spin() {
    const reels = document.getElementsByClassName('reel');
    for (let i = 0; i < reels.length; i++) {
      const symbols = reels[i].getElementsByClassName('symbol');
      symbols[i].classList.add('spin'); // Add the 'spin' class
      for (let j = 0; j < symbols.length; j++) {
          symbols[j].classList.add('spin'); // Add the 'spin' class
          symbols[j].className = 'symbol ' + getRandomSymbol();
          symbols[j].style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`

      }
    }

    setTimeout(() => {
      for (let i = 0; i < reels.length; i++) {
        symbols[i].classList.remove('spin'); // Remove the 'spin' class
      }
    }, 2000); // Adjust the duration as desired
  }

  

const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    openSlotMachine();
    let newItem = (generateRandomWeapon(heroSelection));
    currentPlayer.equipItem(newItem);
    console.log(currentPlayer);
})

const spinSlot = document.querySelector("#spinSlotButton");
console.log(spinSlot);
spinSlot.addEventListener("click", function (){
    spin();
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", closeSlotMachineModal())
    

