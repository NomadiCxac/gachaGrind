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
import spin from './gachaSpinFunctions';

const weaponImages = importAllImages(
  require.context('./images/weapons', false, /\.(png)$/)
);

const armourImages = importAllImages(
  require.context('./images/armour', false, /\.(png)$/)
);

const elementImages = importAllImages(
  require.context('./images/elements', false, /\.(png)$/)
);

const rarityImages = importAllImages(
  require.context('./images/rarities', false, /\.(png)$/)
)


// Globally Scoped Variables
let currentQuestList = getDataFromLocalStorage('currentQuestList') || []; // Load from local storage
let currencyContainer = (getDataFromLocalStorage('currencyContainer') || [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)]); // Load from local storage
let playerInventory = getDataFromLocalStorage('playerInventory') || [];
let playerEquippedItems = getDataFromLocalStorage('playerEquippedItems') || [];

console.log(weaponImages);

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

let heroSelection = ("test");


let symbolImage = `${weaponImages[Math.floor(Math.random() * weaponImages.length)]}`
let testSource = document.getElementById('testImage');
testSource.src = symbolImage;

  

const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    openSlotMachine();
})

const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    spin(heroSelection);
    console.log(spin(heroSelection));
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  closeSlotMachineModal();
})
    

