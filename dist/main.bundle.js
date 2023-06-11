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
            agility: 6,
            intelligence: 8,
            constitution: 4,
          };
        case "Priest":
          return {
            strength: 4,
            agility: 4,
            intelligence: 6,
            constitution: 8,
          };
        case "Warrior":
          return {
            strength: 8,
            agility: 4,
            intelligence: 4,
            constitution: 6,
          };
        case "Rogue":
          return {
            strength: 6,
            agility: 8,
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
	"./fireSymbol.png": "./src/images/elements/fireSymbol.png"
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

/***/ "./src/images/weapons sync \\.(png)$":
/*!********************************************************!*\
  !*** ./src/images/weapons/ sync nonrecursive \.(png)$ ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./CorrosionShortSword.png": "./src/images/weapons/CorrosionShortSword.png",
	"./MythrilShortsword-2.png": "./src/images/weapons/MythrilShortsword-2.png",
	"./RuneShortSword.png": "./src/images/weapons/RuneShortSword.png",
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
// Assuming the code for the Weapon class, HeroTypeWeaponList class, and weaponLists for each class is already defined.



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

// class HeroTypeWeaponList {
//     constructor(heroType, arrayOfWeapons) {
//         this._heroType = heroType;
//         this.arrayOfWeapons = arrayOfWeapons;
//     }
// }

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

// const rogueWeaponArray = new HeroTypeWeaponList("Rogue", rogueWeaponList);
// const warriorWeaponArray = new HeroTypeWeaponList("Warrior", warriorWeaponList);
// const priestWeaponArray = new HeroTypeWeaponList("Priest", priestWeaponList);
// const sorcererWeaponArray = new HeroTypeWeaponList("Sorcerer", sorcererWeaponList);



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

/***/ "./src/images/elements/fireSymbol.png":
/*!********************************************!*\
  !*** ./src/images/elements/fireSymbol.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/elements/fireSymbol.png";

/***/ }),

/***/ "./src/images/weapons/CorrosionShortSword.png":
/*!****************************************************!*\
  !*** ./src/images/weapons/CorrosionShortSword.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/CorrosionShortSword.png";

/***/ }),

/***/ "./src/images/weapons/MythrilShortsword-2.png":
/*!****************************************************!*\
  !*** ./src/images/weapons/MythrilShortsword-2.png ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/MythrilShortsword-2.png";

/***/ }),

/***/ "./src/images/weapons/RuneShortSword.png":
/*!***********************************************!*\
  !*** ./src/images/weapons/RuneShortSword.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/weapons/RuneShortSword.png";

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
/* harmony import */ var _imageHandler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imageHandler */ "./src/imageHandler.js");












const weaponImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_10__["default"])(
  __webpack_require__("./src/images/weapons sync \\.(png)$")
);

const armourImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_10__["default"])(
  __webpack_require__("./src/images/armour sync \\.(png)$")
);

const elementImages = (0,_imageHandler__WEBPACK_IMPORTED_MODULE_10__["default"])(
  __webpack_require__("./src/images/elements sync \\.(png)$")
);


console.log(weaponImages);

// Globally Scoped Variables
let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currentQuestList') || []; // Load from local storage
let currencyContainer = ((0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currencyContainer') || [new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("ChestKeys", 0)]); // Load from local storage
let playerInventory = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerInventory') || [];
let playerEquippedItems = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerEquippedItems') || [];



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

function openSlotMachine() {
    document.getElementById('slotMachineModal').style.display = 'block';
  }
  
  function closeSlotMachineModal() {
    document.getElementById('slotMachineModal').style.display = 'none';
  }

let heroSelection = ("Warrior");
let birthday = new Date("1996-09-17");
let birthday2 = new Date("1998-12-22");
let currentPlayerStats = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerStats("Warrior");
let currentPlayer = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerCharacter(null, heroSelection, playerEquippedItems, birthday);
getRandomSymbol(); 
// console.log(pullItemFromChest("Rogue", 0));

let symbolImage = `${weaponImages[Math.floor(Math.random() * weaponImages.length)]}`
console.log(symbolImage)
let testSource = document.getElementById('testImage');
console.log(testSource);
testSource.src = symbolImage;

function getRandomSymbol() {
    const symbols = ['symbol1', 'symbol2', 'symbol3']; // Add more symbols if desired
   
    let chosenSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    // console.log(chosenSymbol);
    // chosenSymbol.style.backgroundImage = symbolImage
    // // console.log(chosenSymbol);
    return chosenSymbol;
  }
  
  function spin() {
    const reels = document.getElementsByClassName('reel');
    for (let i = 0; i < reels.length; i++) {
      const symbols = reels[i].getElementsByClassName('symbol');
      symbols[i].classList.add('spin'); // Add the 'spin' class
      for (let j = 0; j < symbols.length; j++) {
          symbols[j].classList.add('spin'); // Add the 'spin' class
          symbols[j].className = 'symbol ' + getRandomSymbol();
          symbols[j].style.backgroundImage = `url('${weaponImages[Math.floor(Math.random() * weaponImages.length)]}')`

      }
    }

    setTimeout(() => {
      for (let i = 0; i < reels.length; i++) {
        symbols[i].classList.remove('spin'); // Remove the 'spin' class
      }
    }, 2000); // Adjust the duration as desired
  }

  

const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    openSlotMachine();
    let newItem = ((0,_shopFunction__WEBPACK_IMPORTED_MODULE_8__.generateRandomWeapon)(heroSelection));
    currentPlayer.equipItem(newItem);
    console.log(currentPlayer);
})

