/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currencyContainer: () => (/* binding */ currencyContainer),
/* harmony export */   currentQuestList: () => (/* binding */ currentQuestList),
/* harmony export */   playerEquippedItems: () => (/* binding */ playerEquippedItems),
/* harmony export */   playerInventory: () => (/* binding */ playerInventory)
/* harmony export */ });
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");


let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currentQuestList') || [];
let currencyContainer = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currencyContainer') || [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)];
let playerInventory = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('playerInventory') || [];
let playerEquippedItems = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('playerEquippedItems') || [];

/***/ }),

/***/ "./src/helperFunctions/getItemImage.js":
/*!*********************************************!*\
  !*** ./src/helperFunctions/getItemImage.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArmourImage: () => (/* binding */ getArmourImage),
/* harmony export */   getElementImage: () => (/* binding */ getElementImage),
/* harmony export */   getItemImage: () => (/* binding */ getItemImage),
/* harmony export */   getRarityImage: () => (/* binding */ getRarityImage),
/* harmony export */   getWeaponImage: () => (/* binding */ getWeaponImage)
/* harmony export */ });
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageHandler */ "./src/helperFunctions/imageHandler.js");


const weaponImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(
    __webpack_require__("./src/images/weapons sync \\.(png)$")
  );
  
  const armourImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(
    __webpack_require__("./src/images/armour sync \\.(png)$")
  );
  
  const elementImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(
    __webpack_require__("./src/images/elements sync \\.(png)$")
  );
  
  const rarityImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_0__["default"])(
    __webpack_require__("./src/images/rarities sync \\.(png)$")
  )

// export function getWeaponImage (weapon) {
//     let weaponImageUrl = weaponImages.find(image => image.includes(weapon));
//     return weaponImageUrl;
// }

function getWeaponImage(weapon) {
  if (!weapon || typeof weapon !== "string") {
    // Invalid weapon parameter, handle the error or return a default image URL
    return null; // Or return a default image URL
  }

  let weaponImageUrl = weaponImages.find((image) => image.includes(weapon));

  if (!weaponImageUrl) {
    const resultingType = weapon.replace(/\s/g, "");
    weaponImageUrl = weaponImages.find((image) => image.includes(resultingType));

    if (!weaponImageUrl) {
      // Image not found for the given weapon, handle the error or return a default image URL
      return null; // Or return a default image URL
    }
  }

  return weaponImageUrl;
}

// export function getArmourImage (armour) {
//     let armourImageUrl = armourImages.find(image => image.includes(armour));
//     return armourImageUrl;
// }

function getArmourImage(armour) {
  if (!armour || typeof armour !== "string") {
    return null; // Or return a default image URL
  }

  let armourImageUrl = armourImages.find((image) => image.includes(armour));

  if (!armourImageUrl) {
    const resultingType = armour.replace(/\s/g, "");
    armourImageUrl = armourImages.find((image) => image.includes(resultingType));

    if (!armourImageUrl) {
      return null; // Or return a default image URL
    }
  }

  return armourImageUrl;
}

// export function getRarityImage (rarity) {
//     let rarityImageUrl = rarityImages.find(image => image.includes(rarity));
//     return rarityImageUrl;
// }

// export function getElementImage (element) {
//     let elementImageUrl = elementImages.find(image => image.includes(element));
//     return elementImageUrl;
// }

function getRarityImage(rarity) {
  if (!rarity || typeof rarity !== "string") {
    return null; // Or return a default image URL
  }

  let rarityImageUrl = rarityImages.find((image) => image.includes(rarity));

  if (!rarityImageUrl) {
    const resultingType = rarity + "Rarity";
    rarityImageUrl = rarityImages.find((image) => image.includes(resultingType));

    if (!rarityImageUrl) {
      return null; // Or return a default image URL
    }
  }

  return rarityImageUrl;
}

function getElementImage(element) {
  if (!element || typeof element !== "string") {
    return null; // Or return a default image URL
  }

  let elementImageUrl = elementImages.find((image) => image.includes(element));


  if (!elementImageUrl) {
    const resultingType = element.toLowerCase();
    elementImageUrl = elementImages.find((image) => image.includes(resultingType));

    if (!elementImageUrl) {
      return null; // Or return a default image URL
    }
  }

  return elementImageUrl;
}


function getItemImage(string) {

  let itemImageUrl;

  if (string.type === "weapon") {
    itemImageUrl = getWeaponImage(string.item);
  } else if (string.type === "armour") {
    itemImageUrl = getArmourImage(string.item);
  } else if (string.type === "rarity") {
    itemImageUrl = getRarityImage(string.item);
  } else if (string.type === "element") {
    itemImageUrl = getElementImage(string.item);
  }

  return itemImageUrl;
}

/***/ }),

/***/ "./src/helperFunctions/imageHandler.js":
/*!*********************************************!*\
  !*** ./src/helperFunctions/imageHandler.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ importAllImages)
/* harmony export */ });
// where "r" is a require.context function
function importAllImages(r) {
    let images = [];

    // keys is an array that stores all the filenames returned by r.keys()
    const keys = r.keys();

    // length sotres the length of the keys array
    const length = keys.length;
  
    for (let i = 0; i < length; i++) {
      const key = keys[i];
      images.push(r(key));
    }
  
    return images;
  }



/***/ }),

/***/ "./src/images/armour sync \\.(png)$":
/*!*******************************************************!*\
  !*** ./src/images/armour/ sync nonrecursive \.(png)$ ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Red Demon Helm.png": "./src/images/armour/Red Demon Helm.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/armour sync \\.(png)$";

/***/ }),

/***/ "./src/images/elements sync \\.(png)$":
/*!*********************************************************!*\
  !*** ./src/images/elements/ sync nonrecursive \.(png)$ ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./abyss.png": "./src/images/elements/abyss.png",
	"./aether.png": "./src/images/elements/aether.png",
	"./corrode.png": "./src/images/elements/corrode.png",
	"./gaia.png": "./src/images/elements/gaia.png",
	"./inferno.png": "./src/images/elements/inferno.png",
	"./lunar.png": "./src/images/elements/lunar.png",
	"./mist.png": "./src/images/elements/mist.png",
	"./solar.png": "./src/images/elements/solar.png",
	"./steel.png": "./src/images/elements/steel.png",
	"./terra.png": "./src/images/elements/terra.png",
	"./volt.png": "./src/images/elements/volt.png",
	"./zephyr.png": "./src/images/elements/zephyr.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/elements sync \\.(png)$";

/***/ }),

