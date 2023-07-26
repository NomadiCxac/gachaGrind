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

/***/ "./src/classes/classes.js":
/*!********************************!*\
  !*** ./src/classes/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Armour: () => (/* binding */ Armour),
/* harmony export */   Currency: () => (/* binding */ Currency),
/* harmony export */   ElementalPower: () => (/* binding */ ElementalPower),
/* harmony export */   Goal: () => (/* binding */ Goal),
/* harmony export */   PlayerCharacter: () => (/* binding */ PlayerCharacter),
/* harmony export */   PlayerStats: () => (/* binding */ PlayerStats),
/* harmony export */   Quest: () => (/* binding */ Quest),
/* harmony export */   Weapon: () => (/* binding */ Weapon)
/* harmony export */ });
/* harmony import */ var _questFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../questFunctions */ "./src/questFunctions.js");
/* harmony import */ var _zodiacPowers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../zodiacPowers */ "./src/zodiacPowers.js");



class Quest {
  constructor(objective, dateToComplete, questComplete, reward, id, oneOffBool, goalId, timeSpent) {
    this.objective = objective;
    this.dateToComplete = dateToComplete;
    this.questComplete = questComplete;
    this.reward = reward;
    this.id = id;
    this.oneOffBool = oneOffBool;
    this.goalId = goalId;
    this.timeSpent = timeSpent
  }
}

class Goal {
  constructor(objective, reward) {
    this.objective = objective;
    this.reward = reward;
    this.quests = [];
    this.completed = false;
    this.totalTimeRequired = null;
    this.totalTimeSpent = 0;
    this.timesPerWeekRequired = null;
    this.timesPerWeekSpent = 0;
    this.startDate = null;
    this.endDate = null;
  }

  generateQuest(timesPerWeekRequired, totalTimeRequired) {

    let quest = new Quest("Go to Gym", null, false, new Currency("GGTokens", 18), null, null, null, null)
    this.quests.push(quest);
    // Case 1: Frequency type is time-arbitrary
     if (totalTimeRequired == 0 || totalTimeRequired == null) {
        const remainingTime = timesPerWeekRequired - this.timesPerWeekSpent;
        return {quest, timesPerWeekRequired, remainingTime};
     }


    // Case 2: Frequency type is time-specific
    else {
      const remainingTime = totalTimeRequired - this.totalTimeSpent;
      return {quest, totalTimeRequired, remainingTime};
    }

    
  }

  linkQuestToGoal(quest) {
    if (this.quests.length <= 0) {
      return;
    }
    console.log(quests);
    this.quests.push(quest);
    this.totalTimeSpent += quest.questComplete ? quest.duration : 0;
  }
 
  isGoalComplete() {
    return this.totalTimeSpent >= this.timeRequired;
  }
}

function generateUniqueId() {
  // Generate a unique ID for the quest
  // You can use a library or a custom implementation to generate unique IDs
}

class Currency {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
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
          for (let index in _zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            // Alias the start and end dates of the zodiac Signs date range property
            let dateChecker = (_zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][index].convertDateRange(_zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][index]._dateRange));
            let birthDayRangeCheck = this.isBirthdayInRange(elementalSelection, dateChecker.startDate, dateChecker.endDate)

              if (birthDayRangeCheck == 'Capricorn') {
                return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][9]);
              } else if (birthDayRangeCheck) {
                return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][index]);
              }  
          }
        } else {
          for (let index in _zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"]) {
            if (elementalSelection == _zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][index]._uniqueElement) {
              return (_zodiacPowers__WEBPACK_IMPORTED_MODULE_1__["default"][index]);
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

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   currencyContainer: () => (/* binding */ currencyContainer),
/* harmony export */   currentGoalList: () => (/* binding */ currentGoalList),
/* harmony export */   currentQuestList: () => (/* binding */ currentQuestList),
/* harmony export */   playerEquippedItems: () => (/* binding */ playerEquippedItems),
/* harmony export */   playerInventory: () => (/* binding */ playerInventory)
/* harmony export */ });
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/classes */ "./src/classes/classes.js");



let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currentQuestList') || [];
let currentGoalList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currentGoalList') || [];
let currencyContainer = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currencyContainer') || [new _classes_classes__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_classes__WEBPACK_IMPORTED_MODULE_1__.Currency("ChestKeys", 0)];
let playerInventory = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('playerInventory') || [];
let playerEquippedItems = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('playerEquippedItems') || [];

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
/* harmony import */ var _indexViewFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indexViewFunctions */ "./src/indexViewFunctions.js");




// import { currentGoalList, currentQuestList } from "./data";

function userInterfaceManager (currentQuestList, currencyContainer, currentGoalList) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    (0,_currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);

    if (currentQuestList.length > 0) {
        (0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_3__.removeEmptyQuestState)();
        (0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_3__.createQuestParallax)();
        (0,_questFunctions__WEBPACK_IMPORTED_MODULE_0__.renderQuestList)(currentQuestList, currencyContainer);
        let questParallax = document.querySelector(".questParallax")
        questParallax.appendChild((0,_questFunctions__WEBPACK_IMPORTED_MODULE_0__.createGhostCard)());
    }
    
}




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

/***/ "./src/indexViewFunctions.js":
/*!***********************************!*\
  !*** ./src/indexViewFunctions.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGoalParallax: () => (/* binding */ createGoalParallax),
/* harmony export */   createQuestParallax: () => (/* binding */ createQuestParallax),
/* harmony export */   removeEmptyGoalState: () => (/* binding */ removeEmptyGoalState),
/* harmony export */   removeEmptyQuestState: () => (/* binding */ removeEmptyQuestState),
/* harmony export */   showEmptyGoalsState: () => (/* binding */ showEmptyGoalsState),
/* harmony export */   showEmptyQuestsState: () => (/* binding */ showEmptyQuestsState)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _questFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./questFunctions */ "./src/questFunctions.js");




let header = document.querySelector(".gameContentHeader");


function showEmptyQuestsState () {

        let emptyStateContainer = document.createElement('div');
        
        let questContainer = document.querySelector(".questContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyQuestContainer");
        questContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Create a Quest to get started and check them here:"
        let questButton = document.createElement("button");
        questButton.classList.add("addQuestButton")
        questButton.textContent = "Add Quest +"
        questButton.addEventListener("click", function() {
          
              if (!removeEmptyState()) {
                  console.log("Emptystate Removed");
                  removeEmptyState();
              }
              
              if (!createQuestParallax()) {
                  console.log("QuestParallax created");
                  createQuestParallax();
              }

              (0,_questFunctions__WEBPACK_IMPORTED_MODULE_1__.renderQuestList)(_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList, _data__WEBPACK_IMPORTED_MODULE_0__.currencyContainer);
              
              let x = document.querySelector(".questParallax");
              x.appendChild((0,_questFunctions__WEBPACK_IMPORTED_MODULE_1__.createEmptyCardTemplate)());
              x.appendChild((0,_questFunctions__WEBPACK_IMPORTED_MODULE_1__.createGhostCard)());
              console.log(_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList);
        })
        emptyStateContainer.appendChild(questButton);

        return;
    
    }


   function showEmptyGoalsState () {

    
        let emptyStateContainer = document.createElement('div');
        console.log(emptyStateContainer);
        
        let goalContainer = document.querySelector(".goalContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyGoalContainer");
        goalContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Set Goals and track your progress here:"
        let goalButton = document.createElement("button");
        goalButton.classList.add("addGoalButton")
        goalButton.textContent = "Add Goal +"
        emptyStateContainer.appendChild(goalButton);
    
        return;
  }



function removeEmptyQuestState () {

  const emptyQuestList = document.querySelector(".emptyStateContainer#emptyQuestContainer")
        if (emptyQuestList) {
                    emptyQuestList.remove();
                } else {
                  return;
                }
}

function removeEmptyGoalState () {

  const emptyGoalList = document.querySelector(".emptyStateContainer#emptyGoalContainer")
        if (emptyGoalList) {
            emptyGoalList.remove();
        } else {
          return;
        }

}


function createQuestParallax() {

  let questParallax = document.querySelector(".questParallax");

  // Check if the element already exists
  if (questParallax) {
      return false; // Return false to indicate that the element already exists
  }

  let questContainer = document.querySelector(".questContainer");
  questParallax = document.createElement("div");
  questParallax.classList.add("questParallax");
  questContainer.appendChild(questParallax);

  return true; // Return true to indicate that the element was created
}

let goalParallax;

function createGoalParallax() {

  if (!goalParallax) {
    let goalContainer = document.querySelector(".goalContainer");
    goalParallax = document.createElement("div");
    goalParallax.classList.add("goalParallax");
    goalContainer.appendChild(goalParallax);

  }
  goalParallax.textContent = "";
}



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
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");
/* harmony import */ var _modalElements_itemCardModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modalElements/itemCardModal */ "./src/modalElements/itemCardModal.js");




const inventoryPageParent = document.querySelector(".gameContent");
const inventoryPage = document.createElement("div");
inventoryPage.classList.add("inventoryPage")

const rarityColors = {
    normal: "rgb(211, 211, 211, 0.8)",
    uncommon: "rgb(0, 128, 0, 0.8)",
    rare: "rgb(30, 30, 255, 0.8)",
    epic: "rgb(160, 32, 240, 0.8)",
    legendary: "rgb(255, 165, 0.8)",
    };  

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
                        (0,_modalElements_itemCardModal__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, inventory[item]);
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
        let itemSprite = document.createElement("div");
        itemSprite.classList.add("inventoryItemSprite");
        itemContainer.appendChild(itemSprite);
        let itemImage = (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_0__.getWeaponImage)(inventory[item]._type.replace(/\s/g, ''));
        console.log(itemImage)
        itemSprite.style.backgroundImage = `url('${itemImage}')`
        itemSprite.style.backgroundColor = rarityColors[inventory[item]._rarity];
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
    try {
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error(`Error parsing JSON data from localStorage for key '${key}':`, error);
      return null;
    }
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

/***/ "./src/questFunctions.js":
/*!*******************************!*\
  !*** ./src/questFunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addQuest: () => (/* binding */ addQuest),
/* harmony export */   createCardTemplate: () => (/* binding */ createCardTemplate),
/* harmony export */   createEmptyCardTemplate: () => (/* binding */ createEmptyCardTemplate),
/* harmony export */   createGhostCard: () => (/* binding */ createGhostCard),
/* harmony export */   displayGoalCardContent: () => (/* binding */ displayGoalCardContent),
/* harmony export */   displaycardContent: () => (/* binding */ displaycardContent),
/* harmony export */   getNewQuest: () => (/* binding */ getNewQuest),
/* harmony export */   removeCompletedQuest: () => (/* binding */ removeCompletedQuest),
/* harmony export */   renderQuestList: () => (/* binding */ renderQuestList)
/* harmony export */ });
/* harmony import */ var _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/classes.js */ "./src/classes/classes.js");
/* harmony import */ var _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions.js */ "./src/currencyFunctions.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _eventManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventManager.js */ "./src/eventManager.js");
/* harmony import */ var _indexViewFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indexViewFunctions.js */ "./src/indexViewFunctions.js");
/* harmony import */ var _localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageFunctions.js */ "./src/localStorageFunctions.js");








function getNewQuest (card) {
    let questObject = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Quest(null, null, null, new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Currency(null, null), null, null, null, null)
    let getQuestFormObjective = card.querySelector("#objectiveTextInput").value;
    let getQuestFormDate = card.querySelector("#questDate").value;
    let getQuestCurrencyType = card.querySelector("#currencyTypeInput").value;
    let getQuestCurrencyAmount = card.querySelector("#currencyAmountInput").value;
    let getQuestTimeSpent = card.querySelector("#questTimeValue").value
    let getQuestTimeType = card.querySelector("#questTimeType").value
    let timeFrameStart = card.querySelector("#questStartTime").value
    let timeFrameEnd = card.querySelector("#questEndTime").value


    questObject.objective = getQuestFormObjective;
    questObject.dateToComplete = getQuestFormDate;
    questObject.questComplete = false;
    questObject.reward.type = getQuestCurrencyType;
    questObject.reward.amount = parseInt(getQuestCurrencyAmount);
    questObject.id = null;
    questObject.oneOffBool = false;
    questObject.goalId = null;
    questObject.timeSpent = getQuestTimeSpent;
    questObject.timeType = getQuestTimeType;

   

     
    if (timeFrameStart == null || timeFrameStart == undefined || timeFrameStart == "" ||
        timeFrameEnd == null || timeFrameEnd == undefined || timeFrameEnd == "") {
        questObject.timeFrameStart = null;
        questObject.timeFrameEnd = null;
        console.log(questObject.timeFrameStart)
    } else {
        questObject.timeFrameStart = timeFrameStart;
        questObject.timeFrameEnd = timeFrameEnd;
    }
    

    return questObject;
}

