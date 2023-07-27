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

  generateQuestCluster(questObjective) {
    
  }

  generateQuest(questObjective) {

    let questObject = new Quest(null, null, null, null, null, null, null, null);

    // let quest = new Quest("Go to Gym", null, false, new Currency("GGTokens", 18), null, null, null, null)
    // this.quests.push(quest);
    // Case 1: Frequency type is time-arbitrary
     if (this.totalTimeRequired == 0 || this.totalTimeRequired == null) {
        const remainingTime = this.timesPerWeekRequired - this.timesPerWeekSpent;
        return {quest, timesPerWeekRequired, remainingTime};
     }


    // Case 2: Frequency type is time-specific
    else {
      const remainingTime = this.totalTimeRequired - this.totalTimeSpent;
        questObject.objective = questObjective;
        questObject.dateToComplete = null;
        questObject.questComplete = false;
        questObject.reward = (this.reward.amount / this.timesPerWeekRequired);
        questObject.id = null;
        questObject.oneOffBool = null;
        questObject.goalId = null;
        questObject.timeSpent = (remainingTime / this.timesPerWeekRequired);
    }

    return questObject;
    
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

/***/ "./src/classes/itemStats.js":
/*!**********************************!*\
  !*** ./src/classes/itemStats.js ***!
  \**********************************/
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
/* harmony import */ var _helperFunctions_imageHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helperFunctions/imageHandler */ "./src/helperFunctions/imageHandler.js");
/* harmony import */ var _helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions/getItemImage */ "./src/helperFunctions/getItemImage.js");




const weaponImages = (0,_helperFunctions_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/weapons sync \\.(png)$")
  );
  
  const armourImages = (0,_helperFunctions_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/armour sync \\.(png)$")
  );
  
  const elementImages = (0,_helperFunctions_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
    __webpack_require__("./src/images/elements sync \\.(png)$")
  );
  
  const rarityImages = (0,_helperFunctions_imageHandler__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
   let resultingType = generatedWeapon._type;
   let resultingRarity = generatedWeapon._rarity;
   let resultingElement = generatedWeapon._element;

   // Pass the data to a find function that locates the checks each image (string) URL to see if it includes the parsed data   
   // If data matches, return the appropriate image link as variable 
   let selectedTypeImage = (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getWeaponImage)(resultingType);
   let selectedRarityImage = (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getRarityImage)(resultingRarity);
   let selectedElementImage = (0,_helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_2__.getElementImage)(resultingElement);
   
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

/***/ "./src/generateForm.js":
/*!*****************************!*\
  !*** ./src/generateForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createGetDataForm: () => (/* binding */ createGetDataForm)
/* harmony export */ });
function createGetDataForm(type) {


    if (type === "goal") {
      const formContainer = document.querySelector('.goalContainer');
  
      // Create form element
      const form = document.createElement('form');
      form.className = 'goal-form'; // Add a class for styling
      formContainer.appendChild(form);
  
      // Function to create an example label
      const createExampleLabel = (exampleText) => {
        const exampleLabel = document.createElement('label');
        exampleLabel.textContent = `${exampleText}`;
        exampleLabel.className = 'example-label';
        return exampleLabel;
      };
  
      // Create goal name input
      const nameLabel = document.createElement('label');
      nameLabel.textContent = "Goal Name/Objective:";
      nameLabel.setAttribute('for', 'goalName');
      form.appendChild(nameLabel);
      form.appendChild(createExampleLabel('What is my desired Goal? An e.g: "Become fluent in Spanish"'));
  
      const nameInput = document.createElement('input');
      nameInput.setAttribute('type', 'text');
      nameInput.setAttribute('name', 'goalName');
      nameInput.id = 'goalName'; // Add an id for targeting with CSS
      form.appendChild(nameInput);
      form.appendChild(document.createElement('br'));
  
      // Create task input
      const taskLabel = document.createElement('label');
      taskLabel.textContent = "Task Required:";
      taskLabel.setAttribute('for', 'task');
      form.appendChild(taskLabel);
      form.appendChild(createExampleLabel('What task will help me achieve this goal? An e.g: Study Spanish'));
  
      const taskInput = document.createElement('input');
      taskInput.setAttribute('type', 'text');
      taskInput.setAttribute('name', 'task');
      taskInput.id = 'task'; // Add an id for targeting with CSS
      form.appendChild(taskInput);
      form.appendChild(document.createElement('br'));
  
      // Create frequency input
      const frequencyLabel = document.createElement('label');
      frequencyLabel.textContent = "Frequency:";
      form.appendChild(frequencyLabel);
      form.appendChild(document.createElement('br'));
  
      const frequencyOptions = [
        { label: 'Hours/day', value: 'hours' },
        { label: 'Minutes/day', value: 'minutes' },
        { label: 'Once/day', value: 'once' }
      ];
  
      const frequencyValueLabel = document.createElement('label');
      frequencyValueLabel.textContent = "Frequency Value:";
      form.appendChild(frequencyValueLabel);
      form.appendChild(createExampleLabel('2'));
  
      const frequencyValueInput = document.createElement('input');
      frequencyValueInput.setAttribute('type', 'number');
      frequencyValueInput.setAttribute('name', 'frequencyValue');
      frequencyValueInput.setAttribute('min', '1');
      frequencyValueInput.id = 'frequencyValue'; // Add an id for targeting with CSS
      form.appendChild(frequencyValueInput);
      form.appendChild(document.createElement('br'));
  
      frequencyOptions.forEach(option => {
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option.label;
  
        const optionInput = document.createElement('input');
        optionInput.setAttribute('type', 'radio');
        optionInput.setAttribute('name', 'frequencyType');
        optionInput.setAttribute('value', option.value);
  
        form.appendChild(optionLabel);
        form.appendChild(optionInput);
      });
  
      form.appendChild(document.createElement('br'));
  
      // Create total time input
      const totalTimeLabel = document.createElement('label');
      totalTimeLabel.textContent = "Total Time to Complete the Goal:";
      totalTimeLabel.setAttribute('for', 'totalTime');
      form.appendChild(totalTimeLabel);
      form.appendChild(createExampleLabel('10 hours a week'));
  
      const totalTimeInput = document.createElement('input');
      totalTimeInput.setAttribute('type', 'text');
      totalTimeInput.setAttribute('name', 'totalTime');
      totalTimeInput.id = 'totalTime'; // Add an id for targeting with CSS
      form.appendChild(totalTimeInput);
      form.appendChild(document.createElement('br'));
  
      // Create a submit button
      const submitButton = document.createElement('input');
      submitButton.setAttribute('type', 'submit');
      submitButton.setAttribute('value', 'Submit');
      form.appendChild(submitButton);
    }

    if (type == "quest") {

            const formContainer = document.querySelector('.questParallax');
            console.log(formContainer);
          
            // Create form element
            const form = document.createElement('form');
            form.className = 'createQuestForm';
            formContainer.appendChild(form);
          
            // Create formTop div
            const formTopDiv = document.createElement('div');
            formTopDiv.className = 'formTop';
            form.appendChild(formTopDiv);
          
            // Create formTopButton
            const formTopButton = document.createElement('button');
            formTopButton.className = 'formTopButton';
            formTopButton.id = 'formTopExitButton';
            formTopButton.textContent = 'X';
            formTopDiv.appendChild(formTopButton);
          
            // Create objective input
            const objectiveLabel = document.createElement('label');
            objectiveLabel.setAttribute('for', 'questObjective');
            objectiveLabel.textContent = 'Objective:';
            form.appendChild(objectiveLabel);
          
            const objectiveInput = document.createElement('input');
            objectiveInput.setAttribute('type', 'text');
            objectiveInput.setAttribute('name', 'questObjective');
            objectiveInput.id = 'questObjective';
            objectiveInput.className = 'formInput';
            form.appendChild(objectiveInput);
            form.appendChild(document.createElement('br'));
          
            // Create date input
            const dateLabel = document.createElement('label');
            dateLabel.setAttribute('for', 'questDate');
            dateLabel.textContent = 'Date to Complete:';
            form.appendChild(dateLabel);
          
            const dateInput = document.createElement('input');
            dateInput.setAttribute('type', 'date');
            dateInput.setAttribute('name', 'questDate');
            dateInput.id = 'questDate';
            dateInput.className = 'formInput';
            form.appendChild(dateInput);
            form.appendChild(document.createElement('br'));
          
            // Create currency type select
            const currencyTypeLabel = document.createElement('label');
            currencyTypeLabel.setAttribute('for', 'questCurrencyType');
            currencyTypeLabel.textContent = 'Currency Type:';
            form.appendChild(currencyTypeLabel);
          
            const currencyTypeSelect = document.createElement('select');
            currencyTypeSelect.setAttribute('name', 'questCurrencyType');
            currencyTypeSelect.id = 'questCurrencyType';
            currencyTypeSelect.className = 'formInput';
            form.appendChild(currencyTypeSelect);
            form.appendChild(document.createElement('br'));
          
            const currencyOptions = [
              { value: 'GGTokens', label: 'GG Tokens' },
              { value: 'ChestKeys', label: 'Chest Keys' }
            ];
          
            currencyOptions.forEach(option => {
              const currencyOption = document.createElement('option');
              currencyOption.setAttribute('value', option.value);
              currencyOption.textContent = option.label;
              currencyTypeSelect.appendChild(currencyOption);
            });
          
            // Create currency amount input
            const currencyAmountLabel = document.createElement('label');
            currencyAmountLabel.setAttribute('for', 'questCurrencyAmount');
            currencyAmountLabel.textContent = 'Currency Amount:';
            form.appendChild(currencyAmountLabel);
          
            const currencyAmountInput = document.createElement('input');
            currencyAmountInput.setAttribute('type', 'number');
            currencyAmountInput.setAttribute('name', 'questCurrencyAmount');
            currencyAmountInput.id = 'questCurrencyAmount';
            currencyAmountInput.className = 'formInput';
            form.appendChild(currencyAmountInput);
            form.appendChild(document.createElement('br'));
          
            // Create formButtonDiv
            const formButtonDiv = document.createElement('div');
            formButtonDiv.className = 'formButtonDiv';
            form.appendChild(formButtonDiv);
          
            // Create submit button
            const submitButton = document.createElement('button');
            submitButton.className = 'formButton';
            submitButton.id = 'formSubmitButton';
            submitButton.textContent = 'Submit';
            formButtonDiv.appendChild(submitButton);
          
            // Add form submit event listener
            form.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
          
              // Retrieve the form values
              const objective = objectiveInput.value;
              const date = dateInput.value;
              const currencyType = currencyTypeSelect.value;
              const currencyAmount = currencyAmountInput.value;
          
              // Display the form values
              console.log("Objective: " + objective);
              console.log("Date to Complete: " + date);
              console.log("Currency Type: " + currencyType);
              console.log("Currency Amount: " + currencyAmount);
          
              // You can perform other operations with the form data here
          
              // Reset the form
              form.reset();
            });
          }
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

/***/ "./src/goalCreationPageHTML.js":
/*!*************************************!*\
  !*** ./src/goalCreationPageHTML.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRadioButtonsToElement: () => (/* binding */ addRadioButtonsToElement),
/* harmony export */   createInputValueElement: () => (/* binding */ createInputValueElement),
/* harmony export */   createObjectiveInputElement: () => (/* binding */ createObjectiveInputElement),
/* harmony export */   createQuestForm: () => (/* binding */ createQuestForm),
/* harmony export */   listContainer: () => (/* binding */ listContainer)
/* harmony export */ });

function createObjectiveInputElement (
    containerClassName, 
    inputType, 
    inputID, 
    inputPlaceHolderText,
    exampleTextContent, 
    exampleClassName
    ) {

    let elementContainer = document.createElement("div");
    elementContainer.className = containerClassName;

    let elementInput = document.createElement("input");
    elementInput.setAttribute("type", inputType);
    elementInput.setAttribute("placeholder", inputPlaceHolderText);
    elementInput.setAttribute("maxlength", "100"); // Set character limit to 70
    elementInput.setAttribute("id", inputID);

    let elementExampleText = document.createElement("h6");
    elementExampleText.textContent = exampleTextContent;
    elementExampleText.classList.add(exampleClassName);

    // Append the input element to the element
    elementContainer.appendChild(elementInput);
    elementContainer.appendChild(elementExampleText);

    return elementContainer;

}

function createInputValueElement (
    containerClassName, 
    inputContainerClassName, 
    exampleTextContainerClassName, 
    promptTitle, 
    inputValueClass,
    inputValueID, 
    exampleTextContent, 
    exampleTextClassName,
    exampleTextID
    ) {

    let elementContainer = document.createElement("div");
    elementContainer.classList.add(containerClassName);

    let elementInputContainer = document.createElement("div");
    elementInputContainer.classList.add(inputContainerClassName);

    let elementExampleTextContainer = document.createElement("div");
    elementExampleTextContainer.classList.add(exampleTextContainerClassName);

    let elementTitle = document.createElement("h4");
    elementTitle.textContent = promptTitle;

    let elementInputValue = document.createElement("input");
    elementInputValue.type = 'number';
    elementInputValue.classList.add(inputValueClass);
    elementInputValue.id = inputValueID;

    let elementContainerExampleText = document.createElement("h6");
    elementContainerExampleText.textContent = exampleTextContent;
    elementContainerExampleText.classList.add(exampleTextClassName);
    elementContainerExampleText.id = exampleTextID;

    elementInputContainer.appendChild(elementTitle);
    elementInputContainer.appendChild(elementInputValue);
    elementExampleTextContainer.appendChild(elementContainerExampleText);

    elementContainer.appendChild(elementInputContainer);
    elementContainer.appendChild(elementExampleTextContainer);

    return elementContainer;
}


function addRadioButtonsToElement (elementContainer, inputContainerClassName) {

        let inputContainer = elementContainer.querySelector(`.${inputContainerClassName}`)

 
        // Create the radio buttons for time options

        // Hours Radio Label
        let hoursRadioLabel = document.createElement("label");
        hoursRadioLabel.classList.add("radioLabel");
        let hoursRadioInput = document.createElement("input");
        hoursRadioInput.setAttribute("type", "radio");
        hoursRadioInput.setAttribute("name", "element");
        hoursRadioInput.setAttribute("value", "hours");
        hoursRadioInput.classList.add("radioButton");

        // Minutes Radio Label
        let minutesRadioLabel = document.createElement("label");
        minutesRadioLabel.classList.add("radioLabel");
        let minutesRadioInput = document.createElement("input");
        minutesRadioInput.setAttribute("type", "radio");
        minutesRadioInput.setAttribute("name", "element");
        minutesRadioInput.setAttribute("value", "minutes");
        minutesRadioInput.classList.add("radioButton");

    
        // N/A Radio Lavel
        let naRadioLabel = document.createElement("label");
        naRadioLabel.classList.add("radioLabel");
        let naRadioInput = document.createElement("input");
        naRadioInput.setAttribute("type", "radio");
        naRadioInput.setAttribute("name", "element");
        naRadioInput.setAttribute("value", "na");
        naRadioInput.classList.add("radioButton");

        // Radio Change Text Event Listeners
        hoursRadioInput.addEventListener("change", handleRadioChange);
        minutesRadioInput.addEventListener("change", handleRadioChange);
        naRadioInput.addEventListener("change", handleRadioChange);

          
        if (inputContainerClassName == "goalQuestTimeInputContainer") {
            hoursRadioLabel.appendChild(hoursRadioInput);
            hoursRadioLabel.appendChild(document.createTextNode("Hours"));
            minutesRadioLabel.appendChild(minutesRadioInput);
            minutesRadioLabel.appendChild(document.createTextNode("Minutes"));  
            
            inputContainer.appendChild(hoursRadioLabel);
            inputContainer.appendChild(minutesRadioLabel);

        } else {
            hoursRadioLabel.appendChild(hoursRadioInput);
            hoursRadioLabel.appendChild(document.createTextNode("Hours"));
            naRadioLabel.appendChild(naRadioInput);
            naRadioLabel.appendChild(document.createTextNode("N/A"));

            inputContainer.appendChild(hoursRadioLabel);
            inputContainer.appendChild(naRadioLabel);
        }


        // Function to handle radio button changes
        function handleRadioChange(event) {
            const timeAssignmentAmount = document.querySelector(".goalTimeAssignmentAmount");
            const timeAssignmentExampleText = document.querySelector("#timeAssignmentExampleText");
            const goalQuestTimeInput = document.querySelector(".goalQuestTimeInput");
            const goalQuestTimeExampleText = document.querySelector("#goalQuestTimeExampleText");
            const goalQuestTimeContainer = document.querySelector(".goalQuestTimeInputContainer");
            const hoursButton = goalQuestTimeContainer.querySelector("input[value='hours']");
            const minutesButton = goalQuestTimeContainer.querySelector("input[value='minutes']");
          
            // Case: N/A selected in Assign Time Field
            if (event.target.value === "na") {
              // If N/A is selected, disable the input field and show the N/A message
              timeAssignmentAmount.disabled = true;
              goalQuestTimeInput.disabled = true;
              timeAssignmentExampleText.textContent =
                "Selecting 'N/A' for time assignment will require your goal to be completed based solely on the completion of quests. No time entry is required.";
                if (inputContainerClassName === "timeAssignmentInputContainer") {
                    // Disable radio buttons for hours and minutes in goalQuestTimeInputContainer
                    hoursButton.disabled = true;
                    minutesButton.disabled = true;
                    goalQuestTimeExampleText.textContent = "All time input fields disabled for this quest, as the the time assigned to this goal is 'N/A'."
                }
            } 
            
            if (event.target.value === "hours" && inputContainerClassName == "timeAssignmentInputContainer") {
              
                // If Hours is selected, enable the input field and show the Hours message
              timeAssignmentAmount.disabled = false;
              goalQuestTimeInput.disabled = false;
              hoursButton.disabled = false;
              minutesButton.disabled = false;

              timeAssignmentExampleText.textContent =
                "Selecting 'Hours' for time assignment will require your goal to be completed based on overall time completion. Time will be allotted to all outstanding quests available to the goal.";
            } 
            
            if (event.target.value === "minutes") {
                // If Hours is selected, enable the input field and show the Hours message
                goalQuestTimeExampleText.textContent =
                  'The required time to complete this quest will be documented in "Minutes".'
              } 

              if (event.target.value === "hours" && inputContainerClassName == "goalQuestTimeInputContainer") {
                // If Hours is selected, enable the input field and show the Hours message
                goalQuestTimeExampleText.textContent =
                  'The required time to complete this quest will be documented in "Hours".';
              } 
          }


  
}


function createQuestForm () {
    const questForm = document.createElement("form");
    questForm.classList.add("questForm");

    // Quest Name
    let questNameContainer = createObjectiveInputElement (
        "formFieldContainer", 
        "text", 
        "questGoalObjective",
        "Enter Your Quest Objective Here...",
        'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
        "goalCreationExampleText"
        );
  
    questForm.appendChild(questNameContainer);

    // Goal Time Allotment
    let goalTimeContainer = createInputValueElement (
        "formFieldContainer", 
        "goalQuestFrequencyInputContainer", 
        "goalQuestFrequencyExampleTextContainer", 
        "Quest Frequency:", 
        "goalQuestFrequencyInput", 
        "goalQuestFrequencyInput", 
        "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "goalQuestFrequencyInputExampleText",
    );

    questForm.appendChild(goalTimeContainer);
  
    // Frequency of Quest
    let frequencyContainer = createInputValueElement (
        "formFieldContainer", 
        "goalQuestTimeInputContainer", 
        "goalQuestTimeExampleTextContainer", 
        "Assign Time to Quest:", 
        "goalQuestTimeInput", 
        "goalQuestTimeInput", 
        "Assign time to your goal. The specified time will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "goalQuestTimeExampleText",
    );

    addRadioButtonsToElement(frequencyContainer, "goalQuestTimeInputContainer");
    questForm.appendChild(frequencyContainer);
  
    // Goal Deadline
    let deadlineContainer = createFormField(
      "date",
      "deadline",
      "Enter the deadline for your quest.",
      "Enter the start date and end date for your Goal."
    );
    questForm.appendChild(deadlineContainer);
 
        
    return questForm;
}


function listContainer (
    containerClassName,
    promptTitle,
    containerInputFieldClassName,
    listItemsContainerClass
) {
        
    let element = document.createElement("div");
    element.className = containerClassName;

    let elementTitle = document.createElement("h4");
    elementTitle.textContent = promptTitle;
    element.appendChild(elementTitle);

    let elementInputField = document.createElement("div");
    elementInputField.classList.add(containerInputFieldClassName);
    element.appendChild(elementInputField);

    let listItemsContainer = document.createElement("div");
    listItemsContainer.classList.add(listItemsContainerClass);
    listItemsContainer.appendChild(createQuestForm());
    elementInputField.appendChild(listItemsContainer);
    
    return element
}




function createFormField(type, name, placeholder, exampleText) {
    let formFieldContainer = document.createElement("div");
    formFieldContainer.classList.add("formFieldContainer");
  
    if (type === "date") {
      // Create a div to house the date inputs
      let dateContainer = document.createElement("div");
      dateContainer.classList.add("dateContainer");

      let startDateInput = createInput(type, name + "Start", "Start " + placeholder);
      let endDateInput = createInput(type, name + "End", "End " + placeholder);
      
      // Initialize the start date's min value to today
      startDateInput.min = new Date().toISOString().split("T")[0];
      
      // Update the end date's min value whenever the start date changes
      startDateInput.addEventListener("change", () => {
        let startDate = new Date(startDateInput.value);
        let endDate = new Date();
        endDate.setDate(startDate.getDate() + 7);
        endDateInput.value = endDate.toISOString().split("T")[0];
      });
      
      // Update the start date's max value whenever the end date changes
      endDateInput.addEventListener("change", () => {
        startDateInput.max = endDateInput.value;
      });
      
      // Add labels for start date and end date inputs
      let startDateLabel = createLabel(name + "Start", "Goal Start Date");
      let endDateLabel = createLabel(name + "End", "Goal End Date");
      
      dateContainer.appendChild(startDateLabel);
      dateContainer.appendChild(startDateInput);
      dateContainer.appendChild(endDateLabel);
      dateContainer.appendChild(endDateInput);
      
      formFieldContainer.appendChild(dateContainer);
    } else {
      let formFieldInput = createInput(type, name, placeholder);
      formFieldContainer.appendChild(formFieldInput);
    }
  
    let formFieldExampleText = document.createElement("h6");
    formFieldExampleText.textContent = exampleText;
    formFieldExampleText.classList.add("goalCreationExampleText");
  
    let exampleTextContainer = document.createElement("div");
    exampleTextContainer.classList.add("exampleTextContainer");
    exampleTextContainer.appendChild(formFieldExampleText);
    formFieldContainer.appendChild(exampleTextContainer);
  
    return formFieldContainer;
}

function createInput(type, name, placeholder) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("id", name);
    input.setAttribute("maxlength", "100"); // Set character limit to 100
    input.classList.add("formFieldInput");
    return input;
}

function createLabel(forInput, labelText) {
    let label = document.createElement("label");
    label.setAttribute("for", forInput);
    label.textContent = labelText;
    return label;
}


/***/ }),

/***/ "./src/goalFunctions.js":
/*!******************************!*\
  !*** ./src/goalFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewGoalObject: () => (/* binding */ createNewGoalObject),
/* harmony export */   getFormValues: () => (/* binding */ getFormValues),
/* harmony export */   getNewGoalObject: () => (/* binding */ getNewGoalObject),
/* harmony export */   renderGoalList: () => (/* binding */ renderGoalList),
/* harmony export */   validateGoalForm: () => (/* binding */ validateGoalForm)
/* harmony export */ });
/* harmony import */ var _classes_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/classes */ "./src/classes/classes.js");
/* harmony import */ var _currencyFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions */ "./src/currencyFunctions.js");



function renderGoalList (currentGoalList) {

    let goalContainer = document.querySelector(".goalParallax");

    for (let goal = 0; goal < currentGoalList.length; goal++) {
        goalContainer.appendChild(generateGoalCard(currentGoalList[goal]));
    }
}

function createNewGoalObject () {


    if (validateGoalForm()) {
      return getNewGoalObject();
    }
    return null;
}


function getFormValues() {
    let ids = [
      "goalTitleContainerInput",
      "goalRewardAssignmentAmount",
      "goalTimeAssignmentAmount",
      "goalQuestFrequencyInput",
      "questGoalObjective",
      "goalQuestTimeInput",
      "deadlineStart.formFieldInput",
      "deadlineEnd.formFieldInput",
    ];

    let formValues = {};

    for (let i = 0; i < ids.length; i++) {
      formValues[ids[i]] = document.querySelector("#" + ids[i]).value;
    }

    return formValues;
  }

  function validateGoalForm() {
    let formValues = getFormValues();
    let isValid = true;

    for (let key in formValues) {
        let inputField = document.querySelector("#" + key);

        // Remove the 'invalid' class in case it was added before
        inputField.classList.remove('invalid');

        if (formValues[key] === null || formValues[key] === "") {
            console.log(`Input with id ${key} is empty or null`);
            // Add the 'invalid' class to the input field
            inputField.classList.add('invalid');
            isValid = false;
        }
    }

    return isValid;
}

function getNewGoalObject() {
  let goalObject = new _classes_classes__WEBPACK_IMPORTED_MODULE_0__.Goal(null, new _classes_classes__WEBPACK_IMPORTED_MODULE_0__.Currency('GGTokens', null))
  let formValues = getFormValues();

  goalObject.objective = formValues["goalTitleContainerInput"];
  goalObject.reward.amount = formValues["goalRewardAssignmentAmount"];
  goalObject.quests = [];
  goalObject.completed = false;
  goalObject.totalTimeRequired = formValues["goalTimeAssignmentAmount"];
  goalObject.totalTimeSpent = 0;
  goalObject.timesPerWeekRequired = formValues["goalQuestFrequencyInput"];
  goalObject.timesPerWeekSpent = 0;
  goalObject.startDate = formValues["deadlineStart.formFieldInput"];
  goalObject.endDate = formValues["deadlineEnd.formFieldInput"];

  console.log(goalObject);
  return goalObject;
}

function generateGoalCard(goal) {

    // Create Entire Goal Card Element
    const goalCard = document.createElement('div');
    goalCard.classList.add('goalCard');
  
    // Separate Card into Two Halves
    const topHalfGoalCard = document.createElement('div');
    topHalfGoalCard.classList.add('topHalfGoalCard');
    goalCard.appendChild(topHalfGoalCard);
  
    const bottomHalfGoalCard = document.createElement('div');
    bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
    goalCard.appendChild(bottomHalfGoalCard);
  
    // Top Half Card Content

      // Goal Objective Content
      const goalObjectiveContainer = document.createElement('div');
      goalObjectiveContainer.classList.add('goalObjectiveContainer');
      topHalfGoalCard.appendChild(goalObjectiveContainer);

      const goalObjective = document.createElement('div');
      goalObjective.classList.add('goalObjectiveTitle');
      goalObjective.textContent = goal.objective;
      goalObjectiveContainer.appendChild(goalObjective);

      const goalTimeRequirement = document.createElement('div');
      goalTimeRequirement.classList.add('goalTimeRequirement');

      if (goal.timesPerWeekRequired == null) {
        goalTimeRequirement.textContent = `Completion Requirements: ${goal.totalTimeRequired} Hour(s) Total`;
      }

      if (goal.totalTimeRequired == null) {
        goalTimeRequirement.textContent = `Completion Requirements: Complete All Outstanding Quests`;
      }
      
      goalObjectiveContainer.appendChild(goalTimeRequirement);
  
      // Goal Reward Content
      const goalCompleteContainer = document.createElement('div');
      goalCompleteContainer.classList.add('goalCompleteContainer');
      topHalfGoalCard.appendChild(goalCompleteContainer);

      const goalCompleteRewardType = document.createElement("img");
      goalCompleteRewardType.setAttribute("src", _currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(goal))
      goalCompleteRewardType.classList.add("goalRewardImage");
      goalCompleteContainer.appendChild(goalCompleteRewardType);

      const goalCompleteRewardAmount = document.createElement("div");
      goalCompleteRewardAmount.textContent = (`${goal.reward.amount} ${goal.reward.type}`)
      goalCompleteContainer.appendChild(goalCompleteRewardAmount);

    // Bottom Half Card Content
    const questListContainer = document.createElement('div');
    questListContainer.classList.add('questListContainer');
    bottomHalfGoalCard.appendChild(questListContainer);
  
    const questListParallax = document.createElement('div');
    questListParallax.classList.add('questListParallax');
    questListContainer.appendChild(questListParallax);
  
    const questList = document.createElement('ul');
    questList.classList.add('questList');
    for (let i = 0; i < goal.quests.length; i++) {
      const questItemContainer = document.createElement('div');
      questItemContainer.classList.add('questListItemContainer');
  
      const questItemContent = document.createElement('span');
      questItemContent.classList.add('questListItem');
      questItemContent.textContent = goal.quests[i].objective;
  
      const progressBarContainer = document.createElement('div');
      progressBarContainer.classList.add('progress-bar-container');
  
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
  
      progressBarContainer.appendChild(progressBar);
      questItemContainer.appendChild(questItemContent);
      questItemContainer.appendChild(progressBarContainer);
      questList.appendChild(questItemContainer);

      
      questItemContainer.addEventListener('click', function () {
          generateModal(goal.quests[i]);
      });
    }

    questListParallax.appendChild(questList);
  
    return goalCard;
  }

  function generateModal(goalQuest) {

    const goalQuestModal = document.createElement('div');
    goalQuestModal.classList.add('goalQuestModal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('goalQuestModalContent');
  
    let goalQuestModalTitle = document.createElement("h2");
    goalQuestModalTitle.innerText = "Completion Requirement(s): "

    let name = document.createElement("p");
    name.innerText = goalQuest.objective;


    modalContent.appendChild(goalQuestModalTitle);
    modalContent.appendChild(name)
    goalQuestModal.appendChild(modalContent);
    document.body.appendChild(goalQuestModal);
  
    return goalQuestModal;
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

/***/ "./src/initializeIndexFunctions.js":
/*!*****************************************!*\
  !*** ./src/initializeIndexFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initializeDefaultIndex)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/classes.js */ "./src/classes/classes.js");
/* harmony import */ var _questFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questFunctions.js */ "./src/questFunctions.js");
/* harmony import */ var _modalFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalFunctions.js */ "./src/modalFunctions.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");
/* harmony import */ var _playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playerCharacterFunctions */ "./src/playerCharacterFunctions.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _indexViewFunctions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indexViewFunctions */ "./src/indexViewFunctions.js");
/* harmony import */ var _generateForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generateForm */ "./src/generateForm.js");
/* harmony import */ var _renderDefaultIndexHtml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./renderDefaultIndexHtml */ "./src/renderDefaultIndexHtml.js");
/* harmony import */ var _goalFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./goalFunctions */ "./src/goalFunctions.js");
/* harmony import */ var _renderGoalPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./renderGoalPage */ "./src/renderGoalPage.js");

