/***/ "./src/images/rarities sync \\.(png)$":
/*!*********************************************************!*\
  !*** ./src/images/rarities/ sync nonrecursive \.(png)$ ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./epicRarity.png": "./src/images/rarities/epicRarity.png",
	"./legendaryRarity.png": "./src/images/rarities/legendaryRarity.png",
	"./normalRarity.png": "./src/images/rarities/normalRarity.png",
	"./rareRarity.png": "./src/images/rarities/rareRarity.png",
	"./uncommonRarity.png": "./src/images/rarities/uncommonRarity.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/rarities sync \\.(png)$";

/***/ }),

/***/ "./src/images/weapons sync \\.(png)$":
/*!********************************************************!*\
  !*** ./src/images/weapons/ sync nonrecursive \.(png)$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./AbyssShortSword.png": "./src/images/weapons/AbyssShortSword.png",
	"./CorrosionShortSword.png": "./src/images/weapons/CorrosionShortSword.png",
	"./GaiaShortSword.png": "./src/images/weapons/GaiaShortSword.png",
	"./InfernoShortSword.png": "./src/images/weapons/InfernoShortSword.png",
	"./LunarShortSword.png": "./src/images/weapons/LunarShortSword.png",
	"./MistShortSword.png": "./src/images/weapons/MistShortSword.png",
	"./RuneShortSword.png": "./src/images/weapons/RuneShortSword.png",
	"./SolarShortSword.png": "./src/images/weapons/SolarShortSword.png",
	"./VoltShortSword.png": "./src/images/weapons/VoltShortSword.png",
	"./ZephyrShortSword.png": "./src/images/weapons/ZephyrShortSword.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images/weapons sync \\.(png)$";

/***/ }),

/***/ "./src/inventoryFunctions.js":
/*!***********************************!*\
  !*** ./src/inventoryFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createInventoryPage: () => (/* binding */ createInventoryPage),
/* harmony export */   inventoryEventHandler: () => (/* binding */ inventoryEventHandler),
/* harmony export */   updateInventoryPage: () => (/* binding */ updateInventoryPage)
/* harmony export */ });
/* harmony import */ var _helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helperFunctions/getItemImage */ "./src/helperFunctions/getItemImage.js");
/* harmony import */ var _modalElements_itemCardModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalElements/itemCardModal */ "./src/modalElements/itemCardModal.js");



const inventoryPageParent = document.querySelector(".gameContent");
const inventoryPage = document.createElement("div");
inventoryPage.classList.add("inventoryPage")

function createInventoryPage (inventory) {

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
                        (0,_modalElements_itemCardModal__WEBPACK_IMPORTED_MODULE_1__["default"])(e.target, inventory[item]);
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
function updateInventoryPage (inventory) {

    for (let item = 0; item < inventory.length; item++) {
        console.log(inventory[item]);
        let itemContainer = document.querySelectorAll('.inventoryItem')[item];
        let itemImage = (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getWeaponImage)(inventory[item]._type.replace(/\s/g, ''));
        console.log(itemImage)
        itemContainer.style.backgroundImage = `url('${itemImage}')`
        itemContainer.addEventListener("mouseover", function() {
            return inventory[item];
        }
    )};

}

function inventoryEventHandler(inventory) {
    if (inventory.length > 0) {
        createInventoryPage(inventory);
        updateInventoryPage(inventory);
    } else {
        createInventoryPage(inventory);
    }
  }



/***/ }),

/***/ "./src/localStorageFunctions.js":
/*!**************************************!*\
  !*** ./src/localStorageFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDataFromLocalStorage: () => (/* binding */ getDataFromLocalStorage),
/* harmony export */   saveDataToLocalStorage: () => (/* binding */ saveDataToLocalStorage)
/* harmony export */ });
function saveDataToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  
  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

/***/ }),

/***/ "./src/modalElements/itemCardModal.js":
/*!********************************************!*\
  !*** ./src/modalElements/itemCardModal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateItemCardModal)
/* harmony export */ });
/* harmony import */ var _helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helperFunctions/getItemImage */ "./src/helperFunctions/getItemImage.js");
/* harmony import */ var _playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../playerCharacterFunctions */ "./src/playerCharacterFunctions.js");






function hideInventoryModal(e) {
    const inventoryModal = e.target.parentElement.parentElement;
    inventoryModal.style.display = "none";
    inventoryModal.remove();
  }

  
