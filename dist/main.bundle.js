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

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Armour: () => (/* binding */ Armour),
/* harmony export */   Currency: () => (/* binding */ Currency),
/* harmony export */   ElementalPower: () => (/* binding */ ElementalPower),
/* harmony export */   Equipment: () => (/* binding */ Equipment),
/* harmony export */   PlayerCharacter: () => (/* binding */ PlayerCharacter),
/* harmony export */   PlayerStats: () => (/* binding */ PlayerStats),
/* harmony export */   Quest: () => (/* binding */ Quest),
/* harmony export */   Weapon: () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var _zodiacPowers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zodiacPowers */ "./src/zodiacPowers.js");


class Quest {
    constructor(objective, dateToComplete, questComplete, reward, id) {
        this.objective = objective;
        this.dateToComplete = dateToComplete;
        this.questComplete = questComplete;
        this.reward = reward;
        this.id = id;
    }

}
class Currency {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
}

class Equipment {
    constructor(object, isEquipped, inPlayerInventory, id) {
        this._object = object;
        this._isEquipped = isEquipped;
        this._inPlayerInventory = inPlayerInventory;
        this._id = id;
    }
}

class Weapon {
    constructor(name, type, classRestriction, rarity, stats, id) {
      this._name = name;
      this._type = type;
      this._classRestriction = classRestriction;
      this._rarity = rarity;
      this._stats = stats;
      this._id = id;
    }
  
    get name() {
      return this._name;
    }
  
    get type() {
      return this._type;
    }

    get classRestriction() {
      return this._classRestriction;
    }
  
    get rarity() {
      return this._rarity;
    }
  
    get stats() {
      return this._stats;
    }

    get id() {
      return this._id;
    }
  }
  
  class Armour {
    constructor(name, type, rarity, stats) {
      this._name = name;
      this._type = type;
      this._rarity = rarity;
      this._stats = stats;
    }
  
    get name() {
      return this._name;
    }
  
    get type() {
      return this._type;
    }
  
    get rarity() {
      return this._rarity;
    }
  
    get stats() {
      return this._stats;
    }
  }

class PlayerStats {
    constructor(heroType) {
      this._heroType = heroType;
      this._baseStats = this.getInitialBaseStats(heroType);
      this._equippedStats = {};
      this._skillPoints = 0;
    }
  
    getStat(statName) {
      const baseValue = this._baseStats[statName] || 0;
      const equippedValue = this._equippedStats[statName] || 0;
      return baseValue + equippedValue;
    }
  
    setStat(statName, value) {
      this._baseStats[statName] = value;
    }
  
    addStat(statName, value) {
      if (this._baseStats.hasOwnProperty(statName)) {
        this._baseStats[statName] += value;
      } else {
        this._baseStats[statName] = value;
      }
    }
  
    equipItemStats(itemStats) {
      for (const statName in itemStats) {
        if (itemStats.hasOwnProperty(statName)) {
          if (this._equippedStats.hasOwnProperty(statName)) {
            this._equippedStats[statName] += itemStats[statName];
          } else {
            this._equippedStats[statName] = itemStats[statName];
          }
        }
      }
    }
  
    unequipItemStats(itemStats) {
      for (const statName in itemStats) {
        if (itemStats.hasOwnProperty(statName) && this._equippedStats.hasOwnProperty(statName)) {
          this._equippedStats[statName] -= itemStats[statName];
          if (this._equippedStats[statName] <= 0) {
            delete this._equippedStats[statName];
          }
        }
      }
    }
  
    getInitialBaseStats(heroType) {
      switch (heroType) {
        case "Sorcerer":
          return {
            strength: 4,
            dexterity: 6,
            intelligence: 8,
            constitution: 4,
          };
        case "Priest":
          return {
            strength: 4,
            dexterity: 4,
            intelligence: 6,
            constitution: 8,
          };
        case "Warrior":
          return {
            strength: 8,
            dexterity: 4,
            intelligence: 4,
            constitution: 6,
          };
        case "Rogue":
          return {
            strength: 6,
            dexterity: 8,
            intelligence: 4,
            constitution: 4,
          };
        default:
          throw new Error("Invalid class type.");
      }
    }
  
    levelUp() {
      const level = this._baseStats.level || 1;
      this._baseStats.level = level + 1;
      this._skillPoints += 5; // Assuming the player receives 5 skill points per level
    }
  
    allocateSkillPoint(statName) {
      if (this._skillPoints > 0 && this._baseStats.hasOwnProperty(statName)) {
        this._baseStats[statName] += 1;
        this._skillPoints -= 1;
      }
    }
  
    get skillPoints() {
      return this._skillPoints;
    }
  }
  

  class PlayerCharacter {
    constructor(spriteImage, heroType, equippedItems, elementalSelection) {
      this._spriteImage = spriteImage;
      this._heroType = heroType;
      this._stats = new PlayerStats(heroType);
      this._equippedItems = equippedItems;
      this._elementalSelection = elementalSelection;
      this._elementalAffinity = this.getElementalAffinity(elementalSelection);
    }
  
  
    get spriteImage() {
        return this._spriteImage;
    }
    
    set spriteImage(spriteImage) {
        this._spriteImage = spriteImage;
    }

    get heroType() {
      return this._heroType;
    }

    set heroType(heroType) {
      this._heroType = heroType;
      this._stats = new PlayerStats(heroType);
    }
    
    get stats() {
        return this._stats;
    }
    
    set stats(stats) {
        this._stats = stats;
    }
    
    get equippedItems() {
        return this._equippedItems;
    }
    
    set equippedItems(equippedItems) {
        this._equippedItems = equippedItems;
    }

    get elementalAffinity() {
        return this._elementalAffinity;
    }
    
    set elementalAffinity(elementalAffinity) {
        this._elementalAffinity = elementalAffinity;
    }

    equipItem(item) {
        // Additional logic for equipping an item
        this._equippedItems.push(item);
        this._stats.equipItemStats(item.stats);
      }
    
    attack(target) {
        // Perform attack logic
        console.log(`Attacking ${target}!`);
    }

    specialAttack(target) {
        // Perform special attack logic here
        console.log(`Special Attacking ${target}!`);
    }

    isBirthdayInRange(birthday, startDate, endDate) {
        // Convert the birthday to a Date object if it's a string
        const birthdayDate = typeof birthday === 'string' ? new Date(birthday) : birthday;

        // Get the month and day of the birthday
        const birthdayMonth = birthdayDate.getMonth();
        const birthdayDay = birthdayDate.getDate();

        // Check if the month and day of the birthday fall within the range
        const startMonth = startDate.getMonth();
        const startDay = startDate.getDate();
        const endMonth = endDate.getMonth();
        const endDay = endDate.getDate();
        
        // Capricorn edge case
        if (birthdayMonth == 11 && birthdayDay > 21) {
            return "Capricorn";
        }
        
        if (birthdayMonth == 0 && birthdayDay < 20) {
            return "Capricorn";
        }

        // Compare the month and day values
        if (
          (birthdayMonth > startMonth || (birthdayMonth === startMonth && birthdayDay >= startDay)) &&
          (birthdayMonth < endMonth || (birthdayMonth === endMonth && birthdayDay <= endDay))
        ) {
          return true;
        } else {
          return false;
        }
    }
    
      // Other methods can be added here for further functionality
      getElementalAffinity(elementalSelection) {

        // if elemental selection is a birthday provided:
        if (elementalSelection instanceof Date) {
          for (let index in _zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            // Alias the start and end dates of the zodiac Signs date range property
            let dateChecker = (_zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][index].convertDateRange(_zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][index]._dateRange));
            let birthDayRangeCheck = this.isBirthdayInRange(elementalSelection, dateChecker.startDate, dateChecker.endDate)

              if (birthDayRangeCheck == 'Capricorn') {
                return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][9]);
              } else if (birthDayRangeCheck) {
                return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][index]);
              }  
          }
        } else {
          for (let index in _zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            if (elementalSelection == _zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][index]._uniqueElement) {
              return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_0__["default"][index]);
            }
          }
        }
        return null;
      }
  }
      

    class ElementalPower {
        constructor(name, dateRange, baseElement, uniqueElement, deity) {
          this._name = name;
          this._dateRange = dateRange;
          this._baseElement = baseElement;
          this._uniqueElement = uniqueElement;
          this._deity = deity;
        }
      }



/***/ }),

/***/ "./src/currencyFunctions.js":
/*!**********************************!*\
  !*** ./src/currencyFunctions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currencyAggregator: () => (/* binding */ currencyAggregator),
/* harmony export */   displayPlayerCurrentCurrency: () => (/* binding */ displayPlayerCurrentCurrency),
/* harmony export */   rewardUtilities: () => (/* binding */ rewardUtilities)
/* harmony export */ });
/* harmony import */ var _images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/GGToken.png */ "./src/images/GGToken.png");
/* harmony import */ var _images_ChestKey_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/ChestKey.png */ "./src/images/ChestKey.png");




const validCurrencies = ["GGTokens", "ChestKeys"]
const currencyImages = {
    GGTokens: _images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__,
    ChestKeys: _images_ChestKey_png__WEBPACK_IMPORTED_MODULE_1__
};


const rewardUtilities = {

    validCurrencies: [...validCurrencies],
    getRewardImage: function(quest) {

        const rewardType = quest.reward.type;

        if (validCurrencies.includes(rewardType)) {
            return currencyImages[rewardType];
        }

    // Return a default image or handle invalid reward types
    return null;
  }
};

function displayPlayerCurrentCurrency (currencyContainer) {
    for (let index in currencyContainer) {
        let currencyAmount = document.querySelector(`#${currencyContainer[index].type}UserInterface`);
        currencyAmount.textContent = "";
        currencyAmount.textContent = (`${currencyContainer[index].amount}`);
    }
}


function currencyAggregator (currencyContainer, currentQuest) {

    if (currentQuest.questComplete == true) {
        for (let index in currencyContainer) {
            if (currencyContainer[index].type == currentQuest.reward.type) {
                currencyContainer[index].amount += currentQuest.reward.amount;
            }
        }
    } 
}



/***/ }),

/***/ "./src/dueDate.js":
/*!************************!*\
  !*** ./src/dueDate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ timeToComplete)
/* harmony export */ });
function timeToComplete (hours, minutes, seconds) {
    let currentDate = new Date ();

    currentDate.setHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setSeconds(seconds);


    return currentDate;
}

/***/ }),

/***/ "./src/eventManager.js":
/*!*****************************!*\
  !*** ./src/eventManager.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ userInterfaceManager)
/* harmony export */ });
/* harmony import */ var _questFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questFunctions */ "./src/questFunctions.js");
/* harmony import */ var _currencyFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions */ "./src/currencyFunctions.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");




function userInterfaceManager (currentQuestList, currencyContainer) {
    // let persistingCurrencyContainer = getDataFromLocalStorage(`${currencyContainer}`)
    // let persistingCurrentQuestList = getDataFromLocalStorage(`${currentQuestList}`)
    (0,_currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);
    (0,_questFunctions__WEBPACK_IMPORTED_MODULE_0__.removeCompletedQuest)(currentQuestList, currencyContainer);
    (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_2__.saveDataToLocalStorage)("currentQuestList", currentQuestList);
    (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_2__.saveDataToLocalStorage)("currencyContainer", currencyContainer);
    (0,_questFunctions__WEBPACK_IMPORTED_MODULE_0__.createAndDisplayQuestCards)(currentQuestList, currencyContainer);
}

/***/ }),

/***/ "./src/gachaSpinFunctions.js":
/*!***********************************!*\
  !*** ./src/gachaSpinFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSlotMachineModal: () => (/* binding */ closeSlotMachineModal),
/* harmony export */   openSlotMachineModal: () => (/* binding */ openSlotMachineModal),
/* harmony export */   resetSlotMachineImages: () => (/* binding */ resetSlotMachineImages),
/* harmony export */   spin: () => (/* binding */ spin)
/* harmony export */ });
/* harmony import */ var _shopFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopFunction */ "./src/shopFunction.js");
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");
/* harmony import */ var _getItemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getItemImage */ "./src/getItemImage.js");




const weaponImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/weapons sync \\.(png)$")
  );
  
  const armourImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/armour sync \\.(png)$")
  );
  
  const elementImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/elements sync \\.(png)$")
  );
  
  const rarityImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/rarities sync \\.(png)$")
  )
  
function checkValidCurrencyAmount(currencyContainer) {
    if (currencyContainer[0].amount < 20) {
      alert("INSUFFICIENT GG TOKENS");
      return false;
    } else {
      currencyContainer[0].amount -= 20;
      return true;
    }
}

