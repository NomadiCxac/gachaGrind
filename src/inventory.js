import {inventoryEventHandler}  from './inventoryFunctions';
import './styles.css';
import { currentQuestList, currencyContainer, playerInventory, playerEquippedItems } from './data.js';

console.log("Hi");
console.log(currencyContainer);
let inventory = [];

inventoryEventHandler(inventory);