function createItemCardModal(e, item) {

    console.log((0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_1__.calcWeaponScore)(item))
        
const rarityColors = {
    normal: "rgb(211, 211, 211)",
    uncommon: "rgb(0, 128, 0)",
    rare: "rgb(30, 30, 255)",
    epic: "rgb(160, 32, 240)",
    legendary: "rgb(255, 165, 0)",
    };

const itemStatsTopHalf = [
    {
        name: "Element",
        id: "element",
        value: item._element,
        icon: (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getElementImage)(item._element)
    },
    {
        name: "Rarity",
        id: "rarity",
        value: item._rarity
    },
    {
        name: "Hero Score",
        id: "heroScore",
        value: (0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_1__.calcWeaponScore)(item)
    }
]

const itemStatsBottomHalf= [
    {
        name: "Item Type",
        id: "itemType",
        value: item._type
    },
    {
        name: "Weapon Damage",
        id: "damage",
        value: item._stats.damage
    },
    {
        name: "Critical Chance",
        id: "critChance",
        value: item._stats.critChance
    },
    {
        name: "Critical Damage",
        id: "critDamage",
        value: item._stats.critDamage
    },
    {
        name: "Constitution",
        id: "constitution",
        value: item._stats.constitution
    },
    {
        name: "Dexterity",
        id: "dexterity",
        value: item._stats.dexterity
    },
    {
        name: "Intelligence",
        id: "intelligence",
        value: item._stats.intelligence
    },
    {
        name: "Strength",
        id: "strength",
        value: item._stats.strength
    }
    ];

   

    
     
      const inventoryModal = document.createElement("div");
      inventoryModal.classList.add("inventory-modal");
    
      const inventoryModalContent = document.createElement("div");
      inventoryModalContent.classList.add("inventory-modal-content");
    
      const itemCardContent = document.createElement("div");
      itemCardContent.classList.add("itemCardContent");
    
      const itemCardTopHalf = document.createElement("div");
      itemCardTopHalf.classList.add("itemCardTopHalf");
      const itemCardBottomHalf = document.createElement("div");
      itemCardBottomHalf.classList.add("itemCardBottomHalf");
    
      const itemCardStatContainer = document.createElement("div");
      itemCardStatContainer.classList.add("itemCardStatContainer");
    
      for (const stat of itemStatsBottomHalf) {
        const itemCardStatContainer = document.createElement("div");
        itemCardStatContainer.classList.add("itemCardStatContainer");
        itemCardStatContainer.id = stat.id;
        // itemCardStatContainer.innerText = stat.name + ": " + stat.value;
        
        // itemCardBottomHalf.appendChild(itemCardStatContainer)
        const statName = document.createElement("span");
        statName.innerText = stat.name + " :\u00A0"
        statName.style.color = "yellow";
      
        const statValue = document.createElement("span");
        statValue.innerText = (stat.value);
    
        itemCardStatContainer.appendChild(statName);
        itemCardStatContainer.appendChild(statValue);
      
        itemCardBottomHalf.appendChild(itemCardStatContainer);
    
      }
    
      const inventoryModalItemImageContainer = document.createElement("div");
      inventoryModalItemImageContainer.classList.add("inventory-modal-item-image-container")
      const inventoryModalItemImage = document.createElement("div");
      inventoryModalItemImage.classList.add("inventory-modal-item-image");
      let itemImage = e.style.backgroundImage;
      inventoryModalItemImage.style.backgroundImage = itemImage;
      inventoryModalItemImageContainer.appendChild(inventoryModalItemImage);
      const inventoryModalItemStats = document.createElement("div");
      inventoryModalItemStats.classList.add("inventory-modal-item-stats");
    
      // const elementContainer = document.createElement("div");
      // elementContainer.style.backgroundImage = `url('${elementImage}')`
      // elementContainer.classList.add("itemCardContainer");
    
      for (const stat of itemStatsTopHalf) {
    
        const itemCardStatContainerTopHalf = document.createElement("div");
        itemCardStatContainerTopHalf.classList.add("itemCardStatContainer");
        itemCardStatContainerTopHalf.id = stat.id;
        
        const statName = document.createElement("span");
        statName.innerText = stat.name + ":\u00A0";
        statName.style.color = "yellow";
    
        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }
        
        const statValue = document.createElement("span");
        if (stat.name == "Rarity") {
          let rarityName = capitalizeFirstLetter(stat.value)
          statValue.innerText = rarityName;
          statValue.style.color = rarityColors[item._rarity];
          statValue.style.fontWeight = 800;
        } else if (stat.name == "Hero Score") {
          statValue.innerText = "+" + stat.value;
          statValue.style.fontSize = "32px";
        } else {
            const elementIcon = document.createElement("img");
            elementIcon.src = stat.icon;
            elementIcon.style.verticalAlign = "middle"; // Align the image vertically in line with the text
            elementIcon.style.marginLeft = "10px"; // Add margin between the text and image
          
            const valueContainer = document.createElement("span");
            valueContainer.style.display = "flex"; // Enable flexbox layout
            valueContainer.style.alignItems = "center"; // Align items vertically in the center
            valueContainer.appendChild(document.createTextNode(stat.value));
            valueContainer.appendChild(elementIcon);
          
            statValue.appendChild(valueContainer);
        }
    
        
        itemCardStatContainerTopHalf.appendChild(statName);
        itemCardStatContainerTopHalf.appendChild(statValue);
      
        inventoryModalItemStats.appendChild(itemCardStatContainerTopHalf);
        
      }
    
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
      inventoryModalContent.appendChild(itemCardContent);
    
      itemCardContent.appendChild(itemCardTopHalf);
      itemCardContent.appendChild(itemCardBottomHalf);
      itemCardTopHalf.appendChild(inventoryModalItemImageContainer);
      itemCardTopHalf.appendChild(inventoryModalItemStats);
    
      // inventoryModalItemStats.appendChild(elementContainer);
    
      inventoryModalContent.appendChild(inventoryModalContentText);
    
      inventoryModal.appendChild(inventoryModalContent);
      document.body.appendChild(inventoryModal);
    
      return inventoryModal;
}

function generateItemCardModal(e, inventory) {
    const inventoryModal = createItemCardModal(e, inventory);
    inventoryModal.style.display = "block";
  }

/***/ }),

/***/ "./src/playerCharacterFunctions.js":
/*!*****************************************!*\
  !*** ./src/playerCharacterFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcHeroScore: () => (/* binding */ calcHeroScore),