function validateQuestSubmission (newQuest) {
    
    let validCriteria = true;

    if (!newQuest.objective) {
        alert("Quest Objective Required!")
        validCriteria = false;
    }

    if (!newQuest.dateToComplete) {
        alert("Invalid Date!")
        validCriteria = false;
    }

    // Invalid Currency Amount:
    if (!newQuest.reward.amount) {
        alert("Currency Amount must be greater than 0!");
        validCriteria = false;
    }
    
    return validCriteria;
}

function createGhostCard() {
    let card = document.createElement("div");
    card.classList.add("ghostCard");
    card.classList.add("hidden");

    const createNewQuestButton = document.createElement("button");
    createNewQuestButton.classList.add("addQuestButton");
    createNewQuestButton.addEventListener("click", function () {

        if (_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList.length <= 0) {
            alert("Cannot make a new quest until you have submitted your first quest OR your current quest list is greater than 0!")
            return;
        }
        let questParallax = document.querySelector(".questParallax");
        let ghostCard = this.parentNode;
        let newQuestCard = createEmptyCardTemplate();
        questParallax.insertBefore(newQuestCard, ghostCard);
    });
    createNewQuestButton.innerText = "Add Quest +";
    card.appendChild(createNewQuestButton);

    // Add hover event listeners to toggle opacity
    card.addEventListener("mouseenter", function () {
        this.classList.remove("hidden");
        this.classList.add("visible");
    });

    card.addEventListener("mouseleave", function () {
        this.classList.remove("visible");
        this.classList.add("hidden");
    });

    return card;
  }

function createEmptyCardTemplate () {

    // Initialize Card (Container) Creation and Content
    let card = document.createElement("div"); 
    card.classList.add("emptyCard");

    // Initialize Card Content
    let cardContent = document.createElement("div");
    cardContent.classList.add("emptyCardContent");
    card.appendChild(cardContent);

    // 1. Submit button CONTAINER content
    let submitNewQuestButtonContainer = document.createElement("div");
    submitNewQuestButtonContainer.classList.add("submitNewQuestButtonContainer");
    cardContent.appendChild(submitNewQuestButtonContainer)

        // 1a) Submit New Quest Button
        const sumbitNewQuestButton = document.createElement("button");
        sumbitNewQuestButton.classList.add("submitNewQuestButton");
        sumbitNewQuestButton.addEventListener("click", function(){
            let questParallax = document.querySelector(".questParallax");
            let x = getNewQuest(card);
            if (validateQuestSubmission(x)) {
                _data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList.push(x);
                (0,_localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)("currentQuestList", _data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList);
                renderQuestList(_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList, _data_js__WEBPACK_IMPORTED_MODULE_2__.currencyContainer);
                card.remove();
                questParallax.appendChild(createGhostCard());
            };
                
            console.log(_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList);
        })
        sumbitNewQuestButton.innerText = "Submit";
        submitNewQuestButtonContainer.appendChild(sumbitNewQuestButton);


    // 2. Objective CONTAINER content - includes user objective textual input and time inputs
    let objectiveContentContainer = document.createElement("div");
    objectiveContentContainer.classList.add("objectiveContentContainer");
    cardContent.appendChild(objectiveContentContainer)

        // 2a) Objective Text Input Container
        let objectiveTextInputContainer = document.createElement("div");
        objectiveTextInputContainer.classList.add("objectiveTextInputContainer");
        objectiveContentContainer.appendChild(objectiveTextInputContainer)

            // 2a) - Objective Text 
            let objectiveTextInput = document.createElement("input");
            objectiveTextInput.setAttribute("type", "text");
            objectiveTextInput.setAttribute("placeholder", "Define your quest here...");
            objectiveTextInput.setAttribute("maxlength", "70"); // Set character limit to 70
            objectiveTextInput.classList.add("input");
            objectiveTextInput.setAttribute("id", "objectiveTextInput"); 
            objectiveTextInputContainer.appendChild(objectiveTextInput);
    

        // 2b) Objective Timeframe Elements Container
        let objectiveTimeFrameElementsContainer = document.createElement("div");
        objectiveTimeFrameElementsContainer.classList.add("objectiveTimeFrameElementsContainer");
        objectiveContentContainer.appendChild(objectiveTimeFrameElementsContainer)

            // 2b) i) Objective Timeframe Label Container
            let objectiveTimeFrameLabelContainer = document.createElement("div");
            objectiveTimeFrameLabelContainer.classList.add("objectiveTimeFrameLabelContainer");
            objectiveTimeFrameElementsContainer.appendChild(objectiveTimeFrameLabelContainer);

                // 2b) i) 1. - Input Date label
                let inputDateLabel = document.createElement('label');
                inputDateLabel.setAttribute('for', 'questDate');
                inputDateLabel.setAttribute('id', 'questDateLabel');
                inputDateLabel.textContent = 'Date:';
                objectiveTimeFrameLabelContainer.appendChild(inputDateLabel);

                //  2b) i) 2. - Input Start Time (Optional)
                let inputStartTimeLabel = document.createElement('label');
                inputStartTimeLabel.setAttribute('for', 'questStartTime');
                inputStartTimeLabel.setAttribute('id', 'questStartTimeLabel');
                inputStartTimeLabel.textContent = 'Start Time (Optional):';
                objectiveTimeFrameLabelContainer.appendChild(inputStartTimeLabel);

                //  2b) i) 3. - Input End Time (Optional)
                let inputEndTimeLabel = document.createElement('label');
                inputEndTimeLabel.setAttribute('for', 'questEndTime');
                inputEndTimeLabel.setAttribute('id', 'questEndTimeLabel');
                inputEndTimeLabel.textContent = 'End Time (Optional):';
                objectiveTimeFrameLabelContainer.appendChild(inputEndTimeLabel);

                let questTimeTypeLabel = document.createElement('label');
                questTimeTypeLabel.setAttribute('for', 'questTimeType');
                questTimeTypeLabel.setAttribute('id', 'questTimeTypeLabel');
                questTimeTypeLabel.textContent = 'Time Spent Type:';
                objectiveTimeFrameLabelContainer.appendChild(questTimeTypeLabel);

                let questTimeValueLabel = document.createElement('label');
                questTimeValueLabel.setAttribute('for', 'questTimeValue');
                questTimeValueLabel.setAttribute('id', 'questTimeValueLabel');
                questTimeValueLabel.textContent = 'Time Spent Value:';
                objectiveTimeFrameLabelContainer.appendChild(questTimeValueLabel);


            // 2b) ii) Objective Timeframe Input Container
            let objectiveTimeFrameInputsContainer = document.createElement("div");
            objectiveTimeFrameInputsContainer.classList.add("objectiveTimeFrameInputsContainer");
            objectiveTimeFrameElementsContainer.appendChild(objectiveTimeFrameInputsContainer);

                // 2b) ii) - Create objective time frame input

                const dateInput = document.createElement('input');
                dateInput.setAttribute('type', 'date');
                dateInput.setAttribute('name', 'questDate');
                dateInput.id = 'questDate';
                dateInput.className = 'formInput';

                    // Set the minimum date to today
                    const today = new Date().toISOString().split('T')[0];
                    dateInput.setAttribute('min', today);

                objectiveTimeFrameInputsContainer.appendChild(dateInput);
                
                // 2b) ii) - Create start time input
                const startTimeInput = document.createElement('input');
                startTimeInput.setAttribute('type', 'time');
                startTimeInput.setAttribute('name', 'questStartTime');
                startTimeInput.id = 'questStartTime';
                startTimeInput.className = 'formInput';
                objectiveTimeFrameInputsContainer.appendChild(startTimeInput);

                // 2b) ii) - Create end time input
                const endTimeInput = document.createElement('input');
                endTimeInput.setAttribute('type', 'time');
                endTimeInput.setAttribute('name', 'questEndTime');
                endTimeInput.id = 'questEndTime';
                endTimeInput.className = 'formInput';
                objectiveTimeFrameInputsContainer.appendChild(endTimeInput);

            // 2b) ii) - Create time spent unit select input
                const timeSpentTypeInput = document.createElement('select');
                timeSpentTypeInput.setAttribute('name', 'questTimeType');
                timeSpentTypeInput.id = 'questTimeType';
                timeSpentTypeInput.className = 'formInput';

                // Option 1: Hours
                const hoursOption = document.createElement('option');
                hoursOption.value = 'hours';
                hoursOption.textContent = 'Hours';
                timeSpentTypeInput.appendChild(hoursOption);

                // Option 2: Minutes
                const minutesOption = document.createElement('option');
                minutesOption.value = 'minutes';
                minutesOption.textContent = 'Minutes';
                timeSpentTypeInput.appendChild(minutesOption);

                // Option 3: No specific timeframe
                const flexibleOption = document.createElement('option');
                flexibleOption.value = 'N/A';
                flexibleOption.textContent = 'N/A';
                timeSpentTypeInput.appendChild(flexibleOption);

                objectiveTimeFrameInputsContainer.appendChild(timeSpentTypeInput);

                // 2b) ii) - Create time spent input
                const timeSpentInput = document.createElement('input');
                timeSpentInput.setAttribute('type', 'number');
                timeSpentInput.setAttribute('name', 'questTimeValue');
                timeSpentInput.id = 'questTimeValue';
                timeSpentInput.className = 'formInput';
                timeSpentInput.min = 1; // Set the minimum value to 0
                timeSpentInput.setAttribute('autocomplete', 'off'); // Disable autocomplete for numeric input
                objectiveTimeFrameInputsContainer.appendChild(timeSpentInput);

                // Add event listener to disable timeSpentInput when "N/A" option is selected
                timeSpentTypeInput.addEventListener('change', function() {
                    const selectedValue = timeSpentTypeInput.value;
                    timeSpentInput.disabled = (selectedValue === 'N/A');
                    if (selectedValue === 'N/A') {
                    timeSpentInput.value = ''; // Clear the value if disabled
                    }
                });
                
                // Add event listener to validate the input as a positive integer
                timeSpentInput.addEventListener('input', function() {
                    const value = timeSpentInput.value.trim();
                    const numericValue = value.replace(/\D/g, ''); // Remove all non-numeric characters
                    timeSpentInput.value = numericValue; // Update the input value to numeric-only value
                });
                
                objectiveTimeFrameInputsContainer.appendChild(timeSpentInput);
                

    // 3. Reward CONTAINER content - includes user reward type input and reward amount input
    let rewardSelectionContainer = document.createElement("div");
    rewardSelectionContainer.classList.add("rewardSelectionContainer");
    cardContent.appendChild(rewardSelectionContainer)

        // 3a) Reward Box Parent Element
        let rewardBox = document.createElement("div");
        rewardBox.classList.add("rewardBoxInput");
        rewardSelectionContainer.appendChild(rewardBox);

            // 3a) - Reward Box Image
            let rewardBoxCurrencyTypeImage = document.createElement("img");         
            rewardBox.appendChild(rewardBoxCurrencyTypeImage)

            // 3a) - Reward Box Currency Amount
            let rewardBoxCurrencyAmount = document.createElement("div");
            rewardBox.appendChild(rewardBoxCurrencyAmount);

        // Reward Inputs - Currency Type
        let rewardTypeInputLabel = document.createElement("Label");
        rewardTypeInputLabel.classList.add("inputRewardLabel");
        rewardTypeInputLabel.textContent = 'Currency Type';
        let rewardTypeInput = document.createElement("select")
        rewardTypeInput.setAttribute("name", "rewardTypeInput")
        rewardTypeInput.classList.add("inputRewardForm");
        rewardTypeInput.setAttribute("id", "currencyTypeInput")
        rewardBox.appendChild(rewardTypeInputLabel);
        rewardBox.appendChild(rewardTypeInput);
 

        // Reward Type - Options dynamically generated based on the reward utilities.validCurrencies object list
        for (let i = 0; i < _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies.length; i++) {
            console.log(_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i])
            let option = document.createElement("option");
            option.setAttribute("value", _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i]);
            option.textContent = `${_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i]}`;
            rewardTypeInput.appendChild(option);
        }

        // Reward Inputs - Currency Amount
        let rewardAmountInputLabel = document.createElement("Label");
        rewardAmountInputLabel.classList.add("inputRewardLabel");
        let rewardAmountInput = document.createElement("input")
        rewardAmountInputLabel.textContent = 'Currency Amount';
        rewardAmountInput.classList.add("inputRewardForm");
        rewardAmountInput.setAttribute("type", "number")
        rewardAmountInput.setAttribute("name", "rewardAmountInput")
        rewardAmountInput.setAttribute("min", "0")
        rewardAmountInput.setAttribute("max", "10000")
        rewardAmountInput.setAttribute("placeholder", "0");
        rewardAmountInput.setAttribute("id", "currencyAmountInput")
        rewardBox.appendChild(rewardAmountInputLabel);
        rewardBox.appendChild(rewardAmountInput);

        // Reward Amount - Constraint to fit available currency allocation
        rewardAmountInput.addEventListener("input", function() {
            if (this.value > 10000) {
            alert("This value cannot exceed the maximum of: 10000")
            this.value = 10000;
            }
        });

    // 4. Remove current card container
    let removeCurrentCardContainer = document.createElement("div");
    removeCurrentCardContainer.classList.add("removeCurrentCardContainer");
    cardContent.appendChild(removeCurrentCardContainer)

        // 4a) Close Button
        let removeCurrentCardContainerButton = document.createElement("button");
        removeCurrentCardContainerButton.classList.add("removeCurrentCardContainerButton")
        removeCurrentCardContainerButton.textContent = '\u00D7'; // Set the multiplication sign as text content

        removeCurrentCardContainerButton.addEventListener("click", function(){
            if (_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList <= 0) {
                let questParallax = document.querySelector(".questParallax")
                let ghostCard = document.querySelector(".ghostCard");
                ghostCard.remove();
                questParallax.remove();
                (0,_indexViewFunctions_js__WEBPACK_IMPORTED_MODULE_4__.showEmptyQuestsState)();
            }
            card.remove();
        })
        removeCurrentCardContainer.appendChild(removeCurrentCardContainerButton)


    return card;

}