function generateSlotMachineItem (heroSelection) {
   // Generate the weapon the player receives using the generateRandomWeapon function
   let generatedWeapon = (0,_shopFunction__WEBPACK_IMPORTED_MODULE_0__.generateRandomWeapon)(heroSelection);

   // Parse the weapon Class data to be used for front end images
   let resultingType = generatedWeapon._type.replace(/\s/g, '');
   let resultingRarity = generatedWeapon._rarity + "Rarity";
   let resultingElement = generatedWeapon._element.toLowerCase();

   // Pass the data to a find function that locates the checks each image (string) URL to see if it includes the parsed data   
   // If data matches, return the appropriate image link as variable 
   let selectedTypeImage = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getWeaponImage)(resultingType);
   let selectedRarityImage = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getRarityImage)(resultingRarity);
   let selectedElementImage = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getElementImage)(resultingElement);
   
   // Images for the equipment reel
   const equipmentReel = document.querySelector('#equipmentReel');

   // Selected equipment case -- 1st reel, middle slot 
   const selectedEquipmentSymbol =  equipmentReel.querySelector('.selected')
   selectedEquipmentSymbol.style.backgroundImage = `url('${selectedTypeImage}')`;

   // Top equipment case -- 1st reel, top slot
   const topEquipmentSymbol = equipmentReel.querySelector('.top');
   topEquipmentSymbol.style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`

   // Bottom equipment case -- 1st reel, bottom slot
   const bottomEquipmentSymbol = equipmentReel.querySelector('.bottom');
   bottomEquipmentSymbol.style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`
     
   
   // Images for the rarity reel
   const rarityReel = document.getElementById('rarityReel')

   // Selected rarity case -- 2nd reel, middle slot 
   const selectedRaritySymbol =  rarityReel.querySelector('.selected')
   selectedRaritySymbol.style.backgroundImage = `url('${selectedRarityImage}')`;

   // Top rarity case -- 2nd reel, top slot
   const topRaritySymbol = rarityReel.querySelector('.top');
   topRaritySymbol.style.backgroundImage = `url('${rarityImages[Math.floor(Math.random() * rarityImages.length)]}')`

   // Bottom rarity case -- 2nd reel, bottom slot
   const bottomRaritySymbol = rarityReel.querySelector('.bottom');
   bottomRaritySymbol.style.backgroundImage = `url('${rarityImages[Math.floor(Math.random() * rarityImages.length)]}')`
      

   // Images for the element reel
   const elementReel = document.getElementById('elementReel')

   // Selected element case -- 3rd reel, middle slot 
   const selectedElementSymbol =  elementReel.querySelector('.selected')
   selectedElementSymbol.style.backgroundImage = `url('${selectedElementImage}')`;

   // Top element case -- 3rd reel, top slot
   const topElementSymbol = elementReel.querySelector('.top');
   topElementSymbol.style.backgroundImage = `url('${elementImages[Math.floor(Math.random() * elementImages.length)]}')`

   // Bottom element case -- 3rd reel, bottom slot
   const bottomElementSymbol = elementReel.querySelector('.bottom');
   bottomElementSymbol.style.backgroundImage = `url('${elementImages[Math.floor(Math.random() * elementImages.length)]}')`

   return generatedWeapon;
 }


function spin (heroSelection, currencyContainer) {

    if (checkValidCurrencyAmount(currencyContainer)) {
        return generateSlotMachineItem(heroSelection);
    } else {
        closeSlotMachineModal();
        return false;
    }
}

  function resetSlotMachineImages () {
    const symbolElements = document.querySelectorAll(".symbol");
    console.log(symbolElements);

      // Iterate over the symbol elements
      symbolElements.forEach((symbolElement) => {
        symbolElement.style.backgroundImage = "";
      })
     
    }


  function openSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'block';
  }
  
  function closeSlotMachineModal() {
    resetSlotMachineImages();
    document.getElementById('slotMachineModal').style.display = 'none';
  }



/***/ }),

/***/ "./src/getItemImage.js":
/*!*****************************!*\
  !*** ./src/getItemImage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getArmourImage: () => (/* binding */ getArmourImage),
/* harmony export */   getElementImage: () => (/* binding */ getElementImage),
/* harmony export */   getRarityImage: () => (/* binding */ getRarityImage),
/* harmony export */   getWeaponImage: () => (/* binding */ getWeaponImage)
/* harmony export */ });
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");


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

function getWeaponImage (weapon) {
    let weaponImageUrl = weaponImages.find(image => image.includes(weapon));
    return weaponImageUrl;
}

function getArmourImage (armour) {
    let armourImageUrl = armourImages.find(image => image.includes(armour));
    return armourImageUrl;
}

function getRarityImage (rarity) {
    let rarityImageUrl = rarityImages.find(image => image.includes(rarity));
    return rarityImageUrl;
}

function getElementImage (element) {
    let elementImageUrl = elementImages.find(image => image.includes(element));
    return elementImageUrl;
}




/***/ }),

/***/ "./src/getObjective.js":
/*!*****************************!*\
  !*** ./src/getObjective.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getObjective)
/* harmony export */ });
function getObjective (objective) {
    return String(objective);
}

/***/ }),

/***/ "./src/imageHandler.js":
/*!*****************************!*\
  !*** ./src/imageHandler.js ***!
  \*****************************/
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
/* harmony export */   createItemCardModal: () => (/* binding */ createItemCardModal),
/* harmony export */   generateItemCardModal: () => (/* binding */ generateItemCardModal),
/* harmony export */   hideInventoryModal: () => (/* binding */ hideInventoryModal),
/* harmony export */   inventoryEventHandler: () => (/* binding */ inventoryEventHandler),
/* harmony export */   updateInventoryPage: () => (/* binding */ updateInventoryPage)
/* harmony export */ });
/* harmony import */ var _getItemImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getItemImage */ "./src/getItemImage.js");


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
function updateInventoryPage (inventory) {

    for (let item = 0; item < inventory.length; item++) {
        console.log(inventory[item]);
        let itemContainer = document.querySelectorAll('.inventoryItem')[item];
        let itemImage = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getWeaponImage)(inventory[item]._type.replace(/\s/g, ''));
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

function createItemCardModal(e, inventory) {

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


let element = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getElementImage)((inventory._element).toLowerCase());
console.log(element)
let rarity = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getRarityImage)(inventory._rarity);
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

function generateItemCardModal(e, inventory) {
  const inventoryModal = createItemCardModal(e, inventory);
  inventoryModal.style.display = "block";
}

function hideInventoryModal(e) {
    const inventoryModal = e.target.parentElement.parentElement;
    inventoryModal.style.display = "none";
    inventoryModal.remove();
  }

function generateItemCard(item) {
    const itemImage = (0,_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getWeaponImage)(item);
    console.log(itemImage);
}

function getItemImage (inventory) {
    
}

/***/ }),

/***/ "./src/itemStats.js":
/*!**************************!*\
  !*** ./src/itemStats.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemPossibleElements: () => (/* binding */ itemPossibleElements),
/* harmony export */   itemPossiblePrefix: () => (/* binding */ itemPossiblePrefix),
/* harmony export */   itemPossibleRarity: () => (/* binding */ itemPossibleRarity),
/* harmony export */   itemPossibleStats: () => (/* binding */ itemPossibleStats),
/* harmony export */   itemPossibleSuffix: () => (/* binding */ itemPossibleSuffix)
/* harmony export */ });
const itemPossibleElements = [
    "Steel",
    "Abyss",
    "Zephyr",
    "Lunar",
    "Solar",
    "Gaia",
    "Aether",
    "Corrode",
    "Inferno",
    "Gaia",
    "Volt",
    "Mist",
]

const itemPossibleRarity = [
    { rarity: "normal", chance: 40},
    { rarity: "uncommon", chance: 30 },
    { rarity: "rare", chance: 18 },
    { rarity: "epic", chance: 9 },
    { rarity: "legendary", chance: 3 },
]


const itemPossibleStats = {
  normal: {
    damage: { min: 5, max: 10 },
    strength: { min: 1, max: 5 },
    dexterity: { min: 1, max: 5 },
    intelligence: { min: 1, max: 5 },
    constitution: { min: 1, max: 5 },
    critDamage: { min: 10, max: 20 },
    critChance: { min: 0.005, max: 0.02 }
  },
  uncommon: {
    damage: { min: 7.5, max: 15 },
    strength: { min: 1.5, max: 7.5 },
    dexterity: { min: 1.5, max: 7.5 },
    intelligence: { min: 1.5, max: 7.5 },
    constitution: { min: 1.5, max: 7.5 },
    critDamage: { min: 15, max: 30 },
    critChance: { min: 0.02, max: 0.06 } // Updated min and max
  },
  rare: {
    damage: { min: 15, max: 30 },
    strength: { min: 3, max: 15 },
    dexterity: { min: 3, max: 15 },
    intelligence: { min: 3, max: 15 },
    constitution: { min: 3, max: 15 },
    critDamage: { min: 30, max: 60 },
    critChance: { min: 0.06, max: 0.12 } // Updated min and max
  },
  epic: {
    damage: { min: 25, max: 50 },
    strength: { min: 5, max: 25 },
    dexterity: { min: 5, max: 25 },
    intelligence: { min: 5, max: 25 },
    constitution: { min: 5, max: 25 },
    critDamage: { min: 50, max: 100 },
    critChance: { min: 0.12, max: 0.24 } // Updated min and max
  },
  legendary: {
    damage: { min: 50, max: 100 },
    strength: { min: 10, max: 50 },
    dexterity: { min: 10, max: 50 },
    intelligence: { min: 10, max: 50 },
    constitution: { min: 10, max: 50 },
    critDamage: { min: 100, max: 200 },
    critChance: { min: 0.24, max: 0.3 } // Updated max
  }
};

  const itemPossiblePrefix = {
    normal: [
      "Ordinary", "Common", "Plain", "Regular", "Basic"
    ],
    uncommon: [
      "Uncommon", "Strange", "Special", "Distinctive", "Abnormal"
    ],
    rare: [
      "Rare", "Precious", "Exquisite", "Magnificent", "Elite"
    ],
    epic: [
      "Epic", "Grand", "Illustrious", "Transcendent", "Majestic"
    ],
    legendary: [
      "Legendary", "Ultimate", "Eternal", "Invincible", "Godlike"
    ]
  };

  const itemPossibleSuffix = {
    Steel: "of War",
    Abyss: "of Wailing",
    Zephyr: "of Howling",
    Lunar: "of Moonlight",
    Solar: "of Sunlight",
    Terra: "of Tectonic",
    Aether: "of Gravity",
    Corrode: "of Poison",
    Inferno: "of Burning",
    Gaia: "of Nature",
    Volt: "of Shocking",
    Mist: "of Freezing"
  };

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

/***/ "./src/modalFunctions.js":
/*!*******************************!*\
  !*** ./src/modalFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeFormModal: () => (/* binding */ closeFormModal),
/* harmony export */   displayFormModal: () => (/* binding */ displayFormModal)
/* harmony export */ });
function displayFormModal () {
    
    const modalDiv = document.getElementById('modal-form');

    // Display modal by setting display to block
    modalDiv.style.display = 'block';
 
    }
 
function closeFormModal (event) {
    
    const modalDiv = document.getElementById('modal-form');

    // Hide modal by setting display to none
    event.preventDefault();
    modalDiv.style.display = 'none';
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
/* harmony export */   calcHeroScore: () => (/* binding */ calcHeroScore)
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

/***/ }),

/***/ "./src/questFunctions.js":
/*!*******************************!*\
  !*** ./src/questFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQuest: () => (/* binding */ addQuest),
/* harmony export */   createAndDisplayQuestCards: () => (/* binding */ createAndDisplayQuestCards),
/* harmony export */   getNewQuest: () => (/* binding */ getNewQuest),
/* harmony export */   removeCompletedQuest: () => (/* binding */ removeCompletedQuest)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions.js */ "./src/currencyFunctions.js");
/* harmony import */ var _eventManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventManager.js */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageFunctions.js */ "./src/localStorageFunctions.js");









function getNewQuest () {
    let questObject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Quest(null, null, null, new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Currency(null, null), null)
    let getQuestFormObjective = document.querySelector("#formObjective").value;
    let getQuestFormDate = document.querySelector("#formDate").value;
    let getQuestCurrencyType = document.querySelector("#formCurrencyType").value;
    let getQuestCurrencyAmount = document.querySelector("#formCurrencyAmount").value;

    questObject.objective = getQuestFormObjective;
    questObject.dateToComplete = getQuestFormDate;
    questObject.questComplete = false;
    questObject.reward.type = getQuestCurrencyType;
    questObject.reward.amount = parseInt(getQuestCurrencyAmount);
    questObject.id = null;

    return questObject;
}



function createAndDisplayQuestCards (currentQuestList, currencyContainer) {

    let taskContainer = document.querySelector(".questContainer");
    taskContainer.textContent = "";

    for (let questIndex in currentQuestList) {

        // Initialize Card (Container) Creation and Content
        let card = document.createElement("div"); 
        card.classList.add("questCard")
        card.setAttribute("id", `${[questIndex]}`);


        //Quest Objective Content
        let questObjective = document.createElement("div");
        questObjective.classList.add("questCardObjective");
        questObjective.setAttribute("id", `questCard-${currentQuestList[questIndex].objective}`)
        questObjective.textContent = (`${currentQuestList[questIndex].objective}`);

        //Quest Complete Checkbox Nested in Quest Objective Content Div 
        let questCompleteContainer = document.createElement("div");
        questCompleteContainer.classList.add("questCompleteContainer");

        let questCompleteLabel = document.createElement("label");
        questCompleteLabel.textContent = "Mark Quest Complete";
        questCompleteLabel.htmlFor = `isQuestComplete-${questIndex}`;
       

        let questCompleteCheckbox = document.createElement("input");
        questCompleteCheckbox.classList.add("questCompleteCheckbox");
        questCompleteCheckbox.setAttribute("type", "checkbox");
        questCompleteCheckbox.setAttribute("id", `isQuestComplete-${questIndex}`);
        questCompleteCheckbox.addEventListener("change", function() {

                if (this.checked) {
                    currentQuestList[questIndex].questComplete = true;
                    (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.currencyAggregator)(currencyContainer, currentQuestList[questIndex]);
                    (0,_eventManager_js__WEBPACK_IMPORTED_MODULE_2__["default"])(currentQuestList, currencyContainer);
                } 
            });


        questCompleteContainer.appendChild(questCompleteCheckbox);
        questCompleteContainer.appendChild(questCompleteLabel);
        questObjective.appendChild(questCompleteContainer);
        


        //Date to Complete Content
        let dateToCompleteBox = document.createElement("div");
        dateToCompleteBox.classList.add("dateToCompleteBox");
        dateToCompleteBox.setAttribute("id", `questCard-${currentQuestList[questIndex].dateToComplete}`)
        dateToCompleteBox.textContent = (`${currentQuestList[questIndex].dateToComplete}`);

        //Reward Box Content
        let rewardBox =  document.createElement("div");
        rewardBox.classList.add("rewardBox");
        rewardBox.setAttribute("id", `questCard-${[questIndex]}-reward`);

            // Reward Box Image
            let rewardBoxCurrencyTypeImage = document.createElement("img");
            rewardBoxCurrencyTypeImage.setAttribute("src", _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(currentQuestList[questIndex]));            
            rewardBoxCurrencyTypeImage.classList.add("questRewardImage");
            rewardBox.appendChild(rewardBoxCurrencyTypeImage)
           
            // Reward Box Currency Amount
            let rewardBoxCurrencyAmount = document.createElement("div");
            rewardBoxCurrencyAmount.classList.add("questRewardAmount");
            rewardBoxCurrencyAmount.textContent = (`${currentQuestList[questIndex].reward.amount} ${currentQuestList[questIndex].reward.type}`);
            rewardBox.appendChild(rewardBoxCurrencyAmount);

        card.appendChild(questObjective);
        card.appendChild(dateToCompleteBox);
        card.appendChild(rewardBox);

        taskContainer.appendChild(card);
    }
    
}