/* harmony export */   calcWeaponScore: () => (/* binding */ calcWeaponScore)
/* harmony export */ });
function calcHeroScore (playerCharacter) {
    let heroScore = 0;

    // Base stats calc
    let inherentStrength = playerCharacter._stats.getStat("strength");
    let inherentIntelligence = playerCharacter._stats.getStat("intelligence");
    let inherentDexterity = playerCharacter._stats.getStat("dexterity");
    let inherentConstitution = playerCharacter._stats.getStat("constitution");

    // Weapon Stats Calc
    let weaponStrength = 0;
    let weaponIntelligence = 0;
    let weaponDexterity = 0;
    let weaponConstitution = 0;
    let equipmentStat = 0;
   
    for (let weaponIndex = 0; weaponIndex < playerCharacter._equippedItems.length; weaponIndex++) {
        weaponStrength += playerCharacter._equippedItems[weaponIndex]._stats.strength;
        weaponIntelligence += playerCharacter._equippedItems[weaponIndex]._stats.intelligence;
        weaponDexterity += playerCharacter._equippedItems[weaponIndex]._stats.dexterity;
        weaponConstitution += playerCharacter._equippedItems[weaponIndex]._stats.constitution;
        let weaponCritChance = playerCharacter._equippedItems[weaponIndex]._stats.critChance;
        let weaponCritDamage = playerCharacter._equippedItems[weaponIndex]._stats.critDamage;
        let weaponDamage = playerCharacter._equippedItems[weaponIndex]._stats.damage;
        equipmentStat += (weaponDamage + (weaponDamage * weaponCritChance * weaponCritDamage));
    }
    
    




    // Total Stats

    let totalStrength = inherentStrength + weaponStrength;
    let totalIntelligence = inherentIntelligence + weaponIntelligence;
    let totalDexterity = inherentDexterity + weaponDexterity;
    let totalConstitution = inherentConstitution + weaponConstitution;

    switch(playerCharacter.heroType) {
        case "Warrior":
            totalStrength *= 2;
        case "Sorcerer":
            totalIntelligence *= 2;
        case "Rogue":
            totalDexterity *= 2;
        case "Priest":
            totalConstitution *= 2;
    }

    heroScore += (totalStrength + totalIntelligence + totalDexterity + totalConstitution + equipmentStat)



    return heroScore.toFixed(2);
}

function calcWeaponScore (weapon) {
    
    let totalWeaponScore = 0; 

    let weaponStrength = 0;
    let weaponIntelligence = 0;
    let weaponDexterity = 0;
    let weaponConstitution = 0;
    let equipmentStat = 0;

    
    weaponStrength += weapon._stats.strength;
    weaponIntelligence += weapon._stats.intelligence;
    weaponDexterity += weapon._stats.dexterity;
    weaponConstitution += weapon._stats.constitution;
    let weaponCritChance = weapon._stats.critChance;
    let weaponCritDamage = weapon._stats.critDamage;
    let weaponDamage = weapon._stats.damage;
    equipmentStat += (weaponDamage + (weaponDamage * weaponCritChance * weaponCritDamage));

    totalWeaponScore = (weaponStrength + weaponIntelligence + weaponDexterity + weaponConstitution + equipmentStat)

    return totalWeaponScore.toFixed(2);

}
    


/***/ }),

/***/ "./src/images/armour/Red Demon Helm.png":
/*!**********************************************!*\
  !*** ./src/images/armour/Red Demon Helm.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/armour/Red Demon Helm.png";

/***/ }),

/***/ "./src/images/elements/abyss.png":
/*!***************************************!*\
  !*** ./src/images/elements/abyss.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/abyss.png";

/***/ }),

/***/ "./src/images/elements/aether.png":
/*!****************************************!*\
  !*** ./src/images/elements/aether.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/aether.png";

/***/ }),

/***/ "./src/images/elements/corrode.png":
/*!*****************************************!*\
  !*** ./src/images/elements/corrode.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/corrode.png";

/***/ }),

/***/ "./src/images/elements/gaia.png":
/*!**************************************!*\
  !*** ./src/images/elements/gaia.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/gaia.png";

/***/ }),

/***/ "./src/images/elements/inferno.png":
/*!*****************************************!*\
  !*** ./src/images/elements/inferno.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/inferno.png";

/***/ }),

/***/ "./src/images/elements/lunar.png":
/*!***************************************!*\
  !*** ./src/images/elements/lunar.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/lunar.png";

/***/ }),

/***/ "./src/images/elements/mist.png":
/*!**************************************!*\
  !*** ./src/images/elements/mist.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/mist.png";

/***/ }),

/***/ "./src/images/elements/solar.png":
/*!***************************************!*\
  !*** ./src/images/elements/solar.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/solar.png";

/***/ }),

/***/ "./src/images/elements/steel.png":
/*!***************************************!*\
  !*** ./src/images/elements/steel.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/steel.png";

/***/ }),

/***/ "./src/images/elements/terra.png":
/*!***************************************!*\
  !*** ./src/images/elements/terra.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/terra.png";

/***/ }),

/***/ "./src/images/elements/volt.png":
/*!**************************************!*\
  !*** ./src/images/elements/volt.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/volt.png";

/***/ }),

/***/ "./src/images/elements/zephyr.png":
/*!****************************************!*\
  !*** ./src/images/elements/zephyr.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/zephyr.png";

/***/ }),

/***/ "./src/images/rarities/epicRarity.png":
/*!********************************************!*\
  !*** ./src/images/rarities/epicRarity.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rarities/epicRarity.png";

/***/ }),

/***/ "./src/images/rarities/legendaryRarity.png":
/*!*************************************************!*\
  !*** ./src/images/rarities/legendaryRarity.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rarities/legendaryRarity.png";

/***/ }),

/***/ "./src/images/rarities/normalRarity.png":
/*!**********************************************!*\
  !*** ./src/images/rarities/normalRarity.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rarities/normalRarity.png";

/***/ }),

/***/ "./src/images/rarities/rareRarity.png":
/*!********************************************!*\
  !*** ./src/images/rarities/rareRarity.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rarities/rareRarity.png";

/***/ }),

/***/ "./src/images/rarities/uncommonRarity.png":
/*!************************************************!*\
  !*** ./src/images/rarities/uncommonRarity.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/rarities/uncommonRarity.png";

/***/ }),

/***/ "./src/images/weapons/AbyssShortSword.png":
/*!************************************************!*\
  !*** ./src/images/weapons/AbyssShortSword.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/AbyssShortSword.png";

/***/ }),

/***/ "./src/images/weapons/CorrosionShortSword.png":
/*!****************************************************!*\
  !*** ./src/images/weapons/CorrosionShortSword.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/CorrosionShortSword.png";

/***/ }),

/***/ "./src/images/weapons/GaiaShortSword.png":
/*!***********************************************!*\
  !*** ./src/images/weapons/GaiaShortSword.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/GaiaShortSword.png";

/***/ }),