function createCardTemplate (type) {
 
    // Initialize Card (Container) Creation and Content
    let card = document.createElement("div"); 

    //Quest Objective Content
    let objective = document.createElement("div");
    let objectiveContent = document.createElement("div");
    objectiveContent.classList.add("objectiveContentContainer")

        // Quest Objective Text
        let objectiveText = document.createElement("div");
        objectiveText.classList.add("objectiveText");

        // Quest Objective Time Content
        let objectiveTimeFrameContainer = document.createElement("div");
        objectiveTimeFrameContainer.classList.add("objectiveTimeFrameContainer");

        let dotOne = document.createElement("div");
        dotOne.classList.add("dot");
        dotOne.id = "dotOne";

        let dotTwo = document.createElement("div");
        dotTwo.classList.add("dot");
        dotTwo.id = "dotTwo";

        let dateToCompleteText = document.createElement("div");
        dateToCompleteText.id = "dateToCompleteText";

        let timeSpentOnQuest = document.createElement("div");
        timeSpentOnQuest.id = "timeSpentOnQuest";

        let timeFrameOfQuest = document.createElement("div");
        timeFrameOfQuest.id = "timeFrameOfQuest";

        objectiveTimeFrameContainer.appendChild(dateToCompleteText);
        objectiveTimeFrameContainer.appendChild(dotOne);
        objectiveTimeFrameContainer.appendChild(timeSpentOnQuest);
        objectiveTimeFrameContainer.appendChild(dotTwo);
        objectiveTimeFrameContainer.appendChild(timeFrameOfQuest);


    //  Check Box
    let completeCheckbox = document.createElement("input");
    completeCheckbox.setAttribute("type", "checkbox");
    // completeCheckbox.addEventListener("change", function(){
    //     console.log("True")
    // })

    objective.appendChild(completeCheckbox);
    objective.appendChild(objectiveContent);
    objectiveContent.appendChild(objectiveText)
    objectiveContent.appendChild(objectiveTimeFrameContainer)
   

    //Reward Box Content
    let rewardBox = document.createElement("div");
    rewardBox.classList.add("rewardBox");

    // Reward Box Image
    let rewardBoxCurrencyTypeImage = document.createElement("img");         
    rewardBox.appendChild(rewardBoxCurrencyTypeImage)

    // Reward Box Currency Amount
    let rewardBoxCurrencyAmount = document.createElement("div");
    rewardBox.appendChild(rewardBoxCurrencyAmount);

    card.appendChild(objective);
    objective.appendChild(rewardBox);

    if (type == "quest") {
        card.classList.add("questCard")
        objective.classList.add("cardContent");
        completeCheckbox.classList.add("questCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");       
        rewardBoxCurrencyTypeImage.classList.add("questRewardImage");
        rewardBoxCurrencyAmount.classList.add("questRewardAmount");
    }

    if (type == "goal") {
        card.classList.add("goalCard")
        objective.classList.add("goalObjective");
        completeContainer.classList.add("goalCompleteContainer");
        completeLabel.textContent = "Mark Goal Complete";
        completeCheckbox.classList.add("goalCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");
        objectiveTime.classList.add("objectiveTimeFrame");       
        rewardBoxCurrencyTypeImage.classList.add("goalRewardImage");
        rewardBoxCurrencyAmount.classList.add("goalRewardAmount");
    }

    if (type == null || type == undefined) {
        console.log("Invalid Type!");
        return;
    }
    
    return card;
}

function displaycardContent (quest, cardElement, currencyContainer) {

        //Quest Objective Content
        let questObjective = cardElement.querySelector(".objectiveText");
        questObjective.innerText = quest.objective;
        questObjective.setAttribute("id", `${quest.objective}`)
    
        let checkbox = cardElement.querySelector(".questCompleteCheckbox");
        checkbox.addEventListener("change", function(){
            quest.questComplete = true;
            console.log(quest);
            (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.currencyAggregator)(currencyContainer, quest);
            (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);
            removeCompletedQuest(_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList);
            (0,_localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)("currentQuestList", _data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList)
            ;(0,_localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)("currencyContainer", currencyContainer)
            cardElement.remove();

            if (_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList.length <= 0) {
                let ghostCard = document.querySelector(".ghostCard");
                let questParallax = document.querySelector(".questParallax");
                ghostCard.remove();
                questParallax.remove();
                (0,_indexViewFunctions_js__WEBPACK_IMPORTED_MODULE_4__.showEmptyQuestsState)();
            }
        }) 
        
        //Date to Complete Content
        let timeCriteriaContent = cardElement.querySelector(".objectiveTimeFrameContainer");
       
        let dateToCompleteText = cardElement.querySelector("#dateToCompleteText");
        let timeSpentOnQuest = cardElement.querySelector("#timeSpentOnQuest");
        let timeFrameOfQuest = cardElement.querySelector("#timeFrameOfQuest");

        let dotTwo = cardElement.querySelector("#dotTwo");

        if (quest.timeFrameStart == null || quest.timeFrameEnd == null) {
            dotTwo.remove();
            timeFrameOfQuest.remove();
        }

        function capitalizeFirstLetter(str) {

            if (quest.timeType == undefined) {
                return;
            } else {
                return str.charAt(0).toUpperCase() + str.slice(1);
            }
        }
       

        dateToCompleteText.textContent = (`${quest.dateToComplete}`);
        timeSpentOnQuest.textContent = (`Time Requirement: ${quest.timeSpent} ${capitalizeFirstLetter(quest.timeType)}`);
        timeFrameOfQuest.textContent = (`${quest.timeFrameStart} to ${quest.timeFrameEnd}`)

        //Reward Box Content
        let rewardBox = cardElement.querySelector(".rewardBox");
        rewardBox.setAttribute("id", `questCard-${quest}-reward`);

            // Reward Box Image
            let rewardBoxCurrencyTypeImage = cardElement.querySelector(".questRewardImage");
            rewardBoxCurrencyTypeImage.setAttribute("src", _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(quest));            
           
            // Reward Box Currency Amount
            let rewardBoxCurrencyAmount = cardElement.querySelector(".questRewardAmount");
            rewardBoxCurrencyAmount.textContent = (`${quest.reward.amount} ${quest.reward.type}`);

        return cardElement;
}

function displayGoalCardContent (goal, cardElement, currencyContainer) {

    //Goal Objective Content
    let goalObjective = cardElement.querySelector(".goalCardText");
    goalObjective.innerText = goal.objective;
    goalObjective.setAttribute("id", `${goal.objective}`)

    let checkbox = cardElement.querySelector(".goalCompleteCheckbox");
    if (checkbox) {
      checkbox.addEventListener("click", function() {
        (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.currencyAggregator)(currencyContainer, goal);
        (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);
      });
    } else {
      console.log("Checkbox element not found in the card");
    }
    
    //Date to Complete Content
    let dateToCompleteText = cardElement.querySelector(".dateToCompleteText");
    dateToCompleteText.setAttribute("id", `goalCard-${goal.dateToComplete}`)
    dateToCompleteText.textContent = (`${goal.dateToComplete}`);

    //Reward Box Content
    let rewardBox = cardElement.querySelector(".rewardBox");
    rewardBox.setAttribute("id", `goalCard-${goal}-reward`);

        // Reward Box Image
        let rewardBoxCurrencyTypeImage = cardElement.querySelector(".goalRewardImage");
        console.log(_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(goal))
        rewardBoxCurrencyTypeImage.setAttribute("src", _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(goal));            
       
        // Reward Box Currency Amount
        let rewardBoxCurrencyAmount = cardElement.querySelector(".goalRewardAmount");
        rewardBoxCurrencyAmount.textContent = (`${goal.reward.amount} ${goal.reward.type}`);

    return cardElement;
}

function renderQuestList (currentQuestList, currencyContainer) {

    if (currentQuestList.length <= 0) {
        console.log("Quest List is Empty");
        return;
    }

    else {
        let questList = document.querySelector(".questParallax");
        questList.textContent = "";

        for (let i = 0; i < currentQuestList.length; i++) {
            let card = createCardTemplate("quest");
            card.setAttribute("id", `quest-${i}`);
            displaycardContent(currentQuestList[i], card, currencyContainer);
            questList.appendChild(card);
        }
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
/*!**************************!*\
  !*** ./src/inventory.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inventoryFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventoryFunctions */ "./src/inventoryFunctions.js");
/* harmony import */ var _currencyFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions */ "./src/currencyFunctions.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./src/data.js");






(0,_inventoryFunctions__WEBPACK_IMPORTED_MODULE_0__.inventoryEventHandler)(_data_js__WEBPACK_IMPORTED_MODULE_3__.playerInventory);

