import { getWeaponImage, getArmourImage, getElementImage, getRarityImage } from "./getItemImage";

const inventoryPageParent = document.querySelector(".gameContent");
const inventoryPage = document.createElement("div");

export function createInventoryPage () {
    
    inventoryPage.classList.add("inventoryPage")
    generateInventoryItemElements()
    inventoryPageParent.appendChild(inventoryPage)
}

function generateInventoryItemElements () {

    for (let i = 0; i < 5; i ++) {
        let inventoryItemRow = document.createElement("div");
        inventoryItemRow.classList.add("inventoryItemRow");
        inventoryItemRow.setAttribute("id", `inventoryItemRow-${i+1}`);
        inventoryPage.appendChild(inventoryItemRow)
        let counter = (i * 5);
        for (let j = 0; j < 5; j++) {
            let inventoryItem = document.createElement("div");
            inventoryItem.classList.add("inventoryItem");
            inventoryItem.setAttribute("id", `inventoryItem-${counter + j + 1}`);
            inventoryItem.addEventListener("click", function(e) {
                console.log(e.target);
                showAndPositionInventoryModal(e.target);
            })
            inventoryItem.addEventListener("mouseover", function() {
                inventoryItem.style.border = "4px solid yellow";
            });

            inventoryItem.addEventListener("mouseout", function() {
                inventoryItem.style.border = "2px solid white";
            });
            inventoryItemRow.appendChild(inventoryItem)
         }
    }
}

export function appendItemImage (inventory) {
    console.log("This is working");
    for (let item = 0; item < inventory.length; item++) {
        let itemContainer = document.querySelector(`#inventoryItem-${item + 1}`);
        let itemImage = getWeaponImage(inventory[item]._type.replace(/\s/g, ''));
        itemContainer.style.backgroundImage = `url('${itemImage}')`
        itemContainer.addEventListener("mouseover", function() {
            console.log(`This is item${inventory[item]._name}`);
        }
    )};
}


export function createInventoryModal() {
  const inventoryModal = document.createElement("div");
  inventoryModal.classList.add("inventory-modal");

  const inventoryModalContent = document.createElement("div");
  inventoryModalContent.classList.add("inventory-modal-content");

  const inventoryModalItemImage = document.createElement("div");
  inventoryModalItemImage.classList.add("inventory-modal-item-image")

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
  inventoryModalContent.appendChild(inventoryModalItemImage);
  inventoryModalContent.appendChild(inventoryModalContentText);

  inventoryModal.appendChild(inventoryModalContent);
  document.body.appendChild(inventoryModal);

  return inventoryModal;
}

export function showAndPositionInventoryModal() {
  const inventoryModal = createInventoryModal();
  inventoryModal.style.display = "block";
}

export function hideInventoryModal(e) {
    const inventoryModal = e.target.parentElement.parentElement;
    inventoryModal.style.display = "none";
    inventoryModal.remove();
  }