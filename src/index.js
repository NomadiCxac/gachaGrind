import './styles.css';
import { Quest, Currency, Weapon, Armour, PlayerCharacter, PlayerStats } from "./classes/classes.js";
import { getNewQuest, createAndDisplayQuestCards, addQuest} from "./questFunctions.js";
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
import { currentQuestList, currencyContainer, playerInventory, playerEquippedItems } from './data.js';


// Globally Scoped Variables

let playerBirthday = new Date ("02-03-1996");
let heroSelection = ("Sorcerer");
let player = new PlayerCharacter("images/zeusSprite.png", heroSelection, playerEquippedItems, playerBirthday);
let pixelImageContainer = document.querySelector("#testImage");
pixelImageContainer.src = (player.spriteImage);
console.log(player._stats.getStat("strength"));
let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
let heroScore = calcHeroScore(player);
getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)

let testWeaponList = ("test")
let testItem = spin(testWeaponList, currencyContainer);
let inventory = [testItem];


console.log(currencyContainer);

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


const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    openSlotMachineModal();
})

const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    userInterfaceManager(currentQuestList, currencyContainer);
    let newItem = spin(testWeaponList, currencyContainer);
    console.log(newItem);
    console.log(getItemImage(newItem._rarity));

    if (newItem != false) {
      player.equipItem(newItem);
      inventory.push(newItem)
      let heroScore = calcHeroScore(player);
      getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`);
      updateInventoryPage(inventory);
    }
    
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  closeSlotMachineModal();
})
    

resetSlotMachineImages();
inventoryEventHandler(inventory);