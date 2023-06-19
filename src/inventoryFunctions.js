import { getWeaponImage, getArmourImage, getElementImage, getRarityImage } from "./getItemImage";

const inventoryPageParent = document.querySelector(".gameContent");
const inventoryPage = document.createElement("div");
inventoryPage.classList.add("inventoryPage")

export function createInventoryPage (inventory) {

    inventoryPageParent.appendChild(inventoryPage)

        // Code to generate each inventory row
        for (let i = 0; i < 5; i ++) {
            let inventoryItemRow = document.createElement("div");
            inventoryItemRow.classList.add("inventoryItemRow");
            inventoryItemRow.setAttribute("id", `inventoryItemRow-${i+1}`);
            inventoryPage.appendChild(inventoryItemRow)
            let counter = (i * 5);
    
            // Code to generate each index in each inventory row
            for (let j = 0; j < 5; j++) {
                let inventoryItemContainer = document.createElement("div");
                inventoryItemContainer.classList.add("inventoryItem");
                inventoryItemContainer.setAttribute("id", `${counter + j + 1}`);
                inventoryItemContainer.addEventListener("click", function(e) {
                    let item = (counter + j)
                    if (e.target.style.backgroundImage == "") {
                        return;
                    } else {
                        generateItemCardModal(e.target, inventory[item]);
                    }
                })
                inventoryItemContainer.addEventListener("mouseover", function() {
                    inventoryItemContainer.style.border = "4px solid yellow";
                });
    
                inventoryItemContainer.addEventListener("mouseout", function() {
                    inventoryItemContainer.style.border = "2px solid white";
                });
                inventoryItemRow.appendChild(inventoryItemContainer)
             }
        }
        return
}

// This is separate from inventory and only generates the container for inventory items
export function updateInventoryPage (inventory) {

    for (let item = 0; item < inventory.length; item++) {
        console.log(inventory[item]);
        let itemContainer = document.querySelectorAll('.inventoryItem')[item];
        let itemImage = getWeaponImage(inventory[item]._type.replace(/\s/g, ''));
        console.log(itemImage)
        itemContainer.style.backgroundImage = `url('${itemImage}')`
        itemContainer.addEventListener("mouseover", function() {
            return inventory[item];
        }
    )};

}

export function inventoryEventHandler(inventory) {
    if (inventory.length > 0) {
        createInventoryPage(inventory);
        updateInventoryPage(inventory);
    } else {
        createInventoryPage(inventory);
    }
  }

export function createItemCardModal(e, inventory) {

console.log(inventory._stats);
console.log(inventory._rarity);
console.log(inventory._element);

let damage = (inventory._stats.damage)
let critChance = (inventory._stats.critChance);
let critDamage = (inventory._stats.critDamage);
let constitution = (inventory._stats.constitution);
let dexterity = (inventory._stats.dexterity);
let intelligence = (inventory._stats.intelligence);
let strength = (inventory._stats.strength);


let element = getElementImage((inventory._element).toLowerCase());
console.log(element)
let rarity = getRarityImage(inventory._rarity);
console.log(rarity);

 
  const inventoryModal = document.createElement("div");
  inventoryModal.classList.add("inventory-modal");

  const inventoryModalContent = document.createElement("div");
  inventoryModalContent.classList.add("inventory-modal-content");

  const itemCardTopHalf = document.createElement("div");
  itemCardTopHalf.classList.add("itemCardTopHalf");
  const itemCardBottomHalf = document.createElement("div");
  itemCardBottomHalf.classList.add("itemCardBottomHalf");

  const inventoryModalItemImage = document.createElement("div");
  inventoryModalItemImage.classList.add("inventory-modal-item-image");
  let itemImage = e.style.backgroundImage;
  inventoryModalItemImage.style.backgroundImage = itemImage;

  const inventoryModalItemStats = document.createElement("div");
  inventoryModalItemStats.classList.add("inventory-modal-item-stats");

  const elementDescription = document.createElement("p");
//   let itemElement = inventoryItem.weapon.element;
  elementDescription.innerText = "Element: Volt";

  const rarityDescription = document.createElement("p");
//   let itemRarity = inventoryItem.weapon.element;
  rarityDescription.innerText = "Rarirty: Legendary";

  const damageDescription = document.createElement("p");
  damageDescription.innerText = "Weapon Damage: 8422.00";

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("inventory-close");
  closeBtn.innerText = "X";
  closeBtn.addEventListener("click", function(e){
        hideInventoryModal(e) 
  })

  const inventoryModalTitle = document.createElement("h2");
  inventoryModalTitle.textContent = "Modal Title";

  const inventoryModalContentText = document.createElement("p");
  inventoryModalContentText.textContent = "This is the inventory modal content.";

  inventoryModalContent.appendChild(closeBtn);
  inventoryModalContent.appendChild(inventoryModalTitle);
  inventoryModalContent.appendChild(itemCardTopHalf);
  inventoryModalContent.appendChild(itemCardBottomHalf);
  itemCardTopHalf.appendChild(inventoryModalItemImage);
  itemCardTopHalf.appendChild(inventoryModalItemStats);

  inventoryModalItemStats.appendChild(elementDescription);
  inventoryModalItemStats.appendChild(rarityDescription);
  inventoryModalItemStats.appendChild(damageDescription);

  inventoryModalContent.appendChild(inventoryModalContentText);

  inventoryModal.appendChild(inventoryModalContent);
  document.body.appendChild(inventoryModal);

  return inventoryModal;
}

export function generateItemCardModal(e, inventory) {
  const inventoryModal = createItemCardModal(e, inventory);
  inventoryModal.style.display = "block";
}

export function hideInventoryModal(e) {
    const inventoryModal = e.target.parentElement.parentElement;
    inventoryModal.style.display = "none";
    inventoryModal.remove();
  }

function generateItemCard(item) {
    const itemImage = getWeaponImage(item);
    console.log(itemImage);
}

function getItemImage (inventory) {
    
}