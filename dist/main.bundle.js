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
/* harmony export */   spin: () => (/* binding */ spin)
/* harmony export */ });
/* harmony import */ var _shopFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopFunction */ "./src/shopFunction.js");
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");



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
  

function spin (heroSelection) {

    // Generate the weapon the player receives using the generateRandomWeapon function
    let generatedWeapon = (0,_shopFunction__WEBPACK_IMPORTED_MODULE_0__.generateRandomWeapon)(heroSelection);

    // Parse the weapon Class data to be used for front end images
    let resultingType = generatedWeapon._type.replace(/\s/g, '');
    let resultingRarity = generatedWeapon._rarity + "Rarity";
    let resultingElement = generatedWeapon._element.toLowerCase();

    // Pass the data to a find function that locates the checks each image (string) URL to see if it includes the parsed data   
    // If data matches, return the appropriate image link as variable 
    let selectedTypeImage = weaponImages.find(image => image.includes(resultingType));
    let selectedRarityImage = rarityImages.find(image => image.includes(resultingRarity));
    let selectedElementImage = elementImages.find(image => image.includes(resultingElement));
    
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

  function openSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'block';
  }
  
  function closeSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'none';
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
      critChance: { min: 0.0075, max: 0.03 }
    },
    rare: {
      damage: { min: 15, max: 30 },
      strength: { min: 3, max: 15 },
      dexterity: { min: 3, max: 15 },
      intelligence: { min: 3, max: 15 },
      constitution: { min: 3, max: 15 },
      critDamage: { min: 30, max: 60 },
      critChance: { min: 0.015, max: 0.06 }
    },
    epic: {
      damage: { min: 25, max: 50 },
      strength: { min: 5, max: 25 },
      dexterity: { min: 5, max: 25 },
      intelligence: { min: 5, max: 25 },
      constitution: { min: 5, max: 25 },
      critDamage: { min: 50, max: 100 },
      critChance: { min: 0.025, max: 0.1 }
    },
    legendary: {
      damage: { min: 50, max: 100 },
      strength: { min: 10, max: 50 },
      dexterity: { min: 10, max: 50 },
      intelligence: { min: 10, max: 50 },
      constitution: { min: 10, max: 50 },
      critDamage: { min: 100, max: 200 },
      critChance: { min: 0.05, max: 0.2 }
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
    for (let weaponIndex = 0; weaponIndex < playerCharacter._equippedItems.length; weaponIndex++) {
        weaponStrength += playerCharacter._equippedItems[weaponIndex]._stats.strength;
        weaponIntelligence += playerCharacter._equippedItems[weaponIndex]._stats.intelligence;
        weaponDexterity += playerCharacter._equippedItems[weaponIndex]._stats.dexterity;
        weaponConstitution += playerCharacter._equippedItems[weaponIndex]._stats.constitution;
    }
    // let weaponStrength = playerCharacter._equippedItems[0]._stats.strength;
    // let weaponIntelligence = playerCharacter._equippedItems[0]._stats.intelligence;
    // let weaponDexterity = playerCharacter._equippedItems[0]._stats.dexterity;
    // let weaponConstitution = playerCharacter._equippedItems[0]._stats.constitution;

        // Weapon Stats Calc


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

    heroScore += (totalStrength + totalIntelligence + totalDexterity + totalConstitution)



    return heroScore;
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
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    // Using the square bracket notation to access the property at runtime
    const rarityStats = itemPossibleStats[itemRarity];
    const itemStats = {};

    for (const stat in rarityStats) {
        const { min, max } = rarityStats[stat];
    itemStats[stat] = generateRandomNumber(min, max);
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

;(0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);

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

let testWeaponList = ("test")
const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    let newItem = (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.spin)(testWeaponList);
    player.equipItem(newItem);
    let heroScore = (0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_11__.calcHeroScore)(player);
    getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`);
    console.log(player);
    console.log(heroScore);
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  (0,_gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__.closeSlotMachineModal)();
})
    


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN1RTtBQUNOO0FBQ2hCO0FBQ3BDO0FBQ1U7QUFDSztBQUN3QztBQUNzRTtBQUM5QjtBQUMxQztBQUM3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0VBQXVCLDRCQUE0QjtBQUMxRSx5QkFBeUIsK0VBQXVCLDhCQUE4QixpREFBUSxxQkFBcUIsaURBQVEsb0JBQW9CO0FBQ3ZJLHNCQUFzQiwrRUFBdUI7QUFDN0MsMEJBQTBCLCtFQUF1QjtBQUNqRDtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFhO0FBQzdCLG9EQUFvRCxVQUFVO0FBQzlEO0FBQ0EsMERBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBZ0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSx5REFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwRUFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDBEQUFJO0FBQ3RCO0FBQ0Esb0JBQW9CLHlFQUFhO0FBQ2pDLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyRUFBcUI7QUFDdkIsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pdGVtU3RhdHMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvc2hvcEZ1bmN0aW9uLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvd2VhcG9uTGlzdC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3pvZGlhY1Bvd2Vycy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi96b2RpYWNQb3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVxdWlwbWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIGlzRXF1aXBwZWQsIGluUGxheWVySW52ZW50b3J5LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLl9pc0VxdWlwcGVkID0gaXNFcXVpcHBlZDtcclxuICAgICAgICB0aGlzLl9pblBsYXllckludmVudG9yeSA9IGluUGxheWVySW52ZW50b3J5O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFzc1Jlc3RyaWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2xhc3NSZXN0cmljdGlvbjtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNsYXNzIEFybW91ciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCByYXJpdHksIHN0YXRzKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTdGF0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMgPSB0aGlzLmdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzID0ge307XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzID0gMDtcclxuICAgIH1cclxuICBcclxuICAgIGdldFN0YXQoc3RhdE5hbWUpIHtcclxuICAgICAgY29uc3QgYmFzZVZhbHVlID0gdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICBjb25zdCBlcXVpcHBlZFZhbHVlID0gdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgcmV0dXJuIGJhc2VWYWx1ZSArIGVxdWlwcGVkVmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdICs9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1bmVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpICYmIHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSAtPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIDw9IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKGhlcm9UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA2LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDgsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogOCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNixcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA4LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgdHlwZS5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGxldmVsVXAoKSB7XHJcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5fYmFzZVN0YXRzLmxldmVsIHx8IDE7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCA9IGxldmVsICsgMTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgKz0gNTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciByZWNlaXZlcyA1IHNraWxsIHBvaW50cyBwZXIgbGV2ZWxcclxuICAgIH1cclxuICBcclxuICAgIGFsbG9jYXRlU2tpbGxQb2ludChzdGF0TmFtZSkge1xyXG4gICAgICBpZiAodGhpcy5fc2tpbGxQb2ludHMgPiAwICYmIHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IDE7XHJcbiAgICAgICAgdGhpcy5fc2tpbGxQb2ludHMgLT0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHNraWxsUG9pbnRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2tpbGxQb2ludHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBleHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZUltYWdlLCBoZXJvVHlwZSwgZXF1aXBwZWRJdGVtcywgZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbFNlbGVjdGlvbiA9IGVsZW1lbnRhbFNlbGVjdGlvbjtcclxuICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSB0aGlzLmdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICBnZXQgc3ByaXRlSW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3ByaXRlSW1hZ2Uoc3ByaXRlSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZXJvVHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2hlcm9UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZXJvVHlwZShoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzdGF0cyhzdGF0cykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBlcXVpcHBlZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZXF1aXBwZWRJdGVtcyhlcXVpcHBlZEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRhbEFmZmluaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbEFmZmluaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSBlbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuXHJcbiAgICBlcXVpcEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgbG9naWMgZm9yIGVxdWlwcGluZyBhbiBpdGVtXHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuX3N0YXRzLmVxdWlwSXRlbVN0YXRzKGl0ZW0uc3RhdHMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIGF0dGFjayBsb2dpY1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWNpYWxBdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBzcGVjaWFsIGF0dGFjayBsb2dpYyBoZXJlXHJcbiAgICAgICAgY29uc29sZS5sb2coYFNwZWNpYWwgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0JpcnRoZGF5SW5SYW5nZShiaXJ0aGRheSwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgYmlydGhkYXkgdG8gYSBEYXRlIG9iamVjdCBpZiBpdCdzIGEgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXRlID0gdHlwZW9mIGJpcnRoZGF5ID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKGJpcnRoZGF5KSA6IGJpcnRoZGF5O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlNb250aCA9IGJpcnRoZGF5RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF5ID0gYmlydGhkYXlEYXRlLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5IGZhbGwgd2l0aGluIHRoZSByYW5nZVxyXG4gICAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBzdGFydERheSA9IHN0YXJ0RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZW5kTW9udGggPSBlbmREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF5ID0gZW5kRGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2Fwcmljb3JuIGVkZ2UgY2FzZVxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDExICYmIGJpcnRoZGF5RGF5ID4gMjEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDAgJiYgYmlydGhkYXlEYXkgPCAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbXBhcmUgdGhlIG1vbnRoIGFuZCBkYXkgdmFsdWVzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPiBzdGFydE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBzdGFydE1vbnRoICYmIGJpcnRoZGF5RGF5ID49IHN0YXJ0RGF5KSkgJiZcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoIDwgZW5kTW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IGVuZE1vbnRoICYmIGJpcnRoZGF5RGF5IDw9IGVuZERheSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBPdGhlciBtZXRob2RzIGNhbiBiZSBhZGRlZCBoZXJlIGZvciBmdXJ0aGVyIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIC8vIGlmIGVsZW1lbnRhbCBzZWxlY3Rpb24gaXMgYSBiaXJ0aGRheSBwcm92aWRlZDpcclxuICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgLy8gQWxpYXMgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgb2YgdGhlIHpvZGlhYyBTaWducyBkYXRlIHJhbmdlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGxldCBkYXRlQ2hlY2tlciA9ICh6b2RpYWNTaWduc1tpbmRleF0uY29udmVydERhdGVSYW5nZSh6b2RpYWNTaWduc1tpbmRleF0uX2RhdGVSYW5nZSkpO1xyXG4gICAgICAgICAgICBsZXQgYmlydGhEYXlSYW5nZUNoZWNrID0gdGhpcy5pc0JpcnRoZGF5SW5SYW5nZShlbGVtZW50YWxTZWxlY3Rpb24sIGRhdGVDaGVja2VyLnN0YXJ0RGF0ZSwgZGF0ZUNoZWNrZXIuZW5kRGF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjayA9PSAnQ2Fwcmljb3JuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1s5XSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaXJ0aERheVJhbmdlQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiA9PSB6b2RpYWNTaWduc1tpbmRleF0uX3VuaXF1ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAgIFxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbGVtZW50YWxQb3dlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiIsImltcG9ydCBHR1Rva2VuSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0dHVG9rZW4ucG5nXCJcclxuaW1wb3J0IENoZXN0S2V5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0NoZXN0S2V5LnBuZ1wiXHJcblxyXG5cclxuY29uc3QgdmFsaWRDdXJyZW5jaWVzID0gW1wiR0dUb2tlbnNcIiwgXCJDaGVzdEtleXNcIl1cclxuY29uc3QgY3VycmVuY3lJbWFnZXMgPSB7XHJcbiAgICBHR1Rva2VuczogR0dUb2tlbkltYWdlLFxyXG4gICAgQ2hlc3RLZXlzOiBDaGVzdEtleUltYWdlXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJld2FyZFV0aWxpdGllcyA9IHtcclxuXHJcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFsuLi52YWxpZEN1cnJlbmNpZXNdLFxyXG4gICAgZ2V0UmV3YXJkSW1hZ2U6IGZ1bmN0aW9uKHF1ZXN0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJld2FyZFR5cGUgPSBxdWVzdC5yZXdhcmQudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhyZXdhcmRUeXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVuY3lJbWFnZXNbcmV3YXJkVHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhIGRlZmF1bHQgaW1hZ2Ugb3IgaGFuZGxlIGludmFsaWQgcmV3YXJkIHR5cGVzXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSAoY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGV9VXNlckludGVyZmFjZWApO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50fWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbmN5QWdncmVnYXRvciAoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdCkge1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVlc3QucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudCArPSBjdXJyZW50UXVlc3QucmV3YXJkLmFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG5cclxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcclxufSIsImltcG9ydCB7IHJlbW92ZUNvbXBsZXRlZFF1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tIFwiLi9jdXJyZW5jeUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlckludGVyZmFjZU1hbmFnZXIgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoYCR7Y3VycmVuY3lDb250YWluZXJ9YClcclxuICAgIC8vIGxldCBwZXJzaXN0aW5nQ3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGAke2N1cnJlbnRRdWVzdExpc3R9YClcclxuICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgcmVtb3ZlQ29tcGxldGVkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRRdWVzdExpc3RcIiwgY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVuY3lDb250YWluZXJcIiwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG59IiwiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21XZWFwb24gfSBmcm9tIFwiLi9zaG9wRnVuY3Rpb25cIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9pbWFnZUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuICBcclxuXHJcbmV4cG9ydCAgZnVuY3Rpb24gc3BpbiAoaGVyb1NlbGVjdGlvbikge1xyXG5cclxuICAgIC8vIEdlbmVyYXRlIHRoZSB3ZWFwb24gdGhlIHBsYXllciByZWNlaXZlcyB1c2luZyB0aGUgZ2VuZXJhdGVSYW5kb21XZWFwb24gZnVuY3Rpb25cclxuICAgIGxldCBnZW5lcmF0ZWRXZWFwb24gPSBnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKTtcclxuXHJcbiAgICAvLyBQYXJzZSB0aGUgd2VhcG9uIENsYXNzIGRhdGEgdG8gYmUgdXNlZCBmb3IgZnJvbnQgZW5kIGltYWdlc1xyXG4gICAgbGV0IHJlc3VsdGluZ1R5cGUgPSBnZW5lcmF0ZWRXZWFwb24uX3R5cGUucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgIGxldCByZXN1bHRpbmdSYXJpdHkgPSBnZW5lcmF0ZWRXZWFwb24uX3Jhcml0eSArIFwiUmFyaXR5XCI7XHJcbiAgICBsZXQgcmVzdWx0aW5nRWxlbWVudCA9IGdlbmVyYXRlZFdlYXBvbi5fZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFBhc3MgdGhlIGRhdGEgdG8gYSBmaW5kIGZ1bmN0aW9uIHRoYXQgbG9jYXRlcyB0aGUgY2hlY2tzIGVhY2ggaW1hZ2UgKHN0cmluZykgVVJMIHRvIHNlZSBpZiBpdCBpbmNsdWRlcyB0aGUgcGFyc2VkIGRhdGEgICBcclxuICAgIC8vIElmIGRhdGEgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBpbWFnZSBsaW5rIGFzIHZhcmlhYmxlIFxyXG4gICAgbGV0IHNlbGVjdGVkVHlwZUltYWdlID0gd2VhcG9uSW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG4gICAgbGV0IHNlbGVjdGVkUmFyaXR5SW1hZ2UgPSByYXJpdHlJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdSYXJpdHkpKTtcclxuICAgIGxldCBzZWxlY3RlZEVsZW1lbnRJbWFnZSA9IGVsZW1lbnRJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdFbGVtZW50KSk7XHJcbiAgICBcclxuICAgIC8vIEltYWdlcyBmb3IgdGhlIGVxdWlwbWVudCByZWVsXHJcbiAgICBjb25zdCBlcXVpcG1lbnRSZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwbWVudFJlZWwnKTtcclxuXHJcbiAgICAvLyBTZWxlY3RlZCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbCA9ICBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpXHJcbiAgICBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkVHlwZUltYWdlfScpYDtcclxuXHJcbiAgICAvLyBUb3AgZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIHRvcCBzbG90XHJcbiAgICBjb25zdCB0b3BFcXVpcG1lbnRTeW1ib2wgPSBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgIHRvcEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXBvbkltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25JbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAgLy8gQm90dG9tIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBib3R0b20gc2xvdFxyXG4gICAgY29uc3QgYm90dG9tRXF1aXBtZW50U3ltYm9sID0gZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgICBib3R0b21FcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgICBcclxuICAgIFxyXG4gICAgLy8gSW1hZ2VzIGZvciB0aGUgcmFyaXR5IHJlZWxcclxuICAgIGNvbnN0IHJhcml0eVJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFyaXR5UmVlbCcpXHJcblxyXG4gICAgLy8gU2VsZWN0ZWQgcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRSYXJpdHlTeW1ib2wgPSAgcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICAgc2VsZWN0ZWRSYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFJhcml0eUltYWdlfScpYDtcclxuXHJcbiAgICAvLyBUb3AgcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIHRvcCBzbG90XHJcbiAgICBjb25zdCB0b3BSYXJpdHlTeW1ib2wgPSByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgIHRvcFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcbiBcclxuICAgIC8vIEJvdHRvbSByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgIGNvbnN0IGJvdHRvbVJhcml0eVN5bWJvbCA9IHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICAgYm90dG9tUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFyaXR5SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhcml0eUltYWdlcy5sZW5ndGgpXX0nKWBcclxuICAgICAgIFxyXG5cclxuICAgIC8vIEltYWdlcyBmb3IgdGhlIGVsZW1lbnQgcmVlbFxyXG4gICAgY29uc3QgZWxlbWVudFJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxlbWVudFJlZWwnKVxyXG5cclxuICAgIC8vIFNlbGVjdGVkIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgICBjb25zdCBzZWxlY3RlZEVsZW1lbnRTeW1ib2wgPSAgZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgIHNlbGVjdGVkRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkRWxlbWVudEltYWdlfScpYDtcclxuXHJcbiAgICAvLyBUb3AgZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCB0b3Agc2xvdFxyXG4gICAgY29uc3QgdG9wRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgIHRvcEVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsZW1lbnRJbWFnZXMubGVuZ3RoKV19JylgXHJcbiBcclxuICAgIC8vIEJvdHRvbSBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgICBjb25zdCBib3R0b21FbGVtZW50U3ltYm9sID0gZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICAgYm90dG9tRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgICBcclxuICAgIHJldHVybiBnZW5lcmF0ZWRXZWFwb247XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gb3BlblNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2VTbG90TWFjaGluZU1vZGFsKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3RNYWNoaW5lTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCIvLyB3aGVyZSBcInJcIiBpcyBhIHJlcXVpcmUuY29udGV4dCBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbXBvcnRBbGxJbWFnZXMocikge1xyXG4gICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgIC8vIGtleXMgaXMgYW4gYXJyYXkgdGhhdCBzdG9yZXMgYWxsIHRoZSBmaWxlbmFtZXMgcmV0dXJuZWQgYnkgci5rZXlzKClcclxuICAgIGNvbnN0IGtleXMgPSByLmtleXMoKTtcclxuXHJcbiAgICAvLyBsZW5ndGggc290cmVzIHRoZSBsZW5ndGggb2YgdGhlIGtleXMgYXJyYXlcclxuICAgIGNvbnN0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpbWFnZXMucHVzaChyKGtleSkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vUmVkIERlbW9uIEhlbG0ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2FybW91ci9SZWQgRGVtb24gSGVsbS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2FybW91ciBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FieXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hYnlzcy5wbmdcIixcblx0XCIuL2FldGhlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWV0aGVyLnBuZ1wiLFxuXHRcIi4vY29ycm9kZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvY29ycm9kZS5wbmdcIixcblx0XCIuL2dhaWEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2dhaWEucG5nXCIsXG5cdFwiLi9pbmZlcm5vLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9pbmZlcm5vLnBuZ1wiLFxuXHRcIi4vbHVuYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2x1bmFyLnBuZ1wiLFxuXHRcIi4vbWlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbWlzdC5wbmdcIixcblx0XCIuL3NvbGFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zb2xhci5wbmdcIixcblx0XCIuL3N0ZWVsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zdGVlbC5wbmdcIixcblx0XCIuL3RlcnJhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy90ZXJyYS5wbmdcIixcblx0XCIuL3ZvbHQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3ZvbHQucG5nXCIsXG5cdFwiLi96ZXBoeXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3plcGh5ci5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZXBpY1Jhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvZXBpY1Jhcml0eS5wbmdcIixcblx0XCIuL2xlZ2VuZGFyeVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiLFxuXHRcIi4vbm9ybWFsUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9ub3JtYWxSYXJpdHkucG5nXCIsXG5cdFwiLi9yYXJlUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9yYXJlUmFyaXR5LnBuZ1wiLFxuXHRcIi4vdW5jb21tb25SYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3VuY29tbW9uUmFyaXR5LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BYnlzc1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vR2FpYVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvR2FpYVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0x1bmFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9MdW5hclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9NaXN0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9NaXN0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1J1bmVTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1J1bmVTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vU29sYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1NvbGFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vWmVwaHlyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvd2VhcG9ucyBzeW5jIFxcXFwuKHBuZykkXCI7IiwiZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzID0gW1xyXG4gICAgXCJTdGVlbFwiLFxyXG4gICAgXCJBYnlzc1wiLFxyXG4gICAgXCJaZXBoeXJcIixcclxuICAgIFwiTHVuYXJcIixcclxuICAgIFwiU29sYXJcIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJBZXRoZXJcIixcclxuICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgXCJJbmZlcm5vXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiVm9sdFwiLFxyXG4gICAgXCJNaXN0XCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVSYXJpdHkgPSBbXHJcbiAgICB7IHJhcml0eTogXCJub3JtYWxcIiwgY2hhbmNlOiA0MH0sXHJcbiAgICB7IHJhcml0eTogXCJ1bmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICB7IHJhcml0eTogXCJyYXJlXCIsIGNoYW5jZTogMTggfSxcclxuICAgIHsgcmFyaXR5OiBcImVwaWNcIiwgY2hhbmNlOiA5IH0sXHJcbiAgICB7IHJhcml0eTogXCJsZWdlbmRhcnlcIiwgY2hhbmNlOiAzIH0sXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3RhdHMgPSB7XHJcbiAgICBub3JtYWw6IHtcclxuICAgICAgZGFtYWdlOiB7IG1pbjogNSwgbWF4OiAxMCB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAsIG1heDogMjAgfSxcclxuICAgICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDA1LCBtYXg6IDAuMDIgfVxyXG4gICAgfSxcclxuICAgIHVuY29tbW9uOiB7XHJcbiAgICAgIGRhbWFnZTogeyBtaW46IDcuNSwgbWF4OiAxNSB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgICAgZGV4dGVyaXR5OiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgICAgY3JpdERhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAwNzUsIG1heDogMC4wMyB9XHJcbiAgICB9LFxyXG4gICAgcmFyZToge1xyXG4gICAgICBkYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgICAgZGV4dGVyaXR5OiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgICAgY3JpdERhbWFnZTogeyBtaW46IDMwLCBtYXg6IDYwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAxNSwgbWF4OiAwLjA2IH1cclxuICAgIH0sXHJcbiAgICBlcGljOiB7XHJcbiAgICAgIGRhbWFnZTogeyBtaW46IDI1LCBtYXg6IDUwIH0sXHJcbiAgICAgIHN0cmVuZ3RoOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICAgIGludGVsbGlnZW5jZTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgICAgY29uc3RpdHV0aW9uOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAyNSwgbWF4OiAwLjEgfVxyXG4gICAgfSxcclxuICAgIGxlZ2VuZGFyeToge1xyXG4gICAgICBkYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgICAgc3RyZW5ndGg6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBjb25zdGl0dXRpb246IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAwLCBtYXg6IDIwMCB9LFxyXG4gICAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wNSwgbWF4OiAwLjIgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVQcmVmaXggPSB7XHJcbiAgICBub3JtYWw6IFtcclxuICAgICAgXCJPcmRpbmFyeVwiLCBcIkNvbW1vblwiLCBcIlBsYWluXCIsIFwiUmVndWxhclwiLCBcIkJhc2ljXCJcclxuICAgIF0sXHJcbiAgICB1bmNvbW1vbjogW1xyXG4gICAgICBcIlVuY29tbW9uXCIsIFwiU3RyYW5nZVwiLCBcIlNwZWNpYWxcIiwgXCJEaXN0aW5jdGl2ZVwiLCBcIkFibm9ybWFsXCJcclxuICAgIF0sXHJcbiAgICByYXJlOiBbXHJcbiAgICAgIFwiUmFyZVwiLCBcIlByZWNpb3VzXCIsIFwiRXhxdWlzaXRlXCIsIFwiTWFnbmlmaWNlbnRcIiwgXCJFbGl0ZVwiXHJcbiAgICBdLFxyXG4gICAgZXBpYzogW1xyXG4gICAgICBcIkVwaWNcIiwgXCJHcmFuZFwiLCBcIklsbHVzdHJpb3VzXCIsIFwiVHJhbnNjZW5kZW50XCIsIFwiTWFqZXN0aWNcIlxyXG4gICAgXSxcclxuICAgIGxlZ2VuZGFyeTogW1xyXG4gICAgICBcIkxlZ2VuZGFyeVwiLCBcIlVsdGltYXRlXCIsIFwiRXRlcm5hbFwiLCBcIkludmluY2libGVcIiwgXCJHb2RsaWtlXCJcclxuICAgIF1cclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3VmZml4ID0ge1xyXG4gICAgU3RlZWw6IFwib2YgV2FyXCIsXHJcbiAgICBBYnlzczogXCJvZiBXYWlsaW5nXCIsXHJcbiAgICBaZXBoeXI6IFwib2YgSG93bGluZ1wiLFxyXG4gICAgTHVuYXI6IFwib2YgTW9vbmxpZ2h0XCIsXHJcbiAgICBTb2xhcjogXCJvZiBTdW5saWdodFwiLFxyXG4gICAgVGVycmE6IFwib2YgVGVjdG9uaWNcIixcclxuICAgIEFldGhlcjogXCJvZiBHcmF2aXR5XCIsXHJcbiAgICBDb3Jyb2RlOiBcIm9mIFBvaXNvblwiLFxyXG4gICAgSW5mZXJubzogXCJvZiBCdXJuaW5nXCIsXHJcbiAgICBHYWlhOiBcIm9mIE5hdHVyZVwiLFxyXG4gICAgVm9sdDogXCJvZiBTaG9ja2luZ1wiLFxyXG4gICAgTWlzdDogXCJvZiBGcmVlemluZ1wiXHJcbiAgfTsiLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjYWxjSGVyb1Njb3JlIChwbGF5ZXJDaGFyYWN0ZXIpIHtcclxuICAgIGxldCBoZXJvU2NvcmUgPSAwO1xyXG5cclxuICAgIC8vIEJhc2Ugc3RhdHMgY2FsY1xyXG4gICAgbGV0IGluaGVyZW50U3RyZW5ndGggPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJzdHJlbmd0aFwiKTtcclxuICAgIGxldCBpbmhlcmVudEludGVsbGlnZW5jZSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImludGVsbGlnZW5jZVwiKTtcclxuICAgIGxldCBpbmhlcmVudERleHRlcml0eSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImRleHRlcml0eVwiKTtcclxuICAgIGxldCBpbmhlcmVudENvbnN0aXR1dGlvbiA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImNvbnN0aXR1dGlvblwiKTtcclxuXHJcbiAgICAvLyBXZWFwb24gU3RhdHMgQ2FsY1xyXG4gICAgbGV0IHdlYXBvblN0cmVuZ3RoID0gMDtcclxuICAgIGxldCB3ZWFwb25JbnRlbGxpZ2VuY2UgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkRleHRlcml0eSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uQ29uc3RpdHV0aW9uID0gMDtcclxuICAgIGZvciAobGV0IHdlYXBvbkluZGV4ID0gMDsgd2VhcG9uSW5kZXggPCBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXMubGVuZ3RoOyB3ZWFwb25JbmRleCsrKSB7XHJcbiAgICAgICAgd2VhcG9uU3RyZW5ndGggKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuc3RyZW5ndGg7XHJcbiAgICAgICAgd2VhcG9uSW50ZWxsaWdlbmNlICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmludGVsbGlnZW5jZTtcclxuICAgICAgICB3ZWFwb25EZXh0ZXJpdHkgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgICAgIHdlYXBvbkNvbnN0aXR1dGlvbiArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jb25zdGl0dXRpb247XHJcbiAgICB9XHJcbiAgICAvLyBsZXQgd2VhcG9uU3RyZW5ndGggPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbMF0uX3N0YXRzLnN0cmVuZ3RoO1xyXG4gICAgLy8gbGV0IHdlYXBvbkludGVsbGlnZW5jZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1swXS5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgLy8gbGV0IHdlYXBvbkRleHRlcml0eSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1swXS5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgLy8gbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1swXS5fc3RhdHMuY29uc3RpdHV0aW9uO1xyXG5cclxuICAgICAgICAvLyBXZWFwb24gU3RhdHMgQ2FsY1xyXG5cclxuXHJcbiAgICAvLyBUb3RhbCBTdGF0c1xyXG5cclxuICAgIGxldCB0b3RhbFN0cmVuZ3RoID0gaW5oZXJlbnRTdHJlbmd0aCArIHdlYXBvblN0cmVuZ3RoO1xyXG4gICAgbGV0IHRvdGFsSW50ZWxsaWdlbmNlID0gaW5oZXJlbnRJbnRlbGxpZ2VuY2UgKyB3ZWFwb25JbnRlbGxpZ2VuY2U7XHJcbiAgICBsZXQgdG90YWxEZXh0ZXJpdHkgPSBpbmhlcmVudERleHRlcml0eSArIHdlYXBvbkRleHRlcml0eTtcclxuICAgIGxldCB0b3RhbENvbnN0aXR1dGlvbiA9IGluaGVyZW50Q29uc3RpdHV0aW9uICsgd2VhcG9uQ29uc3RpdHV0aW9uO1xyXG5cclxuICAgIHN3aXRjaChwbGF5ZXJDaGFyYWN0ZXIuaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICB0b3RhbFN0cmVuZ3RoICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICAgIHRvdGFsSW50ZWxsaWdlbmNlICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICAgIHRvdGFsRGV4dGVyaXR5ICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICB0b3RhbENvbnN0aXR1dGlvbiAqPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGhlcm9TY29yZSArPSAodG90YWxTdHJlbmd0aCArIHRvdGFsSW50ZWxsaWdlbmNlICsgdG90YWxEZXh0ZXJpdHkgKyB0b3RhbENvbnN0aXR1dGlvbilcclxuXHJcblxyXG5cclxuICAgIHJldHVybiBoZXJvU2NvcmU7XHJcbn0iLCJpbXBvcnQgeyBRdWVzdCwgQ3VycmVuY3kgfSBmcm9tICcuL2NsYXNzZXMuanMnXHJcbmltcG9ydCB7IHJld2FyZFV0aWxpdGllcywgY3VycmVuY3lBZ2dyZWdhdG9yIH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1F1ZXN0ICgpIHtcclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBuZXcgQ3VycmVuY3kobnVsbCwgbnVsbCksIG51bGwpXHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtT2JqZWN0aXZlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1EYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lUeXBlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeUFtb3VudFwiKS52YWx1ZTtcclxuXHJcbiAgICBxdWVzdE9iamVjdC5vYmplY3RpdmUgPSBnZXRRdWVzdEZvcm1PYmplY3RpdmU7XHJcbiAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IGdldFF1ZXN0Rm9ybURhdGU7XHJcbiAgICBxdWVzdE9iamVjdC5xdWVzdENvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQudHlwZSA9IGdldFF1ZXN0Q3VycmVuY3lUeXBlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLmFtb3VudCA9IHBhcnNlSW50KGdldFF1ZXN0Q3VycmVuY3lBbW91bnQpO1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgcXVlc3RJbmRleCBpbiBjdXJyZW50UXVlc3RMaXN0KSB7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkXCIpXHJcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtbcXVlc3RJbmRleF19YCk7XHJcblxyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKVxyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApO1xyXG5cclxuICAgICAgICAvL1F1ZXN0IENvbXBsZXRlIENoZWNrYm94IE5lc3RlZCBpbiBRdWVzdCBPYmplY3RpdmUgQ29udGVudCBEaXYgXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJNYXJrIFF1ZXN0IENvbXBsZXRlXCI7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLmh0bWxGb3IgPSBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YCk7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucXVlc3RDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNoZWNrYm94KTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVMYWJlbCk7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcImRhdGVUb0NvbXBsZXRlQm94XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtbcXVlc3RJbmRleF19LXJld2FyZGApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC5hbW91bnR9ICR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQudHlwZX1gKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChxdWVzdE9iamVjdGl2ZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlVG9Db21wbGV0ZUJveCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcclxuICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaChxdWVzdCk7XHJcbiAgICByZXR1cm4gY3VycmVudFF1ZXN0TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0KSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdFtpbmRleF0ucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIEFzc3VtaW5nIHRoZSBjb2RlIGZvciB0aGUgV2VhcG9uIGNsYXNzLCBIZXJvVHlwZVdlYXBvbkxpc3QgY2xhc3MsIGFuZCB3ZWFwb25MaXN0cyBmb3IgZWFjaCBjbGFzcyBpcyBhbHJlYWR5IGRlZmluZWQuXHJcbmltcG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfSBmcm9tIFwiLi93ZWFwb25MaXN0LmpzXCJcclxuaW1wb3J0IHsgaXRlbVBvc3NpYmxlRWxlbWVudHMsIGl0ZW1Qb3NzaWJsZVJhcml0eSwgaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVBvc3NpYmxlU3VmZml4IH0gZnJvbSBcIi4vaXRlbVN0YXRzLmpzXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSAnLi9pbWFnZUhhbmRsZXInO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pXHJcblxyXG5cclxuXHJcbmNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBlbGVtZW50LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHJvZ3VlV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHByaWVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gd2FycmlvcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNvcmNlcmVyV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJ0ZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwbGF5ZXIgY2xhc3MuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWFwb25MaXN0ID0gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcyk7XHJcbiAgXHJcbiAgICBpZiAod2VhcG9uTGlzdCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gd2VhcG9uTGlzdFtyYW5kb21JbmRleF0uX3R5cGU7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW52YWxpZCBwbGF5ZXIgY2xhc3NcclxuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcmV0cmlldmUgd2VhcG9uIGxpc3QuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJhcml0eSAoaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b3RhbCBjaGFuY2UgdG8gMFxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGNoYW5jZSB2YWx1ZXMgb2YgYWxsIHJhcml0eSBvYmplY3QgY2hhbmNlc1xyXG4gICAgLy8gVGhpcyBzaG91bGQgYWRkIHVwIHRvIDEwMFxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSByYW5kb20gd2hvbGUgaW50ZWdlciBiZXR3ZWVuIDAgLSAxMDBcclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZSk7XHJcblxyXG4gICAgLy8gU2V0IHJhcml0eSB2YWx1ZSB0byBudWxsXHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJhcml0eSBiYXNlZCBvbiB5b3VyIHJhbmRvbUNoYW5jZSByb2xsLiBcclxuICAgIC8vIEZvciBleGFtcGxlIGlmIFJhbmRvbSBDaGFuY2Ugd2FzIDk0OlxyXG4gICAgLy8gOTQgLSA0MCAoTm9ybWFsIFJhcml0eSkgPSA1NCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA1NCAtIDMwIChVbmNvbW1vbiBSYXJpdHkpID0gMjQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gMjQgLSAxNSAoUmFyZSBSYXJpdHkpID0gOSA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA5IC0gMTAgKEVwaWMgUmFyaXR5KSA9IC0xIDwtLSBUaGVyZWZvcmUgcmFyaXR5IG9mIGl0ZW0gaXMgRXBpYyBhcyAoOSAtIDEwKSA8ICgwKVxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpcyAoLTAuMDEgdG8gYWNvdW50IGZvciByb3VuZGluZyBlcnJvcnMpXHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAtMC4wMSkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlPYmplY3QucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgaXRlbVJhcml0eSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAvLyBVc2luZyB0aGUgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gdG8gYWNjZXNzIHRoZSBwcm9wZXJ0eSBhdCBydW50aW1lXHJcbiAgICBjb25zdCByYXJpdHlTdGF0cyA9IGl0ZW1Qb3NzaWJsZVN0YXRzW2l0ZW1SYXJpdHldO1xyXG4gICAgY29uc3QgaXRlbVN0YXRzID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGF0IGluIHJhcml0eVN0YXRzKSB7XHJcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gcmFyaXR5U3RhdHNbc3RhdF07XHJcbiAgICBpdGVtU3RhdHNbc3RhdF0gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGF0cztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1QcmVmaXgoaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUmFyaXR5KSB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtUG9zc2libGVQcmVmaXhbaXRlbVJhcml0eV0ubGVuZ3RoKVxyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XVtyYW5kb21JbmRleF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlRWxlbWVudHNbcmFuZG9tSW5kZXhdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVN1ZmZpeFtlbGVtZW50XTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21XZWFwb24gKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgbGV0IHdlYXBvblR5cGUgPSBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcyk7XHJcbiAgICBsZXQgd2VhcG9uRWxlbWVudCA9IGdldEl0ZW1FbGVtZW50KGl0ZW1Qb3NzaWJsZUVsZW1lbnRzKTtcclxuICAgIGxldCB3ZWFwb25SYXJpdHkgPSBnZXRJdGVtUmFyaXR5KGl0ZW1Qb3NzaWJsZVJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3RhdHMgPSBnZXRJdGVtU3RhdHMoaXRlbVBvc3NpYmxlU3RhdHMsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uUHJlZml4ID0gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3VmZml4ID0gZ2V0SXRlbVN1ZmZpeChpdGVtUG9zc2libGVTdWZmaXgsIHdlYXBvbkVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgV2VhcG9uKFxyXG4gICAgICAgICh3ZWFwb25QcmVmaXggKyBcIiBcIiArIHdlYXBvblR5cGUgKyBcIiBcIiArIHdlYXBvblN1ZmZpeCksIFxyXG4gICAgICAgIHdlYXBvblR5cGUsXHJcbiAgICAgICAgcGxheWVyQ2xhc3MsXHJcbiAgICAgICAgd2VhcG9uUmFyaXR5LFxyXG4gICAgICAgIHdlYXBvblN0YXRzLFxyXG4gICAgICAgIHdlYXBvbkVsZW1lbnQsXHJcbiAgICAgICAgbnVsbCxcclxuICAgIClcclxuXHJcbiBcclxufVxyXG4vLyBTaW11bGF0aW5nIGFuIGl0ZW0gYmVpbmcgcHVsbGVkIGZyb20gYSBjaGVzdCBiYXNlZCBvbiBwbGF5ZXIncyBjbGFzcyBhbmQgcmFyaXR5IHByb2JhYmlsaXRpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHB1bGxJdGVtRnJvbUNoZXN0KHBsYXllckNsYXNzLCBwaXR5KSB7XHJcbiAgIFxyXG5cclxuICAgIC8vIENvbnNpZGVyIGNvbnN0YW50IHJhcml0eSBvYmplY3QgZm9yIHNjYWxpbmcgcHVycG9zZXNcclxuICAgIGNvbnN0IHJhcml0eVByb2JhYmlsaXRpZXMgPSBbXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTm9ybWFsXCIsIGNoYW5jZTogNDAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJVbmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiUmFyZVwiLCBjaGFuY2U6IDE1IH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiRXBpY1wiLCBjaGFuY2U6IDEwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTGVnZW5kYXJ5XCIsIGNoYW5jZTogNSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICB0b3RhbENoYW5jZSArPSByYXJpdHlEYXRhLmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmFuZG9tQ2hhbmNlID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tQ2hhbmNlKTtcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgcmFyaXR5RGF0YSBvZiByYXJpdHlQcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgICAgIGlmIChyYW5kb21DaGFuY2UgPD0gMCkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlEYXRhLnJhcml0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhcml0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgY29uc3QgcmFuZG9tV2VhcG9uID0gd2VhcG9uTGlzdFtyYW5kb21JbmRleF07XHJcblxyXG4gICAgLy8gQXNzaWduIHJhbmRvbSBwcm9wZXJ0aWVzIHRvIHRoZSB3ZWFwb25cclxuICAgIHJhbmRvbVdlYXBvbi5fbmFtZSA9IFwiRGl2aW5lIFN0YWZmXCI7IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gcmFyaXR5OyAvLyBBc3NpZ25pbmcgdGhlIGRldGVybWluZWQgcmFyaXR5XHJcblxyXG4gICAgLy8gSWYgdGhlIHB1bGxlZCBpdGVtIGlzIGxlZ2VuZGFyeSwgcmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgaWYgKHJhcml0eSA9PT0gXCJMZWdlbmRhcnlcIikge1xyXG4gICAgICAgIHBpdHkgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwaXR5Kys7IC8vIEluY3JlbWVudCB0aGUgcGl0eSBjb3VudGVyIGlmIGEgbGVnZW5kYXJ5IGl0ZW0gd2FzIG5vdCBwdWxsZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBHdWFyYW50ZWUgYSBsZWdlbmRhcnkgaXRlbSBpZiB0aGUgcGl0eSBjb3VudGVyIHJlYWNoZXMgMTAwXHJcbiAgICBpZiAocGl0eSA+PSAxMDApIHtcclxuICAgICAgICByYW5kb21XZWFwb24uX3Jhcml0eSA9IFwiTGVnZW5kYXJ5XCI7XHJcbiAgICAgICAgcGl0eSA9IDA7IC8vIFJlc2V0IHRoZSBwaXR5IGNvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21XZWFwb24uX3N0YXRzID0ge1xyXG4gICAgICAgIGF0dGFjazogMTUwLFxyXG4gICAgICAgIGludGVsbGVjdDogNTAsXHJcbiAgICAgICAgc3RhbWluYTogODAsXHJcbiAgICB9OyAvLyBFeGFtcGxlIHByb3BlcnR5XHJcblxyXG4gICAgcmV0dXJuIHsgaXRlbTogcmFuZG9tV2VhcG9uLCBwaXR5IH07XHJcbn1cclxuIiwiY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJvZ3VlV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJEYWdnZXJcIiwgXCJEYWdnZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsIEJsYWRlc1wiLCBcIkR1YWwgQmxhZGVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQm93XCIsIFwiQm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2xhdyBXZWFwb25zXCIsIFwiQ2xhdyBXZWFwb25zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3Jvc3Nib3dcIiwgXCJDcm9zc2Jvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJhcGllclwiLCBcIlJhcGllclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJsb3dndW5cIiwgXCJCbG93Z3VuXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2hha3JhbXNcIiwgXCJDaGFrcmFtc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhcnJvdGVcIiwgXCJHYXJyb3RlXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHdhcnJpb3JXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0c3dvcmRcIiwgXCJHcmVhdHN3b3JkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyaGFtbWVyXCIsIFwiV2FyaGFtbWVyXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQb2xlYXJtXCIsIFwiUG9sZWFybVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXhlXCIsIFwiQXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlXCIsIFwiTWFjZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdGF4ZVwiLCBcIkdyZWF0YXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJGbGFpbFwiLCBcIkZsYWlsXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FyIEdhdW50bGV0c1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHByaWVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBXYW5kXCIsIFwiSG9seSBXYW5kXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRvbWVcIiwgXCJUb21lXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgSGFtbWVyXCIsIFwiSG9seSBIYW1tZXJcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQW5raFwiLCBcIkFua2hcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBCb3dcIiwgXCJIb2x5IEJvd1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlNhY3JlZCBDaGFsaWNlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlByYXllciBCZWFkc1wiLCBcIlByYXllciBCZWFkc1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFNjeXRoZVwiLCBcIkhvbHkgU2N5dGhlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBzb3JjZXJlcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNwZWxsYm9va1wiLCBcIlNwZWxsYm9va1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVsZW1lbnRhbCBXYW5kXCIsIFwiRWxlbWVudGFsIFdhbmRcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcnlzdGFsIE9yYlwiLCBcIkNyeXN0YWwgT3JiXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZWJsYWRlXCIsIFwiUnVuZWJsYWRlXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbmNoYW50ZWQgQm93XCIsIFwiRW5jaGFudGVkIEJvd1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNjZXB0ZXJcIiwgXCJTY2VwdGVyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIERhZ2dlclwiLCBcIkFyY2FuZSBEYWdnZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmF2aXRvbiBTdGFmZlwiLCBcIkdyYXZpdG9uIFN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHRlc3RXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkFieXNzIFNob3J0IFN3b3JkXCIsIFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiR2FpYSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJJbmZlcm5vIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTHVuYXIgU2hvcnQgU3dvcmRcIiwgXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJNaXN0IFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJ1bmUgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTb2xhciBTaG9ydCBTd29yZFwiLCBcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlZvbHQgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuZXhwb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0LCB0ZXN0V2VhcG9uTGlzdCB9OyIsImNsYXNzIFpvZGlhY1NpZ24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydERhdGVSYW5nZShkYXRlUmFuZ2UpIHtcclxuICAgICAgLy8gU3BsaXQgdGhlIGRhdGUgcmFuZ2Ugc3RyaW5nIGludG8gc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gICAgICBjb25zdCBbc3RhcnRTdHIsIGVuZFN0cl0gPSBkYXRlUmFuZ2Uuc3BsaXQoJyAtICcpO1xyXG4gICAgXHJcbiAgICAgIC8vIFBhcnNlIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHVzaW5nIHRoZSBEYXRlIGNvbnN0cnVjdG9yXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0U3RyKTtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZFN0cik7XHJcbiAgICBcclxuICAgICAgLy8gQWRqdXN0IHRoZSB5ZWFyIG9mIHRoZSBlbmQgZGF0ZSBpZiBuZWNlc3NhcnlcclxuICAgICAgaWYgKGVuZERhdGUgPCBzdGFydERhdGUpIHtcclxuICAgICAgICBlbmREYXRlLnNldEZ1bGxZZWFyKHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgYW4gb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IHpvZGlhY1NpZ25zID0gW1xyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXJpZXNcIixcclxuICAgICAgXCJNYXJjaCAyMSAtIEFwcmlsIDE5XCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlN0ZWVsXCIsXHJcbiAgICAgIFwiQXJlcywgdGhlIEdvZCBvZiBXYXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVGF1cnVzXCIsXHJcbiAgICAgIFwiQXByaWwgMjAgLSBNYXkgMjBcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkFieXNzXCIsXHJcbiAgICAgIFwiSGFkZXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiR2VtaW5pXCIsXHJcbiAgICAgIFwiTWF5IDIxIC0gSnVuZSAyMFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlplcGh5clwiLFxyXG4gICAgICBcIkl6YW5hbWkvSXphbmFnaSwgdGhlIEdvZHMvR29kZGVzc2VzIG9mIENyZWF0aW9uIGFuZCBEZWF0aCAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYW5jZXJcIixcclxuICAgICAgXCJKdW5lIDIxIC0gSnVseSAyMlwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTHVuYXJcIixcclxuICAgICAgXCJUc3VrdXlvbWksIHRoZSBHb2Qgb2YgdGhlIE1vb24gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGVvXCIsXHJcbiAgICAgIFwiSnVseSAyMyAtIEF1Z3VzdCAyMlwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTb2xhclwiLFxyXG4gICAgICBcIlJhLCB0aGUgR29kIG9mIHRoZSBTdW4gKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVmlyZ29cIixcclxuICAgICAgXCJBdWd1c3QgMjMgLSBTZXB0ZW1iZXIgMjJcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIlRlcnJhXCIsXHJcbiAgICAgIFwiT3NpcmlzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxpYnJhXCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIkFldGhlclwiLFxyXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2NvcnBpb1wiLFxyXG4gICAgICBcIk9jdG9iZXIgMjMgLSBOb3ZlbWJlciAyMVwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgICBcIlBvc2VpZG9uLCB0aGUgR29kIG9mIHRoZSBTZWEgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2FnaXR0YXJpdXNcIixcclxuICAgICAgXCJOb3ZlbWJlciAyMiAtIERlY2VtYmVyIDIxXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIkluZmVybm9cIixcclxuICAgICAgXCJBbWF0ZXJhc3UsIHRoZSBHb2RkZXNzIG9mIHRoZSBTdW4gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2Fwcmljb3JuXCIsXHJcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJHYWlhXCIsXHJcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXF1YXJpdXNcIixcclxuICAgICAgXCJKYW51YXJ5IDIwIC0gRmVicnVhcnkgMThcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJWb2x0XCIsXHJcbiAgICAgIFwiWmV1cywgdGhlIEdvZCBvZiBUaHVuZGVyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlBpc2Nlc1wiLFxyXG4gICAgICBcIkZlYnJ1YXJ5IDE5IC0gTWFyY2ggMjBcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIk1pc3RcIixcclxuICAgICAgXCJTdXNhbm9vLCB0aGUgR29kIG9mIHRoZSBTZWEgYW5kIFN0b3JtcyAoSmFwYW5lc2UpXCJcclxuICAgIClcclxuICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5LCBXZWFwb24sIEFybW91ciwgUGxheWVyQ2hhcmFjdGVyLCBQbGF5ZXJTdGF0cyB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0TmV3UXVlc3QsIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzLCBhZGRRdWVzdH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XHJcbmltcG9ydCBnZXRPYmplY3RpdmUgZnJvbSBcIi4vZ2V0T2JqZWN0aXZlLmpzXCI7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBwdWxsSXRlbUZyb21DaGVzdCwgZ2V0SXRlbVJhcml0eSwgZ2V0SXRlbVN0YXRzLCBnZXRJdGVtVHlwZSwgZ2V0SXRlbUVsZW1lbnQsIGdldEl0ZW1QcmVmaXgsIGdldEl0ZW1TdWZmaXgsIGdlbmVyYXRlUmFuZG9tV2VhcG9ufSBmcm9tICcuL3Nob3BGdW5jdGlvbic7XHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gJy4vaXRlbVN0YXRzJztcclxuaW1wb3J0IHsgc3Bpbiwgb3BlblNsb3RNYWNoaW5lTW9kYWwsIGNsb3NlU2xvdE1hY2hpbmVNb2RhbH0gZnJvbSAnLi9nYWNoYVNwaW5GdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjSGVyb1Njb3JlIH0gZnJvbSAnLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnMnO1xyXG5cclxuXHJcbi8vIEdsb2JhbGx5IFNjb3BlZCBWYXJpYWJsZXNcclxubGV0IGN1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudFF1ZXN0TGlzdCcpIHx8IFtdOyAvLyBMb2FkIGZyb20gbG9jYWwgc3RvcmFnZVxyXG5sZXQgY3VycmVuY3lDb250YWluZXIgPSAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbmN5Q29udGFpbmVyJykgfHwgW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJDaGVzdEtleXNcIiwgMCldKTsgLy8gTG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxubGV0IHBsYXllckludmVudG9yeSA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJJbnZlbnRvcnknKSB8fCBbXTtcclxubGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdO1xyXG5sZXQgcGxheWVyQmlydGhkYXkgPSBuZXcgRGF0ZSAoXCIwMi0wMy0xOTk2XCIpO1xyXG5sZXQgaGVyb1NlbGVjdGlvbiA9IChcIlNvcmNlcmVyXCIpO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcihcImltYWdlcy96ZXVzU3ByaXRlLnBuZ1wiLCBoZXJvU2VsZWN0aW9uLCBwbGF5ZXJFcXVpcHBlZEl0ZW1zLCBwbGF5ZXJCaXJ0aGRheSk7XHJcbmxldCBwaXhlbEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0SW1hZ2VcIik7XHJcbnBpeGVsSW1hZ2VDb250YWluZXIuc3JjID0gKHBsYXllci5zcHJpdGVJbWFnZSk7XHJcbmNvbnNvbGUubG9nKHBsYXllci5fc3RhdHMuZ2V0U3RhdChcInN0cmVuZ3RoXCIpKTtcclxubGV0IGdldEhlcm9TY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVyb1Njb3JlQ29udGFpbmVyXCIpO1xyXG5sZXQgaGVyb1Njb3JlID0gY2FsY0hlcm9TY29yZShwbGF5ZXIpO1xyXG5nZXRIZXJvU2NvcmVDb250YWluZXIudGV4dENvbnRlbnQgPSAoYEhlcm8gU2NvcmU6ICR7aGVyb1Njb3JlfWApXHJcblxyXG51c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lciB0byBPcGVuIFF1ZXN0IENyZWF0aW9uIE1vZGFsXHJcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2FkZFF1ZXN0QnV0dG9uXCIpXHJcbmFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgZGlzcGxheUZvcm1Nb2RhbCgpO1xyXG59KVxyXG5cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyIHRvIEFkZCBRdWVzdCB0byBRdWVzdCBMaXN0IGFuZCBEaXNwbGF5XHJcbmxldCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtU3VibWl0QnV0dG9uXCIpO1xyXG5mb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgY2xvc2VGb3JtTW9kYWwoZSk7XHJcbiAgICBsZXQgbmV3bHlHZW5lcmF0ZWRRdWVzdCA9IGdldE5ld1F1ZXN0KCk7XHJcbiAgICBhZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBuZXdseUdlbmVyYXRlZFF1ZXN0KTtcclxuICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufSlcclxuXHJcblxyXG5jb25zdCB3ZWFwb25Sb2xsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWFwb25HZW5lcmF0b3JcIik7XHJcbndlYXBvblJvbGxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIG9wZW5TbG90TWFjaGluZU1vZGFsKCk7XHJcbn0pXHJcblxyXG5sZXQgdGVzdFdlYXBvbkxpc3QgPSAoXCJ0ZXN0XCIpXHJcbmNvbnN0IHNwaW5TbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGluU2xvdEJ1dHRvblwiKTtcclxuc3BpblNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xyXG4gICAgbGV0IG5ld0l0ZW0gPSBzcGluKHRlc3RXZWFwb25MaXN0KTtcclxuICAgIHBsYXllci5lcXVpcEl0ZW0obmV3SXRlbSk7XHJcbiAgICBsZXQgaGVyb1Njb3JlID0gY2FsY0hlcm9TY29yZShwbGF5ZXIpO1xyXG4gICAgZ2V0SGVyb1Njb3JlQ29udGFpbmVyLnRleHRDb250ZW50ID0gKGBIZXJvIFNjb3JlOiAke2hlcm9TY29yZX1gKTtcclxuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XHJcbiAgICBjb25zb2xlLmxvZyhoZXJvU2NvcmUpO1xyXG59KTtcclxuXHJcbmNvbnN0IGNsb3NlU2xvdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVNsb3RcIik7XHJcbmNsb3NlU2xvdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxufSlcclxuICAgIFxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9