(0,_currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(_data_js__WEBPACK_IMPORTED_MODULE_3__.currencyContainer);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ047QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsYUFBYTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTREO0FBQ087QUFDN0M7QUFDNkQ7QUFDbkY7QUFDQTtBQUNBLDBFQUFxQixDQUFDLHFEQUFlO0FBQ3JDO0FBQ0EsZ0ZBQTRCLENBQUMsdURBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jdXJyZW5jeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaGVscGVyRnVuY3Rpb25zL2ltYWdlSGFuZGxlci5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy9hcm1vdXIvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy9lbGVtZW50cy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL3Jhcml0aWVzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvd2VhcG9ucy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW5kZXhWaWV3RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW52ZW50b3J5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvbW9kYWxFbGVtZW50cy9pdGVtQ2FyZE1vZGFsLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcXVlc3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ2V0TmV3UXVlc3QgfSBmcm9tIFwiLi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHpvZGlhY1NpZ25zIGZyb20gXCIuLi96b2RpYWNQb3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCwgb25lT2ZmQm9vbCwgZ29hbElkLCB0aW1lU3BlbnQpIHtcclxuICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgdGhpcy5xdWVzdENvbXBsZXRlID0gcXVlc3RDb21wbGV0ZTtcclxuICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5vbmVPZmZCb29sID0gb25lT2ZmQm9vbDtcclxuICAgIHRoaXMuZ29hbElkID0gZ29hbElkO1xyXG4gICAgdGhpcy50aW1lU3BlbnQgPSB0aW1lU3BlbnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2FsIHtcclxuICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIHJld2FyZCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgIHRoaXMucXVlc3RzID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy50b3RhbFRpbWVSZXF1aXJlZCA9IG51bGw7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICAgIHRoaXMudGltZXNQZXJXZWVrUmVxdWlyZWQgPSBudWxsO1xyXG4gICAgdGhpcy50aW1lc1BlcldlZWtTcGVudCA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICB0aGlzLmVuZERhdGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdCh0aW1lc1BlcldlZWtSZXF1aXJlZCwgdG90YWxUaW1lUmVxdWlyZWQpIHtcclxuXHJcbiAgICBsZXQgcXVlc3QgPSBuZXcgUXVlc3QoXCJHbyB0byBHeW1cIiwgbnVsbCwgZmFsc2UsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDE4KSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgLy8gQ2FzZSAxOiBGcmVxdWVuY3kgdHlwZSBpcyB0aW1lLWFyYml0cmFyeVxyXG4gICAgIGlmICh0b3RhbFRpbWVSZXF1aXJlZCA9PSAwIHx8IHRvdGFsVGltZVJlcXVpcmVkID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZXNQZXJXZWVrUmVxdWlyZWQgLSB0aGlzLnRpbWVzUGVyV2Vla1NwZW50O1xyXG4gICAgICAgIHJldHVybiB7cXVlc3QsIHRpbWVzUGVyV2Vla1JlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgICB9XHJcblxyXG5cclxuICAgIC8vIENhc2UgMjogRnJlcXVlbmN5IHR5cGUgaXMgdGltZS1zcGVjaWZpY1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0b3RhbFRpbWVSZXF1aXJlZCAtIHRoaXMudG90YWxUaW1lU3BlbnQ7XHJcbiAgICAgIHJldHVybiB7cXVlc3QsIHRvdGFsVGltZVJlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGxpbmtRdWVzdFRvR29hbChxdWVzdCkge1xyXG4gICAgaWYgKHRoaXMucXVlc3RzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0cyk7XHJcbiAgICB0aGlzLnF1ZXN0cy5wdXNoKHF1ZXN0KTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgKz0gcXVlc3QucXVlc3RDb21wbGV0ZSA/IHF1ZXN0LmR1cmF0aW9uIDogMDtcclxuICB9XHJcbiBcclxuICBpc0dvYWxDb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZVNwZW50ID49IHRoaXMudGltZVJlcXVpcmVkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCgpIHtcclxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIHF1ZXN0XHJcbiAgLy8gWW91IGNhbiB1c2UgYSBsaWJyYXJ5IG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb247XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0cyA9IHt9O1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTdGF0KHN0YXROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgY29uc3QgZXF1aXBwZWRWYWx1ZSA9IHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgKyBlcXVpcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdW5lcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSAmJiB0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gLT0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpIHtcclxuICAgICAgc3dpdGNoIChoZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNixcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA4LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNixcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA4LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDgsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogOCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIHR5cGUuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXZlbFVwKCkge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCB8fCAxO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgPSBsZXZlbCArIDE7XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzICs9IDU7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgNSBza2lsbCBwb2ludHMgcGVyIGxldmVsXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbGxvY2F0ZVNraWxsUG9pbnQoc3RhdE5hbWUpIHtcclxuICAgICAgaWYgKHRoaXMuX3NraWxsUG9pbnRzID4gMCAmJiB0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSAxO1xyXG4gICAgICAgIHRoaXMuX3NraWxsUG9pbnRzIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldCBza2lsbFBvaW50cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NraWxsUG9pbnRzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVJbWFnZSwgaGVyb1R5cGUsIGVxdWlwcGVkSXRlbXMsIGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxTZWxlY3Rpb24gPSBlbGVtZW50YWxTZWxlY3Rpb247XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gdGhpcy5nZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgZ2V0IHNwcml0ZUltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVJbWFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHNwcml0ZUltYWdlKHNwcml0ZUltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVyb1R5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9oZXJvVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVyb1R5cGUoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZXF1aXBwZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50YWxBZmZpbml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxBZmZpbml0eSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciBlcXVpcHBpbmcgYW4gaXRlbVxyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhdHRhY2sgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsQXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTcGVjaWFsIEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCaXJ0aGRheUluUmFuZ2UoYmlydGhkYXksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGJpcnRoZGF5IHRvIGEgRGF0ZSBvYmplY3QgaWYgaXQncyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheVxyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURheSA9IGJpcnRoZGF5RGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGVuZERheSA9IGVuZERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAxMSAmJiBiaXJ0aGRheURheSA+IDIxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAwICYmIGJpcnRoZGF5RGF5IDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoID4gc3RhcnRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gc3RhcnRNb250aCAmJiBiaXJ0aGRheURheSA+PSBzdGFydERheSkpICYmXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy8gT3RoZXIgbWV0aG9kcyBjYW4gYmUgYWRkZWQgaGVyZSBmb3IgZnVydGhlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG5cclxuICAgICAgICAvLyBpZiBlbGVtZW50YWwgc2VsZWN0aW9uIGlzIGEgYmlydGhkYXkgcHJvdmlkZWQ6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSB6b2RpYWMgU2lnbnMgZGF0ZSByYW5nZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcclxuICAgICAgICAgICAgbGV0IGJpcnRoRGF5UmFuZ2VDaGVjayA9IHRoaXMuaXNCaXJ0aGRheUluUmFuZ2UoZWxlbWVudGFsU2VsZWN0aW9uLCBkYXRlQ2hlY2tlci5zdGFydERhdGUsIGRhdGVDaGVja2VyLmVuZERhdGUpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbOV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmlydGhEYXlSYW5nZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gPT0gem9kaWFjU2lnbnNbaW5kZXhdLl91bmlxdWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4iLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gXCIuL2NsYXNzZXMvY2xhc3Nlc1wiO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTtcclxuZXhwb3J0IGxldCBjdXJyZW50R29hbExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudEdvYWxMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSB8fCBbbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIkNoZXN0S2V5c1wiLCAwKV07XHJcbmV4cG9ydCBsZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xyXG5leHBvcnQgbGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdOyIsImltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSwgY3JlYXRlUXVlc3RQYXJhbGxheCB9IGZyb20gXCIuL2luZGV4Vmlld0Z1bmN0aW9uc1wiO1xyXG4vLyBpbXBvcnQgeyBjdXJyZW50R29hbExpc3QsIGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlTWFuYWdlciAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRHb2FsTGlzdCkge1xyXG5cclxuICAgIC8vIERlZmF1bHQgYW5kIFBlcnNpc3RpbmcgRXZlbnRzOlxyXG4gICAgLy8gMS4gUmVuZGVyIEN1cnJlbmN5IFZhbHVlc1xyXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4gICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpXHJcbiAgICAgICAgcXVlc3RQYXJhbGxheC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlICh3ZWFwb24pIHtcclxuLy8gICAgIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG4vLyAgICAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2Uod2VhcG9uKSB7XHJcbiAgaWYgKCF3ZWFwb24gfHwgdHlwZW9mIHdlYXBvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgLy8gSW52YWxpZCB3ZWFwb24gcGFyYW1ldGVyLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcblxyXG4gIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSB3ZWFwb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICAgIC8vIEltYWdlIG5vdCBmb3VuZCBmb3IgdGhlIGdpdmVuIHdlYXBvbiwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuLy8gICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4vLyAgICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UoYXJtb3VyKSB7XHJcbiAgaWYgKCFhcm1vdXIgfHwgdHlwZW9mIGFybW91ciAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG5cclxuICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gYXJtb3VyLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlIChyYXJpdHkpIHtcclxuLy8gICAgIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG4vLyAgICAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlIChlbGVtZW50KSB7XHJcbi8vICAgICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuLy8gICAgIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZShyYXJpdHkpIHtcclxuICBpZiAoIXJhcml0eSB8fCB0eXBlb2YgcmFyaXR5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcblxyXG4gIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSByYXJpdHkgKyBcIlJhcml0eVwiO1xyXG4gICAgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlKGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtSW1hZ2Uoc3RyaW5nKSB7XHJcblxyXG4gIGxldCBpdGVtSW1hZ2VVcmw7XHJcblxyXG4gIGlmIChzdHJpbmcudHlwZSA9PT0gXCJ3ZWFwb25cIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0V2VhcG9uSW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiYXJtb3VyXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEFybW91ckltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcInJhcml0eVwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRSYXJpdHlJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJlbGVtZW50XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEVsZW1lbnRJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbUltYWdlVXJsO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYnlzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWJ5c3MucG5nXCIsXG5cdFwiLi9hZXRoZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FldGhlci5wbmdcIixcblx0XCIuL2NvcnJvZGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2NvcnJvZGUucG5nXCIsXG5cdFwiLi9nYWlhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9nYWlhLnBuZ1wiLFxuXHRcIi4vaW5mZXJuby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvaW5mZXJuby5wbmdcIixcblx0XCIuL2x1bmFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9sdW5hci5wbmdcIixcblx0XCIuL21pc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL21pc3QucG5nXCIsXG5cdFwiLi9zb2xhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc29sYXIucG5nXCIsXG5cdFwiLi9zdGVlbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc3RlZWwucG5nXCIsXG5cdFwiLi90ZXJyYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdGVycmEucG5nXCIsXG5cdFwiLi92b2x0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy92b2x0LnBuZ1wiLFxuXHRcIi4vemVwaHlyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy96ZXBoeXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VwaWNSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2VwaWNSYXJpdHkucG5nXCIsXG5cdFwiLi9sZWdlbmRhcnlSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2xlZ2VuZGFyeVJhcml0eS5wbmdcIixcblx0XCIuL25vcm1hbFJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbm9ybWFsUmFyaXR5LnBuZ1wiLFxuXHRcIi4vcmFyZVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvcmFyZVJhcml0eS5wbmdcIixcblx0XCIuL3VuY29tbW9uUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy91bmNvbW1vblJhcml0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0FieXNzU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0dhaWFTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0dhaWFTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vSW5mZXJub1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvSW5mZXJub1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9MdW5hclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTHVuYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTWlzdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTWlzdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1NvbGFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Tb2xhclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Wb2x0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Wb2x0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1plcGh5clNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvWmVwaHlyU2hvcnRTd29yZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMgc3luYyBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbnRHb2FsTGlzdCwgY3VycmVuY3lDb250YWluZXIgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlLCBjcmVhdGVHaG9zdENhcmQgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRlbnRIZWFkZXJcIik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVF1ZXN0c1N0YXRlICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcXVlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5U3RhdGVDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5UXVlc3RDb250YWluZXJcIik7XHJcbiAgICAgICAgcXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIFF1ZXN0IHRvIGdldCBzdGFydGVkIGFuZCBjaGVjayB0aGVtIGhlcmU6XCJcclxuICAgICAgICBsZXQgcXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHF1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKVxyXG4gICAgICAgIHF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUXVlc3QgK1wiXHJcbiAgICAgICAgcXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFyZW1vdmVFbXB0eVN0YXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXB0eXN0YXRlIFJlbW92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5U3RhdGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFjcmVhdGVRdWVzdFBhcmFsbGF4KCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdFBhcmFsbGF4IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpKTtcclxuICAgICAgICAgICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgIGV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlHb2Fsc1N0YXRlICgpIHtcclxuXHJcbiAgICBcclxuICAgICAgICBsZXQgZW1wdHlTdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnb2FsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5U3RhdGVDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5R29hbENvbnRhaW5lclwiKTtcclxuICAgICAgICBnb2FsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJTZXQgR29hbHMgYW5kIHRyYWNrIHlvdXIgcHJvZ3Jlc3MgaGVyZTpcIlxyXG4gICAgICAgIGxldCBnb2FsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBnb2FsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRHb2FsQnV0dG9uXCIpXHJcbiAgICAgICAgZ29hbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIEdvYWwgK1wiXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsQnV0dG9uKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eVF1ZXN0U3RhdGUgKCkge1xyXG5cclxuICBjb25zdCBlbXB0eVF1ZXN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlTdGF0ZUNvbnRhaW5lciNlbXB0eVF1ZXN0Q29udGFpbmVyXCIpXHJcbiAgICAgICAgaWYgKGVtcHR5UXVlc3RMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlRdWVzdExpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUdvYWxTdGF0ZSAoKSB7XHJcblxyXG4gIGNvbnN0IGVtcHR5R29hbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlHb2FsQ29udGFpbmVyXCIpXHJcbiAgICAgICAgaWYgKGVtcHR5R29hbExpc3QpIHtcclxuICAgICAgICAgICAgZW1wdHlHb2FsTGlzdC5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3RQYXJhbGxheCgpIHtcclxuXHJcbiAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcblxyXG4gIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IGFscmVhZHkgZXhpc3RzXHJcbiAgaWYgKHF1ZXN0UGFyYWxsYXgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBSZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZWxlbWVudCBhbHJlYWR5IGV4aXN0c1xyXG4gIH1cclxuXHJcbiAgbGV0IHF1ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbnRhaW5lclwiKTtcclxuICBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBxdWVzdFBhcmFsbGF4LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFBhcmFsbGF4XCIpO1xyXG4gIHF1ZXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0UGFyYWxsYXgpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTsgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZWxlbWVudCB3YXMgY3JlYXRlZFxyXG59XHJcblxyXG5sZXQgZ29hbFBhcmFsbGF4O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdvYWxQYXJhbGxheCgpIHtcclxuXHJcbiAgaWYgKCFnb2FsUGFyYWxsYXgpIHtcclxuICAgIGxldCBnb2FsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29udGFpbmVyXCIpO1xyXG4gICAgZ29hbFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdvYWxQYXJhbGxheC5jbGFzc0xpc3QuYWRkKFwiZ29hbFBhcmFsbGF4XCIpO1xyXG4gICAgZ29hbENvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsUGFyYWxsYXgpO1xyXG5cclxuICB9XHJcbiAgZ29hbFBhcmFsbGF4LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0V2VhcG9uSW1hZ2UsIGdldEFybW91ckltYWdlLCBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwgZnJvbSBcIi4vbW9kYWxFbGVtZW50cy9pdGVtQ2FyZE1vZGFsXCI7XHJcblxyXG5jb25zdCBpbnZlbnRvcnlQYWdlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQ29udGVudFwiKTtcclxuY29uc3QgaW52ZW50b3J5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmludmVudG9yeVBhZ2UuY2xhc3NMaXN0LmFkZChcImludmVudG9yeVBhZ2VcIilcclxuXHJcbmNvbnN0IHJhcml0eUNvbG9ycyA9IHtcclxuICAgIG5vcm1hbDogXCJyZ2IoMjExLCAyMTEsIDIxMSwgMC44KVwiLFxyXG4gICAgdW5jb21tb246IFwicmdiKDAsIDEyOCwgMCwgMC44KVwiLFxyXG4gICAgcmFyZTogXCJyZ2IoMzAsIDMwLCAyNTUsIDAuOClcIixcclxuICAgIGVwaWM6IFwicmdiKDE2MCwgMzIsIDI0MCwgMC44KVwiLFxyXG4gICAgbGVnZW5kYXJ5OiBcInJnYigyNTUsIDE2NSwgMC44KVwiLFxyXG4gICAgfTsgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmVudG9yeVBhZ2UgKGludmVudG9yeSkge1xyXG5cclxuICAgIGludmVudG9yeVBhZ2VQYXJlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5UGFnZSlcclxuXHJcbiAgICAgICAgLy8gQ29kZSB0byBnZW5lcmF0ZSBlYWNoIGludmVudG9yeSByb3dcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKyspIHtcclxuICAgICAgICAgICAgbGV0IGludmVudG9yeUl0ZW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtUm93XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpbnZlbnRvcnlJdGVtUm93LSR7aSsxfWApO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlQYWdlLmFwcGVuZENoaWxkKGludmVudG9yeUl0ZW1Sb3cpXHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gKGkgKiA1KTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBDb2RlIHRvIGdlbmVyYXRlIGVhY2ggaW5kZXggaW4gZWFjaCBpbnZlbnRvcnkgcm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW52ZW50b3J5SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjb3VudGVyICsgaiArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAoY291bnRlciArIGopXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwoZS50YXJnZXQsIGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiNHB4IHNvbGlkIHllbGxvd1wiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5hcHBlbmRDaGlsZChpbnZlbnRvcnlJdGVtQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5cclxufVxyXG5cclxuLy8gVGhpcyBpcyBzZXBhcmF0ZSBmcm9tIGludmVudG9yeSBhbmQgb25seSBnZW5lcmF0ZXMgdGhlIGNvbnRhaW5lciBmb3IgaW52ZW50b3J5IGl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJbnZlbnRvcnlQYWdlIChpbnZlbnRvcnkpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGludmVudG9yeS5sZW5ndGg7IGl0ZW0rKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52ZW50b3J5SXRlbScpW2l0ZW1dO1xyXG4gICAgICAgIGxldCBpdGVtU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtU3ByaXRlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtU3ByaXRlXCIpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVNwcml0ZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGdldFdlYXBvbkltYWdlKGludmVudG9yeVtpdGVtXS5fdHlwZS5yZXBsYWNlKC9cXHMvZywgJycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtSW1hZ2UpXHJcbiAgICAgICAgaXRlbVNwcml0ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2l0ZW1JbWFnZX0nKWBcclxuICAgICAgICBpdGVtU3ByaXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhcml0eUNvbG9yc1tpbnZlbnRvcnlbaXRlbV0uX3Jhcml0eV07XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W2l0ZW1dO1xyXG4gICAgICAgIH1cclxuICAgICl9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeUV2ZW50SGFuZGxlcihpbnZlbnRvcnkpIHtcclxuICAgIGlmIChpbnZlbnRvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgICAgICB1cGRhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgIH1cclxuICB9XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGtleSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgSlNPTiBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIGZvciBrZXkgJyR7a2V5fSc6YCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHsgZ2V0V2VhcG9uSW1hZ2UsIGdldEFybW91ckltYWdlLCBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlIH0gZnJvbSBcIi4uL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuaW1wb3J0IHsgY2FsY1dlYXBvblNjb3JlIH0gZnJvbSBcIi4uL3BsYXllckNoYXJhY3RlckZ1bmN0aW9uc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludmVudG9yeU1vZGFsKGUpIHtcclxuICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaW52ZW50b3J5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW52ZW50b3J5TW9kYWwucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBcclxuZnVuY3Rpb24gY3JlYXRlSXRlbUNhcmRNb2RhbChlLCBpdGVtKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coY2FsY1dlYXBvblNjb3JlKGl0ZW0pKVxyXG4gICAgICAgIFxyXG5jb25zdCByYXJpdHlDb2xvcnMgPSB7XHJcbiAgICBub3JtYWw6IFwicmdiKDIxMSwgMjExLCAyMTEpXCIsXHJcbiAgICB1bmNvbW1vbjogXCJyZ2IoMCwgMTI4LCAwKVwiLFxyXG4gICAgcmFyZTogXCJyZ2IoMzAsIDMwLCAyNTUpXCIsXHJcbiAgICBlcGljOiBcInJnYigxNjAsIDMyLCAyNDApXCIsXHJcbiAgICBsZWdlbmRhcnk6IFwicmdiKDI1NSwgMTY1LCAwKVwiLFxyXG4gICAgfTtcclxuXHJcbmNvbnN0IGl0ZW1TdGF0c1RvcEhhbGYgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJFbGVtZW50XCIsXHJcbiAgICAgICAgaWQ6IFwiZWxlbWVudFwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9lbGVtZW50LFxyXG4gICAgICAgIGljb246IGdldEVsZW1lbnRJbWFnZShpdGVtLl9lbGVtZW50KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJhcml0eVwiLFxyXG4gICAgICAgIGlkOiBcInJhcml0eVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9yYXJpdHlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJIZXJvIFNjb3JlXCIsXHJcbiAgICAgICAgaWQ6IFwiaGVyb1Njb3JlXCIsXHJcbiAgICAgICAgdmFsdWU6IGNhbGNXZWFwb25TY29yZShpdGVtKVxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBpdGVtU3RhdHNCb3R0b21IYWxmPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJJdGVtIFR5cGVcIixcclxuICAgICAgICBpZDogXCJpdGVtVHlwZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl90eXBlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiV2VhcG9uIERhbWFnZVwiLFxyXG4gICAgICAgIGlkOiBcImRhbWFnZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5kYW1hZ2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDcml0aWNhbCBDaGFuY2VcIixcclxuICAgICAgICBpZDogXCJjcml0Q2hhbmNlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNyaXRDaGFuY2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDcml0aWNhbCBEYW1hZ2VcIixcclxuICAgICAgICBpZDogXCJjcml0RGFtYWdlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNyaXREYW1hZ2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDb25zdGl0dXRpb25cIixcclxuICAgICAgICBpZDogXCJjb25zdGl0dXRpb25cIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY29uc3RpdHV0aW9uXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGV4dGVyaXR5XCIsXHJcbiAgICAgICAgaWQ6IFwiZGV4dGVyaXR5XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmRleHRlcml0eVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkludGVsbGlnZW5jZVwiLFxyXG4gICAgICAgIGlkOiBcImludGVsbGlnZW5jZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5pbnRlbGxpZ2VuY2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdHJlbmd0aFwiLFxyXG4gICAgICAgIGlkOiBcInN0cmVuZ3RoXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLnN0cmVuZ3RoXHJcbiAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgXHJcblxyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWwuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1jb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRDb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkVG9wSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRUb3BIYWxmXCIpO1xyXG4gICAgICBjb25zdCBpdGVtQ2FyZEJvdHRvbUhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZEJvdHRvbUhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQm90dG9tSGFsZlwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IHN0YXQgb2YgaXRlbVN0YXRzQm90dG9tSGFsZikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmlkID0gc3RhdC5pZDtcclxuICAgICAgICAvLyBpdGVtQ2FyZFN0YXRDb250YWluZXIuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCI6IFwiICsgc3RhdC52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpdGVtQ2FyZEJvdHRvbUhhbGYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyKVxyXG4gICAgICAgIGNvbnN0IHN0YXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdE5hbWUuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCIgOlxcdTAwQTBcIlxyXG4gICAgICAgIHN0YXROYW1lLnN0eWxlLmNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IChzdGF0LnZhbHVlKTtcclxuICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0TmFtZSk7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRWYWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkQm90dG9tSGFsZi5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1pbWFnZS1jb250YWluZXJcIilcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0taW1hZ2VcIik7XHJcbiAgICAgIGxldCBpdGVtSW1hZ2UgPSBlLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaXRlbUltYWdlO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZSk7XHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbVN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLXN0YXRzXCIpO1xyXG4gICAgXHJcbiAgICAgIC8vIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAvLyBlbGVtZW50Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlfScpYFxyXG4gICAgICAvLyBlbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZENvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IHN0YXQgb2YgaXRlbVN0YXRzVG9wSGFsZikge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuaWQgPSBzdGF0LmlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdE5hbWUuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCI6XFx1MDBBMFwiO1xyXG4gICAgICAgIHN0YXROYW1lLnN0eWxlLmNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICAgICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGlmIChzdGF0Lm5hbWUgPT0gXCJSYXJpdHlcIikge1xyXG4gICAgICAgICAgbGV0IHJhcml0eU5hbWUgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RhdC52YWx1ZSlcclxuICAgICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSByYXJpdHlOYW1lO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmNvbG9yID0gcmFyaXR5Q29sb3JzW2l0ZW0uX3Jhcml0eV07XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuZm9udFdlaWdodCA9IDgwMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXQubmFtZSA9PSBcIkhlcm8gU2NvcmVcIikge1xyXG4gICAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IFwiK1wiICsgc3RhdC52YWx1ZTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5mb250U2l6ZSA9IFwiMzJweFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3JjID0gc3RhdC5pY29uO1xyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjsgLy8gQWxpZ24gdGhlIGltYWdlIHZlcnRpY2FsbHkgaW4gbGluZSB3aXRoIHRoZSB0ZXh0XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjEwcHhcIjsgLy8gQWRkIG1hcmdpbiBiZXR3ZWVuIHRoZSB0ZXh0IGFuZCBpbWFnZVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgLy8gRW5hYmxlIGZsZXhib3ggbGF5b3V0XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiOyAvLyBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5IGluIHRoZSBjZW50ZXJcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RhdC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SWNvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdFZhbHVlLmFwcGVuZENoaWxkKHZhbHVlQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmFwcGVuZENoaWxkKHN0YXROYW1lKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmFwcGVuZENoaWxkKHN0YXRWYWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LWNsb3NlXCIpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIjtcclxuICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBoaWRlSW52ZW50b3J5TW9kYWwoZSkgXHJcbiAgICAgIH0pXHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiTW9kYWwgVGl0bGVcIjtcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudFRleHQudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgdGhlIGludmVudG9yeSBtb2RhbCBjb250ZW50LlwiO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbFRpdGxlKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkQ29udGVudCk7XHJcbiAgICBcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkVG9wSGFsZik7XHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZEJvdHRvbUhhbGYpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMpO1xyXG4gICAgXHJcbiAgICAgIC8vIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0KTtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbENvbnRlbnQpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gaW52ZW50b3J5TW9kYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSXRlbUNhcmRNb2RhbChlLCBpbnZlbnRvcnkpIHtcclxuICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gY3JlYXRlSXRlbUNhcmRNb2RhbChlLCBpbnZlbnRvcnkpO1xyXG4gICAgaW52ZW50b3J5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGNIZXJvU2NvcmUgKHBsYXllckNoYXJhY3Rlcikge1xyXG4gICAgbGV0IGhlcm9TY29yZSA9IDA7XHJcblxyXG4gICAgLy8gQmFzZSBzdGF0cyBjYWxjXHJcbiAgICBsZXQgaW5oZXJlbnRTdHJlbmd0aCA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcInN0cmVuZ3RoXCIpO1xyXG4gICAgbGV0IGluaGVyZW50SW50ZWxsaWdlbmNlID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiaW50ZWxsaWdlbmNlXCIpO1xyXG4gICAgbGV0IGluaGVyZW50RGV4dGVyaXR5ID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiZGV4dGVyaXR5XCIpO1xyXG4gICAgbGV0IGluaGVyZW50Q29uc3RpdHV0aW9uID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiY29uc3RpdHV0aW9uXCIpO1xyXG5cclxuICAgIC8vIFdlYXBvbiBTdGF0cyBDYWxjXHJcbiAgICBsZXQgd2VhcG9uU3RyZW5ndGggPSAwO1xyXG4gICAgbGV0IHdlYXBvbkludGVsbGlnZW5jZSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uRGV4dGVyaXR5ID0gMDtcclxuICAgIGxldCB3ZWFwb25Db25zdGl0dXRpb24gPSAwO1xyXG4gICAgbGV0IGVxdWlwbWVudFN0YXQgPSAwO1xyXG4gICBcclxuICAgIGZvciAobGV0IHdlYXBvbkluZGV4ID0gMDsgd2VhcG9uSW5kZXggPCBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXMubGVuZ3RoOyB3ZWFwb25JbmRleCsrKSB7XHJcbiAgICAgICAgd2VhcG9uU3RyZW5ndGggKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuc3RyZW5ndGg7XHJcbiAgICAgICAgd2VhcG9uSW50ZWxsaWdlbmNlICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmludGVsbGlnZW5jZTtcclxuICAgICAgICB3ZWFwb25EZXh0ZXJpdHkgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgICAgIHdlYXBvbkNvbnN0aXR1dGlvbiArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jb25zdGl0dXRpb247XHJcbiAgICAgICAgbGV0IHdlYXBvbkNyaXRDaGFuY2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jcml0Q2hhbmNlO1xyXG4gICAgICAgIGxldCB3ZWFwb25Dcml0RGFtYWdlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY3JpdERhbWFnZTtcclxuICAgICAgICBsZXQgd2VhcG9uRGFtYWdlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuZGFtYWdlO1xyXG4gICAgICAgIGVxdWlwbWVudFN0YXQgKz0gKHdlYXBvbkRhbWFnZSArICh3ZWFwb25EYW1hZ2UgKiB3ZWFwb25Dcml0Q2hhbmNlICogd2VhcG9uQ3JpdERhbWFnZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBUb3RhbCBTdGF0c1xyXG5cclxuICAgIGxldCB0b3RhbFN0cmVuZ3RoID0gaW5oZXJlbnRTdHJlbmd0aCArIHdlYXBvblN0cmVuZ3RoO1xyXG4gICAgbGV0IHRvdGFsSW50ZWxsaWdlbmNlID0gaW5oZXJlbnRJbnRlbGxpZ2VuY2UgKyB3ZWFwb25JbnRlbGxpZ2VuY2U7XHJcbiAgICBsZXQgdG90YWxEZXh0ZXJpdHkgPSBpbmhlcmVudERleHRlcml0eSArIHdlYXBvbkRleHRlcml0eTtcclxuICAgIGxldCB0b3RhbENvbnN0aXR1dGlvbiA9IGluaGVyZW50Q29uc3RpdHV0aW9uICsgd2VhcG9uQ29uc3RpdHV0aW9uO1xyXG5cclxuICAgIHN3aXRjaChwbGF5ZXJDaGFyYWN0ZXIuaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICB0b3RhbFN0cmVuZ3RoICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICAgIHRvdGFsSW50ZWxsaWdlbmNlICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICAgIHRvdGFsRGV4dGVyaXR5ICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICB0b3RhbENvbnN0aXR1dGlvbiAqPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGhlcm9TY29yZSArPSAodG90YWxTdHJlbmd0aCArIHRvdGFsSW50ZWxsaWdlbmNlICsgdG90YWxEZXh0ZXJpdHkgKyB0b3RhbENvbnN0aXR1dGlvbiArIGVxdWlwbWVudFN0YXQpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gaGVyb1Njb3JlLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjV2VhcG9uU2NvcmUgKHdlYXBvbikge1xyXG4gICAgXHJcbiAgICBsZXQgdG90YWxXZWFwb25TY29yZSA9IDA7IFxyXG5cclxuICAgIGxldCB3ZWFwb25TdHJlbmd0aCA9IDA7XHJcbiAgICBsZXQgd2VhcG9uSW50ZWxsaWdlbmNlID0gMDtcclxuICAgIGxldCB3ZWFwb25EZXh0ZXJpdHkgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IDA7XHJcbiAgICBsZXQgZXF1aXBtZW50U3RhdCA9IDA7XHJcblxyXG4gICAgXHJcbiAgICB3ZWFwb25TdHJlbmd0aCArPSB3ZWFwb24uX3N0YXRzLnN0cmVuZ3RoO1xyXG4gICAgd2VhcG9uSW50ZWxsaWdlbmNlICs9IHdlYXBvbi5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgd2VhcG9uRGV4dGVyaXR5ICs9IHdlYXBvbi5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgd2VhcG9uQ29uc3RpdHV0aW9uICs9IHdlYXBvbi5fc3RhdHMuY29uc3RpdHV0aW9uO1xyXG4gICAgbGV0IHdlYXBvbkNyaXRDaGFuY2UgPSB3ZWFwb24uX3N0YXRzLmNyaXRDaGFuY2U7XHJcbiAgICBsZXQgd2VhcG9uQ3JpdERhbWFnZSA9IHdlYXBvbi5fc3RhdHMuY3JpdERhbWFnZTtcclxuICAgIGxldCB3ZWFwb25EYW1hZ2UgPSB3ZWFwb24uX3N0YXRzLmRhbWFnZTtcclxuICAgIGVxdWlwbWVudFN0YXQgKz0gKHdlYXBvbkRhbWFnZSArICh3ZWFwb25EYW1hZ2UgKiB3ZWFwb25Dcml0Q2hhbmNlICogd2VhcG9uQ3JpdERhbWFnZSkpO1xyXG5cclxuICAgIHRvdGFsV2VhcG9uU2NvcmUgPSAod2VhcG9uU3RyZW5ndGggKyB3ZWFwb25JbnRlbGxpZ2VuY2UgKyB3ZWFwb25EZXh0ZXJpdHkgKyB3ZWFwb25Db25zdGl0dXRpb24gKyBlcXVpcG1lbnRTdGF0KVxyXG5cclxuICAgIHJldHVybiB0b3RhbFdlYXBvblNjb3JlLnRvRml4ZWQoMik7XHJcblxyXG59XHJcbiAgICBcclxuIiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzL2NsYXNzZXMuanMnXHJcbmltcG9ydCB7IHJld2FyZFV0aWxpdGllcywgY3VycmVuY3lBZ2dyZWdhdG9yLCBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3RMaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlUXVlc3RQYXJhbGxheCwgY3JlYXRlUXVlc3RDb250YWluZXIsIHF1ZXN0Q29udHJvbGxlciwgcmVtb3ZlRW1wdHlTdGF0ZSwgc2hvd0VtcHR5UXVlc3RzU3RhdGUgfSBmcm9tICcuL2luZGV4Vmlld0Z1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1F1ZXN0IChjYXJkKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsLCBudWxsLCBudWxsLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNvYmplY3RpdmVUZXh0SW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdERhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVuY3lUeXBlSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW5jeUFtb3VudElucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0VGltZVNwZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0VGltZVZhbHVlXCIpLnZhbHVlXHJcbiAgICBsZXQgZ2V0UXVlc3RUaW1lVHlwZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdFRpbWVUeXBlXCIpLnZhbHVlXHJcbiAgICBsZXQgdGltZUZyYW1lU3RhcnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RTdGFydFRpbWVcIikudmFsdWVcclxuICAgIGxldCB0aW1lRnJhbWVFbmQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RFbmRUaW1lXCIpLnZhbHVlXHJcblxyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcbiAgICBxdWVzdE9iamVjdC5vbmVPZmZCb29sID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5nb2FsSWQgPSBudWxsO1xyXG4gICAgcXVlc3RPYmplY3QudGltZVNwZW50ID0gZ2V0UXVlc3RUaW1lU3BlbnQ7XHJcbiAgICBxdWVzdE9iamVjdC50aW1lVHlwZSA9IGdldFF1ZXN0VGltZVR5cGU7XHJcblxyXG4gICBcclxuXHJcbiAgICAgXHJcbiAgICBpZiAodGltZUZyYW1lU3RhcnQgPT0gbnVsbCB8fCB0aW1lRnJhbWVTdGFydCA9PSB1bmRlZmluZWQgfHwgdGltZUZyYW1lU3RhcnQgPT0gXCJcIiB8fFxyXG4gICAgICAgIHRpbWVGcmFtZUVuZCA9PSBudWxsIHx8IHRpbWVGcmFtZUVuZCA9PSB1bmRlZmluZWQgfHwgdGltZUZyYW1lRW5kID09IFwiXCIpIHtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVTdGFydCA9IG51bGw7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lRW5kID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdE9iamVjdC50aW1lRnJhbWVTdGFydClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lU3RhcnQgPSB0aW1lRnJhbWVTdGFydDtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVFbmQgPSB0aW1lRnJhbWVFbmQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gcXVlc3RPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUXVlc3RTdWJtaXNzaW9uIChuZXdRdWVzdCkge1xyXG4gICAgXHJcbiAgICBsZXQgdmFsaWRDcml0ZXJpYSA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFuZXdRdWVzdC5vYmplY3RpdmUpIHtcclxuICAgICAgICBhbGVydChcIlF1ZXN0IE9iamVjdGl2ZSBSZXF1aXJlZCFcIilcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFuZXdRdWVzdC5kYXRlVG9Db21wbGV0ZSkge1xyXG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBEYXRlIVwiKVxyXG4gICAgICAgIHZhbGlkQ3JpdGVyaWEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnZhbGlkIEN1cnJlbmN5IEFtb3VudDpcclxuICAgIGlmICghbmV3UXVlc3QucmV3YXJkLmFtb3VudCkge1xyXG4gICAgICAgIGFsZXJ0KFwiQ3VycmVuY3kgQW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAhXCIpO1xyXG4gICAgICAgIHZhbGlkQ3JpdGVyaWEgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHZhbGlkQ3JpdGVyaWE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaG9zdENhcmQoKSB7XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJnaG9zdENhcmRcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmV3UXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFF1ZXN0QnV0dG9uXCIpO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJDYW5ub3QgbWFrZSBhIG5ldyBxdWVzdCB1bnRpbCB5b3UgaGF2ZSBzdWJtaXR0ZWQgeW91ciBmaXJzdCBxdWVzdCBPUiB5b3VyIGN1cnJlbnQgcXVlc3QgbGlzdCBpcyBncmVhdGVyIHRoYW4gMCFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICBsZXQgZ2hvc3RDYXJkID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgICAgIGxldCBuZXdRdWVzdENhcmQgPSBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHF1ZXN0UGFyYWxsYXguaW5zZXJ0QmVmb3JlKG5ld1F1ZXN0Q2FyZCwgZ2hvc3RDYXJkKTtcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgUXVlc3QgK1wiO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVOZXdRdWVzdEJ1dHRvbik7XHJcblxyXG4gICAgLy8gQWRkIGhvdmVyIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgb3BhY2l0eVxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlDYXJkXCIpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCBDb250ZW50XHJcbiAgICBsZXQgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImVtcHR5Q2FyZENvbnRlbnRcIik7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAvLyAxLiBTdWJtaXQgYnV0dG9uIENPTlRBSU5FUiBjb250ZW50XHJcbiAgICBsZXQgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDFhKSBTdWJtaXQgTmV3IFF1ZXN0IEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHN1bWJpdE5ld1F1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0TmV3UXVlc3RCdXR0b25cIik7XHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGdldE5ld1F1ZXN0KGNhcmQpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVRdWVzdFN1Ym1pc3Npb24oeCkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUXVlc3RMaXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFBhcmFsbGF4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XHJcbiAgICAgICAgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VtYml0TmV3UXVlc3RCdXR0b24pO1xyXG5cclxuXHJcbiAgICAvLyAyLiBPYmplY3RpdmUgQ09OVEFJTkVSIGNvbnRlbnQgLSBpbmNsdWRlcyB1c2VyIG9iamVjdGl2ZSB0ZXh0dWFsIGlucHV0IGFuZCB0aW1lIGlucHV0c1xyXG4gICAgbGV0IG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlQ29udGVudENvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDJhKSBPYmplY3RpdmUgVGV4dCBJbnB1dCBDb250YWluZXJcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lclwiKTtcclxuICAgICAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgICAgIC8vIDJhKSAtIE9iamVjdGl2ZSBUZXh0IFxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlZmluZSB5b3VyIHF1ZXN0IGhlcmUuLi5cIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI3MFwiKTsgLy8gU2V0IGNoYXJhY3RlciBsaW1pdCB0byA3MFxyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvYmplY3RpdmVUZXh0SW5wdXRcIik7IFxyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dElucHV0KTtcclxuICAgIFxyXG5cclxuICAgICAgICAvLyAyYikgT2JqZWN0aXZlIFRpbWVmcmFtZSBFbGVtZW50cyBDb250YWluZXJcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lclwiKTtcclxuICAgICAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGkpIE9iamVjdGl2ZSBUaW1lZnJhbWUgTGFiZWwgQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpKSAxLiAtIElucHV0IERhdGUgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3REYXRlTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGU6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGF0ZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgMmIpIGkpIDIuIC0gSW5wdXQgU3RhcnQgVGltZSAoT3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRTdGFydFRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0YXJ0VGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0U3RhcnRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0YXJ0VGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RTdGFydFRpbWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdTdGFydCBUaW1lIChPcHRpb25hbCk6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3RhcnRUaW1lTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAyYikgaSkgMy4gLSBJbnB1dCBFbmQgVGltZSAoT3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRFbmRUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RFbmRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0RW5kVGltZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdFbmQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVuZFRpbWVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0VGltZVR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVUeXBlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RUaW1lVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RUaW1lVHlwZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVUeXBlTGFiZWwudGV4dENvbnRlbnQgPSAnVGltZSBTcGVudCBUeXBlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFRpbWVUeXBlTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFRpbWVWYWx1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVZhbHVlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RUaW1lVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVZhbHVlTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdFRpbWVWYWx1ZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgU3BlbnQgVmFsdWU6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0VGltZVZhbHVlTGFiZWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpaSkgT2JqZWN0aXZlIFRpbWVmcmFtZSBJbnB1dCBDb250YWluZXJcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgb2JqZWN0aXZlIHRpbWUgZnJhbWUgaW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0RGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ3F1ZXN0RGF0ZSc7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbWluaW11bSBkYXRlIHRvIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgc3RhcnQgdGltZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdFN0YXJ0VGltZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuaWQgPSAncXVlc3RTdGFydFRpbWUnO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRUaW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgZW5kIHRpbWUgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RFbmRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuaWQgPSAncXVlc3RFbmRUaW1lJztcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmRUaW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSB0aW1lIHNwZW50IHVuaXQgc2VsZWN0IGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3BlbnRUeXBlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RUaW1lVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmlkID0gJ3F1ZXN0VGltZVR5cGUnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAxOiBIb3Vyc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGhvdXJzT3B0aW9uLnZhbHVlID0gJ2hvdXJzJztcclxuICAgICAgICAgICAgICAgIGhvdXJzT3B0aW9uLnRleHRDb250ZW50ID0gJ0hvdXJzJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChob3Vyc09wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uIDI6IE1pbnV0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXNPcHRpb24udmFsdWUgPSAnbWludXRlcyc7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzT3B0aW9uLnRleHRDb250ZW50ID0gJ01pbnV0ZXMnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFwcGVuZENoaWxkKG1pbnV0ZXNPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAzOiBObyBzcGVjaWZpYyB0aW1lZnJhbWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsZXhpYmxlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBmbGV4aWJsZU9wdGlvbi52YWx1ZSA9ICdOL0EnO1xyXG4gICAgICAgICAgICAgICAgZmxleGlibGVPcHRpb24udGV4dENvbnRlbnQgPSAnTi9BJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChmbGV4aWJsZU9wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudFR5cGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSB0aW1lIHNwZW50IGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3BlbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RUaW1lVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmlkID0gJ3F1ZXN0VGltZVZhbHVlJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQubWluID0gMTsgLy8gU2V0IHRoZSBtaW5pbXVtIHZhbHVlIHRvIDBcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpOyAvLyBEaXNhYmxlIGF1dG9jb21wbGV0ZSBmb3IgbnVtZXJpYyBpbnB1dFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudElucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZGlzYWJsZSB0aW1lU3BlbnRJbnB1dCB3aGVuIFwiTi9BXCIgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRpbWVTcGVudFR5cGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5kaXNhYmxlZCA9IChzZWxlY3RlZFZhbHVlID09PSAnTi9BJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdOL0EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQudmFsdWUgPSAnJzsgLy8gQ2xlYXIgdGhlIHZhbHVlIGlmIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB2YWxpZGF0ZSB0aGUgaW5wdXQgYXMgYSBwb3NpdGl2ZSBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGltZVNwZW50SW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7IC8vIFJlbW92ZSBhbGwgbm9uLW51bWVyaWMgY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnZhbHVlID0gbnVtZXJpY1ZhbHVlOyAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlIHRvIG51bWVyaWMtb25seSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lU3BlbnRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyAzLiBSZXdhcmQgQ09OVEFJTkVSIGNvbnRlbnQgLSBpbmNsdWRlcyB1c2VyIHJld2FyZCB0eXBlIGlucHV0IGFuZCByZXdhcmQgYW1vdW50IGlucHV0XHJcbiAgICBsZXQgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAzYSkgUmV3YXJkIEJveCBQYXJlbnQgRWxlbWVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94SW5wdXRcIik7XHJcbiAgICAgICAgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgICAgICAvLyAzYSkgLSBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuXHJcbiAgICAgICAgICAgIC8vIDNhKSAtIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBJbnB1dHMgLSBDdXJyZW5jeSBUeXBlXHJcbiAgICAgICAgbGV0IHJld2FyZFR5cGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZExhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0N1cnJlbmN5IFR5cGUnO1xyXG4gICAgICAgIGxldCByZXdhcmRUeXBlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZXdhcmRUeXBlSW5wdXRcIilcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkRm9ybVwiKTtcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW5jeVR5cGVJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRUeXBlSW5wdXRMYWJlbCk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZFR5cGVJbnB1dCk7XHJcbiBcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIFR5cGUgLSBPcHRpb25zIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgcmV3YXJkIHV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXMgb2JqZWN0IGxpc3RcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llc1tpXSlcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCByZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKTtcclxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7cmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llc1tpXX1gO1xyXG4gICAgICAgICAgICByZXdhcmRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBJbnB1dHMgLSBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICBsZXQgcmV3YXJkQW1vdW50SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZExhYmVsXCIpO1xyXG4gICAgICAgIGxldCByZXdhcmRBbW91bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgQW1vdW50JztcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmV3YXJkQW1vdW50SW5wdXRcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMTAwMDBcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjBcIik7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW5jeUFtb3VudElucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEFtb3VudElucHV0TGFiZWwpO1xyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRBbW91bnRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBBbW91bnQgLSBDb25zdHJhaW50IHRvIGZpdCBhdmFpbGFibGUgY3VycmVuY3kgYWxsb2NhdGlvblxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlRoaXMgdmFsdWUgY2Fubm90IGV4Y2VlZCB0aGUgbWF4aW11bSBvZjogMTAwMDBcIilcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmVtb3ZlIGN1cnJlbnQgY2FyZCBjb250YWluZXJcclxuICAgIGxldCByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gNGEpIENsb3NlIEJ1dHRvblxyXG4gICAgICAgIGxldCByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uXCIpXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24udGV4dENvbnRlbnQgPSAnXFx1MDBENyc7IC8vIFNldCB0aGUgbXVsdGlwbGljYXRpb24gc2lnbiBhcyB0ZXh0IGNvbnRlbnRcclxuXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2hvc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naG9zdENhcmRcIik7XHJcbiAgICAgICAgICAgICAgICBnaG9zdENhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFBhcmFsbGF4LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0VtcHR5UXVlc3RzU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24pXHJcblxyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRUZW1wbGF0ZSAodHlwZSkge1xyXG4gXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcblxyXG4gICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgb2JqZWN0aXZlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVDb250ZW50Q29udGFpbmVyXCIpXHJcblxyXG4gICAgICAgIC8vIFF1ZXN0IE9iamVjdGl2ZSBUZXh0XHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRleHQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRleHRcIik7XHJcblxyXG4gICAgICAgIC8vIFF1ZXN0IE9iamVjdGl2ZSBUaW1lIENvbnRlbnRcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRvdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG90T25lLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XHJcbiAgICAgICAgZG90T25lLmlkID0gXCJkb3RPbmVcIjtcclxuXHJcbiAgICAgICAgbGV0IGRvdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG90VHdvLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XHJcbiAgICAgICAgZG90VHdvLmlkID0gXCJkb3RUd29cIjtcclxuXHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVUZXh0LmlkID0gXCJkYXRlVG9Db21wbGV0ZVRleHRcIjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVTcGVudE9uUXVlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVTcGVudE9uUXVlc3QuaWQgPSBcInRpbWVTcGVudE9uUXVlc3RcIjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVGcmFtZU9mUXVlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVGcmFtZU9mUXVlc3QuaWQgPSBcInRpbWVGcmFtZU9mUXVlc3RcIjtcclxuXHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlVGV4dCk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdE9uZSk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudE9uUXVlc3QpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3RUd28pO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRnJhbWVPZlF1ZXN0KTtcclxuXHJcblxyXG4gICAgLy8gIENoZWNrIEJveFxyXG4gICAgbGV0IGNvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIC8vIGNvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVHJ1ZVwiKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja2JveCk7XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQ29udGVudCk7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpXHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lcilcclxuICAgXHJcblxyXG4gICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgIGxldCByZXdhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcblxyXG4gICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgICAgICAgICBcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuXHJcbiAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJxdWVzdFwiKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29udGVudFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7ICAgICAgIFxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBcImdvYWxcIikge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImdvYWxDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJnb2FsT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVDb250YWluZXJcIik7XHJcbiAgICAgICAgY29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBHb2FsIENvbXBsZXRlXCI7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lXCIpOyAgICAgICBcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ29hbFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkQW1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IG51bGwgfHwgdHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgVHlwZSFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXljYXJkQ29udGVudCAocXVlc3QsIGNhcmRFbGVtZW50LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVUZXh0XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmlubmVyVGV4dCA9IHF1ZXN0Lm9iamVjdGl2ZTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtxdWVzdC5vYmplY3RpdmV9YClcclxuICAgIFxyXG4gICAgICAgIGxldCBjaGVja2JveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcXVlc3QucXVlc3RDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0KTtcclxuICAgICAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBxdWVzdCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICByZW1vdmVDb21wbGV0ZWRRdWVzdChjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRRdWVzdExpc3RcIiwgY3VycmVudFF1ZXN0TGlzdClcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKVxyXG4gICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2hvc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naG9zdENhcmRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICAgICAgICAgIGdob3N0Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0UGFyYWxsYXgucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93RW1wdHlRdWVzdHNTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgICAgICBsZXQgdGltZUNyaXRlcmlhQ29udGVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlVGV4dCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVRvQ29tcGxldGVUZXh0XCIpO1xyXG4gICAgICAgIGxldCB0aW1lU3BlbnRPblF1ZXN0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lU3BlbnRPblF1ZXN0XCIpO1xyXG4gICAgICAgIGxldCB0aW1lRnJhbWVPZlF1ZXN0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lRnJhbWVPZlF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgZG90VHdvID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3RUd29cIik7XHJcblxyXG4gICAgICAgIGlmIChxdWVzdC50aW1lRnJhbWVTdGFydCA9PSBudWxsIHx8IHF1ZXN0LnRpbWVGcmFtZUVuZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvdFR3by5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGltZUZyYW1lT2ZRdWVzdC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChxdWVzdC50aW1lVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVUZXh0LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LmRhdGVUb0NvbXBsZXRlfWApO1xyXG4gICAgICAgIHRpbWVTcGVudE9uUXVlc3QudGV4dENvbnRlbnQgPSAoYFRpbWUgUmVxdWlyZW1lbnQ6ICR7cXVlc3QudGltZVNwZW50fSAke2NhcGl0YWxpemVGaXJzdExldHRlcihxdWVzdC50aW1lVHlwZSl9YCk7XHJcbiAgICAgICAgdGltZUZyYW1lT2ZRdWVzdC50ZXh0Q29udGVudCA9IChgJHtxdWVzdC50aW1lRnJhbWVTdGFydH0gdG8gJHtxdWVzdC50aW1lRnJhbWVFbmR9YClcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtxdWVzdH0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShxdWVzdCkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtxdWVzdC5yZXdhcmQuYW1vdW50fSAke3F1ZXN0LnJld2FyZC50eXBlfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5R29hbENhcmRDb250ZW50IChnb2FsLCBjYXJkRWxlbWVudCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICAvL0dvYWwgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgIGxldCBnb2FsT2JqZWN0aXZlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ2FyZFRleHRcIik7XHJcbiAgICBnb2FsT2JqZWN0aXZlLmlubmVyVGV4dCA9IGdvYWwub2JqZWN0aXZlO1xyXG4gICAgZ29hbE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtnb2FsLm9iamVjdGl2ZX1gKVxyXG5cclxuICAgIGxldCBjaGVja2JveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJlbmN5QWdncmVnYXRvcihjdXJyZW5jeUNvbnRhaW5lciwgZ29hbCk7XHJcbiAgICAgICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDaGVja2JveCBlbGVtZW50IG5vdCBmb3VuZCBpbiB0aGUgY2FyZFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgIGxldCBkYXRlVG9Db21wbGV0ZVRleHQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVUb0NvbXBsZXRlVGV4dFwiKTtcclxuICAgIGRhdGVUb0NvbXBsZXRlVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZ29hbENhcmQtJHtnb2FsLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICBkYXRlVG9Db21wbGV0ZVRleHQudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgbGV0IHJld2FyZEJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV3YXJkQm94XCIpO1xyXG4gICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBnb2FsQ2FyZC0ke2dvYWx9LXJld2FyZGApO1xyXG5cclxuICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKVxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoZ29hbCkpOyAgICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5yZXdhcmQuYW1vdW50fSAke2dvYWwucmV3YXJkLnR5cGV9YCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVlc3RMaXN0IChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdCBMaXN0IGlzIEVtcHR5XCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgcXVlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgIHF1ZXN0TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmRUZW1wbGF0ZShcInF1ZXN0XCIpO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdC0ke2l9YCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXljYXJkQ29udGVudChjdXJyZW50UXVlc3RMaXN0W2ldLCBjYXJkLCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XHJcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRRdWVzdExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3RbaW5kZXhdLnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJjbGFzcyBab2RpYWNTaWduIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnREYXRlUmFuZ2UoZGF0ZVJhbmdlKSB7XHJcbiAgICAgIC8vIFNwbGl0IHRoZSBkYXRlIHJhbmdlIHN0cmluZyBpbnRvIHN0YXJ0IGFuZCBlbmQgZGF0ZXNcclxuICAgICAgY29uc3QgW3N0YXJ0U3RyLCBlbmRTdHJdID0gZGF0ZVJhbmdlLnNwbGl0KCcgLSAnKTtcclxuICAgIFxyXG4gICAgICAvLyBQYXJzZSB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyB1c2luZyB0aGUgRGF0ZSBjb25zdHJ1Y3RvclxyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydFN0cik7XHJcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZShlbmRTdHIpO1xyXG4gICAgXHJcbiAgICAgIC8vIEFkanVzdCB0aGUgeWVhciBvZiB0aGUgZW5kIGRhdGUgaWYgbmVjZXNzYXJ5XHJcbiAgICAgIGlmIChlbmREYXRlIDwgc3RhcnREYXRlKSB7XHJcbiAgICAgICAgZW5kRGF0ZS5zZXRGdWxsWWVhcihzdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIDEpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLy8gUmV0dXJuIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIGFuIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdGFydERhdGUsIGVuZERhdGUgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5jb25zdCB6b2RpYWNTaWducyA9IFtcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFyaWVzXCIsXHJcbiAgICAgIFwiTWFyY2ggMjEgLSBBcHJpbCAxOVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTdGVlbFwiLFxyXG4gICAgICBcIkFyZXMsIHRoZSBHb2Qgb2YgV2FyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlRhdXJ1c1wiLFxyXG4gICAgICBcIkFwcmlsIDIwIC0gTWF5IDIwXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJBYnlzc1wiLFxyXG4gICAgICBcIkhhZGVzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkdlbWluaVwiLFxyXG4gICAgICBcIk1heSAyMSAtIEp1bmUgMjBcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJaZXBoeXJcIixcclxuICAgICAgXCJJemFuYW1pL0l6YW5hZ2ksIHRoZSBHb2RzL0dvZGRlc3NlcyBvZiBDcmVhdGlvbiBhbmQgRGVhdGggKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2FuY2VyXCIsXHJcbiAgICAgIFwiSnVuZSAyMSAtIEp1bHkgMjJcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkx1bmFyXCIsXHJcbiAgICAgIFwiVHN1a3V5b21pLCB0aGUgR29kIG9mIHRoZSBNb29uIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxlb1wiLFxyXG4gICAgICBcIkp1bHkgMjMgLSBBdWd1c3QgMjJcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU29sYXJcIixcclxuICAgICAgXCJSYSwgdGhlIEdvZCBvZiB0aGUgU3VuIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlZpcmdvXCIsXHJcbiAgICAgIFwiQXVndXN0IDIzIC0gU2VwdGVtYmVyIDIyXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJUZXJyYVwiLFxyXG4gICAgICBcIk9zaXJpcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMaWJyYVwiLFxyXG4gICAgICBcIlNlcHRlbWJlciAyMyAtIE9jdG9iZXIgMjJcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJBZXRoZXJcIixcclxuICAgICAgXCJIb3J1cywgdGhlIEdvZCBvZiB0aGUgU2t5IChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNjb3JwaW9cIixcclxuICAgICAgXCJPY3RvYmVyIDIzIC0gTm92ZW1iZXIgMjFcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkNvcnJvZGVcIixcclxuICAgICAgXCJQb3NlaWRvbiwgdGhlIEdvZCBvZiB0aGUgU2VhIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNhZ2l0dGFyaXVzXCIsXHJcbiAgICAgIFwiTm92ZW1iZXIgMjIgLSBEZWNlbWJlciAyMVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJJbmZlcm5vXCIsXHJcbiAgICAgIFwiQW1hdGVyYXN1LCB0aGUgR29kZGVzcyBvZiB0aGUgU3VuIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhcHJpY29yblwiLFxyXG4gICAgICBcIkRlY2VtYmVyIDIyIC0gSmFudWFyeSAxOVwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiR2FpYVwiLFxyXG4gICAgICBcIklzaXMsIHRoZSBHb2RkZXNzIG9mIE1hZ2ljIGFuZCBMaWZlIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFxdWFyaXVzXCIsXHJcbiAgICAgIFwiSmFudWFyeSAyMCAtIEZlYnJ1YXJ5IDE4XCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiVm9sdFwiLFxyXG4gICAgICBcIlpldXMsIHRoZSBHb2Qgb2YgVGh1bmRlciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJQaXNjZXNcIixcclxuICAgICAgXCJGZWJydWFyeSAxOSAtIE1hcmNoIDIwXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJNaXN0XCIsXHJcbiAgICAgIFwiU3VzYW5vbywgdGhlIEdvZCBvZiB0aGUgU2VhIGFuZCBTdG9ybXMgKEphcGFuZXNlKVwiXHJcbiAgICApXHJcbiAgXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHpvZGlhY1NpZ25zOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQge2ludmVudG9yeUV2ZW50SGFuZGxlcn0gIGZyb20gJy4vaW52ZW50b3J5RnVuY3Rpb25zJztcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gJy4vY3VycmVuY3lGdW5jdGlvbnMnO1xyXG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7Y3VycmVuY3lDb250YWluZXIsIHBsYXllckludmVudG9yeSwgcGxheWVyRXF1aXBwZWRJdGVtcyB9IGZyb20gJy4vZGF0YS5qcyc7XHJcblxyXG5cclxuaW52ZW50b3J5RXZlbnRIYW5kbGVyKHBsYXllckludmVudG9yeSk7XHJcblxyXG5kaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=