function initializeDefaultIndex () {

    let indexPage = document.querySelector(".appContent");

    (0,_renderDefaultIndexHtml__WEBPACK_IMPORTED_MODULE_10__["default"])(indexPage);



let playerBirthday = new Date ("02-03-1996");
let heroSelection = ("Sorcerer");
let player = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerCharacter("images/zeusSprite.png", heroSelection, _data_js__WEBPACK_IMPORTED_MODULE_7__.playerEquippedItems, playerBirthday);
let pixelImageContainer = document.querySelector("#testImage");
pixelImageContainer.src = (player.spriteImage);
let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
let heroScore = (0,_playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_6__.calcHeroScore)(player);
getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)

console.log(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentQuestList[0].reward.type)

let testGoal = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Goal ("Become Fluent in Spanish", new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 12))
let gymGoal = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Goal (("Get Six Pack Abs"), new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency ("GGTokens", 12));


let testTimeReq = 40;
let testTimeSpent = 36;
let testPerWeek = 4;
let testPerWeekSpent = 1;
let testGoalQuestFreq = 4;


testGoal.totalTimeRequired = testTimeReq;
testGoal.totalTimeSpent = testTimeSpent;
testGoal.timesPerWeekRequired = testGoalQuestFreq;

let xTitle = "Study Spanish";


gymGoal.timesPerWeekRequired = testPerWeek;
gymGoal.timesPerWeekSpent = testPerWeekSpent

let x = testGoal.generateQuest(xTitle);
testGoal.quests.push(x);

_data_js__WEBPACK_IMPORTED_MODULE_7__.currentGoalList.push(testGoal);
_data_js__WEBPACK_IMPORTED_MODULE_7__.currentGoalList.push(gymGoal);

// let gymQuest = gymGoal.generateQuest(4, 0);
// gymGoal.quests.push(gymQuest);

console.log(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentGoalList);

(0,_goalFunctions__WEBPACK_IMPORTED_MODULE_11__.renderGoalList)(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentGoalList);


(0,_eventManager__WEBPACK_IMPORTED_MODULE_4__["default"])(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentQuestList, _data_js__WEBPACK_IMPORTED_MODULE_7__.currencyContainer);



// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button.addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {

        if (!(0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_8__.removeEmptyQuestState)()) {
            (0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_8__.removeEmptyQuestState)();
        }
        
        if (!(0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_8__.createQuestParallax)()) {
            (0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_8__.createQuestParallax)();
        }

        (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.renderQuestList)(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentQuestList, _data_js__WEBPACK_IMPORTED_MODULE_7__.currencyContainer);
        
        let x = document.querySelector(".questParallax");
        x.appendChild((0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createEmptyCardTemplate)());
        x.appendChild((0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createGhostCard)());
        console.log(_data_js__WEBPACK_IMPORTED_MODULE_7__.currentGoalList);
    })

let addGoalButtonClicked = document.querySelector("button.addGoalButton")
addGoalButtonClicked.addEventListener("click", function () {
    
    while (indexPage.firstChild) {
        indexPage.removeChild(indexPage.firstChild);
    }

  (0,_renderGoalPage__WEBPACK_IMPORTED_MODULE_12__["default"])();

    })



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

/***/ "./src/renderDefaultIndexHtml.js":
/*!***************************************!*\
  !*** ./src/renderDefaultIndexHtml.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderDefaultIndex)
/* harmony export */ });
function renderDefaultIndex(mainPage) {
    // Create the taskAndGoalButtonContainer div
    const taskAndGoalButtonContainer = document.createElement("div");
    taskAndGoalButtonContainer.classList.add("taskAndGoalButtonContainer");
  
    const addQuestButton = document.createElement("button");
    addQuestButton.classList.add("addQuestButton");
    addQuestButton.textContent = "Create Quest +";
  
    const addGoalButton = document.createElement("button");
    addGoalButton.classList.add("addGoalButton");
    addGoalButton.textContent = "Create Goal +";
  
    taskAndGoalButtonContainer.appendChild(addQuestButton); 
    taskAndGoalButtonContainer.appendChild(addGoalButton);
  
    // Create the gameContentHeader div
    const gameContentHeaderDiv = document.createElement("div");
    gameContentHeaderDiv.classList.add("gameContentHeader");
  
    const questHeaderDiv = document.createElement("div");
    questHeaderDiv.id = "questHeader";
    questHeaderDiv.textContent = "My Quests";
  
    const questTimeOptionsDiv = document.createElement("div");
    questTimeOptionsDiv.classList.add("questTimeOptions");
  
    const todayQuestsDiv = document.createElement("div");
    todayQuestsDiv.id = "todayQuests";
    todayQuestsDiv.textContent = "Today";
  
    const weeklyQuestsDiv = document.createElement("div");
    weeklyQuestsDiv.id = "weeklyQuests";
    weeklyQuestsDiv.textContent = "Weekly";
  
    questTimeOptionsDiv.appendChild(todayQuestsDiv);
    questTimeOptionsDiv.appendChild(weeklyQuestsDiv);
  
    questHeaderDiv.appendChild(questTimeOptionsDiv);
  
    const goalHeaderDiv = document.createElement("div");
    goalHeaderDiv.id = "goalHeader";
    goalHeaderDiv.textContent = "My Goals";
  
    const goalCompleteOptionsDiv = document.createElement("div");
    goalCompleteOptionsDiv.classList.add("goalCompleteOptions");
  
    const inProgressDiv = document.createElement("div");
    inProgressDiv.id = "inProgress";
    inProgressDiv.textContent = "In Progress";
  
    const completedDiv = document.createElement("div");
    completedDiv.id = "completed";
    completedDiv.textContent = "Completed";
  
    goalCompleteOptionsDiv.appendChild(inProgressDiv);
    goalCompleteOptionsDiv.appendChild(completedDiv);
  
    goalHeaderDiv.appendChild(goalCompleteOptionsDiv);
  
    gameContentHeaderDiv.appendChild(questHeaderDiv);
    gameContentHeaderDiv.appendChild(goalHeaderDiv);
  
    // Create the gameContent div
    const gameContentDiv = document.createElement("div");
    gameContentDiv.classList.add("gameContent");
  
    const questContainerDiv = document.createElement("div");
    questContainerDiv.classList.add("questContainer");
  
    const goalContainerDiv = document.createElement("div");
    goalContainerDiv.classList.add("goalContainer");

    const goalContainerParallax = document.createElement("div");
    goalContainerParallax.classList.add("goalParallax");
    goalContainerDiv.appendChild(goalContainerParallax);
  
    // Append the child divs to the gameContent div
    gameContentDiv.appendChild(questContainerDiv);
    gameContentDiv.appendChild(goalContainerDiv);
  
    // Replace the mainPage content with the gameContent div
    mainPage.innerHTML = "";
    mainPage.appendChild(taskAndGoalButtonContainer);
    mainPage.appendChild(gameContentHeaderDiv);
    mainPage.appendChild(gameContentDiv);
  }
  
  // Call the renderDefaultIndex function to render the default index HTML elements
//   const mainPageContainer = document.querySelector(".appContent");
//   renderDefaultIndex(mainPageContainer);

/***/ }),

/***/ "./src/renderGoalPage.js":
/*!*******************************!*\
  !*** ./src/renderGoalPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderGoalCreationPage)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializeIndexFunctions */ "./src/initializeIndexFunctions.js");
/* harmony import */ var _questFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questFunctions */ "./src/questFunctions.js");
/* harmony import */ var _goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goalCreationPageHTML */ "./src/goalCreationPageHTML.js");
/* harmony import */ var _goalFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goalFunctions */ "./src/goalFunctions.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");







function renderGoalCreationPage () {

    let mainPage = document.querySelector(".appContent");

    // Create the header div
    let header = document.createElement("div");
    header.classList.add("goalCreationPage");
    header.id = "headerGoalCreationPage";

        // Create header elements
        let headerTitleContainer = document.createElement("div");
            let backPageButton = document.createElement("button");
            let headerTitle = document.createElement("div");
            headerTitleContainer.appendChild(backPageButton);
            headerTitleContainer.appendChild(headerTitle);

        let deleteGoal = document.createElement("button");

        // Add classes and ID to the elements
        headerTitleContainer.classList.add("headerTitleContainer")
        backPageButton.id = "backPageButtonGoalCreationPage";
        headerTitle.id = "headerTitleGoalCreationPage";
        deleteGoal.id = "deleteGoalCreationPage";

        // Text Content
        backPageButton.textContent = "<";
        headerTitle.textContent = "Goals";
        deleteGoal.textContent = "Delete";

        backPageButton.addEventListener("click", function() {
        
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }

            (0,_initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])()
        })

        deleteGoal.addEventListener("click", function() {
  
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }

            (0,_initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])()
        })

    // Append the elements to the header
    header.appendChild(headerTitleContainer)
    header.appendChild(deleteGoal);


    // Create the content div
    let goalCreationContainer = document.createElement("div");
    goalCreationContainer.classList.add("goalCreationPage");
    goalCreationContainer.id = "goalCreationContentContainer";

         // Create the first child div with class "goalTitleContainer"

        let goalTitleContainer = (0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.createObjectiveInputElement) (
            "goalTitleContainer", 
            "text",
            "goalTitleContainerInput",
            "Enter Your Goal Objective Here...",
            'Enter the name of your goal in the "Untitled" field above. An example of a goal can be: "Become Fluent in Spanish" or "Get Six-Pack Abs"... ',
            "goalCreationExampleText"
            ) 

        // Create the second child div with class "rewardAssignmentContainer"

        let rewardAssignmentContainer = (0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.createInputValueElement) (
            "rewardAssignmentContainer", 
            "rewardAssignmentInputContainer", 
            "rewardAssignmentExampleTextContainer", 
            "Assign Rewards:", 
            "goalRewardAssignmentAmount", 
            "goalRewardAssignmentAmount", 
            'Assign rewards to your goal. The specified amount will be split among your outstanding quests.', 
            "goalCreationExampleText",
            "rewardAssignmentExampleText"
            )

        // Create the third child div with class "timeAssignmentContainer"
  
        let timeAssignmentContainer = (0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.createInputValueElement) (
            "timeAssignmentContainer", 
            "timeAssignmentInputContainer", 
            "rewardAssignmentExampleTextContainer", 
            "Assign Time:", 
            "goalTimeAssignmentAmount", 
            "goalTimeAssignmentAmount", 
            "Assign time to your goal. The specified time will be split among your outstanding quests.", 
            "goalCreationExampleText",
            "timeAssignmentExampleText"
            )
        
        // Add Radio Buttons to the third child div
        ;(0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.addRadioButtonsToElement)(timeAssignmentContainer, "timeAssignmentInputContainer");


        // Create the fourth child div with class "addQuestContainer"
        let addQuestContainer = (0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.listContainer) (
            "addQuestContainer",
            "Add Quest(s) to Your Goal:",
            "addQuestContainerInputField",
            "goalQuestList"
        )

    // Append the child divs to the second parent div
    goalCreationContainer.appendChild(goalTitleContainer);
    goalCreationContainer.appendChild(rewardAssignmentContainer);
    goalCreationContainer.appendChild(timeAssignmentContainer);
    goalCreationContainer.appendChild(addQuestContainer);
 
    // Create the footer div
    let footer = document.createElement("div");
    footer.classList.add("goalCreationPage");
    footer.id = "footerGoalCreationPage"

    let goalConfirmCreateButton = document.createElement("button");
    goalConfirmCreateButton.classList.add("goalConfirmCreateButton");
    goalConfirmCreateButton.textContent = "Confirm"
    goalConfirmCreateButton.addEventListener('click', function() {
        let newGoal = (0,_goalFunctions__WEBPACK_IMPORTED_MODULE_4__.createNewGoalObject)();

        // Only add the goal, save it, and re-initialize the page if newGoal is not null
        if(newGoal !== null) {
            _data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.push(newGoal);
            (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)("currentGoalList", _data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList);
            console.log(_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList);
    
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
    
            (0,_initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])();
        }
    })
    footer.appendChild(goalConfirmCreateButton);

    // Append the parent divs to the document body or any other container
    mainPage.appendChild(header);
    mainPage.appendChild(goalCreationContainer);
    mainPage.appendChild(footer);

    console.log(_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList);
  
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
/* harmony import */ var _classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/itemStats.js */ "./src/classes/itemStats.js");
/* harmony import */ var _helperFunctions_imageHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions/imageHandler.js */ "./src/helperFunctions/imageHandler.js");
// Assuming the code for the Weapon class, HeroTypeWeaponList class, and weaponLists for each class is already defined.




const weaponImages = (0,_helperFunctions_imageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/weapons sync \\.(png)$")
);

const armourImages = (0,_helperFunctions_imageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/armour sync \\.(png)$")
);

const elementImages = (0,_helperFunctions_imageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  __webpack_require__("./src/images/elements sync \\.(png)$")
);

const rarityImages = (0,_helperFunctions_imageHandler_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
    let weaponElement = getItemElement(_classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleElements);
    let weaponRarity = getItemRarity(_classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleRarity);
    let weaponStats = getItemStats(_classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleStats, weaponRarity);
    let weaponPrefix = getItemPrefix(_classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossiblePrefix, weaponRarity);
    let weaponSuffix = getItemSuffix(_classes_itemStats_js__WEBPACK_IMPORTED_MODULE_1__.itemPossibleSuffix, weaponElement);

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
/* harmony import */ var _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/classes.js */ "./src/classes/classes.js");
/* harmony import */ var _questFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questFunctions.js */ "./src/questFunctions.js");
/* harmony import */ var _modalFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalFunctions.js */ "./src/modalFunctions.js");
/* harmony import */ var _dueDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dueDate.js */ "./src/dueDate.js");
/* harmony import */ var _getObjective_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getObjective.js */ "./src/getObjective.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");
/* harmony import */ var _shopFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shopFunction */ "./src/shopFunction.js");
/* harmony import */ var _classes_itemStats__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classes/itemStats */ "./src/classes/itemStats.js");
/* harmony import */ var _gachaSpinFunctions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gachaSpinFunctions */ "./src/gachaSpinFunctions.js");
/* harmony import */ var _playerCharacterFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./playerCharacterFunctions */ "./src/playerCharacterFunctions.js");
/* harmony import */ var _inventoryFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./inventoryFunctions */ "./src/inventoryFunctions.js");
/* harmony import */ var _helperFunctions_getItemImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helperFunctions/getItemImage */ "./src/helperFunctions/getItemImage.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _indexViewFunctions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./indexViewFunctions */ "./src/indexViewFunctions.js");
/* harmony import */ var _generateForm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./generateForm */ "./src/generateForm.js");
/* harmony import */ var _renderGoalPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./renderGoalPage */ "./src/renderGoalPage.js");
/* harmony import */ var _renderDefaultIndexHtml__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./renderDefaultIndexHtml */ "./src/renderDefaultIndexHtml.js");
/* harmony import */ var _initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./initializeIndexFunctions */ "./src/initializeIndexFunctions.js");





















(0,_initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_19__["default"])()
// renderGoalCreationPage();

// console.log(currencyContainer)
// // Globally Scoped Variables

// let playerBirthday = new Date ("02-03-1996");
// let heroSelection = ("Sorcerer");
// let player = new PlayerCharacter("images/zeusSprite.png", heroSelection, playerEquippedItems, playerBirthday);
// let pixelImageContainer = document.querySelector("#testImage");
// pixelImageContainer.src = (player.spriteImage);
// let getHeroScoreContainer = document.querySelector("#heroScoreContainer");
// let heroScore = calcHeroScore(player);
// getHeroScoreContainer.textContent = (`Hero Score: ${heroScore}`)

// let testQuest = new Quest ("Finish Fn", "4:30pm - 8:00pm", false, new Currency("GGTokens", 12), null, false, null);
// let testQuest2 = new Quest ("Finish Fn", "4:30pm - 8:00pm", false, new Currency("GGTokens", 12), null, false, null);

// // currentQuestList.push(testQuest);
// console.log(currentQuestList);
// console.log(currentGoalList);

// let testGoal = new Goal ("Become Fluent in Spanish", new Currency("GGTokens", 12))

// // class Goal {
// //     constructor(objective, reward, frequency, frequencyValue, totalTimeRequired, totalTimeSpent) 

// let gymGoal = new Goal (("Get Six Pack Abs"), new Currency ("GGTokens", 12));
// let gymQuest = gymGoal.generateQuest(4, 0);
// gymGoal.quests.push(gymQuest);
// console.log(gymGoal.quests);

// console.log(gymGoal.quests[0].timesPerWeekRequired)

// testGoal.quests.push(testQuest);
// testGoal.quests.push(testQuest);
// testGoal.quests.push(testQuest);
// testGoal.quests.push(testQuest);
// testGoal.quests.push(testQuest);
// testGoal.quests.push(testQuest2);

// console.log(testGoal.quests);

// // testGoal.quests.push(testQuest);
// // console.log(testGoal.quests);

// // let testClick = document.querySelector(".gameContentHeader")
// // testClick.addEventListener("click", function () {
// //   testQuest.questComplete = true;
// //   console.log(testGoal.quests);
// // })

// showEmptyQuestsState();
// // showEmptyGoalsState();

// let gcc = document.querySelector(".goalContainer");

// function generateGoalCard(goal) {

//     const goalCard = document.createElement('div');
//     goalCard.classList.add('goalCard');
  
//     const topHalfGoalCard = document.createElement('div');
//     topHalfGoalCard.classList.add('topHalfGoalCard');
//     goalCard.appendChild(topHalfGoalCard);
  
//     const bottomHalfGoalCard = document.createElement('div');
//     bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
//     goalCard.appendChild(bottomHalfGoalCard);
  
//     const goalObjectiveContainer = document.createElement('div');
//     goalObjectiveContainer.classList.add('goalObjectiveContainer');
//     topHalfGoalCard.appendChild(goalObjectiveContainer);
  
//     const goalCompleteContainer = document.createElement('div');
//     goalCompleteContainer.classList.add('goalCompleteContainer');
//     topHalfGoalCard.appendChild(goalCompleteContainer);
  
//     const goalObjective = document.createElement('h3');
//     goalObjective.classList.add('goal-objective');
//     goalObjective.textContent = goal.objective;
//     goalObjectiveContainer.appendChild(goalObjective);
  
//     const questListContainer = document.createElement('div');
//     questListContainer.classList.add('questListContainer');
//     bottomHalfGoalCard.appendChild(questListContainer);
  
//     const questListParallax = document.createElement('div');
//     questListParallax.classList.add('questListParallax');
//     questListContainer.appendChild(questListParallax);
  
//     const questList = document.createElement('ul');
//     questList.classList.add('questList');
//     for (let i = 0; i < goal.quests.length; i++) {
//       const questItemContainer = document.createElement('div');
//       questItemContainer.classList.add('questListItemContainer');
  
//       const questItemContent = document.createElement('span');
//       questItemContent.classList.add('questListItem');
//       questItemContent.textContent = goal.quests[i].objective;
  
//       const progressBarContainer = document.createElement('div');
//       progressBarContainer.classList.add('progress-bar-container');
  
//       const progressBar = document.createElement('div');
//       progressBar.classList.add('progress-bar');
  
//       progressBarContainer.appendChild(progressBar);
//       questItemContainer.appendChild(questItemContent);
//       questItemContainer.appendChild(progressBarContainer);
//       questList.appendChild(questItemContainer);

      
//       questItemContainer.addEventListener('click', function () {
//           generateModal(goal.quests[i]);
//       });
//     }

//     questListParallax.appendChild(questList);
  
//     return goalCard;
//   }

//   function generateModal(goalQuest) {

//     const goalQuestModal = document.createElement('div');
//     goalQuestModal.classList.add('goalQuestModal');
  
//     const modalContent = document.createElement('div');
//     modalContent.classList.add('goalQuestModalContent');
  
//     let goalQuestModalTitle = document.createElement("h2");
//     goalQuestModalTitle.innerText = "Completion Requirement(s): "

//     let name = document.createElement("p");
//     name.innerText = goalQuest.objective;


//     modalContent.appendChild(goalQuestModalTitle);
//     modalContent.appendChild(name)
//     goalQuestModal.appendChild(modalContent);
//     document.body.appendChild(goalQuestModal);
  
//     return goalQuestModal;
//   }
      
  

//   let gCard = generateGoalCard(testGoal);
//   let gCard2 = generateGoalCard(gymGoal);

//   gcc.appendChild(gCard);
//   gcc.appendChild(gCard2);

// // let goalCard = createCardTemplate("goal");
// // x.appendChild(goalCard);
// // displayGoalCardContent(testGoal, goalCard, currencyContainer);



// userInterfaceManager(currentQuestList, currencyContainer);

// // console.log(currentGoalList);
// // console.log(currentQuestList);

// // testGoal.linkQuestToGoal(currentQuestList[0]);
// // console.log(testGoal.timeRequired)


// // Event Listener to Open Quest Creation Modal
// let addQuestButtonClicked = document.querySelector("button.addQuestButton")
// addQuestButtonClicked.addEventListener("click", function () {

//     if (!removeEmptyQuestState()) {
//         removeEmptyQuestState();
//     }
    
//     if (!createQuestParallax()) {
//         createQuestParallax();
//     }

//     renderQuestList(currentQuestList, currencyContainer);
    
//     let x = document.querySelector(".questParallax");
//     x.appendChild(createEmptyCardTemplate());
//     x.appendChild(createGhostCard());
//     console.log(currentGoalList);
// })

// let addGoalButtonClicked = document.querySelector("button.addGoalButton")
// addGoalButtonClicked.addEventListener("click", function () {
//     // removeEmptyTaskGoalPrompt();
//     // createTaskContainer();
//     // goalController();
    
//     currentGoalList.push(testGoal);
//     createGetDataForm("goal");
// })


// // Event Listener to Add Quest to Quest List and Display
// let formSubmitButton = document.querySelector("#formSubmitButton");
// formSubmitButton.addEventListener("click", function (e) {
//     closeFormModal(e);
//     removeEmptyQuestGoalPrompt();
//     let newlyGeneratedQuest = getNewQuest();
//     addQuest(currentQuestList, newlyGeneratedQuest);
//     userInterfaceManager(currentQuestList, currencyContainer);
// })

// // function createState(initialValue) {
// //   let value = initialValue; // State value

// //   // Function to get the current state value
// //   function getState() {
// //     return value;
// //   }

// //   // Function to update the state value
// //   function setState(newValue) {
// //     value = newValue;
// //   }

// //   // Return an object containing the getState and setState functions
// //   return {
// //     getState,
// //     setState,
// //   };
// // }

// // // Usage example
// // const counterState = createState(0);

// // // Get the current state value
// // console.log(counterState.getState()); // Output: 0

// // // Update the state value
// // counterState.setState(5);

// // // Get the updated state value
// // console.log(counterState.getState()); // Output: 5

// let mainPage = document.querySelector(".appContent");

// // Remove all current children of the parent element
// while (mainPage.firstChild) {
//     mainPage.removeChild(mainPage.firstChild);
//   }