function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);
    return currentQuestList;
}

function removeCompletedQuest (currentQuestList) {
    for (let index = 0; index < currentQuestList.length; index++) {
        if (currentQuestList[index].questComplete == true) {
            currentQuestList.splice(index, 1);
        }
    }
}



/***/ }),

/***/ "./src/shopFunction.js":
/*!*****************************!*\
  !*** ./src/shopFunction.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateRandomWeapon: () => (/* binding */ generateRandomWeapon),
/* harmony export */   getItemElement: () => (/* binding */ getItemElement),
/* harmony export */   getItemPrefix: () => (/* binding */ getItemPrefix),
/* harmony export */   getItemRarity: () => (/* binding */ getItemRarity),
/* harmony export */   getItemStats: () => (/* binding */ getItemStats),
/* harmony export */   getItemSuffix: () => (/* binding */ getItemSuffix),
/* harmony export */   getItemType: () => (/* binding */ getItemType),
/* harmony export */   pullItemFromChest: () => (/* binding */ pullItemFromChest)
/* harmony export */ });
/* harmony import */ var _weaponList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weaponList.js */ "./src/weaponList.js");
/* harmony import */ var _itemStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemStats.js */ "./src/itemStats.js");
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");
// Assuming the code for the Weapon class, HeroTypeWeaponList class, and weaponLists for each class is already defined.




const weaponImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/weapons sync \\.(png)$")
);

const armourImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/armour sync \\.(png)$")
);

const elementImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/elements sync \\.(png)$")
);

const rarityImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/rarities sync \\.(png)$")
)



class Weapon {
    constructor(name, type, classRestriction, rarity, stats, element, id) {
        this._name = name;
        this._type = type;
        this._classRestriction = classRestriction;
        this._rarity = rarity;
        this._stats = stats;
        this._element = element;
        this._id = id;
    }
}

function getItemType(playerClass) {

    function getWeaponList(playerClass) {
        switch (playerClass) {
          case "Rogue":
            return _weaponList_js__WEBPACK_IMPORTED_MODULE_0__.rogueWeaponList;
          case "Priest":
            return _weaponList_js__WEBPACK_IMPORTED_MODULE_0__.priestWeaponList;
          case "Warrior":
            return _weaponList_js__WEBPACK_IMPORTED_MODULE_0__.warriorWeaponList;
          case "Sorcerer":
            return _weaponList_js__WEBPACK_IMPORTED_MODULE_0__.sorcererWeaponList;
          case "test":
            return _weaponList_js__WEBPACK_IMPORTED_MODULE_0__.testWeaponList;
          default:
            console.log("Invalid player class.");
            return null;
        }
      }

    const weaponList = getWeaponList(playerClass);
  
    if (weaponList) {
        let randomIndex = Math.floor(Math.random() * weaponList.length);
        return weaponList[randomIndex]._type;
        
    } else {
      // Handle the case of an invalid player class
      console.log("Failed to retrieve weapon list.");
    }
}

function getItemRarity (itemPossibleRarity) {

    // Initialize total chance to 0
    let totalChance = 0;

    // Add the chance values of all rarity object chances
    // This should add up to 100
    for (let rarityObject of itemPossibleRarity) {
        totalChance += rarityObject.chance;
    }

    // Generate a random whole integer between 0 - 100
    let randomChance = Math.round(Math.random() * totalChance);

    // Set rarity value to null
    let rarity = null;

    // Return the rarity based on your randomChance roll. 
    // For example if Random Chance was 94:
    // 94 - 40 (Normal Rarity) = 54 <-- number used in next calc
    // 54 - 30 (Uncommon Rarity) = 24 <-- number used in next calc
    // 24 - 15 (Rare Rarity) = 9 <-- number used in next calc
    // 9 - 10 (Epic Rarity) = -1 <-- Therefore rarity of item is Epic as (9 - 10) < (0)
    for (let rarityObject of itemPossibleRarity) {
        randomChance -= rarityObject.chance;
        // The value is (-0.01 to acount for rounding errors)
        if (randomChance <= -0.01) {
            rarity = rarityObject.rarity;
            return rarity;
        }
    }
}

function getItemStats(itemPossibleStats, itemRarity) {

    function generateRandomNumber(min, max) {
    const decimalPlaces = 2; // Number of decimal places
    const randomNumber = Math.random() * (max - min) + min;
    return Number(randomNumber.toFixed(decimalPlaces));
  }

    // Using the square bracket notation to access the property at runtime
    const rarityStats = itemPossibleStats[itemRarity];
    const itemStats = {};

    for (const stat in rarityStats) {
        const { min, max } = rarityStats[stat];
    itemStats[stat] = generateRandomNumber(min, max);
    console.log(stat, itemStats[stat]);
    }

    return itemStats;

}



function getItemPrefix(itemPossiblePrefix, itemRarity) {
    let randomIndex = Math.floor(Math.random() * itemPossiblePrefix[itemRarity].length)
    return itemPossiblePrefix[itemRarity][randomIndex];
}


function getItemElement(itemPossibleElements) {
    let randomIndex = Math.floor(Math.random() * itemPossibleElements.length);
    return itemPossibleElements[randomIndex]
}

function getItemSuffix(itemPossibleSuffix, element) {
    return itemPossibleSuffix[element];
}



function generateRandomWeapon (playerClass) {

    let weaponType = getItemType(playerClass);
    let weaponElement = getItemElement(_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleElements);
    let weaponRarity = getItemRarity(_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleRarity);
    let weaponStats = getItemStats(_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleStats, weaponRarity);
    let weaponPrefix = getItemPrefix(_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossiblePrefix, weaponRarity);
    let weaponSuffix = getItemSuffix(_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleSuffix, weaponElement);

    return new Weapon(
        (weaponPrefix + " " + weaponType + " " + weaponSuffix), 
        weaponType,
        playerClass,
        weaponRarity,
        weaponStats,
        weaponElement,
        null,
    )

 
}
// Simulating an item being pulled from a chest based on player's class and rarity probabilities
function pullItemFromChest(playerClass, pity) {
   

    // Consider constant rarity object for scaling purposes
    const rarityProbabilities = [
        { rarity: "Normal", chance: 40 },
        { rarity: "Uncommon", chance: 30 },
        { rarity: "Rare", chance: 15 },
        { rarity: "Epic", chance: 10 },
        { rarity: "Legendary", chance: 5 },
    ];

    let totalChance = 0;
    for (const rarityData of rarityProbabilities) {
        totalChance += rarityData.chance;
    }

    let randomChance = Math.random() * totalChance;
    console.log(randomChance);
    let rarity = null;

    for (const rarityData of rarityProbabilities) {
        randomChance -= rarityData.chance;
        if (randomChance <= 0) {
            rarity = rarityData.rarity;
            return rarit
        }
    }

    const randomIndex = Math.floor(Math.random() * weaponList.length);
    const randomWeapon = weaponList[randomIndex];

    // Assign random properties to the weapon
    randomWeapon._name = "Divine Staff"; // Example property
    randomWeapon._rarity = rarity; // Assigning the determined rarity

    // If the pulled item is legendary, reset the pity counter
    if (rarity === "Legendary") {
        pity = 0;
    } else {
        pity++; // Increment the pity counter if a legendary item was not pulled
    }

    // Guarantee a legendary item if the pity counter reaches 100
    if (pity >= 100) {
        randomWeapon._rarity = "Legendary";
        pity = 0; // Reset the pity counter
    }

    randomWeapon._stats = {
        attack: 150,
        intellect: 50,
        stamina: 80,
    }; // Example property

    return { item: randomWeapon, pity };
}


/***/ }),

/***/ "./src/weaponList.js":
/*!***************************!*\
  !*** ./src/weaponList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   priestWeaponList: () => (/* binding */ priestWeaponList),
/* harmony export */   rogueWeaponList: () => (/* binding */ rogueWeaponList),
/* harmony export */   sorcererWeaponList: () => (/* binding */ sorcererWeaponList),
/* harmony export */   testWeaponList: () => (/* binding */ testWeaponList),
/* harmony export */   warriorWeaponList: () => (/* binding */ warriorWeaponList)
/* harmony export */ });
class Weapon {
    constructor(name, type, classRestriction, rarity, stats, id) {
        this._name = name;
        this._type = type;
        this._classRestriction = classRestriction;
        this._rarity = rarity;
        this._stats = stats;
        this._id = id;
    }
}


const rogueWeaponList = [
    new Weapon("Dagger", "Dagger", "Rogue", null, null, null),
    new Weapon("Dual Blades", "Dual Blades", "Rogue", null, null, null),
    new Weapon("Bow", "Bow", "Rogue", null, null, null),
    new Weapon("Throwing Knives", "Throwing Knives", "Rogue", null, null, null),
    new Weapon("Claw Weapons", "Claw Weapons", "Rogue", null, null, null),
    new Weapon("Crossbow", "Crossbow", "Rogue", null, null, null),
    new Weapon("Rapier", "Rapier", "Rogue", null, null, null),
    new Weapon("Blowgun", "Blowgun", "Rogue", null, null, null),
    new Weapon("Chakrams", "Chakrams", "Rogue", null, null, null),
    new Weapon("Garrote", "Garrote", "Rogue", null, null, null)
];

const warriorWeaponList = [
    new Weapon("Greatsword", "Greatsword", "Warrior", null, null, null),
    new Weapon("Sword and Shield", "Sword and Shield", "Warrior", null, null, null),
    new Weapon("Warhammer", "Warhammer", "Warrior", null, null, null),
    new Weapon("Polearm", "Polearm", "Warrior", null, null, null),
    new Weapon("Axe", "Axe", "Warrior", null, null, null),
    new Weapon("Mace", "Mace", "Warrior", null, null, null),
    new Weapon("Dual-Wielding Axes", "Dual-Wielding Axes", "Warrior", null, null, null),
    new Weapon("Greataxe", "Greataxe", "Warrior", null, null, null),
    new Weapon("Flail", "Flail", "Warrior", null, null, null),
    new Weapon("War Gauntlets", "War Gauntlets", "Warrior", null, null, null)
];

const priestWeaponList = [
    new Weapon("Staff", "Staff", "Priest", null, null, null),
    new Weapon("Mace and Shield", "Mace and Shield", "Priest", null, null, null),
    new Weapon("Holy Wand", "Holy Wand", "Priest", null, null, null),
    new Weapon("Tome", "Tome", "Priest", null, null, null),
    new Weapon("Holy Hammer", "Holy Hammer", "Priest", null, null, null),
    new Weapon("Ankh", "Ankh", "Priest", null, null, null),
    new Weapon("Holy Bow", "Holy Bow", "Priest", null, null, null),
    new Weapon("Sacred Chalice", "Sacred Chalice", "Priest", null, null, null),
    new Weapon("Prayer Beads", "Prayer Beads", "Priest", null, null, null),
    new Weapon("Holy Scythe", "Holy Scythe", "Priest", null, null, null)
];

const sorcererWeaponList = [
    new Weapon("Staff", "Staff", "Sorcerer", null, null, null),
    new Weapon("Spellbook", "Spellbook", "Sorcerer", null, null, null),
    new Weapon("Elemental Wand", "Elemental Wand", "Sorcerer", null, null, null),
    new Weapon("Crystal Orb", "Crystal Orb", "Sorcerer", null, null, null),
    new Weapon("Runeblade", "Runeblade", "Sorcerer", null, null, null),
    new Weapon("Arcane Gauntlets", "Arcane Gauntlets", "Sorcerer", null, null, null),
    new Weapon("Enchanted Bow", "Enchanted Bow", "Sorcerer", null, null, null),
    new Weapon("Scepter", "Scepter", "Sorcerer", null, null, null),
    new Weapon("Arcane Dagger", "Arcane Dagger", "Sorcerer", null, null, null),
    new Weapon("Graviton Staff", "Graviton Staff", "Sorcerer", null, null, null)
];

const testWeaponList = [
    new Weapon("Abyss Short Sword", "Abyss Short Sword", "Rogue", null, null, null),
    new Weapon("Corrosion Short Sword", "Corrosion Short Sword", "Rogue", null, null, null),
    new Weapon("Gaia Short Sword", "Gaia Short Sword", "Rogue", null, null, null),
    new Weapon("Inferno Short Sword", "Inferno Short Sword", "Rogue", null, null, null),
    new Weapon("Lunar Short Sword", "Lunar Short Sword", "Rogue", null, null, null),
    new Weapon("Mist Short Sword", "Mist Short Sword", "Rogue", null, null, null),
    new Weapon("Rune Short Sword", "Rune Short Sword", "Rogue", null, null, null),
    new Weapon("Solar Short Sword", "Solar Short Sword", "Rogue", null, null, null),
    new Weapon("Volt Short Sword", "Volt Short Sword", "Rogue", null, null, null),
    new Weapon("Zephyr Short Sword", "Zephyr Short Sword", "Rogue", null, null, null)
];



/***/ }),

