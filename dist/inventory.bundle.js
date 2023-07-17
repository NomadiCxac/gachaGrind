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
  constructor(objective, dateToComplete, questComplete, reward, id, oneOffBool, goalId) {
    this.objective = objective;
    this.dateToComplete = dateToComplete;
    this.questComplete = questComplete;
    this.reward = reward;
    this.id = id;
    this.oneOffBool = oneOffBool;
    this.goalId = goalId;
  }
}

class Goal {
  constructor(objective, reward) {
    this.objective = objective;
    this.reward = reward;
    this.quests = [];
    this.completed = false;
    this.totalTimeSpent = 0;
    this.timesPerWeekSpent = 0;
  }

  generateQuest(timesPerWeekRequired, totalTimeRequired) {

    let quest = new Quest("Go to Gym", null, false, new Currency("GGTokens", 18), null, null, null)

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
    

    // if (currentQuestList.length <= 0 && currentGoalList.length <= 0) { 
    //     showEmptyQuestAndGoals();
    // }
    
    // removeCompletedQuest(currentQuestList, currencyContainer);
    // saveDataToLocalStorage("currentQuestList", currentQuestList);
    // saveDataToLocalStorage("currencyContainer", currencyContainer);
    // createAndDisplayQuestCards(currentQuestList, currencyContainer);
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
    let questObject = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Quest(null, null, null, new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Currency(null, null), null, null, null)
    let getQuestFormObjective = card.querySelector("#objectiveTextInput").value;
    let getQuestFormDate = card.querySelector("#questDate").value;
    let getQuestCurrencyType = card.querySelector("#currencyTypeInput").value;
    let getQuestCurrencyAmount = card.querySelector("#currencyAmountInput").value;

    questObject.objective = getQuestFormObjective;
    questObject.dateToComplete = getQuestFormDate;
    questObject.questComplete = false;
    questObject.reward.type = getQuestCurrencyType;
    questObject.reward.amount = parseInt(getQuestCurrencyAmount);
    questObject.id = null;
    questObject.oneOffBool = false;
    questObject.goalId = null;

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
                flexibleOption.value = 'flexible';
                flexibleOption.textContent = 'Flexible';
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

                // Add event listener to disable timeSpentInput when "Flexible" option is selected
                timeSpentTypeInput.addEventListener('change', function() {
                    const selectedValue = timeSpentTypeInput.value;
                    timeSpentInput.disabled = (selectedValue === 'flexible');
                    if (selectedValue === 'flexible') {
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
    objectiveContent.classList.add("objectiveContent")

    let objectiveText = document.createElement("div");
    objectiveText.classList.add("objectiveText");
    let objectiveTimeFrame = document.createElement("div");
    objectiveTimeFrame.classList.add("objectiveTimeFrame");

    //  Check Box
    let completeCheckbox = document.createElement("input");
    completeCheckbox.setAttribute("type", "checkbox");
    // completeCheckbox.addEventListener("change", function(){
    //     console.log("True")
    // })

    objective.appendChild(completeCheckbox);
    objective.appendChild(objectiveContent);
    objectiveContent.appendChild(objectiveText)
    objectiveContent.appendChild(objectiveTimeFrame)
   

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
        let dateToCompleteBox = cardElement.querySelector(".objectiveTimeFrame");
        dateToCompleteBox.setAttribute("id", `questCard-${quest.dateToComplete}`)
        dateToCompleteBox.textContent = (`${quest.dateToComplete}`);

        //Reward Box Content
        let rewardBox = cardElement.querySelector(".rewardBox");
        rewardBox.setAttribute("id", `questCard-${quest}-reward`);

            // Reward Box Image
            let rewardBoxCurrencyTypeImage = cardElement.querySelector(".questRewardImage");
            console.log(_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(quest))
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
    let dateToCompleteBox = cardElement.querySelector(".dateToCompleteBox");
    dateToCompleteBox.setAttribute("id", `goalCard-${goal.dateToComplete}`)
    dateToCompleteBox.textContent = (`${goal.dateToComplete}`);

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

    console.log(currentQuestList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ047QUFDMUM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcklBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELGFBQWE7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHdEQUF3RDtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEgxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0RDtBQUNPO0FBQzdDO0FBQzZEO0FBQ25GO0FBQ0E7QUFDQSwwRUFBcUIsQ0FBQyxxREFBZTtBQUNyQztBQUNBLGdGQUE0QixDQUFDLHVEQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvYXJtb3VyLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvZWxlbWVudHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy9yYXJpdGllcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL3dlYXBvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luZGV4Vmlld0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ludmVudG9yeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL21vZGFsRWxlbWVudHMvaXRlbUNhcmRNb2RhbC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvem9kaWFjUG93ZXJzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW52ZW50b3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdldE5ld1F1ZXN0IH0gZnJvbSBcIi4uL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi4vem9kaWFjUG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgZGF0ZVRvQ29tcGxldGUsIHF1ZXN0Q29tcGxldGUsIHJld2FyZCwgaWQsIG9uZU9mZkJvb2wsIGdvYWxJZCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm9uZU9mZkJvb2wgPSBvbmVPZmZCb29sO1xyXG4gICAgdGhpcy5nb2FsSWQgPSBnb2FsSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR29hbCB7XHJcbiAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCByZXdhcmQpIHtcclxuICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLnF1ZXN0cyA9IFtdO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgPSAwO1xyXG4gICAgdGhpcy50aW1lc1BlcldlZWtTcGVudCA9IDA7XHJcbiAgfVxyXG5cclxuICBnZW5lcmF0ZVF1ZXN0KHRpbWVzUGVyV2Vla1JlcXVpcmVkLCB0b3RhbFRpbWVSZXF1aXJlZCkge1xyXG5cclxuICAgIGxldCBxdWVzdCA9IG5ldyBRdWVzdChcIkdvIHRvIEd5bVwiLCBudWxsLCBmYWxzZSwgbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMTgpLCBudWxsLCBudWxsLCBudWxsKVxyXG5cclxuICAgIC8vIENhc2UgMTogRnJlcXVlbmN5IHR5cGUgaXMgdGltZS1hcmJpdHJhcnlcclxuICAgICBpZiAodG90YWxUaW1lUmVxdWlyZWQgPT0gMCB8fCB0b3RhbFRpbWVSZXF1aXJlZCA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRpbWVzUGVyV2Vla1JlcXVpcmVkIC0gdGhpcy50aW1lc1BlcldlZWtTcGVudDtcclxuICAgICAgICByZXR1cm4ge3F1ZXN0LCB0aW1lc1BlcldlZWtSZXF1aXJlZCwgcmVtYWluaW5nVGltZX07XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAvLyBDYXNlIDI6IEZyZXF1ZW5jeSB0eXBlIGlzIHRpbWUtc3BlY2lmaWNcclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdG90YWxUaW1lUmVxdWlyZWQgLSB0aGlzLnRvdGFsVGltZVNwZW50O1xyXG4gICAgICByZXR1cm4ge3F1ZXN0LCB0b3RhbFRpbWVSZXF1aXJlZCwgcmVtYWluaW5nVGltZX07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBsaW5rUXVlc3RUb0dvYWwocXVlc3QpIHtcclxuICAgIGlmICh0aGlzLnF1ZXN0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdHMpO1xyXG4gICAgdGhpcy5xdWVzdHMucHVzaChxdWVzdCk7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ICs9IHF1ZXN0LnF1ZXN0Q29tcGxldGUgPyBxdWVzdC5kdXJhdGlvbiA6IDA7XHJcbiAgfVxyXG4gXHJcbiAgaXNHb2FsQ29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWVTcGVudCA+PSB0aGlzLnRpbWVSZXF1aXJlZDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XHJcbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBxdWVzdFxyXG4gIC8vIFlvdSBjYW4gdXNlIGEgbGlicmFyeSBvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB0byBnZW5lcmF0ZSB1bmlxdWUgSURzXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsYXNzUmVzdHJpY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgQXJtb3VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIHJhcml0eSwgc3RhdHMpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclN0YXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cyA9IHRoaXMuZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHMgPSB7fTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgPSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0U3RhdChzdGF0TmFtZSkge1xyXG4gICAgICBjb25zdCBiYXNlVmFsdWUgPSB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIGNvbnN0IGVxdWlwcGVkVmFsdWUgPSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICByZXR1cm4gYmFzZVZhbHVlICsgZXF1aXBwZWRWYWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIHNldFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gKz0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdID0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHVuZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkgJiYgdGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIC09IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPD0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDYsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogOCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDYsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogOCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA4LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA2LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA2LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDgsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyB0eXBlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV2ZWxVcCgpIHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgfHwgMTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzLmxldmVsID0gbGV2ZWwgKyAxO1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLl9za2lsbFBvaW50cyA+IDAgJiYgdGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc2tpbGxQb2ludHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2lsbFBvaW50cztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlSW1hZ2UsIGhlcm9UeXBlLCBlcXVpcHBlZEl0ZW1zLCBlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgICAgdGhpcy5fZWxlbWVudGFsU2VsZWN0aW9uID0gZWxlbWVudGFsU2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IHRoaXMuZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIGdldCBzcHJpdGVJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzcHJpdGVJbWFnZShzcHJpdGVJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlcm9UeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faGVyb1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlcm9UeXBlKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHN0YXRzKHN0YXRzKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGVxdWlwcGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlcXVpcHBlZEl0ZW1zKGVxdWlwcGVkSXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudGFsQWZmaW5pdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsQWZmaW5pdHkpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IGVsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWlwSXRlbShpdGVtKSB7XHJcbiAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3IgZXF1aXBwaW5nIGFuIGl0ZW1cclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMuZXF1aXBJdGVtU3RhdHMoaXRlbS5zdGF0cyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gYXR0YWNrIGxvZ2ljXHJcbiAgICAgICAgY29uc29sZS5sb2coYEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlY2lhbEF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIHNwZWNpYWwgYXR0YWNrIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhgU3BlY2lhbCBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQmlydGhkYXlJblJhbmdlKGJpcnRoZGF5LCBzdGFydERhdGUsIGVuZERhdGUpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBiaXJ0aGRheSB0byBhIERhdGUgb2JqZWN0IGlmIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURhdGUgPSB0eXBlb2YgYmlydGhkYXkgPT09ICdzdHJpbmcnID8gbmV3IERhdGUoYmlydGhkYXkpIDogYmlydGhkYXk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXlcclxuICAgICAgICBjb25zdCBiaXJ0aGRheU1vbnRoID0gYmlydGhkYXlEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXkgPSBiaXJ0aGRheURhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXkgZmFsbCB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF5ID0gc3RhcnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBlbmREYXkgPSBlbmREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYXByaWNvcm4gZWRnZSBjYXNlXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMTEgJiYgYmlydGhkYXlEYXkgPiAyMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMCAmJiBiaXJ0aGRheURheSA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSB0aGUgbW9udGggYW5kIGRheSB2YWx1ZXNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA+IHN0YXJ0TW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IHN0YXJ0TW9udGggJiYgYmlydGhkYXlEYXkgPj0gc3RhcnREYXkpKSAmJlxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPCBlbmRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gZW5kTW9udGggJiYgYmlydGhkYXlEYXkgPD0gZW5kRGF5KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIE90aGVyIG1ldGhvZHMgY2FuIGJlIGFkZGVkIGhlcmUgZm9yIGZ1cnRoZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBnZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgLy8gaWYgZWxlbWVudGFsIHNlbGVjdGlvbiBpcyBhIGJpcnRoZGF5IHByb3ZpZGVkOlxyXG4gICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICAvLyBBbGlhcyB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgem9kaWFjIFNpZ25zIGRhdGUgcmFuZ2UgcHJvcGVydHlcclxuICAgICAgICAgICAgbGV0IGRhdGVDaGVja2VyID0gKHpvZGlhY1NpZ25zW2luZGV4XS5jb252ZXJ0RGF0ZVJhbmdlKHpvZGlhY1NpZ25zW2luZGV4XS5fZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgICAgIGxldCBiaXJ0aERheVJhbmdlQ2hlY2sgPSB0aGlzLmlzQmlydGhkYXlJblJhbmdlKGVsZW1lbnRhbFNlbGVjdGlvbiwgZGF0ZUNoZWNrZXIuc3RhcnREYXRlLCBkYXRlQ2hlY2tlci5lbmREYXRlKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYmlydGhEYXlSYW5nZUNoZWNrID09ICdDYXByaWNvcm4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zWzldKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uID09IHpvZGlhY1NpZ25zW2luZGV4XS5fdW5pcXVlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gIH1cclxuICAgICAgXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVsZW1lbnRhbFBvd2VyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIiwiaW1wb3J0IEdHVG9rZW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIlxyXG5pbXBvcnQgQ2hlc3RLZXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCJcclxuXHJcblxyXG5jb25zdCB2YWxpZEN1cnJlbmNpZXMgPSBbXCJHR1Rva2Vuc1wiLCBcIkNoZXN0S2V5c1wiXVxyXG5jb25zdCBjdXJyZW5jeUltYWdlcyA9IHtcclxuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXHJcbiAgICBDaGVzdEtleXM6IENoZXN0S2V5SW1hZ2VcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmV3YXJkVXRpbGl0aWVzID0ge1xyXG5cclxuICAgIHZhbGlkQ3VycmVuY2llczogWy4uLnZhbGlkQ3VycmVuY2llc10sXHJcbiAgICBnZXRSZXdhcmRJbWFnZTogZnVuY3Rpb24ocXVlc3QpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkVHlwZSA9IHF1ZXN0LnJld2FyZC50eXBlO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHJld2FyZFR5cGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeUltYWdlc1tyZXdhcmRUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBvciBoYW5kbGUgaW52YWxpZCByZXdhcmQgdHlwZXNcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IChjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgY3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZX1Vc2VySW50ZXJmYWNlYCk7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50UXVlc3RMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVudEdvYWxMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRHb2FsTGlzdCcpIHx8IFtdO1xyXG5leHBvcnQgbGV0IGN1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbmN5Q29udGFpbmVyJykgfHwgW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJDaGVzdEtleXNcIiwgMCldO1xyXG5leHBvcnQgbGV0IHBsYXllckludmVudG9yeSA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJJbnZlbnRvcnknKSB8fCBbXTtcclxuZXhwb3J0IGxldCBwbGF5ZXJFcXVpcHBlZEl0ZW1zID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckVxdWlwcGVkSXRlbXMnKSB8fCBbXTsiLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMsIHJlbmRlclF1ZXN0TGlzdCwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHRhc2tBbmRHb2FsQ29udHJvbGxlciwgcmVtb3ZlRW1wdHlUYXNrR29hbFByb21wdCwgY3JlYXRlVGFza0NvbnRhaW5lciwgc2hvd0VtcHR5UXVlc3RBbmRHb2Fsc0VtcHR5UXVlc3RBbmRHb2FscywgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlLCBjcmVhdGVRdWVzdFBhcmFsbGF4IH0gZnJvbSBcIi4vaW5kZXhWaWV3RnVuY3Rpb25zXCI7XHJcbi8vIGltcG9ydCB7IGN1cnJlbnRHb2FsTGlzdCwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudEdvYWxMaXN0KSB7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBhbmQgUGVyc2lzdGluZyBFdmVudHM6XHJcbiAgICAvLyAxLiBSZW5kZXIgQ3VycmVuY3kgVmFsdWVzXHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlKCk7XHJcbiAgICAgICAgY3JlYXRlUXVlc3RQYXJhbGxheCgpO1xyXG4gICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIilcclxuICAgICAgICBxdWVzdFBhcmFsbGF4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwICYmIGN1cnJlbnRHb2FsTGlzdC5sZW5ndGggPD0gMCkgeyBcclxuICAgIC8vICAgICBzaG93RW1wdHlRdWVzdEFuZEdvYWxzKCk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIC8vIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgLy8gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIC8vIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlICh3ZWFwb24pIHtcclxuLy8gICAgIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG4vLyAgICAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2Uod2VhcG9uKSB7XHJcbiAgaWYgKCF3ZWFwb24gfHwgdHlwZW9mIHdlYXBvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgLy8gSW52YWxpZCB3ZWFwb24gcGFyYW1ldGVyLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcblxyXG4gIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSB3ZWFwb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICAgIC8vIEltYWdlIG5vdCBmb3VuZCBmb3IgdGhlIGdpdmVuIHdlYXBvbiwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuLy8gICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4vLyAgICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UoYXJtb3VyKSB7XHJcbiAgaWYgKCFhcm1vdXIgfHwgdHlwZW9mIGFybW91ciAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG5cclxuICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gYXJtb3VyLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlIChyYXJpdHkpIHtcclxuLy8gICAgIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG4vLyAgICAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlIChlbGVtZW50KSB7XHJcbi8vICAgICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuLy8gICAgIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZShyYXJpdHkpIHtcclxuICBpZiAoIXJhcml0eSB8fCB0eXBlb2YgcmFyaXR5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcblxyXG4gIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSByYXJpdHkgKyBcIlJhcml0eVwiO1xyXG4gICAgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlKGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtSW1hZ2Uoc3RyaW5nKSB7XHJcblxyXG4gIGxldCBpdGVtSW1hZ2VVcmw7XHJcblxyXG4gIGlmIChzdHJpbmcudHlwZSA9PT0gXCJ3ZWFwb25cIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0V2VhcG9uSW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiYXJtb3VyXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEFybW91ckltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcInJhcml0eVwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRSYXJpdHlJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJlbGVtZW50XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEVsZW1lbnRJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbUltYWdlVXJsO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYnlzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWJ5c3MucG5nXCIsXG5cdFwiLi9hZXRoZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FldGhlci5wbmdcIixcblx0XCIuL2NvcnJvZGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2NvcnJvZGUucG5nXCIsXG5cdFwiLi9nYWlhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9nYWlhLnBuZ1wiLFxuXHRcIi4vaW5mZXJuby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvaW5mZXJuby5wbmdcIixcblx0XCIuL2x1bmFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9sdW5hci5wbmdcIixcblx0XCIuL21pc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL21pc3QucG5nXCIsXG5cdFwiLi9zb2xhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc29sYXIucG5nXCIsXG5cdFwiLi9zdGVlbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc3RlZWwucG5nXCIsXG5cdFwiLi90ZXJyYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdGVycmEucG5nXCIsXG5cdFwiLi92b2x0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy92b2x0LnBuZ1wiLFxuXHRcIi4vemVwaHlyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy96ZXBoeXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VwaWNSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2VwaWNSYXJpdHkucG5nXCIsXG5cdFwiLi9sZWdlbmRhcnlSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2xlZ2VuZGFyeVJhcml0eS5wbmdcIixcblx0XCIuL25vcm1hbFJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbm9ybWFsUmFyaXR5LnBuZ1wiLFxuXHRcIi4vcmFyZVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvcmFyZVJhcml0eS5wbmdcIixcblx0XCIuL3VuY29tbW9uUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy91bmNvbW1vblJhcml0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0FieXNzU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0dhaWFTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0dhaWFTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vSW5mZXJub1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvSW5mZXJub1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9MdW5hclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTHVuYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTWlzdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTWlzdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1NvbGFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Tb2xhclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Wb2x0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Wb2x0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1plcGh5clNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvWmVwaHlyU2hvcnRTd29yZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMgc3luYyBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbnRHb2FsTGlzdCwgY3VycmVuY3lDb250YWluZXIgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlLCBjcmVhdGVHaG9zdENhcmQgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRlbnRIZWFkZXJcIik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVF1ZXN0c1N0YXRlICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcXVlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5U3RhdGVDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5UXVlc3RDb250YWluZXJcIik7XHJcbiAgICAgICAgcXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIFF1ZXN0IHRvIGdldCBzdGFydGVkIGFuZCBjaGVjayB0aGVtIGhlcmU6XCJcclxuICAgICAgICBsZXQgcXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHF1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKVxyXG4gICAgICAgIHF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUXVlc3QgK1wiXHJcbiAgICAgICAgcXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFyZW1vdmVFbXB0eVN0YXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXB0eXN0YXRlIFJlbW92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5U3RhdGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFjcmVhdGVRdWVzdFBhcmFsbGF4KCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdFBhcmFsbGF4IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpKTtcclxuICAgICAgICAgICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgIGV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlHb2Fsc1N0YXRlICgpIHtcclxuXHJcblxyXG4gICAgICAgIGxldCBlbXB0eVN0YXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1wdHlTdGF0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGdvYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHlTdGF0ZUNvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1wdHlHb2FsQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlNldCBHb2FscyBhbmQgdHJhY2sgeW91ciBwcm9ncmVzcyBoZXJlOlwiXHJcbiAgICAgICAgbGV0IGdvYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIGdvYWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEdvYWxCdXR0b25cIilcclxuICAgICAgICBnb2FsQnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgR29hbCArXCJcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxCdXR0b24pO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSAoKSB7XHJcblxyXG4gIGNvbnN0IGVtcHR5UXVlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVN0YXRlQ29udGFpbmVyI2VtcHR5UXVlc3RDb250YWluZXJcIilcclxuICAgICAgICBpZiAoZW1wdHlRdWVzdExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbXB0eVF1ZXN0TGlzdC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVtcHR5R29hbFN0YXRlICgpIHtcclxuXHJcbiAgY29uc3QgZW1wdHlHb2FsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlTdGF0ZUNvbnRhaW5lciNlbXB0eUdvYWxDb250YWluZXJcIilcclxuICAgICAgICBpZiAoZW1wdHlHb2FsTGlzdCkge1xyXG4gICAgICAgICAgICBlbXB0eUdvYWxMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVRdWVzdFBhcmFsbGF4KCkge1xyXG5cclxuICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgdGhlIGVsZW1lbnQgYWxyZWFkeSBleGlzdHNcclxuICBpZiAocXVlc3RQYXJhbGxheCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIFJldHVybiBmYWxzZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSBlbGVtZW50IGFscmVhZHkgZXhpc3RzXHJcbiAgfVxyXG5cclxuICBsZXQgcXVlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gIHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHF1ZXN0UGFyYWxsYXguY2xhc3NMaXN0LmFkZChcInF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgcXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RQYXJhbGxheCk7XHJcblxyXG4gIHJldHVybiB0cnVlOyAvLyBSZXR1cm4gdHJ1ZSB0byBpbmRpY2F0ZSB0aGF0IHRoZSBlbGVtZW50IHdhcyBjcmVhdGVkXHJcbn1cclxuXHJcbmxldCBnb2FsUGFyYWxsYXg7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR29hbFBhcmFsbGF4KCkge1xyXG5cclxuICBpZiAoIWdvYWxQYXJhbGxheCkge1xyXG4gICAgbGV0IGdvYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb250YWluZXJcIik7XHJcbiAgICBnb2FsUGFyYWxsYXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbFBhcmFsbGF4LmNsYXNzTGlzdC5hZGQoXCJnb2FsUGFyYWxsYXhcIik7XHJcbiAgICBnb2FsQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxQYXJhbGxheCk7XHJcblxyXG4gIH1cclxuICBnb2FsUGFyYWxsYXgudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXRXZWFwb25JbWFnZSwgZ2V0QXJtb3VySW1hZ2UsIGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlXCI7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IGdlbmVyYXRlSXRlbUNhcmRNb2RhbCBmcm9tIFwiLi9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWxcIjtcclxuXHJcbmNvbnN0IGludmVudG9yeVBhZ2VQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50XCIpO1xyXG5jb25zdCBpbnZlbnRvcnlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW52ZW50b3J5UGFnZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5UGFnZVwiKVxyXG5cclxuY29uc3QgcmFyaXR5Q29sb3JzID0ge1xyXG4gICAgbm9ybWFsOiBcInJnYigyMTEsIDIxMSwgMjExLCAwLjgpXCIsXHJcbiAgICB1bmNvbW1vbjogXCJyZ2IoMCwgMTI4LCAwLCAwLjgpXCIsXHJcbiAgICByYXJlOiBcInJnYigzMCwgMzAsIDI1NSwgMC44KVwiLFxyXG4gICAgZXBpYzogXCJyZ2IoMTYwLCAzMiwgMjQwLCAwLjgpXCIsXHJcbiAgICBsZWdlbmRhcnk6IFwicmdiKDI1NSwgMTY1LCAwLjgpXCIsXHJcbiAgICB9OyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52ZW50b3J5UGFnZSAoaW52ZW50b3J5KSB7XHJcblxyXG4gICAgaW52ZW50b3J5UGFnZVBhcmVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlQYWdlKVxyXG5cclxuICAgICAgICAvLyBDb2RlIHRvIGdlbmVyYXRlIGVhY2ggaW52ZW50b3J5IHJvd1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArKykge1xyXG4gICAgICAgICAgICBsZXQgaW52ZW50b3J5SXRlbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1Sb3dcIik7XHJcbiAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGludmVudG9yeUl0ZW1Sb3ctJHtpKzF9YCk7XHJcbiAgICAgICAgICAgIGludmVudG9yeVBhZ2UuYXBwZW5kQ2hpbGQoaW52ZW50b3J5SXRlbVJvdylcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAoaSAqIDUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIENvZGUgdG8gZ2VuZXJhdGUgZWFjaCBpbmRleCBpbiBlYWNoIGludmVudG9yeSByb3dcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnZlbnRvcnlJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2NvdW50ZXIgKyBqICsgMX1gKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IChjb3VudGVyICsgailcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSXRlbUNhcmRNb2RhbChlLnRhcmdldCwgaW52ZW50b3J5W2l0ZW1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc3R5bGUuYm9yZGVyID0gXCI0cHggc29saWQgeWVsbG93XCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LmFwcGVuZENoaWxkKGludmVudG9yeUl0ZW1Db250YWluZXIpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblxyXG59XHJcblxyXG4vLyBUaGlzIGlzIHNlcGFyYXRlIGZyb20gaW52ZW50b3J5IGFuZCBvbmx5IGdlbmVyYXRlcyB0aGUgY29udGFpbmVyIGZvciBpbnZlbnRvcnkgaXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUludmVudG9yeVBhZ2UgKGludmVudG9yeSkge1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gPSAwOyBpdGVtIDwgaW52ZW50b3J5Lmxlbmd0aDsgaXRlbSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50b3J5W2l0ZW1dKTtcclxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZlbnRvcnlJdGVtJylbaXRlbV07XHJcbiAgICAgICAgbGV0IGl0ZW1TcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1TcHJpdGUuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1TcHJpdGVcIik7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtU3ByaXRlKTtcclxuICAgICAgICBsZXQgaXRlbUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UoaW52ZW50b3J5W2l0ZW1dLl90eXBlLnJlcGxhY2UoL1xccy9nLCAnJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1JbWFnZSlcclxuICAgICAgICBpdGVtU3ByaXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aXRlbUltYWdlfScpYFxyXG4gICAgICAgIGl0ZW1TcHJpdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFyaXR5Q29sb3JzW2ludmVudG9yeVtpdGVtXS5fcmFyaXR5XTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgKX07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52ZW50b3J5RXZlbnRIYW5kbGVyKGludmVudG9yeSkge1xyXG4gICAgaWYgKGludmVudG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3JlYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgICAgIHVwZGF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2Uoa2V5LCBkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBKU09OIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UgZm9yIGtleSAnJHtrZXl9JzpgLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBnZXRXZWFwb25JbWFnZSwgZ2V0QXJtb3VySW1hZ2UsIGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UgfSBmcm9tIFwiLi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5pbXBvcnQgeyBjYWxjV2VhcG9uU2NvcmUgfSBmcm9tIFwiLi4vcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zXCI7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlSW52ZW50b3J5TW9kYWwoZSkge1xyXG4gICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIFxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2FyZE1vZGFsKGUsIGl0ZW0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYWxjV2VhcG9uU2NvcmUoaXRlbSkpXHJcbiAgICAgICAgXHJcbmNvbnN0IHJhcml0eUNvbG9ycyA9IHtcclxuICAgIG5vcm1hbDogXCJyZ2IoMjExLCAyMTEsIDIxMSlcIixcclxuICAgIHVuY29tbW9uOiBcInJnYigwLCAxMjgsIDApXCIsXHJcbiAgICByYXJlOiBcInJnYigzMCwgMzAsIDI1NSlcIixcclxuICAgIGVwaWM6IFwicmdiKDE2MCwgMzIsIDI0MClcIixcclxuICAgIGxlZ2VuZGFyeTogXCJyZ2IoMjU1LCAxNjUsIDApXCIsXHJcbiAgICB9O1xyXG5cclxuY29uc3QgaXRlbVN0YXRzVG9wSGFsZiA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVsZW1lbnRcIixcclxuICAgICAgICBpZDogXCJlbGVtZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX2VsZW1lbnQsXHJcbiAgICAgICAgaWNvbjogZ2V0RWxlbWVudEltYWdlKGl0ZW0uX2VsZW1lbnQpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmFyaXR5XCIsXHJcbiAgICAgICAgaWQ6IFwicmFyaXR5XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3Jhcml0eVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhlcm8gU2NvcmVcIixcclxuICAgICAgICBpZDogXCJoZXJvU2NvcmVcIixcclxuICAgICAgICB2YWx1ZTogY2FsY1dlYXBvblNjb3JlKGl0ZW0pXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IGl0ZW1TdGF0c0JvdHRvbUhhbGY9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkl0ZW0gVHlwZVwiLFxyXG4gICAgICAgIGlkOiBcIml0ZW1UeXBlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3R5cGVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXZWFwb24gRGFtYWdlXCIsXHJcbiAgICAgICAgaWQ6IFwiZGFtYWdlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmRhbWFnZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNyaXRpY2FsIENoYW5jZVwiLFxyXG4gICAgICAgIGlkOiBcImNyaXRDaGFuY2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY3JpdENoYW5jZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNyaXRpY2FsIERhbWFnZVwiLFxyXG4gICAgICAgIGlkOiBcImNyaXREYW1hZ2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY3JpdERhbWFnZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvbnN0aXR1dGlvblwiLFxyXG4gICAgICAgIGlkOiBcImNvbnN0aXR1dGlvblwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jb25zdGl0dXRpb25cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEZXh0ZXJpdHlcIixcclxuICAgICAgICBpZDogXCJkZXh0ZXJpdHlcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuZGV4dGVyaXR5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSW50ZWxsaWdlbmNlXCIsXHJcbiAgICAgICAgaWQ6IFwiaW50ZWxsaWdlbmNlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmludGVsbGlnZW5jZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN0cmVuZ3RoXCIsXHJcbiAgICAgICAgaWQ6IFwic3RyZW5ndGhcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuc3RyZW5ndGhcclxuICAgIH1cclxuICAgIF07XHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuICAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsXCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZENvbnRlbnRcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRUb3BIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFRvcEhhbGZcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkQm90dG9tSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkQm90dG9tSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRCb3R0b21IYWxmXCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdCBvZiBpdGVtU3RhdHNCb3R0b21IYWxmKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuaWQgPSBzdGF0LmlkO1xyXG4gICAgICAgIC8vIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0LnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGl0ZW1DYXJkQm90dG9tSGFsZi5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXIpXHJcbiAgICAgICAgY29uc3Qgc3RhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0TmFtZS5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIiA6XFx1MDBBMFwiXHJcbiAgICAgICAgc3RhdE5hbWUuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBzdGF0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gKHN0YXQudmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXROYW1lKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaXRlbUNhcmRCb3R0b21IYWxmLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLWltYWdlLWNvbnRhaW5lclwiKVxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1pbWFnZVwiKTtcclxuICAgICAgbGV0IGl0ZW1JbWFnZSA9IGUuc3R5bGUuYmFja2dyb3VuZEltYWdlO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpdGVtSW1hZ2U7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbUltYWdlKTtcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0tc3RhdHNcIik7XHJcbiAgICBcclxuICAgICAgLy8gY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIC8vIGVsZW1lbnRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2V9JylgXHJcbiAgICAgIC8vIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQ29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdCBvZiBpdGVtU3RhdHNUb3BIYWxmKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5pZCA9IHN0YXQuaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0TmFtZS5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIjpcXHUwMEEwXCI7XHJcbiAgICAgICAgc3RhdE5hbWUuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWYgKHN0YXQubmFtZSA9PSBcIlJhcml0eVwiKSB7XHJcbiAgICAgICAgICBsZXQgcmFyaXR5TmFtZSA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzdGF0LnZhbHVlKVxyXG4gICAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IHJhcml0eU5hbWU7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuY29sb3IgPSByYXJpdHlDb2xvcnNbaXRlbS5fcmFyaXR5XTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5mb250V2VpZ2h0ID0gODAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdC5uYW1lID09IFwiSGVybyBTY29yZVwiKSB7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gXCIrXCIgKyBzdGF0LnZhbHVlO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmZvbnRTaXplID0gXCIzMnB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zcmMgPSBzdGF0Lmljb247XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiOyAvLyBBbGlnbiB0aGUgaW1hZ2UgdmVydGljYWxseSBpbiBsaW5lIHdpdGggdGhlIHRleHRcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiOyAvLyBBZGQgbWFyZ2luIGJldHdlZW4gdGhlIHRleHQgYW5kIGltYWdlXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAvLyBFbmFibGUgZmxleGJveCBsYXlvdXRcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7IC8vIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgaW4gdGhlIGNlbnRlclxyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdGF0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRJY29uKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0VmFsdWUuYXBwZW5kQ2hpbGQodmFsdWVDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuYXBwZW5kQ2hpbGQoc3RhdE5hbWUpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuYXBwZW5kQ2hpbGQoc3RhdFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZik7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktY2xvc2VcIik7XHJcbiAgICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xyXG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGhpZGVJbnZlbnRvcnlNb2RhbChlKSBcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJNb2RhbCBUaXRsZVwiO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsQ29udGVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyB0aGUgaW52ZW50b3J5IG1vZGFsIGNvbnRlbnQuXCI7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsVGl0bGUpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRDb250ZW50KTtcclxuICAgIFxyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRUb3BIYWxmKTtcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkQm90dG9tSGFsZik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lcik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cyk7XHJcbiAgICBcclxuICAgICAgLy8gaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsQ29udGVudFRleHQpO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsQ29udGVudCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWwpO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiBpbnZlbnRvcnlNb2RhbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsKGUsIGludmVudG9yeSkge1xyXG4gICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBjcmVhdGVJdGVtQ2FyZE1vZGFsKGUsIGludmVudG9yeSk7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gY2FsY0hlcm9TY29yZSAocGxheWVyQ2hhcmFjdGVyKSB7XHJcbiAgICBsZXQgaGVyb1Njb3JlID0gMDtcclxuXHJcbiAgICAvLyBCYXNlIHN0YXRzIGNhbGNcclxuICAgIGxldCBpbmhlcmVudFN0cmVuZ3RoID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwic3RyZW5ndGhcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRJbnRlbGxpZ2VuY2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJpbnRlbGxpZ2VuY2VcIik7XHJcbiAgICBsZXQgaW5oZXJlbnREZXh0ZXJpdHkgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJkZXh0ZXJpdHlcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRDb25zdGl0dXRpb24gPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJjb25zdGl0dXRpb25cIik7XHJcblxyXG4gICAgLy8gV2VhcG9uIFN0YXRzIENhbGNcclxuICAgIGxldCB3ZWFwb25TdHJlbmd0aCA9IDA7XHJcbiAgICBsZXQgd2VhcG9uSW50ZWxsaWdlbmNlID0gMDtcclxuICAgIGxldCB3ZWFwb25EZXh0ZXJpdHkgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IDA7XHJcbiAgICBsZXQgZXF1aXBtZW50U3RhdCA9IDA7XHJcbiAgIFxyXG4gICAgZm9yIChsZXQgd2VhcG9uSW5kZXggPSAwOyB3ZWFwb25JbmRleCA8IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtcy5sZW5ndGg7IHdlYXBvbkluZGV4KyspIHtcclxuICAgICAgICB3ZWFwb25TdHJlbmd0aCArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5zdHJlbmd0aDtcclxuICAgICAgICB3ZWFwb25JbnRlbGxpZ2VuY2UgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgICAgIHdlYXBvbkRleHRlcml0eSArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kZXh0ZXJpdHk7XHJcbiAgICAgICAgd2VhcG9uQ29uc3RpdHV0aW9uICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNvbnN0aXR1dGlvbjtcclxuICAgICAgICBsZXQgd2VhcG9uQ3JpdENoYW5jZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNyaXRDaGFuY2U7XHJcbiAgICAgICAgbGV0IHdlYXBvbkNyaXREYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jcml0RGFtYWdlO1xyXG4gICAgICAgIGxldCB3ZWFwb25EYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kYW1hZ2U7XHJcbiAgICAgICAgZXF1aXBtZW50U3RhdCArPSAod2VhcG9uRGFtYWdlICsgKHdlYXBvbkRhbWFnZSAqIHdlYXBvbkNyaXRDaGFuY2UgKiB3ZWFwb25Dcml0RGFtYWdlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFRvdGFsIFN0YXRzXHJcblxyXG4gICAgbGV0IHRvdGFsU3RyZW5ndGggPSBpbmhlcmVudFN0cmVuZ3RoICsgd2VhcG9uU3RyZW5ndGg7XHJcbiAgICBsZXQgdG90YWxJbnRlbGxpZ2VuY2UgPSBpbmhlcmVudEludGVsbGlnZW5jZSArIHdlYXBvbkludGVsbGlnZW5jZTtcclxuICAgIGxldCB0b3RhbERleHRlcml0eSA9IGluaGVyZW50RGV4dGVyaXR5ICsgd2VhcG9uRGV4dGVyaXR5O1xyXG4gICAgbGV0IHRvdGFsQ29uc3RpdHV0aW9uID0gaW5oZXJlbnRDb25zdGl0dXRpb24gKyB3ZWFwb25Db25zdGl0dXRpb247XHJcblxyXG4gICAgc3dpdGNoKHBsYXllckNoYXJhY3Rlci5oZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHRvdGFsU3RyZW5ndGggKj0gMjtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgdG90YWxJbnRlbGxpZ2VuY2UgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgdG90YWxEZXh0ZXJpdHkgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICAgIHRvdGFsQ29uc3RpdHV0aW9uICo9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyb1Njb3JlICs9ICh0b3RhbFN0cmVuZ3RoICsgdG90YWxJbnRlbGxpZ2VuY2UgKyB0b3RhbERleHRlcml0eSArIHRvdGFsQ29uc3RpdHV0aW9uICsgZXF1aXBtZW50U3RhdClcclxuXHJcblxyXG5cclxuICAgIHJldHVybiBoZXJvU2NvcmUudG9GaXhlZCgyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNXZWFwb25TY29yZSAod2VhcG9uKSB7XHJcbiAgICBcclxuICAgIGxldCB0b3RhbFdlYXBvblNjb3JlID0gMDsgXHJcblxyXG4gICAgbGV0IHdlYXBvblN0cmVuZ3RoID0gMDtcclxuICAgIGxldCB3ZWFwb25JbnRlbGxpZ2VuY2UgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkRleHRlcml0eSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uQ29uc3RpdHV0aW9uID0gMDtcclxuICAgIGxldCBlcXVpcG1lbnRTdGF0ID0gMDtcclxuXHJcbiAgICBcclxuICAgIHdlYXBvblN0cmVuZ3RoICs9IHdlYXBvbi5fc3RhdHMuc3RyZW5ndGg7XHJcbiAgICB3ZWFwb25JbnRlbGxpZ2VuY2UgKz0gd2VhcG9uLl9zdGF0cy5pbnRlbGxpZ2VuY2U7XHJcbiAgICB3ZWFwb25EZXh0ZXJpdHkgKz0gd2VhcG9uLl9zdGF0cy5kZXh0ZXJpdHk7XHJcbiAgICB3ZWFwb25Db25zdGl0dXRpb24gKz0gd2VhcG9uLl9zdGF0cy5jb25zdGl0dXRpb247XHJcbiAgICBsZXQgd2VhcG9uQ3JpdENoYW5jZSA9IHdlYXBvbi5fc3RhdHMuY3JpdENoYW5jZTtcclxuICAgIGxldCB3ZWFwb25Dcml0RGFtYWdlID0gd2VhcG9uLl9zdGF0cy5jcml0RGFtYWdlO1xyXG4gICAgbGV0IHdlYXBvbkRhbWFnZSA9IHdlYXBvbi5fc3RhdHMuZGFtYWdlO1xyXG4gICAgZXF1aXBtZW50U3RhdCArPSAod2VhcG9uRGFtYWdlICsgKHdlYXBvbkRhbWFnZSAqIHdlYXBvbkNyaXRDaGFuY2UgKiB3ZWFwb25Dcml0RGFtYWdlKSk7XHJcblxyXG4gICAgdG90YWxXZWFwb25TY29yZSA9ICh3ZWFwb25TdHJlbmd0aCArIHdlYXBvbkludGVsbGlnZW5jZSArIHdlYXBvbkRleHRlcml0eSArIHdlYXBvbkNvbnN0aXR1dGlvbiArIGVxdWlwbWVudFN0YXQpXHJcblxyXG4gICAgcmV0dXJuIHRvdGFsV2VhcG9uU2NvcmUudG9GaXhlZCgyKTtcclxuXHJcbn1cclxuICAgIFxyXG4iLCJpbXBvcnQgeyBRdWVzdCwgQ3VycmVuY3kgfSBmcm9tICcuL2NsYXNzZXMvY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IsIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVRdWVzdFBhcmFsbGF4LCBjcmVhdGVRdWVzdENvbnRhaW5lciwgcXVlc3RDb250cm9sbGVyLCByZW1vdmVFbXB0eVN0YXRlLCBzaG93RW1wdHlRdWVzdHNTdGF0ZSB9IGZyb20gJy4vaW5kZXhWaWV3RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKGNhcmQpIHtcclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBuZXcgQ3VycmVuY3kobnVsbCwgbnVsbCksIG51bGwsIG51bGwsIG51bGwpXHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI29iamVjdGl2ZVRleHRJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0RGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW5jeVR5cGVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbmN5QW1vdW50SW5wdXRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBwYXJzZUludChnZXRRdWVzdEN1cnJlbmN5QW1vdW50KTtcclxuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcclxuICAgIHF1ZXN0T2JqZWN0Lm9uZU9mZkJvb2wgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LmdvYWxJZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVF1ZXN0U3VibWlzc2lvbiAobmV3UXVlc3QpIHtcclxuICAgIFxyXG4gICAgbGV0IHZhbGlkQ3JpdGVyaWEgPSB0cnVlO1xyXG5cclxuICAgIGlmICghbmV3UXVlc3Qub2JqZWN0aXZlKSB7XHJcbiAgICAgICAgYWxlcnQoXCJRdWVzdCBPYmplY3RpdmUgUmVxdWlyZWQhXCIpXHJcbiAgICAgICAgdmFsaWRDcml0ZXJpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbmV3UXVlc3QuZGF0ZVRvQ29tcGxldGUpIHtcclxuICAgICAgICBhbGVydChcIkludmFsaWQgRGF0ZSFcIilcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW52YWxpZCBDdXJyZW5jeSBBbW91bnQ6XHJcbiAgICBpZiAoIW5ld1F1ZXN0LnJld2FyZC5hbW91bnQpIHtcclxuICAgICAgICBhbGVydChcIkN1cnJlbmN5IEFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIVwiKTtcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB2YWxpZENyaXRlcmlhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2hvc3RDYXJkKCkge1xyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2hvc3RDYXJkXCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5ld1F1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IG1ha2UgYSBuZXcgcXVlc3QgdW50aWwgeW91IGhhdmUgc3VibWl0dGVkIHlvdXIgZmlyc3QgcXVlc3QgT1IgeW91ciBjdXJyZW50IHF1ZXN0IGxpc3QgaXMgZ3JlYXRlciB0aGFuIDAhXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgbGV0IGdob3N0Q2FyZCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBsZXQgbmV3UXVlc3RDYXJkID0gY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKTtcclxuICAgICAgICBxdWVzdFBhcmFsbGF4Lmluc2VydEJlZm9yZShuZXdRdWVzdENhcmQsIGdob3N0Q2FyZCk7XHJcbiAgICB9KTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIFF1ZXN0ICtcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UXVlc3RCdXR0b24pO1xyXG5cclxuICAgIC8vIEFkZCBob3ZlciBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIG9wYWNpdHlcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImVtcHR5Q2FyZFwiKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eUNhcmRDb250ZW50XCIpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG4gICAgLy8gMS4gU3VibWl0IGJ1dHRvbiBDT05UQUlORVIgY29udGVudFxyXG4gICAgbGV0IHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAxYSkgU3VibWl0IE5ldyBRdWVzdCBCdXR0b25cclxuICAgICAgICBjb25zdCBzdW1iaXROZXdRdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdE5ld1F1ZXN0QnV0dG9uXCIpO1xyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICAgICAgbGV0IHggPSBnZXROZXdRdWVzdChjYXJkKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlUXVlc3RTdWJtaXNzaW9uKHgpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RQYXJhbGxheC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bWJpdE5ld1F1ZXN0QnV0dG9uKTtcclxuXHJcblxyXG4gICAgLy8gMi4gT2JqZWN0aXZlIENPTlRBSU5FUiBjb250ZW50IC0gaW5jbHVkZXMgdXNlciBvYmplY3RpdmUgdGV4dHVhbCBpbnB1dCBhbmQgdGltZSBpbnB1dHNcclxuICAgIGxldCBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZUNvbnRlbnRDb250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVDb250ZW50Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAyYSkgT2JqZWN0aXZlIFRleHQgSW5wdXQgQ29udGFpbmVyXHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXJcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICAvLyAyYSkgLSBPYmplY3RpdmUgVGV4dCBcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZWZpbmUgeW91ciBxdWVzdCBoZXJlLi4uXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiNzBcIik7IC8vIFNldCBjaGFyYWN0ZXIgbGltaXQgdG8gNzBcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib2JqZWN0aXZlVGV4dElucHV0XCIpOyBcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHRJbnB1dCk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgLy8gMmIpIE9iamVjdGl2ZSBUaW1lZnJhbWUgRWxlbWVudHMgQ29udGFpbmVyXHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXJcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lcilcclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpKSBPYmplY3RpdmUgVGltZWZyYW1lIExhYmVsIENvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaSkgMS4gLSBJbnB1dCBEYXRlIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXREYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0RGF0ZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERhdGVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIDJiKSBpKSAyLiAtIElucHV0IFN0YXJ0IFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0U3RhcnRUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdFN0YXJ0VGltZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0U3RhcnRUaW1lTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0U3RhcnRUaW1lTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhcnQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFN0YXJ0VGltZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgMmIpIGkpIDMuIC0gSW5wdXQgRW5kIFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0RW5kVGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RW5kVGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0RW5kVGltZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdEVuZFRpbWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwudGV4dENvbnRlbnQgPSAnRW5kIFRpbWUgKE9wdGlvbmFsKTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbmRUaW1lTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFRpbWVUeXBlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0VGltZVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0VGltZVR5cGVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgU3BlbnQgVHlwZTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RUaW1lVHlwZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RUaW1lVmFsdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0VGltZVZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RUaW1lVmFsdWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVmFsdWVMYWJlbC50ZXh0Q29udGVudCA9ICdUaW1lIFNwZW50IFZhbHVlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFRpbWVWYWx1ZUxhYmVsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAyYikgaWkpIE9iamVjdGl2ZSBUaW1lZnJhbWUgSW5wdXQgQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIG9iamVjdGl2ZSB0aW1lIGZyYW1lIGlucHV0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5pZCA9ICdxdWVzdERhdGUnO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIG1pbmltdW0gZGF0ZSB0byB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIHN0YXJ0IHRpbWUgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RTdGFydFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LmlkID0gJ3F1ZXN0U3RhcnRUaW1lJztcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0VGltZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIGVuZCB0aW1lIGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0RW5kVGltZScpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LmlkID0gJ3F1ZXN0RW5kVGltZSc7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVGltZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgdGltZSBzcGVudCB1bml0IHNlbGVjdCBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVNwZW50VHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0VGltZVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5pZCA9ICdxdWVzdFRpbWVUeXBlJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gMTogSG91cnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBob3Vyc09wdGlvbi52YWx1ZSA9ICdob3Vycyc7XHJcbiAgICAgICAgICAgICAgICBob3Vyc09wdGlvbi50ZXh0Q29udGVudCA9ICdIb3Vycyc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQoaG91cnNPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAyOiBNaW51dGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzT3B0aW9uLnZhbHVlID0gJ21pbnV0ZXMnO1xyXG4gICAgICAgICAgICAgICAgbWludXRlc09wdGlvbi50ZXh0Q29udGVudCA9ICdNaW51dGVzJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChtaW51dGVzT3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gMzogTm8gc3BlY2lmaWMgdGltZWZyYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbGV4aWJsZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgZmxleGlibGVPcHRpb24udmFsdWUgPSAnZmxleGlibGUnO1xyXG4gICAgICAgICAgICAgICAgZmxleGlibGVPcHRpb24udGV4dENvbnRlbnQgPSAnRmxleGlibGUnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFwcGVuZENoaWxkKGZsZXhpYmxlT3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50VHlwZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIHRpbWUgc3BlbnQgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVTcGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdFRpbWVWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuaWQgPSAncXVlc3RUaW1lVmFsdWUnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5taW4gPSAxOyAvLyBTZXQgdGhlIG1pbmltdW0gdmFsdWUgdG8gMFxyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7IC8vIERpc2FibGUgYXV0b2NvbXBsZXRlIGZvciBudW1lcmljIGlucHV0XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50SW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBkaXNhYmxlIHRpbWVTcGVudElucHV0IHdoZW4gXCJGbGV4aWJsZVwiIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aW1lU3BlbnRUeXBlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuZGlzYWJsZWQgPSAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2ZsZXhpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdmbGV4aWJsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC52YWx1ZSA9ICcnOyAvLyBDbGVhciB0aGUgdmFsdWUgaWYgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHZhbGlkYXRlIHRoZSBpbnB1dCBhcyBhIHBvc2l0aXZlIGludGVnZXJcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aW1lU3BlbnRJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTsgLy8gUmVtb3ZlIGFsbCBub24tbnVtZXJpYyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQudmFsdWUgPSBudW1lcmljVmFsdWU7IC8vIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUgdG8gbnVtZXJpYy1vbmx5IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudElucHV0KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIDMuIFJld2FyZCBDT05UQUlORVIgY29udGVudCAtIGluY2x1ZGVzIHVzZXIgcmV3YXJkIHR5cGUgaW5wdXQgYW5kIHJld2FyZCBhbW91bnQgaW5wdXRcclxuICAgIGxldCByZXdhcmRTZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRTZWxlY3Rpb25Db250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZXdhcmRTZWxlY3Rpb25Db250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDNhKSBSZXdhcmQgQm94IFBhcmVudCBFbGVtZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hJbnB1dFwiKTtcclxuICAgICAgICByZXdhcmRTZWxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDNhKSAtIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgICAgICAgICBcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG5cclxuICAgICAgICAgICAgLy8gM2EpIC0gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIElucHV0cyAtIEN1cnJlbmN5IFR5cGVcclxuICAgICAgICBsZXQgcmV3YXJkVHlwZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkTGFiZWxcIik7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgVHlwZSc7XHJcbiAgICAgICAgbGV0IHJld2FyZFR5cGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInJld2FyZFR5cGVJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbmN5VHlwZUlucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZFR5cGVJbnB1dExhYmVsKTtcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkVHlwZUlucHV0KTtcclxuIFxyXG5cclxuICAgICAgICAvLyBSZXdhcmQgVHlwZSAtIE9wdGlvbnMgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSByZXdhcmQgdXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llcyBvYmplY3QgbGlzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKVxyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXNbaV0pO1xyXG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldfWA7XHJcbiAgICAgICAgICAgIHJld2FyZFR5cGVJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIElucHV0cyAtIEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgIGxldCByZXdhcmRBbW91bnRJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkTGFiZWxcIik7XHJcbiAgICAgICAgbGV0IHJld2FyZEFtb3VudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdDdXJyZW5jeSBBbW91bnQnO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZEZvcm1cIik7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZXdhcmRBbW91bnRJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIxMDAwMFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMFwiKTtcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbmN5QW1vdW50SW5wdXRcIilcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQW1vdW50SW5wdXRMYWJlbCk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEFtb3VudElucHV0KTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIEFtb3VudCAtIENvbnN0cmFpbnQgdG8gZml0IGF2YWlsYWJsZSBjdXJyZW5jeSBhbGxvY2F0aW9uXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA+IDEwMDAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyB2YWx1ZSBjYW5ub3QgZXhjZWVkIHRoZSBtYXhpbXVtIG9mOiAxMDAwMFwiKVxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyA0LiBSZW1vdmUgY3VycmVudCBjYXJkIGNvbnRhaW5lclxyXG4gICAgbGV0IHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyA0YSkgQ2xvc2UgQnV0dG9uXHJcbiAgICAgICAgbGV0IHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b25cIilcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi50ZXh0Q29udGVudCA9ICdcXHUwMEQ3JzsgLy8gU2V0IHRoZSBtdWx0aXBsaWNhdGlvbiBzaWduIGFzIHRleHQgY29udGVudFxyXG5cclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIilcclxuICAgICAgICAgICAgICAgIGxldCBnaG9zdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdob3N0Q2FyZFwiKTtcclxuICAgICAgICAgICAgICAgIGdob3N0Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0UGFyYWxsYXgucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93RW1wdHlRdWVzdHNTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbilcclxuXHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZFRlbXBsYXRlICh0eXBlKSB7XHJcbiBcclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuXHJcbiAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICBsZXQgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBvYmplY3RpdmVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZUNvbnRlbnRcIilcclxuXHJcbiAgICBsZXQgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVUZXh0LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUZXh0XCIpO1xyXG4gICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVUaW1lRnJhbWUuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZVwiKTtcclxuXHJcbiAgICAvLyAgQ2hlY2sgQm94XHJcbiAgICBsZXQgY29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgLy8gY29tcGxldGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJUcnVlXCIpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChjb21wbGV0ZUNoZWNrYm94KTtcclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmplY3RpdmVDb250ZW50KTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dClcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lKVxyXG4gICBcclxuXHJcbiAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgbGV0IHJld2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuXHJcbiAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAgICAgICAgIFxyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG5cclxuICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICBpZiAodHlwZSA9PSBcInF1ZXN0XCIpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBvYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcImNhcmRDb250ZW50XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTsgICAgICAgXHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IFwiZ29hbFwiKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZ29hbENhcmRcIilcclxuICAgICAgICBvYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcImdvYWxPYmplY3RpdmVcIik7XHJcbiAgICAgICAgY29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdvYWxDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJNYXJrIEdvYWwgQ29tcGxldGVcIjtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVcIik7ICAgICAgIFxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcImdvYWxSZXdhcmRBbW91bnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gbnVsbCB8fCB0eXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBUeXBlIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheWNhcmRDb250ZW50IChxdWVzdCwgY2FyZEVsZW1lbnQsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZVRleHRcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuaW5uZXJUZXh0ID0gcXVlc3Qub2JqZWN0aXZlO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3F1ZXN0Lm9iamVjdGl2ZX1gKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBxdWVzdC5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlc3QpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHF1ZXN0KTtcclxuICAgICAgICAgICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KVxyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVuY3lDb250YWluZXJcIiwgY3VycmVuY3lDb250YWluZXIpXHJcbiAgICAgICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBnaG9zdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdob3N0Q2FyZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3RDYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RQYXJhbGxheC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHNob3dFbXB0eVF1ZXN0c1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSBcclxuICAgICAgICBcclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlVGltZUZyYW1lXCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtxdWVzdC5kYXRlVG9Db21wbGV0ZX1gKVxyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke3F1ZXN0fS1yZXdhcmRgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UocXVlc3QpKVxyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKHF1ZXN0KSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LnJld2FyZC5hbW91bnR9ICR7cXVlc3QucmV3YXJkLnR5cGV9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlHb2FsQ2FyZENvbnRlbnQgKGdvYWwsIGNhcmRFbGVtZW50LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIC8vR29hbCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IGdvYWxPYmplY3RpdmUgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDYXJkVGV4dFwiKTtcclxuICAgIGdvYWxPYmplY3RpdmUuaW5uZXJUZXh0ID0gZ29hbC5vYmplY3RpdmU7XHJcbiAgICBnb2FsT2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2dvYWwub2JqZWN0aXZlfWApXHJcblxyXG4gICAgbGV0IGNoZWNrYm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29tcGxldGVDaGVja2JveFwiKTtcclxuICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBnb2FsKTtcclxuICAgICAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYm94IGVsZW1lbnQgbm90IGZvdW5kIGluIHRoZSBjYXJkXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlVG9Db21wbGV0ZUJveFwiKTtcclxuICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBnb2FsQ2FyZC0ke2dvYWwuZGF0ZVRvQ29tcGxldGV9YClcclxuICAgIGRhdGVUb0NvbXBsZXRlQm94LnRleHRDb250ZW50ID0gKGAke2dvYWwuZGF0ZVRvQ29tcGxldGV9YCk7XHJcblxyXG4gICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgIGxldCByZXdhcmRCb3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJld2FyZEJveFwiKTtcclxuICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZ29hbENhcmQtJHtnb2FsfS1yZXdhcmRgKTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShnb2FsKSlcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKTsgICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2dvYWwucmV3YXJkLmFtb3VudH0gJHtnb2FsLnJld2FyZC50eXBlfWApO1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclF1ZXN0TGlzdCAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3QgTGlzdCBpcyBFbXB0eVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHF1ZXN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICBxdWVzdExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkVGVtcGxhdGUoXCJxdWVzdFwiKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3QtJHtpfWApO1xyXG4gICAgICAgICAgICBkaXNwbGF5Y2FyZENvbnRlbnQoY3VycmVudFF1ZXN0TGlzdFtpXSwgY2FyZCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICBxdWVzdExpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiY2xhc3MgWm9kaWFjU2lnbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xyXG4gICAgICAvLyBTcGxpdCB0aGUgZGF0ZSByYW5nZSBzdHJpbmcgaW50byBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgICAgIGNvbnN0IFtzdGFydFN0ciwgZW5kU3RyXSA9IGRhdGVSYW5nZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBcclxuICAgICAgLy8gUGFyc2UgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdXNpbmcgdGhlIERhdGUgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRTdHIpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcclxuICAgIFxyXG4gICAgICAvLyBBZGp1c3QgdGhlIHllYXIgb2YgdGhlIGVuZCBkYXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIGVuZERhdGUuc2V0RnVsbFllYXIoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBhbiBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3RhcnREYXRlLCBlbmREYXRlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcmllc1wiLFxyXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU3RlZWxcIixcclxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJUYXVydXNcIixcclxuICAgICAgXCJBcHJpbCAyMCAtIE1heSAyMFwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJIYWRlcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJHZW1pbmlcIixcclxuICAgICAgXCJNYXkgMjEgLSBKdW5lIDIwXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiWmVwaHlyXCIsXHJcbiAgICAgIFwiSXphbmFtaS9JemFuYWdpLCB0aGUgR29kcy9Hb2RkZXNzZXMgb2YgQ3JlYXRpb24gYW5kIERlYXRoIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhbmNlclwiLFxyXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJMdW5hclwiLFxyXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMZW9cIixcclxuICAgICAgXCJKdWx5IDIzIC0gQXVndXN0IDIyXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlNvbGFyXCIsXHJcbiAgICAgIFwiUmEsIHRoZSBHb2Qgb2YgdGhlIFN1biAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJWaXJnb1wiLFxyXG4gICAgICBcIkF1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMlwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiVGVycmFcIixcclxuICAgICAgXCJPc2lyaXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGlicmFcIixcclxuICAgICAgXCJTZXB0ZW1iZXIgMjMgLSBPY3RvYmVyIDIyXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiQWV0aGVyXCIsXHJcbiAgICAgIFwiSG9ydXMsIHRoZSBHb2Qgb2YgdGhlIFNreSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTY29ycGlvXCIsXHJcbiAgICAgIFwiT2N0b2JlciAyMyAtIE5vdmVtYmVyIDIxXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJDb3Jyb2RlXCIsXHJcbiAgICAgIFwiUG9zZWlkb24sIHRoZSBHb2Qgb2YgdGhlIFNlYSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTYWdpdHRhcml1c1wiLFxyXG4gICAgICBcIk5vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjFcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiSW5mZXJub1wiLFxyXG4gICAgICBcIkFtYXRlcmFzdSwgdGhlIEdvZGRlc3Mgb2YgdGhlIFN1biAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYXByaWNvcm5cIixcclxuICAgICAgXCJEZWNlbWJlciAyMiAtIEphbnVhcnkgMTlcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkdhaWFcIixcclxuICAgICAgXCJJc2lzLCB0aGUgR29kZGVzcyBvZiBNYWdpYyBhbmQgTGlmZSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcXVhcml1c1wiLFxyXG4gICAgICBcIkphbnVhcnkgMjAgLSBGZWJydWFyeSAxOFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlZvbHRcIixcclxuICAgICAgXCJaZXVzLCB0aGUgR29kIG9mIFRodW5kZXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiUGlzY2VzXCIsXHJcbiAgICAgIFwiRmVicnVhcnkgMTkgLSBNYXJjaCAyMFwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTWlzdFwiLFxyXG4gICAgICBcIlN1c2Fub28sIHRoZSBHb2Qgb2YgdGhlIFNlYSBhbmQgU3Rvcm1zIChKYXBhbmVzZSlcIlxyXG4gICAgKVxyXG4gIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB6b2RpYWNTaWduczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHtpbnZlbnRvcnlFdmVudEhhbmRsZXJ9ICBmcm9tICcuL2ludmVudG9yeUZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zJztcclxuaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQge2N1cnJlbmN5Q29udGFpbmVyLCBwbGF5ZXJJbnZlbnRvcnksIHBsYXllckVxdWlwcGVkSXRlbXMgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5cclxuXHJcbmludmVudG9yeUV2ZW50SGFuZGxlcihwbGF5ZXJJbnZlbnRvcnkpO1xyXG5cclxuZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9