// renderDefaultIndex(mainPage);
// renderGoalCreationPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2T2U7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxnRUFBZ0Usd0JBQXdCO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFD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OUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsOEVBQWU7QUFDN0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsYUFBYTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hPTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixxREFBcUQ7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3FGO0FBQzRKO0FBQ2hNO0FBQ3BDO0FBQ1U7QUFDSztBQUN3QztBQUNzRTtBQUN0QjtBQUMxQjtBQUNyRDtBQUN1STtBQUNwSTtBQUN5RDtBQUN1STtBQUMzTTtBQUNHO0FBQ0k7QUFDTTtBQUNoRTtBQUNBLHNFQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9pdGVtU3RhdHMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jdXJyZW5jeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2VuZXJhdGVGb3JtLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ29hbENyZWF0aW9uUGFnZUhUTUwuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9nb2FsRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvYXJtb3VyLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvZWxlbWVudHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy9yYXJpdGllcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL3dlYXBvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luZGV4Vmlld0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luaXRpYWxpemVJbmRleEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ludmVudG9yeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL21vZGFsRWxlbWVudHMvaXRlbUNhcmRNb2RhbC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL21vZGFsRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcXVlc3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9yZW5kZXJEZWZhdWx0SW5kZXhIdG1sLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcmVuZGVyR29hbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zaG9wRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy93ZWFwb25MaXN0LmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvem9kaWFjUG93ZXJzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgZ2V0TmV3UXVlc3QgfSBmcm9tIFwiLi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHpvZGlhY1NpZ25zIGZyb20gXCIuLi96b2RpYWNQb3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCwgb25lT2ZmQm9vbCwgZ29hbElkLCB0aW1lU3BlbnQpIHtcclxuICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgdGhpcy5xdWVzdENvbXBsZXRlID0gcXVlc3RDb21wbGV0ZTtcclxuICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5vbmVPZmZCb29sID0gb25lT2ZmQm9vbDtcclxuICAgIHRoaXMuZ29hbElkID0gZ29hbElkO1xyXG4gICAgdGhpcy50aW1lU3BlbnQgPSB0aW1lU3BlbnRcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2FsIHtcclxuICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIHJld2FyZCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgIHRoaXMucXVlc3RzID0gW107XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy50b3RhbFRpbWVSZXF1aXJlZCA9IG51bGw7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICAgIHRoaXMudGltZXNQZXJXZWVrUmVxdWlyZWQgPSBudWxsO1xyXG4gICAgdGhpcy50aW1lc1BlcldlZWtTcGVudCA9IDA7XHJcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IG51bGw7XHJcbiAgICB0aGlzLmVuZERhdGUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdENsdXN0ZXIocXVlc3RPYmplY3RpdmUpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdChxdWVzdE9iamVjdGl2ZSkge1xyXG5cclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKTtcclxuXHJcbiAgICAvLyBsZXQgcXVlc3QgPSBuZXcgUXVlc3QoXCJHbyB0byBHeW1cIiwgbnVsbCwgZmFsc2UsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDE4KSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIC8vIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgLy8gQ2FzZSAxOiBGcmVxdWVuY3kgdHlwZSBpcyB0aW1lLWFyYml0cmFyeVxyXG4gICAgIGlmICh0aGlzLnRvdGFsVGltZVJlcXVpcmVkID09IDAgfHwgdGhpcy50b3RhbFRpbWVSZXF1aXJlZCA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHRoaXMudGltZXNQZXJXZWVrUmVxdWlyZWQgLSB0aGlzLnRpbWVzUGVyV2Vla1NwZW50O1xyXG4gICAgICAgIHJldHVybiB7cXVlc3QsIHRpbWVzUGVyV2Vla1JlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgICB9XHJcblxyXG5cclxuICAgIC8vIENhc2UgMjogRnJlcXVlbmN5IHR5cGUgaXMgdGltZS1zcGVjaWZpY1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0aGlzLnRvdGFsVGltZVJlcXVpcmVkIC0gdGhpcy50b3RhbFRpbWVTcGVudDtcclxuICAgICAgICBxdWVzdE9iamVjdC5vYmplY3RpdmUgPSBxdWVzdE9iamVjdGl2ZTtcclxuICAgICAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IG51bGw7XHJcbiAgICAgICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0LnJld2FyZCA9ICh0aGlzLnJld2FyZC5hbW91bnQgLyB0aGlzLnRpbWVzUGVyV2Vla1JlcXVpcmVkKTtcclxuICAgICAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcbiAgICAgICAgcXVlc3RPYmplY3Qub25lT2ZmQm9vbCA9IG51bGw7XHJcbiAgICAgICAgcXVlc3RPYmplY3QuZ29hbElkID0gbnVsbDtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lU3BlbnQgPSAocmVtYWluaW5nVGltZSAvIHRoaXMudGltZXNQZXJXZWVrUmVxdWlyZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgbGlua1F1ZXN0VG9Hb2FsKHF1ZXN0KSB7XHJcbiAgICBpZiAodGhpcy5xdWVzdHMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cocXVlc3RzKTtcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgdGhpcy50b3RhbFRpbWVTcGVudCArPSBxdWVzdC5xdWVzdENvbXBsZXRlID8gcXVlc3QuZHVyYXRpb24gOiAwO1xyXG4gIH1cclxuIFxyXG4gIGlzR29hbENvbXBsZXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG90YWxUaW1lU3BlbnQgPj0gdGhpcy50aW1lUmVxdWlyZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xyXG4gIC8vIEdlbmVyYXRlIGEgdW5pcXVlIElEIGZvciB0aGUgcXVlc3RcclxuICAvLyBZb3UgY2FuIHVzZSBhIGxpYnJhcnkgb3IgYSBjdXN0b20gaW1wbGVtZW50YXRpb24gdG8gZ2VuZXJhdGUgdW5pcXVlIElEc1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGFzc1Jlc3RyaWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY2xhc3NSZXN0cmljdGlvbjtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGNsYXNzIEFybW91ciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCByYXJpdHksIHN0YXRzKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTdGF0cyB7XHJcbiAgICBjb25zdHJ1Y3RvcihoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMgPSB0aGlzLmdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzID0ge307XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzID0gMDtcclxuICAgIH1cclxuICBcclxuICAgIGdldFN0YXQoc3RhdE5hbWUpIHtcclxuICAgICAgY29uc3QgYmFzZVZhbHVlID0gdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICBjb25zdCBlcXVpcHBlZFZhbHVlID0gdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgcmV0dXJuIGJhc2VWYWx1ZSArIGVxdWlwcGVkVmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBzZXRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBhZGRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdICs9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1bmVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpICYmIHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSAtPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIDw9IDApIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKGhlcm9UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA2LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDgsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogOCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNixcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNixcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA4LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogNCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY2xhc3MgdHlwZS5cIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGxldmVsVXAoKSB7XHJcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5fYmFzZVN0YXRzLmxldmVsIHx8IDE7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCA9IGxldmVsICsgMTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgKz0gNTsgLy8gQXNzdW1pbmcgdGhlIHBsYXllciByZWNlaXZlcyA1IHNraWxsIHBvaW50cyBwZXIgbGV2ZWxcclxuICAgIH1cclxuICBcclxuICAgIGFsbG9jYXRlU2tpbGxQb2ludChzdGF0TmFtZSkge1xyXG4gICAgICBpZiAodGhpcy5fc2tpbGxQb2ludHMgPiAwICYmIHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IDE7XHJcbiAgICAgICAgdGhpcy5fc2tpbGxQb2ludHMgLT0gMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHNraWxsUG9pbnRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc2tpbGxQb2ludHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5cclxuICBleHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNwcml0ZUltYWdlLCBoZXJvVHlwZSwgZXF1aXBwZWRJdGVtcywgZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbFNlbGVjdGlvbiA9IGVsZW1lbnRhbFNlbGVjdGlvbjtcclxuICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSB0aGlzLmdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgICBnZXQgc3ByaXRlSW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3ByaXRlSW1hZ2Uoc3ByaXRlSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZXJvVHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2hlcm9UeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZXJvVHlwZShoZXJvVHlwZSkge1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzdGF0cyhzdGF0cykge1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBlcXVpcHBlZEl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZXF1aXBwZWRJdGVtcyhlcXVpcHBlZEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVsZW1lbnRhbEFmZmluaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbEFmZmluaXR5KSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSBlbGVtZW50YWxBZmZpbml0eTtcclxuICAgIH1cclxuXHJcbiAgICBlcXVpcEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgbG9naWMgZm9yIGVxdWlwcGluZyBhbiBpdGVtXHJcbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMuX3N0YXRzLmVxdWlwSXRlbVN0YXRzKGl0ZW0uc3RhdHMpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIGF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIGF0dGFjayBsb2dpY1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWNpYWxBdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBzcGVjaWFsIGF0dGFjayBsb2dpYyBoZXJlXHJcbiAgICAgICAgY29uc29sZS5sb2coYFNwZWNpYWwgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0JpcnRoZGF5SW5SYW5nZShiaXJ0aGRheSwgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICAgICAgLy8gQ29udmVydCB0aGUgYmlydGhkYXkgdG8gYSBEYXRlIG9iamVjdCBpZiBpdCdzIGEgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXRlID0gdHlwZW9mIGJpcnRoZGF5ID09PSAnc3RyaW5nJyA/IG5ldyBEYXRlKGJpcnRoZGF5KSA6IGJpcnRoZGF5O1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlNb250aCA9IGJpcnRoZGF5RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF5ID0gYmlydGhkYXlEYXRlLmdldERhdGUoKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5IGZhbGwgd2l0aGluIHRoZSByYW5nZVxyXG4gICAgICAgIGNvbnN0IHN0YXJ0TW9udGggPSBzdGFydERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBzdGFydERheSA9IHN0YXJ0RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZW5kTW9udGggPSBlbmREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgZW5kRGF5ID0gZW5kRGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2Fwcmljb3JuIGVkZ2UgY2FzZVxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDExICYmIGJpcnRoZGF5RGF5ID4gMjEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDAgJiYgYmlydGhkYXlEYXkgPCAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENvbXBhcmUgdGhlIG1vbnRoIGFuZCBkYXkgdmFsdWVzXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPiBzdGFydE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBzdGFydE1vbnRoICYmIGJpcnRoZGF5RGF5ID49IHN0YXJ0RGF5KSkgJiZcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoIDwgZW5kTW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IGVuZE1vbnRoICYmIGJpcnRoZGF5RGF5IDw9IGVuZERheSkpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBPdGhlciBtZXRob2RzIGNhbiBiZSBhZGRlZCBoZXJlIGZvciBmdXJ0aGVyIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKSB7XHJcblxyXG4gICAgICAgIC8vIGlmIGVsZW1lbnRhbCBzZWxlY3Rpb24gaXMgYSBiaXJ0aGRheSBwcm92aWRlZDpcclxuICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgLy8gQWxpYXMgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgb2YgdGhlIHpvZGlhYyBTaWducyBkYXRlIHJhbmdlIHByb3BlcnR5XHJcbiAgICAgICAgICAgIGxldCBkYXRlQ2hlY2tlciA9ICh6b2RpYWNTaWduc1tpbmRleF0uY29udmVydERhdGVSYW5nZSh6b2RpYWNTaWduc1tpbmRleF0uX2RhdGVSYW5nZSkpO1xyXG4gICAgICAgICAgICBsZXQgYmlydGhEYXlSYW5nZUNoZWNrID0gdGhpcy5pc0JpcnRoZGF5SW5SYW5nZShlbGVtZW50YWxTZWxlY3Rpb24sIGRhdGVDaGVja2VyLnN0YXJ0RGF0ZSwgZGF0ZUNoZWNrZXIuZW5kRGF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjayA9PSAnQ2Fwcmljb3JuJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1s5XSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaXJ0aERheVJhbmdlQ2hlY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gem9kaWFjU2lnbnMpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiA9PSB6b2RpYWNTaWduc1tpbmRleF0uX3VuaXF1ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgICAgIFxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBFbGVtZW50YWxQb3dlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiIsImV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVFbGVtZW50cyA9IFtcclxuICAgIFwiU3RlZWxcIixcclxuICAgIFwiQWJ5c3NcIixcclxuICAgIFwiWmVwaHlyXCIsXHJcbiAgICBcIkx1bmFyXCIsXHJcbiAgICBcIlNvbGFyXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiQWV0aGVyXCIsXHJcbiAgICBcIkNvcnJvZGVcIixcclxuICAgIFwiSW5mZXJub1wiLFxyXG4gICAgXCJHYWlhXCIsXHJcbiAgICBcIlZvbHRcIixcclxuICAgIFwiTWlzdFwiLFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlUmFyaXR5ID0gW1xyXG4gICAgeyByYXJpdHk6IFwibm9ybWFsXCIsIGNoYW5jZTogNDB9LFxyXG4gICAgeyByYXJpdHk6IFwidW5jb21tb25cIiwgY2hhbmNlOiAzMCB9LFxyXG4gICAgeyByYXJpdHk6IFwicmFyZVwiLCBjaGFuY2U6IDE4IH0sXHJcbiAgICB7IHJhcml0eTogXCJlcGljXCIsIGNoYW5jZTogOSB9LFxyXG4gICAgeyByYXJpdHk6IFwibGVnZW5kYXJ5XCIsIGNoYW5jZTogMyB9LFxyXG5dXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVN0YXRzID0ge1xyXG4gIG5vcm1hbDoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNSwgbWF4OiAxMCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAxMCwgbWF4OiAyMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDA1LCBtYXg6IDAuMDIgfVxyXG4gIH0sXHJcbiAgdW5jb21tb246IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDcuNSwgbWF4OiAxNSB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAxLjUsIG1heDogNy41IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTUsIG1heDogMzAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAyLCBtYXg6IDAuMDYgfSAvLyBVcGRhdGVkIG1pbiBhbmQgbWF4XHJcbiAgfSxcclxuICByYXJlOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAzLCBtYXg6IDE1IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMzAsIG1heDogNjAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjA2LCBtYXg6IDAuMTIgfSAvLyBVcGRhdGVkIG1pbiBhbmQgbWF4XHJcbiAgfSxcclxuICBlcGljOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiAyNSwgbWF4OiA1MCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiA1LCBtYXg6IDI1IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4xMiwgbWF4OiAwLjI0IH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgbGVnZW5kYXJ5OiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAxMDAsIG1heDogMjAwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4yNCwgbWF4OiAwLjMgfSAvLyBVcGRhdGVkIG1heFxyXG4gIH1cclxufTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVByZWZpeCA9IHtcclxuICAgIG5vcm1hbDogW1xyXG4gICAgICBcIk9yZGluYXJ5XCIsIFwiQ29tbW9uXCIsIFwiUGxhaW5cIiwgXCJSZWd1bGFyXCIsIFwiQmFzaWNcIlxyXG4gICAgXSxcclxuICAgIHVuY29tbW9uOiBbXHJcbiAgICAgIFwiVW5jb21tb25cIiwgXCJTdHJhbmdlXCIsIFwiU3BlY2lhbFwiLCBcIkRpc3RpbmN0aXZlXCIsIFwiQWJub3JtYWxcIlxyXG4gICAgXSxcclxuICAgIHJhcmU6IFtcclxuICAgICAgXCJSYXJlXCIsIFwiUHJlY2lvdXNcIiwgXCJFeHF1aXNpdGVcIiwgXCJNYWduaWZpY2VudFwiLCBcIkVsaXRlXCJcclxuICAgIF0sXHJcbiAgICBlcGljOiBbXHJcbiAgICAgIFwiRXBpY1wiLCBcIkdyYW5kXCIsIFwiSWxsdXN0cmlvdXNcIiwgXCJUcmFuc2NlbmRlbnRcIiwgXCJNYWplc3RpY1wiXHJcbiAgICBdLFxyXG4gICAgbGVnZW5kYXJ5OiBbXHJcbiAgICAgIFwiTGVnZW5kYXJ5XCIsIFwiVWx0aW1hdGVcIiwgXCJFdGVybmFsXCIsIFwiSW52aW5jaWJsZVwiLCBcIkdvZGxpa2VcIlxyXG4gICAgXVxyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVTdWZmaXggPSB7XHJcbiAgICBTdGVlbDogXCJvZiBXYXJcIixcclxuICAgIEFieXNzOiBcIm9mIFdhaWxpbmdcIixcclxuICAgIFplcGh5cjogXCJvZiBIb3dsaW5nXCIsXHJcbiAgICBMdW5hcjogXCJvZiBNb29ubGlnaHRcIixcclxuICAgIFNvbGFyOiBcIm9mIFN1bmxpZ2h0XCIsXHJcbiAgICBUZXJyYTogXCJvZiBUZWN0b25pY1wiLFxyXG4gICAgQWV0aGVyOiBcIm9mIEdyYXZpdHlcIixcclxuICAgIENvcnJvZGU6IFwib2YgUG9pc29uXCIsXHJcbiAgICBJbmZlcm5vOiBcIm9mIEJ1cm5pbmdcIixcclxuICAgIEdhaWE6IFwib2YgTmF0dXJlXCIsXHJcbiAgICBWb2x0OiBcIm9mIFNob2NraW5nXCIsXHJcbiAgICBNaXN0OiBcIm9mIEZyZWV6aW5nXCJcclxuICB9OyIsImltcG9ydCBHR1Rva2VuSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0dHVG9rZW4ucG5nXCJcclxuaW1wb3J0IENoZXN0S2V5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0NoZXN0S2V5LnBuZ1wiXHJcblxyXG5cclxuY29uc3QgdmFsaWRDdXJyZW5jaWVzID0gW1wiR0dUb2tlbnNcIiwgXCJDaGVzdEtleXNcIl1cclxuY29uc3QgY3VycmVuY3lJbWFnZXMgPSB7XHJcbiAgICBHR1Rva2VuczogR0dUb2tlbkltYWdlLFxyXG4gICAgQ2hlc3RLZXlzOiBDaGVzdEtleUltYWdlXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJld2FyZFV0aWxpdGllcyA9IHtcclxuXHJcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFsuLi52YWxpZEN1cnJlbmNpZXNdLFxyXG4gICAgZ2V0UmV3YXJkSW1hZ2U6IGZ1bmN0aW9uKHF1ZXN0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJld2FyZFR5cGUgPSBxdWVzdC5yZXdhcmQudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhyZXdhcmRUeXBlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVuY3lJbWFnZXNbcmV3YXJkVHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhIGRlZmF1bHQgaW1hZ2Ugb3IgaGFuZGxlIGludmFsaWQgcmV3YXJkIHR5cGVzXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSAoY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGV9VXNlckludGVyZmFjZWApO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50fWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbmN5QWdncmVnYXRvciAoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdCkge1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVlc3QucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudCArPSBjdXJyZW50UXVlc3QucmV3YXJkLmFtb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSBcIi4vY2xhc3Nlcy9jbGFzc2VzXCI7XHJcblxyXG5leHBvcnQgbGV0IGN1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudFF1ZXN0TGlzdCcpIHx8IFtdO1xyXG5leHBvcnQgbGV0IGN1cnJlbnRHb2FsTGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50R29hbExpc3QnKSB8fCBbXTtcclxuZXhwb3J0IGxldCBjdXJyZW5jeUNvbnRhaW5lciA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW5jeUNvbnRhaW5lcicpIHx8IFtuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiQ2hlc3RLZXlzXCIsIDApXTtcclxuZXhwb3J0IGxldCBwbGF5ZXJJbnZlbnRvcnkgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVySW52ZW50b3J5JykgfHwgW107XHJcbmV4cG9ydCBsZXQgcGxheWVyRXF1aXBwZWRJdGVtcyA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJFcXVpcHBlZEl0ZW1zJykgfHwgW107IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZVRvQ29tcGxldGUgKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSAoKTtcclxuXHJcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0U2Vjb25kcyhzZWNvbmRzKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyUXVlc3RMaXN0LCBjcmVhdGVHaG9zdENhcmQgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlLCBjcmVhdGVRdWVzdFBhcmFsbGF4IH0gZnJvbSBcIi4vaW5kZXhWaWV3RnVuY3Rpb25zXCI7XHJcbi8vIGltcG9ydCB7IGN1cnJlbnRHb2FsTGlzdCwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudEdvYWxMaXN0KSB7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBhbmQgUGVyc2lzdGluZyBFdmVudHM6XHJcbiAgICAvLyAxLiBSZW5kZXIgQ3VycmVuY3kgVmFsdWVzXHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlKCk7XHJcbiAgICAgICAgY3JlYXRlUXVlc3RQYXJhbGxheCgpO1xyXG4gICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIilcclxuICAgICAgICBxdWVzdFBhcmFsbGF4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21XZWFwb24gfSBmcm9tIFwiLi9zaG9wRnVuY3Rpb25cIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UsIGdldFdlYXBvbkltYWdlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9hcm1vdXInLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBlbGVtZW50SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG4gIFxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ3VycmVuY3lBbW91bnQoY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgPCAyMCkge1xyXG4gICAgICBhbGVydChcIklOU1VGRklDSUVOVCBHRyBUT0tFTlNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbmN5Q29udGFpbmVyWzBdLmFtb3VudCAtPSAyMDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2xvdE1hY2hpbmVJdGVtIChoZXJvU2VsZWN0aW9uKSB7XHJcbiAgIC8vIEdlbmVyYXRlIHRoZSB3ZWFwb24gdGhlIHBsYXllciByZWNlaXZlcyB1c2luZyB0aGUgZ2VuZXJhdGVSYW5kb21XZWFwb24gZnVuY3Rpb25cclxuICAgbGV0IGdlbmVyYXRlZFdlYXBvbiA9IGdlbmVyYXRlUmFuZG9tV2VhcG9uKGhlcm9TZWxlY3Rpb24pO1xyXG5cclxuICAgLy8gUGFyc2UgdGhlIHdlYXBvbiBDbGFzcyBkYXRhIHRvIGJlIHVzZWQgZm9yIGZyb250IGVuZCBpbWFnZXNcclxuICAgbGV0IHJlc3VsdGluZ1R5cGUgPSBnZW5lcmF0ZWRXZWFwb24uX3R5cGU7XHJcbiAgIGxldCByZXN1bHRpbmdSYXJpdHkgPSBnZW5lcmF0ZWRXZWFwb24uX3Jhcml0eTtcclxuICAgbGV0IHJlc3VsdGluZ0VsZW1lbnQgPSBnZW5lcmF0ZWRXZWFwb24uX2VsZW1lbnQ7XHJcblxyXG4gICAvLyBQYXNzIHRoZSBkYXRhIHRvIGEgZmluZCBmdW5jdGlvbiB0aGF0IGxvY2F0ZXMgdGhlIGNoZWNrcyBlYWNoIGltYWdlIChzdHJpbmcpIFVSTCB0byBzZWUgaWYgaXQgaW5jbHVkZXMgdGhlIHBhcnNlZCBkYXRhICAgXHJcbiAgIC8vIElmIGRhdGEgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBpbWFnZSBsaW5rIGFzIHZhcmlhYmxlIFxyXG4gICBsZXQgc2VsZWN0ZWRUeXBlSW1hZ2UgPSBnZXRXZWFwb25JbWFnZShyZXN1bHRpbmdUeXBlKTtcclxuICAgbGV0IHNlbGVjdGVkUmFyaXR5SW1hZ2UgPSBnZXRSYXJpdHlJbWFnZShyZXN1bHRpbmdSYXJpdHkpO1xyXG4gICBsZXQgc2VsZWN0ZWRFbGVtZW50SW1hZ2UgPSBnZXRFbGVtZW50SW1hZ2UocmVzdWx0aW5nRWxlbWVudCk7XHJcbiAgIFxyXG4gICAvLyBJbWFnZXMgZm9yIHRoZSBlcXVpcG1lbnQgcmVlbFxyXG4gICBjb25zdCBlcXVpcG1lbnRSZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwbWVudFJlZWwnKTtcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wgPSAgZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkVHlwZUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRXF1aXBtZW50U3ltYm9sID0gZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXBvbkltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25JbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21FcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgIFxyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgcmFyaXR5IHJlZWxcclxuICAgY29uc3QgcmFyaXR5UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXJpdHlSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRSYXJpdHlTeW1ib2wgPSAgcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkUmFyaXR5SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BSYXJpdHlTeW1ib2wgPSByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFyaXR5SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhcml0eUltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbVJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcbiAgICAgIFxyXG5cclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZWxlbWVudCByZWVsXHJcbiAgIGNvbnN0IGVsZW1lbnRSZWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnRSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudFN5bWJvbCA9ICBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZEVsZW1lbnRJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BFbGVtZW50U3ltYm9sID0gZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50SW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIHJldHVybiBnZW5lcmF0ZWRXZWFwb247XHJcbiB9XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaW4gKGhlcm9TZWxlY3Rpb24sIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgaWYgKGNoZWNrVmFsaWRDdXJyZW5jeUFtb3VudChjdXJyZW5jeUNvbnRhaW5lcikpIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTbG90TWFjaGluZUl0ZW0oaGVyb1NlbGVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVzZXRTbG90TWFjaGluZUltYWdlcyAoKSB7XHJcbiAgICBjb25zdCBzeW1ib2xFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ltYm9sXCIpO1xyXG4gICAgY29uc29sZS5sb2coc3ltYm9sRWxlbWVudHMpO1xyXG5cclxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzeW1ib2wgZWxlbWVudHNcclxuICAgICAgc3ltYm9sRWxlbWVudHMuZm9yRWFjaCgoc3ltYm9sRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHN5bWJvbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcclxuICAgICAgfSlcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuU2xvdE1hY2hpbmVNb2RhbCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbG90TWFjaGluZU1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICByZXNldFNsb3RNYWNoaW5lSW1hZ2VzKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdldERhdGFGb3JtKHR5cGUpIHtcclxuXHJcblxyXG4gICAgaWYgKHR5cGUgPT09IFwiZ29hbFwiKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ29hbENvbnRhaW5lcicpO1xyXG4gIFxyXG4gICAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50XHJcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2dvYWwtZm9ybSc7IC8vIEFkZCBhIGNsYXNzIGZvciBzdHlsaW5nXHJcbiAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgXHJcbiAgICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBleGFtcGxlIGxhYmVsXHJcbiAgICAgIGNvbnN0IGNyZWF0ZUV4YW1wbGVMYWJlbCA9IChleGFtcGxlVGV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGV4YW1wbGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZXhhbXBsZUxhYmVsLnRleHRDb250ZW50ID0gYCR7ZXhhbXBsZVRleHR9YDtcclxuICAgICAgICBleGFtcGxlTGFiZWwuY2xhc3NOYW1lID0gJ2V4YW1wbGUtbGFiZWwnO1xyXG4gICAgICAgIHJldHVybiBleGFtcGxlTGFiZWw7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIC8vIENyZWF0ZSBnb2FsIG5hbWUgaW5wdXRcclxuICAgICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgbmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJHb2FsIE5hbWUvT2JqZWN0aXZlOlwiO1xyXG4gICAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZ29hbE5hbWUnKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUV4YW1wbGVMYWJlbCgnV2hhdCBpcyBteSBkZXNpcmVkIEdvYWw/IEFuIGUuZzogXCJCZWNvbWUgZmx1ZW50IGluIFNwYW5pc2hcIicpKTtcclxuICBcclxuICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZ29hbE5hbWUnKTtcclxuICAgICAgbmFtZUlucHV0LmlkID0gJ2dvYWxOYW1lJzsgLy8gQWRkIGFuIGlkIGZvciB0YXJnZXRpbmcgd2l0aCBDU1NcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gIFxyXG4gICAgICAvLyBDcmVhdGUgdGFzayBpbnB1dFxyXG4gICAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgUmVxdWlyZWQ6XCI7XHJcbiAgICAgIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrJyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFeGFtcGxlTGFiZWwoJ1doYXQgdGFzayB3aWxsIGhlbHAgbWUgYWNoaWV2ZSB0aGlzIGdvYWw/IEFuIGUuZzogU3R1ZHkgU3BhbmlzaCcpKTtcclxuICBcclxuICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAndGFzaycpO1xyXG4gICAgICB0YXNrSW5wdXQuaWQgPSAndGFzayc7IC8vIEFkZCBhbiBpZCBmb3IgdGFyZ2V0aW5nIHdpdGggQ1NTXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIGZyZXF1ZW5jeSBpbnB1dFxyXG4gICAgICBjb25zdCBmcmVxdWVuY3lMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIGZyZXF1ZW5jeUxhYmVsLnRleHRDb250ZW50ID0gXCJGcmVxdWVuY3k6XCI7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJlcXVlbmN5TGFiZWwpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gIFxyXG4gICAgICBjb25zdCBmcmVxdWVuY3lPcHRpb25zID0gW1xyXG4gICAgICAgIHsgbGFiZWw6ICdIb3Vycy9kYXknLCB2YWx1ZTogJ2hvdXJzJyB9LFxyXG4gICAgICAgIHsgbGFiZWw6ICdNaW51dGVzL2RheScsIHZhbHVlOiAnbWludXRlcycgfSxcclxuICAgICAgICB7IGxhYmVsOiAnT25jZS9kYXknLCB2YWx1ZTogJ29uY2UnIH1cclxuICAgICAgXTtcclxuICBcclxuICAgICAgY29uc3QgZnJlcXVlbmN5VmFsdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlTGFiZWwudGV4dENvbnRlbnQgPSBcIkZyZXF1ZW5jeSBWYWx1ZTpcIjtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lWYWx1ZUxhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFeGFtcGxlTGFiZWwoJzInKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeVZhbHVlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBmcmVxdWVuY3lWYWx1ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgZnJlcXVlbmN5VmFsdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZnJlcXVlbmN5VmFsdWUnKTtcclxuICAgICAgZnJlcXVlbmN5VmFsdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsICcxJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlSW5wdXQuaWQgPSAnZnJlcXVlbmN5VmFsdWUnOyAvLyBBZGQgYW4gaWQgZm9yIHRhcmdldGluZyB3aXRoIENTU1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZyZXF1ZW5jeVZhbHVlSW5wdXQpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gIFxyXG4gICAgICBmcmVxdWVuY3lPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgb3B0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWw7XHJcbiAgXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG9wdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xyXG4gICAgICAgIG9wdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdmcmVxdWVuY3lUeXBlJyk7XHJcbiAgICAgICAgb3B0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbi52YWx1ZSk7XHJcbiAgXHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25MYWJlbCk7XHJcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChvcHRpb25JbnB1dCk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gIFxyXG4gICAgICAvLyBDcmVhdGUgdG90YWwgdGltZSBpbnB1dFxyXG4gICAgICBjb25zdCB0b3RhbFRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIHRvdGFsVGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUb3RhbCBUaW1lIHRvIENvbXBsZXRlIHRoZSBHb2FsOlwiO1xyXG4gICAgICB0b3RhbFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0b3RhbFRpbWUnKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0b3RhbFRpbWVMYWJlbCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRXhhbXBsZUxhYmVsKCcxMCBob3VycyBhIHdlZWsnKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHRvdGFsVGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgdG90YWxUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgdG90YWxUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvdGFsVGltZScpO1xyXG4gICAgICB0b3RhbFRpbWVJbnB1dC5pZCA9ICd0b3RhbFRpbWUnOyAvLyBBZGQgYW4gaWQgZm9yIHRhcmdldGluZyB3aXRoIENTU1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRvdGFsVGltZUlucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIGEgc3VibWl0IGJ1dHRvblxyXG4gICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xyXG4gICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IFwicXVlc3RcIikge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdWVzdFBhcmFsbGF4Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBmb3JtIGVsZW1lbnRcclxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnY3JlYXRlUXVlc3RGb3JtJztcclxuICAgICAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZm9ybVRvcCBkaXZcclxuICAgICAgICAgICAgY29uc3QgZm9ybVRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmb3JtVG9wRGl2LmNsYXNzTmFtZSA9ICdmb3JtVG9wJztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVG9wRGl2KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZm9ybVRvcEJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBmb3JtVG9wQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGZvcm1Ub3BCdXR0b24uY2xhc3NOYW1lID0gJ2Zvcm1Ub3BCdXR0b24nO1xyXG4gICAgICAgICAgICBmb3JtVG9wQnV0dG9uLmlkID0gJ2Zvcm1Ub3BFeGl0QnV0dG9uJztcclxuICAgICAgICAgICAgZm9ybVRvcEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcclxuICAgICAgICAgICAgZm9ybVRvcERpdi5hcHBlbmRDaGlsZChmb3JtVG9wQnV0dG9uKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgb2JqZWN0aXZlIGlucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RPYmplY3RpdmUnKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlTGFiZWwudGV4dENvbnRlbnQgPSAnT2JqZWN0aXZlOic7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob2JqZWN0aXZlTGFiZWwpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0T2JqZWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LmlkID0gJ3F1ZXN0T2JqZWN0aXZlJztcclxuICAgICAgICAgICAgb2JqZWN0aXZlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob2JqZWN0aXZlSW5wdXQpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBkYXRlIGlucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUgdG8gQ29tcGxldGU6JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0RGF0ZScpO1xyXG4gICAgICAgICAgICBkYXRlSW5wdXQuaWQgPSAncXVlc3REYXRlJztcclxuICAgICAgICAgICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGN1cnJlbmN5IHR5cGUgc2VsZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5VHlwZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RDdXJyZW5jeVR5cGUnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlTGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgVHlwZTonO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGN1cnJlbmN5VHlwZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeVR5cGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdEN1cnJlbmN5VHlwZScpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGVTZWxlY3QuaWQgPSAncXVlc3RDdXJyZW5jeVR5cGUnO1xyXG4gICAgICAgICAgICBjdXJyZW5jeVR5cGVTZWxlY3QuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3VycmVuY3lUeXBlU2VsZWN0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeU9wdGlvbnMgPSBbXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ0dHVG9rZW5zJywgbGFiZWw6ICdHRyBUb2tlbnMnIH0sXHJcbiAgICAgICAgICAgICAgeyB2YWx1ZTogJ0NoZXN0S2V5cycsIGxhYmVsOiAnQ2hlc3QgS2V5cycgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGN1cnJlbmN5T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICBjdXJyZW5jeU9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgb3B0aW9uLnZhbHVlKTtcclxuICAgICAgICAgICAgICBjdXJyZW5jeU9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvbi5sYWJlbDtcclxuICAgICAgICAgICAgICBjdXJyZW5jeVR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQoY3VycmVuY3lPcHRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgY3VycmVuY3kgYW1vdW50IGlucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5QW1vdW50TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFtb3VudExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0Q3VycmVuY3lBbW91bnQnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRMYWJlbC50ZXh0Q29udGVudCA9ICdDdXJyZW5jeSBBbW91bnQ6JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjdXJyZW5jeUFtb3VudExhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUFtb3VudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0Q3VycmVuY3lBbW91bnQnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRJbnB1dC5pZCA9ICdxdWVzdEN1cnJlbmN5QW1vdW50JztcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjdXJyZW5jeUFtb3VudElucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZm9ybUJ1dHRvbkRpdlxyXG4gICAgICAgICAgICBjb25zdCBmb3JtQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGZvcm1CdXR0b25EaXYuY2xhc3NOYW1lID0gJ2Zvcm1CdXR0b25EaXYnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b25EaXYpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXHJcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uY2xhc3NOYW1lID0gJ2Zvcm1CdXR0b24nO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24uaWQgPSAnZm9ybVN1Ym1pdEJ1dHRvbic7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG4gICAgICAgICAgICBmb3JtQnV0dG9uRGl2LmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQWRkIGZvcm0gc3VibWl0IGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGZvcm0gc3VibWlzc2lvblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gUmV0cmlldmUgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0aXZlID0gb2JqZWN0aXZlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW5jeVR5cGUgPSBjdXJyZW5jeVR5cGVTZWxlY3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lBbW91bnQgPSBjdXJyZW5jeUFtb3VudElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgZm9ybSB2YWx1ZXNcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9iamVjdGl2ZTogXCIgKyBvYmplY3RpdmUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGF0ZSB0byBDb21wbGV0ZTogXCIgKyBkYXRlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbmN5IFR5cGU6IFwiICsgY3VycmVuY3lUeXBlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbmN5IEFtb3VudDogXCIgKyBjdXJyZW5jeUFtb3VudCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgICAvLyBZb3UgY2FuIHBlcmZvcm0gb3RoZXIgb3BlcmF0aW9ucyB3aXRoIHRoZSBmb3JtIGRhdGEgaGVyZVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gUmVzZXQgdGhlIGZvcm1cclxuICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudCAoXHJcbiAgICBjb250YWluZXJDbGFzc05hbWUsIFxyXG4gICAgaW5wdXRUeXBlLCBcclxuICAgIGlucHV0SUQsIFxyXG4gICAgaW5wdXRQbGFjZUhvbGRlclRleHQsXHJcbiAgICBleGFtcGxlVGV4dENvbnRlbnQsIFxyXG4gICAgZXhhbXBsZUNsYXNzTmFtZVxyXG4gICAgKSB7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc05hbWUgPSBjb250YWluZXJDbGFzc05hbWU7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsZW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0VHlwZSk7XHJcbiAgICBlbGVtZW50SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgaW5wdXRQbGFjZUhvbGRlclRleHQpO1xyXG4gICAgZWxlbWVudElucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjEwMFwiKTsgLy8gU2V0IGNoYXJhY3RlciBsaW1pdCB0byA3MFxyXG4gICAgZWxlbWVudElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SUQpO1xyXG5cclxuICAgIGxldCBlbGVtZW50RXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbiAgICBlbGVtZW50RXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBleGFtcGxlVGV4dENvbnRlbnQ7XHJcbiAgICBlbGVtZW50RXhhbXBsZVRleHQuY2xhc3NMaXN0LmFkZChleGFtcGxlQ2xhc3NOYW1lKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGlucHV0IGVsZW1lbnQgdG8gdGhlIGVsZW1lbnRcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudElucHV0KTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbiAgICBjb250YWluZXJDbGFzc05hbWUsIFxyXG4gICAgaW5wdXRDb250YWluZXJDbGFzc05hbWUsIFxyXG4gICAgZXhhbXBsZVRleHRDb250YWluZXJDbGFzc05hbWUsIFxyXG4gICAgcHJvbXB0VGl0bGUsIFxyXG4gICAgaW5wdXRWYWx1ZUNsYXNzLFxyXG4gICAgaW5wdXRWYWx1ZUlELCBcclxuICAgIGV4YW1wbGVUZXh0Q29udGVudCwgXHJcbiAgICBleGFtcGxlVGV4dENsYXNzTmFtZSxcclxuICAgIGV4YW1wbGVUZXh0SURcclxuICAgICkge1xyXG5cclxuICAgIGxldCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChjb250YWluZXJDbGFzc05hbWUpO1xyXG5cclxuICAgIGxldCBlbGVtZW50SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoaW5wdXRDb250YWluZXJDbGFzc05hbWUpO1xyXG5cclxuICAgIGxldCBlbGVtZW50RXhhbXBsZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudEV4YW1wbGVUZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoZXhhbXBsZVRleHRDb250YWluZXJDbGFzc05hbWUpO1xyXG5cclxuICAgIGxldCBlbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBlbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9tcHRUaXRsZTtcclxuXHJcbiAgICBsZXQgZWxlbWVudElucHV0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBlbGVtZW50SW5wdXRWYWx1ZS50eXBlID0gJ251bWJlcic7XHJcbiAgICBlbGVtZW50SW5wdXRWYWx1ZS5jbGFzc0xpc3QuYWRkKGlucHV0VmFsdWVDbGFzcyk7XHJcbiAgICBlbGVtZW50SW5wdXRWYWx1ZS5pZCA9IGlucHV0VmFsdWVJRDtcclxuXHJcbiAgICBsZXQgZWxlbWVudENvbnRhaW5lckV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lckV4YW1wbGVUZXh0LnRleHRDb250ZW50ID0gZXhhbXBsZVRleHRDb250ZW50O1xyXG4gICAgZWxlbWVudENvbnRhaW5lckV4YW1wbGVUZXh0LmNsYXNzTGlzdC5hZGQoZXhhbXBsZVRleHRDbGFzc05hbWUpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lckV4YW1wbGVUZXh0LmlkID0gZXhhbXBsZVRleHRJRDtcclxuXHJcbiAgICBlbGVtZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudFRpdGxlKTtcclxuICAgIGVsZW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SW5wdXRWYWx1ZSk7XHJcbiAgICBlbGVtZW50RXhhbXBsZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lckV4YW1wbGVUZXh0KTtcclxuXHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRJbnB1dENvbnRhaW5lcik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRFeGFtcGxlVGV4dENvbnRhaW5lcik7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRDb250YWluZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50IChlbGVtZW50Q29udGFpbmVyLCBpbnB1dENvbnRhaW5lckNsYXNzTmFtZSkge1xyXG5cclxuICAgICAgICBsZXQgaW5wdXRDb250YWluZXIgPSBlbGVtZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0Q29udGFpbmVyQ2xhc3NOYW1lfWApXHJcblxyXG4gXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSByYWRpbyBidXR0b25zIGZvciB0aW1lIG9wdGlvbnNcclxuXHJcbiAgICAgICAgLy8gSG91cnMgUmFkaW8gTGFiZWxcclxuICAgICAgICBsZXQgaG91cnNSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKFwicmFkaW9MYWJlbFwiKTtcclxuICAgICAgICBsZXQgaG91cnNSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbGVtZW50XCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhvdXJzXCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25cIik7XHJcblxyXG4gICAgICAgIC8vIE1pbnV0ZXMgUmFkaW8gTGFiZWxcclxuICAgICAgICBsZXQgbWludXRlc1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbWludXRlc1JhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgICAgICAgbGV0IG1pbnV0ZXNSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIG1pbnV0ZXNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBtaW51dGVzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWxlbWVudFwiKTtcclxuICAgICAgICBtaW51dGVzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm1pbnV0ZXNcIik7XHJcbiAgICAgICAgbWludXRlc1JhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcInJhZGlvQnV0dG9uXCIpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIC8vIE4vQSBSYWRpbyBMYXZlbFxyXG4gICAgICAgIGxldCBuYVJhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgbmFSYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0xhYmVsXCIpO1xyXG4gICAgICAgIGxldCBuYVJhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbmFSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBuYVJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVsZW1lbnRcIik7XHJcbiAgICAgICAgbmFSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibmFcIik7XHJcbiAgICAgICAgbmFSYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJyYWRpb0J1dHRvblwiKTtcclxuXHJcbiAgICAgICAgLy8gUmFkaW8gQ2hhbmdlIFRleHQgRXZlbnQgTGlzdGVuZXJzXHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlUmFkaW9DaGFuZ2UpO1xyXG4gICAgICAgIG1pbnV0ZXNSYWRpb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlUmFkaW9DaGFuZ2UpO1xyXG4gICAgICAgIG5hUmFkaW9JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVJhZGlvQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICBpZiAoaW5wdXRDb250YWluZXJDbGFzc05hbWUgPT0gXCJnb2FsUXVlc3RUaW1lSW5wdXRDb250YWluZXJcIikge1xyXG4gICAgICAgICAgICBob3Vyc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG91cnNcIikpO1xyXG4gICAgICAgICAgICBtaW51dGVzUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChtaW51dGVzUmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIG1pbnV0ZXNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTWludXRlc1wiKSk7ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1pbnV0ZXNSYWRpb0xhYmVsKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIGhvdXJzUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkhvdXJzXCIpKTtcclxuICAgICAgICAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKG5hUmFkaW9JbnB1dCk7XHJcbiAgICAgICAgICAgIG5hUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk4vQVwiKSk7XHJcblxyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChob3Vyc1JhZGlvTGFiZWwpO1xyXG4gICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChuYVJhZGlvTGFiZWwpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIGhhbmRsZSByYWRpbyBidXR0b24gY2hhbmdlc1xyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJhZGlvQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVBc3NpZ25tZW50QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsVGltZUFzc2lnbm1lbnRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVBc3NpZ25tZW50RXhhbXBsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVBc3NpZ25tZW50RXhhbXBsZVRleHRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvYWxRdWVzdFRpbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbFF1ZXN0VGltZUlucHV0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBnb2FsUXVlc3RUaW1lRXhhbXBsZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2dvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dFwiKTtcclxuICAgICAgICAgICAgY29uc3QgZ29hbFF1ZXN0VGltZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbFF1ZXN0VGltZUlucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBob3Vyc0J1dHRvbiA9IGdvYWxRdWVzdFRpbWVDb250YWluZXIucXVlcnlTZWxlY3RvcihcImlucHV0W3ZhbHVlPSdob3VycyddXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzQnV0dG9uID0gZ29hbFF1ZXN0VGltZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdmFsdWU9J21pbnV0ZXMnXVwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDYXNlOiBOL0Egc2VsZWN0ZWQgaW4gQXNzaWduIFRpbWUgRmllbGRcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJuYVwiKSB7XHJcbiAgICAgICAgICAgICAgLy8gSWYgTi9BIGlzIHNlbGVjdGVkLCBkaXNhYmxlIHRoZSBpbnB1dCBmaWVsZCBhbmQgc2hvdyB0aGUgTi9BIG1lc3NhZ2VcclxuICAgICAgICAgICAgICB0aW1lQXNzaWdubWVudEFtb3VudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgZ29hbFF1ZXN0VGltZUlucHV0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aW1lQXNzaWdubWVudEV4YW1wbGVUZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgIFwiU2VsZWN0aW5nICdOL0EnIGZvciB0aW1lIGFzc2lnbm1lbnQgd2lsbCByZXF1aXJlIHlvdXIgZ29hbCB0byBiZSBjb21wbGV0ZWQgYmFzZWQgc29sZWx5IG9uIHRoZSBjb21wbGV0aW9uIG9mIHF1ZXN0cy4gTm8gdGltZSBlbnRyeSBpcyByZXF1aXJlZC5cIjtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dENvbnRhaW5lckNsYXNzTmFtZSA9PT0gXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHJhZGlvIGJ1dHRvbnMgZm9yIGhvdXJzIGFuZCBtaW51dGVzIGluIGdvYWxRdWVzdFRpbWVJbnB1dENvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBnb2FsUXVlc3RUaW1lRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBcIkFsbCB0aW1lIGlucHV0IGZpZWxkcyBkaXNhYmxlZCBmb3IgdGhpcyBxdWVzdCwgYXMgdGhlIHRoZSB0aW1lIGFzc2lnbmVkIHRvIHRoaXMgZ29hbCBpcyAnTi9BJy5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJob3Vyc1wiICYmIGlucHV0Q29udGFpbmVyQ2xhc3NOYW1lID09IFwidGltZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lclwiKSB7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBJZiBIb3VycyBpcyBzZWxlY3RlZCwgZW5hYmxlIHRoZSBpbnB1dCBmaWVsZCBhbmQgc2hvdyB0aGUgSG91cnMgbWVzc2FnZVxyXG4gICAgICAgICAgICAgIHRpbWVBc3NpZ25tZW50QW1vdW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgZ29hbFF1ZXN0VGltZUlucHV0LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgaG91cnNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBtaW51dGVzQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgIHRpbWVBc3NpZ25tZW50RXhhbXBsZVRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgXCJTZWxlY3RpbmcgJ0hvdXJzJyBmb3IgdGltZSBhc3NpZ25tZW50IHdpbGwgcmVxdWlyZSB5b3VyIGdvYWwgdG8gYmUgY29tcGxldGVkIGJhc2VkIG9uIG92ZXJhbGwgdGltZSBjb21wbGV0aW9uLiBUaW1lIHdpbGwgYmUgYWxsb3R0ZWQgdG8gYWxsIG91dHN0YW5kaW5nIHF1ZXN0cyBhdmFpbGFibGUgdG8gdGhlIGdvYWwuXCI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIm1pbnV0ZXNcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgSG91cnMgaXMgc2VsZWN0ZWQsIGVuYWJsZSB0aGUgaW5wdXQgZmllbGQgYW5kIHNob3cgdGhlIEhvdXJzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICdUaGUgcmVxdWlyZWQgdGltZSB0byBjb21wbGV0ZSB0aGlzIHF1ZXN0IHdpbGwgYmUgZG9jdW1lbnRlZCBpbiBcIk1pbnV0ZXNcIi4nXHJcbiAgICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJob3Vyc1wiICYmIGlucHV0Q29udGFpbmVyQ2xhc3NOYW1lID09IFwiZ29hbFF1ZXN0VGltZUlucHV0Q29udGFpbmVyXCIpIHtcclxuICAgICAgICAgICAgICAgIC8vIElmIEhvdXJzIGlzIHNlbGVjdGVkLCBlbmFibGUgdGhlIGlucHV0IGZpZWxkIGFuZCBzaG93IHRoZSBIb3VycyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBnb2FsUXVlc3RUaW1lRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgICAnVGhlIHJlcXVpcmVkIHRpbWUgdG8gY29tcGxldGUgdGhpcyBxdWVzdCB3aWxsIGJlIGRvY3VtZW50ZWQgaW4gXCJIb3Vyc1wiLic7XHJcbiAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgIH1cclxuXHJcblxyXG4gIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0Rm9ybSAoKSB7XHJcbiAgICBjb25zdCBxdWVzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuICAgIHF1ZXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicXVlc3RGb3JtXCIpO1xyXG5cclxuICAgIC8vIFF1ZXN0IE5hbWVcclxuICAgIGxldCBxdWVzdE5hbWVDb250YWluZXIgPSBjcmVhdGVPYmplY3RpdmVJbnB1dEVsZW1lbnQgKFxyXG4gICAgICAgIFwiZm9ybUZpZWxkQ29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwidGV4dFwiLCBcclxuICAgICAgICBcInF1ZXN0R29hbE9iamVjdGl2ZVwiLFxyXG4gICAgICAgIFwiRW50ZXIgWW91ciBRdWVzdCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4gICAgICAgICdFbnRlciB0aGUgXCJvYmplY3RpdmVcIiBPUiBcIm5hbWVcIiBvZiB5b3VyIHF1ZXN0IChhY3Rpb24pIGZpZWxkIGFib3ZlLiBFeGFtcGxlcyBvZiBxdWVzdHMgYXJlOiBcIlN0dWR5IFNwYW5pc2hcIiBvciBcIkRvIEFiLUNydW5jaGVzXCInLFxyXG4gICAgICAgIFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIlxyXG4gICAgICAgICk7XHJcbiAgXHJcbiAgICBxdWVzdEZvcm0uYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBHb2FsIFRpbWUgQWxsb3RtZW50XHJcbiAgICBsZXQgZ29hbFRpbWVDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbiAgICAgICAgXCJmb3JtRmllbGRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJnb2FsUXVlc3RGcmVxdWVuY3lJbnB1dENvbnRhaW5lclwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdEZyZXF1ZW5jeUV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwiUXVlc3QgRnJlcXVlbmN5OlwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdEZyZXF1ZW5jeUlucHV0XCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0RnJlcXVlbmN5SW5wdXRcIiwgXHJcbiAgICAgICAgXCJBc3NpZ24gcmV3YXJkcyB0byB5b3VyIGdvYWwuIFRoZSBzcGVjaWZpZWQgYW1vdW50IHdpbGwgYmUgc3BsaXQgYW1vbmcgeW91ciBvdXRzdGFuZGluZyBxdWVzdHMuXCIsIFxyXG4gICAgICAgIFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIixcclxuICAgICAgICBcImdvYWxRdWVzdEZyZXF1ZW5jeUlucHV0RXhhbXBsZVRleHRcIixcclxuICAgICk7XHJcblxyXG4gICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGdvYWxUaW1lQ29udGFpbmVyKTtcclxuICBcclxuICAgIC8vIEZyZXF1ZW5jeSBvZiBRdWVzdFxyXG4gICAgbGV0IGZyZXF1ZW5jeUNvbnRhaW5lciA9IGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgICAgICBcImZvcm1GaWVsZENvbnRhaW5lclwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdFRpbWVJbnB1dENvbnRhaW5lclwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dENvbnRhaW5lclwiLCBcclxuICAgICAgICBcIkFzc2lnbiBUaW1lIHRvIFF1ZXN0OlwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdFRpbWVJbnB1dFwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdFRpbWVJbnB1dFwiLCBcclxuICAgICAgICBcIkFzc2lnbiB0aW1lIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCB0aW1lIHdpbGwgYmUgc3BsaXQgYW1vbmcgeW91ciBvdXRzdGFuZGluZyBxdWVzdHMuXCIsIFxyXG4gICAgICAgIFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIixcclxuICAgICAgICBcImdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dFwiLFxyXG4gICAgKTtcclxuXHJcbiAgICBhZGRSYWRpb0J1dHRvbnNUb0VsZW1lbnQoZnJlcXVlbmN5Q29udGFpbmVyLCBcImdvYWxRdWVzdFRpbWVJbnB1dENvbnRhaW5lclwiKTtcclxuICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lDb250YWluZXIpO1xyXG4gIFxyXG4gICAgLy8gR29hbCBEZWFkbGluZVxyXG4gICAgbGV0IGRlYWRsaW5lQ29udGFpbmVyID0gY3JlYXRlRm9ybUZpZWxkKFxyXG4gICAgICBcImRhdGVcIixcclxuICAgICAgXCJkZWFkbGluZVwiLFxyXG4gICAgICBcIkVudGVyIHRoZSBkZWFkbGluZSBmb3IgeW91ciBxdWVzdC5cIixcclxuICAgICAgXCJFbnRlciB0aGUgc3RhcnQgZGF0ZSBhbmQgZW5kIGRhdGUgZm9yIHlvdXIgR29hbC5cIlxyXG4gICAgKTtcclxuICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcbiBcclxuICAgICAgICBcclxuICAgIHJldHVybiBxdWVzdEZvcm07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdENvbnRhaW5lciAoXHJcbiAgICBjb250YWluZXJDbGFzc05hbWUsXHJcbiAgICBwcm9tcHRUaXRsZSxcclxuICAgIGNvbnRhaW5lcklucHV0RmllbGRDbGFzc05hbWUsXHJcbiAgICBsaXN0SXRlbXNDb250YWluZXJDbGFzc1xyXG4pIHtcclxuICAgICAgICBcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY29udGFpbmVyQ2xhc3NOYW1lO1xyXG5cclxuICAgIGxldCBlbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICBlbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9tcHRUaXRsZTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudFRpdGxlKTtcclxuXHJcbiAgICBsZXQgZWxlbWVudElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudElucHV0RmllbGQuY2xhc3NMaXN0LmFkZChjb250YWluZXJJbnB1dEZpZWxkQ2xhc3NOYW1lKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudElucHV0RmllbGQpO1xyXG5cclxuICAgIGxldCBsaXN0SXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGlzdEl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQobGlzdEl0ZW1zQ29udGFpbmVyQ2xhc3MpO1xyXG4gICAgbGlzdEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVF1ZXN0Rm9ybSgpKTtcclxuICAgIGVsZW1lbnRJbnB1dEZpZWxkLmFwcGVuZENoaWxkKGxpc3RJdGVtc0NvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1GaWVsZCh0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgZXhhbXBsZVRleHQpIHtcclxuICAgIGxldCBmb3JtRmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9ybUZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JtRmllbGRDb250YWluZXJcIik7XHJcbiAgXHJcbiAgICBpZiAodHlwZSA9PT0gXCJkYXRlXCIpIHtcclxuICAgICAgLy8gQ3JlYXRlIGEgZGl2IHRvIGhvdXNlIHRoZSBkYXRlIGlucHV0c1xyXG4gICAgICBsZXQgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGVDb250YWluZXJcIik7XHJcblxyXG4gICAgICBsZXQgc3RhcnREYXRlSW5wdXQgPSBjcmVhdGVJbnB1dCh0eXBlLCBuYW1lICsgXCJTdGFydFwiLCBcIlN0YXJ0IFwiICsgcGxhY2Vob2xkZXIpO1xyXG4gICAgICBsZXQgZW5kRGF0ZUlucHV0ID0gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSArIFwiRW5kXCIsIFwiRW5kIFwiICsgcGxhY2Vob2xkZXIpO1xyXG4gICAgICBcclxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgc3RhcnQgZGF0ZSdzIG1pbiB2YWx1ZSB0byB0b2RheVxyXG4gICAgICBzdGFydERhdGVJbnB1dC5taW4gPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICBcclxuICAgICAgLy8gVXBkYXRlIHRoZSBlbmQgZGF0ZSdzIG1pbiB2YWx1ZSB3aGVuZXZlciB0aGUgc3RhcnQgZGF0ZSBjaGFuZ2VzXHJcbiAgICAgIHN0YXJ0RGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGVJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgbGV0IGVuZERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGVuZERhdGUuc2V0RGF0ZShzdGFydERhdGUuZ2V0RGF0ZSgpICsgNyk7XHJcbiAgICAgICAgZW5kRGF0ZUlucHV0LnZhbHVlID0gZW5kRGF0ZS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBVcGRhdGUgdGhlIHN0YXJ0IGRhdGUncyBtYXggdmFsdWUgd2hlbmV2ZXIgdGhlIGVuZCBkYXRlIGNoYW5nZXNcclxuICAgICAgZW5kRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZUlucHV0Lm1heCA9IGVuZERhdGVJbnB1dC52YWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGQgbGFiZWxzIGZvciBzdGFydCBkYXRlIGFuZCBlbmQgZGF0ZSBpbnB1dHNcclxuICAgICAgbGV0IHN0YXJ0RGF0ZUxhYmVsID0gY3JlYXRlTGFiZWwobmFtZSArIFwiU3RhcnRcIiwgXCJHb2FsIFN0YXJ0IERhdGVcIik7XHJcbiAgICAgIGxldCBlbmREYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChuYW1lICsgXCJFbmRcIiwgXCJHb2FsIEVuZCBEYXRlXCIpO1xyXG4gICAgICBcclxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydERhdGVMYWJlbCk7XHJcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnREYXRlSW5wdXQpO1xyXG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZERhdGVMYWJlbCk7XHJcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRGF0ZUlucHV0KTtcclxuICAgICAgXHJcbiAgICAgIGZvcm1GaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBmb3JtRmllbGRJbnB1dCA9IGNyZWF0ZUlucHV0KHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyKTtcclxuICAgICAgZm9ybUZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm1GaWVsZElucHV0KTtcclxuICAgIH1cclxuICBcclxuICAgIGxldCBmb3JtRmllbGRFeGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcclxuICAgIGZvcm1GaWVsZEV4YW1wbGVUZXh0LnRleHRDb250ZW50ID0gZXhhbXBsZVRleHQ7XHJcbiAgICBmb3JtRmllbGRFeGFtcGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIik7XHJcbiAgXHJcbiAgICBsZXQgZXhhbXBsZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZXhhbXBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4YW1wbGVUZXh0Q29udGFpbmVyXCIpO1xyXG4gICAgZXhhbXBsZVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUZpZWxkRXhhbXBsZVRleHQpO1xyXG4gICAgZm9ybUZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0Q29udGFpbmVyKTtcclxuICBcclxuICAgIHJldHVybiBmb3JtRmllbGRDb250YWluZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyKSB7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIHR5cGUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBuYW1lKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIHBsYWNlaG9sZGVyKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIG5hbWUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTAwXCIpOyAvLyBTZXQgY2hhcmFjdGVyIGxpbWl0IHRvIDEwMFxyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImZvcm1GaWVsZElucHV0XCIpO1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmb3JJbnB1dCwgbGFiZWxUZXh0KSB7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZm9ySW5wdXQpO1xyXG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XHJcbiAgICByZXR1cm4gbGFiZWw7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ3VycmVuY3ksIEdvYWwgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXNcIjtcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzIH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJHb2FsTGlzdCAoY3VycmVudEdvYWxMaXN0KSB7XHJcblxyXG4gICAgbGV0IGdvYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxQYXJhbGxheFwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBnb2FsID0gMDsgZ29hbCA8IGN1cnJlbnRHb2FsTGlzdC5sZW5ndGg7IGdvYWwrKykge1xyXG4gICAgICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHb2FsQ2FyZChjdXJyZW50R29hbExpc3RbZ29hbF0pKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld0dvYWxPYmplY3QgKCkge1xyXG5cclxuXHJcbiAgICBpZiAodmFsaWRhdGVHb2FsRm9ybSgpKSB7XHJcbiAgICAgIHJldHVybiBnZXROZXdHb2FsT2JqZWN0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtVmFsdWVzKCkge1xyXG4gICAgbGV0IGlkcyA9IFtcclxuICAgICAgXCJnb2FsVGl0bGVDb250YWluZXJJbnB1dFwiLFxyXG4gICAgICBcImdvYWxSZXdhcmRBc3NpZ25tZW50QW1vdW50XCIsXHJcbiAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsXHJcbiAgICAgIFwiZ29hbFF1ZXN0RnJlcXVlbmN5SW5wdXRcIixcclxuICAgICAgXCJxdWVzdEdvYWxPYmplY3RpdmVcIixcclxuICAgICAgXCJnb2FsUXVlc3RUaW1lSW5wdXRcIixcclxuICAgICAgXCJkZWFkbGluZVN0YXJ0LmZvcm1GaWVsZElucHV0XCIsXHJcbiAgICAgIFwiZGVhZGxpbmVFbmQuZm9ybUZpZWxkSW5wdXRcIixcclxuICAgIF07XHJcblxyXG4gICAgbGV0IGZvcm1WYWx1ZXMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBmb3JtVmFsdWVzW2lkc1tpXV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1wiICsgaWRzW2ldKS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZm9ybVZhbHVlcztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUdvYWxGb3JtKCkge1xyXG4gICAgbGV0IGZvcm1WYWx1ZXMgPSBnZXRGb3JtVmFsdWVzKCk7XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgZm9yIChsZXQga2V5IGluIGZvcm1WYWx1ZXMpIHtcclxuICAgICAgICBsZXQgaW5wdXRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIgKyBrZXkpO1xyXG5cclxuICAgICAgICAvLyBSZW1vdmUgdGhlICdpbnZhbGlkJyBjbGFzcyBpbiBjYXNlIGl0IHdhcyBhZGRlZCBiZWZvcmVcclxuICAgICAgICBpbnB1dEZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcclxuXHJcbiAgICAgICAgaWYgKGZvcm1WYWx1ZXNba2V5XSA9PT0gbnVsbCB8fCBmb3JtVmFsdWVzW2tleV0gPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYElucHV0IHdpdGggaWQgJHtrZXl9IGlzIGVtcHR5IG9yIG51bGxgKTtcclxuICAgICAgICAgICAgLy8gQWRkIHRoZSAnaW52YWxpZCcgY2xhc3MgdG8gdGhlIGlucHV0IGZpZWxkXHJcbiAgICAgICAgICAgIGlucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3R29hbE9iamVjdCgpIHtcclxuICBsZXQgZ29hbE9iamVjdCA9IG5ldyBHb2FsKG51bGwsIG5ldyBDdXJyZW5jeSgnR0dUb2tlbnMnLCBudWxsKSlcclxuICBsZXQgZm9ybVZhbHVlcyA9IGdldEZvcm1WYWx1ZXMoKTtcclxuXHJcbiAgZ29hbE9iamVjdC5vYmplY3RpdmUgPSBmb3JtVmFsdWVzW1wiZ29hbFRpdGxlQ29udGFpbmVySW5wdXRcIl07XHJcbiAgZ29hbE9iamVjdC5yZXdhcmQuYW1vdW50ID0gZm9ybVZhbHVlc1tcImdvYWxSZXdhcmRBc3NpZ25tZW50QW1vdW50XCJdO1xyXG4gIGdvYWxPYmplY3QucXVlc3RzID0gW107XHJcbiAgZ29hbE9iamVjdC5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICBnb2FsT2JqZWN0LnRvdGFsVGltZVJlcXVpcmVkID0gZm9ybVZhbHVlc1tcImdvYWxUaW1lQXNzaWdubWVudEFtb3VudFwiXTtcclxuICBnb2FsT2JqZWN0LnRvdGFsVGltZVNwZW50ID0gMDtcclxuICBnb2FsT2JqZWN0LnRpbWVzUGVyV2Vla1JlcXVpcmVkID0gZm9ybVZhbHVlc1tcImdvYWxRdWVzdEZyZXF1ZW5jeUlucHV0XCJdO1xyXG4gIGdvYWxPYmplY3QudGltZXNQZXJXZWVrU3BlbnQgPSAwO1xyXG4gIGdvYWxPYmplY3Quc3RhcnREYXRlID0gZm9ybVZhbHVlc1tcImRlYWRsaW5lU3RhcnQuZm9ybUZpZWxkSW5wdXRcIl07XHJcbiAgZ29hbE9iamVjdC5lbmREYXRlID0gZm9ybVZhbHVlc1tcImRlYWRsaW5lRW5kLmZvcm1GaWVsZElucHV0XCJdO1xyXG5cclxuICBjb25zb2xlLmxvZyhnb2FsT2JqZWN0KTtcclxuICByZXR1cm4gZ29hbE9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVHb2FsQ2FyZChnb2FsKSB7XHJcblxyXG4gICAgLy8gQ3JlYXRlIEVudGlyZSBHb2FsIENhcmQgRWxlbWVudFxyXG4gICAgY29uc3QgZ29hbENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2dvYWxDYXJkJyk7XHJcbiAgXHJcbiAgICAvLyBTZXBhcmF0ZSBDYXJkIGludG8gVHdvIEhhbHZlc1xyXG4gICAgY29uc3QgdG9wSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BIYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgndG9wSGFsZkdvYWxDYXJkJyk7XHJcbiAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZCh0b3BIYWxmR29hbENhcmQpO1xyXG4gIFxyXG4gICAgY29uc3QgYm90dG9tSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3R0b21IYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgnYm90dG9tSGFsZkdvYWxDYXJkJyk7XHJcbiAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZChib3R0b21IYWxmR29hbENhcmQpO1xyXG4gIFxyXG4gICAgLy8gVG9wIEhhbGYgQ2FyZCBDb250ZW50XHJcblxyXG4gICAgICAvLyBHb2FsIE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgIGNvbnN0IGdvYWxPYmplY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsT2JqZWN0aXZlQ29udGFpbmVyJyk7XHJcbiAgICAgIHRvcEhhbGZHb2FsQ2FyZC5hcHBlbmRDaGlsZChnb2FsT2JqZWN0aXZlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIGNvbnN0IGdvYWxPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZ29hbE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKCdnb2FsT2JqZWN0aXZlVGl0bGUnKTtcclxuICAgICAgZ29hbE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IGdvYWwub2JqZWN0aXZlO1xyXG4gICAgICBnb2FsT2JqZWN0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmUpO1xyXG5cclxuICAgICAgY29uc3QgZ29hbFRpbWVSZXF1aXJlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBnb2FsVGltZVJlcXVpcmVtZW50LmNsYXNzTGlzdC5hZGQoJ2dvYWxUaW1lUmVxdWlyZW1lbnQnKTtcclxuXHJcbiAgICAgIGlmIChnb2FsLnRpbWVzUGVyV2Vla1JlcXVpcmVkID09IG51bGwpIHtcclxuICAgICAgICBnb2FsVGltZVJlcXVpcmVtZW50LnRleHRDb250ZW50ID0gYENvbXBsZXRpb24gUmVxdWlyZW1lbnRzOiAke2dvYWwudG90YWxUaW1lUmVxdWlyZWR9IEhvdXIocykgVG90YWxgO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZ29hbC50b3RhbFRpbWVSZXF1aXJlZCA9PSBudWxsKSB7XHJcbiAgICAgICAgZ29hbFRpbWVSZXF1aXJlbWVudC50ZXh0Q29udGVudCA9IGBDb21wbGV0aW9uIFJlcXVpcmVtZW50czogQ29tcGxldGUgQWxsIE91dHN0YW5kaW5nIFF1ZXN0c2A7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGdvYWxPYmplY3RpdmVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFRpbWVSZXF1aXJlbWVudCk7XHJcbiAgXHJcbiAgICAgIC8vIEdvYWwgUmV3YXJkIENvbnRlbnRcclxuICAgICAgY29uc3QgZ29hbENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGdvYWxDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsQ29tcGxldGVDb250YWluZXInKTtcclxuICAgICAgdG9wSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKGdvYWxDb21wbGV0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICBjb25zdCBnb2FsQ29tcGxldGVSZXdhcmRUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgZ29hbENvbXBsZXRlUmV3YXJkVHlwZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKVxyXG4gICAgICBnb2FsQ29tcGxldGVSZXdhcmRUeXBlLmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgIGdvYWxDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsQ29tcGxldGVSZXdhcmRUeXBlKTtcclxuXHJcbiAgICAgIGNvbnN0IGdvYWxDb21wbGV0ZVJld2FyZEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGdvYWxDb21wbGV0ZVJld2FyZEFtb3VudC50ZXh0Q29udGVudCA9IChgJHtnb2FsLnJld2FyZC5hbW91bnR9ICR7Z29hbC5yZXdhcmQudHlwZX1gKVxyXG4gICAgICBnb2FsQ29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbENvbXBsZXRlUmV3YXJkQW1vdW50KTtcclxuXHJcbiAgICAvLyBCb3R0b20gSGFsZiBDYXJkIENvbnRlbnRcclxuICAgIGNvbnN0IHF1ZXN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcXVlc3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdENvbnRhaW5lcicpO1xyXG4gICAgYm90dG9tSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKHF1ZXN0TGlzdENvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdExpc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcXVlc3RMaXN0UGFyYWxsYXguY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0UGFyYWxsYXgnKTtcclxuICAgIHF1ZXN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdExpc3RQYXJhbGxheCk7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcXVlc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb2FsLnF1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBxdWVzdEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW1Db250YWluZXInKTtcclxuICBcclxuICAgICAgY29uc3QgcXVlc3RJdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RJdGVtJyk7XHJcbiAgICAgIHF1ZXN0SXRlbUNvbnRlbnQudGV4dENvbnRlbnQgPSBnb2FsLnF1ZXN0c1tpXS5vYmplY3RpdmU7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTtcclxuICBcclxuICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgXHJcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0SXRlbUNvbnRlbnQpO1xyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJDb250YWluZXIpO1xyXG4gICAgICBxdWVzdExpc3QuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBnZW5lcmF0ZU1vZGFsKGdvYWwucXVlc3RzW2ldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlc3RMaXN0UGFyYWxsYXguYXBwZW5kQ2hpbGQocXVlc3RMaXN0KTtcclxuICBcclxuICAgIHJldHVybiBnb2FsQ2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTW9kYWwoZ29hbFF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3QgZ29hbFF1ZXN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvYWxRdWVzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsJyk7XHJcbiAgXHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdnb2FsUXVlc3RNb2RhbENvbnRlbnQnKTtcclxuICBcclxuICAgIGxldCBnb2FsUXVlc3RNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZ29hbFF1ZXN0TW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIkNvbXBsZXRpb24gUmVxdWlyZW1lbnQocyk6IFwiXHJcblxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUuaW5uZXJUZXh0ID0gZ29hbFF1ZXN0Lm9iamVjdGl2ZTtcclxuXHJcblxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsVGl0bGUpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICBnb2FsUXVlc3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnb2FsUXVlc3RNb2RhbCk7XHJcbiAgXHJcbiAgICByZXR1cm4gZ29hbFF1ZXN0TW9kYWw7XHJcbiAgfVxyXG4gICAgICAiLCJpbXBvcnQgaW1wb3J0QWxsSW1hZ2VzIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25JbWFnZSAod2VhcG9uKSB7XHJcbi8vICAgICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyh3ZWFwb24pKTtcclxuLy8gICAgIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlKHdlYXBvbikge1xyXG4gIGlmICghd2VhcG9uIHx8IHR5cGVvZiB3ZWFwb24gIT09IFwic3RyaW5nXCIpIHtcclxuICAgIC8vIEludmFsaWQgd2VhcG9uIHBhcmFtZXRlciwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG5cclxuICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gd2VhcG9uLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIHdlYXBvbkltYWdlVXJsID0gd2VhcG9uSW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCF3ZWFwb25JbWFnZVVybCkge1xyXG4gICAgICAvLyBJbWFnZSBub3QgZm91bmQgZm9yIHRoZSBnaXZlbiB3ZWFwb24sIGhhbmRsZSB0aGUgZXJyb3Igb3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2VhcG9uSW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRBcm1vdXJJbWFnZSAoYXJtb3VyKSB7XHJcbi8vICAgICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuLy8gICAgIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlKGFybW91cikge1xyXG4gIGlmICghYXJtb3VyIHx8IHR5cGVvZiBhcm1vdXIgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuXHJcbiAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGFybW91ci5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbiAgICBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghYXJtb3VySW1hZ2VVcmwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJtb3VySW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZSAocmFyaXR5KSB7XHJcbi8vICAgICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhyYXJpdHkpKTtcclxuLy8gICAgIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZSAoZWxlbWVudCkge1xyXG4vLyAgICAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcbi8vICAgICByZXR1cm4gZWxlbWVudEltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFyaXR5SW1hZ2UocmFyaXR5KSB7XHJcbiAgaWYgKCFyYXJpdHkgfHwgdHlwZW9mIHJhcml0eSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG5cclxuICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gcmFyaXR5ICsgXCJSYXJpdHlcIjtcclxuICAgIHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFyYXJpdHlJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZShlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50IHx8IHR5cGVvZiBlbGVtZW50ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcblxyXG5cclxuICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUltYWdlKHN0cmluZykge1xyXG5cclxuICBsZXQgaXRlbUltYWdlVXJsO1xyXG5cclxuICBpZiAoc3RyaW5nLnR5cGUgPT09IFwid2VhcG9uXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldFdlYXBvbkltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcImFybW91clwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRBcm1vdXJJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJyYXJpdHlcIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0UmFyaXR5SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiZWxlbWVudFwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRFbGVtZW50SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGl0ZW1JbWFnZVVybDtcclxufSIsIi8vIHdoZXJlIFwiclwiIGlzIGEgcmVxdWlyZS5jb250ZXh0IGZ1bmN0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltcG9ydEFsbEltYWdlcyhyKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0gW107XHJcblxyXG4gICAgLy8ga2V5cyBpcyBhbiBhcnJheSB0aGF0IHN0b3JlcyBhbGwgdGhlIGZpbGVuYW1lcyByZXR1cm5lZCBieSByLmtleXMoKVxyXG4gICAgY29uc3Qga2V5cyA9IHIua2V5cygpO1xyXG5cclxuICAgIC8vIGxlbmd0aCBzb3RyZXMgdGhlIGxlbmd0aCBvZiB0aGUga2V5cyBhcnJheVxyXG4gICAgY29uc3QgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGltYWdlcy5wdXNoKHIoa2V5KSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9SZWQgRGVtb24gSGVsbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYXJtb3VyL1JlZCBEZW1vbiBIZWxtLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvYXJtb3VyIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJ5c3MucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FieXNzLnBuZ1wiLFxuXHRcIi4vYWV0aGVyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hZXRoZXIucG5nXCIsXG5cdFwiLi9jb3Jyb2RlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9jb3Jyb2RlLnBuZ1wiLFxuXHRcIi4vZ2FpYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvZ2FpYS5wbmdcIixcblx0XCIuL2luZmVybm8ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2luZmVybm8ucG5nXCIsXG5cdFwiLi9sdW5hci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbHVuYXIucG5nXCIsXG5cdFwiLi9taXN0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9taXN0LnBuZ1wiLFxuXHRcIi4vc29sYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3NvbGFyLnBuZ1wiLFxuXHRcIi4vc3RlZWwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3N0ZWVsLnBuZ1wiLFxuXHRcIi4vdGVycmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3RlcnJhLnBuZ1wiLFxuXHRcIi4vdm9sdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdm9sdC5wbmdcIixcblx0XCIuL3plcGh5ci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvemVwaHlyLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lcGljUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9lcGljUmFyaXR5LnBuZ1wiLFxuXHRcIi4vbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9sZWdlbmRhcnlSYXJpdHkucG5nXCIsXG5cdFwiLi9ub3JtYWxSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL25vcm1hbFJhcml0eS5wbmdcIixcblx0XCIuL3JhcmVSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3JhcmVSYXJpdHkucG5nXCIsXG5cdFwiLi91bmNvbW1vblJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvdW5jb21tb25SYXJpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FieXNzU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9BYnlzc1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9HYWlhU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9HYWlhU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTHVuYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0x1bmFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL01pc3RTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL01pc3RTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vUnVuZVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvUnVuZVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Tb2xhclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvU29sYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vVm9sdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvVm9sdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1plcGh5clNob3J0U3dvcmQucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy93ZWFwb25zIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJpbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW50R29hbExpc3QsIGN1cnJlbmN5Q29udGFpbmVyIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyByZW5kZXJRdWVzdExpc3QgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlRdWVzdHNTdGF0ZSAoKSB7XHJcblxyXG4gICAgICAgIGxldCBlbXB0eVN0YXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eVF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIHF1ZXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBRdWVzdCB0byBnZXQgc3RhcnRlZCBhbmQgY2hlY2sgdGhlbSBoZXJlOlwiXHJcbiAgICAgICAgbGV0IHF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBxdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUXVlc3RCdXR0b25cIilcclxuICAgICAgICBxdWVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFF1ZXN0ICtcIlxyXG4gICAgICAgIHF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICghcmVtb3ZlRW1wdHlTdGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1wdHlzdGF0ZSBSZW1vdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICByZW1vdmVFbXB0eVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICghY3JlYXRlUXVlc3RQYXJhbGxheCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3RQYXJhbGxheCBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVRdWVzdFBhcmFsbGF4KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKSk7XHJcbiAgICAgICAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RCdXR0b24pO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICBleHBvcnQgZnVuY3Rpb24gc2hvd0VtcHR5R29hbHNTdGF0ZSAoKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eUdvYWxDb250YWluZXJcIik7XHJcbiAgICAgICAgZ29hbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiU2V0IEdvYWxzIGFuZCB0cmFjayB5b3VyIHByb2dyZXNzIGhlcmU6XCJcclxuICAgICAgICBsZXQgZ29hbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZ29hbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkR29hbEJ1dHRvblwiKVxyXG4gICAgICAgIGdvYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBHb2FsICtcIlxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbEJ1dHRvbik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlRdWVzdFN0YXRlICgpIHtcclxuXHJcbiAgY29uc3QgZW1wdHlRdWVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlRdWVzdENvbnRhaW5lclwiKVxyXG4gICAgICAgIGlmIChlbXB0eVF1ZXN0TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5UXVlc3RMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlHb2FsU3RhdGUgKCkge1xyXG5cclxuICBjb25zdCBlbXB0eUdvYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVN0YXRlQ29udGFpbmVyI2VtcHR5R29hbENvbnRhaW5lclwiKVxyXG4gICAgICAgIGlmIChlbXB0eUdvYWxMaXN0KSB7XHJcbiAgICAgICAgICAgIGVtcHR5R29hbExpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKSB7XHJcblxyXG4gIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBhbHJlYWR5IGV4aXN0c1xyXG4gIGlmIChxdWVzdFBhcmFsbGF4KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHRoYXQgdGhlIGVsZW1lbnQgYWxyZWFkeSBleGlzdHNcclxuICB9XHJcblxyXG4gIGxldCBxdWVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcXVlc3RQYXJhbGxheC5jbGFzc0xpc3QuYWRkKFwicXVlc3RQYXJhbGxheFwiKTtcclxuICBxdWVzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFBhcmFsbGF4KTtcclxuXHJcbiAgcmV0dXJuIHRydWU7IC8vIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIGVsZW1lbnQgd2FzIGNyZWF0ZWRcclxufVxyXG5cclxubGV0IGdvYWxQYXJhbGxheDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHb2FsUGFyYWxsYXgoKSB7XHJcblxyXG4gIGlmICghZ29hbFBhcmFsbGF4KSB7XHJcbiAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgIGdvYWxQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsUGFyYWxsYXguY2xhc3NMaXN0LmFkZChcImdvYWxQYXJhbGxheFwiKTtcclxuICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFBhcmFsbGF4KTtcclxuXHJcbiAgfVxyXG4gIGdvYWxQYXJhbGxheC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5LCBQbGF5ZXJDaGFyYWN0ZXIsIFBsYXllclN0YXRzLCBHb2FsIH0gZnJvbSBcIi4vY2xhc3Nlcy9jbGFzc2VzLmpzXCI7XHJcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBhZGRRdWVzdCwgcmVuZGVyUXVlc3RMaXN0LCBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSwgY3JlYXRlR2hvc3RDYXJkfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjbG9zZUZvcm1Nb2RhbCB9IGZyb20gXCIuL21vZGFsRnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjSGVyb1Njb3JlIH0gZnJvbSAnLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVyRXF1aXBwZWRJdGVtcywgY3VycmVudEdvYWxMaXN0LCBjdXJyIH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlLCBjcmVhdGVRdWVzdFBhcmFsbGF4IH0gZnJvbSAnLi9pbmRleFZpZXdGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVHZXREYXRhRm9ybSB9IGZyb20gJy4vZ2VuZXJhdGVGb3JtJztcclxuaW1wb3J0IHJlbmRlckRlZmF1bHRJbmRleCBmcm9tICcuL3JlbmRlckRlZmF1bHRJbmRleEh0bWwnO1xyXG5pbXBvcnQgZ2VuZXJhdGVHb2FsQ2FyZCBmcm9tICcuL2dvYWxGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyByZW5kZXJHb2FsTGlzdCB9IGZyb20gJy4vZ29hbEZ1bmN0aW9ucyc7XHJcbmltcG9ydCByZW5kZXJHb2FsQ3JlYXRpb25QYWdlIGZyb20gJy4vcmVuZGVyR29hbFBhZ2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplRGVmYXVsdEluZGV4ICgpIHtcclxuXHJcbiAgICBsZXQgaW5kZXhQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBDb250ZW50XCIpO1xyXG5cclxuICAgIHJlbmRlckRlZmF1bHRJbmRleChpbmRleFBhZ2UpO1xyXG5cclxuXHJcblxyXG5sZXQgcGxheWVyQmlydGhkYXkgPSBuZXcgRGF0ZSAoXCIwMi0wMy0xOTk2XCIpO1xyXG5sZXQgaGVyb1NlbGVjdGlvbiA9IChcIlNvcmNlcmVyXCIpO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcihcImltYWdlcy96ZXVzU3ByaXRlLnBuZ1wiLCBoZXJvU2VsZWN0aW9uLCBwbGF5ZXJFcXVpcHBlZEl0ZW1zLCBwbGF5ZXJCaXJ0aGRheSk7XHJcbmxldCBwaXhlbEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0SW1hZ2VcIik7XHJcbnBpeGVsSW1hZ2VDb250YWluZXIuc3JjID0gKHBsYXllci5zcHJpdGVJbWFnZSk7XHJcbmxldCBnZXRIZXJvU2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm9TY29yZUNvbnRhaW5lclwiKTtcclxubGV0IGhlcm9TY29yZSA9IGNhbGNIZXJvU2NvcmUocGxheWVyKTtcclxuZ2V0SGVyb1Njb3JlQ29udGFpbmVyLnRleHRDb250ZW50ID0gKGBIZXJvIFNjb3JlOiAke2hlcm9TY29yZX1gKVxyXG5cclxuY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdFswXS5yZXdhcmQudHlwZSlcclxuXHJcbmxldCB0ZXN0R29hbCA9IG5ldyBHb2FsIChcIkJlY29tZSBGbHVlbnQgaW4gU3BhbmlzaFwiLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMikpXHJcbmxldCBneW1Hb2FsID0gbmV3IEdvYWwgKChcIkdldCBTaXggUGFjayBBYnNcIiksIG5ldyBDdXJyZW5jeSAoXCJHR1Rva2Vuc1wiLCAxMikpO1xyXG5cclxuXHJcbmxldCB0ZXN0VGltZVJlcSA9IDQwO1xyXG5sZXQgdGVzdFRpbWVTcGVudCA9IDM2O1xyXG5sZXQgdGVzdFBlcldlZWsgPSA0O1xyXG5sZXQgdGVzdFBlcldlZWtTcGVudCA9IDE7XHJcbmxldCB0ZXN0R29hbFF1ZXN0RnJlcSA9IDQ7XHJcblxyXG5cclxudGVzdEdvYWwudG90YWxUaW1lUmVxdWlyZWQgPSB0ZXN0VGltZVJlcTtcclxudGVzdEdvYWwudG90YWxUaW1lU3BlbnQgPSB0ZXN0VGltZVNwZW50O1xyXG50ZXN0R29hbC50aW1lc1BlcldlZWtSZXF1aXJlZCA9IHRlc3RHb2FsUXVlc3RGcmVxO1xyXG5cclxubGV0IHhUaXRsZSA9IFwiU3R1ZHkgU3BhbmlzaFwiO1xyXG5cclxuXHJcbmd5bUdvYWwudGltZXNQZXJXZWVrUmVxdWlyZWQgPSB0ZXN0UGVyV2VlaztcclxuZ3ltR29hbC50aW1lc1BlcldlZWtTcGVudCA9IHRlc3RQZXJXZWVrU3BlbnRcclxuXHJcbmxldCB4ID0gdGVzdEdvYWwuZ2VuZXJhdGVRdWVzdCh4VGl0bGUpO1xyXG50ZXN0R29hbC5xdWVzdHMucHVzaCh4KTtcclxuXHJcbmN1cnJlbnRHb2FsTGlzdC5wdXNoKHRlc3RHb2FsKTtcclxuY3VycmVudEdvYWxMaXN0LnB1c2goZ3ltR29hbCk7XHJcblxyXG4vLyBsZXQgZ3ltUXVlc3QgPSBneW1Hb2FsLmdlbmVyYXRlUXVlc3QoNCwgMCk7XHJcbi8vIGd5bUdvYWwucXVlc3RzLnB1c2goZ3ltUXVlc3QpO1xyXG5cclxuY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuXHJcbnJlbmRlckdvYWxMaXN0KGN1cnJlbnRHb2FsTGlzdCk7XHJcblxyXG5cclxudXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lciB0byBPcGVuIFF1ZXN0IENyZWF0aW9uIE1vZGFsXHJcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZFF1ZXN0QnV0dG9uXCIpXHJcbmFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoIXJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpKSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIWNyZWF0ZVF1ZXN0UGFyYWxsYXgoKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVRdWVzdFBhcmFsbGF4KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKSk7XHJcbiAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuICAgIH0pXHJcblxyXG5sZXQgYWRkR29hbEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZEdvYWxCdXR0b25cIilcclxuYWRkR29hbEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIFxyXG4gICAgd2hpbGUgKGluZGV4UGFnZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgaW5kZXhQYWdlLnJlbW92ZUNoaWxkKGluZGV4UGFnZS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyR29hbENyZWF0aW9uUGFnZSgpO1xyXG5cclxuICAgIH0pXHJcblxyXG5cclxuXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGdldFdlYXBvbkltYWdlLCBnZXRBcm1vdXJJbWFnZSwgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsIGZyb20gXCIuL21vZGFsRWxlbWVudHMvaXRlbUNhcmRNb2RhbFwiO1xyXG5cclxuY29uc3QgaW52ZW50b3J5UGFnZVBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRlbnRcIik7XHJcbmNvbnN0IGludmVudG9yeVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5pbnZlbnRvcnlQYWdlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlQYWdlXCIpXHJcblxyXG5jb25zdCByYXJpdHlDb2xvcnMgPSB7XHJcbiAgICBub3JtYWw6IFwicmdiKDIxMSwgMjExLCAyMTEsIDAuOClcIixcclxuICAgIHVuY29tbW9uOiBcInJnYigwLCAxMjgsIDAsIDAuOClcIixcclxuICAgIHJhcmU6IFwicmdiKDMwLCAzMCwgMjU1LCAwLjgpXCIsXHJcbiAgICBlcGljOiBcInJnYigxNjAsIDMyLCAyNDAsIDAuOClcIixcclxuICAgIGxlZ2VuZGFyeTogXCJyZ2IoMjU1LCAxNjUsIDAuOClcIixcclxuICAgIH07ICBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZlbnRvcnlQYWdlIChpbnZlbnRvcnkpIHtcclxuXHJcbiAgICBpbnZlbnRvcnlQYWdlUGFyZW50LmFwcGVuZENoaWxkKGludmVudG9yeVBhZ2UpXHJcblxyXG4gICAgICAgIC8vIENvZGUgdG8gZ2VuZXJhdGUgZWFjaCBpbnZlbnRvcnkgcm93XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnZlbnRvcnlJdGVtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5SXRlbVJvd1wiKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaW52ZW50b3J5SXRlbVJvdy0ke2krMX1gKTtcclxuICAgICAgICAgICAgaW52ZW50b3J5UGFnZS5hcHBlbmRDaGlsZChpbnZlbnRvcnlJdGVtUm93KVxyXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IChpICogNSk7XHJcbiAgICBcclxuICAgICAgICAgICAgLy8gQ29kZSB0byBnZW5lcmF0ZSBlYWNoIGluZGV4IGluIGVhY2ggaW52ZW50b3J5IHJvd1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGludmVudG9yeUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5SXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y291bnRlciArIGogKyAxfWApO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gKGNvdW50ZXIgKyBqKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsKGUudGFyZ2V0LCBpbnZlbnRvcnlbaXRlbV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjRweCBzb2xpZCB5ZWxsb3dcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHdoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuYXBwZW5kQ2hpbGQoaW52ZW50b3J5SXRlbUNvbnRhaW5lcilcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuXHJcbn1cclxuXHJcbi8vIFRoaXMgaXMgc2VwYXJhdGUgZnJvbSBpbnZlbnRvcnkgYW5kIG9ubHkgZ2VuZXJhdGVzIHRoZSBjb250YWluZXIgZm9yIGludmVudG9yeSBpdGVtc1xyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSW52ZW50b3J5UGFnZSAoaW52ZW50b3J5KSB7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSA9IDA7IGl0ZW0gPCBpbnZlbnRvcnkubGVuZ3RoOyBpdGVtKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnRvcnlbaXRlbV0pO1xyXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmludmVudG9yeUl0ZW0nKVtpdGVtXTtcclxuICAgICAgICBsZXQgaXRlbVNwcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbVNwcml0ZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5SXRlbVNwcml0ZVwiKTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1TcHJpdGUpO1xyXG4gICAgICAgIGxldCBpdGVtSW1hZ2UgPSBnZXRXZWFwb25JbWFnZShpbnZlbnRvcnlbaXRlbV0uX3R5cGUucmVwbGFjZSgvXFxzL2csICcnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbUltYWdlKVxyXG4gICAgICAgIGl0ZW1TcHJpdGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpdGVtSW1hZ2V9JylgXHJcbiAgICAgICAgaXRlbVNwcml0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByYXJpdHlDb2xvcnNbaW52ZW50b3J5W2l0ZW1dLl9yYXJpdHldO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGludmVudG9yeVtpdGVtXTtcclxuICAgICAgICB9XHJcbiAgICApfTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZlbnRvcnlFdmVudEhhbmRsZXIoaW52ZW50b3J5KSB7XHJcbiAgICBpZiAoaW52ZW50b3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjcmVhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICAgICAgdXBkYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjcmVhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZGF0YSBmcm9tIGxvY2FsU3RvcmFnZSBmb3Iga2V5ICcke2tleX0nOmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCB7IGdldFdlYXBvbkltYWdlLCBnZXRBcm1vdXJJbWFnZSwgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSB9IGZyb20gXCIuLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlXCI7XHJcbmltcG9ydCB7IGNhbGNXZWFwb25TY29yZSB9IGZyb20gXCIuLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnNcIjtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGhpZGVJbnZlbnRvcnlNb2RhbChlKSB7XHJcbiAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGludmVudG9yeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGludmVudG9yeU1vZGFsLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgXHJcbmZ1bmN0aW9uIGNyZWF0ZUl0ZW1DYXJkTW9kYWwoZSwgaXRlbSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNhbGNXZWFwb25TY29yZShpdGVtKSlcclxuICAgICAgICBcclxuY29uc3QgcmFyaXR5Q29sb3JzID0ge1xyXG4gICAgbm9ybWFsOiBcInJnYigyMTEsIDIxMSwgMjExKVwiLFxyXG4gICAgdW5jb21tb246IFwicmdiKDAsIDEyOCwgMClcIixcclxuICAgIHJhcmU6IFwicmdiKDMwLCAzMCwgMjU1KVwiLFxyXG4gICAgZXBpYzogXCJyZ2IoMTYwLCAzMiwgMjQwKVwiLFxyXG4gICAgbGVnZW5kYXJ5OiBcInJnYigyNTUsIDE2NSwgMClcIixcclxuICAgIH07XHJcblxyXG5jb25zdCBpdGVtU3RhdHNUb3BIYWxmID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRWxlbWVudFwiLFxyXG4gICAgICAgIGlkOiBcImVsZW1lbnRcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fZWxlbWVudCxcclxuICAgICAgICBpY29uOiBnZXRFbGVtZW50SW1hZ2UoaXRlbS5fZWxlbWVudClcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJSYXJpdHlcIixcclxuICAgICAgICBpZDogXCJyYXJpdHlcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fcmFyaXR5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSGVybyBTY29yZVwiLFxyXG4gICAgICAgIGlkOiBcImhlcm9TY29yZVwiLFxyXG4gICAgICAgIHZhbHVlOiBjYWxjV2VhcG9uU2NvcmUoaXRlbSlcclxuICAgIH1cclxuXVxyXG5cclxuY29uc3QgaXRlbVN0YXRzQm90dG9tSGFsZj0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSXRlbSBUeXBlXCIsXHJcbiAgICAgICAgaWQ6IFwiaXRlbVR5cGVcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fdHlwZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYXBvbiBEYW1hZ2VcIixcclxuICAgICAgICBpZDogXCJkYW1hZ2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuZGFtYWdlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3JpdGljYWwgQ2hhbmNlXCIsXHJcbiAgICAgICAgaWQ6IFwiY3JpdENoYW5jZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jcml0Q2hhbmNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ3JpdGljYWwgRGFtYWdlXCIsXHJcbiAgICAgICAgaWQ6IFwiY3JpdERhbWFnZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jcml0RGFtYWdlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ29uc3RpdHV0aW9uXCIsXHJcbiAgICAgICAgaWQ6IFwiY29uc3RpdHV0aW9uXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNvbnN0aXR1dGlvblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkRleHRlcml0eVwiLFxyXG4gICAgICAgIGlkOiBcImRleHRlcml0eVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5kZXh0ZXJpdHlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJJbnRlbGxpZ2VuY2VcIixcclxuICAgICAgICBpZDogXCJpbnRlbGxpZ2VuY2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuaW50ZWxsaWdlbmNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiU3RyZW5ndGhcIixcclxuICAgICAgICBpZDogXCJzdHJlbmd0aFwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5zdHJlbmd0aFxyXG4gICAgfVxyXG4gICAgXTtcclxuXHJcbiAgIFxyXG5cclxuICAgIFxyXG4gICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWxcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtY29udGVudFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQ29udGVudFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZFRvcEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkVG9wSGFsZlwiKTtcclxuICAgICAgY29uc3QgaXRlbUNhcmRCb3R0b21IYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRCb3R0b21IYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZEJvdHRvbUhhbGZcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgZm9yIChjb25zdCBzdGF0IG9mIGl0ZW1TdGF0c0JvdHRvbUhhbGYpIHtcclxuICAgICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5pZCA9IHN0YXQuaWQ7XHJcbiAgICAgICAgLy8gaXRlbUNhcmRTdGF0Q29udGFpbmVyLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiOiBcIiArIHN0YXQudmFsdWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaXRlbUNhcmRCb3R0b21IYWxmLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lcilcclxuICAgICAgICBjb25zdCBzdGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXROYW1lLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiIDpcXHUwMEEwXCJcclxuICAgICAgICBzdGF0TmFtZS5zdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSAoc3RhdC52YWx1ZSk7XHJcbiAgICBcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdE5hbWUpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0VmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgICBpdGVtQ2FyZEJvdHRvbUhhbGYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0taW1hZ2UtY29udGFpbmVyXCIpXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLWltYWdlXCIpO1xyXG4gICAgICBsZXQgaXRlbUltYWdlID0gZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGl0ZW1JbWFnZTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UpO1xyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1zdGF0c1wiKTtcclxuICAgIFxyXG4gICAgICAvLyBjb25zdCBlbGVtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgLy8gZWxlbWVudENvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZX0nKWBcclxuICAgICAgLy8gZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRDb250YWluZXJcIik7XHJcbiAgICBcclxuICAgICAgZm9yIChjb25zdCBzdGF0IG9mIGl0ZW1TdGF0c1RvcEhhbGYpIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmlkID0gc3RhdC5pZDtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIHN0YXROYW1lLmlubmVyVGV4dCA9IHN0YXQubmFtZSArIFwiOlxcdTAwQTBcIjtcclxuICAgICAgICBzdGF0TmFtZS5zdHlsZS5jb2xvciA9IFwieWVsbG93XCI7XHJcbiAgICBcclxuICAgICAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBzdGF0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBpZiAoc3RhdC5uYW1lID09IFwiUmFyaXR5XCIpIHtcclxuICAgICAgICAgIGxldCByYXJpdHlOYW1lID0gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0YXQudmFsdWUpXHJcbiAgICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gcmFyaXR5TmFtZTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5jb2xvciA9IHJhcml0eUNvbG9yc1tpdGVtLl9yYXJpdHldO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmZvbnRXZWlnaHQgPSA4MDA7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0Lm5hbWUgPT0gXCJIZXJvIFNjb3JlXCIpIHtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSBcIitcIiArIHN0YXQudmFsdWU7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuZm9udFNpemUgPSBcIjMycHhcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnNyYyA9IHN0YXQuaWNvbjtcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3R5bGUudmVydGljYWxBbGlnbiA9IFwibWlkZGxlXCI7IC8vIEFsaWduIHRoZSBpbWFnZSB2ZXJ0aWNhbGx5IGluIGxpbmUgd2l0aCB0aGUgdGV4dFxyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIxMHB4XCI7IC8vIEFkZCBtYXJnaW4gYmV0d2VlbiB0aGUgdGV4dCBhbmQgaW1hZ2VcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7IC8vIEVuYWJsZSBmbGV4Ym94IGxheW91dFxyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjsgLy8gQWxpZ24gaXRlbXMgdmVydGljYWxseSBpbiB0aGUgY2VudGVyXHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHN0YXQudmFsdWUpKTtcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEljb24pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0YXRWYWx1ZS5hcHBlbmRDaGlsZCh2YWx1ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5hcHBlbmRDaGlsZChzdGF0TmFtZSk7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5hcHBlbmRDaGlsZChzdGF0VmFsdWUpO1xyXG4gICAgICBcclxuICAgICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmKTtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgY2xvc2VCdG4uY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1jbG9zZVwiKTtcclxuICAgICAgY2xvc2VCdG4uaW5uZXJUZXh0ID0gXCJYXCI7XHJcbiAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgaGlkZUludmVudG9yeU1vZGFsKGUpIFxyXG4gICAgICB9KVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSBcIk1vZGFsIFRpdGxlXCI7XHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIHRoZSBpbnZlbnRvcnkgbW9kYWwgY29udGVudC5cIjtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxUaXRsZSk7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZENvbnRlbnQpO1xyXG4gICAgXHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZFRvcEhhbGYpO1xyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRCb3R0b21IYWxmKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbVN0YXRzKTtcclxuICAgIFxyXG4gICAgICAvLyBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dCk7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWwuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxDb250ZW50KTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbCk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIGludmVudG9yeU1vZGFsO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwoZSwgaW52ZW50b3J5KSB7XHJcbiAgICBjb25zdCBpbnZlbnRvcnlNb2RhbCA9IGNyZWF0ZUl0ZW1DYXJkTW9kYWwoZSwgaW52ZW50b3J5KTtcclxuICAgIGludmVudG9yeU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjYWxjSGVyb1Njb3JlIChwbGF5ZXJDaGFyYWN0ZXIpIHtcclxuICAgIGxldCBoZXJvU2NvcmUgPSAwO1xyXG5cclxuICAgIC8vIEJhc2Ugc3RhdHMgY2FsY1xyXG4gICAgbGV0IGluaGVyZW50U3RyZW5ndGggPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJzdHJlbmd0aFwiKTtcclxuICAgIGxldCBpbmhlcmVudEludGVsbGlnZW5jZSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImludGVsbGlnZW5jZVwiKTtcclxuICAgIGxldCBpbmhlcmVudERleHRlcml0eSA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImRleHRlcml0eVwiKTtcclxuICAgIGxldCBpbmhlcmVudENvbnN0aXR1dGlvbiA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcImNvbnN0aXR1dGlvblwiKTtcclxuXHJcbiAgICAvLyBXZWFwb24gU3RhdHMgQ2FsY1xyXG4gICAgbGV0IHdlYXBvblN0cmVuZ3RoID0gMDtcclxuICAgIGxldCB3ZWFwb25JbnRlbGxpZ2VuY2UgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkRleHRlcml0eSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uQ29uc3RpdHV0aW9uID0gMDtcclxuICAgIGxldCBlcXVpcG1lbnRTdGF0ID0gMDtcclxuICAgXHJcbiAgICBmb3IgKGxldCB3ZWFwb25JbmRleCA9IDA7IHdlYXBvbkluZGV4IDwgcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zLmxlbmd0aDsgd2VhcG9uSW5kZXgrKykge1xyXG4gICAgICAgIHdlYXBvblN0cmVuZ3RoICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLnN0cmVuZ3RoO1xyXG4gICAgICAgIHdlYXBvbkludGVsbGlnZW5jZSArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5pbnRlbGxpZ2VuY2U7XHJcbiAgICAgICAgd2VhcG9uRGV4dGVyaXR5ICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmRleHRlcml0eTtcclxuICAgICAgICB3ZWFwb25Db25zdGl0dXRpb24gKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY29uc3RpdHV0aW9uO1xyXG4gICAgICAgIGxldCB3ZWFwb25Dcml0Q2hhbmNlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY3JpdENoYW5jZTtcclxuICAgICAgICBsZXQgd2VhcG9uQ3JpdERhbWFnZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNyaXREYW1hZ2U7XHJcbiAgICAgICAgbGV0IHdlYXBvbkRhbWFnZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmRhbWFnZTtcclxuICAgICAgICBlcXVpcG1lbnRTdGF0ICs9ICh3ZWFwb25EYW1hZ2UgKyAod2VhcG9uRGFtYWdlICogd2VhcG9uQ3JpdENoYW5jZSAqIHdlYXBvbkNyaXREYW1hZ2UpKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gVG90YWwgU3RhdHNcclxuXHJcbiAgICBsZXQgdG90YWxTdHJlbmd0aCA9IGluaGVyZW50U3RyZW5ndGggKyB3ZWFwb25TdHJlbmd0aDtcclxuICAgIGxldCB0b3RhbEludGVsbGlnZW5jZSA9IGluaGVyZW50SW50ZWxsaWdlbmNlICsgd2VhcG9uSW50ZWxsaWdlbmNlO1xyXG4gICAgbGV0IHRvdGFsRGV4dGVyaXR5ID0gaW5oZXJlbnREZXh0ZXJpdHkgKyB3ZWFwb25EZXh0ZXJpdHk7XHJcbiAgICBsZXQgdG90YWxDb25zdGl0dXRpb24gPSBpbmhlcmVudENvbnN0aXR1dGlvbiArIHdlYXBvbkNvbnN0aXR1dGlvbjtcclxuXHJcbiAgICBzd2l0Y2gocGxheWVyQ2hhcmFjdGVyLmhlcm9UeXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgICAgdG90YWxTdHJlbmd0aCAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgICB0b3RhbEludGVsbGlnZW5jZSAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgICB0b3RhbERleHRlcml0eSAqPSAyO1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgdG90YWxDb25zdGl0dXRpb24gKj0gMjtcclxuICAgIH1cclxuXHJcbiAgICBoZXJvU2NvcmUgKz0gKHRvdGFsU3RyZW5ndGggKyB0b3RhbEludGVsbGlnZW5jZSArIHRvdGFsRGV4dGVyaXR5ICsgdG90YWxDb25zdGl0dXRpb24gKyBlcXVpcG1lbnRTdGF0KVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIGhlcm9TY29yZS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY1dlYXBvblNjb3JlICh3ZWFwb24pIHtcclxuICAgIFxyXG4gICAgbGV0IHRvdGFsV2VhcG9uU2NvcmUgPSAwOyBcclxuXHJcbiAgICBsZXQgd2VhcG9uU3RyZW5ndGggPSAwO1xyXG4gICAgbGV0IHdlYXBvbkludGVsbGlnZW5jZSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uRGV4dGVyaXR5ID0gMDtcclxuICAgIGxldCB3ZWFwb25Db25zdGl0dXRpb24gPSAwO1xyXG4gICAgbGV0IGVxdWlwbWVudFN0YXQgPSAwO1xyXG5cclxuICAgIFxyXG4gICAgd2VhcG9uU3RyZW5ndGggKz0gd2VhcG9uLl9zdGF0cy5zdHJlbmd0aDtcclxuICAgIHdlYXBvbkludGVsbGlnZW5jZSArPSB3ZWFwb24uX3N0YXRzLmludGVsbGlnZW5jZTtcclxuICAgIHdlYXBvbkRleHRlcml0eSArPSB3ZWFwb24uX3N0YXRzLmRleHRlcml0eTtcclxuICAgIHdlYXBvbkNvbnN0aXR1dGlvbiArPSB3ZWFwb24uX3N0YXRzLmNvbnN0aXR1dGlvbjtcclxuICAgIGxldCB3ZWFwb25Dcml0Q2hhbmNlID0gd2VhcG9uLl9zdGF0cy5jcml0Q2hhbmNlO1xyXG4gICAgbGV0IHdlYXBvbkNyaXREYW1hZ2UgPSB3ZWFwb24uX3N0YXRzLmNyaXREYW1hZ2U7XHJcbiAgICBsZXQgd2VhcG9uRGFtYWdlID0gd2VhcG9uLl9zdGF0cy5kYW1hZ2U7XHJcbiAgICBlcXVpcG1lbnRTdGF0ICs9ICh3ZWFwb25EYW1hZ2UgKyAod2VhcG9uRGFtYWdlICogd2VhcG9uQ3JpdENoYW5jZSAqIHdlYXBvbkNyaXREYW1hZ2UpKTtcclxuXHJcbiAgICB0b3RhbFdlYXBvblNjb3JlID0gKHdlYXBvblN0cmVuZ3RoICsgd2VhcG9uSW50ZWxsaWdlbmNlICsgd2VhcG9uRGV4dGVyaXR5ICsgd2VhcG9uQ29uc3RpdHV0aW9uICsgZXF1aXBtZW50U3RhdClcclxuXHJcbiAgICByZXR1cm4gdG90YWxXZWFwb25TY29yZS50b0ZpeGVkKDIpO1xyXG5cclxufVxyXG4gICAgXHJcbiIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy9jbGFzc2VzLmpzJ1xyXG5pbXBvcnQgeyByZXdhcmRVdGlsaXRpZXMsIGN1cnJlbmN5QWdncmVnYXRvciwgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gJy4vY3VycmVuY3lGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gJy4vZGF0YS5qcyc7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVF1ZXN0UGFyYWxsYXgsIGNyZWF0ZVF1ZXN0Q29udGFpbmVyLCBxdWVzdENvbnRyb2xsZXIsIHJlbW92ZUVtcHR5U3RhdGUsIHNob3dFbXB0eVF1ZXN0c1N0YXRlIH0gZnJvbSAnLi9pbmRleFZpZXdGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoY2FyZCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjb2JqZWN0aXZlVGV4dElucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybURhdGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3REYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lUeXBlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbmN5VHlwZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVuY3lBbW91bnRJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdFRpbWVTcGVudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdFRpbWVWYWx1ZVwiKS52YWx1ZVxyXG4gICAgbGV0IGdldFF1ZXN0VGltZVR5cGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RUaW1lVHlwZVwiKS52YWx1ZVxyXG4gICAgbGV0IHRpbWVGcmFtZVN0YXJ0ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0U3RhcnRUaW1lXCIpLnZhbHVlXHJcbiAgICBsZXQgdGltZUZyYW1lRW5kID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0RW5kVGltZVwiKS52YWx1ZVxyXG5cclxuXHJcbiAgICBxdWVzdE9iamVjdC5vYmplY3RpdmUgPSBnZXRRdWVzdEZvcm1PYmplY3RpdmU7XHJcbiAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IGdldFF1ZXN0Rm9ybURhdGU7XHJcbiAgICBxdWVzdE9iamVjdC5xdWVzdENvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQudHlwZSA9IGdldFF1ZXN0Q3VycmVuY3lUeXBlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLmFtb3VudCA9IHBhcnNlSW50KGdldFF1ZXN0Q3VycmVuY3lBbW91bnQpO1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG4gICAgcXVlc3RPYmplY3Qub25lT2ZmQm9vbCA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QuZ29hbElkID0gbnVsbDtcclxuICAgIHF1ZXN0T2JqZWN0LnRpbWVTcGVudCA9IGdldFF1ZXN0VGltZVNwZW50O1xyXG4gICAgcXVlc3RPYmplY3QudGltZVR5cGUgPSBnZXRRdWVzdFRpbWVUeXBlO1xyXG5cclxuICAgXHJcblxyXG4gICAgIFxyXG4gICAgaWYgKHRpbWVGcmFtZVN0YXJ0ID09IG51bGwgfHwgdGltZUZyYW1lU3RhcnQgPT0gdW5kZWZpbmVkIHx8IHRpbWVGcmFtZVN0YXJ0ID09IFwiXCIgfHxcclxuICAgICAgICB0aW1lRnJhbWVFbmQgPT0gbnVsbCB8fCB0aW1lRnJhbWVFbmQgPT0gdW5kZWZpbmVkIHx8IHRpbWVGcmFtZUVuZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lU3RhcnQgPSBudWxsO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0LnRpbWVGcmFtZUVuZCA9IG51bGw7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlc3RPYmplY3QudGltZUZyYW1lU3RhcnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0LnRpbWVGcmFtZVN0YXJ0ID0gdGltZUZyYW1lU3RhcnQ7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lRW5kID0gdGltZUZyYW1lRW5kO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVF1ZXN0U3VibWlzc2lvbiAobmV3UXVlc3QpIHtcclxuICAgIFxyXG4gICAgbGV0IHZhbGlkQ3JpdGVyaWEgPSB0cnVlO1xyXG5cclxuICAgIGlmICghbmV3UXVlc3Qub2JqZWN0aXZlKSB7XHJcbiAgICAgICAgYWxlcnQoXCJRdWVzdCBPYmplY3RpdmUgUmVxdWlyZWQhXCIpXHJcbiAgICAgICAgdmFsaWRDcml0ZXJpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghbmV3UXVlc3QuZGF0ZVRvQ29tcGxldGUpIHtcclxuICAgICAgICBhbGVydChcIkludmFsaWQgRGF0ZSFcIilcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSW52YWxpZCBDdXJyZW5jeSBBbW91bnQ6XHJcbiAgICBpZiAoIW5ld1F1ZXN0LnJld2FyZC5hbW91bnQpIHtcclxuICAgICAgICBhbGVydChcIkN1cnJlbmN5IEFtb3VudCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwIVwiKTtcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB2YWxpZENyaXRlcmlhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlR2hvc3RDYXJkKCkge1xyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZ2hvc3RDYXJkXCIpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZU5ld1F1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2Fubm90IG1ha2UgYSBuZXcgcXVlc3QgdW50aWwgeW91IGhhdmUgc3VibWl0dGVkIHlvdXIgZmlyc3QgcXVlc3QgT1IgeW91ciBjdXJyZW50IHF1ZXN0IGxpc3QgaXMgZ3JlYXRlciB0aGFuIDAhXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgbGV0IGdob3N0Q2FyZCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICBsZXQgbmV3UXVlc3RDYXJkID0gY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKTtcclxuICAgICAgICBxdWVzdFBhcmFsbGF4Lmluc2VydEJlZm9yZShuZXdRdWVzdENhcmQsIGdob3N0Q2FyZCk7XHJcbiAgICB9KTtcclxuICAgIGNyZWF0ZU5ld1F1ZXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIFF1ZXN0ICtcIjtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY3JlYXRlTmV3UXVlc3RCdXR0b24pO1xyXG5cclxuICAgIC8vIEFkZCBob3ZlciBldmVudCBsaXN0ZW5lcnMgdG8gdG9nZ2xlIG9wYWNpdHlcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUgKCkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImVtcHR5Q2FyZFwiKTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJlbXB0eUNhcmRDb250ZW50XCIpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQ29udGVudCk7XHJcblxyXG4gICAgLy8gMS4gU3VibWl0IGJ1dHRvbiBDT05UQUlORVIgY29udGVudFxyXG4gICAgbGV0IHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAxYSkgU3VibWl0IE5ldyBRdWVzdCBCdXR0b25cclxuICAgICAgICBjb25zdCBzdW1iaXROZXdRdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInN1Ym1pdE5ld1F1ZXN0QnV0dG9uXCIpO1xyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICAgICAgbGV0IHggPSBnZXROZXdRdWVzdChjYXJkKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlUXVlc3RTdWJtaXNzaW9uKHgpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RQYXJhbGxheC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xyXG4gICAgICAgIHN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bWJpdE5ld1F1ZXN0QnV0dG9uKTtcclxuXHJcblxyXG4gICAgLy8gMi4gT2JqZWN0aXZlIENPTlRBSU5FUiBjb250ZW50IC0gaW5jbHVkZXMgdXNlciBvYmplY3RpdmUgdGV4dHVhbCBpbnB1dCBhbmQgdGltZSBpbnB1dHNcclxuICAgIGxldCBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZUNvbnRlbnRDb250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVDb250ZW50Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAyYSkgT2JqZWN0aXZlIFRleHQgSW5wdXQgQ29udGFpbmVyXHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXJcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICAvLyAyYSkgLSBPYmplY3RpdmUgVGV4dCBcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJEZWZpbmUgeW91ciBxdWVzdCBoZXJlLi4uXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiNzBcIik7IC8vIFNldCBjaGFyYWN0ZXIgbGltaXQgdG8gNzBcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwib2JqZWN0aXZlVGV4dElucHV0XCIpOyBcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHRJbnB1dCk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgLy8gMmIpIE9iamVjdGl2ZSBUaW1lZnJhbWUgRWxlbWVudHMgQ29udGFpbmVyXHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXJcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lcilcclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpKSBPYmplY3RpdmUgVGltZWZyYW1lIExhYmVsIENvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaSkgMS4gLSBJbnB1dCBEYXRlIGxhYmVsXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXREYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0RGF0ZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERhdGVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIDJiKSBpKSAyLiAtIElucHV0IFN0YXJ0IFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0U3RhcnRUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdFN0YXJ0VGltZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0U3RhcnRUaW1lTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0U3RhcnRUaW1lTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhcnQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFN0YXJ0VGltZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgMmIpIGkpIDMuIC0gSW5wdXQgRW5kIFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0RW5kVGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RW5kVGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0RW5kVGltZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdEVuZFRpbWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwudGV4dENvbnRlbnQgPSAnRW5kIFRpbWUgKE9wdGlvbmFsKTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRFbmRUaW1lTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFRpbWVUeXBlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0VGltZVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0VGltZVR5cGVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgU3BlbnQgVHlwZTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RUaW1lVHlwZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RUaW1lVmFsdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0VGltZVZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RUaW1lVmFsdWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVmFsdWVMYWJlbC50ZXh0Q29udGVudCA9ICdUaW1lIFNwZW50IFZhbHVlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFRpbWVWYWx1ZUxhYmVsKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAyYikgaWkpIE9iamVjdGl2ZSBUaW1lZnJhbWUgSW5wdXQgQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIG9iamVjdGl2ZSB0aW1lIGZyYW1lIGlucHV0XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5pZCA9ICdxdWVzdERhdGUnO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIG1pbmltdW0gZGF0ZSB0byB0b2RheVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgdG9kYXkpO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIHN0YXJ0IHRpbWUgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RTdGFydFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LmlkID0gJ3F1ZXN0U3RhcnRUaW1lJztcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0VGltZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIGVuZCB0aW1lIGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0RW5kVGltZScpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LmlkID0gJ3F1ZXN0RW5kVGltZSc7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kVGltZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgdGltZSBzcGVudCB1bml0IHNlbGVjdCBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVNwZW50VHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0VGltZVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5pZCA9ICdxdWVzdFRpbWVUeXBlJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gMTogSG91cnNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhvdXJzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBob3Vyc09wdGlvbi52YWx1ZSA9ICdob3Vycyc7XHJcbiAgICAgICAgICAgICAgICBob3Vyc09wdGlvbi50ZXh0Q29udGVudCA9ICdIb3Vycyc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQoaG91cnNPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAyOiBNaW51dGVzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW51dGVzT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzT3B0aW9uLnZhbHVlID0gJ21pbnV0ZXMnO1xyXG4gICAgICAgICAgICAgICAgbWludXRlc09wdGlvbi50ZXh0Q29udGVudCA9ICdNaW51dGVzJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChtaW51dGVzT3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gMzogTm8gc3BlY2lmaWMgdGltZWZyYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbGV4aWJsZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgZmxleGlibGVPcHRpb24udmFsdWUgPSAnTi9BJztcclxuICAgICAgICAgICAgICAgIGZsZXhpYmxlT3B0aW9uLnRleHRDb250ZW50ID0gJ04vQSc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQoZmxleGlibGVPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lU3BlbnRUeXBlSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgdGltZSBzcGVudCBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZVNwZW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0VGltZVZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5pZCA9ICdxdWVzdFRpbWVWYWx1ZSc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0Lm1pbiA9IDE7IC8vIFNldCB0aGUgbWluaW11bSB2YWx1ZSB0byAwXHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTsgLy8gRGlzYWJsZSBhdXRvY29tcGxldGUgZm9yIG51bWVyaWMgaW5wdXRcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lU3BlbnRJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIGRpc2FibGUgdGltZVNwZW50SW5wdXQgd2hlbiBcIk4vQVwiIG9wdGlvbiBpcyBzZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aW1lU3BlbnRUeXBlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuZGlzYWJsZWQgPSAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ04vQScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlID09PSAnTi9BJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnZhbHVlID0gJyc7IC8vIENsZWFyIHRoZSB2YWx1ZSBpZiBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gdmFsaWRhdGUgdGhlIGlucHV0IGFzIGEgcG9zaXRpdmUgaW50ZWdlclxyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRpbWVTcGVudElucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpOyAvLyBSZW1vdmUgYWxsIG5vbi1udW1lcmljIGNoYXJhY3RlcnNcclxuICAgICAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC52YWx1ZSA9IG51bWVyaWNWYWx1ZTsgLy8gVXBkYXRlIHRoZSBpbnB1dCB2YWx1ZSB0byBudW1lcmljLW9ubHkgdmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gMy4gUmV3YXJkIENPTlRBSU5FUiBjb250ZW50IC0gaW5jbHVkZXMgdXNlciByZXdhcmQgdHlwZSBpbnB1dCBhbmQgcmV3YXJkIGFtb3VudCBpbnB1dFxyXG4gICAgbGV0IHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJld2FyZFNlbGVjdGlvbkNvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gM2EpIFJld2FyZCBCb3ggUGFyZW50IEVsZW1lbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveElucHV0XCIpO1xyXG4gICAgICAgIHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICAgICAgLy8gM2EpIC0gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UpXHJcblxyXG4gICAgICAgICAgICAvLyAzYSkgLSBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICAvLyBSZXdhcmQgSW5wdXRzIC0gQ3VycmVuY3kgVHlwZVxyXG4gICAgICAgIGxldCByZXdhcmRUeXBlSW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRMYWJlbFwiKTtcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdDdXJyZW5jeSBUeXBlJztcclxuICAgICAgICBsZXQgcmV3YXJkVHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmV3YXJkVHlwZUlucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZEZvcm1cIik7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVuY3lUeXBlSW5wdXRcIilcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkVHlwZUlucHV0TGFiZWwpO1xyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRUeXBlSW5wdXQpO1xyXG4gXHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBUeXBlIC0gT3B0aW9ucyBkeW5hbWljYWxseSBnZW5lcmF0ZWQgYmFzZWQgb24gdGhlIHJld2FyZCB1dGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzIG9iamVjdCBsaXN0XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXNbaV0pXHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgcmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llc1tpXSk7XHJcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGAke3Jld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXNbaV19YDtcclxuICAgICAgICAgICAgcmV3YXJkVHlwZUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBSZXdhcmQgSW5wdXRzIC0gQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgbGV0IHJld2FyZEFtb3VudElucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRMYWJlbFwiKTtcclxuICAgICAgICBsZXQgcmV3YXJkQW1vdW50SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0N1cnJlbmN5IEFtb3VudCc7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkRm9ybVwiKTtcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInJld2FyZEFtb3VudElucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjEwMDAwXCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIwXCIpO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVuY3lBbW91bnRJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRBbW91bnRJbnB1dExhYmVsKTtcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQW1vdW50SW5wdXQpO1xyXG5cclxuICAgICAgICAvLyBSZXdhcmQgQW1vdW50IC0gQ29uc3RyYWludCB0byBmaXQgYXZhaWxhYmxlIGN1cnJlbmN5IGFsbG9jYXRpb25cclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID4gMTAwMDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJUaGlzIHZhbHVlIGNhbm5vdCBleGNlZWQgdGhlIG1heGltdW0gb2Y6IDEwMDAwXCIpXHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAxMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIC8vIDQuIFJlbW92ZSBjdXJyZW50IGNhcmQgY29udGFpbmVyXHJcbiAgICBsZXQgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlQ3VycmVudENhcmRDb250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDRhKSBDbG9zZSBCdXR0b25cclxuICAgICAgICBsZXQgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvblwiKVxyXG4gICAgICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uLnRleHRDb250ZW50ID0gJ1xcdTAwRDcnOyAvLyBTZXQgdGhlIG11bHRpcGxpY2F0aW9uIHNpZ24gYXMgdGV4dCBjb250ZW50XHJcblxyXG4gICAgICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IGdob3N0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2hvc3RDYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3RDYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RQYXJhbGxheC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHNob3dFbXB0eVF1ZXN0c1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uKVxyXG5cclxuXHJcbiAgICByZXR1cm4gY2FyZDtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXJkVGVtcGxhdGUgKHR5cGUpIHtcclxuIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxyXG5cclxuICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgIGxldCBvYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbGV0IG9iamVjdGl2ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb2JqZWN0aXZlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlQ29udGVudENvbnRhaW5lclwiKVxyXG5cclxuICAgICAgICAvLyBRdWVzdCBPYmplY3RpdmUgVGV4dFxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUZXh0LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUZXh0XCIpO1xyXG5cclxuICAgICAgICAvLyBRdWVzdCBPYmplY3RpdmUgVGltZSBDb250ZW50XHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGxldCBkb3RPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvdE9uZS5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xyXG4gICAgICAgIGRvdE9uZS5pZCA9IFwiZG90T25lXCI7XHJcblxyXG4gICAgICAgIGxldCBkb3RUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRvdFR3by5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xyXG4gICAgICAgIGRvdFR3by5pZCA9IFwiZG90VHdvXCI7XHJcblxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlVGV4dC5pZCA9IFwiZGF0ZVRvQ29tcGxldGVUZXh0XCI7XHJcblxyXG4gICAgICAgIGxldCB0aW1lU3BlbnRPblF1ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lU3BlbnRPblF1ZXN0LmlkID0gXCJ0aW1lU3BlbnRPblF1ZXN0XCI7XHJcblxyXG4gICAgICAgIGxldCB0aW1lRnJhbWVPZlF1ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aW1lRnJhbWVPZlF1ZXN0LmlkID0gXCJ0aW1lRnJhbWVPZlF1ZXN0XCI7XHJcblxyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlVG9Db21wbGV0ZVRleHQpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3RPbmUpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lU3BlbnRPblF1ZXN0KTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG90VHdvKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUZyYW1lT2ZRdWVzdCk7XHJcblxyXG5cclxuICAgIC8vICBDaGVjayBCb3hcclxuICAgIGxldCBjb21wbGV0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAvLyBjb21wbGV0ZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRydWVcIilcclxuICAgIC8vIH0pXHJcblxyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKGNvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKG9iamVjdGl2ZUNvbnRlbnQpO1xyXG4gICAgb2JqZWN0aXZlQ29udGVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0KVxyXG4gICAgb2JqZWN0aXZlQ29udGVudC5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIpXHJcbiAgIFxyXG5cclxuICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICBsZXQgcmV3YXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94XCIpO1xyXG5cclxuICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ICAgICAgICAgXHJcbiAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UpXHJcblxyXG4gICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlKTtcclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgIGlmICh0eXBlID09IFwicXVlc3RcIikge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgICAgIG9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKFwiY2FyZENvbnRlbnRcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpOyAgICAgICBcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJnb2FsXCIpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ2FyZFwiKVxyXG4gICAgICAgIG9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKFwiZ29hbE9iamVjdGl2ZVwiKTtcclxuICAgICAgICBjb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbXBsZXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgR29hbCBDb21wbGV0ZVwiO1xyXG4gICAgICAgIGNvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcImdvYWxDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWUuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZVwiKTsgICAgICAgXHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcImdvYWxSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZ29hbFJld2FyZEFtb3VudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBudWxsIHx8IHR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIFR5cGUhXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Y2FyZENvbnRlbnQgKHF1ZXN0LCBjYXJkRWxlbWVudCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICAgICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgICAgIGxldCBxdWVzdE9iamVjdGl2ZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlVGV4dFwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5pbm5lclRleHQgPSBxdWVzdC5vYmplY3RpdmU7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7cXVlc3Qub2JqZWN0aXZlfWApXHJcbiAgICBcclxuICAgICAgICBsZXQgY2hlY2tib3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHF1ZXN0LnF1ZXN0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVzdCk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QWdncmVnYXRvcihjdXJyZW5jeUNvbnRhaW5lciwgcXVlc3QpO1xyXG4gICAgICAgICAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgcmVtb3ZlQ29tcGxldGVkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpXHJcbiAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW5jeUNvbnRhaW5lclwiLCBjdXJyZW5jeUNvbnRhaW5lcilcclxuICAgICAgICAgICAgY2FyZEVsZW1lbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdob3N0Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2hvc3RDYXJkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgICAgICAgICBnaG9zdENhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFBhcmFsbGF4LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0VtcHR5UXVlc3RzU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHRpbWVDcml0ZXJpYUNvbnRlbnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lclwiKTtcclxuICAgICAgIFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZVRleHQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVUb0NvbXBsZXRlVGV4dFwiKTtcclxuICAgICAgICBsZXQgdGltZVNwZW50T25RdWVzdCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZVNwZW50T25RdWVzdFwiKTtcclxuICAgICAgICBsZXQgdGltZUZyYW1lT2ZRdWVzdCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZUZyYW1lT2ZRdWVzdFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRvdFR3byA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG90VHdvXCIpO1xyXG5cclxuICAgICAgICBpZiAocXVlc3QudGltZUZyYW1lU3RhcnQgPT0gbnVsbCB8fCBxdWVzdC50aW1lRnJhbWVFbmQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb3RUd28ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRpbWVGcmFtZU9mUXVlc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAocXVlc3QudGltZVR5cGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlVGV4dC50ZXh0Q29udGVudCA9IChgJHtxdWVzdC5kYXRlVG9Db21wbGV0ZX1gKTtcclxuICAgICAgICB0aW1lU3BlbnRPblF1ZXN0LnRleHRDb250ZW50ID0gKGBUaW1lIFJlcXVpcmVtZW50OiAke3F1ZXN0LnRpbWVTcGVudH0gJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIocXVlc3QudGltZVR5cGUpfWApO1xyXG4gICAgICAgIHRpbWVGcmFtZU9mUXVlc3QudGV4dENvbnRlbnQgPSAoYCR7cXVlc3QudGltZUZyYW1lU3RhcnR9IHRvICR7cXVlc3QudGltZUZyYW1lRW5kfWApXHJcblxyXG4gICAgICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV3YXJkQm94XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7cXVlc3R9LXJld2FyZGApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UocXVlc3QpKTsgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7cXVlc3QucmV3YXJkLmFtb3VudH0gJHtxdWVzdC5yZXdhcmQudHlwZX1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUdvYWxDYXJkQ29udGVudCAoZ29hbCwgY2FyZEVsZW1lbnQsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgLy9Hb2FsIE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICBsZXQgZ29hbE9iamVjdGl2ZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENhcmRUZXh0XCIpO1xyXG4gICAgZ29hbE9iamVjdGl2ZS5pbm5lclRleHQgPSBnb2FsLm9iamVjdGl2ZTtcclxuICAgIGdvYWxPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Z29hbC5vYmplY3RpdmV9YClcclxuXHJcbiAgICBsZXQgY2hlY2tib3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGdvYWwpO1xyXG4gICAgICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggZWxlbWVudCBub3QgZm91bmQgaW4gdGhlIGNhcmRcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICBsZXQgZGF0ZVRvQ29tcGxldGVUZXh0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlVG9Db21wbGV0ZVRleHRcIik7XHJcbiAgICBkYXRlVG9Db21wbGV0ZVRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGdvYWxDYXJkLSR7Z29hbC5kYXRlVG9Db21wbGV0ZX1gKVxyXG4gICAgZGF0ZVRvQ29tcGxldGVUZXh0LnRleHRDb250ZW50ID0gKGAke2dvYWwuZGF0ZVRvQ29tcGxldGV9YCk7XHJcblxyXG4gICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgIGxldCByZXdhcmRCb3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJld2FyZEJveFwiKTtcclxuICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZ29hbENhcmQtJHtnb2FsfS1yZXdhcmRgKTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShnb2FsKSlcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKTsgICAgICAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2dvYWwucmV3YXJkLmFtb3VudH0gJHtnb2FsLnJld2FyZC50eXBlfWApO1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclF1ZXN0TGlzdCAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3QgTGlzdCBpcyBFbXB0eVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHF1ZXN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICBxdWVzdExpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNhcmQgPSBjcmVhdGVDYXJkVGVtcGxhdGUoXCJxdWVzdFwiKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3QtJHtpfWApO1xyXG4gICAgICAgICAgICBkaXNwbGF5Y2FyZENvbnRlbnQoY3VycmVudFF1ZXN0TGlzdFtpXSwgY2FyZCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICBxdWVzdExpc3QuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyRGVmYXVsdEluZGV4KG1haW5QYWdlKSB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyIGRpdlxyXG4gICAgY29uc3QgdGFza0FuZEdvYWxCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGFza0FuZEdvYWxCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgYWRkUXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkUXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFF1ZXN0QnV0dG9uXCIpO1xyXG4gICAgYWRkUXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBRdWVzdCArXCI7XHJcbiAgXHJcbiAgICBjb25zdCBhZGRHb2FsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZEdvYWxCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZEdvYWxCdXR0b25cIik7XHJcbiAgICBhZGRHb2FsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgR29hbCArXCI7XHJcbiAgXHJcbiAgICB0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRRdWVzdEJ1dHRvbik7IFxyXG4gICAgdGFza0FuZEdvYWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkR29hbEJ1dHRvbik7XHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgdGhlIGdhbWVDb250ZW50SGVhZGVyIGRpdlxyXG4gICAgY29uc3QgZ2FtZUNvbnRlbnRIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ2FtZUNvbnRlbnRIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZChcImdhbWVDb250ZW50SGVhZGVyXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgcXVlc3RIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcXVlc3RIZWFkZXJEaXYuaWQgPSBcInF1ZXN0SGVhZGVyXCI7XHJcbiAgICBxdWVzdEhlYWRlckRpdi50ZXh0Q29udGVudCA9IFwiTXkgUXVlc3RzXCI7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdFRpbWVPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0VGltZU9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0VGltZU9wdGlvbnNcIik7XHJcbiAgXHJcbiAgICBjb25zdCB0b2RheVF1ZXN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0b2RheVF1ZXN0c0Rpdi5pZCA9IFwidG9kYXlRdWVzdHNcIjtcclxuICAgIHRvZGF5UXVlc3RzRGl2LnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIFxyXG4gICAgY29uc3Qgd2Vla2x5UXVlc3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHdlZWtseVF1ZXN0c0Rpdi5pZCA9IFwid2Vla2x5UXVlc3RzXCI7XHJcbiAgICB3ZWVrbHlRdWVzdHNEaXYudGV4dENvbnRlbnQgPSBcIldlZWtseVwiO1xyXG4gIFxyXG4gICAgcXVlc3RUaW1lT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh0b2RheVF1ZXN0c0Rpdik7XHJcbiAgICBxdWVzdFRpbWVPcHRpb25zRGl2LmFwcGVuZENoaWxkKHdlZWtseVF1ZXN0c0Rpdik7XHJcbiAgXHJcbiAgICBxdWVzdEhlYWRlckRpdi5hcHBlbmRDaGlsZChxdWVzdFRpbWVPcHRpb25zRGl2KTtcclxuICBcclxuICAgIGNvbnN0IGdvYWxIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbEhlYWRlckRpdi5pZCA9IFwiZ29hbEhlYWRlclwiO1xyXG4gICAgZ29hbEhlYWRlckRpdi50ZXh0Q29udGVudCA9IFwiTXkgR29hbHNcIjtcclxuICBcclxuICAgIGNvbnN0IGdvYWxDb21wbGV0ZU9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbENvbXBsZXRlT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbXBsZXRlT3B0aW9uc1wiKTtcclxuICBcclxuICAgIGNvbnN0IGluUHJvZ3Jlc3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaW5Qcm9ncmVzc0Rpdi5pZCA9IFwiaW5Qcm9ncmVzc1wiO1xyXG4gICAgaW5Qcm9ncmVzc0Rpdi50ZXh0Q29udGVudCA9IFwiSW4gUHJvZ3Jlc3NcIjtcclxuICBcclxuICAgIGNvbnN0IGNvbXBsZXRlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb21wbGV0ZWREaXYuaWQgPSBcImNvbXBsZXRlZFwiO1xyXG4gICAgY29tcGxldGVkRGl2LnRleHRDb250ZW50ID0gXCJDb21wbGV0ZWRcIjtcclxuICBcclxuICAgIGdvYWxDb21wbGV0ZU9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoaW5Qcm9ncmVzc0Rpdik7XHJcbiAgICBnb2FsQ29tcGxldGVPcHRpb25zRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZERpdik7XHJcbiAgXHJcbiAgICBnb2FsSGVhZGVyRGl2LmFwcGVuZENoaWxkKGdvYWxDb21wbGV0ZU9wdGlvbnNEaXYpO1xyXG4gIFxyXG4gICAgZ2FtZUNvbnRlbnRIZWFkZXJEaXYuYXBwZW5kQ2hpbGQocXVlc3RIZWFkZXJEaXYpO1xyXG4gICAgZ2FtZUNvbnRlbnRIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZ29hbEhlYWRlckRpdik7XHJcbiAgXHJcbiAgICAvLyBDcmVhdGUgdGhlIGdhbWVDb250ZW50IGRpdlxyXG4gICAgY29uc3QgZ2FtZUNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ2FtZUNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImdhbWVDb250ZW50XCIpO1xyXG4gIFxyXG4gICAgY29uc3QgcXVlc3RDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcXVlc3RDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsQ29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29udGFpbmVyXCIpO1xyXG5cclxuICAgIGNvbnN0IGdvYWxDb250YWluZXJQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsQ29udGFpbmVyUGFyYWxsYXguY2xhc3NMaXN0LmFkZChcImdvYWxQYXJhbGxheFwiKTtcclxuICAgIGdvYWxDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQoZ29hbENvbnRhaW5lclBhcmFsbGF4KTtcclxuICBcclxuICAgIC8vIEFwcGVuZCB0aGUgY2hpbGQgZGl2cyB0byB0aGUgZ2FtZUNvbnRlbnQgZGl2XHJcbiAgICBnYW1lQ29udGVudERpdi5hcHBlbmRDaGlsZChxdWVzdENvbnRhaW5lckRpdik7XHJcbiAgICBnYW1lQ29udGVudERpdi5hcHBlbmRDaGlsZChnb2FsQ29udGFpbmVyRGl2KTtcclxuICBcclxuICAgIC8vIFJlcGxhY2UgdGhlIG1haW5QYWdlIGNvbnRlbnQgd2l0aCB0aGUgZ2FtZUNvbnRlbnQgZGl2XHJcbiAgICBtYWluUGFnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGFza0FuZEdvYWxCdXR0b25Db250YWluZXIpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRlbnRIZWFkZXJEaXYpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRlbnREaXYpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsIHRoZSByZW5kZXJEZWZhdWx0SW5kZXggZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBkZWZhdWx0IGluZGV4IEhUTUwgZWxlbWVudHNcclxuLy8gICBjb25zdCBtYWluUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwQ29udGVudFwiKTtcclxuLy8gICByZW5kZXJEZWZhdWx0SW5kZXgobWFpblBhZ2VDb250YWluZXIpOyIsImltcG9ydCB7IGN1cnJlbnRHb2FsTGlzdCwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IGluaXRpYWxpemVEZWZhdWx0SW5kZXggZnJvbSBcIi4vaW5pdGlhbGl6ZUluZGV4RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50LCBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCwgYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50LCBsaXN0Q29udGFpbmVyLCBjcmVhdGVRdWVzdEZvcm0gfSBmcm9tIFwiLi9nb2FsQ3JlYXRpb25QYWdlSFRNTFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdHb2FsT2JqZWN0IH0gZnJvbSBcIi4vZ29hbEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJHb2FsQ3JlYXRpb25QYWdlICgpIHtcclxuXHJcbiAgICBsZXQgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcENvbnRlbnRcIik7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBoZWFkZXIgZGl2XHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZ29hbENyZWF0aW9uUGFnZVwiKTtcclxuICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyR29hbENyZWF0aW9uUGFnZVwiO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgaGVhZGVyIGVsZW1lbnRzXHJcbiAgICAgICAgbGV0IGhlYWRlclRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgbGV0IGJhY2tQYWdlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgbGV0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgaGVhZGVyVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja1BhZ2VCdXR0b24pO1xyXG4gICAgICAgICAgICBoZWFkZXJUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XHJcblxyXG4gICAgICAgIGxldCBkZWxldGVHb2FsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIGNsYXNzZXMgYW5kIElEIHRvIHRoZSBlbGVtZW50c1xyXG4gICAgICAgIGhlYWRlclRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJUaXRsZUNvbnRhaW5lclwiKVxyXG4gICAgICAgIGJhY2tQYWdlQnV0dG9uLmlkID0gXCJiYWNrUGFnZUJ1dHRvbkdvYWxDcmVhdGlvblBhZ2VcIjtcclxuICAgICAgICBoZWFkZXJUaXRsZS5pZCA9IFwiaGVhZGVyVGl0bGVHb2FsQ3JlYXRpb25QYWdlXCI7XHJcbiAgICAgICAgZGVsZXRlR29hbC5pZCA9IFwiZGVsZXRlR29hbENyZWF0aW9uUGFnZVwiO1xyXG5cclxuICAgICAgICAvLyBUZXh0IENvbnRlbnRcclxuICAgICAgICBiYWNrUGFnZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiPFwiO1xyXG4gICAgICAgIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJHb2Fsc1wiO1xyXG4gICAgICAgIGRlbGV0ZUdvYWwudGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xyXG5cclxuICAgICAgICBiYWNrUGFnZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaWxlIChtYWluUGFnZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5yZW1vdmVDaGlsZChtYWluUGFnZS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5pdGlhbGl6ZURlZmF1bHRJbmRleCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZGVsZXRlR29hbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgXHJcbiAgICAgICAgICAgIHdoaWxlIChtYWluUGFnZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYWluUGFnZS5yZW1vdmVDaGlsZChtYWluUGFnZS5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW5pdGlhbGl6ZURlZmF1bHRJbmRleCgpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGVsZW1lbnRzIHRvIHRoZSBoZWFkZXJcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZUNvbnRhaW5lcilcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChkZWxldGVHb2FsKTtcclxuXHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSBjb250ZW50IGRpdlxyXG4gICAgbGV0IGdvYWxDcmVhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImdvYWxDcmVhdGlvblBhZ2VcIik7XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuaWQgPSBcImdvYWxDcmVhdGlvbkNvbnRlbnRDb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgIC8vIENyZWF0ZSB0aGUgZmlyc3QgY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJnb2FsVGl0bGVDb250YWluZXJcIlxyXG5cclxuICAgICAgICBsZXQgZ29hbFRpdGxlQ29udGFpbmVyID0gY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50IChcclxuICAgICAgICAgICAgXCJnb2FsVGl0bGVDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwidGV4dFwiLFxyXG4gICAgICAgICAgICBcImdvYWxUaXRsZUNvbnRhaW5lcklucHV0XCIsXHJcbiAgICAgICAgICAgIFwiRW50ZXIgWW91ciBHb2FsIE9iamVjdGl2ZSBIZXJlLi4uXCIsXHJcbiAgICAgICAgICAgICdFbnRlciB0aGUgbmFtZSBvZiB5b3VyIGdvYWwgaW4gdGhlIFwiVW50aXRsZWRcIiBmaWVsZCBhYm92ZS4gQW4gZXhhbXBsZSBvZiBhIGdvYWwgY2FuIGJlOiBcIkJlY29tZSBGbHVlbnQgaW4gU3BhbmlzaFwiIG9yIFwiR2V0IFNpeC1QYWNrIEFic1wiLi4uICcsXHJcbiAgICAgICAgICAgIFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIlxyXG4gICAgICAgICAgICApIFxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHNlY29uZCBjaGlsZCBkaXYgd2l0aCBjbGFzcyBcInJld2FyZEFzc2lnbm1lbnRDb250YWluZXJcIlxyXG5cclxuICAgICAgICBsZXQgcmV3YXJkQXNzaWdubWVudENvbnRhaW5lciA9IGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgICAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInJld2FyZEFzc2lnbm1lbnRJbnB1dENvbnRhaW5lclwiLCBcclxuICAgICAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwiQXNzaWduIFJld2FyZHM6XCIsIFxyXG4gICAgICAgICAgICBcImdvYWxSZXdhcmRBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgICAgICBcImdvYWxSZXdhcmRBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgICAgICAnQXNzaWduIHJld2FyZHMgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIGFtb3VudCB3aWxsIGJlIHNwbGl0IGFtb25nIHlvdXIgb3V0c3RhbmRpbmcgcXVlc3RzLicsIFxyXG4gICAgICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIsXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0XCJcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHRoaXJkIGNoaWxkIGRpdiB3aXRoIGNsYXNzIFwidGltZUFzc2lnbm1lbnRDb250YWluZXJcIlxyXG4gIFxyXG4gICAgICAgIGxldCB0aW1lQXNzaWdubWVudENvbnRhaW5lciA9IGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgICAgICAgICAgXCJ0aW1lQXNzaWdubWVudENvbnRhaW5lclwiLCBcclxuICAgICAgICAgICAgXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInJld2FyZEFzc2lnbm1lbnRFeGFtcGxlVGV4dENvbnRhaW5lclwiLCBcclxuICAgICAgICAgICAgXCJBc3NpZ24gVGltZTpcIiwgXHJcbiAgICAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgICAgICBcImdvYWxUaW1lQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICAgICAgXCJBc3NpZ24gdGltZSB0byB5b3VyIGdvYWwuIFRoZSBzcGVjaWZpZWQgdGltZSB3aWxsIGJlIHNwbGl0IGFtb25nIHlvdXIgb3V0c3RhbmRpbmcgcXVlc3RzLlwiLCBcclxuICAgICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4gICAgICAgICAgICBcInRpbWVBc3NpZ25tZW50RXhhbXBsZVRleHRcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIFJhZGlvIEJ1dHRvbnMgdG8gdGhlIHRoaXJkIGNoaWxkIGRpdlxyXG4gICAgICAgIGFkZFJhZGlvQnV0dG9uc1RvRWxlbWVudCh0aW1lQXNzaWdubWVudENvbnRhaW5lciwgXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBmb3VydGggY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJhZGRRdWVzdENvbnRhaW5lclwiXHJcbiAgICAgICAgbGV0IGFkZFF1ZXN0Q29udGFpbmVyID0gbGlzdENvbnRhaW5lciAoXHJcbiAgICAgICAgICAgIFwiYWRkUXVlc3RDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJBZGQgUXVlc3QocykgdG8gWW91ciBHb2FsOlwiLFxyXG4gICAgICAgICAgICBcImFkZFF1ZXN0Q29udGFpbmVySW5wdXRGaWVsZFwiLFxyXG4gICAgICAgICAgICBcImdvYWxRdWVzdExpc3RcIlxyXG4gICAgICAgIClcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIGRpdnMgdG8gdGhlIHNlY29uZCBwYXJlbnQgZGl2XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFRpdGxlQ29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lQXNzaWdubWVudENvbnRhaW5lcik7XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXIpO1xyXG4gXHJcbiAgICAvLyBDcmVhdGUgdGhlIGZvb3RlciBkaXZcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25QYWdlXCIpO1xyXG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJHb2FsQ3JlYXRpb25QYWdlXCJcclxuXHJcbiAgICBsZXQgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImdvYWxDb25maXJtQ3JlYXRlQnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIlxyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgbmV3R29hbCA9IGNyZWF0ZU5ld0dvYWxPYmplY3QoKTtcclxuXHJcbiAgICAgICAgLy8gT25seSBhZGQgdGhlIGdvYWwsIHNhdmUgaXQsIGFuZCByZS1pbml0aWFsaXplIHRoZSBwYWdlIGlmIG5ld0dvYWwgaXMgbm90IG51bGxcclxuICAgICAgICBpZihuZXdHb2FsICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRHb2FsTGlzdC5wdXNoKG5ld0dvYWwpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudEdvYWxMaXN0XCIsIGN1cnJlbnRHb2FsTGlzdCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHb2FsTGlzdCk7XHJcbiAgICBcclxuICAgICAgICAgICAgd2hpbGUgKG1haW5QYWdlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICAgIG1haW5QYWdlLnJlbW92ZUNoaWxkKG1haW5QYWdlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaW5pdGlhbGl6ZURlZmF1bHRJbmRleCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZ29hbENvbmZpcm1DcmVhdGVCdXR0b24pO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgcGFyZW50IGRpdnMgdG8gdGhlIGRvY3VtZW50IGJvZHkgb3IgYW55IG90aGVyIGNvbnRhaW5lclxyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGdvYWxDcmVhdGlvbkNvbnRhaW5lcik7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHb2FsTGlzdCk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gQXNzdW1pbmcgdGhlIGNvZGUgZm9yIHRoZSBXZWFwb24gY2xhc3MsIEhlcm9UeXBlV2VhcG9uTGlzdCBjbGFzcywgYW5kIHdlYXBvbkxpc3RzIGZvciBlYWNoIGNsYXNzIGlzIGFscmVhZHkgZGVmaW5lZC5cclxuaW1wb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0LCB0ZXN0V2VhcG9uTGlzdCB9IGZyb20gXCIuL3dlYXBvbkxpc3QuanNcIlxyXG5pbXBvcnQgeyBpdGVtUG9zc2libGVFbGVtZW50cywgaXRlbVBvc3NpYmxlUmFyaXR5LCBpdGVtUG9zc2libGVTdGF0cywgaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUG9zc2libGVTdWZmaXggfSBmcm9tIFwiLi9jbGFzc2VzL2l0ZW1TdGF0cy5qc1wiO1xyXG5pbXBvcnQgaW1wb3J0QWxsSW1hZ2VzIGZyb20gJy4vaGVscGVyRnVuY3Rpb25zL2ltYWdlSGFuZGxlci5qcyc7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pO1xyXG5cclxuY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbilcclxuXHJcblxyXG5cclxuY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGVsZW1lbnQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcykge1xyXG4gICAgICAgIHN3aXRjaCAocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcm9ndWVXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gcHJpZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB3YXJyaW9yV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc29yY2VyZXJXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcInRlc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHRlc3RXZWFwb25MaXN0O1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYXllciBjbGFzcy5cIik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIGNvbnN0IHdlYXBvbkxpc3QgPSBnZXRXZWFwb25MaXN0KHBsYXllckNsYXNzKTtcclxuICBcclxuICAgIGlmICh3ZWFwb25MaXN0KSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XS5fdHlwZTtcclxuICAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSBvZiBhbiBpbnZhbGlkIHBsYXllciBjbGFzc1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byByZXRyaWV2ZSB3ZWFwb24gbGlzdC5cIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUmFyaXR5IChpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRvdGFsIGNoYW5jZSB0byAwXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgY2hhbmNlIHZhbHVlcyBvZiBhbGwgcmFyaXR5IG9iamVjdCBjaGFuY2VzXHJcbiAgICAvLyBUaGlzIHNob3VsZCBhZGQgdXAgdG8gMTAwXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgdG90YWxDaGFuY2UgKz0gcmFyaXR5T2JqZWN0LmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBhIHJhbmRvbSB3aG9sZSBpbnRlZ2VyIGJldHdlZW4gMCAtIDEwMFxyXG4gICAgbGV0IHJhbmRvbUNoYW5jZSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlKTtcclxuXHJcbiAgICAvLyBTZXQgcmFyaXR5IHZhbHVlIHRvIG51bGxcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIC8vIFJldHVybiB0aGUgcmFyaXR5IGJhc2VkIG9uIHlvdXIgcmFuZG9tQ2hhbmNlIHJvbGwuIFxyXG4gICAgLy8gRm9yIGV4YW1wbGUgaWYgUmFuZG9tIENoYW5jZSB3YXMgOTQ6XHJcbiAgICAvLyA5NCAtIDQwIChOb3JtYWwgUmFyaXR5KSA9IDU0IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDU0IC0gMzAgKFVuY29tbW9uIFJhcml0eSkgPSAyNCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyAyNCAtIDE1IChSYXJlIFJhcml0eSkgPSA5IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDkgLSAxMCAoRXBpYyBSYXJpdHkpID0gLTEgPC0tIFRoZXJlZm9yZSByYXJpdHkgb2YgaXRlbSBpcyBFcGljIGFzICg5IC0gMTApIDwgKDApXHJcbiAgICBmb3IgKGxldCByYXJpdHlPYmplY3Qgb2YgaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICAgICAgLy8gVGhlIHZhbHVlIGlzICgtMC4wMSB0byBhY291bnQgZm9yIHJvdW5kaW5nIGVycm9ycylcclxuICAgICAgICBpZiAocmFuZG9tQ2hhbmNlIDw9IC0wLjAxKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eU9iamVjdC5yYXJpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiByYXJpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN0YXRzKGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUmFyaXR5KSB7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpIHtcclxuICAgIGNvbnN0IGRlY2ltYWxQbGFjZXMgPSAyOyAvLyBOdW1iZXIgb2YgZGVjaW1hbCBwbGFjZXNcclxuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcclxuICAgIHJldHVybiBOdW1iZXIocmFuZG9tTnVtYmVyLnRvRml4ZWQoZGVjaW1hbFBsYWNlcykpO1xyXG4gIH1cclxuXHJcbiAgICAvLyBVc2luZyB0aGUgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gdG8gYWNjZXNzIHRoZSBwcm9wZXJ0eSBhdCBydW50aW1lXHJcbiAgICBjb25zdCByYXJpdHlTdGF0cyA9IGl0ZW1Qb3NzaWJsZVN0YXRzW2l0ZW1SYXJpdHldO1xyXG4gICAgY29uc3QgaXRlbVN0YXRzID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGF0IGluIHJhcml0eVN0YXRzKSB7XHJcbiAgICAgICAgY29uc3QgeyBtaW4sIG1heCB9ID0gcmFyaXR5U3RhdHNbc3RhdF07XHJcbiAgICBpdGVtU3RhdHNbc3RhdF0gPSBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0LCBpdGVtU3RhdHNbc3RhdF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtU3RhdHM7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVJhcml0eSkge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldLmxlbmd0aClcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVQcmVmaXhbaXRlbVJhcml0eV1bcmFuZG9tSW5kZXhdO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1FbGVtZW50KGl0ZW1Qb3NzaWJsZUVsZW1lbnRzKSB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtUG9zc2libGVFbGVtZW50cy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZUVsZW1lbnRzW3JhbmRvbUluZGV4XVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVN1ZmZpeChpdGVtUG9zc2libGVTdWZmaXgsIGVsZW1lbnQpIHtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVTdWZmaXhbZWxlbWVudF07XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tV2VhcG9uIChwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGxldCB3ZWFwb25UeXBlID0gZ2V0SXRlbVR5cGUocGxheWVyQ2xhc3MpO1xyXG4gICAgbGV0IHdlYXBvbkVsZW1lbnQgPSBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cyk7XHJcbiAgICBsZXQgd2VhcG9uUmFyaXR5ID0gZ2V0SXRlbVJhcml0eShpdGVtUG9zc2libGVSYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblN0YXRzID0gZ2V0SXRlbVN0YXRzKGl0ZW1Qb3NzaWJsZVN0YXRzLCB3ZWFwb25SYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblByZWZpeCA9IGdldEl0ZW1QcmVmaXgoaXRlbVBvc3NpYmxlUHJlZml4LCB3ZWFwb25SYXJpdHkpO1xyXG4gICAgbGV0IHdlYXBvblN1ZmZpeCA9IGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCB3ZWFwb25FbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFdlYXBvbihcclxuICAgICAgICAod2VhcG9uUHJlZml4ICsgXCIgXCIgKyB3ZWFwb25UeXBlICsgXCIgXCIgKyB3ZWFwb25TdWZmaXgpLCBcclxuICAgICAgICB3ZWFwb25UeXBlLFxyXG4gICAgICAgIHBsYXllckNsYXNzLFxyXG4gICAgICAgIHdlYXBvblJhcml0eSxcclxuICAgICAgICB3ZWFwb25TdGF0cyxcclxuICAgICAgICB3ZWFwb25FbGVtZW50LFxyXG4gICAgICAgIG51bGwsXHJcbiAgICApXHJcblxyXG4gXHJcbn1cclxuLy8gU2ltdWxhdGluZyBhbiBpdGVtIGJlaW5nIHB1bGxlZCBmcm9tIGEgY2hlc3QgYmFzZWQgb24gcGxheWVyJ3MgY2xhc3MgYW5kIHJhcml0eSBwcm9iYWJpbGl0aWVzXHJcbmV4cG9ydCBmdW5jdGlvbiBwdWxsSXRlbUZyb21DaGVzdChwbGF5ZXJDbGFzcywgcGl0eSkge1xyXG4gICBcclxuXHJcbiAgICAvLyBDb25zaWRlciBjb25zdGFudCByYXJpdHkgb2JqZWN0IGZvciBzY2FsaW5nIHB1cnBvc2VzXHJcbiAgICBjb25zdCByYXJpdHlQcm9iYWJpbGl0aWVzID0gW1xyXG4gICAgICAgIHsgcmFyaXR5OiBcIk5vcm1hbFwiLCBjaGFuY2U6IDQwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiVW5jb21tb25cIiwgY2hhbmNlOiAzMCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlJhcmVcIiwgY2hhbmNlOiAxNSB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIkVwaWNcIiwgY2hhbmNlOiAxMCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIkxlZ2VuZGFyeVwiLCBjaGFuY2U6IDUgfSxcclxuICAgIF07XHJcblxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuICAgIGZvciAoY29uc3QgcmFyaXR5RGF0YSBvZiByYXJpdHlQcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgdG90YWxDaGFuY2UgKz0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJhbmRvbUNoYW5jZSA9IE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZTtcclxuICAgIGNvbnNvbGUubG9nKHJhbmRvbUNoYW5jZSk7XHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlEYXRhLmNoYW5jZTtcclxuICAgICAgICBpZiAocmFuZG9tQ2hhbmNlIDw9IDApIHtcclxuICAgICAgICAgICAgcmFyaXR5ID0gcmFyaXR5RGF0YS5yYXJpdHk7XHJcbiAgICAgICAgICAgIHJldHVybiByYXJpdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgIGNvbnN0IHJhbmRvbVdlYXBvbiA9IHdlYXBvbkxpc3RbcmFuZG9tSW5kZXhdO1xyXG5cclxuICAgIC8vIEFzc2lnbiByYW5kb20gcHJvcGVydGllcyB0byB0aGUgd2VhcG9uXHJcbiAgICByYW5kb21XZWFwb24uX25hbWUgPSBcIkRpdmluZSBTdGFmZlwiOyAvLyBFeGFtcGxlIHByb3BlcnR5XHJcbiAgICByYW5kb21XZWFwb24uX3Jhcml0eSA9IHJhcml0eTsgLy8gQXNzaWduaW5nIHRoZSBkZXRlcm1pbmVkIHJhcml0eVxyXG5cclxuICAgIC8vIElmIHRoZSBwdWxsZWQgaXRlbSBpcyBsZWdlbmRhcnksIHJlc2V0IHRoZSBwaXR5IGNvdW50ZXJcclxuICAgIGlmIChyYXJpdHkgPT09IFwiTGVnZW5kYXJ5XCIpIHtcclxuICAgICAgICBwaXR5ID0gMDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGl0eSsrOyAvLyBJbmNyZW1lbnQgdGhlIHBpdHkgY291bnRlciBpZiBhIGxlZ2VuZGFyeSBpdGVtIHdhcyBub3QgcHVsbGVkXHJcbiAgICB9XHJcblxyXG4gICAgLy8gR3VhcmFudGVlIGEgbGVnZW5kYXJ5IGl0ZW0gaWYgdGhlIHBpdHkgY291bnRlciByZWFjaGVzIDEwMFxyXG4gICAgaWYgKHBpdHkgPj0gMTAwKSB7XHJcbiAgICAgICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSBcIkxlZ2VuZGFyeVwiO1xyXG4gICAgICAgIHBpdHkgPSAwOyAvLyBSZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICB9XHJcblxyXG4gICAgcmFuZG9tV2VhcG9uLl9zdGF0cyA9IHtcclxuICAgICAgICBhdHRhY2s6IDE1MCxcclxuICAgICAgICBpbnRlbGxlY3Q6IDUwLFxyXG4gICAgICAgIHN0YW1pbmE6IDgwLFxyXG4gICAgfTsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG5cclxuICAgIHJldHVybiB7IGl0ZW06IHJhbmRvbVdlYXBvbiwgcGl0eSB9O1xyXG59XHJcbiIsImNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jb25zdCByb2d1ZVdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiRGFnZ2VyXCIsIFwiRGFnZ2VyXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbCBCbGFkZXNcIiwgXCJEdWFsIEJsYWRlc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJvd1wiLCBcIkJvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRocm93aW5nIEtuaXZlc1wiLCBcIlRocm93aW5nIEtuaXZlc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNsYXcgV2VhcG9uc1wiLCBcIkNsYXcgV2VhcG9uc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNyb3NzYm93XCIsIFwiQ3Jvc3Nib3dcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSYXBpZXJcIiwgXCJSYXBpZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJCbG93Z3VuXCIsIFwiQmxvd2d1blwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNoYWtyYW1zXCIsIFwiQ2hha3JhbXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHYXJyb3RlXCIsIFwiR2Fycm90ZVwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCB3YXJyaW9yV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdHN3b3JkXCIsIFwiR3JlYXRzd29yZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIlN3b3JkIGFuZCBTaGllbGRcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIldhcmhhbW1lclwiLCBcIldhcmhhbW1lclwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUG9sZWFybVwiLCBcIlBvbGVhcm1cIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkF4ZVwiLCBcIkF4ZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWFjZVwiLCBcIk1hY2VcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkR1YWwtV2llbGRpbmcgQXhlc1wiLCBcIkR1YWwtV2llbGRpbmcgQXhlc1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR3JlYXRheGVcIiwgXCJHcmVhdGF4ZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRmxhaWxcIiwgXCJGbGFpbFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyIEdhdW50bGV0c1wiLCBcIldhciBHYXVudGxldHNcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBwcmllc3RXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIlN0YWZmXCIsIFwiU3RhZmZcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWFjZSBhbmQgU2hpZWxkXCIsIFwiTWFjZSBhbmQgU2hpZWxkXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgV2FuZFwiLCBcIkhvbHkgV2FuZFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJUb21lXCIsIFwiVG9tZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IEhhbW1lclwiLCBcIkhvbHkgSGFtbWVyXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFua2hcIiwgXCJBbmtoXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgQm93XCIsIFwiSG9seSBCb3dcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU2FjcmVkIENoYWxpY2VcIiwgXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQcmF5ZXIgQmVhZHNcIiwgXCJQcmF5ZXIgQmVhZHNcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBTY3l0aGVcIiwgXCJIb2x5IFNjeXRoZVwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3Qgc29yY2VyZXJXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIlN0YWZmXCIsIFwiU3RhZmZcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTcGVsbGJvb2tcIiwgXCJTcGVsbGJvb2tcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbGVtZW50YWwgV2FuZFwiLCBcIkVsZW1lbnRhbCBXYW5kXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3J5c3RhbCBPcmJcIiwgXCJDcnlzdGFsIE9yYlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJ1bmVibGFkZVwiLCBcIlJ1bmVibGFkZVwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJBcmNhbmUgR2F1bnRsZXRzXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRW5jaGFudGVkIEJvd1wiLCBcIkVuY2hhbnRlZCBCb3dcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTY2VwdGVyXCIsIFwiU2NlcHRlclwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkFyY2FuZSBEYWdnZXJcIiwgXCJBcmNhbmUgRGFnZ2VyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR3Jhdml0b24gU3RhZmZcIiwgXCJHcmF2aXRvbiBTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCB0ZXN0V2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJBYnlzcyBTaG9ydCBTd29yZFwiLCBcIkFieXNzIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ29ycm9zaW9uIFNob3J0IFN3b3JkXCIsIFwiQ29ycm9zaW9uIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR2FpYSBTaG9ydCBTd29yZFwiLCBcIkdhaWEgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJJbmZlcm5vIFNob3J0IFN3b3JkXCIsIFwiSW5mZXJubyBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkx1bmFyIFNob3J0IFN3b3JkXCIsIFwiTHVuYXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNaXN0IFNob3J0IFN3b3JkXCIsIFwiTWlzdCBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJ1bmUgU2hvcnQgU3dvcmRcIiwgXCJSdW5lIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU29sYXIgU2hvcnQgU3dvcmRcIiwgXCJTb2xhciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlZvbHQgU2hvcnQgU3dvcmRcIiwgXCJWb2x0IFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiWmVwaHlyIFNob3J0IFN3b3JkXCIsIFwiWmVwaHlyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmV4cG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfTsiLCJjbGFzcyBab2RpYWNTaWduIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xyXG4gICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnREYXRlUmFuZ2UoZGF0ZVJhbmdlKSB7XHJcbiAgICAgIC8vIFNwbGl0IHRoZSBkYXRlIHJhbmdlIHN0cmluZyBpbnRvIHN0YXJ0IGFuZCBlbmQgZGF0ZXNcclxuICAgICAgY29uc3QgW3N0YXJ0U3RyLCBlbmRTdHJdID0gZGF0ZVJhbmdlLnNwbGl0KCcgLSAnKTtcclxuICAgIFxyXG4gICAgICAvLyBQYXJzZSB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyB1c2luZyB0aGUgRGF0ZSBjb25zdHJ1Y3RvclxyXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydFN0cik7XHJcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZShlbmRTdHIpO1xyXG4gICAgXHJcbiAgICAgIC8vIEFkanVzdCB0aGUgeWVhciBvZiB0aGUgZW5kIGRhdGUgaWYgbmVjZXNzYXJ5XHJcbiAgICAgIGlmIChlbmREYXRlIDwgc3RhcnREYXRlKSB7XHJcbiAgICAgICAgZW5kRGF0ZS5zZXRGdWxsWWVhcihzdGFydERhdGUuZ2V0RnVsbFllYXIoKSArIDEpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgLy8gUmV0dXJuIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIGFzIGFuIG9iamVjdFxyXG4gICAgICByZXR1cm4geyBzdGFydERhdGUsIGVuZERhdGUgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5jb25zdCB6b2RpYWNTaWducyA9IFtcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFyaWVzXCIsXHJcbiAgICAgIFwiTWFyY2ggMjEgLSBBcHJpbCAxOVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTdGVlbFwiLFxyXG4gICAgICBcIkFyZXMsIHRoZSBHb2Qgb2YgV2FyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlRhdXJ1c1wiLFxyXG4gICAgICBcIkFwcmlsIDIwIC0gTWF5IDIwXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJBYnlzc1wiLFxyXG4gICAgICBcIkhhZGVzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkdlbWluaVwiLFxyXG4gICAgICBcIk1heSAyMSAtIEp1bmUgMjBcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJaZXBoeXJcIixcclxuICAgICAgXCJJemFuYW1pL0l6YW5hZ2ksIHRoZSBHb2RzL0dvZGRlc3NlcyBvZiBDcmVhdGlvbiBhbmQgRGVhdGggKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2FuY2VyXCIsXHJcbiAgICAgIFwiSnVuZSAyMSAtIEp1bHkgMjJcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkx1bmFyXCIsXHJcbiAgICAgIFwiVHN1a3V5b21pLCB0aGUgR29kIG9mIHRoZSBNb29uIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxlb1wiLFxyXG4gICAgICBcIkp1bHkgMjMgLSBBdWd1c3QgMjJcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU29sYXJcIixcclxuICAgICAgXCJSYSwgdGhlIEdvZCBvZiB0aGUgU3VuIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlZpcmdvXCIsXHJcbiAgICAgIFwiQXVndXN0IDIzIC0gU2VwdGVtYmVyIDIyXCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJUZXJyYVwiLFxyXG4gICAgICBcIk9zaXJpcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMaWJyYVwiLFxyXG4gICAgICBcIlNlcHRlbWJlciAyMyAtIE9jdG9iZXIgMjJcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJBZXRoZXJcIixcclxuICAgICAgXCJIb3J1cywgdGhlIEdvZCBvZiB0aGUgU2t5IChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNjb3JwaW9cIixcclxuICAgICAgXCJPY3RvYmVyIDIzIC0gTm92ZW1iZXIgMjFcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIkNvcnJvZGVcIixcclxuICAgICAgXCJQb3NlaWRvbiwgdGhlIEdvZCBvZiB0aGUgU2VhIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlNhZ2l0dGFyaXVzXCIsXHJcbiAgICAgIFwiTm92ZW1iZXIgMjIgLSBEZWNlbWJlciAyMVwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJJbmZlcm5vXCIsXHJcbiAgICAgIFwiQW1hdGVyYXN1LCB0aGUgR29kZGVzcyBvZiB0aGUgU3VuIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhcHJpY29yblwiLFxyXG4gICAgICBcIkRlY2VtYmVyIDIyIC0gSmFudWFyeSAxOVwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiR2FpYVwiLFxyXG4gICAgICBcIklzaXMsIHRoZSBHb2RkZXNzIG9mIE1hZ2ljIGFuZCBMaWZlIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkFxdWFyaXVzXCIsXHJcbiAgICAgIFwiSmFudWFyeSAyMCAtIEZlYnJ1YXJ5IDE4XCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiVm9sdFwiLFxyXG4gICAgICBcIlpldXMsIHRoZSBHb2Qgb2YgVGh1bmRlciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJQaXNjZXNcIixcclxuICAgICAgXCJGZWJydWFyeSAxOSAtIE1hcmNoIDIwXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJNaXN0XCIsXHJcbiAgICAgIFwiU3VzYW5vbywgdGhlIEdvZCBvZiB0aGUgU2VhIGFuZCBTdG9ybXMgKEphcGFuZXNlKVwiXHJcbiAgICApXHJcbiAgXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHpvZGlhY1NpZ25zOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSwgV2VhcG9uLCBBcm1vdXIsIFBsYXllckNoYXJhY3RlciwgUGxheWVyU3RhdHMsIEdvYWwgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0TmV3UXVlc3QsIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzLCBhZGRRdWVzdCwgZ2VuZXJhdGVUYXNrQ29udGFpbmVyLCBjcmVhdGVRdWVzdENhcmRUZW1wbGF0ZSwgZGlzcGxheVF1ZXN0Q2FyZENvbnRlbnQsIHJlbmRlclF1ZXN0TGlzdCwgY3JlYXRlQ2FyZFRlbXBsYXRlLCBkaXNwbGF5R29hbENhcmRDb250ZW50LCBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSwgY3JlYXRlR2hvc3RDYXJkfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Rm9ybU1vZGFsLCBjbG9zZUZvcm1Nb2RhbCB9IGZyb20gXCIuL21vZGFsRnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCBkdWVEYXRlIGZyb20gXCIuL2R1ZURhdGUuanNcIjtcclxuaW1wb3J0IGdldE9iamVjdGl2ZSBmcm9tIFwiLi9nZXRPYmplY3RpdmUuanNcIjtcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IHB1bGxJdGVtRnJvbUNoZXN0LCBnZXRJdGVtUmFyaXR5LCBnZXRJdGVtU3RhdHMsIGdldEl0ZW1UeXBlLCBnZXRJdGVtRWxlbWVudCwgZ2V0SXRlbVByZWZpeCwgZ2V0SXRlbVN1ZmZpeCwgZ2VuZXJhdGVSYW5kb21XZWFwb259IGZyb20gJy4vc2hvcEZ1bmN0aW9uJztcclxuaW1wb3J0IHsgaXRlbVBvc3NpYmxlRWxlbWVudHMsIGl0ZW1Qb3NzaWJsZVJhcml0eSwgaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVBvc3NpYmxlU3VmZml4IH0gZnJvbSAnLi9jbGFzc2VzL2l0ZW1TdGF0cyc7XHJcbmltcG9ydCB7IHNwaW4sIG9wZW5TbG90TWFjaGluZU1vZGFsLCBjbG9zZVNsb3RNYWNoaW5lTW9kYWwsIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXN9IGZyb20gJy4vZ2FjaGFTcGluRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY2FsY0hlcm9TY29yZSB9IGZyb20gJy4vcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgYXBwZW5kSXRlbUltYWdlLCBjcmVhdGVJbnZlbnRvcnlNb2RhbCwgY3JlYXRlSW52ZW50b3J5UGFnZSwgZ2VuZXJhdGVJbnZlbnRvcnlJdGVtSW1hZ2UsIGdlbmVyYXRlSW52ZW50b3J5SXRlbXMsIHVwZGF0ZUludmVudG9yeVBhZ2UsIGludmVudG9yeUV2ZW50SGFuZGxlcn0gIGZyb20gJy4vaW52ZW50b3J5RnVuY3Rpb25zJztcclxuaW1wb3J0IHsgZ2V0SXRlbUltYWdlIH0gZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlJztcclxuaW1wb3J0IHsgY3VycmVudFF1ZXN0TGlzdCwgcGxheWVySW52ZW50b3J5LCBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVyRXF1aXBwZWRJdGVtcywgY3VycmVudEdvYWxMaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlRW1wdHlUYXNrR29hbFByb21wdCwgY3JlYXRlVGFza0NvbnRhaW5lciwgcXVlc3RDb250cm9sbGVyLCBnb2FsQ29udHJvbGxlciwgc2hvd0VtcHR5UXVlc3RBbmRHb2Fscywgc2hvd0VtcHR5UXVlc3RzU3RhdGUsIHNob3dFbXB0eUdvYWxzU3RhdGUsIGVtcHR5U3RhdGVFdmVudEhhbmRsZXIsIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSwgY3JlYXRlUXVlc3RQYXJhbGxheCB9IGZyb20gJy4vaW5kZXhWaWV3RnVuY3Rpb25zJztcclxuaW1wb3J0IHsgY3JlYXRlR2V0RGF0YUZvcm0gfSBmcm9tICcuL2dlbmVyYXRlRm9ybSc7XHJcbmltcG9ydCByZW5kZXJHb2FsQ3JlYXRpb25QYWdlIGZyb20gJy4vcmVuZGVyR29hbFBhZ2UnO1xyXG5pbXBvcnQgcmVuZGVyRGVmYXVsdEluZGV4IGZyb20gJy4vcmVuZGVyRGVmYXVsdEluZGV4SHRtbCc7XHJcbmltcG9ydCBpbml0aWFsaXplRGVmYXVsdEluZGV4IGZyb20gJy4vaW5pdGlhbGl6ZUluZGV4RnVuY3Rpb25zJztcclxuXHJcbmluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG4vLyByZW5kZXJHb2FsQ3JlYXRpb25QYWdlKCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhjdXJyZW5jeUNvbnRhaW5lcilcclxuLy8gLy8gR2xvYmFsbHkgU2NvcGVkIFZhcmlhYmxlc1xyXG5cclxuLy8gbGV0IHBsYXllckJpcnRoZGF5ID0gbmV3IERhdGUgKFwiMDItMDMtMTk5NlwiKTtcclxuLy8gbGV0IGhlcm9TZWxlY3Rpb24gPSAoXCJTb3JjZXJlclwiKTtcclxuLy8gbGV0IHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoXCJpbWFnZXMvemV1c1Nwcml0ZS5wbmdcIiwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgcGxheWVyQmlydGhkYXkpO1xyXG4vLyBsZXQgcGl4ZWxJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdEltYWdlXCIpO1xyXG4vLyBwaXhlbEltYWdlQ29udGFpbmVyLnNyYyA9IChwbGF5ZXIuc3ByaXRlSW1hZ2UpO1xyXG4vLyBsZXQgZ2V0SGVyb1Njb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvU2NvcmVDb250YWluZXJcIik7XHJcbi8vIGxldCBoZXJvU2NvcmUgPSBjYWxjSGVyb1Njb3JlKHBsYXllcik7XHJcbi8vIGdldEhlcm9TY29yZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IChgSGVybyBTY29yZTogJHtoZXJvU2NvcmV9YClcclxuXHJcbi8vIGxldCB0ZXN0UXVlc3QgPSBuZXcgUXVlc3QgKFwiRmluaXNoIEZuXCIsIFwiNDozMHBtIC0gODowMHBtXCIsIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMiksIG51bGwsIGZhbHNlLCBudWxsKTtcclxuLy8gbGV0IHRlc3RRdWVzdDIgPSBuZXcgUXVlc3QgKFwiRmluaXNoIEZuXCIsIFwiNDozMHBtIC0gODowMHBtXCIsIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMiksIG51bGwsIGZhbHNlLCBudWxsKTtcclxuXHJcbi8vIC8vIGN1cnJlbnRRdWVzdExpc3QucHVzaCh0ZXN0UXVlc3QpO1xyXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuLy8gY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuXHJcbi8vIGxldCB0ZXN0R29hbCA9IG5ldyBHb2FsIChcIkJlY29tZSBGbHVlbnQgaW4gU3BhbmlzaFwiLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMikpXHJcblxyXG4vLyAvLyBjbGFzcyBHb2FsIHtcclxuLy8gLy8gICAgIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgcmV3YXJkLCBmcmVxdWVuY3ksIGZyZXF1ZW5jeVZhbHVlLCB0b3RhbFRpbWVSZXF1aXJlZCwgdG90YWxUaW1lU3BlbnQpIFxyXG5cclxuLy8gbGV0IGd5bUdvYWwgPSBuZXcgR29hbCAoKFwiR2V0IFNpeCBQYWNrIEFic1wiKSwgbmV3IEN1cnJlbmN5IChcIkdHVG9rZW5zXCIsIDEyKSk7XHJcbi8vIGxldCBneW1RdWVzdCA9IGd5bUdvYWwuZ2VuZXJhdGVRdWVzdCg0LCAwKTtcclxuLy8gZ3ltR29hbC5xdWVzdHMucHVzaChneW1RdWVzdCk7XHJcbi8vIGNvbnNvbGUubG9nKGd5bUdvYWwucXVlc3RzKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGd5bUdvYWwucXVlc3RzWzBdLnRpbWVzUGVyV2Vla1JlcXVpcmVkKVxyXG5cclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0Mik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh0ZXN0R29hbC5xdWVzdHMpO1xyXG5cclxuLy8gLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gLy8gY29uc29sZS5sb2codGVzdEdvYWwucXVlc3RzKTtcclxuXHJcbi8vIC8vIGxldCB0ZXN0Q2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpXHJcbi8vIC8vIHRlc3RDbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAvLyAgIHRlc3RRdWVzdC5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuLy8gLy8gICBjb25zb2xlLmxvZyh0ZXN0R29hbC5xdWVzdHMpO1xyXG4vLyAvLyB9KVxyXG5cclxuLy8gc2hvd0VtcHR5UXVlc3RzU3RhdGUoKTtcclxuLy8gLy8gc2hvd0VtcHR5R29hbHNTdGF0ZSgpO1xyXG5cclxuLy8gbGV0IGdjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGdlbmVyYXRlR29hbENhcmQoZ29hbCkge1xyXG5cclxuLy8gICAgIGNvbnN0IGdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBnb2FsQ2FyZC5jbGFzc0xpc3QuYWRkKCdnb2FsQ2FyZCcpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgdG9wSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0b3BIYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgndG9wSGFsZkdvYWxDYXJkJyk7XHJcbi8vICAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZCh0b3BIYWxmR29hbENhcmQpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgYm90dG9tSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBib3R0b21IYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgnYm90dG9tSGFsZkdvYWxDYXJkJyk7XHJcbi8vICAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZChib3R0b21IYWxmR29hbENhcmQpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZ29hbE9iamVjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsT2JqZWN0aXZlQ29udGFpbmVyJyk7XHJcbi8vICAgICB0b3BIYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQoZ29hbE9iamVjdGl2ZUNvbnRhaW5lcik7XHJcbiAgXHJcbi8vICAgICBjb25zdCBnb2FsQ29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGdvYWxDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsQ29tcGxldGVDb250YWluZXInKTtcclxuLy8gICAgIHRvcEhhbGZHb2FsQ2FyZC5hcHBlbmRDaGlsZChnb2FsQ29tcGxldGVDb250YWluZXIpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZ29hbE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2dvYWwtb2JqZWN0aXZlJyk7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlLnRleHRDb250ZW50ID0gZ29hbC5vYmplY3RpdmU7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmUpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgcXVlc3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBxdWVzdExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Q29udGFpbmVyJyk7XHJcbi8vICAgICBib3R0b21IYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQocXVlc3RMaXN0Q29udGFpbmVyKTtcclxuICBcclxuLy8gICAgIGNvbnN0IHF1ZXN0TGlzdFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBxdWVzdExpc3RQYXJhbGxheC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RQYXJhbGxheCcpO1xyXG4vLyAgICAgcXVlc3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0TGlzdFBhcmFsbGF4KTtcclxuICBcclxuLy8gICAgIGNvbnN0IHF1ZXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbi8vICAgICBxdWVzdExpc3QuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Jyk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvYWwucXVlc3RzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIGNvbnN0IHF1ZXN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0SXRlbUNvbnRhaW5lcicpO1xyXG4gIFxyXG4vLyAgICAgICBjb25zdCBxdWVzdEl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW0nKTtcclxuLy8gICAgICAgcXVlc3RJdGVtQ29udGVudC50ZXh0Q29udGVudCA9IGdvYWwucXVlc3RzW2ldLm9iamVjdGl2ZTtcclxuICBcclxuLy8gICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicpO1xyXG4gIFxyXG4vLyAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuICBcclxuLy8gICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGVudCk7XHJcbi8vICAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckNvbnRhaW5lcik7XHJcbi8vICAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChxdWVzdEl0ZW1Db250YWluZXIpO1xyXG5cclxuICAgICAgXHJcbi8vICAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgIGdlbmVyYXRlTW9kYWwoZ29hbC5xdWVzdHNbaV0pO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBxdWVzdExpc3RQYXJhbGxheC5hcHBlbmRDaGlsZChxdWVzdExpc3QpO1xyXG4gIFxyXG4vLyAgICAgcmV0dXJuIGdvYWxDYXJkO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbChnb2FsUXVlc3QpIHtcclxuXHJcbi8vICAgICBjb25zdCBnb2FsUXVlc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ29hbFF1ZXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnZ29hbFF1ZXN0TW9kYWwnKTtcclxuICBcclxuLy8gICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsQ29udGVudCcpO1xyXG4gIFxyXG4vLyAgICAgbGV0IGdvYWxRdWVzdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbi8vICAgICBnb2FsUXVlc3RNb2RhbFRpdGxlLmlubmVyVGV4dCA9IFwiQ29tcGxldGlvbiBSZXF1aXJlbWVudChzKTogXCJcclxuXHJcbi8vICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4vLyAgICAgbmFtZS5pbm5lclRleHQgPSBnb2FsUXVlc3Qub2JqZWN0aXZlO1xyXG5cclxuXHJcbi8vICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbFF1ZXN0TW9kYWxUaXRsZSk7XHJcbi8vICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSlcclxuLy8gICAgIGdvYWxRdWVzdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsKTtcclxuICBcclxuLy8gICAgIHJldHVybiBnb2FsUXVlc3RNb2RhbDtcclxuLy8gICB9XHJcbiAgICAgIFxyXG4gIFxyXG5cclxuLy8gICBsZXQgZ0NhcmQgPSBnZW5lcmF0ZUdvYWxDYXJkKHRlc3RHb2FsKTtcclxuLy8gICBsZXQgZ0NhcmQyID0gZ2VuZXJhdGVHb2FsQ2FyZChneW1Hb2FsKTtcclxuXHJcbi8vICAgZ2NjLmFwcGVuZENoaWxkKGdDYXJkKTtcclxuLy8gICBnY2MuYXBwZW5kQ2hpbGQoZ0NhcmQyKTtcclxuXHJcbi8vIC8vIGxldCBnb2FsQ2FyZCA9IGNyZWF0ZUNhcmRUZW1wbGF0ZShcImdvYWxcIik7XHJcbi8vIC8vIHguYXBwZW5kQ2hpbGQoZ29hbENhcmQpO1xyXG4vLyAvLyBkaXNwbGF5R29hbENhcmRDb250ZW50KHRlc3RHb2FsLCBnb2FsQ2FyZCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuXHJcblxyXG4vLyB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuXHJcbi8vIC8vIHRlc3RHb2FsLmxpbmtRdWVzdFRvR29hbChjdXJyZW50UXVlc3RMaXN0WzBdKTtcclxuLy8gLy8gY29uc29sZS5sb2codGVzdEdvYWwudGltZVJlcXVpcmVkKVxyXG5cclxuXHJcbi8vIC8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcclxuLy8gbGV0IGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkUXVlc3RCdXR0b25cIilcclxuLy8gYWRkUXVlc3RCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyAgICAgaWYgKCFyZW1vdmVFbXB0eVF1ZXN0U3RhdGUoKSkge1xyXG4vLyAgICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICBpZiAoIWNyZWF0ZVF1ZXN0UGFyYWxsYXgoKSkge1xyXG4vLyAgICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgXHJcbi8vICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuLy8gICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKSk7XHJcbi8vICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHb2FsTGlzdCk7XHJcbi8vIH0pXHJcblxyXG4vLyBsZXQgYWRkR29hbEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZEdvYWxCdXR0b25cIilcclxuLy8gYWRkR29hbEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIHJlbW92ZUVtcHR5VGFza0dvYWxQcm9tcHQoKTtcclxuLy8gICAgIC8vIGNyZWF0ZVRhc2tDb250YWluZXIoKTtcclxuLy8gICAgIC8vIGdvYWxDb250cm9sbGVyKCk7XHJcbiAgICBcclxuLy8gICAgIGN1cnJlbnRHb2FsTGlzdC5wdXNoKHRlc3RHb2FsKTtcclxuLy8gICAgIGNyZWF0ZUdldERhdGFGb3JtKFwiZ29hbFwiKTtcclxuLy8gfSlcclxuXHJcblxyXG4vLyAvLyBFdmVudCBMaXN0ZW5lciB0byBBZGQgUXVlc3QgdG8gUXVlc3QgTGlzdCBhbmQgRGlzcGxheVxyXG4vLyBsZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcclxuLy8gZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGNsb3NlRm9ybU1vZGFsKGUpO1xyXG4vLyAgICAgcmVtb3ZlRW1wdHlRdWVzdEdvYWxQcm9tcHQoKTtcclxuLy8gICAgIGxldCBuZXdseUdlbmVyYXRlZFF1ZXN0ID0gZ2V0TmV3UXVlc3QoKTtcclxuLy8gICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xyXG4vLyAgICAgdXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4vLyB9KVxyXG5cclxuLy8gLy8gZnVuY3Rpb24gY3JlYXRlU3RhdGUoaW5pdGlhbFZhbHVlKSB7XHJcbi8vIC8vICAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLyBTdGF0ZSB2YWx1ZVxyXG5cclxuLy8gLy8gICAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWVcclxuLy8gLy8gICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcclxuLy8gLy8gICAgIHJldHVybiB2YWx1ZTtcclxuLy8gLy8gICB9XHJcblxyXG4vLyAvLyAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RhdGUgdmFsdWVcclxuLy8gLy8gICBmdW5jdGlvbiBzZXRTdGF0ZShuZXdWYWx1ZSkge1xyXG4vLyAvLyAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcclxuLy8gLy8gICB9XHJcblxyXG4vLyAvLyAgIC8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgZ2V0U3RhdGUgYW5kIHNldFN0YXRlIGZ1bmN0aW9uc1xyXG4vLyAvLyAgIHJldHVybiB7XHJcbi8vIC8vICAgICBnZXRTdGF0ZSxcclxuLy8gLy8gICAgIHNldFN0YXRlLFxyXG4vLyAvLyAgIH07XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIC8vIFVzYWdlIGV4YW1wbGVcclxuLy8gLy8gY29uc3QgY291bnRlclN0YXRlID0gY3JlYXRlU3RhdGUoMCk7XHJcblxyXG4vLyAvLyAvLyBHZXQgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWVcclxuLy8gLy8gY29uc29sZS5sb2coY291bnRlclN0YXRlLmdldFN0YXRlKCkpOyAvLyBPdXRwdXQ6IDBcclxuXHJcbi8vIC8vIC8vIFVwZGF0ZSB0aGUgc3RhdGUgdmFsdWVcclxuLy8gLy8gY291bnRlclN0YXRlLnNldFN0YXRlKDUpO1xyXG5cclxuLy8gLy8gLy8gR2V0IHRoZSB1cGRhdGVkIHN0YXRlIHZhbHVlXHJcbi8vIC8vIGNvbnNvbGUubG9nKGNvdW50ZXJTdGF0ZS5nZXRTdGF0ZSgpKTsgLy8gT3V0cHV0OiA1XHJcblxyXG4vLyBsZXQgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcENvbnRlbnRcIik7XHJcblxyXG4vLyAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50XHJcbi8vIHdoaWxlIChtYWluUGFnZS5maXJzdENoaWxkKSB7XHJcbi8vICAgICBtYWluUGFnZS5yZW1vdmVDaGlsZChtYWluUGFnZS5maXJzdENoaWxkKTtcclxuLy8gICB9XHJcblxyXG4vLyByZW5kZXJEZWZhdWx0SW5kZXgobWFpblBhZ2UpO1xyXG4vLyByZW5kZXJHb2FsQ3JlYXRpb25QYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9