const spinSlot = document.querySelector("#spinSlotButton");
console.log(spinSlot);
spinSlot.addEventListener("click", function (){
    spin();
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", closeSlotMachineModal())
    


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN1RTtBQUNOO0FBQ2hCO0FBQ3BDO0FBQ1U7QUFDSztBQUN3QztBQUNzRTtBQUM5QjtBQUNyRjtBQUM3QztBQUNBLHFCQUFxQiwwREFBZTtBQUNwQyxFQUFFLDBEQUFzRDtBQUN4RDtBQUNBO0FBQ0EscUJBQXFCLDBEQUFlO0FBQ3BDLEVBQUUseURBQXFEO0FBQ3ZEO0FBQ0E7QUFDQSxzQkFBc0IsMERBQWU7QUFDckMsRUFBRSwyREFBdUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtFQUF1Qiw0QkFBNEI7QUFDMUUseUJBQXlCLCtFQUF1Qiw4QkFBOEIsaURBQVEscUJBQXFCLGlEQUFRLG9CQUFvQjtBQUN2SSxzQkFBc0IsK0VBQXVCO0FBQzdDLDBCQUEwQiwrRUFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0EseURBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBZ0I7QUFDcEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSx5REFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvREFBVztBQUN4Qyx3QkFBd0Isd0RBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhEQUE4RDtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0Esd0NBQXdDO0FBQ3hDLHNCQUFzQixvQkFBb0I7QUFDMUMsNENBQTRDO0FBQzVDO0FBQ0EscURBQXFELDhEQUE4RDtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4Qyw2Q0FBNkM7QUFDN0M7QUFDQSxLQUFLLFNBQVM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtRUFBb0I7QUFDdkM7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvd2VhcG9ucy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaXRlbVN0YXRzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvbW9kYWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9xdWVzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3BGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3dlYXBvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgem9kaWFjU2lnbnMgZnJvbSBcIi4vem9kaWFjUG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvQ29tcGxldGUgPSBkYXRlVG9Db21wbGV0ZTtcclxuICAgICAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFcXVpcG1lbnQge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBpc0VxdWlwcGVkLCBpblBsYXllckludmVudG9yeSwgaWQpIHtcclxuICAgICAgICB0aGlzLl9vYmplY3QgPSBvYmplY3Q7XHJcbiAgICAgICAgdGhpcy5faXNFcXVpcHBlZCA9IGlzRXF1aXBwZWQ7XHJcbiAgICAgICAgdGhpcy5faW5QbGF5ZXJJbnZlbnRvcnkgPSBpblBsYXllckludmVudG9yeTtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb247XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0cyA9IHt9O1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTdGF0KHN0YXROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgY29uc3QgZXF1aXBwZWRWYWx1ZSA9IHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgKyBlcXVpcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdW5lcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSAmJiB0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gLT0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpIHtcclxuICAgICAgc3dpdGNoIChoZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGFnaWxpdHk6IDYsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogOCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgYWdpbGl0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogOCxcclxuICAgICAgICAgICAgYWdpbGl0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGFnaWxpdHk6IDgsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyB0eXBlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV2ZWxVcCgpIHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgfHwgMTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzLmxldmVsID0gbGV2ZWwgKyAxO1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLl9za2lsbFBvaW50cyA+IDAgJiYgdGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc2tpbGxQb2ludHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2lsbFBvaW50cztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlSW1hZ2UsIGhlcm9UeXBlLCBlcXVpcHBlZEl0ZW1zLCBlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgICAgdGhpcy5fZWxlbWVudGFsU2VsZWN0aW9uID0gZWxlbWVudGFsU2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IHRoaXMuZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIGdldCBzcHJpdGVJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzcHJpdGVJbWFnZShzcHJpdGVJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlcm9UeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faGVyb1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlcm9UeXBlKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHN0YXRzKHN0YXRzKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGVxdWlwcGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlcXVpcHBlZEl0ZW1zKGVxdWlwcGVkSXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudGFsQWZmaW5pdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsQWZmaW5pdHkpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IGVsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWlwSXRlbShpdGVtKSB7XHJcbiAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3IgZXF1aXBwaW5nIGFuIGl0ZW1cclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMuZXF1aXBJdGVtU3RhdHMoaXRlbS5zdGF0cyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gYXR0YWNrIGxvZ2ljXHJcbiAgICAgICAgY29uc29sZS5sb2coYEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlY2lhbEF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIHNwZWNpYWwgYXR0YWNrIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhgU3BlY2lhbCBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQmlydGhkYXlJblJhbmdlKGJpcnRoZGF5LCBzdGFydERhdGUsIGVuZERhdGUpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBiaXJ0aGRheSB0byBhIERhdGUgb2JqZWN0IGlmIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURhdGUgPSB0eXBlb2YgYmlydGhkYXkgPT09ICdzdHJpbmcnID8gbmV3IERhdGUoYmlydGhkYXkpIDogYmlydGhkYXk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXlcclxuICAgICAgICBjb25zdCBiaXJ0aGRheU1vbnRoID0gYmlydGhkYXlEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXkgPSBiaXJ0aGRheURhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXkgZmFsbCB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF5ID0gc3RhcnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBlbmREYXkgPSBlbmREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYXByaWNvcm4gZWRnZSBjYXNlXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMTEgJiYgYmlydGhkYXlEYXkgPiAyMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMCAmJiBiaXJ0aGRheURheSA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSB0aGUgbW9udGggYW5kIGRheSB2YWx1ZXNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA+IHN0YXJ0TW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IHN0YXJ0TW9udGggJiYgYmlydGhkYXlEYXkgPj0gc3RhcnREYXkpKSAmJlxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPCBlbmRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gZW5kTW9udGggJiYgYmlydGhkYXlEYXkgPD0gZW5kRGF5KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIE90aGVyIG1ldGhvZHMgY2FuIGJlIGFkZGVkIGhlcmUgZm9yIGZ1cnRoZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBnZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgLy8gaWYgZWxlbWVudGFsIHNlbGVjdGlvbiBpcyBhIGJpcnRoZGF5IHByb3ZpZGVkOlxyXG4gICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICAvLyBBbGlhcyB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgem9kaWFjIFNpZ25zIGRhdGUgcmFuZ2UgcHJvcGVydHlcclxuICAgICAgICAgICAgbGV0IGRhdGVDaGVja2VyID0gKHpvZGlhY1NpZ25zW2luZGV4XS5jb252ZXJ0RGF0ZVJhbmdlKHpvZGlhY1NpZ25zW2luZGV4XS5fZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgICAgIGxldCBiaXJ0aERheVJhbmdlQ2hlY2sgPSB0aGlzLmlzQmlydGhkYXlJblJhbmdlKGVsZW1lbnRhbFNlbGVjdGlvbiwgZGF0ZUNoZWNrZXIuc3RhcnREYXRlLCBkYXRlQ2hlY2tlci5lbmREYXRlKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYmlydGhEYXlSYW5nZUNoZWNrID09ICdDYXByaWNvcm4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zWzldKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uID09IHpvZGlhY1NpZ25zW2luZGV4XS5fdW5pcXVlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gIH1cclxuICAgICAgXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVsZW1lbnRhbFBvd2VyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIiwiaW1wb3J0IEdHVG9rZW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIlxyXG5pbXBvcnQgQ2hlc3RLZXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCJcclxuXHJcblxyXG5jb25zdCB2YWxpZEN1cnJlbmNpZXMgPSBbXCJHR1Rva2Vuc1wiLCBcIkNoZXN0S2V5c1wiXVxyXG5jb25zdCBjdXJyZW5jeUltYWdlcyA9IHtcclxuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXHJcbiAgICBDaGVzdEtleXM6IENoZXN0S2V5SW1hZ2VcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmV3YXJkVXRpbGl0aWVzID0ge1xyXG5cclxuICAgIHZhbGlkQ3VycmVuY2llczogWy4uLnZhbGlkQ3VycmVuY2llc10sXHJcbiAgICBnZXRSZXdhcmRJbWFnZTogZnVuY3Rpb24ocXVlc3QpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkVHlwZSA9IHF1ZXN0LnJld2FyZC50eXBlO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHJld2FyZFR5cGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeUltYWdlc1tyZXdhcmRUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBvciBoYW5kbGUgaW52YWxpZCByZXdhcmQgdHlwZXNcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IChjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgY3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZX1Vc2VySW50ZXJmYWNlYCk7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZVRvQ29tcGxldGUgKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSAoKTtcclxuXHJcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0U2Vjb25kcyhzZWNvbmRzKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59IiwiaW1wb3J0IHsgcmVtb3ZlQ29tcGxldGVkUXVlc3QsIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlTWFuYWdlciAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIC8vIGxldCBwZXJzaXN0aW5nQ3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShgJHtjdXJyZW5jeUNvbnRhaW5lcn1gKVxyXG4gICAgLy8gbGV0IHBlcnNpc3RpbmdDdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoYCR7Y3VycmVudFF1ZXN0TGlzdH1gKVxyXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICByZW1vdmVDb21wbGV0ZWRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW5jeUNvbnRhaW5lclwiLCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyhjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPYmplY3RpdmUgKG9iamVjdGl2ZSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9maXJlU3ltYm9sLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9maXJlU3ltYm9sLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9NeXRocmlsU2hvcnRzd29yZC0yLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL015dGhyaWxTaG9ydHN3b3JkLTIucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vWmVwaHlyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvd2VhcG9ucyBzeW5jIFxcXFwuKHBuZykkXCI7IiwiZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzID0gW1xyXG4gICAgXCJTdGVlbFwiLFxyXG4gICAgXCJBYnlzc1wiLFxyXG4gICAgXCJaZXBoeXJcIixcclxuICAgIFwiTHVuYXJcIixcclxuICAgIFwiU29sYXJcIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJBZXRoZXJcIixcclxuICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgXCJJbmZlcm5vXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiVm9sdFwiLFxyXG4gICAgXCJNaXN0XCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVSYXJpdHkgPSBbXHJcbiAgICB7IHJhcml0eTogXCJub3JtYWxcIiwgY2hhbmNlOiA0MH0sXHJcbiAgICB7IHJhcml0eTogXCJ1bmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICB7IHJhcml0eTogXCJyYXJlXCIsIGNoYW5jZTogMTggfSxcclxuICAgIHsgcmFyaXR5OiBcImVwaWNcIiwgY2hhbmNlOiA5IH0sXHJcbiAgICB7IHJhcml0eTogXCJsZWdlbmRhcnlcIiwgY2hhbmNlOiAzIH0sXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3RhdHMgPSB7XHJcbiAgICBub3JtYWw6IHtcclxuICAgICAgZGFtYWdlOiB7IG1pbjogNSwgbWF4OiAxMCB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAsIG1heDogMjAgfSxcclxuICAgICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDA1LCBtYXg6IDAuMDIgfVxyXG4gICAgfSxcclxuICAgIHVuY29tbW9uOiB7XHJcbiAgICAgIGRhbWFnZTogeyBtaW46IDcuNSwgbWF4OiAxNSB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgICAgZGV4dGVyaXR5OiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgICAgY3JpdERhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAwNzUsIG1heDogMC4wMyB9XHJcbiAgICB9LFxyXG4gICAgcmFyZToge1xyXG4gICAgICBkYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgICBzdHJlbmd0aDogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgICAgZGV4dGVyaXR5OiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgICAgY3JpdERhbWFnZTogeyBtaW46IDMwLCBtYXg6IDYwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAxNSwgbWF4OiAwLjA2IH1cclxuICAgIH0sXHJcbiAgICBlcGljOiB7XHJcbiAgICAgIGRhbWFnZTogeyBtaW46IDI1LCBtYXg6IDUwIH0sXHJcbiAgICAgIHN0cmVuZ3RoOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICAgIGludGVsbGlnZW5jZTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgICAgY29uc3RpdHV0aW9uOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAyNSwgbWF4OiAwLjEgfVxyXG4gICAgfSxcclxuICAgIGxlZ2VuZGFyeToge1xyXG4gICAgICBkYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgICAgc3RyZW5ndGg6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBkZXh0ZXJpdHk6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBjb25zdGl0dXRpb246IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAwLCBtYXg6IDIwMCB9LFxyXG4gICAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wNSwgbWF4OiAwLjIgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVQcmVmaXggPSB7XHJcbiAgICBub3JtYWw6IFtcclxuICAgICAgXCJPcmRpbmFyeVwiLCBcIkNvbW1vblwiLCBcIlBsYWluXCIsIFwiUmVndWxhclwiLCBcIkJhc2ljXCJcclxuICAgIF0sXHJcbiAgICB1bmNvbW1vbjogW1xyXG4gICAgICBcIlVuY29tbW9uXCIsIFwiU3RyYW5nZVwiLCBcIlNwZWNpYWxcIiwgXCJEaXN0aW5jdGl2ZVwiLCBcIkFibm9ybWFsXCJcclxuICAgIF0sXHJcbiAgICByYXJlOiBbXHJcbiAgICAgIFwiUmFyZVwiLCBcIlByZWNpb3VzXCIsIFwiRXhxdWlzaXRlXCIsIFwiTWFnbmlmaWNlbnRcIiwgXCJFbGl0ZVwiXHJcbiAgICBdLFxyXG4gICAgZXBpYzogW1xyXG4gICAgICBcIkVwaWNcIiwgXCJHcmFuZFwiLCBcIklsbHVzdHJpb3VzXCIsIFwiVHJhbnNjZW5kZW50XCIsIFwiTWFqZXN0aWNcIlxyXG4gICAgXSxcclxuICAgIGxlZ2VuZGFyeTogW1xyXG4gICAgICBcIkxlZ2VuZGFyeVwiLCBcIlVsdGltYXRlXCIsIFwiRXRlcm5hbFwiLCBcIkludmluY2libGVcIiwgXCJHb2RsaWtlXCJcclxuICAgIF1cclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3VmZml4ID0ge1xyXG4gICAgU3RlZWw6IFwib2YgV2FyXCIsXHJcbiAgICBBYnlzczogXCJvZiBXYWlsaW5nXCIsXHJcbiAgICBaZXBoeXI6IFwib2YgSG93bGluZ1wiLFxyXG4gICAgTHVuYXI6IFwib2YgTW9vbmxpZ2h0XCIsXHJcbiAgICBTb2xhcjogXCJvZiBTdW5saWdodFwiLFxyXG4gICAgVGVycmE6IFwib2YgVGVjdG9uaWNcIixcclxuICAgIEFldGhlcjogXCJvZiBHcmF2aXR5XCIsXHJcbiAgICBDb3Jyb2RlOiBcIm9mIFBvaXNvblwiLFxyXG4gICAgSW5mZXJubzogXCJvZiBCdXJuaW5nXCIsXHJcbiAgICBHYWlhOiBcIm9mIE5hdHVyZVwiLFxyXG4gICAgVm9sdDogXCJvZiBTaG9ja2luZ1wiLFxyXG4gICAgTWlzdDogXCJvZiBGcmVlemluZ1wiXHJcbiAgfTsiLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1PYmplY3RpdmVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5QW1vdW50XCIpLnZhbHVlO1xyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4IGluIGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke1txdWVzdEluZGV4XX1gKTtcclxuXHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApXHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgQ29tcGxldGUgQ2hlY2tib3ggTmVzdGVkIGluIFF1ZXN0IE9iamVjdGl2ZSBDb250ZW50IERpdiBcclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwuaHRtbEZvciA9IGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUxhYmVsKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XSkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLmFtb3VudH0gJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC50eXBlfWApO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gQXNzdW1pbmcgdGhlIGNvZGUgZm9yIHRoZSBXZWFwb24gY2xhc3MsIEhlcm9UeXBlV2VhcG9uTGlzdCBjbGFzcywgYW5kIHdlYXBvbkxpc3RzIGZvciBlYWNoIGNsYXNzIGlzIGFscmVhZHkgZGVmaW5lZC5cclxuaW1wb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0IH0gZnJvbSBcIi4vd2VhcG9uTGlzdC5qc1wiXHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gXCIuL2l0ZW1TdGF0cy5qc1wiO1xyXG5cclxuY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGVsZW1lbnQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcykge1xyXG4gICAgICAgIHN3aXRjaCAocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcm9ndWVXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcHJpZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB3YXJyaW9yV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc29yY2VyZXJXZWFwb25MaXN0O1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYXllciBjbGFzcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYXBvbkxpc3QgPSBnZXRXZWFwb25MaXN0KHBsYXllckNsYXNzKTtcclxuICBcclxuICAgIGlmICh3ZWFwb25MaXN0KSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XS5fdHlwZTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSBvZiBhbiBpbnZhbGlkIHBsYXllciBjbGFzc1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byByZXRyaWV2ZSB3ZWFwb24gbGlzdC5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmFyaXR5IChpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRvdGFsIGNoYW5jZSB0byAwXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgY2hhbmNlIHZhbHVlcyBvZiBhbGwgcmFyaXR5IG9iamVjdCBjaGFuY2VzXHJcbiAgICAvLyBUaGlzIHNob3VsZCBhZGQgdXAgdG8gMTAwXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgdG90YWxDaGFuY2UgKz0gcmFyaXR5T2JqZWN0LmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSB3aG9sZSBpbnRlZ2VyIGJldHdlZW4gMCAtIDEwMFxyXG4gICAgbGV0IHJhbmRvbUNoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlKTtcclxuXHJcbiAgICAvLyBTZXQgcmFyaXR5IHZhbHVlIHRvIG51bGxcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIC8vIFJldHVybiB0aGUgcmFyaXR5IGJhc2VkIG9uIHlvdXIgcmFuZG9tQ2hhbmNlIHJvbGwuIFxyXG4gICAgLy8gRm9yIGV4YW1wbGUgaWYgUmFuZG9tIENoYW5jZSB3YXMgOTQ6XHJcbiAgICAvLyA5NCAtIDQwIChOb3JtYWwgUmFyaXR5KSA9IDU0IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDU0IC0gMzAgKFVuY29tbW9uIFJhcml0eSkgPSAyNCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyAyNCAtIDE1IChSYXJlIFJhcml0eSkgPSA5IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDkgLSAxMCAoRXBpYyBSYXJpdHkpID0gLTEgPC0tIFRoZXJlZm9yZSByYXJpdHkgb2YgaXRlbSBpcyBFcGljIGFzICg5IC0gMTApIDwgKDApXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICAgICAgLy8gVGhlIHZhbHVlIGlzICgtMC4wMSB0byBhY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycylcclxuICAgICAgICBpZiAocmFuZG9tQ2hhbmNlIDw9IC0wLjAxKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eU9iamVjdC5yYXJpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiByYXJpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0YXRzKGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUmFyaXR5KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICAgICAgfVxyXG5cclxuICAgIC8vIFVzaW5nIHRoZSBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB0byBhY2Nlc3MgdGhlIHByb3BlcnR5IGF0IHJ1bnRpbWVcclxuICAgIGNvbnN0IHJhcml0eVN0YXRzID0gaXRlbVBvc3NpYmxlU3RhdHNbaXRlbVJhcml0eV07XHJcbiAgICBjb25zdCBpdGVtU3RhdHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0YXQgaW4gcmFyaXR5U3RhdHMpIHtcclxuICAgICAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSByYXJpdHlTdGF0c1tzdGF0XTtcclxuICAgIGl0ZW1TdGF0c1tzdGF0XSA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXRzO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1SYXJpdHkpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XS5sZW5ndGgpXHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldW3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cykge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlRWxlbWVudHMubGVuZ3RoKTtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVFbGVtZW50c1tyYW5kb21JbmRleF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlU3VmZml4W2VsZW1lbnRdO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdlYXBvbiAocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBsZXQgd2VhcG9uVHlwZSA9IGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKTtcclxuICAgIGxldCB3ZWFwb25FbGVtZW50ID0gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpO1xyXG4gICAgbGV0IHdlYXBvblJhcml0eSA9IGdldEl0ZW1SYXJpdHkoaXRlbVBvc3NpYmxlUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdGF0cyA9IGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25QcmVmaXggPSBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdWZmaXggPSBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgd2VhcG9uRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBXZWFwb24oXHJcbiAgICAgICAgKHdlYXBvblByZWZpeCArIFwiIFwiICsgd2VhcG9uVHlwZSArIFwiIFwiICsgd2VhcG9uU3VmZml4KSwgXHJcbiAgICAgICAgd2VhcG9uVHlwZSxcclxuICAgICAgICBwbGF5ZXJDbGFzcyxcclxuICAgICAgICB3ZWFwb25SYXJpdHksXHJcbiAgICAgICAgd2VhcG9uU3RhdHMsXHJcbiAgICAgICAgd2VhcG9uRWxlbWVudCxcclxuICAgICAgICBudWxsLFxyXG4gICAgKVxyXG5cclxuIFxyXG59XHJcbi8vIFNpbXVsYXRpbmcgYW4gaXRlbSBiZWluZyBwdWxsZWQgZnJvbSBhIGNoZXN0IGJhc2VkIG9uIHBsYXllcidzIGNsYXNzIGFuZCByYXJpdHkgcHJvYmFiaWxpdGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcHVsbEl0ZW1Gcm9tQ2hlc3QocGxheWVyQ2xhc3MsIHBpdHkpIHtcclxuICAgXHJcblxyXG4gICAgLy8gQ29uc2lkZXIgY29uc3RhbnQgcmFyaXR5IG9iamVjdCBmb3Igc2NhbGluZyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgcmFyaXR5UHJvYmFiaWxpdGllcyA9IFtcclxuICAgICAgICB7IHJhcml0eTogXCJOb3JtYWxcIiwgY2hhbmNlOiA0MCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJSYXJlXCIsIGNoYW5jZTogMTUgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJFcGljXCIsIGNoYW5jZTogMTAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJMZWdlbmRhcnlcIiwgY2hhbmNlOiA1IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2U7XHJcbiAgICBjb25zb2xlLmxvZyhyYW5kb21DaGFuY2UpO1xyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eURhdGEucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICBjb25zdCByYW5kb21XZWFwb24gPSB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAvLyBBc3NpZ24gcmFuZG9tIHByb3BlcnRpZXMgdG8gdGhlIHdlYXBvblxyXG4gICAgcmFuZG9tV2VhcG9uLl9uYW1lID0gXCJEaXZpbmUgU3RhZmZcIjsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG4gICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSByYXJpdHk7IC8vIEFzc2lnbmluZyB0aGUgZGV0ZXJtaW5lZCByYXJpdHlcclxuXHJcbiAgICAvLyBJZiB0aGUgcHVsbGVkIGl0ZW0gaXMgbGVnZW5kYXJ5LCByZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICBpZiAocmFyaXR5ID09PSBcIkxlZ2VuZGFyeVwiKSB7XHJcbiAgICAgICAgcGl0eSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBpdHkrKzsgLy8gSW5jcmVtZW50IHRoZSBwaXR5IGNvdW50ZXIgaWYgYSBsZWdlbmRhcnkgaXRlbSB3YXMgbm90IHB1bGxlZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEd1YXJhbnRlZSBhIGxlZ2VuZGFyeSBpdGVtIGlmIHRoZSBwaXR5IGNvdW50ZXIgcmVhY2hlcyAxMDBcclxuICAgIGlmIChwaXR5ID49IDEwMCkge1xyXG4gICAgICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gXCJMZWdlbmRhcnlcIjtcclxuICAgICAgICBwaXR5ID0gMDsgLy8gUmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVdlYXBvbi5fc3RhdHMgPSB7XHJcbiAgICAgICAgYXR0YWNrOiAxNTAsXHJcbiAgICAgICAgaW50ZWxsZWN0OiA1MCxcclxuICAgICAgICBzdGFtaW5hOiA4MCxcclxuICAgIH07IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuXHJcbiAgICByZXR1cm4geyBpdGVtOiByYW5kb21XZWFwb24sIHBpdHkgfTtcclxufVxyXG4iLCJjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyBIZXJvVHlwZVdlYXBvbkxpc3Qge1xyXG4vLyAgICAgY29uc3RydWN0b3IoaGVyb1R5cGUsIGFycmF5T2ZXZWFwb25zKSB7XHJcbi8vICAgICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuLy8gICAgICAgICB0aGlzLmFycmF5T2ZXZWFwb25zID0gYXJyYXlPZldlYXBvbnM7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmNvbnN0IHJvZ3VlV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJEYWdnZXJcIiwgXCJEYWdnZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsIEJsYWRlc1wiLCBcIkR1YWwgQmxhZGVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQm93XCIsIFwiQm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2xhdyBXZWFwb25zXCIsIFwiQ2xhdyBXZWFwb25zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3Jvc3Nib3dcIiwgXCJDcm9zc2Jvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJhcGllclwiLCBcIlJhcGllclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJsb3dndW5cIiwgXCJCbG93Z3VuXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2hha3JhbXNcIiwgXCJDaGFrcmFtc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhcnJvdGVcIiwgXCJHYXJyb3RlXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHdhcnJpb3JXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0c3dvcmRcIiwgXCJHcmVhdHN3b3JkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyaGFtbWVyXCIsIFwiV2FyaGFtbWVyXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQb2xlYXJtXCIsIFwiUG9sZWFybVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXhlXCIsIFwiQXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlXCIsIFwiTWFjZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdGF4ZVwiLCBcIkdyZWF0YXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJGbGFpbFwiLCBcIkZsYWlsXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FyIEdhdW50bGV0c1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHByaWVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBXYW5kXCIsIFwiSG9seSBXYW5kXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRvbWVcIiwgXCJUb21lXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgSGFtbWVyXCIsIFwiSG9seSBIYW1tZXJcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQW5raFwiLCBcIkFua2hcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBCb3dcIiwgXCJIb2x5IEJvd1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlNhY3JlZCBDaGFsaWNlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlByYXllciBCZWFkc1wiLCBcIlByYXllciBCZWFkc1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFNjeXRoZVwiLCBcIkhvbHkgU2N5dGhlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBzb3JjZXJlcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNwZWxsYm9va1wiLCBcIlNwZWxsYm9va1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVsZW1lbnRhbCBXYW5kXCIsIFwiRWxlbWVudGFsIFdhbmRcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcnlzdGFsIE9yYlwiLCBcIkNyeXN0YWwgT3JiXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZWJsYWRlXCIsIFwiUnVuZWJsYWRlXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbmNoYW50ZWQgQm93XCIsIFwiRW5jaGFudGVkIEJvd1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNjZXB0ZXJcIiwgXCJTY2VwdGVyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIERhZ2dlclwiLCBcIkFyY2FuZSBEYWdnZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmF2aXRvbiBTdGFmZlwiLCBcIkdyYXZpdG9uIFN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbi8vIGNvbnN0IHJvZ3VlV2VhcG9uQXJyYXkgPSBuZXcgSGVyb1R5cGVXZWFwb25MaXN0KFwiUm9ndWVcIiwgcm9ndWVXZWFwb25MaXN0KTtcclxuLy8gY29uc3Qgd2FycmlvcldlYXBvbkFycmF5ID0gbmV3IEhlcm9UeXBlV2VhcG9uTGlzdChcIldhcnJpb3JcIiwgd2FycmlvcldlYXBvbkxpc3QpO1xyXG4vLyBjb25zdCBwcmllc3RXZWFwb25BcnJheSA9IG5ldyBIZXJvVHlwZVdlYXBvbkxpc3QoXCJQcmllc3RcIiwgcHJpZXN0V2VhcG9uTGlzdCk7XHJcbi8vIGNvbnN0IHNvcmNlcmVyV2VhcG9uQXJyYXkgPSBuZXcgSGVyb1R5cGVXZWFwb25MaXN0KFwiU29yY2VyZXJcIiwgc29yY2VyZXJXZWFwb25MaXN0KTtcclxuXHJcbmV4cG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCB9OyIsImNsYXNzIFpvZGlhY1NpZ24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydERhdGVSYW5nZShkYXRlUmFuZ2UpIHtcclxuICAgICAgLy8gU3BsaXQgdGhlIGRhdGUgcmFuZ2Ugc3RyaW5nIGludG8gc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gICAgICBjb25zdCBbc3RhcnRTdHIsIGVuZFN0cl0gPSBkYXRlUmFuZ2Uuc3BsaXQoJyAtICcpO1xyXG4gICAgXHJcbiAgICAgIC8vIFBhcnNlIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHVzaW5nIHRoZSBEYXRlIGNvbnN0cnVjdG9yXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0U3RyKTtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZFN0cik7XHJcbiAgICBcclxuICAgICAgLy8gQWRqdXN0IHRoZSB5ZWFyIG9mIHRoZSBlbmQgZGF0ZSBpZiBuZWNlc3NhcnlcclxuICAgICAgaWYgKGVuZERhdGUgPCBzdGFydERhdGUpIHtcclxuICAgICAgICBlbmREYXRlLnNldEZ1bGxZZWFyKHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgYW4gb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IHpvZGlhY1NpZ25zID0gW1xyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXJpZXNcIixcclxuICAgICAgXCJNYXJjaCAyMSAtIEFwcmlsIDE5XCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlN0ZWVsXCIsXHJcbiAgICAgIFwiQXJlcywgdGhlIEdvZCBvZiBXYXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVGF1cnVzXCIsXHJcbiAgICAgIFwiQXByaWwgMjAgLSBNYXkgMjBcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkFieXNzXCIsXHJcbiAgICAgIFwiSGFkZXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiR2VtaW5pXCIsXHJcbiAgICAgIFwiTWF5IDIxIC0gSnVuZSAyMFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlplcGh5clwiLFxyXG4gICAgICBcIkl6YW5hbWkvSXphbmFnaSwgdGhlIEdvZHMvR29kZGVzc2VzIG9mIENyZWF0aW9uIGFuZCBEZWF0aCAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYW5jZXJcIixcclxuICAgICAgXCJKdW5lIDIxIC0gSnVseSAyMlwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTHVuYXJcIixcclxuICAgICAgXCJUc3VrdXlvbWksIHRoZSBHb2Qgb2YgdGhlIE1vb24gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGVvXCIsXHJcbiAgICAgIFwiSnVseSAyMyAtIEF1Z3VzdCAyMlwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTb2xhclwiLFxyXG4gICAgICBcIlJhLCB0aGUgR29kIG9mIHRoZSBTdW4gKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVmlyZ29cIixcclxuICAgICAgXCJBdWd1c3QgMjMgLSBTZXB0ZW1iZXIgMjJcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIlRlcnJhXCIsXHJcbiAgICAgIFwiT3NpcmlzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxpYnJhXCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIkFldGhlclwiLFxyXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2NvcnBpb1wiLFxyXG4gICAgICBcIk9jdG9iZXIgMjMgLSBOb3ZlbWJlciAyMVwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgICBcIlBvc2VpZG9uLCB0aGUgR29kIG9mIHRoZSBTZWEgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2FnaXR0YXJpdXNcIixcclxuICAgICAgXCJOb3ZlbWJlciAyMiAtIERlY2VtYmVyIDIxXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIkluZmVybm9cIixcclxuICAgICAgXCJBbWF0ZXJhc3UsIHRoZSBHb2RkZXNzIG9mIHRoZSBTdW4gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2Fwcmljb3JuXCIsXHJcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJHYWlhXCIsXHJcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXF1YXJpdXNcIixcclxuICAgICAgXCJKYW51YXJ5IDIwIC0gRmVicnVhcnkgMThcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJWb2x0XCIsXHJcbiAgICAgIFwiWmV1cywgdGhlIEdvZCBvZiBUaHVuZGVyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlBpc2Nlc1wiLFxyXG4gICAgICBcIkZlYnJ1YXJ5IDE5IC0gTWFyY2ggMjBcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIk1pc3RcIixcclxuICAgICAgXCJTdXNhbm9vLCB0aGUgR29kIG9mIHRoZSBTZWEgYW5kIFN0b3JtcyAoSmFwYW5lc2UpXCJcclxuICAgIClcclxuICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5LCBXZWFwb24sIEFybW91ciwgUGxheWVyQ2hhcmFjdGVyLCBQbGF5ZXJTdGF0cyB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0TmV3UXVlc3QsIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzLCBhZGRRdWVzdH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XHJcbmltcG9ydCBnZXRPYmplY3RpdmUgZnJvbSBcIi4vZ2V0T2JqZWN0aXZlLmpzXCI7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBwdWxsSXRlbUZyb21DaGVzdCwgZ2V0SXRlbVJhcml0eSwgZ2V0SXRlbVN0YXRzLCBnZXRJdGVtVHlwZSwgZ2V0SXRlbUVsZW1lbnQsIGdldEl0ZW1QcmVmaXgsIGdldEl0ZW1TdWZmaXgsIGdlbmVyYXRlUmFuZG9tV2VhcG9ufSBmcm9tICcuL3Nob3BGdW5jdGlvbic7XHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gJy4vaXRlbVN0YXRzJztcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tICcuL2ltYWdlSGFuZGxlcic7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuXHJcbmNvbnNvbGUubG9nKHdlYXBvbkltYWdlcyk7XHJcblxyXG4vLyBHbG9iYWxseSBTY29wZWQgVmFyaWFibGVzXHJcbmxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTsgLy8gTG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcclxubGV0IGN1cnJlbmN5Q29udGFpbmVyID0gKGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW5jeUNvbnRhaW5lcicpIHx8IFtuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiQ2hlc3RLZXlzXCIsIDApXSk7IC8vIExvYWQgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbmxldCBwbGF5ZXJJbnZlbnRvcnkgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVySW52ZW50b3J5JykgfHwgW107XHJcbmxldCBwbGF5ZXJFcXVpcHBlZEl0ZW1zID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckVxdWlwcGVkSXRlbXMnKSB8fCBbXTtcclxuXHJcblxyXG5cclxudXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gT3BlbiBRdWVzdCBDcmVhdGlvbiBNb2RhbFxyXG5sZXQgYWRkUXVlc3RCdXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNhZGRRdWVzdEJ1dHRvblwiKVxyXG5hZGRRdWVzdEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRpc3BsYXlGb3JtTW9kYWwoKTtcclxufSlcclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lciB0byBBZGQgUXVlc3QgdG8gUXVlc3QgTGlzdCBhbmQgRGlzcGxheVxyXG5sZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcclxuZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNsb3NlRm9ybU1vZGFsKGUpO1xyXG4gICAgbGV0IG5ld2x5R2VuZXJhdGVkUXVlc3QgPSBnZXROZXdRdWVzdCgpO1xyXG4gICAgYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgbmV3bHlHZW5lcmF0ZWRRdWVzdCk7XHJcbiAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBvcGVuU2xvdE1hY2hpbmUoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxubGV0IGhlcm9TZWxlY3Rpb24gPSAoXCJXYXJyaW9yXCIpO1xyXG5sZXQgYmlydGhkYXkgPSBuZXcgRGF0ZShcIjE5OTYtMDktMTdcIik7XHJcbmxldCBiaXJ0aGRheTIgPSBuZXcgRGF0ZShcIjE5OTgtMTItMjJcIik7XHJcbmxldCBjdXJyZW50UGxheWVyU3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoXCJXYXJyaW9yXCIpO1xyXG5sZXQgY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIobnVsbCwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgYmlydGhkYXkpO1xyXG5nZXRSYW5kb21TeW1ib2woKTsgXHJcbi8vIGNvbnNvbGUubG9nKHB1bGxJdGVtRnJvbUNoZXN0KFwiUm9ndWVcIiwgMCkpO1xyXG5cclxubGV0IHN5bWJvbEltYWdlID0gYCR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX1gXHJcbmNvbnNvbGUubG9nKHN5bWJvbEltYWdlKVxyXG5sZXQgdGVzdFNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXN0SW1hZ2UnKTtcclxuY29uc29sZS5sb2codGVzdFNvdXJjZSk7XHJcbnRlc3RTb3VyY2Uuc3JjID0gc3ltYm9sSW1hZ2U7XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21TeW1ib2woKSB7XHJcbiAgICBjb25zdCBzeW1ib2xzID0gWydzeW1ib2wxJywgJ3N5bWJvbDInLCAnc3ltYm9sMyddOyAvLyBBZGQgbW9yZSBzeW1ib2xzIGlmIGRlc2lyZWRcclxuICAgXHJcbiAgICBsZXQgY2hvc2VuU3ltYm9sID0gc3ltYm9sc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzeW1ib2xzLmxlbmd0aCldO1xyXG4gICAgLy8gY29uc29sZS5sb2coY2hvc2VuU3ltYm9sKTtcclxuICAgIC8vIGNob3NlblN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzeW1ib2xJbWFnZVxyXG4gICAgLy8gLy8gY29uc29sZS5sb2coY2hvc2VuU3ltYm9sKTtcclxuICAgIHJldHVybiBjaG9zZW5TeW1ib2w7XHJcbiAgfVxyXG4gIFxyXG4gIGZ1bmN0aW9uIHNwaW4oKSB7XHJcbiAgICBjb25zdCByZWVscyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3JlZWwnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qgc3ltYm9scyA9IHJlZWxzW2ldLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N5bWJvbCcpO1xyXG4gICAgICBzeW1ib2xzW2ldLmNsYXNzTGlzdC5hZGQoJ3NwaW4nKTsgLy8gQWRkIHRoZSAnc3BpbicgY2xhc3NcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzeW1ib2xzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBzeW1ib2xzW2pdLmNsYXNzTGlzdC5hZGQoJ3NwaW4nKTsgLy8gQWRkIHRoZSAnc3BpbicgY2xhc3NcclxuICAgICAgICAgIHN5bWJvbHNbal0uY2xhc3NOYW1lID0gJ3N5bWJvbCAnICsgZ2V0UmFuZG9tU3ltYm9sKCk7XHJcbiAgICAgICAgICBzeW1ib2xzW2pdLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN5bWJvbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc3BpbicpOyAvLyBSZW1vdmUgdGhlICdzcGluJyBjbGFzc1xyXG4gICAgICB9XHJcbiAgICB9LCAyMDAwKTsgLy8gQWRqdXN0IHRoZSBkdXJhdGlvbiBhcyBkZXNpcmVkXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbmNvbnN0IHdlYXBvblJvbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXBvbkdlbmVyYXRvclwiKTtcclxud2VhcG9uUm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgb3BlblNsb3RNYWNoaW5lKCk7XHJcbiAgICBsZXQgbmV3SXRlbSA9IChnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKSk7XHJcbiAgICBjdXJyZW50UGxheWVyLmVxdWlwSXRlbShuZXdJdGVtKTtcclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpO1xyXG59KVxyXG5cclxuY29uc3Qgc3BpblNsb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwaW5TbG90QnV0dG9uXCIpO1xyXG5jb25zb2xlLmxvZyhzcGluU2xvdCk7XHJcbnNwaW5TbG90LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKXtcclxuICAgIHNwaW4oKTtcclxufSk7XHJcblxyXG5jb25zdCBjbG9zZVNsb3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VTbG90XCIpO1xyXG5jbG9zZVNsb3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VTbG90TWFjaGluZU1vZGFsKCkpXHJcbiAgICBcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==