/***/ "./src/zodiacPowers.js":
/*!*****************************!*\
  !*** ./src/zodiacPowers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ZodiacSign {
    constructor(name, dateRange, baseElement, uniqueElement, deity) {
      this._name = name;
      this._dateRange = dateRange;
      this._baseElement = baseElement;
      this._uniqueElement = uniqueElement;
      this._deity = deity;
    }

    convertDateRange(dateRange) {
      // Split the date range string into start and end dates
      const [startStr, endStr] = dateRange.split(' - ');
    
      // Parse the start and end dates using the Date constructor
      const startDate = new Date(startStr);
      const endDate = new Date(endStr);
    
      // Adjust the year of the end date if necessary
      if (endDate < startDate) {
        endDate.setFullYear(startDate.getFullYear() + 1);
      }
    
      // Return the start and end dates as an object
      return { startDate, endDate };
    }
  }

const zodiacSigns = [
    new ZodiacSign(
      "Aries",
      "March 21 - April 19",
      "Fire",
      "Steel",
      "Ares, the God of War (Greek)"
    ),
    new ZodiacSign(
      "Taurus",
      "April 20 - May 20",
      "Earth",
      "Abyss",
      "Hades, the God of the Underworld (Greek)"
    ),
    new ZodiacSign(
      "Gemini",
      "May 21 - June 20",
      "Air",
      "Zephyr",
      "Izanami/Izanagi, the Gods/Goddesses of Creation and Death (Japanese)"
    ),
    new ZodiacSign(
      "Cancer",
      "June 21 - July 22",
      "Water",
      "Lunar",
      "Tsukuyomi, the God of the Moon (Japanese)"
    ),
    new ZodiacSign(
      "Leo",
      "July 23 - August 22",
      "Fire",
      "Solar",
      "Ra, the God of the Sun (Egyptian)"
    ),
    new ZodiacSign(
      "Virgo",
      "August 23 - September 22",
      "Earth",
      "Terra",
      "Osiris, the God of the Underworld (Egyptian)"
    ),
    new ZodiacSign(
      "Libra",
      "September 23 - October 22",
      "Air",
      "Aether",
      "Horus, the God of the Sky (Egyptian)"
    ),
    new ZodiacSign(
      "Scorpio",
      "October 23 - November 21",
      "Water",
      "Corrode",
      "Poseidon, the God of the Sea (Egyptian)"
    ),
    new ZodiacSign(
      "Sagittarius",
      "November 22 - December 21",
      "Fire",
      "Inferno",
      "Amaterasu, the Goddess of the Sun (Japanese)"
    ),
    new ZodiacSign(
      "Capricorn",
      "December 22 - January 19",
      "Earth",
      "Gaia",
      "Isis, the Goddess of Magic and Life (Egyptian)"
    ),
    new ZodiacSign(
      "Aquarius",
      "January 20 - February 18",
      "Air",
      "Volt",
      "Zeus, the God of Thunder (Greek)"
    ),
    new ZodiacSign(
      "Pisces",
      "February 19 - March 20",
      "Water",
      "Mist",
      "Susanoo, the God of the Sea and Storms (Japanese)"
    )
  ];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zodiacSigns);

/***/ }),

/***/ "./src/images/ChestKey.png":
/*!*********************************!*\
  !*** ./src/images/ChestKey.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/ChestKey.png";

/***/ }),

/***/ "./src/images/GGToken.png":
/*!********************************!*\
  !*** ./src/images/GGToken.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/GGToken.png";

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _questFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questFunctions.js */ "./src/questFunctions.js");
/* harmony import */ var _modalFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalFunctions.js */ "./src/modalFunctions.js");
/* harmony import */ var _dueDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dueDate.js */ "./src/dueDate.js");
/* harmony import */ var _getObjective_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getObjective.js */ "./src/getObjective.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");
/* harmony import */ var _shopFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopFunction */ "./src/shopFunction.js");
/* harmony import */ var _itemStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./itemStats */ "./src/itemStats.js");
/* harmony import */ var _gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gachaSpinFunctions */ "./src/gachaSpinFunctions.js");
/* harmony import */ var _playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playerCharacterFunctions */ "./src/playerCharacterFunctions.js");
/* harmony import */ var _inventoryFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventoryFunctions */ "./src/inventoryFunctions.js");















// Globally Scoped Variables
let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currentQuestList') || []; // Load from local storage
let currencyContainer = ((0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currencyContainer') || [new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("ChestKeys", 0)]); // Load from local storage
let playerInventory = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerInventory') || [];
let playerEquippedItems = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerEquippedItems') || [];
let playerBirthday = new Date ("02-03-1996");
let heroSelection = ("Sorcerer");
let player = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerCharacter("images/zeusSprite.png", heroSelection, playerEquippedItems, playerBirthday);
let pixelImageContainer = document.querySelector("#testImage");
pixelImageContainer.src = (player.spriteImage);
console.log(player._stats.getStat("strength"));
let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
let heroScore = (0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_11__.calcHeroScore)(player);
getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)

let testWeaponList = ("test")
let testItem = (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.spin)(testWeaponList, currencyContainer);
let inventory = [testItem];


console.log(currencyContainer);

(0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);

// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button#addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {
    ;(0,_modalFunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFormModal)();
})


// Event Listener to Add Quest to Quest List and Display
let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    (0,_modalFunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeFormModal)(e);
    let newlyGeneratedQuest = (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.getNewQuest)();
    (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.addQuest)(currentQuestList, newlyGeneratedQuest);
    (0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);
})


const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.openSlotMachineModal)();
})

