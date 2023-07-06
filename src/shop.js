import './styles.css';
import { currencyContainer, playerInventory} from './data.js';
import { spin, openSlotMachineModal, closeSlotMachineModal, resetSlotMachineImages} from './gachaSpinFunctions.js';
import userInterfaceManager from './eventManager.js';
import { displayPlayerCurrentCurrency } from './currencyFunctions.js';
import { saveDataToLocalStorage } from './localStorageFunctions.js';


console.log(currencyContainer)

let testWeaponList = ("test")
console.log(playerInventory);

displayPlayerCurrentCurrency(currencyContainer);

const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    openSlotMachineModal();
})

const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    let newItem = spin(testWeaponList, currencyContainer);

    if (newItem != false) {
      // player.equipItem(newItem);
      playerInventory.push(newItem)
      saveDataToLocalStorage("playerInventory", playerInventory)
    }
    
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  closeSlotMachineModal();
})
    