/***/ "./src/images/weapons/InfernoShortSword.png":
/*!**************************************************!*\
  !*** ./src/images/weapons/InfernoShortSword.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/InfernoShortSword.png";

/***/ }),

/***/ "./src/images/weapons/LunarShortSword.png":
/*!************************************************!*\
  !*** ./src/images/weapons/LunarShortSword.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/LunarShortSword.png";

/***/ }),

/***/ "./src/images/weapons/MistShortSword.png":
/*!***********************************************!*\
  !*** ./src/images/weapons/MistShortSword.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/MistShortSword.png";

/***/ }),

/***/ "./src/images/weapons/RuneShortSword.png":
/*!***********************************************!*\
  !*** ./src/images/weapons/RuneShortSword.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/RuneShortSword.png";

/***/ }),

/***/ "./src/images/weapons/SolarShortSword.png":
/*!************************************************!*\
  !*** ./src/images/weapons/SolarShortSword.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/SolarShortSword.png";

/***/ }),

/***/ "./src/images/weapons/VoltShortSword.png":
/*!***********************************************!*\
  !*** ./src/images/weapons/VoltShortSword.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/VoltShortSword.png";

/***/ }),

/***/ "./src/images/weapons/ZephyrShortSword.png":
/*!*************************************************!*\
  !*** ./src/images/weapons/ZephyrShortSword.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/ZephyrShortSword.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/inventory.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inventoryFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventoryFunctions */ "./src/inventoryFunctions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");




console.log("Hi");
console.log(_data_js__WEBPACK_IMPORTED_MODULE_2__.currencyContainer);
let inventory = [];