const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    (0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);
    let newItem = (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.spin)(testWeaponList, currencyContainer);
    console.log(newItem);

    if (newItem != false) {
      player.equipItem(newItem);
      inventory.push(newItem)
      let heroScore = (0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_11__.calcHeroScore)(player);
      getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`);
      (0,_inventoryFunctions__WEBPACK_IMPORTED_MODULE_12__.updateInventoryPage)(inventory);
    }
    
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.closeSlotMachineModal)();
})
    

;(0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.resetSlotMachineImages)();
(0,_inventoryFunctions__WEBPACK_IMPORTED_MODULE_12__.inventoryEventHandler)(inventory);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDdUU7QUFDTjtBQUNoQjtBQUNwQztBQUNVO0FBQ0s7QUFDd0M7QUFDc0U7QUFDOUI7QUFDbEI7QUFDckQ7QUFDdUk7QUFDbE07QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtFQUF1Qiw0QkFBNEI7QUFDMUUseUJBQXlCLCtFQUF1Qiw4QkFBOEIsaURBQVEscUJBQXFCLGlEQUFRLG9CQUFvQjtBQUN2SSxzQkFBc0IsK0VBQXVCO0FBQzdDLDBCQUEwQiwrRUFBdUI7QUFDakQ7QUFDQTtBQUNBLGlCQUFpQix3REFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5RUFBYTtBQUM3QixvREFBb0QsVUFBVTtBQUM5RDtBQUNBO0FBQ0EsZUFBZSwwREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBZ0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSx5REFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQW9CO0FBQ3hCLGtCQUFrQiwwREFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlFQUFhO0FBQ25DLDBEQUEwRCxVQUFVO0FBQ3BFLE1BQU0seUVBQW1CO0FBQ3pCO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyRUFBcUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0E7QUFDQSw2RUFBc0I7QUFDdEIsMkVBQXFCLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0SXRlbUltYWdlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pdGVtU3RhdHMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvc2hvcEZ1bmN0aW9uLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvd2VhcG9uTGlzdC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3pvZGlhY1Bvd2Vycy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi96b2RpYWNQb3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIGlzRXF1aXBwZWQsIGluUGxheWVySW52ZW50b3J5LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLl9pc0VxdWlwcGVkID0gaXNFcXVpcHBlZDtcclxuICAgICAgICB0aGlzLl9pblBsYXllckludmVudG9yeSA9IGluUGxheWVySW52ZW50b3J5O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFzc1Jlc3RyaWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2xhc3NSZXN0cmljdGlvbjtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNsYXNzIEFybW91ciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCByYXJpdHksIHN0YXRzKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTdGF0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMgPSB0aGlzLmdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzID0ge307XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzID0gMDtcclxuICAgIH1cclxuICBcclxuICAgIGdldFN0YXQoc3RhdE5hbWUpIHtcclxuICAgICAgY29uc3QgYmFzZVZhbHVlID0gdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICBjb25zdCBlcXVpcHBlZFZhbHVlID0gdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgcmV0dXJuIGJhc2VWYWx1ZSArIGVxdWlwcGVkVmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdICs9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1bmVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpICYmIHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSAtPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIDw9IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKGhlcm9UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA2LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDgsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogOCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNixcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA4LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgdHlwZS5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGxldmVsVXAoKSB7XHJcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5fYmFzZVN0YXRzLmxldmVsIHx8IDE7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCA9IGxldmVsICsgMTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgKz0gNTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciByZWNlaXZlcyA1IHNraWxsIHBvaW50cyBwZXIgbGV2ZWxcclxuICAgIH1cclxuICBcclxuICAgIGFsbG9jYXRlU2tpbGxQb2ludChzdGF0TmFtZSkge1xyXG4gICAgICBpZiAodGhpcy5fc2tpbGxQb2ludHMgPiAwICYmIHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IDE7XHJcbiAgICAgICAgdGhpcy5fc2tpbGxQb2ludHMgLT0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHNraWxsUG9pbnRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2tpbGxQb2ludHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBleHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZUltYWdlLCBoZXJvVHlwZSwgZXF1aXBwZWRJdGVtcywgZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbFNlbGVjdGlvbiA9IGVsZW1lbnRhbFNlbGVjdGlvbjtcclxuICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSB0aGlzLmdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICBnZXQgc3ByaXRlSW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3ByaXRlSW1hZ2Uoc3ByaXRlSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZXJvVHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2hlcm9UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZXJvVHlwZShoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzdGF0cyhzdGF0cykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBlcXVpcHBlZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZXF1aXBwZWRJdGVtcyhlcXVpcHBlZEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRhbEFmZmluaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbEFmZmluaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSBlbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuXHJcbiAgICBlcXVpcEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgbG9naWMgZm9yIGVxdWlwcGluZyBhbiBpdGVtXHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuX3N0YXRzLmVxdWlwSXRlbVN0YXRzKGl0ZW0uc3RhdHMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIGF0dGFjayBsb2dpY1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWNpYWxBdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBzcGVjaWFsIGF0dGFjayBsb2dpYyBoZXJlXHJcbiAgICAgICAgY29uc29sZS5sb2coYFNwZWNpYWwgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0JpcnRoZGF5SW5SYW5nZShiaXJ0aGRheSwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgYmlydGhkYXkgdG8gYSBEYXRlIG9iamVjdCBpZiBpdCdzIGEgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXRlID0gdHlwZW9mIGJpcnRoZGF5ID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKGJpcnRoZGF5KSA6IGJpcnRoZGF5O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlNb250aCA9IGJpcnRoZGF5RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF5ID0gYmlydGhkYXlEYXRlLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5IGZhbGwgd2l0aGluIHRoZSByYW5nZVxyXG4gICAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBzdGFydERheSA9IHN0YXJ0RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZW5kTW9udGggPSBlbmREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF5ID0gZW5kRGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2Fwcmljb3JuIGVkZ2UgY2FzZVxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDExICYmIGJpcnRoZGF5RGF5ID4gMjEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDAgJiYgYmlydGhkYXlEYXkgPCAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbXBhcmUgdGhlIG1vbnRoIGFuZCBkYXkgdmFsdWVzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPiBzdGFydE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBzdGFydE1vbnRoICYmIGJpcnRoZGF5RGF5ID49IHN0YXJ0RGF5KSkgJiZcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoIDwgZW5kTW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IGVuZE1vbnRoICYmIGJpcnRoZGF5RGF5IDw9IGVuZERheSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBPdGhlciBtZXRob2RzIGNhbiBiZSBhZGRlZCBoZXJlIGZvciBmdXJ0aGVyIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIC8vIGlmIGVsZW1lbnRhbCBzZWxlY3Rpb24gaXMgYSBiaXJ0aGRheSBwcm92aWRlZDpcclxuICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgLy8gQWxpYXMgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgb2YgdGhlIHpvZGlhYyBTaWducyBkYXRlIHJhbmdlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGxldCBkYXRlQ2hlY2tlciA9ICh6b2RpYWNTaWduc1tpbmRleF0uY29udmVydERhdGVSYW5nZSh6b2RpYWNTaWduc1tpbmRleF0uX2RhdGVSYW5nZSkpO1xyXG4gICAgICAgICAgICBsZXQgYmlydGhEYXlSYW5nZUNoZWNrID0gdGhpcy5pc0JpcnRoZGF5SW5SYW5nZShlbGVtZW50YWxTZWxlY3Rpb24sIGRhdGVDaGVja2VyLnN0YXJ0RGF0ZSwgZGF0ZUNoZWNrZXIuZW5kRGF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjayA9PSAnQ2Fwcmljb3JuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1s5XSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaXJ0aERheVJhbmdlQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiA9PSB6b2RpYWNTaWduc1tpbmRleF0uX3VuaXF1ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAgIFxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbGVtZW50YWxQb3dlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiIsImltcG9ydCBHR1Rva2VuSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0dHVG9rZW4ucG5nXCJcclxuaW1wb3J0IENoZXN0S2V5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0NoZXN0S2V5LnBuZ1wiXHJcblxyXG5cclxuY29uc3QgdmFsaWRDdXJyZW5jaWVzID0gW1wiR0dUb2tlbnNcIiwgXCJDaGVzdEtleXNcIl1cclxuY29uc3QgY3VycmVuY3lJbWFnZXMgPSB7XHJcbiAgICBHR1Rva2VuczogR0dUb2tlbkltYWdlLFxyXG4gICAgQ2hlc3RLZXlzOiBDaGVzdEtleUltYWdlXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJld2FyZFV0aWxpdGllcyA9IHtcclxuXHJcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFsuLi52YWxpZEN1cnJlbmNpZXNdLFxyXG4gICAgZ2V0UmV3YXJkSW1hZ2U6IGZ1bmN0aW9uKHF1ZXN0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJld2FyZFR5cGUgPSBxdWVzdC5yZXdhcmQudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhyZXdhcmRUeXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVuY3lJbWFnZXNbcmV3YXJkVHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhIGRlZmF1bHQgaW1hZ2Ugb3IgaGFuZGxlIGludmFsaWQgcmV3YXJkIHR5cGVzXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSAoY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGV9VXNlckludGVyZmFjZWApO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50fWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbmN5QWdncmVnYXRvciAoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdCkge1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVlc3QucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudCArPSBjdXJyZW50UXVlc3QucmV3YXJkLmFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG5cclxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcclxufSIsImltcG9ydCB7IHJlbW92ZUNvbXBsZXRlZFF1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tIFwiLi9jdXJyZW5jeUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlckludGVyZmFjZU1hbmFnZXIgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoYCR7Y3VycmVuY3lDb250YWluZXJ9YClcclxuICAgIC8vIGxldCBwZXJzaXN0aW5nQ3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGAke2N1cnJlbnRRdWVzdExpc3R9YClcclxuICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgcmVtb3ZlQ29tcGxldGVkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRRdWVzdExpc3RcIiwgY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVuY3lDb250YWluZXJcIiwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21XZWFwb24gfSBmcm9tIFwiLi9zaG9wRnVuY3Rpb25cIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9pbWFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSwgZ2V0V2VhcG9uSW1hZ2UgfSBmcm9tIFwiLi9nZXRJdGVtSW1hZ2VcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuICBcclxuZnVuY3Rpb24gY2hlY2tWYWxpZEN1cnJlbmN5QW1vdW50KGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBpZiAoY3VycmVuY3lDb250YWluZXJbMF0uYW1vdW50IDwgMjApIHtcclxuICAgICAgYWxlcnQoXCJJTlNVRkZJQ0lFTlQgR0cgVE9LRU5TXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgLT0gMjA7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNsb3RNYWNoaW5lSXRlbSAoaGVyb1NlbGVjdGlvbikge1xyXG4gICAvLyBHZW5lcmF0ZSB0aGUgd2VhcG9uIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgdXNpbmcgdGhlIGdlbmVyYXRlUmFuZG9tV2VhcG9uIGZ1bmN0aW9uXHJcbiAgIGxldCBnZW5lcmF0ZWRXZWFwb24gPSBnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKTtcclxuXHJcbiAgIC8vIFBhcnNlIHRoZSB3ZWFwb24gQ2xhc3MgZGF0YSB0byBiZSB1c2VkIGZvciBmcm9udCBlbmQgaW1hZ2VzXHJcbiAgIGxldCByZXN1bHRpbmdUeXBlID0gZ2VuZXJhdGVkV2VhcG9uLl90eXBlLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgIGxldCByZXN1bHRpbmdSYXJpdHkgPSBnZW5lcmF0ZWRXZWFwb24uX3Jhcml0eSArIFwiUmFyaXR5XCI7XHJcbiAgIGxldCByZXN1bHRpbmdFbGVtZW50ID0gZ2VuZXJhdGVkV2VhcG9uLl9lbGVtZW50LnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAvLyBQYXNzIHRoZSBkYXRhIHRvIGEgZmluZCBmdW5jdGlvbiB0aGF0IGxvY2F0ZXMgdGhlIGNoZWNrcyBlYWNoIGltYWdlIChzdHJpbmcpIFVSTCB0byBzZWUgaWYgaXQgaW5jbHVkZXMgdGhlIHBhcnNlZCBkYXRhICAgXHJcbiAgIC8vIElmIGRhdGEgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBpbWFnZSBsaW5rIGFzIHZhcmlhYmxlIFxyXG4gICBsZXQgc2VsZWN0ZWRUeXBlSW1hZ2UgPSBnZXRXZWFwb25JbWFnZShyZXN1bHRpbmdUeXBlKTtcclxuICAgbGV0IHNlbGVjdGVkUmFyaXR5SW1hZ2UgPSBnZXRSYXJpdHlJbWFnZShyZXN1bHRpbmdSYXJpdHkpO1xyXG4gICBsZXQgc2VsZWN0ZWRFbGVtZW50SW1hZ2UgPSBnZXRFbGVtZW50SW1hZ2UocmVzdWx0aW5nRWxlbWVudCk7XHJcbiAgIFxyXG4gICAvLyBJbWFnZXMgZm9yIHRoZSBlcXVpcG1lbnQgcmVlbFxyXG4gICBjb25zdCBlcXVpcG1lbnRSZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwbWVudFJlZWwnKTtcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wgPSAgZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkVHlwZUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRXF1aXBtZW50U3ltYm9sID0gZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXBvbkltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25JbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21FcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgIFxyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgcmFyaXR5IHJlZWxcclxuICAgY29uc3QgcmFyaXR5UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXJpdHlSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRSYXJpdHlTeW1ib2wgPSAgcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkUmFyaXR5SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BSYXJpdHlTeW1ib2wgPSByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFyaXR5SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhcml0eUltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbVJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcbiAgICAgIFxyXG5cclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZWxlbWVudCByZWVsXHJcbiAgIGNvbnN0IGVsZW1lbnRSZWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnRSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudFN5bWJvbCA9ICBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZEVsZW1lbnRJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BFbGVtZW50U3ltYm9sID0gZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50SW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIHJldHVybiBnZW5lcmF0ZWRXZWFwb247XHJcbiB9XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaW4gKGhlcm9TZWxlY3Rpb24sIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgaWYgKGNoZWNrVmFsaWRDdXJyZW5jeUFtb3VudChjdXJyZW5jeUNvbnRhaW5lcikpIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTbG90TWFjaGluZUl0ZW0oaGVyb1NlbGVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVzZXRTbG90TWFjaGluZUltYWdlcyAoKSB7XHJcbiAgICBjb25zdCBzeW1ib2xFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ltYm9sXCIpO1xyXG4gICAgY29uc29sZS5sb2coc3ltYm9sRWxlbWVudHMpO1xyXG5cclxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzeW1ib2wgZWxlbWVudHNcclxuICAgICAgc3ltYm9sRWxlbWVudHMuZm9yRWFjaCgoc3ltYm9sRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHN5bWJvbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcclxuICAgICAgfSlcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuU2xvdE1hY2hpbmVNb2RhbCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbG90TWFjaGluZU1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICByZXNldFNsb3RNYWNoaW5lSW1hZ2VzKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9pbWFnZUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25JbWFnZSAod2VhcG9uKSB7XHJcbiAgICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyh3ZWFwb24pKTtcclxuICAgIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4gICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFyaXR5SW1hZ2UgKHJhcml0eSkge1xyXG4gICAgbGV0IHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcbiAgICByZXR1cm4gcmFyaXR5SW1hZ2VVcmw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SW1hZ2UgKGVsZW1lbnQpIHtcclxuICAgIGxldCBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMoZWxlbWVudCkpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCIvLyB3aGVyZSBcInJcIiBpcyBhIHJlcXVpcmUuY29udGV4dCBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbXBvcnRBbGxJbWFnZXMocikge1xyXG4gICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgIC8vIGtleXMgaXMgYW4gYXJyYXkgdGhhdCBzdG9yZXMgYWxsIHRoZSBmaWxlbmFtZXMgcmV0dXJuZWQgYnkgci5rZXlzKClcclxuICAgIGNvbnN0IGtleXMgPSByLmtleXMoKTtcclxuXHJcbiAgICAvLyBsZW5ndGggc290cmVzIHRoZSBsZW5ndGggb2YgdGhlIGtleXMgYXJyYXlcclxuICAgIGNvbnN0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpbWFnZXMucHVzaChyKGtleSkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vUmVkIERlbW9uIEhlbG0ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2FybW91ci9SZWQgRGVtb24gSGVsbS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2FybW91ciBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FieXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hYnlzcy5wbmdcIixcblx0XCIuL2FldGhlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWV0aGVyLnBuZ1wiLFxuXHRcIi4vY29ycm9kZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvY29ycm9kZS5wbmdcIixcblx0XCIuL2dhaWEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2dhaWEucG5nXCIsXG5cdFwiLi9pbmZlcm5vLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9pbmZlcm5vLnBuZ1wiLFxuXHRcIi4vbHVuYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2x1bmFyLnBuZ1wiLFxuXHRcIi4vbWlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbWlzdC5wbmdcIixcblx0XCIuL3NvbGFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zb2xhci5wbmdcIixcblx0XCIuL3N0ZWVsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zdGVlbC5wbmdcIixcblx0XCIuL3RlcnJhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy90ZXJyYS5wbmdcIixcblx0XCIuL3ZvbHQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3ZvbHQucG5nXCIsXG5cdFwiLi96ZXBoeXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3plcGh5ci5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZXBpY1Jhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvZXBpY1Jhcml0eS5wbmdcIixcblx0XCIuL2xlZ2VuZGFyeVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiLFxuXHRcIi4vbm9ybWFsUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9ub3JtYWxSYXJpdHkucG5nXCIsXG5cdFwiLi9yYXJlUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9yYXJlUmFyaXR5LnBuZ1wiLFxuXHRcIi4vdW5jb21tb25SYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3VuY29tbW9uUmFyaXR5LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BYnlzc1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vR2FpYVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvR2FpYVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0x1bmFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9MdW5hclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9NaXN0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9NaXN0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1J1bmVTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1J1bmVTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vU29sYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1NvbGFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vWmVwaHlyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvd2VhcG9ucyBzeW5jIFxcXFwuKHBuZykkXCI7IiwiaW1wb3J0IHsgZ2V0V2VhcG9uSW1hZ2UsIGdldEFybW91ckltYWdlLCBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlIH0gZnJvbSBcIi4vZ2V0SXRlbUltYWdlXCI7XHJcblxyXG5jb25zdCBpbnZlbnRvcnlQYWdlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQ29udGVudFwiKTtcclxuY29uc3QgaW52ZW50b3J5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmludmVudG9yeVBhZ2UuY2xhc3NMaXN0LmFkZChcImludmVudG9yeVBhZ2VcIilcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZlbnRvcnlQYWdlIChpbnZlbnRvcnkpIHtcclxuXHJcbiAgICBpbnZlbnRvcnlQYWdlUGFyZW50LmFwcGVuZENoaWxkKGludmVudG9yeVBhZ2UpXHJcblxyXG4gICAgICAgIC8vIENvZGUgdG8gZ2VuZXJhdGUgZWFjaCBpbnZlbnRvcnkgcm93XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnZlbnRvcnlJdGVtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5SXRlbVJvd1wiKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaW52ZW50b3J5SXRlbVJvdy0ke2krMX1gKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5UGFnZS5hcHBlbmRDaGlsZChpbnZlbnRvcnlJdGVtUm93KVxyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IChpICogNSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQ29kZSB0byBnZW5lcmF0ZSBlYWNoIGluZGV4IGluIGVhY2ggaW52ZW50b3J5IHJvd1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGludmVudG9yeUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5SXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y291bnRlciArIGogKyAxfWApO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gKGNvdW50ZXIgKyBqKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsKGUudGFyZ2V0LCBpbnZlbnRvcnlbaXRlbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjRweCBzb2xpZCB5ZWxsb3dcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHdoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuYXBwZW5kQ2hpbGQoaW52ZW50b3J5SXRlbUNvbnRhaW5lcilcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgc2VwYXJhdGUgZnJvbSBpbnZlbnRvcnkgYW5kIG9ubHkgZ2VuZXJhdGVzIHRoZSBjb250YWluZXIgZm9yIGludmVudG9yeSBpdGVtc1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSW52ZW50b3J5UGFnZSAoaW52ZW50b3J5KSB7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCBpbnZlbnRvcnkubGVuZ3RoOyBpdGVtKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnRvcnlbaXRlbV0pO1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmVudG9yeUl0ZW0nKVtpdGVtXTtcclxuICAgICAgICBsZXQgaXRlbUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UoaW52ZW50b3J5W2l0ZW1dLl90eXBlLnJlcGxhY2UoL1xccy9nLCAnJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1JbWFnZSlcclxuICAgICAgICBpdGVtQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aXRlbUltYWdlfScpYFxyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICApfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZlbnRvcnlFdmVudEhhbmRsZXIoaW52ZW50b3J5KSB7XHJcbiAgICBpZiAoaW52ZW50b3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjcmVhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICAgICAgdXBkYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkTW9kYWwoZSwgaW52ZW50b3J5KSB7XHJcblxyXG5jb25zb2xlLmxvZyhpbnZlbnRvcnkuX3N0YXRzKTtcclxuY29uc29sZS5sb2coaW52ZW50b3J5Ll9yYXJpdHkpO1xyXG5jb25zb2xlLmxvZyhpbnZlbnRvcnkuX2VsZW1lbnQpO1xyXG5cclxubGV0IGRhbWFnZSA9IChpbnZlbnRvcnkuX3N0YXRzLmRhbWFnZSlcclxubGV0IGNyaXRDaGFuY2UgPSAoaW52ZW50b3J5Ll9zdGF0cy5jcml0Q2hhbmNlKTtcclxubGV0IGNyaXREYW1hZ2UgPSAoaW52ZW50b3J5Ll9zdGF0cy5jcml0RGFtYWdlKTtcclxubGV0IGNvbnN0aXR1dGlvbiA9IChpbnZlbnRvcnkuX3N0YXRzLmNvbnN0aXR1dGlvbik7XHJcbmxldCBkZXh0ZXJpdHkgPSAoaW52ZW50b3J5Ll9zdGF0cy5kZXh0ZXJpdHkpO1xyXG5sZXQgaW50ZWxsaWdlbmNlID0gKGludmVudG9yeS5fc3RhdHMuaW50ZWxsaWdlbmNlKTtcclxubGV0IHN0cmVuZ3RoID0gKGludmVudG9yeS5fc3RhdHMuc3RyZW5ndGgpO1xyXG5cclxuXHJcbmxldCBlbGVtZW50ID0gZ2V0RWxlbWVudEltYWdlKChpbnZlbnRvcnkuX2VsZW1lbnQpLnRvTG93ZXJDYXNlKCkpO1xyXG5jb25zb2xlLmxvZyhlbGVtZW50KVxyXG5sZXQgcmFyaXR5ID0gZ2V0UmFyaXR5SW1hZ2UoaW52ZW50b3J5Ll9yYXJpdHkpO1xyXG5jb25zb2xlLmxvZyhyYXJpdHkpO1xyXG5cclxuIFxyXG4gIGNvbnN0IGludmVudG9yeU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbnZlbnRvcnlNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsXCIpO1xyXG5cclxuICBjb25zdCBpbnZlbnRvcnlNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludmVudG9yeU1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGl0ZW1DYXJkVG9wSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaXRlbUNhcmRUb3BIYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFRvcEhhbGZcIik7XHJcbiAgY29uc3QgaXRlbUNhcmRCb3R0b21IYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtQ2FyZEJvdHRvbUhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQm90dG9tSGFsZlwiKTtcclxuXHJcbiAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGludmVudG9yeU1vZGFsSXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1pbWFnZVwiKTtcclxuICBsZXQgaXRlbUltYWdlID0gZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaXRlbUltYWdlO1xyXG5cclxuICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLXN0YXRzXCIpO1xyXG5cclxuICBjb25zdCBlbGVtZW50RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuLy8gICBsZXQgaXRlbUVsZW1lbnQgPSBpbnZlbnRvcnlJdGVtLndlYXBvbi5lbGVtZW50O1xyXG4gIGVsZW1lbnREZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkVsZW1lbnQ6IFZvbHRcIjtcclxuXHJcbiAgY29uc3QgcmFyaXR5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuLy8gICBsZXQgaXRlbVJhcml0eSA9IGludmVudG9yeUl0ZW0ud2VhcG9uLmVsZW1lbnQ7XHJcbiAgcmFyaXR5RGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gXCJSYXJpcnR5OiBMZWdlbmRhcnlcIjtcclxuXHJcbiAgY29uc3QgZGFtYWdlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkYW1hZ2VEZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIldlYXBvbiBEYW1hZ2U6IDg0MjIuMDBcIjtcclxuXHJcbiAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktY2xvc2VcIik7XHJcbiAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGhpZGVJbnZlbnRvcnlNb2RhbChlKSBcclxuICB9KVxyXG5cclxuICBjb25zdCBpbnZlbnRvcnlNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGludmVudG9yeU1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIk1vZGFsIFRpdGxlXCI7XHJcblxyXG4gIGNvbnN0IGludmVudG9yeU1vZGFsQ29udGVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIHRoZSBpbnZlbnRvcnkgbW9kYWwgY29udGVudC5cIjtcclxuXHJcbiAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxUaXRsZSk7XHJcbiAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkVG9wSGFsZik7XHJcbiAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkQm90dG9tSGFsZik7XHJcbiAgaXRlbUNhcmRUb3BIYWxmLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbUltYWdlKTtcclxuICBpdGVtQ2FyZFRvcEhhbGYuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMpO1xyXG5cclxuICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChlbGVtZW50RGVzY3JpcHRpb24pO1xyXG4gIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmFwcGVuZENoaWxkKHJhcml0eURlc2NyaXB0aW9uKTtcclxuICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChkYW1hZ2VEZXNjcmlwdGlvbik7XHJcblxyXG4gIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0KTtcclxuXHJcbiAgaW52ZW50b3J5TW9kYWwuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxDb250ZW50KTtcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsKTtcclxuXHJcbiAgcmV0dXJuIGludmVudG9yeU1vZGFsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsKGUsIGludmVudG9yeSkge1xyXG4gIGNvbnN0IGludmVudG9yeU1vZGFsID0gY3JlYXRlSXRlbUNhcmRNb2RhbChlLCBpbnZlbnRvcnkpO1xyXG4gIGludmVudG9yeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlSW52ZW50b3J5TW9kYWwoZSkge1xyXG4gICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUl0ZW1DYXJkKGl0ZW0pIHtcclxuICAgIGNvbnN0IGl0ZW1JbWFnZSA9IGdldFdlYXBvbkltYWdlKGl0ZW0pO1xyXG4gICAgY29uc29sZS5sb2coaXRlbUltYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0SXRlbUltYWdlIChpbnZlbnRvcnkpIHtcclxuICAgIFxyXG59IiwiZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzID0gW1xyXG4gICAgXCJTdGVlbFwiLFxyXG4gICAgXCJBYnlzc1wiLFxyXG4gICAgXCJaZXBoeXJcIixcclxuICAgIFwiTHVuYXJcIixcclxuICAgIFwiU29sYXJcIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJBZXRoZXJcIixcclxuICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgXCJJbmZlcm5vXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiVm9sdFwiLFxyXG4gICAgXCJNaXN0XCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVSYXJpdHkgPSBbXHJcbiAgICB7IHJhcml0eTogXCJub3JtYWxcIiwgY2hhbmNlOiA0MH0sXHJcbiAgICB7IHJhcml0eTogXCJ1bmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICB7IHJhcml0eTogXCJyYXJlXCIsIGNoYW5jZTogMTggfSxcclxuICAgIHsgcmFyaXR5OiBcImVwaWNcIiwgY2hhbmNlOiA5IH0sXHJcbiAgICB7IHJhcml0eTogXCJsZWdlbmRhcnlcIiwgY2hhbmNlOiAzIH0sXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3RhdHMgPSB7XHJcbiAgbm9ybWFsOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA1LCBtYXg6IDEwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwLCBtYXg6IDIwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMDUsIG1heDogMC4wMiB9XHJcbiAgfSxcclxuICB1bmNvbW1vbjoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNy41LCBtYXg6IDE1IH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDIsIG1heDogMC4wNiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIHJhcmU6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAzMCwgbWF4OiA2MCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDYsIG1heDogMC4xMiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGVwaWM6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDI1LCBtYXg6IDUwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjEyLCBtYXg6IDAuMjQgfSAvLyBVcGRhdGVkIG1pbiBhbmQgbWF4XHJcbiAgfSxcclxuICBsZWdlbmRhcnk6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwMCwgbWF4OiAyMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjI0LCBtYXg6IDAuMyB9IC8vIFVwZGF0ZWQgbWF4XHJcbiAgfVxyXG59O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlUHJlZml4ID0ge1xyXG4gICAgbm9ybWFsOiBbXHJcbiAgICAgIFwiT3JkaW5hcnlcIiwgXCJDb21tb25cIiwgXCJQbGFpblwiLCBcIlJlZ3VsYXJcIiwgXCJCYXNpY1wiXHJcbiAgICBdLFxyXG4gICAgdW5jb21tb246IFtcclxuICAgICAgXCJVbmNvbW1vblwiLCBcIlN0cmFuZ2VcIiwgXCJTcGVjaWFsXCIsIFwiRGlzdGluY3RpdmVcIiwgXCJBYm5vcm1hbFwiXHJcbiAgICBdLFxyXG4gICAgcmFyZTogW1xyXG4gICAgICBcIlJhcmVcIiwgXCJQcmVjaW91c1wiLCBcIkV4cXVpc2l0ZVwiLCBcIk1hZ25pZmljZW50XCIsIFwiRWxpdGVcIlxyXG4gICAgXSxcclxuICAgIGVwaWM6IFtcclxuICAgICAgXCJFcGljXCIsIFwiR3JhbmRcIiwgXCJJbGx1c3RyaW91c1wiLCBcIlRyYW5zY2VuZGVudFwiLCBcIk1hamVzdGljXCJcclxuICAgIF0sXHJcbiAgICBsZWdlbmRhcnk6IFtcclxuICAgICAgXCJMZWdlbmRhcnlcIiwgXCJVbHRpbWF0ZVwiLCBcIkV0ZXJuYWxcIiwgXCJJbnZpbmNpYmxlXCIsIFwiR29kbGlrZVwiXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVN1ZmZpeCA9IHtcclxuICAgIFN0ZWVsOiBcIm9mIFdhclwiLFxyXG4gICAgQWJ5c3M6IFwib2YgV2FpbGluZ1wiLFxyXG4gICAgWmVwaHlyOiBcIm9mIEhvd2xpbmdcIixcclxuICAgIEx1bmFyOiBcIm9mIE1vb25saWdodFwiLFxyXG4gICAgU29sYXI6IFwib2YgU3VubGlnaHRcIixcclxuICAgIFRlcnJhOiBcIm9mIFRlY3RvbmljXCIsXHJcbiAgICBBZXRoZXI6IFwib2YgR3Jhdml0eVwiLFxyXG4gICAgQ29ycm9kZTogXCJvZiBQb2lzb25cIixcclxuICAgIEluZmVybm86IFwib2YgQnVybmluZ1wiLFxyXG4gICAgR2FpYTogXCJvZiBOYXR1cmVcIixcclxuICAgIFZvbHQ6IFwib2YgU2hvY2tpbmdcIixcclxuICAgIE1pc3Q6IFwib2YgRnJlZXppbmdcIlxyXG4gIH07IiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2Uoa2V5LCBkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvcm1Nb2RhbCAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBibG9ja1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiBcclxuICAgIH1cclxuIFxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtTW9kYWwgKGV2ZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBIaWRlIG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBub25lXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2FsY0hlcm9TY29yZSAocGxheWVyQ2hhcmFjdGVyKSB7XHJcbiAgICBsZXQgaGVyb1Njb3JlID0gMDtcclxuXHJcbiAgICAvLyBCYXNlIHN0YXRzIGNhbGNcclxuICAgIGxldCBpbmhlcmVudFN0cmVuZ3RoID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwic3RyZW5ndGhcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRJbnRlbGxpZ2VuY2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJpbnRlbGxpZ2VuY2VcIik7XHJcbiAgICBsZXQgaW5oZXJlbnREZXh0ZXJpdHkgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJkZXh0ZXJpdHlcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRDb25zdGl0dXRpb24gPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJjb25zdGl0dXRpb25cIik7XHJcblxyXG4gICAgLy8gV2VhcG9uIFN0YXRzIENhbGNcclxuICAgIGxldCB3ZWFwb25TdHJlbmd0aCA9IDA7XHJcbiAgICBsZXQgd2VhcG9uSW50ZWxsaWdlbmNlID0gMDtcclxuICAgIGxldCB3ZWFwb25EZXh0ZXJpdHkgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IDA7XHJcbiAgICBsZXQgZXF1aXBtZW50U3RhdCA9IDA7XHJcbiAgIFxyXG4gICAgZm9yIChsZXQgd2VhcG9uSW5kZXggPSAwOyB3ZWFwb25JbmRleCA8IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtcy5sZW5ndGg7IHdlYXBvbkluZGV4KyspIHtcclxuICAgICAgICB3ZWFwb25TdHJlbmd0aCArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5zdHJlbmd0aDtcclxuICAgICAgICB3ZWFwb25JbnRlbGxpZ2VuY2UgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgICAgIHdlYXBvbkRleHRlcml0eSArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kZXh0ZXJpdHk7XHJcbiAgICAgICAgd2VhcG9uQ29uc3RpdHV0aW9uICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNvbnN0aXR1dGlvbjtcclxuICAgICAgICBsZXQgd2VhcG9uQ3JpdENoYW5jZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNyaXRDaGFuY2U7XHJcbiAgICAgICAgbGV0IHdlYXBvbkNyaXREYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jcml0RGFtYWdlO1xyXG4gICAgICAgIGxldCB3ZWFwb25EYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kYW1hZ2U7XHJcbiAgICAgICAgZXF1aXBtZW50U3RhdCArPSAod2VhcG9uRGFtYWdlICsgKHdlYXBvbkRhbWFnZSAqIHdlYXBvbkNyaXRDaGFuY2UgKiB3ZWFwb25Dcml0RGFtYWdlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFRvdGFsIFN0YXRzXHJcblxyXG4gICAgbGV0IHRvdGFsU3RyZW5ndGggPSBpbmhlcmVudFN0cmVuZ3RoICsgd2VhcG9uU3RyZW5ndGg7XHJcbiAgICBsZXQgdG90YWxJbnRlbGxpZ2VuY2UgPSBpbmhlcmVudEludGVsbGlnZW5jZSArIHdlYXBvbkludGVsbGlnZW5jZTtcclxuICAgIGxldCB0b3RhbERleHRlcml0eSA9IGluaGVyZW50RGV4dGVyaXR5ICsgd2VhcG9uRGV4dGVyaXR5O1xyXG4gICAgbGV0IHRvdGFsQ29uc3RpdHV0aW9uID0gaW5oZXJlbnRDb25zdGl0dXRpb24gKyB3ZWFwb25Db25zdGl0dXRpb247XHJcblxyXG4gICAgc3dpdGNoKHBsYXllckNoYXJhY3Rlci5oZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHRvdGFsU3RyZW5ndGggKj0gMjtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgdG90YWxJbnRlbGxpZ2VuY2UgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgdG90YWxEZXh0ZXJpdHkgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICAgIHRvdGFsQ29uc3RpdHV0aW9uICo9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyb1Njb3JlICs9ICh0b3RhbFN0cmVuZ3RoICsgdG90YWxJbnRlbGxpZ2VuY2UgKyB0b3RhbERleHRlcml0eSArIHRvdGFsQ29uc3RpdHV0aW9uICsgZXF1aXBtZW50U3RhdClcclxuXHJcblxyXG5cclxuICAgIHJldHVybiBoZXJvU2NvcmUudG9GaXhlZCgyKTtcclxufSIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1PYmplY3RpdmVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5QW1vdW50XCIpLnZhbHVlO1xyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4IGluIGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke1txdWVzdEluZGV4XX1gKTtcclxuXHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApXHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgQ29tcGxldGUgQ2hlY2tib3ggTmVzdGVkIGluIFF1ZXN0IE9iamVjdGl2ZSBDb250ZW50IERpdiBcclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwuaHRtbEZvciA9IGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUxhYmVsKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XSkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLmFtb3VudH0gJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC50eXBlfWApO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gQXNzdW1pbmcgdGhlIGNvZGUgZm9yIHRoZSBXZWFwb24gY2xhc3MsIEhlcm9UeXBlV2VhcG9uTGlzdCBjbGFzcywgYW5kIHdlYXBvbkxpc3RzIGZvciBlYWNoIGNsYXNzIGlzIGFscmVhZHkgZGVmaW5lZC5cclxuaW1wb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0LCB0ZXN0V2VhcG9uTGlzdCB9IGZyb20gXCIuL3dlYXBvbkxpc3QuanNcIlxyXG5pbXBvcnQgeyBpdGVtUG9zc2libGVFbGVtZW50cywgaXRlbVBvc3NpYmxlUmFyaXR5LCBpdGVtUG9zc2libGVTdGF0cywgaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUG9zc2libGVTdWZmaXggfSBmcm9tIFwiLi9pdGVtU3RhdHMuanNcIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tICcuL2ltYWdlSGFuZGxlcic7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbilcclxuXHJcblxyXG5cclxuY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGVsZW1lbnQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcykge1xyXG4gICAgICAgIHN3aXRjaCAocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcm9ndWVXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcHJpZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB3YXJyaW9yV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc29yY2VyZXJXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcInRlc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RXZWFwb25MaXN0O1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYXllciBjbGFzcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYXBvbkxpc3QgPSBnZXRXZWFwb25MaXN0KHBsYXllckNsYXNzKTtcclxuICBcclxuICAgIGlmICh3ZWFwb25MaXN0KSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XS5fdHlwZTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSBvZiBhbiBpbnZhbGlkIHBsYXllciBjbGFzc1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byByZXRyaWV2ZSB3ZWFwb24gbGlzdC5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmFyaXR5IChpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRvdGFsIGNoYW5jZSB0byAwXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgY2hhbmNlIHZhbHVlcyBvZiBhbGwgcmFyaXR5IG9iamVjdCBjaGFuY2VzXHJcbiAgICAvLyBUaGlzIHNob3VsZCBhZGQgdXAgdG8gMTAwXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgdG90YWxDaGFuY2UgKz0gcmFyaXR5T2JqZWN0LmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSB3aG9sZSBpbnRlZ2VyIGJldHdlZW4gMCAtIDEwMFxyXG4gICAgbGV0IHJhbmRvbUNoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlKTtcclxuXHJcbiAgICAvLyBTZXQgcmFyaXR5IHZhbHVlIHRvIG51bGxcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIC8vIFJldHVybiB0aGUgcmFyaXR5IGJhc2VkIG9uIHlvdXIgcmFuZG9tQ2hhbmNlIHJvbGwuIFxyXG4gICAgLy8gRm9yIGV4YW1wbGUgaWYgUmFuZG9tIENoYW5jZSB3YXMgOTQ6XHJcbiAgICAvLyA5NCAtIDQwIChOb3JtYWwgUmFyaXR5KSA9IDU0IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDU0IC0gMzAgKFVuY29tbW9uIFJhcml0eSkgPSAyNCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyAyNCAtIDE1IChSYXJlIFJhcml0eSkgPSA5IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDkgLSAxMCAoRXBpYyBSYXJpdHkpID0gLTEgPC0tIFRoZXJlZm9yZSByYXJpdHkgb2YgaXRlbSBpcyBFcGljIGFzICg5IC0gMTApIDwgKDApXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICAgICAgLy8gVGhlIHZhbHVlIGlzICgtMC4wMSB0byBhY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycylcclxuICAgICAgICBpZiAocmFuZG9tQ2hhbmNlIDw9IC0wLjAxKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eU9iamVjdC5yYXJpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiByYXJpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0YXRzKGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUmFyaXR5KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuICAgIGNvbnN0IGRlY2ltYWxQbGFjZXMgPSAyOyAvLyBOdW1iZXIgb2YgZGVjaW1hbCBwbGFjZXNcclxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIHJldHVybiBOdW1iZXIocmFuZG9tTnVtYmVyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBVc2luZyB0aGUgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gdG8gYWNjZXNzIHRoZSBwcm9wZXJ0eSBhdCBydW50aW1lXHJcbiAgICBjb25zdCByYXJpdHlTdGF0cyA9IGl0ZW1Qb3NzaWJsZVN0YXRzW2l0ZW1SYXJpdHldO1xyXG4gICAgY29uc3QgaXRlbVN0YXRzID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGF0IGluIHJhcml0eVN0YXRzKSB7XHJcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gcmFyaXR5U3RhdHNbc3RhdF07XHJcbiAgICBpdGVtU3RhdHNbc3RhdF0gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0LCBpdGVtU3RhdHNbc3RhdF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtU3RhdHM7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVJhcml0eSkge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldLmxlbmd0aClcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVQcmVmaXhbaXRlbVJhcml0eV1bcmFuZG9tSW5kZXhdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1FbGVtZW50KGl0ZW1Qb3NzaWJsZUVsZW1lbnRzKSB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtUG9zc2libGVFbGVtZW50cy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZUVsZW1lbnRzW3JhbmRvbUluZGV4XVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN1ZmZpeChpdGVtUG9zc2libGVTdWZmaXgsIGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVTdWZmaXhbZWxlbWVudF07XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tV2VhcG9uIChwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGxldCB3ZWFwb25UeXBlID0gZ2V0SXRlbVR5cGUocGxheWVyQ2xhc3MpO1xyXG4gICAgbGV0IHdlYXBvbkVsZW1lbnQgPSBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cyk7XHJcbiAgICBsZXQgd2VhcG9uUmFyaXR5ID0gZ2V0SXRlbVJhcml0eShpdGVtUG9zc2libGVSYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblN0YXRzID0gZ2V0SXRlbVN0YXRzKGl0ZW1Qb3NzaWJsZVN0YXRzLCB3ZWFwb25SYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblByZWZpeCA9IGdldEl0ZW1QcmVmaXgoaXRlbVBvc3NpYmxlUHJlZml4LCB3ZWFwb25SYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblN1ZmZpeCA9IGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCB3ZWFwb25FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFdlYXBvbihcclxuICAgICAgICAod2VhcG9uUHJlZml4ICsgXCIgXCIgKyB3ZWFwb25UeXBlICsgXCIgXCIgKyB3ZWFwb25TdWZmaXgpLCBcclxuICAgICAgICB3ZWFwb25UeXBlLFxyXG4gICAgICAgIHBsYXllckNsYXNzLFxyXG4gICAgICAgIHdlYXBvblJhcml0eSxcclxuICAgICAgICB3ZWFwb25TdGF0cyxcclxuICAgICAgICB3ZWFwb25FbGVtZW50LFxyXG4gICAgICAgIG51bGwsXHJcbiAgICApXHJcblxyXG4gXHJcbn1cclxuLy8gU2ltdWxhdGluZyBhbiBpdGVtIGJlaW5nIHB1bGxlZCBmcm9tIGEgY2hlc3QgYmFzZWQgb24gcGxheWVyJ3MgY2xhc3MgYW5kIHJhcml0eSBwcm9iYWJpbGl0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiBwdWxsSXRlbUZyb21DaGVzdChwbGF5ZXJDbGFzcywgcGl0eSkge1xyXG4gICBcclxuXHJcbiAgICAvLyBDb25zaWRlciBjb25zdGFudCByYXJpdHkgb2JqZWN0IGZvciBzY2FsaW5nIHB1cnBvc2VzXHJcbiAgICBjb25zdCByYXJpdHlQcm9iYWJpbGl0aWVzID0gW1xyXG4gICAgICAgIHsgcmFyaXR5OiBcIk5vcm1hbFwiLCBjaGFuY2U6IDQwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiVW5jb21tb25cIiwgY2hhbmNlOiAzMCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlJhcmVcIiwgY2hhbmNlOiAxNSB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIkVwaWNcIiwgY2hhbmNlOiAxMCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIkxlZ2VuZGFyeVwiLCBjaGFuY2U6IDUgfSxcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuICAgIGZvciAoY29uc3QgcmFyaXR5RGF0YSBvZiByYXJpdHlQcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgdG90YWxDaGFuY2UgKz0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJhbmRvbUNoYW5jZSA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNoYW5jZSk7XHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlEYXRhLmNoYW5jZTtcclxuICAgICAgICBpZiAocmFuZG9tQ2hhbmNlIDw9IDApIHtcclxuICAgICAgICAgICAgcmFyaXR5ID0gcmFyaXR5RGF0YS5yYXJpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiByYXJpdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJhbmRvbVdlYXBvbiA9IHdlYXBvbkxpc3RbcmFuZG9tSW5kZXhdO1xyXG5cclxuICAgIC8vIEFzc2lnbiByYW5kb20gcHJvcGVydGllcyB0byB0aGUgd2VhcG9uXHJcbiAgICByYW5kb21XZWFwb24uX25hbWUgPSBcIkRpdmluZSBTdGFmZlwiOyAvLyBFeGFtcGxlIHByb3BlcnR5XHJcbiAgICByYW5kb21XZWFwb24uX3Jhcml0eSA9IHJhcml0eTsgLy8gQXNzaWduaW5nIHRoZSBkZXRlcm1pbmVkIHJhcml0eVxyXG5cclxuICAgIC8vIElmIHRoZSBwdWxsZWQgaXRlbSBpcyBsZWdlbmRhcnksIHJlc2V0IHRoZSBwaXR5IGNvdW50ZXJcclxuICAgIGlmIChyYXJpdHkgPT09IFwiTGVnZW5kYXJ5XCIpIHtcclxuICAgICAgICBwaXR5ID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGl0eSsrOyAvLyBJbmNyZW1lbnQgdGhlIHBpdHkgY291bnRlciBpZiBhIGxlZ2VuZGFyeSBpdGVtIHdhcyBub3QgcHVsbGVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3VhcmFudGVlIGEgbGVnZW5kYXJ5IGl0ZW0gaWYgdGhlIHBpdHkgY291bnRlciByZWFjaGVzIDEwMFxyXG4gICAgaWYgKHBpdHkgPj0gMTAwKSB7XHJcbiAgICAgICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSBcIkxlZ2VuZGFyeVwiO1xyXG4gICAgICAgIHBpdHkgPSAwOyAvLyBSZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tV2VhcG9uLl9zdGF0cyA9IHtcclxuICAgICAgICBhdHRhY2s6IDE1MCxcclxuICAgICAgICBpbnRlbGxlY3Q6IDUwLFxyXG4gICAgICAgIHN0YW1pbmE6IDgwLFxyXG4gICAgfTsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG5cclxuICAgIHJldHVybiB7IGl0ZW06IHJhbmRvbVdlYXBvbiwgcGl0eSB9O1xyXG59XHJcbiIsImNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByb2d1ZVdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiRGFnZ2VyXCIsIFwiRGFnZ2VyXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbCBCbGFkZXNcIiwgXCJEdWFsIEJsYWRlc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJvd1wiLCBcIkJvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRocm93aW5nIEtuaXZlc1wiLCBcIlRocm93aW5nIEtuaXZlc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNsYXcgV2VhcG9uc1wiLCBcIkNsYXcgV2VhcG9uc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNyb3NzYm93XCIsIFwiQ3Jvc3Nib3dcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSYXBpZXJcIiwgXCJSYXBpZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJCbG93Z3VuXCIsIFwiQmxvd2d1blwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNoYWtyYW1zXCIsIFwiQ2hha3JhbXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHYXJyb3RlXCIsIFwiR2Fycm90ZVwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCB3YXJyaW9yV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdHN3b3JkXCIsIFwiR3JlYXRzd29yZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIlN3b3JkIGFuZCBTaGllbGRcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIldhcmhhbW1lclwiLCBcIldhcmhhbW1lclwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUG9sZWFybVwiLCBcIlBvbGVhcm1cIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkF4ZVwiLCBcIkF4ZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWFjZVwiLCBcIk1hY2VcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkR1YWwtV2llbGRpbmcgQXhlc1wiLCBcIkR1YWwtV2llbGRpbmcgQXhlc1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR3JlYXRheGVcIiwgXCJHcmVhdGF4ZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRmxhaWxcIiwgXCJGbGFpbFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyIEdhdW50bGV0c1wiLCBcIldhciBHYXVudGxldHNcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBwcmllc3RXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIlN0YWZmXCIsIFwiU3RhZmZcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWFjZSBhbmQgU2hpZWxkXCIsIFwiTWFjZSBhbmQgU2hpZWxkXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgV2FuZFwiLCBcIkhvbHkgV2FuZFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJUb21lXCIsIFwiVG9tZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IEhhbW1lclwiLCBcIkhvbHkgSGFtbWVyXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFua2hcIiwgXCJBbmtoXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgQm93XCIsIFwiSG9seSBCb3dcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU2FjcmVkIENoYWxpY2VcIiwgXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQcmF5ZXIgQmVhZHNcIiwgXCJQcmF5ZXIgQmVhZHNcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBTY3l0aGVcIiwgXCJIb2x5IFNjeXRoZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3Qgc29yY2VyZXJXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIlN0YWZmXCIsIFwiU3RhZmZcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTcGVsbGJvb2tcIiwgXCJTcGVsbGJvb2tcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbGVtZW50YWwgV2FuZFwiLCBcIkVsZW1lbnRhbCBXYW5kXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3J5c3RhbCBPcmJcIiwgXCJDcnlzdGFsIE9yYlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJ1bmVibGFkZVwiLCBcIlJ1bmVibGFkZVwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJBcmNhbmUgR2F1bnRsZXRzXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRW5jaGFudGVkIEJvd1wiLCBcIkVuY2hhbnRlZCBCb3dcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTY2VwdGVyXCIsIFwiU2NlcHRlclwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFyY2FuZSBEYWdnZXJcIiwgXCJBcmNhbmUgRGFnZ2VyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR3Jhdml0b24gU3RhZmZcIiwgXCJHcmF2aXRvbiBTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCB0ZXN0V2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJBYnlzcyBTaG9ydCBTd29yZFwiLCBcIkFieXNzIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ29ycm9zaW9uIFNob3J0IFN3b3JkXCIsIFwiQ29ycm9zaW9uIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR2FpYSBTaG9ydCBTd29yZFwiLCBcIkdhaWEgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJJbmZlcm5vIFNob3J0IFN3b3JkXCIsIFwiSW5mZXJubyBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkx1bmFyIFNob3J0IFN3b3JkXCIsIFwiTHVuYXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNaXN0IFNob3J0IFN3b3JkXCIsIFwiTWlzdCBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJ1bmUgU2hvcnQgU3dvcmRcIiwgXCJSdW5lIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU29sYXIgU2hvcnQgU3dvcmRcIiwgXCJTb2xhciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlZvbHQgU2hvcnQgU3dvcmRcIiwgXCJWb2x0IFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiWmVwaHlyIFNob3J0IFN3b3JkXCIsIFwiWmVwaHlyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmV4cG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfTsiLCJjbGFzcyBab2RpYWNTaWduIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnREYXRlUmFuZ2UoZGF0ZVJhbmdlKSB7XHJcbiAgICAgIC8vIFNwbGl0IHRoZSBkYXRlIHJhbmdlIHN0cmluZyBpbnRvIHN0YXJ0IGFuZCBlbmQgZGF0ZXNcclxuICAgICAgY29uc3QgW3N0YXJ0U3RyLCBlbmRTdHJdID0gZGF0ZVJhbmdlLnNwbGl0KCcgLSAnKTtcclxuICAgIFxyXG4gICAgICAvLyBQYXJzZSB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyB1c2luZyB0aGUgRGF0ZSBjb25zdHJ1Y3RvclxyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydFN0cik7XHJcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZShlbmRTdHIpO1xyXG4gICAgXHJcbiAgICAgIC8vIEFkanVzdCB0aGUgeWVhciBvZiB0aGUgZW5kIGRhdGUgaWYgbmVjZXNzYXJ5XHJcbiAgICAgIGlmIChlbmREYXRlIDwgc3RhcnREYXRlKSB7XHJcbiAgICAgICAgZW5kRGF0ZS5zZXRGdWxsWWVhcihzdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIDEpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLy8gUmV0dXJuIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIGFuIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdGFydERhdGUsIGVuZERhdGUgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5jb25zdCB6b2RpYWNTaWducyA9IFtcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFyaWVzXCIsXHJcbiAgICAgIFwiTWFyY2ggMjEgLSBBcHJpbCAxOVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTdGVlbFwiLFxyXG4gICAgICBcIkFyZXMsIHRoZSBHb2Qgb2YgV2FyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlRhdXJ1c1wiLFxyXG4gICAgICBcIkFwcmlsIDIwIC0gTWF5IDIwXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJBYnlzc1wiLFxyXG4gICAgICBcIkhhZGVzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkdlbWluaVwiLFxyXG4gICAgICBcIk1heSAyMSAtIEp1bmUgMjBcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJaZXBoeXJcIixcclxuICAgICAgXCJJemFuYW1pL0l6YW5hZ2ksIHRoZSBHb2RzL0dvZGRlc3NlcyBvZiBDcmVhdGlvbiBhbmQgRGVhdGggKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2FuY2VyXCIsXHJcbiAgICAgIFwiSnVuZSAyMSAtIEp1bHkgMjJcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkx1bmFyXCIsXHJcbiAgICAgIFwiVHN1a3V5b21pLCB0aGUgR29kIG9mIHRoZSBNb29uIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxlb1wiLFxyXG4gICAgICBcIkp1bHkgMjMgLSBBdWd1c3QgMjJcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU29sYXJcIixcclxuICAgICAgXCJSYSwgdGhlIEdvZCBvZiB0aGUgU3VuIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlZpcmdvXCIsXHJcbiAgICAgIFwiQXVndXN0IDIzIC0gU2VwdGVtYmVyIDIyXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJUZXJyYVwiLFxyXG4gICAgICBcIk9zaXJpcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMaWJyYVwiLFxyXG4gICAgICBcIlNlcHRlbWJlciAyMyAtIE9jdG9iZXIgMjJcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJBZXRoZXJcIixcclxuICAgICAgXCJIb3J1cywgdGhlIEdvZCBvZiB0aGUgU2t5IChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNjb3JwaW9cIixcclxuICAgICAgXCJPY3RvYmVyIDIzIC0gTm92ZW1iZXIgMjFcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkNvcnJvZGVcIixcclxuICAgICAgXCJQb3NlaWRvbiwgdGhlIEdvZCBvZiB0aGUgU2VhIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNhZ2l0dGFyaXVzXCIsXHJcbiAgICAgIFwiTm92ZW1iZXIgMjIgLSBEZWNlbWJlciAyMVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJJbmZlcm5vXCIsXHJcbiAgICAgIFwiQW1hdGVyYXN1LCB0aGUgR29kZGVzcyBvZiB0aGUgU3VuIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhcHJpY29yblwiLFxyXG4gICAgICBcIkRlY2VtYmVyIDIyIC0gSmFudWFyeSAxOVwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiR2FpYVwiLFxyXG4gICAgICBcIklzaXMsIHRoZSBHb2RkZXNzIG9mIE1hZ2ljIGFuZCBMaWZlIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFxdWFyaXVzXCIsXHJcbiAgICAgIFwiSmFudWFyeSAyMCAtIEZlYnJ1YXJ5IDE4XCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiVm9sdFwiLFxyXG4gICAgICBcIlpldXMsIHRoZSBHb2Qgb2YgVGh1bmRlciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJQaXNjZXNcIixcclxuICAgICAgXCJGZWJydWFyeSAxOSAtIE1hcmNoIDIwXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJNaXN0XCIsXHJcbiAgICAgIFwiU3VzYW5vbywgdGhlIEdvZCBvZiB0aGUgU2VhIGFuZCBTdG9ybXMgKEphcGFuZXNlKVwiXHJcbiAgICApXHJcbiAgXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHpvZGlhY1NpZ25zOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSwgV2VhcG9uLCBBcm1vdXIsIFBsYXllckNoYXJhY3RlciwgUGxheWVyU3RhdHMgfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XHJcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcywgYWRkUXVlc3R9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtTW9kYWwsIGNsb3NlRm9ybU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IGR1ZURhdGUgZnJvbSBcIi4vZHVlRGF0ZS5qc1wiO1xyXG5pbXBvcnQgZ2V0T2JqZWN0aXZlIGZyb20gXCIuL2dldE9iamVjdGl2ZS5qc1wiO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXInO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgcHVsbEl0ZW1Gcm9tQ2hlc3QsIGdldEl0ZW1SYXJpdHksIGdldEl0ZW1TdGF0cywgZ2V0SXRlbVR5cGUsIGdldEl0ZW1FbGVtZW50LCBnZXRJdGVtUHJlZml4LCBnZXRJdGVtU3VmZml4LCBnZW5lcmF0ZVJhbmRvbVdlYXBvbn0gZnJvbSAnLi9zaG9wRnVuY3Rpb24nO1xyXG5pbXBvcnQgeyBpdGVtUG9zc2libGVFbGVtZW50cywgaXRlbVBvc3NpYmxlUmFyaXR5LCBpdGVtUG9zc2libGVTdGF0cywgaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUG9zc2libGVTdWZmaXggfSBmcm9tICcuL2l0ZW1TdGF0cyc7XHJcbmltcG9ydCB7IHNwaW4sIG9wZW5TbG90TWFjaGluZU1vZGFsLCBjbG9zZVNsb3RNYWNoaW5lTW9kYWwsIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXN9IGZyb20gJy4vZ2FjaGFTcGluRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY2FsY0hlcm9TY29yZSB9IGZyb20gJy4vcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgYXBwZW5kSXRlbUltYWdlLCBjcmVhdGVJbnZlbnRvcnlNb2RhbCwgY3JlYXRlSW52ZW50b3J5UGFnZSwgZ2VuZXJhdGVJbnZlbnRvcnlJdGVtSW1hZ2UsIGdlbmVyYXRlSW52ZW50b3J5SXRlbXMsIHVwZGF0ZUludmVudG9yeVBhZ2UsIGludmVudG9yeUV2ZW50SGFuZGxlcn0gIGZyb20gJy4vaW52ZW50b3J5RnVuY3Rpb25zJztcclxuXHJcblxyXG4vLyBHbG9iYWxseSBTY29wZWQgVmFyaWFibGVzXHJcbmxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTsgLy8gTG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxubGV0IGN1cnJlbmN5Q29udGFpbmVyID0gKGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW5jeUNvbnRhaW5lcicpIHx8IFtuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiQ2hlc3RLZXlzXCIsIDApXSk7IC8vIExvYWQgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbmxldCBwbGF5ZXJJbnZlbnRvcnkgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVySW52ZW50b3J5JykgfHwgW107XHJcbmxldCBwbGF5ZXJFcXVpcHBlZEl0ZW1zID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckVxdWlwcGVkSXRlbXMnKSB8fCBbXTtcclxubGV0IHBsYXllckJpcnRoZGF5ID0gbmV3IERhdGUgKFwiMDItMDMtMTk5NlwiKTtcclxubGV0IGhlcm9TZWxlY3Rpb24gPSAoXCJTb3JjZXJlclwiKTtcclxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoXCJpbWFnZXMvemV1c1Nwcml0ZS5wbmdcIiwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgcGxheWVyQmlydGhkYXkpO1xyXG5sZXQgcGl4ZWxJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdEltYWdlXCIpO1xyXG5waXhlbEltYWdlQ29udGFpbmVyLnNyYyA9IChwbGF5ZXIuc3ByaXRlSW1hZ2UpO1xyXG5jb25zb2xlLmxvZyhwbGF5ZXIuX3N0YXRzLmdldFN0YXQoXCJzdHJlbmd0aFwiKSk7XHJcbmxldCBnZXRIZXJvU2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm9TY29yZUNvbnRhaW5lclwiKTtcclxubGV0IGhlcm9TY29yZSA9IGNhbGNIZXJvU2NvcmUocGxheWVyKTtcclxuZ2V0SGVyb1Njb3JlQ29udGFpbmVyLnRleHRDb250ZW50ID0gKGBIZXJvIFNjb3JlOiAke2hlcm9TY29yZX1gKVxyXG5cclxubGV0IHRlc3RXZWFwb25MaXN0ID0gKFwidGVzdFwiKVxyXG5sZXQgdGVzdEl0ZW0gPSBzcGluKHRlc3RXZWFwb25MaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbmxldCBpbnZlbnRvcnkgPSBbdGVzdEl0ZW1dO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbnVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcclxubGV0IGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jYWRkUXVlc3RCdXR0b25cIilcclxuYWRkUXVlc3RCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkaXNwbGF5Rm9ybU1vZGFsKCk7XHJcbn0pXHJcblxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gQWRkIFF1ZXN0IHRvIFF1ZXN0IExpc3QgYW5kIERpc3BsYXlcclxubGV0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TdWJtaXRCdXR0b25cIik7XHJcbmZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBjbG9zZUZvcm1Nb2RhbChlKTtcclxuICAgIGxldCBuZXdseUdlbmVyYXRlZFF1ZXN0ID0gZ2V0TmV3UXVlc3QoKTtcclxuICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xyXG4gICAgdXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG59KVxyXG5cclxuXHJcbmNvbnN0IHdlYXBvblJvbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXBvbkdlbmVyYXRvclwiKTtcclxud2VhcG9uUm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgb3BlblNsb3RNYWNoaW5lTW9kYWwoKTtcclxufSlcclxuXHJcbmNvbnN0IHNwaW5TbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGluU2xvdEJ1dHRvblwiKTtcclxuc3BpblNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xyXG4gICAgdXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgbGV0IG5ld0l0ZW0gPSBzcGluKHRlc3RXZWFwb25MaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdJdGVtKTtcclxuXHJcbiAgICBpZiAobmV3SXRlbSAhPSBmYWxzZSkge1xyXG4gICAgICBwbGF5ZXIuZXF1aXBJdGVtKG5ld0l0ZW0pO1xyXG4gICAgICBpbnZlbnRvcnkucHVzaChuZXdJdGVtKVxyXG4gICAgICBsZXQgaGVyb1Njb3JlID0gY2FsY0hlcm9TY29yZShwbGF5ZXIpO1xyXG4gICAgICBnZXRIZXJvU2NvcmVDb250YWluZXIudGV4dENvbnRlbnQgPSAoYEhlcm8gU2NvcmU6ICR7aGVyb1Njb3JlfWApO1xyXG4gICAgICB1cGRhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zdCBjbG9zZVNsb3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VTbG90XCIpO1xyXG5jbG9zZVNsb3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgY2xvc2VTbG90TWFjaGluZU1vZGFsKCk7XHJcbn0pXHJcbiAgICBcclxuXHJcbnJlc2V0U2xvdE1hY2hpbmVJbWFnZXMoKTtcclxuaW52ZW50b3J5RXZlbnRIYW5kbGVyKGludmVudG9yeSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9