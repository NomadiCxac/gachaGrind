import {inventoryEventHandler}  from './inventoryFunctions';
import { displayPlayerCurrentCurrency } from './currencyFunctions';
import './styles.css';
import {currencyContainer, playerInventory, playerEquippedItems } from './data.js';


inventoryEventHandler(playerInventory);

displayPlayerCurrentCurrency(currencyContainer);