(0,_inventoryFunctions__WEBPACK_IMPORTED_MODULE_0__.inventoryEventHandler)(inventory);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoT087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIscURBQXFEO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNEQ7QUFDdEM7QUFDZ0Y7QUFDdEc7QUFDQTtBQUNBLFlBQVksdURBQWlCO0FBQzdCO0FBQ0E7QUFDQSwwRUFBcUIsWSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvc3R5bGVzLmNzcz8xNTUzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50UXVlc3RMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSB8fCBbbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIkNoZXN0S2V5c1wiLCAwKV07XHJcbmV4cG9ydCBsZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xyXG5leHBvcnQgbGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdOyIsImltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlICh3ZWFwb24pIHtcclxuLy8gICAgIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG4vLyAgICAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2Uod2VhcG9uKSB7XHJcbiAgaWYgKCF3ZWFwb24gfHwgdHlwZW9mIHdlYXBvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgLy8gSW52YWxpZCB3ZWFwb24gcGFyYW1ldGVyLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcblxyXG4gIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSB3ZWFwb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICAgIC8vIEltYWdlIG5vdCBmb3VuZCBmb3IgdGhlIGdpdmVuIHdlYXBvbiwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuLy8gICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4vLyAgICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UoYXJtb3VyKSB7XHJcbiAgaWYgKCFhcm1vdXIgfHwgdHlwZW9mIGFybW91ciAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG5cclxuICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gYXJtb3VyLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlIChyYXJpdHkpIHtcclxuLy8gICAgIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG4vLyAgICAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlIChlbGVtZW50KSB7XHJcbi8vICAgICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuLy8gICAgIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZShyYXJpdHkpIHtcclxuICBpZiAoIXJhcml0eSB8fCB0eXBlb2YgcmFyaXR5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcblxyXG4gIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSByYXJpdHkgKyBcIlJhcml0eVwiO1xyXG4gICAgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlKGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtSW1hZ2Uoc3RyaW5nKSB7XHJcblxyXG4gIGxldCBpdGVtSW1hZ2VVcmw7XHJcblxyXG4gIGlmIChzdHJpbmcudHlwZSA9PT0gXCJ3ZWFwb25cIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0V2VhcG9uSW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiYXJtb3VyXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEFybW91ckltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcInJhcml0eVwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRSYXJpdHlJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJlbGVtZW50XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEVsZW1lbnRJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbUltYWdlVXJsO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYnlzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWJ5c3MucG5nXCIsXG5cdFwiLi9hZXRoZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FldGhlci5wbmdcIixcblx0XCIuL2NvcnJvZGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2NvcnJvZGUucG5nXCIsXG5cdFwiLi9nYWlhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9nYWlhLnBuZ1wiLFxuXHRcIi4vaW5mZXJuby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvaW5mZXJuby5wbmdcIixcblx0XCIuL2x1bmFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9sdW5hci5wbmdcIixcblx0XCIuL21pc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL21pc3QucG5nXCIsXG5cdFwiLi9zb2xhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc29sYXIucG5nXCIsXG5cdFwiLi9zdGVlbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc3RlZWwucG5nXCIsXG5cdFwiLi90ZXJyYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdGVycmEucG5nXCIsXG5cdFwiLi92b2x0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy92b2x0LnBuZ1wiLFxuXHRcIi4vemVwaHlyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy96ZXBoeXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VwaWNSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2VwaWNSYXJpdHkucG5nXCIsXG5cdFwiLi9sZWdlbmRhcnlSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2xlZ2VuZGFyeVJhcml0eS5wbmdcIixcblx0XCIuL25vcm1hbFJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbm9ybWFsUmFyaXR5LnBuZ1wiLFxuXHRcIi4vcmFyZVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvcmFyZVJhcml0eS5wbmdcIixcblx0XCIuL3VuY29tbW9uUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy91bmNvbW1vblJhcml0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0FieXNzU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0dhaWFTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0dhaWFTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vSW5mZXJub1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvSW5mZXJub1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9MdW5hclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTHVuYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTWlzdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTWlzdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1NvbGFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Tb2xhclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Wb2x0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Wb2x0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1plcGh5clNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvWmVwaHlyU2hvcnRTd29yZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMgc3luYyBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IGdldFdlYXBvbkltYWdlLCBnZXRBcm1vdXJJbWFnZSwgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuaW1wb3J0IGdlbmVyYXRlSXRlbUNhcmRNb2RhbCBmcm9tIFwiLi9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWxcIjtcclxuXHJcbmNvbnN0IGludmVudG9yeVBhZ2VQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50XCIpO1xyXG5jb25zdCBpbnZlbnRvcnlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW52ZW50b3J5UGFnZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5UGFnZVwiKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmVudG9yeVBhZ2UgKGludmVudG9yeSkge1xyXG5cclxuICAgIGludmVudG9yeVBhZ2VQYXJlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5UGFnZSlcclxuXHJcbiAgICAgICAgLy8gQ29kZSB0byBnZW5lcmF0ZSBlYWNoIGludmVudG9yeSByb3dcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKyspIHtcclxuICAgICAgICAgICAgbGV0IGludmVudG9yeUl0ZW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtUm93XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpbnZlbnRvcnlJdGVtUm93LSR7aSsxfWApO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlQYWdlLmFwcGVuZENoaWxkKGludmVudG9yeUl0ZW1Sb3cpXHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gKGkgKiA1KTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBDb2RlIHRvIGdlbmVyYXRlIGVhY2ggaW5kZXggaW4gZWFjaCBpbnZlbnRvcnkgcm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW52ZW50b3J5SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjb3VudGVyICsgaiArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAoY291bnRlciArIGopXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwoZS50YXJnZXQsIGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiNHB4IHNvbGlkIHllbGxvd1wiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5hcHBlbmRDaGlsZChpbnZlbnRvcnlJdGVtQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5cclxufVxyXG5cclxuLy8gVGhpcyBpcyBzZXBhcmF0ZSBmcm9tIGludmVudG9yeSBhbmQgb25seSBnZW5lcmF0ZXMgdGhlIGNvbnRhaW5lciBmb3IgaW52ZW50b3J5IGl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJbnZlbnRvcnlQYWdlIChpbnZlbnRvcnkpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGludmVudG9yeS5sZW5ndGg7IGl0ZW0rKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52ZW50b3J5SXRlbScpW2l0ZW1dO1xyXG4gICAgICAgIGxldCBpdGVtSW1hZ2UgPSBnZXRXZWFwb25JbWFnZShpbnZlbnRvcnlbaXRlbV0uX3R5cGUucmVwbGFjZSgvXFxzL2csICcnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUltYWdlKVxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpdGVtSW1hZ2V9JylgXHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W2l0ZW1dO1xyXG4gICAgICAgIH1cclxuICAgICl9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeUV2ZW50SGFuZGxlcihpbnZlbnRvcnkpIHtcclxuICAgIGlmIChpbnZlbnRvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgICAgICB1cGRhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgfSIsImltcG9ydCB7IGdldFdlYXBvbkltYWdlLCBnZXRBcm1vdXJJbWFnZSwgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSB9IGZyb20gXCIuLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlXCI7XHJcbmltcG9ydCB7IGNhbGNXZWFwb25TY29yZSB9IGZyb20gXCIuLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnNcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVJbnZlbnRvcnlNb2RhbChlKSB7XHJcbiAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGludmVudG9yeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGludmVudG9yeU1vZGFsLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgXHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkTW9kYWwoZSwgaXRlbSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhbGNXZWFwb25TY29yZShpdGVtKSlcclxuICAgICAgICBcclxuY29uc3QgcmFyaXR5Q29sb3JzID0ge1xyXG4gICAgbm9ybWFsOiBcInJnYigyMTEsIDIxMSwgMjExKVwiLFxyXG4gICAgdW5jb21tb246IFwicmdiKDAsIDEyOCwgMClcIixcclxuICAgIHJhcmU6IFwicmdiKDMwLCAzMCwgMjU1KVwiLFxyXG4gICAgZXBpYzogXCJyZ2IoMTYwLCAzMiwgMjQwKVwiLFxyXG4gICAgbGVnZW5kYXJ5OiBcInJnYigyNTUsIDE2NSwgMClcIixcclxuICAgIH07XHJcblxyXG5jb25zdCBpdGVtU3RhdHNUb3BIYWxmID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRWxlbWVudFwiLFxyXG4gICAgICAgIGlkOiBcImVsZW1lbnRcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fZWxlbWVudCxcclxuICAgICAgICBpY29uOiBnZXRFbGVtZW50SW1hZ2UoaXRlbS5fZWxlbWVudClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSYXJpdHlcIixcclxuICAgICAgICBpZDogXCJyYXJpdHlcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fcmFyaXR5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSGVybyBTY29yZVwiLFxyXG4gICAgICAgIGlkOiBcImhlcm9TY29yZVwiLFxyXG4gICAgICAgIHZhbHVlOiBjYWxjV2VhcG9uU2NvcmUoaXRlbSlcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgaXRlbVN0YXRzQm90dG9tSGFsZj0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSXRlbSBUeXBlXCIsXHJcbiAgICAgICAgaWQ6IFwiaXRlbVR5cGVcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fdHlwZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYXBvbiBEYW1hZ2VcIixcclxuICAgICAgICBpZDogXCJkYW1hZ2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuZGFtYWdlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3JpdGljYWwgQ2hhbmNlXCIsXHJcbiAgICAgICAgaWQ6IFwiY3JpdENoYW5jZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jcml0Q2hhbmNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3JpdGljYWwgRGFtYWdlXCIsXHJcbiAgICAgICAgaWQ6IFwiY3JpdERhbWFnZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jcml0RGFtYWdlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ29uc3RpdHV0aW9uXCIsXHJcbiAgICAgICAgaWQ6IFwiY29uc3RpdHV0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNvbnN0aXR1dGlvblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRleHRlcml0eVwiLFxyXG4gICAgICAgIGlkOiBcImRleHRlcml0eVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5kZXh0ZXJpdHlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJJbnRlbGxpZ2VuY2VcIixcclxuICAgICAgICBpZDogXCJpbnRlbGxpZ2VuY2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuaW50ZWxsaWdlbmNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3RyZW5ndGhcIixcclxuICAgICAgICBpZDogXCJzdHJlbmd0aFwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5zdHJlbmd0aFxyXG4gICAgfVxyXG4gICAgXTtcclxuXHJcbiAgIFxyXG5cclxuICAgIFxyXG4gICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWxcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQ29udGVudFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZFRvcEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkVG9wSGFsZlwiKTtcclxuICAgICAgY29uc3QgaXRlbUNhcmRCb3R0b21IYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRCb3R0b21IYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZEJvdHRvbUhhbGZcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgZm9yIChjb25zdCBzdGF0IG9mIGl0ZW1TdGF0c0JvdHRvbUhhbGYpIHtcclxuICAgICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5pZCA9IHN0YXQuaWQ7XHJcbiAgICAgICAgLy8gaXRlbUNhcmRTdGF0Q29udGFpbmVyLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiOiBcIiArIHN0YXQudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaXRlbUNhcmRCb3R0b21IYWxmLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lcilcclxuICAgICAgICBjb25zdCBzdGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXROYW1lLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiIDpcXHUwMEEwXCJcclxuICAgICAgICBzdGF0TmFtZS5zdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSAoc3RhdC52YWx1ZSk7XHJcbiAgICBcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdE5hbWUpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0VmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgICBpdGVtQ2FyZEJvdHRvbUhhbGYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0taW1hZ2UtY29udGFpbmVyXCIpXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLWltYWdlXCIpO1xyXG4gICAgICBsZXQgaXRlbUltYWdlID0gZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGl0ZW1JbWFnZTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UpO1xyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1zdGF0c1wiKTtcclxuICAgIFxyXG4gICAgICAvLyBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgLy8gZWxlbWVudENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZX0nKWBcclxuICAgICAgLy8gZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRDb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgZm9yIChjb25zdCBzdGF0IG9mIGl0ZW1TdGF0c1RvcEhhbGYpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmlkID0gc3RhdC5pZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXROYW1lLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiOlxcdTAwQTBcIjtcclxuICAgICAgICBzdGF0TmFtZS5zdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdGF0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpZiAoc3RhdC5uYW1lID09IFwiUmFyaXR5XCIpIHtcclxuICAgICAgICAgIGxldCByYXJpdHlOYW1lID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0YXQudmFsdWUpXHJcbiAgICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gcmFyaXR5TmFtZTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5jb2xvciA9IHJhcml0eUNvbG9yc1tpdGVtLl9yYXJpdHldO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmZvbnRXZWlnaHQgPSA4MDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0Lm5hbWUgPT0gXCJIZXJvIFNjb3JlXCIpIHtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSBcIitcIiArIHN0YXQudmFsdWU7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuZm9udFNpemUgPSBcIjMycHhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnNyYyA9IHN0YXQuaWNvbjtcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7IC8vIEFsaWduIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5IGluIGxpbmUgd2l0aCB0aGUgdGV4dFxyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7IC8vIEFkZCBtYXJnaW4gYmV0d2VlbiB0aGUgdGV4dCBhbmQgaW1hZ2VcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IC8vIEVuYWJsZSBmbGV4Ym94IGxheW91dFxyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjsgLy8gQWxpZ24gaXRlbXMgdmVydGljYWxseSBpbiB0aGUgY2VudGVyXHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0YXQudmFsdWUpKTtcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEljb24pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRWYWx1ZS5hcHBlbmRDaGlsZCh2YWx1ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5hcHBlbmRDaGlsZChzdGF0TmFtZSk7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5hcHBlbmRDaGlsZChzdGF0VmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1jbG9zZVwiKTtcclxuICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaGlkZUludmVudG9yeU1vZGFsKGUpIFxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIk1vZGFsIFRpdGxlXCI7XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIHRoZSBpbnZlbnRvcnkgbW9kYWwgY29udGVudC5cIjtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxUaXRsZSk7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZENvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZFRvcEhhbGYpO1xyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRCb3R0b21IYWxmKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbVN0YXRzKTtcclxuICAgIFxyXG4gICAgICAvLyBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dCk7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWwuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxDb250ZW50KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbCk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIGludmVudG9yeU1vZGFsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwoZSwgaW52ZW50b3J5KSB7XHJcbiAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGNyZWF0ZUl0ZW1DYXJkTW9kYWwoZSwgaW52ZW50b3J5KTtcclxuICAgIGludmVudG9yeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBjYWxjSGVyb1Njb3JlIChwbGF5ZXJDaGFyYWN0ZXIpIHtcclxuICAgIGxldCBoZXJvU2NvcmUgPSAwO1xyXG5cclxuICAgIC8vIEJhc2Ugc3RhdHMgY2FsY1xyXG4gICAgbGV0IGluaGVyZW50U3RyZW5ndGggPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJzdHJlbmd0aFwiKTtcclxuICAgIGxldCBpbmhlcmVudEludGVsbGlnZW5jZSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImludGVsbGlnZW5jZVwiKTtcclxuICAgIGxldCBpbmhlcmVudERleHRlcml0eSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImRleHRlcml0eVwiKTtcclxuICAgIGxldCBpbmhlcmVudENvbnN0aXR1dGlvbiA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImNvbnN0aXR1dGlvblwiKTtcclxuXHJcbiAgICAvLyBXZWFwb24gU3RhdHMgQ2FsY1xyXG4gICAgbGV0IHdlYXBvblN0cmVuZ3RoID0gMDtcclxuICAgIGxldCB3ZWFwb25JbnRlbGxpZ2VuY2UgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkRleHRlcml0eSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uQ29uc3RpdHV0aW9uID0gMDtcclxuICAgIGxldCBlcXVpcG1lbnRTdGF0ID0gMDtcclxuICAgXHJcbiAgICBmb3IgKGxldCB3ZWFwb25JbmRleCA9IDA7IHdlYXBvbkluZGV4IDwgcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zLmxlbmd0aDsgd2VhcG9uSW5kZXgrKykge1xyXG4gICAgICAgIHdlYXBvblN0cmVuZ3RoICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLnN0cmVuZ3RoO1xyXG4gICAgICAgIHdlYXBvbkludGVsbGlnZW5jZSArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5pbnRlbGxpZ2VuY2U7XHJcbiAgICAgICAgd2VhcG9uRGV4dGVyaXR5ICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmRleHRlcml0eTtcclxuICAgICAgICB3ZWFwb25Db25zdGl0dXRpb24gKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY29uc3RpdHV0aW9uO1xyXG4gICAgICAgIGxldCB3ZWFwb25Dcml0Q2hhbmNlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY3JpdENoYW5jZTtcclxuICAgICAgICBsZXQgd2VhcG9uQ3JpdERhbWFnZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNyaXREYW1hZ2U7XHJcbiAgICAgICAgbGV0IHdlYXBvbkRhbWFnZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmRhbWFnZTtcclxuICAgICAgICBlcXVpcG1lbnRTdGF0ICs9ICh3ZWFwb25EYW1hZ2UgKyAod2VhcG9uRGFtYWdlICogd2VhcG9uQ3JpdENoYW5jZSAqIHdlYXBvbkNyaXREYW1hZ2UpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gVG90YWwgU3RhdHNcclxuXHJcbiAgICBsZXQgdG90YWxTdHJlbmd0aCA9IGluaGVyZW50U3RyZW5ndGggKyB3ZWFwb25TdHJlbmd0aDtcclxuICAgIGxldCB0b3RhbEludGVsbGlnZW5jZSA9IGluaGVyZW50SW50ZWxsaWdlbmNlICsgd2VhcG9uSW50ZWxsaWdlbmNlO1xyXG4gICAgbGV0IHRvdGFsRGV4dGVyaXR5ID0gaW5oZXJlbnREZXh0ZXJpdHkgKyB3ZWFwb25EZXh0ZXJpdHk7XHJcbiAgICBsZXQgdG90YWxDb25zdGl0dXRpb24gPSBpbmhlcmVudENvbnN0aXR1dGlvbiArIHdlYXBvbkNvbnN0aXR1dGlvbjtcclxuXHJcbiAgICBzd2l0Y2gocGxheWVyQ2hhcmFjdGVyLmhlcm9UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgICAgdG90YWxTdHJlbmd0aCAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgICB0b3RhbEludGVsbGlnZW5jZSAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgICB0b3RhbERleHRlcml0eSAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgdG90YWxDb25zdGl0dXRpb24gKj0gMjtcclxuICAgIH1cclxuXHJcbiAgICBoZXJvU2NvcmUgKz0gKHRvdGFsU3RyZW5ndGggKyB0b3RhbEludGVsbGlnZW5jZSArIHRvdGFsRGV4dGVyaXR5ICsgdG90YWxDb25zdGl0dXRpb24gKyBlcXVpcG1lbnRTdGF0KVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIGhlcm9TY29yZS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY1dlYXBvblNjb3JlICh3ZWFwb24pIHtcclxuICAgIFxyXG4gICAgbGV0IHRvdGFsV2VhcG9uU2NvcmUgPSAwOyBcclxuXHJcbiAgICBsZXQgd2VhcG9uU3RyZW5ndGggPSAwO1xyXG4gICAgbGV0IHdlYXBvbkludGVsbGlnZW5jZSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uRGV4dGVyaXR5ID0gMDtcclxuICAgIGxldCB3ZWFwb25Db25zdGl0dXRpb24gPSAwO1xyXG4gICAgbGV0IGVxdWlwbWVudFN0YXQgPSAwO1xyXG5cclxuICAgIFxyXG4gICAgd2VhcG9uU3RyZW5ndGggKz0gd2VhcG9uLl9zdGF0cy5zdHJlbmd0aDtcclxuICAgIHdlYXBvbkludGVsbGlnZW5jZSArPSB3ZWFwb24uX3N0YXRzLmludGVsbGlnZW5jZTtcclxuICAgIHdlYXBvbkRleHRlcml0eSArPSB3ZWFwb24uX3N0YXRzLmRleHRlcml0eTtcclxuICAgIHdlYXBvbkNvbnN0aXR1dGlvbiArPSB3ZWFwb24uX3N0YXRzLmNvbnN0aXR1dGlvbjtcclxuICAgIGxldCB3ZWFwb25Dcml0Q2hhbmNlID0gd2VhcG9uLl9zdGF0cy5jcml0Q2hhbmNlO1xyXG4gICAgbGV0IHdlYXBvbkNyaXREYW1hZ2UgPSB3ZWFwb24uX3N0YXRzLmNyaXREYW1hZ2U7XHJcbiAgICBsZXQgd2VhcG9uRGFtYWdlID0gd2VhcG9uLl9zdGF0cy5kYW1hZ2U7XHJcbiAgICBlcXVpcG1lbnRTdGF0ICs9ICh3ZWFwb25EYW1hZ2UgKyAod2VhcG9uRGFtYWdlICogd2VhcG9uQ3JpdENoYW5jZSAqIHdlYXBvbkNyaXREYW1hZ2UpKTtcclxuXHJcbiAgICB0b3RhbFdlYXBvblNjb3JlID0gKHdlYXBvblN0cmVuZ3RoICsgd2VhcG9uSW50ZWxsaWdlbmNlICsgd2VhcG9uRGV4dGVyaXR5ICsgd2VhcG9uQ29uc3RpdHV0aW9uICsgZXF1aXBtZW50U3RhdClcclxuXHJcbiAgICByZXR1cm4gdG90YWxXZWFwb25TY29yZS50b0ZpeGVkKDIpO1xyXG5cclxufVxyXG4gICAgXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQge2ludmVudG9yeUV2ZW50SGFuZGxlcn0gIGZyb20gJy4vaW52ZW50b3J5RnVuY3Rpb25zJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVySW52ZW50b3J5LCBwbGF5ZXJFcXVpcHBlZEl0ZW1zIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuXHJcbmNvbnNvbGUubG9nKFwiSGlcIik7XHJcbmNvbnNvbGUubG9nKGN1cnJlbmN5Q29udGFpbmVyKTtcclxubGV0IGludmVudG9yeSA9IFtdO1xyXG5cclxuaW52ZW50b3J5RXZlbnRIYW5kbGVyKGludmVudG9yeSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9