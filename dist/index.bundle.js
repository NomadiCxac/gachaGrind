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
    this.totalTimeSpent = 0;
    this.timesPerWeekSpent = 0;
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

/***/ "./src/goalCreationPage.js":
/*!*********************************!*\
  !*** ./src/goalCreationPage.js ***!
  \*********************************/
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
            "questParallax"
        )
        // )document.createElement("div");
        // addQuestContainer.className = "addQuestContainer";

        // let addQuestContainerTitle = document.createElement("h4");
        // let addQuestContainerInputField = document.createElement("div");
        // addQuestContainerInputField.classList.add("addQuestContainerInputField");

        // addQuestContainerTitle.textContent = "Add Quest(s) to Your Goal:"
        
      
        // addQuestContainer.appendChild(addQuestContainerTitle);
        // addQuestContainer.appendChild(addQuestContainerInputField);

        // let defineQuest = document.createElement("div");
        // defineQuest.classList.add("questParallax")
        // defineQuest.appendChild(createQuestForm());

        // addQuestContainerInputField.appendChild(defineQuest);

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
    footer.appendChild(goalConfirmCreateButton);

    // Append the parent divs to the document body or any other container
    mainPage.appendChild(header);
    mainPage.appendChild(goalCreationContainer);
    mainPage.appendChild(footer);


(0,_goalCreationPageHTML__WEBPACK_IMPORTED_MODULE_3__.createQuestForm)();


//     let goalTimeContainer = createInputValueElement (
//         "formFieldContainer", 
//         "rewardAssignmentInputContainer", 
//         "rewardAssignmentExampleTextContainer", 
//         "Assign Rewards:", 
//         "goalRewardAssignmentAmount", 
//         "goalRewardAssignmentAmount", 
//         "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
//         "goalCreationExampleText",
//         "rewardAssignmentExampleText",
//     );

//     // questForm.appendChild(goalTimeContainer);
  
//     // Frequency of Quest
//     let frequencyContainer = createInputValueElement (
//         "formFieldContainer", 
//         "timeAssignmentInputContainer", 
//         "rewardAssignmentExampleTextContainer", 
//         "Assign Time:", 
//         "goalTimeAssignmentAmount", 
//         "goalTimeAssignmentAmount", 
//         "Assign time to your goal. The specified time will be split among your outstanding quests.", 
//         "goalCreationExampleText",
//         "timeAssignmentExampleText",
//     );

//     let deadlineContainer = createFormField(
//         "date",
//         "deadline",
//         "Enter the deadline for your quest.",
//         "Enter the start date and end date for your Goal."
//       );

// x.appendChild(questNameContainer);
// x.appendChild(goalTimeContainer);
// x.appendChild(frequencyContainer);
// x.appendChild(deadlineContainer);

}





// let questNameContainer = createObjectiveInputElement(
//     "formInputContainer", 
//     "text", 
//     "questGoalObjective",
//     "Enter Your Quest Objective Here...",
//     'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
// );


// function createQuestForm() {
//     const questForm = document.createElement("form");
//     questForm.classList.add("questForm");

//     let defaultClass = "formInputContainer";
  
//     // Quest Name
//     let questNameContainer = createObjectiveInputElement(
//         defaultClass, 
//         "text", 
//         "questGoalObjective",
//         "Enter Your Quest Objective Here...",
//         'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
//     );
//     questForm.appendChild(questNameContainer);

//     // Goal Time Allotment
//     let goalTimeContainer = createValueAssignmentContainer(
//         "Allocate Quest Time:",
//         "Assign time to your goal. The specified time will be split among your outstanding quests.",
//         "questGoalTimeSpent"
//     );
//     questForm.appendChild(goalTimeContainer);
  
//     // Frequency of Quest
//     let frequencyContainer = createValueAssignmentContainer(
//         "Quest Frequency:",
//         'Enter the frequency (per week) at which you will complete this quest. Example: "4 times / Week" or "Every Monday, Tuesday, Thursday and Sunday of each Week"',
//         "questGoalFrequency"
//     );
//     questForm.appendChild(frequencyContainer);
  
//     // Goal Deadline
//     let deadlineContainer = createFormField(
//       "date",
//       "deadline",
//       "Enter the deadline for your quest.",
//       "Enter the start date and end date for your Goal."
//     );
//     questForm.appendChild(deadlineContainer);
 
  
//     return questForm;
// }

// function createValueAssignmentContainer(titleText, exampleText, id) {
//     let valueAssignmentContainer = document.createElement("div");
//     valueAssignmentContainer.classList.add("formFieldContainer");
//     valueAssignmentContainer.setAttribute("id", id);
  
//     let valueAssignmentInputContainer = document.createElement("div");
//     valueAssignmentInputContainer.classList.add("valueAssignmentInputContainer");
  
//     // Create the radio buttons for time options
//     let hoursRadioLabel = document.createElement("label");
//     hoursRadioLabel.classList.add("radioLabel");
  
//     let hoursRadioInput = document.createElement("input");
//     hoursRadioInput.setAttribute("type", "radio");
//     hoursRadioInput.setAttribute("name", "valueAssignment");
//     hoursRadioInput.setAttribute("value", "hours");
//     hoursRadioInput.classList.add("valueAssignmentRadioButton");
//     hoursRadioLabel.appendChild(hoursRadioInput);
//     hoursRadioLabel.appendChild(document.createTextNode("Hours"));
  
//     let naRadioLabel = document.createElement("label");
//     naRadioLabel.classList.add("radioLabel");
  
//     let naRadioInput = document.createElement("input");
//     naRadioInput.setAttribute("type", "radio");
//     naRadioInput.setAttribute("name", "valueAssignment");
//     naRadioInput.setAttribute("value", "na");
//     naRadioInput.classList.add("valueAssignmentRadioButton");
//     naRadioLabel.appendChild(naRadioInput);
//     naRadioLabel.appendChild(document.createTextNode("N/A"));
  
//     // Create the input element for time
//     let valueAssignmentAmount = document.createElement("input");
//     valueAssignmentAmount.classList.add("goalValueAssignmentAmount");
//     valueAssignmentAmount.setAttribute("type", "number");
//     valueAssignmentAmount.setAttribute("min", "0");
  
//     let valueAssignmentExampleTextContainer = document.createElement("div");
//     valueAssignmentExampleTextContainer.classList.add("valueAssignmentExampleTextContainer");
  
//     let valueAssignmentTitle = document.createElement("h4");
//     valueAssignmentTitle.textContent = titleText;
  
//     let valueAssignmentContainerExampleText = document.createElement("h6");
//     valueAssignmentContainerExampleText.textContent = exampleText;
//     valueAssignmentContainerExampleText.classList.add("goalCreationExampleText");
//     valueAssignmentContainerExampleText.id = "valueAssignmentExampleText";
  
//     valueAssignmentInputContainer.appendChild(valueAssignmentTitle);
//     valueAssignmentInputContainer.appendChild(valueAssignmentAmount);
//     valueAssignmentInputContainer.appendChild(hoursRadioLabel);
//     valueAssignmentInputContainer.appendChild(naRadioLabel);
//     valueAssignmentExampleTextContainer.appendChild(valueAssignmentContainerExampleText);
  
//     valueAssignmentContainer.appendChild(valueAssignmentInputContainer);
//     valueAssignmentContainer.appendChild(valueAssignmentExampleTextContainer);

//     return valueAssignmentContainer;
// }


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

    elementInputValue.addEventListener("input", function () {
        const enteredValue = elementInputValue.value;
        const parsedValue = parseInt(enteredValue);
      
        if (parsedValue <= 0 || isNaN(parsedValue)) {
            elementInputValueAmount.setCustomValidity("Please enter a positive whole number greater than 0.");
        } else {
            elementInputValueAmount.setCustomValidity("");
        }
    });

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
/* harmony export */   "default": () => (/* binding */ renderGoalList)
/* harmony export */ });
function renderGoalList (currentGoalList) {

    let goalContainer = document.querySelector(".goalContainer");

    for (let goal = 0; goal < currentGoalList.length; goal++) {
        goalContainer.appendChild(generateGoalCard(currentGoalList[goal]));
    }
}


function generateGoalCard(goal) {

    const goalCard = document.createElement('div');
    goalCard.classList.add('goalCard');
  
    const topHalfGoalCard = document.createElement('div');
    topHalfGoalCard.classList.add('topHalfGoalCard');
    goalCard.appendChild(topHalfGoalCard);
  
    const bottomHalfGoalCard = document.createElement('div');
    bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
    goalCard.appendChild(bottomHalfGoalCard);
  
    const goalObjectiveContainer = document.createElement('div');
    goalObjectiveContainer.classList.add('goalObjectiveContainer');
    topHalfGoalCard.appendChild(goalObjectiveContainer);
  
    const goalCompleteContainer = document.createElement('div');
    goalCompleteContainer.classList.add('goalCompleteContainer');
    topHalfGoalCard.appendChild(goalCompleteContainer);
  
    const goalObjective = document.createElement('h3');
    goalObjective.classList.add('goal-objective');
    goalObjective.textContent = goal.objective;
    goalObjectiveContainer.appendChild(goalObjective);
  
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
/* harmony import */ var _goalCreationPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./goalCreationPage */ "./src/goalCreationPage.js");

















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
let currentGoalList = [];


let testGoal = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Goal ("Become Fluent in Spanish", new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 12))
let gymGoal = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Goal (("Get Six Pack Abs"), new _classes_classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency ("GGTokens", 12));

currentGoalList.push(testGoal);
currentGoalList.push(gymGoal);

let gymQuest = gymGoal.generateQuest(4, 0);
gymGoal.quests.push(gymQuest);

(0,_goalFunctions__WEBPACK_IMPORTED_MODULE_11__["default"])(currentGoalList);


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
    console.log(currentGoalList);
})

let addGoalButtonClicked = document.querySelector("button.addGoalButton")
addGoalButtonClicked.addEventListener("click", function () {
    
    while (indexPage.firstChild) {
        indexPage.removeChild(indexPage.firstChild);
  }

  (0,_goalCreationPage__WEBPACK_IMPORTED_MODULE_12__["default"])();

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
/* harmony import */ var _goalCreationPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./goalCreationPage */ "./src/goalCreationPage.js");
/* harmony import */ var _renderDefaultIndexHtml__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./renderDefaultIndexHtml */ "./src/renderDefaultIndexHtml.js");
/* harmony import */ var _initializeIndexFunctions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./initializeIndexFunctions */ "./src/initializeIndexFunctions.js");





















// initializeDefaultIndex()
(0,_goalCreationPage__WEBPACK_IMPORTED_MODULE_17__["default"])();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDOUMsVUFBVSx3Q0FBd0M7QUFDbEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUF1QztBQUN2RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZPZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMEM7QUFDc0I7QUFDTDtBQUM2RjtBQUN4SjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0ZBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhFQUF1QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhFQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0VBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFUQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdFQUFnRSx3QkFBd0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwRUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw4RUFBZTtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3FGO0FBQzRKO0FBQ2hNO0FBQ3BDO0FBQ1U7QUFDSztBQUN3QztBQUNzRTtBQUN0QjtBQUMxQjtBQUNyRDtBQUN1STtBQUNwSTtBQUN5RDtBQUN1STtBQUMzTTtBQUNLO0FBQ0U7QUFDTTtBQUNoRTtBQUNBO0FBQ0EsOERBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9pdGVtU3RhdHMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jdXJyZW5jeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2VuZXJhdGVGb3JtLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ29hbENyZWF0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2dvYWxDcmVhdGlvblBhZ2VIVE1MLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ29hbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleFZpZXdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbml0aWFsaXplSW5kZXhGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcmVuZGVyRGVmYXVsdEluZGV4SHRtbC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3BGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3dlYXBvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBnZXROZXdRdWVzdCB9IGZyb20gXCIuLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgem9kaWFjU2lnbnMgZnJvbSBcIi4uL3pvZGlhY1Bvd2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkLCBvbmVPZmZCb29sLCBnb2FsSWQsIHRpbWVTcGVudCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm9uZU9mZkJvb2wgPSBvbmVPZmZCb29sO1xyXG4gICAgdGhpcy5nb2FsSWQgPSBnb2FsSWQ7XHJcbiAgICB0aGlzLnRpbWVTcGVudCA9IHRpbWVTcGVudFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvYWwge1xyXG4gIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgcmV3YXJkKSB7XHJcbiAgICB0aGlzLm9iamVjdGl2ZSA9IG9iamVjdGl2ZTtcclxuICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgdGhpcy5xdWVzdHMgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICAgIHRoaXMudGltZXNQZXJXZWVrU3BlbnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdCh0aW1lc1BlcldlZWtSZXF1aXJlZCwgdG90YWxUaW1lUmVxdWlyZWQpIHtcclxuXHJcbiAgICBsZXQgcXVlc3QgPSBuZXcgUXVlc3QoXCJHbyB0byBHeW1cIiwgbnVsbCwgZmFsc2UsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDE4KSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgLy8gQ2FzZSAxOiBGcmVxdWVuY3kgdHlwZSBpcyB0aW1lLWFyYml0cmFyeVxyXG4gICAgIGlmICh0b3RhbFRpbWVSZXF1aXJlZCA9PSAwIHx8IHRvdGFsVGltZVJlcXVpcmVkID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZXNQZXJXZWVrUmVxdWlyZWQgLSB0aGlzLnRpbWVzUGVyV2Vla1NwZW50O1xyXG4gICAgICAgIHJldHVybiB7cXVlc3QsIHRpbWVzUGVyV2Vla1JlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgICB9XHJcblxyXG5cclxuICAgIC8vIENhc2UgMjogRnJlcXVlbmN5IHR5cGUgaXMgdGltZS1zcGVjaWZpY1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0b3RhbFRpbWVSZXF1aXJlZCAtIHRoaXMudG90YWxUaW1lU3BlbnQ7XHJcbiAgICAgIHJldHVybiB7cXVlc3QsIHRvdGFsVGltZVJlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGxpbmtRdWVzdFRvR29hbChxdWVzdCkge1xyXG4gICAgaWYgKHRoaXMucXVlc3RzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0cyk7XHJcbiAgICB0aGlzLnF1ZXN0cy5wdXNoKHF1ZXN0KTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgKz0gcXVlc3QucXVlc3RDb21wbGV0ZSA/IHF1ZXN0LmR1cmF0aW9uIDogMDtcclxuICB9XHJcbiBcclxuICBpc0dvYWxDb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZVNwZW50ID49IHRoaXMudGltZVJlcXVpcmVkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCgpIHtcclxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIHF1ZXN0XHJcbiAgLy8gWW91IGNhbiB1c2UgYSBsaWJyYXJ5IG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb247XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0cyA9IHt9O1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTdGF0KHN0YXROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgY29uc3QgZXF1aXBwZWRWYWx1ZSA9IHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgKyBlcXVpcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdW5lcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSAmJiB0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gLT0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpIHtcclxuICAgICAgc3dpdGNoIChoZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNixcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA4LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNixcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA4LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDgsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogOCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIHR5cGUuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXZlbFVwKCkge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCB8fCAxO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgPSBsZXZlbCArIDE7XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzICs9IDU7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgNSBza2lsbCBwb2ludHMgcGVyIGxldmVsXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbGxvY2F0ZVNraWxsUG9pbnQoc3RhdE5hbWUpIHtcclxuICAgICAgaWYgKHRoaXMuX3NraWxsUG9pbnRzID4gMCAmJiB0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSAxO1xyXG4gICAgICAgIHRoaXMuX3NraWxsUG9pbnRzIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldCBza2lsbFBvaW50cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NraWxsUG9pbnRzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVJbWFnZSwgaGVyb1R5cGUsIGVxdWlwcGVkSXRlbXMsIGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxTZWxlY3Rpb24gPSBlbGVtZW50YWxTZWxlY3Rpb247XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gdGhpcy5nZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgZ2V0IHNwcml0ZUltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVJbWFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHNwcml0ZUltYWdlKHNwcml0ZUltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVyb1R5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9oZXJvVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVyb1R5cGUoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZXF1aXBwZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50YWxBZmZpbml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxBZmZpbml0eSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciBlcXVpcHBpbmcgYW4gaXRlbVxyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhdHRhY2sgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsQXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTcGVjaWFsIEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCaXJ0aGRheUluUmFuZ2UoYmlydGhkYXksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGJpcnRoZGF5IHRvIGEgRGF0ZSBvYmplY3QgaWYgaXQncyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheVxyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURheSA9IGJpcnRoZGF5RGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGVuZERheSA9IGVuZERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAxMSAmJiBiaXJ0aGRheURheSA+IDIxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAwICYmIGJpcnRoZGF5RGF5IDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoID4gc3RhcnRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gc3RhcnRNb250aCAmJiBiaXJ0aGRheURheSA+PSBzdGFydERheSkpICYmXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy8gT3RoZXIgbWV0aG9kcyBjYW4gYmUgYWRkZWQgaGVyZSBmb3IgZnVydGhlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG5cclxuICAgICAgICAvLyBpZiBlbGVtZW50YWwgc2VsZWN0aW9uIGlzIGEgYmlydGhkYXkgcHJvdmlkZWQ6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSB6b2RpYWMgU2lnbnMgZGF0ZSByYW5nZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcclxuICAgICAgICAgICAgbGV0IGJpcnRoRGF5UmFuZ2VDaGVjayA9IHRoaXMuaXNCaXJ0aGRheUluUmFuZ2UoZWxlbWVudGFsU2VsZWN0aW9uLCBkYXRlQ2hlY2tlci5zdGFydERhdGUsIGRhdGVDaGVja2VyLmVuZERhdGUpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbOV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmlydGhEYXlSYW5nZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gPT0gem9kaWFjU2lnbnNbaW5kZXhdLl91bmlxdWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4iLCJleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlRWxlbWVudHMgPSBbXHJcbiAgICBcIlN0ZWVsXCIsXHJcbiAgICBcIkFieXNzXCIsXHJcbiAgICBcIlplcGh5clwiLFxyXG4gICAgXCJMdW5hclwiLFxyXG4gICAgXCJTb2xhclwiLFxyXG4gICAgXCJHYWlhXCIsXHJcbiAgICBcIkFldGhlclwiLFxyXG4gICAgXCJDb3Jyb2RlXCIsXHJcbiAgICBcIkluZmVybm9cIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJWb2x0XCIsXHJcbiAgICBcIk1pc3RcIixcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVJhcml0eSA9IFtcclxuICAgIHsgcmFyaXR5OiBcIm5vcm1hbFwiLCBjaGFuY2U6IDQwfSxcclxuICAgIHsgcmFyaXR5OiBcInVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgIHsgcmFyaXR5OiBcInJhcmVcIiwgY2hhbmNlOiAxOCB9LFxyXG4gICAgeyByYXJpdHk6IFwiZXBpY1wiLCBjaGFuY2U6IDkgfSxcclxuICAgIHsgcmFyaXR5OiBcImxlZ2VuZGFyeVwiLCBjaGFuY2U6IDMgfSxcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVTdGF0cyA9IHtcclxuICBub3JtYWw6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUsIG1heDogMTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAsIG1heDogMjAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAwNSwgbWF4OiAwLjAyIH1cclxuICB9LFxyXG4gIHVuY29tbW9uOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA3LjUsIG1heDogMTUgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMiwgbWF4OiAwLjA2IH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgcmFyZToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMTUsIG1heDogMzAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDMwLCBtYXg6IDYwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wNiwgbWF4OiAwLjEyIH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgZXBpYzoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMjUsIG1heDogNTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMTIsIG1heDogMC4yNCB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGxlZ2VuZGFyeToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAwLCBtYXg6IDIwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMjQsIG1heDogMC4zIH0gLy8gVXBkYXRlZCBtYXhcclxuICB9XHJcbn07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVQcmVmaXggPSB7XHJcbiAgICBub3JtYWw6IFtcclxuICAgICAgXCJPcmRpbmFyeVwiLCBcIkNvbW1vblwiLCBcIlBsYWluXCIsIFwiUmVndWxhclwiLCBcIkJhc2ljXCJcclxuICAgIF0sXHJcbiAgICB1bmNvbW1vbjogW1xyXG4gICAgICBcIlVuY29tbW9uXCIsIFwiU3RyYW5nZVwiLCBcIlNwZWNpYWxcIiwgXCJEaXN0aW5jdGl2ZVwiLCBcIkFibm9ybWFsXCJcclxuICAgIF0sXHJcbiAgICByYXJlOiBbXHJcbiAgICAgIFwiUmFyZVwiLCBcIlByZWNpb3VzXCIsIFwiRXhxdWlzaXRlXCIsIFwiTWFnbmlmaWNlbnRcIiwgXCJFbGl0ZVwiXHJcbiAgICBdLFxyXG4gICAgZXBpYzogW1xyXG4gICAgICBcIkVwaWNcIiwgXCJHcmFuZFwiLCBcIklsbHVzdHJpb3VzXCIsIFwiVHJhbnNjZW5kZW50XCIsIFwiTWFqZXN0aWNcIlxyXG4gICAgXSxcclxuICAgIGxlZ2VuZGFyeTogW1xyXG4gICAgICBcIkxlZ2VuZGFyeVwiLCBcIlVsdGltYXRlXCIsIFwiRXRlcm5hbFwiLCBcIkludmluY2libGVcIiwgXCJHb2RsaWtlXCJcclxuICAgIF1cclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3VmZml4ID0ge1xyXG4gICAgU3RlZWw6IFwib2YgV2FyXCIsXHJcbiAgICBBYnlzczogXCJvZiBXYWlsaW5nXCIsXHJcbiAgICBaZXBoeXI6IFwib2YgSG93bGluZ1wiLFxyXG4gICAgTHVuYXI6IFwib2YgTW9vbmxpZ2h0XCIsXHJcbiAgICBTb2xhcjogXCJvZiBTdW5saWdodFwiLFxyXG4gICAgVGVycmE6IFwib2YgVGVjdG9uaWNcIixcclxuICAgIEFldGhlcjogXCJvZiBHcmF2aXR5XCIsXHJcbiAgICBDb3Jyb2RlOiBcIm9mIFBvaXNvblwiLFxyXG4gICAgSW5mZXJubzogXCJvZiBCdXJuaW5nXCIsXHJcbiAgICBHYWlhOiBcIm9mIE5hdHVyZVwiLFxyXG4gICAgVm9sdDogXCJvZiBTaG9ja2luZ1wiLFxyXG4gICAgTWlzdDogXCJvZiBGcmVlemluZ1wiXHJcbiAgfTsiLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gXCIuL2NsYXNzZXMvY2xhc3Nlc1wiO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTtcclxuZXhwb3J0IGxldCBjdXJyZW50R29hbExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudEdvYWxMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSB8fCBbbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIkNoZXN0S2V5c1wiLCAwKV07XHJcbmV4cG9ydCBsZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xyXG5leHBvcnQgbGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG5cclxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcclxufSIsImltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSwgY3JlYXRlUXVlc3RQYXJhbGxheCB9IGZyb20gXCIuL2luZGV4Vmlld0Z1bmN0aW9uc1wiO1xyXG4vLyBpbXBvcnQgeyBjdXJyZW50R29hbExpc3QsIGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlTWFuYWdlciAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRHb2FsTGlzdCkge1xyXG5cclxuICAgIC8vIERlZmF1bHQgYW5kIFBlcnNpc3RpbmcgRXZlbnRzOlxyXG4gICAgLy8gMS4gUmVuZGVyIEN1cnJlbmN5IFZhbHVlc1xyXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4gICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpXHJcbiAgICAgICAgcXVlc3RQYXJhbGxheC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdlbmVyYXRlUmFuZG9tV2VhcG9uIH0gZnJvbSBcIi4vc2hvcEZ1bmN0aW9uXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2ltYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlLCBnZXRXZWFwb25JbWFnZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuICBcclxuZnVuY3Rpb24gY2hlY2tWYWxpZEN1cnJlbmN5QW1vdW50KGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBpZiAoY3VycmVuY3lDb250YWluZXJbMF0uYW1vdW50IDwgMjApIHtcclxuICAgICAgYWxlcnQoXCJJTlNVRkZJQ0lFTlQgR0cgVE9LRU5TXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgLT0gMjA7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNsb3RNYWNoaW5lSXRlbSAoaGVyb1NlbGVjdGlvbikge1xyXG4gICAvLyBHZW5lcmF0ZSB0aGUgd2VhcG9uIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgdXNpbmcgdGhlIGdlbmVyYXRlUmFuZG9tV2VhcG9uIGZ1bmN0aW9uXHJcbiAgIGxldCBnZW5lcmF0ZWRXZWFwb24gPSBnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKTtcclxuXHJcbiAgIC8vIFBhcnNlIHRoZSB3ZWFwb24gQ2xhc3MgZGF0YSB0byBiZSB1c2VkIGZvciBmcm9udCBlbmQgaW1hZ2VzXHJcbiAgIGxldCByZXN1bHRpbmdUeXBlID0gZ2VuZXJhdGVkV2VhcG9uLl90eXBlO1xyXG4gICBsZXQgcmVzdWx0aW5nUmFyaXR5ID0gZ2VuZXJhdGVkV2VhcG9uLl9yYXJpdHk7XHJcbiAgIGxldCByZXN1bHRpbmdFbGVtZW50ID0gZ2VuZXJhdGVkV2VhcG9uLl9lbGVtZW50O1xyXG5cclxuICAgLy8gUGFzcyB0aGUgZGF0YSB0byBhIGZpbmQgZnVuY3Rpb24gdGhhdCBsb2NhdGVzIHRoZSBjaGVja3MgZWFjaCBpbWFnZSAoc3RyaW5nKSBVUkwgdG8gc2VlIGlmIGl0IGluY2x1ZGVzIHRoZSBwYXJzZWQgZGF0YSAgIFxyXG4gICAvLyBJZiBkYXRhIG1hdGNoZXMsIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgaW1hZ2UgbGluayBhcyB2YXJpYWJsZSBcclxuICAgbGV0IHNlbGVjdGVkVHlwZUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UocmVzdWx0aW5nVHlwZSk7XHJcbiAgIGxldCBzZWxlY3RlZFJhcml0eUltYWdlID0gZ2V0UmFyaXR5SW1hZ2UocmVzdWx0aW5nUmFyaXR5KTtcclxuICAgbGV0IHNlbGVjdGVkRWxlbWVudEltYWdlID0gZ2V0RWxlbWVudEltYWdlKHJlc3VsdGluZ0VsZW1lbnQpO1xyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZXF1aXBtZW50IHJlZWxcclxuICAgY29uc3QgZXF1aXBtZW50UmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcG1lbnRSZWVsJyk7XHJcblxyXG4gICAvLyBTZWxlY3RlZCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRXF1aXBtZW50U3ltYm9sID0gIGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFR5cGVJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIHRvcCBzbG90XHJcbiAgIGNvbnN0IHRvcEVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBib3R0b20gc2xvdFxyXG4gICBjb25zdCBib3R0b21FcXVpcG1lbnRTeW1ib2wgPSBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRXF1aXBtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX0nKWBcclxuICAgICBcclxuICAgXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIHJhcml0eSByZWVsXHJcbiAgIGNvbnN0IHJhcml0eVJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFyaXR5UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkUmFyaXR5U3ltYm9sID0gIHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRSYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFJhcml0eUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbVJhcml0eVN5bWJvbCA9IHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21SYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyYXJpdHlJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFyaXR5SW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgICBcclxuXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIGVsZW1lbnQgcmVlbFxyXG4gICBjb25zdCBlbGVtZW50UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICBjb25zdCBzZWxlY3RlZEVsZW1lbnRTeW1ib2wgPSAgZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2VsZWN0ZWRFbGVtZW50SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVsZW1lbnRTeW1ib2wgPSBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbUVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsZW1lbnRJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICByZXR1cm4gZ2VuZXJhdGVkV2VhcG9uO1xyXG4gfVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGluIChoZXJvU2VsZWN0aW9uLCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmIChjaGVja1ZhbGlkQ3VycmVuY3lBbW91bnQoY3VycmVuY3lDb250YWluZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2xvdE1hY2hpbmVJdGVtKGhlcm9TZWxlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXMgKCkge1xyXG4gICAgY29uc3Qgc3ltYm9sRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN5bWJvbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHN5bWJvbEVsZW1lbnRzKTtcclxuXHJcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc3ltYm9sIGVsZW1lbnRzXHJcbiAgICAgIHN5bWJvbEVsZW1lbnRzLmZvckVhY2goKHN5bWJvbEVsZW1lbnQpID0+IHtcclxuICAgICAgICBzeW1ib2xFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gb3BlblNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2VTbG90TWFjaGluZU1vZGFsKCkge1xyXG4gICAgcmVzZXRTbG90TWFjaGluZUltYWdlcygpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3RNYWNoaW5lTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXREYXRhRm9ybSh0eXBlKSB7XHJcblxyXG5cclxuICAgIGlmICh0eXBlID09PSBcImdvYWxcIikge1xyXG4gICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWxDb250YWluZXInKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudFxyXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9ICdnb2FsLWZvcm0nOyAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xyXG4gICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIFxyXG4gICAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYW4gZXhhbXBsZSBsYWJlbFxyXG4gICAgICBjb25zdCBjcmVhdGVFeGFtcGxlTGFiZWwgPSAoZXhhbXBsZVRleHQpID0+IHtcclxuICAgICAgICBjb25zdCBleGFtcGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGV4YW1wbGVMYWJlbC50ZXh0Q29udGVudCA9IGAke2V4YW1wbGVUZXh0fWA7XHJcbiAgICAgICAgZXhhbXBsZUxhYmVsLmNsYXNzTmFtZSA9ICdleGFtcGxlLWxhYmVsJztcclxuICAgICAgICByZXR1cm4gZXhhbXBsZUxhYmVsO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICAvLyBDcmVhdGUgZ29hbCBuYW1lIGlucHV0XHJcbiAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiR29hbCBOYW1lL09iamVjdGl2ZTpcIjtcclxuICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2dvYWxOYW1lJyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFeGFtcGxlTGFiZWwoJ1doYXQgaXMgbXkgZGVzaXJlZCBHb2FsPyBBbiBlLmc6IFwiQmVjb21lIGZsdWVudCBpbiBTcGFuaXNoXCInKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2dvYWxOYW1lJyk7XHJcbiAgICAgIG5hbWVJbnB1dC5pZCA9ICdnb2FsTmFtZSc7IC8vIEFkZCBhbiBpZCBmb3IgdGFyZ2V0aW5nIHdpdGggQ1NTXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIHRhc2sgaW5wdXRcclxuICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIFJlcXVpcmVkOlwiO1xyXG4gICAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzaycpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRXhhbXBsZUxhYmVsKCdXaGF0IHRhc2sgd2lsbCBoZWxwIG1lIGFjaGlldmUgdGhpcyBnb2FsPyBBbiBlLmc6IFN0dWR5IFNwYW5pc2gnKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2snKTtcclxuICAgICAgdGFza0lucHV0LmlkID0gJ3Rhc2snOyAvLyBBZGQgYW4gaWQgZm9yIHRhcmdldGluZyB3aXRoIENTU1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgXHJcbiAgICAgIC8vIENyZWF0ZSBmcmVxdWVuY3kgaW5wdXRcclxuICAgICAgY29uc3QgZnJlcXVlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBmcmVxdWVuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiRnJlcXVlbmN5OlwiO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZyZXF1ZW5jeUxhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgY29uc3QgZnJlcXVlbmN5T3B0aW9ucyA9IFtcclxuICAgICAgICB7IGxhYmVsOiAnSG91cnMvZGF5JywgdmFsdWU6ICdob3VycycgfSxcclxuICAgICAgICB7IGxhYmVsOiAnTWludXRlcy9kYXknLCB2YWx1ZTogJ21pbnV0ZXMnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ09uY2UvZGF5JywgdmFsdWU6ICdvbmNlJyB9XHJcbiAgICAgIF07XHJcbiAgXHJcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeVZhbHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBmcmVxdWVuY3lWYWx1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJGcmVxdWVuY3kgVmFsdWU6XCI7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJlcXVlbmN5VmFsdWVMYWJlbCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRXhhbXBsZUxhYmVsKCcyJykpO1xyXG4gIFxyXG4gICAgICBjb25zdCBmcmVxdWVuY3lWYWx1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgZnJlcXVlbmN5VmFsdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZyZXF1ZW5jeVZhbHVlJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xyXG4gICAgICBmcmVxdWVuY3lWYWx1ZUlucHV0LmlkID0gJ2ZyZXF1ZW5jeVZhbHVlJzsgLy8gQWRkIGFuIGlkIGZvciB0YXJnZXRpbmcgd2l0aCBDU1NcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lWYWx1ZUlucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgZnJlcXVlbmN5T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIG9wdGlvbkxhYmVsLnRleHRDb250ZW50ID0gb3B0aW9uLmxhYmVsO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBvcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuICAgICAgICBvcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZnJlcXVlbmN5VHlwZScpO1xyXG4gICAgICAgIG9wdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb24udmFsdWUpO1xyXG4gIFxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uTGFiZWwpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uSW5wdXQpO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIHRvdGFsIHRpbWUgaW5wdXRcclxuICAgICAgY29uc3QgdG90YWxUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICB0b3RhbFRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVG90YWwgVGltZSB0byBDb21wbGV0ZSB0aGUgR29hbDpcIjtcclxuICAgICAgdG90YWxUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG90YWxUaW1lJyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG90YWxUaW1lTGFiZWwpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUV4YW1wbGVMYWJlbCgnMTAgaG91cnMgYSB3ZWVrJykpO1xyXG4gIFxyXG4gICAgICBjb25zdCB0b3RhbFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRvdGFsVGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgIHRvdGFsVGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b3RhbFRpbWUnKTtcclxuICAgICAgdG90YWxUaW1lSW5wdXQuaWQgPSAndG90YWxUaW1lJzsgLy8gQWRkIGFuIGlkIGZvciB0YXJnZXRpbmcgd2l0aCBDU1NcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0b3RhbFRpbWVJbnB1dCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgXHJcbiAgICAgIC8vIENyZWF0ZSBhIHN1Ym1pdCBidXR0b25cclxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBcInF1ZXN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3RQYXJhbGxheCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2NyZWF0ZVF1ZXN0Rm9ybSc7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1Ub3AgZGl2XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Ub3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZm9ybVRvcERpdi5jbGFzc05hbWUgPSAnZm9ybVRvcCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRvcERpdik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1Ub3BCdXR0b25cclxuICAgICAgICAgICAgY29uc3QgZm9ybVRvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBmb3JtVG9wQnV0dG9uLmNsYXNzTmFtZSA9ICdmb3JtVG9wQnV0dG9uJztcclxuICAgICAgICAgICAgZm9ybVRvcEJ1dHRvbi5pZCA9ICdmb3JtVG9wRXhpdEJ1dHRvbic7XHJcbiAgICAgICAgICAgIGZvcm1Ub3BCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgICAgIGZvcm1Ub3BEaXYuYXBwZW5kQ2hpbGQoZm9ybVRvcEJ1dHRvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG9iamVjdGl2ZSBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RpdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0T2JqZWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUxhYmVsLnRleHRDb250ZW50ID0gJ09iamVjdGl2ZTonO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9iamVjdGl2ZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RpdmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdE9iamVjdGl2ZScpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVJbnB1dC5pZCA9ICdxdWVzdE9iamVjdGl2ZSc7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9iamVjdGl2ZUlucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZGF0ZSBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIHRvIENvbXBsZXRlOic7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ3F1ZXN0RGF0ZSc7XHJcbiAgICAgICAgICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBjdXJyZW5jeSB0eXBlIHNlbGVjdFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeVR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0Q3VycmVuY3lUeXBlJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZUxhYmVsLnRleHRDb250ZW50ID0gJ0N1cnJlbmN5IFR5cGU6JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjdXJyZW5jeVR5cGVMYWJlbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lUeXBlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RDdXJyZW5jeVR5cGUnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmlkID0gJ3F1ZXN0Q3VycmVuY3lUeXBlJztcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGN1cnJlbmN5VHlwZVNlbGVjdCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lPcHRpb25zID0gW1xyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdHR1Rva2VucycsIGxhYmVsOiAnR0cgVG9rZW5zJyB9LFxyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdDaGVzdEtleXMnLCBsYWJlbDogJ0NoZXN0IEtleXMnIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW5jeU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWw7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmFwcGVuZENoaWxkKGN1cnJlbmN5T3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGN1cnJlbmN5IGFtb3VudCBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUFtb3VudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdEN1cnJlbmN5QW1vdW50Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgQW1vdW50Oic7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3VycmVuY3lBbW91bnRMYWJlbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lBbW91bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFtb3VudElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdEN1cnJlbmN5QW1vdW50Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuaWQgPSAncXVlc3RDdXJyZW5jeUFtb3VudCc7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3VycmVuY3lBbW91bnRJbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1CdXR0b25EaXZcclxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmb3JtQnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdmb3JtQnV0dG9uRGl2JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uRGl2KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdmb3JtQnV0dG9uJztcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ2Zvcm1TdWJtaXRCdXR0b24nO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuICAgICAgICAgICAgZm9ybUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBmb3JtIHN1Ym1pdCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb25cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBmb3JtIHZhbHVlc1xyXG4gICAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZSA9IG9iamVjdGl2ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lUeXBlID0gY3VycmVuY3lUeXBlU2VsZWN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5QW1vdW50ID0gY3VycmVuY3lBbW91bnRJbnB1dC52YWx1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3RpdmU6IFwiICsgb2JqZWN0aXZlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGUgdG8gQ29tcGxldGU6IFwiICsgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW5jeSBUeXBlOiBcIiArIGN1cnJlbmN5VHlwZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW5jeSBBbW91bnQ6IFwiICsgY3VycmVuY3lBbW91bnQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gWW91IGNhbiBwZXJmb3JtIG90aGVyIG9wZXJhdGlvbnMgd2l0aCB0aGUgZm9ybSBkYXRhIGhlcmVcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPYmplY3RpdmUgKG9iamVjdGl2ZSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xyXG59IiwiaW1wb3J0IHsgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IGluaXRpYWxpemVEZWZhdWx0SW5kZXggZnJvbSBcIi4vaW5pdGlhbGl6ZUluZGV4RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50LCBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCwgYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50LCBsaXN0Q29udGFpbmVyLCBjcmVhdGVRdWVzdEZvcm0gfSBmcm9tIFwiLi9nb2FsQ3JlYXRpb25QYWdlSFRNTFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyR29hbENyZWF0aW9uUGFnZSAoKSB7XHJcblxyXG4gICAgbGV0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBDb250ZW50XCIpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgaGVhZGVyIGRpdlxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImdvYWxDcmVhdGlvblBhZ2VcIik7XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlckdvYWxDcmVhdGlvblBhZ2VcIjtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlciBlbGVtZW50c1xyXG4gICAgICAgIGxldCBoZWFkZXJUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBiYWNrUGFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGhlYWRlclRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tQYWdlQnV0dG9uKTtcclxuICAgICAgICAgICAgaGVhZGVyVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG5cclxuICAgICAgICBsZXQgZGVsZXRlR29hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjbGFzc2VzIGFuZCBJRCB0byB0aGUgZWxlbWVudHNcclxuICAgICAgICBoZWFkZXJUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyVGl0bGVDb250YWluZXJcIilcclxuICAgICAgICBiYWNrUGFnZUJ1dHRvbi5pZCA9IFwiYmFja1BhZ2VCdXR0b25Hb2FsQ3JlYXRpb25QYWdlXCI7XHJcbiAgICAgICAgaGVhZGVyVGl0bGUuaWQgPSBcImhlYWRlclRpdGxlR29hbENyZWF0aW9uUGFnZVwiO1xyXG4gICAgICAgIGRlbGV0ZUdvYWwuaWQgPSBcImRlbGV0ZUdvYWxDcmVhdGlvblBhZ2VcIjtcclxuXHJcbiAgICAgICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICAgICAgYmFja1BhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiR29hbHNcIjtcclxuICAgICAgICBkZWxldGVHb2FsLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuXHJcbiAgICAgICAgYmFja1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZSAobWFpblBhZ2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQobWFpblBhZ2UuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRlbGV0ZUdvYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgICAgICAgICB3aGlsZSAobWFpblBhZ2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQobWFpblBhZ2UuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBlbGVtZW50cyB0byB0aGUgaGVhZGVyXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGVDb250YWluZXIpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlR29hbCk7XHJcblxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCBkaXZcclxuICAgIGxldCBnb2FsQ3JlYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbENyZWF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25QYWdlXCIpO1xyXG4gICAgZ29hbENyZWF0aW9uQ29udGFpbmVyLmlkID0gXCJnb2FsQ3JlYXRpb25Db250ZW50Q29udGFpbmVyXCI7XHJcblxyXG4gICAgICAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IGNoaWxkIGRpdiB3aXRoIGNsYXNzIFwiZ29hbFRpdGxlQ29udGFpbmVyXCJcclxuXHJcbiAgICAgICAgbGV0IGdvYWxUaXRsZUNvbnRhaW5lciA9IGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudCAoXHJcbiAgICAgICAgICAgIFwiZ29hbFRpdGxlQ29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInRleHRcIixcclxuICAgICAgICAgICAgXCJnb2FsVGl0bGVDb250YWluZXJJbnB1dFwiLFxyXG4gICAgICAgICAgICBcIkVudGVyIFlvdXIgR29hbCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4gICAgICAgICAgICAnRW50ZXIgdGhlIG5hbWUgb2YgeW91ciBnb2FsIGluIHRoZSBcIlVudGl0bGVkXCIgZmllbGQgYWJvdmUuIEFuIGV4YW1wbGUgb2YgYSBnb2FsIGNhbiBiZTogXCJCZWNvbWUgRmx1ZW50IGluIFNwYW5pc2hcIiBvciBcIkdldCBTaXgtUGFjayBBYnNcIi4uLiAnLFxyXG4gICAgICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCJcclxuICAgICAgICAgICAgKSBcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWNvbmQgY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyXCJcclxuXHJcbiAgICAgICAgbGV0IHJld2FyZEFzc2lnbm1lbnRDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudENvbnRhaW5lclwiLCBcclxuICAgICAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiBSZXdhcmRzOlwiLCBcclxuICAgICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICAgICAgJ0Fzc2lnbiByZXdhcmRzIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCBhbW91bnQgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy4nLCBcclxuICAgICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4gICAgICAgICAgICBcInJld2FyZEFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGhpcmQgY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJ0aW1lQXNzaWdubWVudENvbnRhaW5lclwiXHJcbiAgXHJcbiAgICAgICAgbGV0IHRpbWVBc3NpZ25tZW50Q29udGFpbmVyID0gY3JlYXRlSW5wdXRWYWx1ZUVsZW1lbnQgKFxyXG4gICAgICAgICAgICBcInRpbWVBc3NpZ25tZW50Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiBUaW1lOlwiLCBcclxuICAgICAgICAgICAgXCJnb2FsVGltZUFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbiAgICAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiB0aW1lIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCB0aW1lIHdpbGwgYmUgc3BsaXQgYW1vbmcgeW91ciBvdXRzdGFuZGluZyBxdWVzdHMuXCIsIFxyXG4gICAgICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIsXHJcbiAgICAgICAgICAgIFwidGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgUmFkaW8gQnV0dG9ucyB0byB0aGUgdGhpcmQgY2hpbGQgZGl2XHJcbiAgICAgICAgYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50KHRpbWVBc3NpZ25tZW50Q29udGFpbmVyLCBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIik7XHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvdXJ0aCBjaGlsZCBkaXYgd2l0aCBjbGFzcyBcImFkZFF1ZXN0Q29udGFpbmVyXCJcclxuICAgICAgICBsZXQgYWRkUXVlc3RDb250YWluZXIgPSBsaXN0Q29udGFpbmVyIChcclxuICAgICAgICAgICAgXCJhZGRRdWVzdENvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIkFkZCBRdWVzdChzKSB0byBZb3VyIEdvYWw6XCIsXHJcbiAgICAgICAgICAgIFwiYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkXCIsXHJcbiAgICAgICAgICAgIFwicXVlc3RQYXJhbGxheFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vIClkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIC8vIGFkZFF1ZXN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWRkUXVlc3RDb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgLy8gbGV0IGFkZFF1ZXN0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgICAgLy8gbGV0IGFkZFF1ZXN0Q29udGFpbmVySW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdENvbnRhaW5lcklucHV0RmllbGRcIik7XHJcblxyXG4gICAgICAgIC8vIGFkZFF1ZXN0Q29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBRdWVzdChzKSB0byBZb3VyIEdvYWw6XCJcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXJUaXRsZSk7XHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGRlZmluZVF1ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAvLyBkZWZpbmVRdWVzdC5jbGFzc0xpc3QuYWRkKFwicXVlc3RQYXJhbGxheFwiKVxyXG4gICAgICAgIC8vIGRlZmluZVF1ZXN0LmFwcGVuZENoaWxkKGNyZWF0ZVF1ZXN0Rm9ybSgpKTtcclxuXHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkLmFwcGVuZENoaWxkKGRlZmluZVF1ZXN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIGRpdnMgdG8gdGhlIHNlY29uZCBwYXJlbnQgZGl2XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFRpdGxlQ29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lQXNzaWdubWVudENvbnRhaW5lcik7XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXIpO1xyXG4gXHJcbiAgICAvLyBDcmVhdGUgdGhlIGZvb3RlciBkaXZcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25QYWdlXCIpO1xyXG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJHb2FsQ3JlYXRpb25QYWdlXCJcclxuXHJcbiAgICBsZXQgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImdvYWxDb25maXJtQ3JlYXRlQnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIlxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdvYWxDb25maXJtQ3JlYXRlQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHBhcmVudCBkaXZzIHRvIHRoZSBkb2N1bWVudCBib2R5IG9yIGFueSBvdGhlciBjb250YWluZXJcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChnb2FsQ3JlYXRpb25Db250YWluZXIpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG5jcmVhdGVRdWVzdEZvcm0oKTtcclxuXHJcblxyXG4vLyAgICAgbGV0IGdvYWxUaW1lQ29udGFpbmVyID0gY3JlYXRlSW5wdXRWYWx1ZUVsZW1lbnQgKFxyXG4vLyAgICAgICAgIFwiZm9ybUZpZWxkQ29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIFJld2FyZHM6XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFJld2FyZEFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbi8vICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuLy8gICAgICAgICBcIkFzc2lnbiByZXdhcmRzIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCBhbW91bnQgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbi8vICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0XCIsXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIC8vIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChnb2FsVGltZUNvbnRhaW5lcik7XHJcbiAgXHJcbi8vICAgICAvLyBGcmVxdWVuY3kgb2YgUXVlc3RcclxuLy8gICAgIGxldCBmcmVxdWVuY3lDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbi8vICAgICAgICAgXCJmb3JtRmllbGRDb250YWluZXJcIiwgXHJcbi8vICAgICAgICAgXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIFRpbWU6XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIHRpbWUgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIHRpbWUgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbi8vICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgICAgIFwidGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICBsZXQgZGVhZGxpbmVDb250YWluZXIgPSBjcmVhdGVGb3JtRmllbGQoXHJcbi8vICAgICAgICAgXCJkYXRlXCIsXHJcbi8vICAgICAgICAgXCJkZWFkbGluZVwiLFxyXG4vLyAgICAgICAgIFwiRW50ZXIgdGhlIGRlYWRsaW5lIGZvciB5b3VyIHF1ZXN0LlwiLFxyXG4vLyAgICAgICAgIFwiRW50ZXIgdGhlIHN0YXJ0IGRhdGUgYW5kIGVuZCBkYXRlIGZvciB5b3VyIEdvYWwuXCJcclxuLy8gICAgICAgKTtcclxuXHJcbi8vIHguYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuLy8geC5hcHBlbmRDaGlsZChnb2FsVGltZUNvbnRhaW5lcik7XHJcbi8vIHguYXBwZW5kQ2hpbGQoZnJlcXVlbmN5Q29udGFpbmVyKTtcclxuLy8geC5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gbGV0IHF1ZXN0TmFtZUNvbnRhaW5lciA9IGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudChcclxuLy8gICAgIFwiZm9ybUlucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgXCJ0ZXh0XCIsIFxyXG4vLyAgICAgXCJxdWVzdEdvYWxPYmplY3RpdmVcIixcclxuLy8gICAgIFwiRW50ZXIgWW91ciBRdWVzdCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4vLyAgICAgJ0VudGVyIHRoZSBcIm9iamVjdGl2ZVwiIE9SIFwibmFtZVwiIG9mIHlvdXIgcXVlc3QgKGFjdGlvbikgZmllbGQgYWJvdmUuIEV4YW1wbGVzIG9mIHF1ZXN0cyBhcmU6IFwiU3R1ZHkgU3BhbmlzaFwiIG9yIFwiRG8gQWItQ3J1bmNoZXNcIicsXHJcbi8vICk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlUXVlc3RGb3JtKCkge1xyXG4vLyAgICAgY29uc3QgcXVlc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbi8vICAgICBxdWVzdEZvcm0uY2xhc3NMaXN0LmFkZChcInF1ZXN0Rm9ybVwiKTtcclxuXHJcbi8vICAgICBsZXQgZGVmYXVsdENsYXNzID0gXCJmb3JtSW5wdXRDb250YWluZXJcIjtcclxuICBcclxuLy8gICAgIC8vIFF1ZXN0IE5hbWVcclxuLy8gICAgIGxldCBxdWVzdE5hbWVDb250YWluZXIgPSBjcmVhdGVPYmplY3RpdmVJbnB1dEVsZW1lbnQoXHJcbi8vICAgICAgICAgZGVmYXVsdENsYXNzLCBcclxuLy8gICAgICAgICBcInRleHRcIiwgXHJcbi8vICAgICAgICAgXCJxdWVzdEdvYWxPYmplY3RpdmVcIixcclxuLy8gICAgICAgICBcIkVudGVyIFlvdXIgUXVlc3QgT2JqZWN0aXZlIEhlcmUuLi5cIixcclxuLy8gICAgICAgICAnRW50ZXIgdGhlIFwib2JqZWN0aXZlXCIgT1IgXCJuYW1lXCIgb2YgeW91ciBxdWVzdCAoYWN0aW9uKSBmaWVsZCBhYm92ZS4gRXhhbXBsZXMgb2YgcXVlc3RzIGFyZTogXCJTdHVkeSBTcGFuaXNoXCIgb3IgXCJEbyBBYi1DcnVuY2hlc1wiJyxcclxuLy8gICAgICk7XHJcbi8vICAgICBxdWVzdEZvcm0uYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuXHJcbi8vICAgICAvLyBHb2FsIFRpbWUgQWxsb3RtZW50XHJcbi8vICAgICBsZXQgZ29hbFRpbWVDb250YWluZXIgPSBjcmVhdGVWYWx1ZUFzc2lnbm1lbnRDb250YWluZXIoXHJcbi8vICAgICAgICAgXCJBbGxvY2F0ZSBRdWVzdCBUaW1lOlwiLFxyXG4vLyAgICAgICAgIFwiQXNzaWduIHRpbWUgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIHRpbWUgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIixcclxuLy8gICAgICAgICBcInF1ZXN0R29hbFRpbWVTcGVudFwiXHJcbi8vICAgICApO1xyXG4vLyAgICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGdvYWxUaW1lQ29udGFpbmVyKTtcclxuICBcclxuLy8gICAgIC8vIEZyZXF1ZW5jeSBvZiBRdWVzdFxyXG4vLyAgICAgbGV0IGZyZXF1ZW5jeUNvbnRhaW5lciA9IGNyZWF0ZVZhbHVlQXNzaWdubWVudENvbnRhaW5lcihcclxuLy8gICAgICAgICBcIlF1ZXN0IEZyZXF1ZW5jeTpcIixcclxuLy8gICAgICAgICAnRW50ZXIgdGhlIGZyZXF1ZW5jeSAocGVyIHdlZWspIGF0IHdoaWNoIHlvdSB3aWxsIGNvbXBsZXRlIHRoaXMgcXVlc3QuIEV4YW1wbGU6IFwiNCB0aW1lcyAvIFdlZWtcIiBvciBcIkV2ZXJ5IE1vbmRheSwgVHVlc2RheSwgVGh1cnNkYXkgYW5kIFN1bmRheSBvZiBlYWNoIFdlZWtcIicsXHJcbi8vICAgICAgICAgXCJxdWVzdEdvYWxGcmVxdWVuY3lcIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lDb250YWluZXIpO1xyXG4gIFxyXG4vLyAgICAgLy8gR29hbCBEZWFkbGluZVxyXG4vLyAgICAgbGV0IGRlYWRsaW5lQ29udGFpbmVyID0gY3JlYXRlRm9ybUZpZWxkKFxyXG4vLyAgICAgICBcImRhdGVcIixcclxuLy8gICAgICAgXCJkZWFkbGluZVwiLFxyXG4vLyAgICAgICBcIkVudGVyIHRoZSBkZWFkbGluZSBmb3IgeW91ciBxdWVzdC5cIixcclxuLy8gICAgICAgXCJFbnRlciB0aGUgc3RhcnQgZGF0ZSBhbmQgZW5kIGRhdGUgZm9yIHlvdXIgR29hbC5cIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcbiBcclxuICBcclxuLy8gICAgIHJldHVybiBxdWVzdEZvcm07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVZhbHVlQXNzaWdubWVudENvbnRhaW5lcih0aXRsZVRleHQsIGV4YW1wbGVUZXh0LCBpZCkge1xyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1GaWVsZENvbnRhaW5lclwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIpO1xyXG4gIFxyXG4vLyAgICAgLy8gQ3JlYXRlIHRoZSByYWRpbyBidXR0b25zIGZvciB0aW1lIG9wdGlvbnNcclxuLy8gICAgIGxldCBob3Vyc1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbi8vICAgICBob3Vyc1JhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgXHJcbi8vICAgICBsZXQgaG91cnNSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuLy8gICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmFsdWVBc3NpZ25tZW50XCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaG91cnNcIik7XHJcbi8vICAgICBob3Vyc1JhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudFJhZGlvQnV0dG9uXCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9JbnB1dCk7XHJcbi8vICAgICBob3Vyc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb3Vyc1wiKSk7XHJcbiAgXHJcbi8vICAgICBsZXQgbmFSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4vLyAgICAgbmFSYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0xhYmVsXCIpO1xyXG4gIFxyXG4vLyAgICAgbGV0IG5hUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuLy8gICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbi8vICAgICBuYVJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInZhbHVlQXNzaWdubWVudFwiKTtcclxuLy8gICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5hXCIpO1xyXG4vLyAgICAgbmFSYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZUFzc2lnbm1lbnRSYWRpb0J1dHRvblwiKTtcclxuLy8gICAgIG5hUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChuYVJhZGlvSW5wdXQpO1xyXG4vLyAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTi9BXCIpKTtcclxuICBcclxuLy8gICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZWxlbWVudCBmb3IgdGltZVxyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZ29hbFZhbHVlQXNzaWdubWVudEFtb3VudFwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudEFtb3VudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50QW1vdW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIpO1xyXG4gIFxyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXJFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0O1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQuY2xhc3NMaXN0LmFkZChcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQuaWQgPSBcInZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0XCI7XHJcbiAgXHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRUaXRsZSk7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRBbW91bnQpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0xhYmVsKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hUmFkaW9MYWJlbCk7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRFeGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRDb250YWluZXJFeGFtcGxlVGV4dCk7XHJcbiAgXHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyKTtcclxuXHJcbi8vICAgICByZXR1cm4gdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyO1xyXG4vLyB9XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50IChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBpbnB1dFR5cGUsIFxyXG4gICAgaW5wdXRJRCwgXHJcbiAgICBpbnB1dFBsYWNlSG9sZGVyVGV4dCxcclxuICAgIGV4YW1wbGVUZXh0Q29udGVudCwgXHJcbiAgICBleGFtcGxlQ2xhc3NOYW1lXHJcbiAgICApIHtcclxuXHJcbiAgICBsZXQgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lckNsYXNzTmFtZTtcclxuXHJcbiAgICBsZXQgZWxlbWVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWxlbWVudElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRUeXBlKTtcclxuICAgIGVsZW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dFBsYWNlSG9sZGVyVGV4dCk7XHJcbiAgICBlbGVtZW50SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTAwXCIpOyAvLyBTZXQgY2hhcmFjdGVyIGxpbWl0IHRvIDcwXHJcbiAgICBlbGVtZW50SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJRCk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRFeGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0Q29udGVudDtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dC5jbGFzc0xpc3QuYWRkKGV4YW1wbGVDbGFzc05hbWUpO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgaW5wdXQgZWxlbWVudCB0byB0aGUgZWxlbWVudFxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SW5wdXQpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RXhhbXBsZVRleHQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBpbnB1dENvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBwcm9tcHRUaXRsZSwgXHJcbiAgICBpbnB1dFZhbHVlQ2xhc3MsXHJcbiAgICBpbnB1dFZhbHVlSUQsIFxyXG4gICAgZXhhbXBsZVRleHRDb250ZW50LCBcclxuICAgIGV4YW1wbGVUZXh0Q2xhc3NOYW1lLFxyXG4gICAgZXhhbXBsZVRleHRJRFxyXG4gICAgKSB7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChpbnB1dENvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRFeGFtcGxlVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50RXhhbXBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChleGFtcGxlVGV4dENvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb21wdFRpdGxlO1xyXG5cclxuICAgIGxldCBlbGVtZW50SW5wdXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsZW1lbnRJbnB1dFZhbHVlLmNsYXNzTGlzdC5hZGQoaW5wdXRWYWx1ZUNsYXNzKTtcclxuICAgIGVsZW1lbnRJbnB1dFZhbHVlLmlkID0gaW5wdXRWYWx1ZUlEO1xyXG5cclxuICAgIGxldCBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBleGFtcGxlVGV4dENvbnRlbnQ7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQuY2xhc3NMaXN0LmFkZChleGFtcGxlVGV4dENsYXNzTmFtZSk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQuaWQgPSBleGFtcGxlVGV4dElEO1xyXG5cclxuICAgIGVsZW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50VGl0bGUpO1xyXG4gICAgZWxlbWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRJbnB1dFZhbHVlKTtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQpO1xyXG5cclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudElucHV0Q29udGFpbmVyKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEV4YW1wbGVUZXh0Q29udGFpbmVyKTtcclxuXHJcbiAgICBlbGVtZW50SW5wdXRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGVudGVyZWRWYWx1ZSA9IGVsZW1lbnRJbnB1dFZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VJbnQoZW50ZXJlZFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKHBhcnNlZFZhbHVlIDw9IDAgfHwgaXNOYU4ocGFyc2VkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJbnB1dFZhbHVlQW1vdW50LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGVudGVyIGEgcG9zaXRpdmUgd2hvbGUgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50SW5wdXRWYWx1ZUFtb3VudC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSYWRpb0J1dHRvbnNUb0VsZW1lbnQgKGVsZW1lbnRDb250YWluZXIsIGlucHV0Q29udGFpbmVyQ2xhc3NOYW1lKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGVsZW1lbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRDb250YWluZXJDbGFzc05hbWV9YClcclxuXHJcbiBcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIHJhZGlvIGJ1dHRvbnMgZm9yIHRpbWUgb3B0aW9uc1xyXG5cclxuICAgICAgICAvLyBIb3VycyBSYWRpbyBMYWJlbFxyXG4gICAgICAgIGxldCBob3Vyc1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0xhYmVsXCIpO1xyXG4gICAgICAgIGxldCBob3Vyc1JhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuICAgICAgICBob3Vyc1JhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImVsZW1lbnRcIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaG91cnNcIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJyYWRpb0J1dHRvblwiKTtcclxuXHJcbiAgICAgICAgLy8gTWludXRlcyBSYWRpbyBMYWJlbFxyXG4gICAgICAgIGxldCBtaW51dGVzUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBtaW51dGVzUmFkaW9MYWJlbC5jbGFzc0xpc3QuYWRkKFwicmFkaW9MYWJlbFwiKTtcclxuICAgICAgICBsZXQgbWludXRlc1JhZGlvSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgbWludXRlc1JhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgIG1pbnV0ZXNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbGVtZW50XCIpO1xyXG4gICAgICAgIG1pbnV0ZXNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWludXRlc1wiKTtcclxuICAgICAgICBtaW51dGVzUmFkaW9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25cIik7XHJcblxyXG4gICAgXHJcbiAgICAgICAgLy8gTi9BIFJhZGlvIExhdmVsXHJcbiAgICAgICAgbGV0IG5hUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBuYVJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgICAgICAgbGV0IG5hUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBuYVJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhZGlvXCIpO1xyXG4gICAgICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZWxlbWVudFwiKTtcclxuICAgICAgICBuYVJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJuYVwiKTtcclxuICAgICAgICBuYVJhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcInJhZGlvQnV0dG9uXCIpO1xyXG5cclxuICAgICAgICAvLyBSYWRpbyBDaGFuZ2UgVGV4dCBFdmVudCBMaXN0ZW5lcnNcclxuICAgICAgICBob3Vyc1JhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVSYWRpb0NoYW5nZSk7XHJcbiAgICAgICAgbWludXRlc1JhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVSYWRpb0NoYW5nZSk7XHJcbiAgICAgICAgbmFSYWRpb0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlUmFkaW9DaGFuZ2UpO1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIGlmIChpbnB1dENvbnRhaW5lckNsYXNzTmFtZSA9PSBcImdvYWxRdWVzdFRpbWVJbnB1dENvbnRhaW5lclwiKSB7XHJcbiAgICAgICAgICAgIGhvdXJzUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChob3Vyc1JhZGlvSW5wdXQpO1xyXG4gICAgICAgICAgICBob3Vyc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb3Vyc1wiKSk7XHJcbiAgICAgICAgICAgIG1pbnV0ZXNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKG1pbnV0ZXNSYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgbWludXRlc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNaW51dGVzXCIpKTsgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0xhYmVsKTtcclxuICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobWludXRlc1JhZGlvTGFiZWwpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBob3Vyc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG91cnNcIikpO1xyXG4gICAgICAgICAgICBuYVJhZGlvTGFiZWwuYXBwZW5kQ2hpbGQobmFSYWRpb0lucHV0KTtcclxuICAgICAgICAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTi9BXCIpKTtcclxuXHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9MYWJlbCk7XHJcbiAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hUmFkaW9MYWJlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHJhZGlvIGJ1dHRvbiBjaGFuZ2VzXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZUFzc2lnbm1lbnRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxUaW1lQXNzaWdubWVudEFtb3VudFwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiKTtcclxuICAgICAgICAgICAgY29uc3QgZ29hbFF1ZXN0VGltZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUXVlc3RUaW1lSW5wdXRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ29hbFF1ZXN0VGltZUV4YW1wbGVUZXh0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBnb2FsUXVlc3RUaW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUXVlc3RUaW1lSW5wdXRDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzQnV0dG9uID0gZ29hbFF1ZXN0VGltZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdmFsdWU9J2hvdXJzJ11cIik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNCdXR0b24gPSBnb2FsUXVlc3RUaW1lQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt2YWx1ZT0nbWludXRlcyddXCIpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENhc2U6IE4vQSBzZWxlY3RlZCBpbiBBc3NpZ24gVGltZSBGaWVsZFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIm5hXCIpIHtcclxuICAgICAgICAgICAgICAvLyBJZiBOL0EgaXMgc2VsZWN0ZWQsIGRpc2FibGUgdGhlIGlucHV0IGZpZWxkIGFuZCBzaG93IHRoZSBOL0EgbWVzc2FnZVxyXG4gICAgICAgICAgICAgIHRpbWVBc3NpZ25tZW50QW1vdW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBnb2FsUXVlc3RUaW1lSW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRpbWVBc3NpZ25tZW50RXhhbXBsZVRleHQudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgXCJTZWxlY3RpbmcgJ04vQScgZm9yIHRpbWUgYXNzaWdubWVudCB3aWxsIHJlcXVpcmUgeW91ciBnb2FsIHRvIGJlIGNvbXBsZXRlZCBiYXNlZCBzb2xlbHkgb24gdGhlIGNvbXBsZXRpb24gb2YgcXVlc3RzLiBObyB0aW1lIGVudHJ5IGlzIHJlcXVpcmVkLlwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0Q29udGFpbmVyQ2xhc3NOYW1lID09PSBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgcmFkaW8gYnV0dG9ucyBmb3IgaG91cnMgYW5kIG1pbnV0ZXMgaW4gZ29hbFF1ZXN0VGltZUlucHV0Q29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXNCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IFwiQWxsIHRpbWUgaW5wdXQgZmllbGRzIGRpc2FibGVkIGZvciB0aGlzIHF1ZXN0LCBhcyB0aGUgdGhlIHRpbWUgYXNzaWduZWQgdG8gdGhpcyBnb2FsIGlzICdOL0EnLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcImhvdXJzXCIgJiYgaW5wdXRDb250YWluZXJDbGFzc05hbWUgPT0gXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIpIHtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIElmIEhvdXJzIGlzIHNlbGVjdGVkLCBlbmFibGUgdGhlIGlucHV0IGZpZWxkIGFuZCBzaG93IHRoZSBIb3VycyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgdGltZUFzc2lnbm1lbnRBbW91bnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBnb2FsUXVlc3RUaW1lSW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBob3Vyc0J1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIG1pbnV0ZXNCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgdGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICBcIlNlbGVjdGluZyAnSG91cnMnIGZvciB0aW1lIGFzc2lnbm1lbnQgd2lsbCByZXF1aXJlIHlvdXIgZ29hbCB0byBiZSBjb21wbGV0ZWQgYmFzZWQgb24gb3ZlcmFsbCB0aW1lIGNvbXBsZXRpb24uIFRpbWUgd2lsbCBiZSBhbGxvdHRlZCB0byBhbGwgb3V0c3RhbmRpbmcgcXVlc3RzIGF2YWlsYWJsZSB0byB0aGUgZ29hbC5cIjtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IFwibWludXRlc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBIb3VycyBpcyBzZWxlY3RlZCwgZW5hYmxlIHRoZSBpbnB1dCBmaWVsZCBhbmQgc2hvdyB0aGUgSG91cnMgbWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgZ29hbFF1ZXN0VGltZUV4YW1wbGVUZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgICAgJ1RoZSByZXF1aXJlZCB0aW1lIHRvIGNvbXBsZXRlIHRoaXMgcXVlc3Qgd2lsbCBiZSBkb2N1bWVudGVkIGluIFwiTWludXRlc1wiLidcclxuICAgICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcImhvdXJzXCIgJiYgaW5wdXRDb250YWluZXJDbGFzc05hbWUgPT0gXCJnb2FsUXVlc3RUaW1lSW5wdXRDb250YWluZXJcIikge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgSG91cnMgaXMgc2VsZWN0ZWQsIGVuYWJsZSB0aGUgaW5wdXQgZmllbGQgYW5kIHNob3cgdGhlIEhvdXJzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGdvYWxRdWVzdFRpbWVFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICAgICdUaGUgcmVxdWlyZWQgdGltZSB0byBjb21wbGV0ZSB0aGlzIHF1ZXN0IHdpbGwgYmUgZG9jdW1lbnRlZCBpbiBcIkhvdXJzXCIuJztcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3RGb3JtICgpIHtcclxuICAgIGNvbnN0IHF1ZXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgcXVlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJxdWVzdEZvcm1cIik7XHJcblxyXG4gICAgLy8gUXVlc3QgTmFtZVxyXG4gICAgbGV0IHF1ZXN0TmFtZUNvbnRhaW5lciA9IGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudCAoXHJcbiAgICAgICAgXCJmb3JtRmllbGRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJ0ZXh0XCIsIFxyXG4gICAgICAgIFwicXVlc3RHb2FsT2JqZWN0aXZlXCIsXHJcbiAgICAgICAgXCJFbnRlciBZb3VyIFF1ZXN0IE9iamVjdGl2ZSBIZXJlLi4uXCIsXHJcbiAgICAgICAgJ0VudGVyIHRoZSBcIm9iamVjdGl2ZVwiIE9SIFwibmFtZVwiIG9mIHlvdXIgcXVlc3QgKGFjdGlvbikgZmllbGQgYWJvdmUuIEV4YW1wbGVzIG9mIHF1ZXN0cyBhcmU6IFwiU3R1ZHkgU3BhbmlzaFwiIG9yIFwiRG8gQWItQ3J1bmNoZXNcIicsXHJcbiAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiXHJcbiAgICAgICAgKTtcclxuICBcclxuICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChxdWVzdE5hbWVDb250YWluZXIpO1xyXG5cclxuICAgIC8vIEdvYWwgVGltZSBBbGxvdG1lbnRcclxuICAgIGxldCBnb2FsVGltZUNvbnRhaW5lciA9IGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgICAgICBcImZvcm1GaWVsZENvbnRhaW5lclwiLCBcclxuICAgICAgICBcImdvYWxRdWVzdEZyZXF1ZW5jeUlucHV0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0RnJlcXVlbmN5RXhhbXBsZVRleHRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJRdWVzdCBGcmVxdWVuY3k6XCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0RnJlcXVlbmN5SW5wdXRcIiwgXHJcbiAgICAgICAgXCJnb2FsUXVlc3RGcmVxdWVuY3lJbnB1dFwiLCBcclxuICAgICAgICBcIkFzc2lnbiByZXdhcmRzIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCBhbW91bnQgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbiAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0RnJlcXVlbmN5SW5wdXRFeGFtcGxlVGV4dFwiLFxyXG4gICAgKTtcclxuXHJcbiAgICBxdWVzdEZvcm0uYXBwZW5kQ2hpbGQoZ29hbFRpbWVDb250YWluZXIpO1xyXG4gIFxyXG4gICAgLy8gRnJlcXVlbmN5IG9mIFF1ZXN0XHJcbiAgICBsZXQgZnJlcXVlbmN5Q29udGFpbmVyID0gY3JlYXRlSW5wdXRWYWx1ZUVsZW1lbnQgKFxyXG4gICAgICAgIFwiZm9ybUZpZWxkQ29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0VGltZUlucHV0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0VGltZUV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwiQXNzaWduIFRpbWUgdG8gUXVlc3Q6XCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0VGltZUlucHV0XCIsIFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0VGltZUlucHV0XCIsIFxyXG4gICAgICAgIFwiQXNzaWduIHRpbWUgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIHRpbWUgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbiAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4gICAgICAgIFwiZ29hbFF1ZXN0VGltZUV4YW1wbGVUZXh0XCIsXHJcbiAgICApO1xyXG5cclxuICAgIGFkZFJhZGlvQnV0dG9uc1RvRWxlbWVudChmcmVxdWVuY3lDb250YWluZXIsIFwiZ29hbFF1ZXN0VGltZUlucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGZyZXF1ZW5jeUNvbnRhaW5lcik7XHJcbiAgXHJcbiAgICAvLyBHb2FsIERlYWRsaW5lXHJcbiAgICBsZXQgZGVhZGxpbmVDb250YWluZXIgPSBjcmVhdGVGb3JtRmllbGQoXHJcbiAgICAgIFwiZGF0ZVwiLFxyXG4gICAgICBcImRlYWRsaW5lXCIsXHJcbiAgICAgIFwiRW50ZXIgdGhlIGRlYWRsaW5lIGZvciB5b3VyIHF1ZXN0LlwiLFxyXG4gICAgICBcIkVudGVyIHRoZSBzdGFydCBkYXRlIGFuZCBlbmQgZGF0ZSBmb3IgeW91ciBHb2FsLlwiXHJcbiAgICApO1xyXG4gICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGRlYWRsaW5lQ29udGFpbmVyKTtcclxuIFxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIHF1ZXN0Rm9ybTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0Q29udGFpbmVyIChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIHByb21wdFRpdGxlLFxyXG4gICAgY29udGFpbmVySW5wdXRGaWVsZENsYXNzTmFtZSxcclxuICAgIGxpc3RJdGVtc0NvbnRhaW5lckNsYXNzXHJcbikge1xyXG4gICAgICAgIFxyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjb250YWluZXJDbGFzc05hbWU7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb21wdFRpdGxlO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50VGl0bGUpO1xyXG5cclxuICAgIGxldCBlbGVtZW50SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50SW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcklucHV0RmllbGRDbGFzc05hbWUpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50SW5wdXRGaWVsZCk7XHJcblxyXG4gICAgbGV0IGxpc3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXN0SXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChsaXN0SXRlbXNDb250YWluZXJDbGFzcyk7XHJcbiAgICBsaXN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUXVlc3RGb3JtKCkpO1xyXG4gICAgZWxlbWVudElucHV0RmllbGQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1zQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybUZpZWxkKHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCBleGFtcGxlVGV4dCkge1xyXG4gICAgbGV0IGZvcm1GaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JtRmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1GaWVsZENvbnRhaW5lclwiKTtcclxuICBcclxuICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xyXG4gICAgICAvLyBDcmVhdGUgYSBkaXYgdG8gaG91c2UgdGhlIGRhdGUgaW5wdXRzXHJcbiAgICAgIGxldCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGxldCBzdGFydERhdGVJbnB1dCA9IGNyZWF0ZUlucHV0KHR5cGUsIG5hbWUgKyBcIlN0YXJ0XCIsIFwiU3RhcnQgXCIgKyBwbGFjZWhvbGRlcik7XHJcbiAgICAgIGxldCBlbmREYXRlSW5wdXQgPSBjcmVhdGVJbnB1dCh0eXBlLCBuYW1lICsgXCJFbmRcIiwgXCJFbmQgXCIgKyBwbGFjZWhvbGRlcik7XHJcbiAgICAgIFxyXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBzdGFydCBkYXRlJ3MgbWluIHZhbHVlIHRvIHRvZGF5XHJcbiAgICAgIHN0YXJ0RGF0ZUlucHV0Lm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICAgIFxyXG4gICAgICAvLyBVcGRhdGUgdGhlIGVuZCBkYXRlJ3MgbWluIHZhbHVlIHdoZW5ldmVyIHRoZSBzdGFydCBkYXRlIGNoYW5nZXNcclxuICAgICAgc3RhcnREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZUlucHV0LnZhbHVlKTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZW5kRGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyA3KTtcclxuICAgICAgICBlbmREYXRlSW5wdXQudmFsdWUgPSBlbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhcnQgZGF0ZSdzIG1heCB2YWx1ZSB3aGVuZXZlciB0aGUgZW5kIGRhdGUgY2hhbmdlc1xyXG4gICAgICBlbmREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc3RhcnREYXRlSW5wdXQubWF4ID0gZW5kRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBsYWJlbHMgZm9yIHN0YXJ0IGRhdGUgYW5kIGVuZCBkYXRlIGlucHV0c1xyXG4gICAgICBsZXQgc3RhcnREYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChuYW1lICsgXCJTdGFydFwiLCBcIkdvYWwgU3RhcnQgRGF0ZVwiKTtcclxuICAgICAgbGV0IGVuZERhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5hbWUgKyBcIkVuZFwiLCBcIkdvYWwgRW5kIERhdGVcIik7XHJcbiAgICAgIFxyXG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0RGF0ZUxhYmVsKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydERhdGVJbnB1dCk7XHJcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRGF0ZUxhYmVsKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmREYXRlSW5wdXQpO1xyXG4gICAgICBcclxuICAgICAgZm9ybUZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGZvcm1GaWVsZElucHV0ID0gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIpO1xyXG4gICAgICBmb3JtRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUZpZWxkSW5wdXQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IGZvcm1GaWVsZEV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xyXG4gICAgZm9ybUZpZWxkRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBleGFtcGxlVGV4dDtcclxuICAgIGZvcm1GaWVsZEV4YW1wbGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiKTtcclxuICBcclxuICAgIGxldCBleGFtcGxlVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVRleHRDb250YWluZXJcIik7XHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRmllbGRFeGFtcGxlVGV4dCk7XHJcbiAgICBmb3JtRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHRDb250YWluZXIpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGZvcm1GaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIpIHtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmFtZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxMDBcIik7IC8vIFNldCBjaGFyYWN0ZXIgbGltaXQgdG8gMTAwXHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybUZpZWxkSW5wdXRcIik7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZvcklucHV0LCBsYWJlbFRleHQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmb3JJbnB1dCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICAgIHJldHVybiBsYWJlbDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJHb2FsTGlzdCAoY3VycmVudEdvYWxMaXN0KSB7XHJcblxyXG4gICAgbGV0IGdvYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb250YWluZXJcIik7XHJcblxyXG4gICAgZm9yIChsZXQgZ29hbCA9IDA7IGdvYWwgPCBjdXJyZW50R29hbExpc3QubGVuZ3RoOyBnb2FsKyspIHtcclxuICAgICAgICBnb2FsQ29udGFpbmVyLmFwcGVuZENoaWxkKGdlbmVyYXRlR29hbENhcmQoY3VycmVudEdvYWxMaXN0W2dvYWxdKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUdvYWxDYXJkKGdvYWwpIHtcclxuXHJcbiAgICBjb25zdCBnb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ29hbENhcmQuY2xhc3NMaXN0LmFkZCgnZ29hbENhcmQnKTtcclxuICBcclxuICAgIGNvbnN0IHRvcEhhbGZHb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9wSGFsZkdvYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ3RvcEhhbGZHb2FsQ2FyZCcpO1xyXG4gICAgZ29hbENhcmQuYXBwZW5kQ2hpbGQodG9wSGFsZkdvYWxDYXJkKTtcclxuICBcclxuICAgIGNvbnN0IGJvdHRvbUhhbGZHb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm90dG9tSGFsZkdvYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUhhbGZHb2FsQ2FyZCcpO1xyXG4gICAgZ29hbENhcmQuYXBwZW5kQ2hpbGQoYm90dG9tSGFsZkdvYWxDYXJkKTtcclxuICBcclxuICAgIGNvbnN0IGdvYWxPYmplY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvYWxPYmplY3RpdmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ29hbE9iamVjdGl2ZUNvbnRhaW5lcicpO1xyXG4gICAgdG9wSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmVDb250YWluZXIpO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnb2FsQ29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ29hbENvbXBsZXRlQ29udGFpbmVyJyk7XHJcbiAgICB0b3BIYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQoZ29hbENvbXBsZXRlQ29udGFpbmVyKTtcclxuICBcclxuICAgIGNvbnN0IGdvYWxPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgZ29hbE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKCdnb2FsLW9iamVjdGl2ZScpO1xyXG4gICAgZ29hbE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IGdvYWwub2JqZWN0aXZlO1xyXG4gICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsT2JqZWN0aXZlKTtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcXVlc3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdENvbnRhaW5lcicpO1xyXG4gICAgYm90dG9tSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKHF1ZXN0TGlzdENvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdExpc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcXVlc3RMaXN0UGFyYWxsYXguY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0UGFyYWxsYXgnKTtcclxuICAgIHF1ZXN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdExpc3RQYXJhbGxheCk7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgcXVlc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb2FsLnF1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBxdWVzdEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW1Db250YWluZXInKTtcclxuICBcclxuICAgICAgY29uc3QgcXVlc3RJdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RJdGVtJyk7XHJcbiAgICAgIHF1ZXN0SXRlbUNvbnRlbnQudGV4dENvbnRlbnQgPSBnb2FsLnF1ZXN0c1tpXS5vYmplY3RpdmU7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTtcclxuICBcclxuICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgXHJcbiAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0SXRlbUNvbnRlbnQpO1xyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJDb250YWluZXIpO1xyXG4gICAgICBxdWVzdExpc3QuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBnZW5lcmF0ZU1vZGFsKGdvYWwucXVlc3RzW2ldKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcXVlc3RMaXN0UGFyYWxsYXguYXBwZW5kQ2hpbGQocXVlc3RMaXN0KTtcclxuICBcclxuICAgIHJldHVybiBnb2FsQ2FyZDtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGdlbmVyYXRlTW9kYWwoZ29hbFF1ZXN0KSB7XHJcblxyXG4gICAgY29uc3QgZ29hbFF1ZXN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvYWxRdWVzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsJyk7XHJcbiAgXHJcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdnb2FsUXVlc3RNb2RhbENvbnRlbnQnKTtcclxuICBcclxuICAgIGxldCBnb2FsUXVlc3RNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgZ29hbFF1ZXN0TW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIkNvbXBsZXRpb24gUmVxdWlyZW1lbnQocyk6IFwiXHJcblxyXG4gICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIG5hbWUuaW5uZXJUZXh0ID0gZ29hbFF1ZXN0Lm9iamVjdGl2ZTtcclxuXHJcblxyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsVGl0bGUpO1xyXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG5hbWUpXHJcbiAgICBnb2FsUXVlc3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnb2FsUXVlc3RNb2RhbCk7XHJcbiAgXHJcbiAgICByZXR1cm4gZ29hbFF1ZXN0TW9kYWw7XHJcbiAgfVxyXG4gICAgICAiLCJpbXBvcnQgaW1wb3J0QWxsSW1hZ2VzIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25JbWFnZSAod2VhcG9uKSB7XHJcbi8vICAgICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyh3ZWFwb24pKTtcclxuLy8gICAgIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlKHdlYXBvbikge1xyXG4gIGlmICghd2VhcG9uIHx8IHR5cGVvZiB3ZWFwb24gIT09IFwic3RyaW5nXCIpIHtcclxuICAgIC8vIEludmFsaWQgd2VhcG9uIHBhcmFtZXRlciwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG5cclxuICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gd2VhcG9uLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIHdlYXBvbkltYWdlVXJsID0gd2VhcG9uSW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCF3ZWFwb25JbWFnZVVybCkge1xyXG4gICAgICAvLyBJbWFnZSBub3QgZm91bmQgZm9yIHRoZSBnaXZlbiB3ZWFwb24sIGhhbmRsZSB0aGUgZXJyb3Igb3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2VhcG9uSW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRBcm1vdXJJbWFnZSAoYXJtb3VyKSB7XHJcbi8vICAgICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuLy8gICAgIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlKGFybW91cikge1xyXG4gIGlmICghYXJtb3VyIHx8IHR5cGVvZiBhcm1vdXIgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuXHJcbiAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGFybW91ci5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbiAgICBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghYXJtb3VySW1hZ2VVcmwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJtb3VySW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZSAocmFyaXR5KSB7XHJcbi8vICAgICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhyYXJpdHkpKTtcclxuLy8gICAgIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZSAoZWxlbWVudCkge1xyXG4vLyAgICAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcbi8vICAgICByZXR1cm4gZWxlbWVudEltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFyaXR5SW1hZ2UocmFyaXR5KSB7XHJcbiAgaWYgKCFyYXJpdHkgfHwgdHlwZW9mIHJhcml0eSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG5cclxuICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gcmFyaXR5ICsgXCJSYXJpdHlcIjtcclxuICAgIHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFyYXJpdHlJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZShlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50IHx8IHR5cGVvZiBlbGVtZW50ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcblxyXG5cclxuICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUltYWdlKHN0cmluZykge1xyXG5cclxuICBsZXQgaXRlbUltYWdlVXJsO1xyXG5cclxuICBpZiAoc3RyaW5nLnR5cGUgPT09IFwid2VhcG9uXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldFdlYXBvbkltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcImFybW91clwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRBcm1vdXJJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJyYXJpdHlcIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0UmFyaXR5SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiZWxlbWVudFwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRFbGVtZW50SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGl0ZW1JbWFnZVVybDtcclxufSIsIi8vIHdoZXJlIFwiclwiIGlzIGEgcmVxdWlyZS5jb250ZXh0IGZ1bmN0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltcG9ydEFsbEltYWdlcyhyKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0gW107XHJcblxyXG4gICAgLy8ga2V5cyBpcyBhbiBhcnJheSB0aGF0IHN0b3JlcyBhbGwgdGhlIGZpbGVuYW1lcyByZXR1cm5lZCBieSByLmtleXMoKVxyXG4gICAgY29uc3Qga2V5cyA9IHIua2V5cygpO1xyXG5cclxuICAgIC8vIGxlbmd0aCBzb3RyZXMgdGhlIGxlbmd0aCBvZiB0aGUga2V5cyBhcnJheVxyXG4gICAgY29uc3QgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGltYWdlcy5wdXNoKHIoa2V5KSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9SZWQgRGVtb24gSGVsbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYXJtb3VyL1JlZCBEZW1vbiBIZWxtLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvYXJtb3VyIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJ5c3MucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FieXNzLnBuZ1wiLFxuXHRcIi4vYWV0aGVyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hZXRoZXIucG5nXCIsXG5cdFwiLi9jb3Jyb2RlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9jb3Jyb2RlLnBuZ1wiLFxuXHRcIi4vZ2FpYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvZ2FpYS5wbmdcIixcblx0XCIuL2luZmVybm8ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2luZmVybm8ucG5nXCIsXG5cdFwiLi9sdW5hci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbHVuYXIucG5nXCIsXG5cdFwiLi9taXN0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9taXN0LnBuZ1wiLFxuXHRcIi4vc29sYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3NvbGFyLnBuZ1wiLFxuXHRcIi4vc3RlZWwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3N0ZWVsLnBuZ1wiLFxuXHRcIi4vdGVycmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3RlcnJhLnBuZ1wiLFxuXHRcIi4vdm9sdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdm9sdC5wbmdcIixcblx0XCIuL3plcGh5ci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvemVwaHlyLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lcGljUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9lcGljUmFyaXR5LnBuZ1wiLFxuXHRcIi4vbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9sZWdlbmRhcnlSYXJpdHkucG5nXCIsXG5cdFwiLi9ub3JtYWxSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL25vcm1hbFJhcml0eS5wbmdcIixcblx0XCIuL3JhcmVSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3JhcmVSYXJpdHkucG5nXCIsXG5cdFwiLi91bmNvbW1vblJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvdW5jb21tb25SYXJpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FieXNzU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9BYnlzc1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9HYWlhU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9HYWlhU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTHVuYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0x1bmFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL01pc3RTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL01pc3RTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vUnVuZVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvUnVuZVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Tb2xhclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvU29sYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vVm9sdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvVm9sdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1plcGh5clNob3J0U3dvcmQucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy93ZWFwb25zIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJpbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW50R29hbExpc3QsIGN1cnJlbmN5Q29udGFpbmVyIH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5pbXBvcnQgeyByZW5kZXJRdWVzdExpc3QgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlRdWVzdHNTdGF0ZSAoKSB7XHJcblxyXG4gICAgICAgIGxldCBlbXB0eVN0YXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eVF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIHF1ZXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBRdWVzdCB0byBnZXQgc3RhcnRlZCBhbmQgY2hlY2sgdGhlbSBoZXJlOlwiXHJcbiAgICAgICAgbGV0IHF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBxdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUXVlc3RCdXR0b25cIilcclxuICAgICAgICBxdWVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFF1ZXN0ICtcIlxyXG4gICAgICAgIHF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICghcmVtb3ZlRW1wdHlTdGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRW1wdHlzdGF0ZSBSZW1vdmVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICByZW1vdmVFbXB0eVN0YXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmICghY3JlYXRlUXVlc3RQYXJhbGxheCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3RQYXJhbGxheCBjcmVhdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVRdWVzdFBhcmFsbGF4KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKSk7XHJcbiAgICAgICAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RCdXR0b24pO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICBleHBvcnQgZnVuY3Rpb24gc2hvd0VtcHR5R29hbHNTdGF0ZSAoKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eUdvYWxDb250YWluZXJcIik7XHJcbiAgICAgICAgZ29hbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiU2V0IEdvYWxzIGFuZCB0cmFjayB5b3VyIHByb2dyZXNzIGhlcmU6XCJcclxuICAgICAgICBsZXQgZ29hbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZ29hbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkR29hbEJ1dHRvblwiKVxyXG4gICAgICAgIGdvYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBHb2FsICtcIlxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbEJ1dHRvbik7XHJcbiAgICBcclxuICAgICAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlRdWVzdFN0YXRlICgpIHtcclxuXHJcbiAgY29uc3QgZW1wdHlRdWVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlRdWVzdENvbnRhaW5lclwiKVxyXG4gICAgICAgIGlmIChlbXB0eVF1ZXN0TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5UXVlc3RMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlHb2FsU3RhdGUgKCkge1xyXG5cclxuICBjb25zdCBlbXB0eUdvYWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVN0YXRlQ29udGFpbmVyI2VtcHR5R29hbENvbnRhaW5lclwiKVxyXG4gICAgICAgIGlmIChlbXB0eUdvYWxMaXN0KSB7XHJcbiAgICAgICAgICAgIGVtcHR5R29hbExpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKSB7XHJcblxyXG4gIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgZWxlbWVudCBhbHJlYWR5IGV4aXN0c1xyXG4gIGlmIChxdWVzdFBhcmFsbGF4KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gUmV0dXJuIGZhbHNlIHRvIGluZGljYXRlIHRoYXQgdGhlIGVsZW1lbnQgYWxyZWFkeSBleGlzdHNcclxuICB9XHJcblxyXG4gIGxldCBxdWVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcXVlc3RQYXJhbGxheC5jbGFzc0xpc3QuYWRkKFwicXVlc3RQYXJhbGxheFwiKTtcclxuICBxdWVzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFBhcmFsbGF4KTtcclxuXHJcbiAgcmV0dXJuIHRydWU7IC8vIFJldHVybiB0cnVlIHRvIGluZGljYXRlIHRoYXQgdGhlIGVsZW1lbnQgd2FzIGNyZWF0ZWRcclxufVxyXG5cclxubGV0IGdvYWxQYXJhbGxheDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHb2FsUGFyYWxsYXgoKSB7XHJcblxyXG4gIGlmICghZ29hbFBhcmFsbGF4KSB7XHJcbiAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgIGdvYWxQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsUGFyYWxsYXguY2xhc3NMaXN0LmFkZChcImdvYWxQYXJhbGxheFwiKTtcclxuICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFBhcmFsbGF4KTtcclxuXHJcbiAgfVxyXG4gIGdvYWxQYXJhbGxheC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5LCBQbGF5ZXJDaGFyYWN0ZXIsIFBsYXllclN0YXRzLCBHb2FsIH0gZnJvbSBcIi4vY2xhc3Nlcy9jbGFzc2VzLmpzXCI7XHJcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBhZGRRdWVzdCwgcmVuZGVyUXVlc3RMaXN0LCBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSwgY3JlYXRlR2hvc3RDYXJkfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgeyBjbG9zZUZvcm1Nb2RhbCB9IGZyb20gXCIuL21vZGFsRnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjSGVyb1Njb3JlIH0gZnJvbSAnLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVyRXF1aXBwZWRJdGVtcywgY3VycmVudEdvYWxMaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlLCBjcmVhdGVRdWVzdFBhcmFsbGF4IH0gZnJvbSAnLi9pbmRleFZpZXdGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVHZXREYXRhRm9ybSB9IGZyb20gJy4vZ2VuZXJhdGVGb3JtJztcclxuaW1wb3J0IHJlbmRlckRlZmF1bHRJbmRleCBmcm9tICcuL3JlbmRlckRlZmF1bHRJbmRleEh0bWwnO1xyXG5pbXBvcnQgZ2VuZXJhdGVHb2FsQ2FyZCBmcm9tICcuL2dvYWxGdW5jdGlvbnMnO1xyXG5pbXBvcnQgcmVuZGVyR29hbExpc3QgZnJvbSAnLi9nb2FsRnVuY3Rpb25zJztcclxuaW1wb3J0IHJlbmRlckdvYWxDcmVhdGlvblBhZ2UgZnJvbSAnLi9nb2FsQ3JlYXRpb25QYWdlJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZURlZmF1bHRJbmRleCAoKSB7XHJcblxyXG4gICAgbGV0IGluZGV4UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwQ29udGVudFwiKTtcclxuXHJcbiAgICByZW5kZXJEZWZhdWx0SW5kZXgoaW5kZXhQYWdlKTtcclxuXHJcblxyXG5cclxubGV0IHBsYXllckJpcnRoZGF5ID0gbmV3IERhdGUgKFwiMDItMDMtMTk5NlwiKTtcclxubGV0IGhlcm9TZWxlY3Rpb24gPSAoXCJTb3JjZXJlclwiKTtcclxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoXCJpbWFnZXMvemV1c1Nwcml0ZS5wbmdcIiwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgcGxheWVyQmlydGhkYXkpO1xyXG5sZXQgcGl4ZWxJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdEltYWdlXCIpO1xyXG5waXhlbEltYWdlQ29udGFpbmVyLnNyYyA9IChwbGF5ZXIuc3ByaXRlSW1hZ2UpO1xyXG5sZXQgZ2V0SGVyb1Njb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvU2NvcmVDb250YWluZXJcIik7XHJcbmxldCBoZXJvU2NvcmUgPSBjYWxjSGVyb1Njb3JlKHBsYXllcik7XHJcbmdldEhlcm9TY29yZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IChgSGVybyBTY29yZTogJHtoZXJvU2NvcmV9YClcclxubGV0IGN1cnJlbnRHb2FsTGlzdCA9IFtdO1xyXG5cclxuXHJcbmxldCB0ZXN0R29hbCA9IG5ldyBHb2FsIChcIkJlY29tZSBGbHVlbnQgaW4gU3BhbmlzaFwiLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMikpXHJcbmxldCBneW1Hb2FsID0gbmV3IEdvYWwgKChcIkdldCBTaXggUGFjayBBYnNcIiksIG5ldyBDdXJyZW5jeSAoXCJHR1Rva2Vuc1wiLCAxMikpO1xyXG5cclxuY3VycmVudEdvYWxMaXN0LnB1c2godGVzdEdvYWwpO1xyXG5jdXJyZW50R29hbExpc3QucHVzaChneW1Hb2FsKTtcclxuXHJcbmxldCBneW1RdWVzdCA9IGd5bUdvYWwuZ2VuZXJhdGVRdWVzdCg0LCAwKTtcclxuZ3ltR29hbC5xdWVzdHMucHVzaChneW1RdWVzdCk7XHJcblxyXG5yZW5kZXJHb2FsTGlzdChjdXJyZW50R29hbExpc3QpO1xyXG5cclxuXHJcbnVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gT3BlbiBRdWVzdCBDcmVhdGlvbiBNb2RhbFxyXG5sZXQgYWRkUXVlc3RCdXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRRdWVzdEJ1dHRvblwiKVxyXG5hZGRRdWVzdEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICBpZiAoIXJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpKSB7XHJcbiAgICAgICAgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghY3JlYXRlUXVlc3RQYXJhbGxheCgpKSB7XHJcbiAgICAgICAgY3JlYXRlUXVlc3RQYXJhbGxheCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIGxldCB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgeC5hcHBlbmRDaGlsZChjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpKTtcclxuICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlR2hvc3RDYXJkKCkpO1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxufSlcclxuXHJcbmxldCBhZGRHb2FsQnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkR29hbEJ1dHRvblwiKVxyXG5hZGRHb2FsQnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICB3aGlsZSAoaW5kZXhQYWdlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBpbmRleFBhZ2UucmVtb3ZlQ2hpbGQoaW5kZXhQYWdlLmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyR29hbENyZWF0aW9uUGFnZSgpO1xyXG5cclxufSlcclxuXHJcblxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0V2VhcG9uSW1hZ2UsIGdldEFybW91ckltYWdlLCBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwgZnJvbSBcIi4vbW9kYWxFbGVtZW50cy9pdGVtQ2FyZE1vZGFsXCI7XHJcblxyXG5jb25zdCBpbnZlbnRvcnlQYWdlUGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQ29udGVudFwiKTtcclxuY29uc3QgaW52ZW50b3J5UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmludmVudG9yeVBhZ2UuY2xhc3NMaXN0LmFkZChcImludmVudG9yeVBhZ2VcIilcclxuXHJcbmNvbnN0IHJhcml0eUNvbG9ycyA9IHtcclxuICAgIG5vcm1hbDogXCJyZ2IoMjExLCAyMTEsIDIxMSwgMC44KVwiLFxyXG4gICAgdW5jb21tb246IFwicmdiKDAsIDEyOCwgMCwgMC44KVwiLFxyXG4gICAgcmFyZTogXCJyZ2IoMzAsIDMwLCAyNTUsIDAuOClcIixcclxuICAgIGVwaWM6IFwicmdiKDE2MCwgMzIsIDI0MCwgMC44KVwiLFxyXG4gICAgbGVnZW5kYXJ5OiBcInJnYigyNTUsIDE2NSwgMC44KVwiLFxyXG4gICAgfTsgIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmVudG9yeVBhZ2UgKGludmVudG9yeSkge1xyXG5cclxuICAgIGludmVudG9yeVBhZ2VQYXJlbnQuYXBwZW5kQ2hpbGQoaW52ZW50b3J5UGFnZSlcclxuXHJcbiAgICAgICAgLy8gQ29kZSB0byBnZW5lcmF0ZSBlYWNoIGludmVudG9yeSByb3dcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkgKyspIHtcclxuICAgICAgICAgICAgbGV0IGludmVudG9yeUl0ZW1Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtUm93XCIpO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpbnZlbnRvcnlJdGVtUm93LSR7aSsxfWApO1xyXG4gICAgICAgICAgICBpbnZlbnRvcnlQYWdlLmFwcGVuZENoaWxkKGludmVudG9yeUl0ZW1Sb3cpXHJcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gKGkgKiA1KTtcclxuICAgIFxyXG4gICAgICAgICAgICAvLyBDb2RlIHRvIGdlbmVyYXRlIGVhY2ggaW5kZXggaW4gZWFjaCBpbnZlbnRvcnkgcm93XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW52ZW50b3J5SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtXCIpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjb3VudGVyICsgaiArIDF9YCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSAoY291bnRlciArIGopXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUl0ZW1DYXJkTW9kYWwoZS50YXJnZXQsIGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiNHB4IHNvbGlkIHllbGxvd1wiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbVJvdy5hcHBlbmRDaGlsZChpbnZlbnRvcnlJdGVtQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm5cclxufVxyXG5cclxuLy8gVGhpcyBpcyBzZXBhcmF0ZSBmcm9tIGludmVudG9yeSBhbmQgb25seSBnZW5lcmF0ZXMgdGhlIGNvbnRhaW5lciBmb3IgaW52ZW50b3J5IGl0ZW1zXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVJbnZlbnRvcnlQYWdlIChpbnZlbnRvcnkpIHtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtID0gMDsgaXRlbSA8IGludmVudG9yeS5sZW5ndGg7IGl0ZW0rKykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudG9yeVtpdGVtXSk7XHJcbiAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW52ZW50b3J5SXRlbScpW2l0ZW1dO1xyXG4gICAgICAgIGxldCBpdGVtU3ByaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtU3ByaXRlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnlJdGVtU3ByaXRlXCIpO1xyXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbVNwcml0ZSk7XHJcbiAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGdldFdlYXBvbkltYWdlKGludmVudG9yeVtpdGVtXS5fdHlwZS5yZXBsYWNlKC9cXHMvZywgJycpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtSW1hZ2UpXHJcbiAgICAgICAgaXRlbVNwcml0ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2l0ZW1JbWFnZX0nKWBcclxuICAgICAgICBpdGVtU3ByaXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJhcml0eUNvbG9yc1tpbnZlbnRvcnlbaXRlbV0uX3Jhcml0eV07XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaW52ZW50b3J5W2l0ZW1dO1xyXG4gICAgICAgIH1cclxuICAgICl9O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVudG9yeUV2ZW50SGFuZGxlcihpbnZlbnRvcnkpIHtcclxuICAgIGlmIChpbnZlbnRvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgICAgICB1cGRhdGVJbnZlbnRvcnlQYWdlKGludmVudG9yeSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNyZWF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgIH1cclxuICB9XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGtleSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgSlNPTiBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIGZvciBrZXkgJyR7a2V5fSc6YCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHsgZ2V0V2VhcG9uSW1hZ2UsIGdldEFybW91ckltYWdlLCBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlIH0gZnJvbSBcIi4uL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuaW1wb3J0IHsgY2FsY1dlYXBvblNjb3JlIH0gZnJvbSBcIi4uL3BsYXllckNoYXJhY3RlckZ1bmN0aW9uc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGlkZUludmVudG9yeU1vZGFsKGUpIHtcclxuICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgaW52ZW50b3J5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW52ZW50b3J5TW9kYWwucmVtb3ZlKCk7XHJcbiAgfVxyXG5cclxuICBcclxuZnVuY3Rpb24gY3JlYXRlSXRlbUNhcmRNb2RhbChlLCBpdGVtKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coY2FsY1dlYXBvblNjb3JlKGl0ZW0pKVxyXG4gICAgICAgIFxyXG5jb25zdCByYXJpdHlDb2xvcnMgPSB7XHJcbiAgICBub3JtYWw6IFwicmdiKDIxMSwgMjExLCAyMTEpXCIsXHJcbiAgICB1bmNvbW1vbjogXCJyZ2IoMCwgMTI4LCAwKVwiLFxyXG4gICAgcmFyZTogXCJyZ2IoMzAsIDMwLCAyNTUpXCIsXHJcbiAgICBlcGljOiBcInJnYigxNjAsIDMyLCAyNDApXCIsXHJcbiAgICBsZWdlbmRhcnk6IFwicmdiKDI1NSwgMTY1LCAwKVwiLFxyXG4gICAgfTtcclxuXHJcbmNvbnN0IGl0ZW1TdGF0c1RvcEhhbGYgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJFbGVtZW50XCIsXHJcbiAgICAgICAgaWQ6IFwiZWxlbWVudFwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9lbGVtZW50LFxyXG4gICAgICAgIGljb246IGdldEVsZW1lbnRJbWFnZShpdGVtLl9lbGVtZW50KVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJhcml0eVwiLFxyXG4gICAgICAgIGlkOiBcInJhcml0eVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9yYXJpdHlcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJIZXJvIFNjb3JlXCIsXHJcbiAgICAgICAgaWQ6IFwiaGVyb1Njb3JlXCIsXHJcbiAgICAgICAgdmFsdWU6IGNhbGNXZWFwb25TY29yZShpdGVtKVxyXG4gICAgfVxyXG5dXHJcblxyXG5jb25zdCBpdGVtU3RhdHNCb3R0b21IYWxmPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJJdGVtIFR5cGVcIixcclxuICAgICAgICBpZDogXCJpdGVtVHlwZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl90eXBlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiV2VhcG9uIERhbWFnZVwiLFxyXG4gICAgICAgIGlkOiBcImRhbWFnZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5kYW1hZ2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDcml0aWNhbCBDaGFuY2VcIixcclxuICAgICAgICBpZDogXCJjcml0Q2hhbmNlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNyaXRDaGFuY2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDcml0aWNhbCBEYW1hZ2VcIixcclxuICAgICAgICBpZDogXCJjcml0RGFtYWdlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmNyaXREYW1hZ2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDb25zdGl0dXRpb25cIixcclxuICAgICAgICBpZDogXCJjb25zdGl0dXRpb25cIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY29uc3RpdHV0aW9uXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiRGV4dGVyaXR5XCIsXHJcbiAgICAgICAgaWQ6IFwiZGV4dGVyaXR5XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmRleHRlcml0eVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkludGVsbGlnZW5jZVwiLFxyXG4gICAgICAgIGlkOiBcImludGVsbGlnZW5jZVwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5pbnRlbGxpZ2VuY2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJTdHJlbmd0aFwiLFxyXG4gICAgICAgIGlkOiBcInN0cmVuZ3RoXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLnN0cmVuZ3RoXHJcbiAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgXHJcblxyXG4gICAgXHJcbiAgICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWwuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbFwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1jb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRDb250ZW50XCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkVG9wSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRUb3BIYWxmXCIpO1xyXG4gICAgICBjb25zdCBpdGVtQ2FyZEJvdHRvbUhhbGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZEJvdHRvbUhhbGYuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQm90dG9tSGFsZlwiKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IHN0YXQgb2YgaXRlbVN0YXRzQm90dG9tSGFsZikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmlkID0gc3RhdC5pZDtcclxuICAgICAgICAvLyBpdGVtQ2FyZFN0YXRDb250YWluZXIuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCI6IFwiICsgc3RhdC52YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBpdGVtQ2FyZEJvdHRvbUhhbGYuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyKVxyXG4gICAgICAgIGNvbnN0IHN0YXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdE5hbWUuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCIgOlxcdTAwQTBcIlxyXG4gICAgICAgIHN0YXROYW1lLnN0eWxlLmNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IChzdGF0LnZhbHVlKTtcclxuICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0TmFtZSk7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXRWYWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkQm90dG9tSGFsZi5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1pbWFnZS1jb250YWluZXJcIilcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0taW1hZ2VcIik7XHJcbiAgICAgIGxldCBpdGVtSW1hZ2UgPSBlLnN0eWxlLmJhY2tncm91bmRJbWFnZTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2Uuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaXRlbUltYWdlO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZSk7XHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbVN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLXN0YXRzXCIpO1xyXG4gICAgXHJcbiAgICAgIC8vIGNvbnN0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAvLyBlbGVtZW50Q29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlfScpYFxyXG4gICAgICAvLyBlbGVtZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZENvbnRhaW5lclwiKTtcclxuICAgIFxyXG4gICAgICBmb3IgKGNvbnN0IHN0YXQgb2YgaXRlbVN0YXRzVG9wSGFsZikge1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuaWQgPSBzdGF0LmlkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgc3RhdE5hbWUuaW5uZXJUZXh0ID0gc3RhdC5uYW1lICsgXCI6XFx1MDBBMFwiO1xyXG4gICAgICAgIHN0YXROYW1lLnN0eWxlLmNvbG9yID0gXCJ5ZWxsb3dcIjtcclxuICAgIFxyXG4gICAgICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcclxuICAgICAgICAgIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHN0YXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGlmIChzdGF0Lm5hbWUgPT0gXCJSYXJpdHlcIikge1xyXG4gICAgICAgICAgbGV0IHJhcml0eU5hbWUgPSBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RhdC52YWx1ZSlcclxuICAgICAgICAgIHN0YXRWYWx1ZS5pbm5lclRleHQgPSByYXJpdHlOYW1lO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmNvbG9yID0gcmFyaXR5Q29sb3JzW2l0ZW0uX3Jhcml0eV07XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuZm9udFdlaWdodCA9IDgwMDtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXQubmFtZSA9PSBcIkhlcm8gU2NvcmVcIikge1xyXG4gICAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IFwiK1wiICsgc3RhdC52YWx1ZTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5mb250U2l6ZSA9IFwiMzJweFwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3JjID0gc3RhdC5pY29uO1xyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zdHlsZS52ZXJ0aWNhbEFsaWduID0gXCJtaWRkbGVcIjsgLy8gQWxpZ24gdGhlIGltYWdlIHZlcnRpY2FsbHkgaW4gbGluZSB3aXRoIHRoZSB0ZXh0XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjEwcHhcIjsgLy8gQWRkIG1hcmdpbiBiZXR3ZWVuIHRoZSB0ZXh0IGFuZCBpbWFnZVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgLy8gRW5hYmxlIGZsZXhib3ggbGF5b3V0XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiOyAvLyBBbGlnbiBpdGVtcyB2ZXJ0aWNhbGx5IGluIHRoZSBjZW50ZXJcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoc3RhdC52YWx1ZSkpO1xyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SWNvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgc3RhdFZhbHVlLmFwcGVuZENoaWxkKHZhbHVlQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmFwcGVuZENoaWxkKHN0YXROYW1lKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmFwcGVuZENoaWxkKHN0YXRWYWx1ZSk7XHJcbiAgICAgIFxyXG4gICAgICAgIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYpO1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICBjbG9zZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LWNsb3NlXCIpO1xyXG4gICAgICBjbG9zZUJ0bi5pbm5lclRleHQgPSBcIlhcIjtcclxuICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBoaWRlSW52ZW50b3J5TW9kYWwoZSkgXHJcbiAgICAgIH0pXHJcbiAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IFwiTW9kYWwgVGl0bGVcIjtcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudFRleHQudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgdGhlIGludmVudG9yeSBtb2RhbCBjb250ZW50LlwiO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZUJ0bik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbFRpdGxlKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkQ29udGVudCk7XHJcbiAgICBcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkVG9wSGFsZik7XHJcbiAgICAgIGl0ZW1DYXJkQ29udGVudC5hcHBlbmRDaGlsZChpdGVtQ2FyZEJvdHRvbUhhbGYpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIpO1xyXG4gICAgICBpdGVtQ2FyZFRvcEhhbGYuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMpO1xyXG4gICAgXHJcbiAgICAgIC8vIGludmVudG9yeU1vZGFsSXRlbVN0YXRzLmFwcGVuZENoaWxkKGVsZW1lbnRDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbENvbnRlbnRUZXh0KTtcclxuICAgIFxyXG4gICAgICBpbnZlbnRvcnlNb2RhbC5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbENvbnRlbnQpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4gaW52ZW50b3J5TW9kYWw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlSXRlbUNhcmRNb2RhbChlLCBpbnZlbnRvcnkpIHtcclxuICAgIGNvbnN0IGludmVudG9yeU1vZGFsID0gY3JlYXRlSXRlbUNhcmRNb2RhbChlLCBpbnZlbnRvcnkpO1xyXG4gICAgaW52ZW50b3J5TW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb3JtTW9kYWwgKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XHJcblxyXG4gICAgLy8gRGlzcGxheSBtb2RhbCBieSBzZXR0aW5nIGRpc3BsYXkgdG8gYmxvY2tcclxuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gXHJcbiAgICB9XHJcbiBcclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybU1vZGFsIChldmVudCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XHJcblxyXG4gICAgLy8gSGlkZSBtb2RhbCBieSBzZXR0aW5nIGRpc3BsYXkgdG8gbm9uZVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGNIZXJvU2NvcmUgKHBsYXllckNoYXJhY3Rlcikge1xyXG4gICAgbGV0IGhlcm9TY29yZSA9IDA7XHJcblxyXG4gICAgLy8gQmFzZSBzdGF0cyBjYWxjXHJcbiAgICBsZXQgaW5oZXJlbnRTdHJlbmd0aCA9IHBsYXllckNoYXJhY3Rlci5fc3RhdHMuZ2V0U3RhdChcInN0cmVuZ3RoXCIpO1xyXG4gICAgbGV0IGluaGVyZW50SW50ZWxsaWdlbmNlID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiaW50ZWxsaWdlbmNlXCIpO1xyXG4gICAgbGV0IGluaGVyZW50RGV4dGVyaXR5ID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiZGV4dGVyaXR5XCIpO1xyXG4gICAgbGV0IGluaGVyZW50Q29uc3RpdHV0aW9uID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwiY29uc3RpdHV0aW9uXCIpO1xyXG5cclxuICAgIC8vIFdlYXBvbiBTdGF0cyBDYWxjXHJcbiAgICBsZXQgd2VhcG9uU3RyZW5ndGggPSAwO1xyXG4gICAgbGV0IHdlYXBvbkludGVsbGlnZW5jZSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uRGV4dGVyaXR5ID0gMDtcclxuICAgIGxldCB3ZWFwb25Db25zdGl0dXRpb24gPSAwO1xyXG4gICAgbGV0IGVxdWlwbWVudFN0YXQgPSAwO1xyXG4gICBcclxuICAgIGZvciAobGV0IHdlYXBvbkluZGV4ID0gMDsgd2VhcG9uSW5kZXggPCBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXMubGVuZ3RoOyB3ZWFwb25JbmRleCsrKSB7XHJcbiAgICAgICAgd2VhcG9uU3RyZW5ndGggKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuc3RyZW5ndGg7XHJcbiAgICAgICAgd2VhcG9uSW50ZWxsaWdlbmNlICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmludGVsbGlnZW5jZTtcclxuICAgICAgICB3ZWFwb25EZXh0ZXJpdHkgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgICAgIHdlYXBvbkNvbnN0aXR1dGlvbiArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jb25zdGl0dXRpb247XHJcbiAgICAgICAgbGV0IHdlYXBvbkNyaXRDaGFuY2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jcml0Q2hhbmNlO1xyXG4gICAgICAgIGxldCB3ZWFwb25Dcml0RGFtYWdlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuY3JpdERhbWFnZTtcclxuICAgICAgICBsZXQgd2VhcG9uRGFtYWdlID0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuZGFtYWdlO1xyXG4gICAgICAgIGVxdWlwbWVudFN0YXQgKz0gKHdlYXBvbkRhbWFnZSArICh3ZWFwb25EYW1hZ2UgKiB3ZWFwb25Dcml0Q2hhbmNlICogd2VhcG9uQ3JpdERhbWFnZSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBUb3RhbCBTdGF0c1xyXG5cclxuICAgIGxldCB0b3RhbFN0cmVuZ3RoID0gaW5oZXJlbnRTdHJlbmd0aCArIHdlYXBvblN0cmVuZ3RoO1xyXG4gICAgbGV0IHRvdGFsSW50ZWxsaWdlbmNlID0gaW5oZXJlbnRJbnRlbGxpZ2VuY2UgKyB3ZWFwb25JbnRlbGxpZ2VuY2U7XHJcbiAgICBsZXQgdG90YWxEZXh0ZXJpdHkgPSBpbmhlcmVudERleHRlcml0eSArIHdlYXBvbkRleHRlcml0eTtcclxuICAgIGxldCB0b3RhbENvbnN0aXR1dGlvbiA9IGluaGVyZW50Q29uc3RpdHV0aW9uICsgd2VhcG9uQ29uc3RpdHV0aW9uO1xyXG5cclxuICAgIHN3aXRjaChwbGF5ZXJDaGFyYWN0ZXIuaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICB0b3RhbFN0cmVuZ3RoICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICAgIHRvdGFsSW50ZWxsaWdlbmNlICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICAgIHRvdGFsRGV4dGVyaXR5ICo9IDI7XHJcbiAgICAgICAgY2FzZSBcIlByaWVzdFwiOlxyXG4gICAgICAgICAgICB0b3RhbENvbnN0aXR1dGlvbiAqPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIGhlcm9TY29yZSArPSAodG90YWxTdHJlbmd0aCArIHRvdGFsSW50ZWxsaWdlbmNlICsgdG90YWxEZXh0ZXJpdHkgKyB0b3RhbENvbnN0aXR1dGlvbiArIGVxdWlwbWVudFN0YXQpXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gaGVyb1Njb3JlLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjV2VhcG9uU2NvcmUgKHdlYXBvbikge1xyXG4gICAgXHJcbiAgICBsZXQgdG90YWxXZWFwb25TY29yZSA9IDA7IFxyXG5cclxuICAgIGxldCB3ZWFwb25TdHJlbmd0aCA9IDA7XHJcbiAgICBsZXQgd2VhcG9uSW50ZWxsaWdlbmNlID0gMDtcclxuICAgIGxldCB3ZWFwb25EZXh0ZXJpdHkgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IDA7XHJcbiAgICBsZXQgZXF1aXBtZW50U3RhdCA9IDA7XHJcblxyXG4gICAgXHJcbiAgICB3ZWFwb25TdHJlbmd0aCArPSB3ZWFwb24uX3N0YXRzLnN0cmVuZ3RoO1xyXG4gICAgd2VhcG9uSW50ZWxsaWdlbmNlICs9IHdlYXBvbi5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgd2VhcG9uRGV4dGVyaXR5ICs9IHdlYXBvbi5fc3RhdHMuZGV4dGVyaXR5O1xyXG4gICAgd2VhcG9uQ29uc3RpdHV0aW9uICs9IHdlYXBvbi5fc3RhdHMuY29uc3RpdHV0aW9uO1xyXG4gICAgbGV0IHdlYXBvbkNyaXRDaGFuY2UgPSB3ZWFwb24uX3N0YXRzLmNyaXRDaGFuY2U7XHJcbiAgICBsZXQgd2VhcG9uQ3JpdERhbWFnZSA9IHdlYXBvbi5fc3RhdHMuY3JpdERhbWFnZTtcclxuICAgIGxldCB3ZWFwb25EYW1hZ2UgPSB3ZWFwb24uX3N0YXRzLmRhbWFnZTtcclxuICAgIGVxdWlwbWVudFN0YXQgKz0gKHdlYXBvbkRhbWFnZSArICh3ZWFwb25EYW1hZ2UgKiB3ZWFwb25Dcml0Q2hhbmNlICogd2VhcG9uQ3JpdERhbWFnZSkpO1xyXG5cclxuICAgIHRvdGFsV2VhcG9uU2NvcmUgPSAod2VhcG9uU3RyZW5ndGggKyB3ZWFwb25JbnRlbGxpZ2VuY2UgKyB3ZWFwb25EZXh0ZXJpdHkgKyB3ZWFwb25Db25zdGl0dXRpb24gKyBlcXVpcG1lbnRTdGF0KVxyXG5cclxuICAgIHJldHVybiB0b3RhbFdlYXBvblNjb3JlLnRvRml4ZWQoMik7XHJcblxyXG59XHJcbiAgICBcclxuIiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzL2NsYXNzZXMuanMnXHJcbmltcG9ydCB7IHJld2FyZFV0aWxpdGllcywgY3VycmVuY3lBZ2dyZWdhdG9yLCBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3RMaXN0IH0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlUXVlc3RQYXJhbGxheCwgY3JlYXRlUXVlc3RDb250YWluZXIsIHF1ZXN0Q29udHJvbGxlciwgcmVtb3ZlRW1wdHlTdGF0ZSwgc2hvd0VtcHR5UXVlc3RzU3RhdGUgfSBmcm9tICcuL2luZGV4Vmlld0Z1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1F1ZXN0IChjYXJkKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsLCBudWxsLCBudWxsLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNvYmplY3RpdmVUZXh0SW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdERhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVuY3lUeXBlSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW5jeUFtb3VudElucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0VGltZVNwZW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0VGltZVZhbHVlXCIpLnZhbHVlXHJcbiAgICBsZXQgZ2V0UXVlc3RUaW1lVHlwZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdFRpbWVUeXBlXCIpLnZhbHVlXHJcbiAgICBsZXQgdGltZUZyYW1lU3RhcnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RTdGFydFRpbWVcIikudmFsdWVcclxuICAgIGxldCB0aW1lRnJhbWVFbmQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RFbmRUaW1lXCIpLnZhbHVlXHJcblxyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcbiAgICBxdWVzdE9iamVjdC5vbmVPZmZCb29sID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5nb2FsSWQgPSBudWxsO1xyXG4gICAgcXVlc3RPYmplY3QudGltZVNwZW50ID0gZ2V0UXVlc3RUaW1lU3BlbnQ7XHJcbiAgICBxdWVzdE9iamVjdC50aW1lVHlwZSA9IGdldFF1ZXN0VGltZVR5cGU7XHJcblxyXG4gICBcclxuXHJcbiAgICAgXHJcbiAgICBpZiAodGltZUZyYW1lU3RhcnQgPT0gbnVsbCB8fCB0aW1lRnJhbWVTdGFydCA9PSB1bmRlZmluZWQgfHwgdGltZUZyYW1lU3RhcnQgPT0gXCJcIiB8fFxyXG4gICAgICAgIHRpbWVGcmFtZUVuZCA9PSBudWxsIHx8IHRpbWVGcmFtZUVuZCA9PSB1bmRlZmluZWQgfHwgdGltZUZyYW1lRW5kID09IFwiXCIpIHtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVTdGFydCA9IG51bGw7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lRW5kID0gbnVsbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhxdWVzdE9iamVjdC50aW1lRnJhbWVTdGFydClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlc3RPYmplY3QudGltZUZyYW1lU3RhcnQgPSB0aW1lRnJhbWVTdGFydDtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVFbmQgPSB0aW1lRnJhbWVFbmQ7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gcXVlc3RPYmplY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlUXVlc3RTdWJtaXNzaW9uIChuZXdRdWVzdCkge1xyXG4gICAgXHJcbiAgICBsZXQgdmFsaWRDcml0ZXJpYSA9IHRydWU7XHJcblxyXG4gICAgaWYgKCFuZXdRdWVzdC5vYmplY3RpdmUpIHtcclxuICAgICAgICBhbGVydChcIlF1ZXN0IE9iamVjdGl2ZSBSZXF1aXJlZCFcIilcclxuICAgICAgICB2YWxpZENyaXRlcmlhID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFuZXdRdWVzdC5kYXRlVG9Db21wbGV0ZSkge1xyXG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBEYXRlIVwiKVxyXG4gICAgICAgIHZhbGlkQ3JpdGVyaWEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJbnZhbGlkIEN1cnJlbmN5IEFtb3VudDpcclxuICAgIGlmICghbmV3UXVlc3QucmV3YXJkLmFtb3VudCkge1xyXG4gICAgICAgIGFsZXJ0KFwiQ3VycmVuY3kgQW1vdW50IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAhXCIpO1xyXG4gICAgICAgIHZhbGlkQ3JpdGVyaWEgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHZhbGlkQ3JpdGVyaWE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHaG9zdENhcmQoKSB7XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJnaG9zdENhcmRcIik7XHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgY29uc3QgY3JlYXRlTmV3UXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFF1ZXN0QnV0dG9uXCIpO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJDYW5ub3QgbWFrZSBhIG5ldyBxdWVzdCB1bnRpbCB5b3UgaGF2ZSBzdWJtaXR0ZWQgeW91ciBmaXJzdCBxdWVzdCBPUiB5b3VyIGN1cnJlbnQgcXVlc3QgbGlzdCBpcyBncmVhdGVyIHRoYW4gMCFcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICBsZXQgZ2hvc3RDYXJkID0gdGhpcy5wYXJlbnROb2RlO1xyXG4gICAgICAgIGxldCBuZXdRdWVzdENhcmQgPSBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHF1ZXN0UGFyYWxsYXguaW5zZXJ0QmVmb3JlKG5ld1F1ZXN0Q2FyZCwgZ2hvc3RDYXJkKTtcclxuICAgIH0pO1xyXG4gICAgY3JlYXRlTmV3UXVlc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJBZGQgUXVlc3QgK1wiO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChjcmVhdGVOZXdRdWVzdEJ1dHRvbik7XHJcblxyXG4gICAgLy8gQWRkIGhvdmVyIGV2ZW50IGxpc3RlbmVycyB0byB0b2dnbGUgb3BhY2l0eVxyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSAoKSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlDYXJkXCIpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCBDb250ZW50XHJcbiAgICBsZXQgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY2FyZENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImVtcHR5Q2FyZENvbnRlbnRcIik7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRDb250ZW50KTtcclxuXHJcbiAgICAvLyAxLiBTdWJtaXQgYnV0dG9uIENPTlRBSU5FUiBjb250ZW50XHJcbiAgICBsZXQgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Ym1pdE5ld1F1ZXN0QnV0dG9uQ29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDFhKSBTdWJtaXQgTmV3IFF1ZXN0IEJ1dHRvblxyXG4gICAgICAgIGNvbnN0IHN1bWJpdE5ld1F1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3VibWl0TmV3UXVlc3RCdXR0b25cIik7XHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IGdldE5ld1F1ZXN0KGNhcmQpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVRdWVzdFN1Ym1pc3Npb24oeCkpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaCh4KTtcclxuICAgICAgICAgICAgICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyUXVlc3RMaXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFBhcmFsbGF4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XHJcbiAgICAgICAgc3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoc3VtYml0TmV3UXVlc3RCdXR0b24pO1xyXG5cclxuXHJcbiAgICAvLyAyLiBPYmplY3RpdmUgQ09OVEFJTkVSIGNvbnRlbnQgLSBpbmNsdWRlcyB1c2VyIG9iamVjdGl2ZSB0ZXh0dWFsIGlucHV0IGFuZCB0aW1lIGlucHV0c1xyXG4gICAgbGV0IG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlQ29udGVudENvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDJhKSBPYmplY3RpdmUgVGV4dCBJbnB1dCBDb250YWluZXJcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lclwiKTtcclxuICAgICAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgICAgIC8vIDJhKSAtIE9iamVjdGl2ZSBUZXh0IFxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkRlZmluZSB5b3VyIHF1ZXN0IGhlcmUuLi5cIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCI3MFwiKTsgLy8gU2V0IGNoYXJhY3RlciBsaW1pdCB0byA3MFxyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJvYmplY3RpdmVUZXh0SW5wdXRcIik7IFxyXG4gICAgICAgICAgICBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dElucHV0KTtcclxuICAgIFxyXG5cclxuICAgICAgICAvLyAyYikgT2JqZWN0aXZlIFRpbWVmcmFtZSBFbGVtZW50cyBDb250YWluZXJcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lclwiKTtcclxuICAgICAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGkpIE9iamVjdGl2ZSBUaW1lZnJhbWUgTGFiZWwgQ29udGFpbmVyXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpKSAxLiAtIElucHV0IERhdGUgbGFiZWxcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dERhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3REYXRlTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGU6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RGF0ZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgMmIpIGkpIDIuIC0gSW5wdXQgU3RhcnQgVGltZSAoT3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRTdGFydFRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0YXJ0VGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0U3RhcnRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0YXJ0VGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RTdGFydFRpbWVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdTdGFydCBUaW1lIChPcHRpb25hbCk6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0U3RhcnRUaW1lTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAyYikgaSkgMy4gLSBJbnB1dCBFbmQgVGltZSAoT3B0aW9uYWwpXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXRFbmRUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRFbmRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RFbmRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0RW5kVGltZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdFbmQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVuZFRpbWVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0VGltZVR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVUeXBlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RUaW1lVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RUaW1lVHlwZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVUeXBlTGFiZWwudGV4dENvbnRlbnQgPSAnVGltZSBTcGVudCBUeXBlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdFRpbWVUeXBlTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFRpbWVWYWx1ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVZhbHVlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RUaW1lVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVZhbHVlTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdFRpbWVWYWx1ZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVWYWx1ZUxhYmVsLnRleHRDb250ZW50ID0gJ1RpbWUgU3BlbnQgVmFsdWU6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0VGltZVZhbHVlTGFiZWwpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIDJiKSBpaSkgT2JqZWN0aXZlIFRpbWVmcmFtZSBJbnB1dCBDb250YWluZXJcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgb2JqZWN0aXZlIHRpbWUgZnJhbWUgaW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0RGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ3F1ZXN0RGF0ZSc7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgbWluaW11bSBkYXRlIHRvIHRvZGF5XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgc3RhcnQgdGltZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdFN0YXJ0VGltZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuaWQgPSAncXVlc3RTdGFydFRpbWUnO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRUaW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIDJiKSBpaSkgLSBDcmVhdGUgZW5kIHRpbWUgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RpbWUnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RFbmRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBlbmRUaW1lSW5wdXQuaWQgPSAncXVlc3RFbmRUaW1lJztcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbmRUaW1lSW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSB0aW1lIHNwZW50IHVuaXQgc2VsZWN0IGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3BlbnRUeXBlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RUaW1lVHlwZScpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmlkID0gJ3F1ZXN0VGltZVR5cGUnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAxOiBIb3Vyc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaG91cnNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGhvdXJzT3B0aW9uLnZhbHVlID0gJ2hvdXJzJztcclxuICAgICAgICAgICAgICAgIGhvdXJzT3B0aW9uLnRleHRDb250ZW50ID0gJ0hvdXJzJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChob3Vyc09wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uIDI6IE1pbnV0ZXNcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXNPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXNPcHRpb24udmFsdWUgPSAnbWludXRlcyc7XHJcbiAgICAgICAgICAgICAgICBtaW51dGVzT3B0aW9uLnRleHRDb250ZW50ID0gJ01pbnV0ZXMnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFwcGVuZENoaWxkKG1pbnV0ZXNPcHRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbiAzOiBObyBzcGVjaWZpYyB0aW1lZnJhbWVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZsZXhpYmxlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBmbGV4aWJsZU9wdGlvbi52YWx1ZSA9ICdOL0EnO1xyXG4gICAgICAgICAgICAgICAgZmxleGlibGVPcHRpb24udGV4dENvbnRlbnQgPSAnTi9BJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hcHBlbmRDaGlsZChmbGV4aWJsZU9wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudFR5cGVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSB0aW1lIHNwZW50IGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lU3BlbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RUaW1lVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmlkID0gJ3F1ZXN0VGltZVZhbHVlJztcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQubWluID0gMTsgLy8gU2V0IHRoZSBtaW5pbXVtIHZhbHVlIHRvIDBcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpOyAvLyBEaXNhYmxlIGF1dG9jb21wbGV0ZSBmb3IgbnVtZXJpYyBpbnB1dFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudElucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gZGlzYWJsZSB0aW1lU3BlbnRJbnB1dCB3aGVuIFwiTi9BXCIgb3B0aW9uIGlzIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRpbWVTcGVudFR5cGVJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5kaXNhYmxlZCA9IChzZWxlY3RlZFZhbHVlID09PSAnTi9BJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdOL0EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQudmFsdWUgPSAnJzsgLy8gQ2xlYXIgdGhlIHZhbHVlIGlmIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB2YWxpZGF0ZSB0aGUgaW5wdXQgYXMgYSBwb3NpdGl2ZSBpbnRlZ2VyXHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGltZVNwZW50SW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7IC8vIFJlbW92ZSBhbGwgbm9uLW51bWVyaWMgY2hhcmFjdGVyc1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnZhbHVlID0gbnVtZXJpY1ZhbHVlOyAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlIHRvIG51bWVyaWMtb25seSB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lU3BlbnRJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAvLyAzLiBSZXdhcmQgQ09OVEFJTkVSIGNvbnRlbnQgLSBpbmNsdWRlcyB1c2VyIHJld2FyZCB0eXBlIGlucHV0IGFuZCByZXdhcmQgYW1vdW50IGlucHV0XHJcbiAgICBsZXQgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQocmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAzYSkgUmV3YXJkIEJveCBQYXJlbnQgRWxlbWVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94SW5wdXRcIik7XHJcbiAgICAgICAgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgICAgICAvLyAzYSkgLSBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7ICAgICAgICAgXHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuXHJcbiAgICAgICAgICAgIC8vIDNhKSAtIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBJbnB1dHMgLSBDdXJyZW5jeSBUeXBlXHJcbiAgICAgICAgbGV0IHJld2FyZFR5cGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZExhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dExhYmVsLnRleHRDb250ZW50ID0gJ0N1cnJlbmN5IFR5cGUnO1xyXG4gICAgICAgIGxldCByZXdhcmRUeXBlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZXdhcmRUeXBlSW5wdXRcIilcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkRm9ybVwiKTtcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW5jeVR5cGVJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRUeXBlSW5wdXRMYWJlbCk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZFR5cGVJbnB1dCk7XHJcbiBcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIFR5cGUgLSBPcHRpb25zIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBiYXNlZCBvbiB0aGUgcmV3YXJkIHV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXMgb2JqZWN0IGxpc3RcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llc1tpXSlcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCByZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKTtcclxuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7cmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llc1tpXX1gO1xyXG4gICAgICAgICAgICByZXdhcmRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBJbnB1dHMgLSBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICBsZXQgcmV3YXJkQW1vdW50SW5wdXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJMYWJlbFwiKTtcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZExhYmVsXCIpO1xyXG4gICAgICAgIGxldCByZXdhcmRBbW91bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgQW1vdW50JztcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmV3YXJkQW1vdW50SW5wdXRcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiMTAwMDBcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjBcIik7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW5jeUFtb3VudElucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEFtb3VudElucHV0TGFiZWwpO1xyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRBbW91bnRJbnB1dCk7XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBBbW91bnQgLSBDb25zdHJhaW50IHRvIGZpdCBhdmFpbGFibGUgY3VycmVuY3kgYWxsb2NhdGlvblxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPiAxMDAwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlRoaXMgdmFsdWUgY2Fubm90IGV4Y2VlZCB0aGUgbWF4aW11bSBvZjogMTAwMDBcIilcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDEwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgLy8gNC4gUmVtb3ZlIGN1cnJlbnQgY2FyZCBjb250YWluZXJcclxuICAgIGxldCByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gNGEpIENsb3NlIEJ1dHRvblxyXG4gICAgICAgIGxldCByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uXCIpXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24udGV4dENvbnRlbnQgPSAnXFx1MDBENyc7IC8vIFNldCB0aGUgbXVsdGlwbGljYXRpb24gc2lnbiBhcyB0ZXh0IGNvbnRlbnRcclxuXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0IDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpXHJcbiAgICAgICAgICAgICAgICBsZXQgZ2hvc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naG9zdENhcmRcIik7XHJcbiAgICAgICAgICAgICAgICBnaG9zdENhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFBhcmFsbGF4LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgc2hvd0VtcHR5UXVlc3RzU3RhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmVtb3ZlQ3VycmVudENhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b24pXHJcblxyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRUZW1wbGF0ZSAodHlwZSkge1xyXG4gXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcblxyXG4gICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgb2JqZWN0aXZlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVDb250ZW50Q29udGFpbmVyXCIpXHJcblxyXG4gICAgICAgIC8vIFF1ZXN0IE9iamVjdGl2ZSBUZXh0XHJcbiAgICAgICAgbGV0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRleHQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRleHRcIik7XHJcblxyXG4gICAgICAgIC8vIFF1ZXN0IE9iamVjdGl2ZSBUaW1lIENvbnRlbnRcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IGRvdE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG90T25lLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XHJcbiAgICAgICAgZG90T25lLmlkID0gXCJkb3RPbmVcIjtcclxuXHJcbiAgICAgICAgbGV0IGRvdFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZG90VHdvLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XHJcbiAgICAgICAgZG90VHdvLmlkID0gXCJkb3RUd29cIjtcclxuXHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVUZXh0LmlkID0gXCJkYXRlVG9Db21wbGV0ZVRleHRcIjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVTcGVudE9uUXVlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVTcGVudE9uUXVlc3QuaWQgPSBcInRpbWVTcGVudE9uUXVlc3RcIjtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVGcmFtZU9mUXVlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRpbWVGcmFtZU9mUXVlc3QuaWQgPSBcInRpbWVGcmFtZU9mUXVlc3RcIjtcclxuXHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlVGV4dCk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdE9uZSk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudE9uUXVlc3QpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb3RUd28pO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lRnJhbWVPZlF1ZXN0KTtcclxuXHJcblxyXG4gICAgLy8gIENoZWNrIEJveFxyXG4gICAgbGV0IGNvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgIC8vIGNvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiVHJ1ZVwiKVxyXG4gICAgLy8gfSlcclxuXHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja2JveCk7XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQ29udGVudCk7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpXHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lcilcclxuICAgXHJcblxyXG4gICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgIGxldCByZXdhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcblxyXG4gICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgICAgICAgICBcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuXHJcbiAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJxdWVzdFwiKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29udGVudFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7ICAgICAgIFxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBcImdvYWxcIikge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImdvYWxDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJnb2FsT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVDb250YWluZXJcIik7XHJcbiAgICAgICAgY29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBHb2FsIENvbXBsZXRlXCI7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lXCIpOyAgICAgICBcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ29hbFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkQW1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IG51bGwgfHwgdHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgVHlwZSFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXljYXJkQ29udGVudCAocXVlc3QsIGNhcmRFbGVtZW50LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVUZXh0XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmlubmVyVGV4dCA9IHF1ZXN0Lm9iamVjdGl2ZTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtxdWVzdC5vYmplY3RpdmV9YClcclxuICAgIFxyXG4gICAgICAgIGxldCBjaGVja2JveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgcXVlc3QucXVlc3RDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0KTtcclxuICAgICAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBxdWVzdCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICByZW1vdmVDb21wbGV0ZWRRdWVzdChjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRRdWVzdExpc3RcIiwgY3VycmVudFF1ZXN0TGlzdClcclxuICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKVxyXG4gICAgICAgICAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2hvc3RDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5naG9zdENhcmRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuICAgICAgICAgICAgICAgIGdob3N0Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0UGFyYWxsYXgucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93RW1wdHlRdWVzdHNTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgICAgICBsZXQgdGltZUNyaXRlcmlhQ29udGVudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlVGV4dCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVRvQ29tcGxldGVUZXh0XCIpO1xyXG4gICAgICAgIGxldCB0aW1lU3BlbnRPblF1ZXN0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lU3BlbnRPblF1ZXN0XCIpO1xyXG4gICAgICAgIGxldCB0aW1lRnJhbWVPZlF1ZXN0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aW1lRnJhbWVPZlF1ZXN0XCIpO1xyXG5cclxuICAgICAgICBsZXQgZG90VHdvID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3RUd29cIik7XHJcblxyXG4gICAgICAgIGlmIChxdWVzdC50aW1lRnJhbWVTdGFydCA9PSBudWxsIHx8IHF1ZXN0LnRpbWVGcmFtZUVuZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvdFR3by5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGltZUZyYW1lT2ZRdWVzdC5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChxdWVzdC50aW1lVHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVUZXh0LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LmRhdGVUb0NvbXBsZXRlfWApO1xyXG4gICAgICAgIHRpbWVTcGVudE9uUXVlc3QudGV4dENvbnRlbnQgPSAoYFRpbWUgUmVxdWlyZW1lbnQ6ICR7cXVlc3QudGltZVNwZW50fSAke2NhcGl0YWxpemVGaXJzdExldHRlcihxdWVzdC50aW1lVHlwZSl9YCk7XHJcbiAgICAgICAgdGltZUZyYW1lT2ZRdWVzdC50ZXh0Q29udGVudCA9IChgJHtxdWVzdC50aW1lRnJhbWVTdGFydH0gdG8gJHtxdWVzdC50aW1lRnJhbWVFbmR9YClcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtxdWVzdH0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShxdWVzdCkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtxdWVzdC5yZXdhcmQuYW1vdW50fSAke3F1ZXN0LnJld2FyZC50eXBlfWApO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5R29hbENhcmRDb250ZW50IChnb2FsLCBjYXJkRWxlbWVudCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICAvL0dvYWwgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgIGxldCBnb2FsT2JqZWN0aXZlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ2FyZFRleHRcIik7XHJcbiAgICBnb2FsT2JqZWN0aXZlLmlubmVyVGV4dCA9IGdvYWwub2JqZWN0aXZlO1xyXG4gICAgZ29hbE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtnb2FsLm9iamVjdGl2ZX1gKVxyXG5cclxuICAgIGxldCBjaGVja2JveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICBpZiAoY2hlY2tib3gpIHtcclxuICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJlbmN5QWdncmVnYXRvcihjdXJyZW5jeUNvbnRhaW5lciwgZ29hbCk7XHJcbiAgICAgICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDaGVja2JveCBlbGVtZW50IG5vdCBmb3VuZCBpbiB0aGUgY2FyZFwiKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgIGxldCBkYXRlVG9Db21wbGV0ZVRleHQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVUb0NvbXBsZXRlVGV4dFwiKTtcclxuICAgIGRhdGVUb0NvbXBsZXRlVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZ29hbENhcmQtJHtnb2FsLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICBkYXRlVG9Db21wbGV0ZVRleHQudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgbGV0IHJld2FyZEJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV3YXJkQm94XCIpO1xyXG4gICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBnb2FsQ2FyZC0ke2dvYWx9LXJld2FyZGApO1xyXG5cclxuICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKVxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoZ29hbCkpOyAgICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5yZXdhcmQuYW1vdW50fSAke2dvYWwucmV3YXJkLnR5cGV9YCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVlc3RMaXN0IChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdCBMaXN0IGlzIEVtcHR5XCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgICBsZXQgcXVlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgIHF1ZXN0TGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmRUZW1wbGF0ZShcInF1ZXN0XCIpO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdC0ke2l9YCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXljYXJkQ29udGVudChjdXJyZW50UXVlc3RMaXN0W2ldLCBjYXJkLCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XHJcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRRdWVzdExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3RbaW5kZXhdLnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJEZWZhdWx0SW5kZXgobWFpblBhZ2UpIHtcclxuICAgIC8vIENyZWF0ZSB0aGUgdGFza0FuZEdvYWxCdXR0b25Db250YWluZXIgZGl2XHJcbiAgICBjb25zdCB0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0FuZEdvYWxCdXR0b25Db250YWluZXJcIik7XHJcbiAgXHJcbiAgICBjb25zdCBhZGRRdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRRdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUXVlc3RCdXR0b25cIik7XHJcbiAgICBhZGRRdWVzdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFF1ZXN0ICtcIjtcclxuICBcclxuICAgIGNvbnN0IGFkZEdvYWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgYWRkR29hbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkR29hbEJ1dHRvblwiKTtcclxuICAgIGFkZEdvYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBHb2FsICtcIjtcclxuICBcclxuICAgIHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFF1ZXN0QnV0dG9uKTsgXHJcbiAgICB0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRHb2FsQnV0dG9uKTtcclxuICBcclxuICAgIC8vIENyZWF0ZSB0aGUgZ2FtZUNvbnRlbnRIZWFkZXIgZGl2XHJcbiAgICBjb25zdCBnYW1lQ29udGVudEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnYW1lQ29udGVudEhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKFwiZ2FtZUNvbnRlbnRIZWFkZXJcIik7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBxdWVzdEhlYWRlckRpdi5pZCA9IFwicXVlc3RIZWFkZXJcIjtcclxuICAgIHF1ZXN0SGVhZGVyRGl2LnRleHRDb250ZW50ID0gXCJNeSBRdWVzdHNcIjtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0VGltZU9wdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcXVlc3RUaW1lT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3RUaW1lT3B0aW9uc1wiKTtcclxuICBcclxuICAgIGNvbnN0IHRvZGF5UXVlc3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRvZGF5UXVlc3RzRGl2LmlkID0gXCJ0b2RheVF1ZXN0c1wiO1xyXG4gICAgdG9kYXlRdWVzdHNEaXYudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgXHJcbiAgICBjb25zdCB3ZWVrbHlRdWVzdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgd2Vla2x5UXVlc3RzRGl2LmlkID0gXCJ3ZWVrbHlRdWVzdHNcIjtcclxuICAgIHdlZWtseVF1ZXN0c0Rpdi50ZXh0Q29udGVudCA9IFwiV2Vla2x5XCI7XHJcbiAgXHJcbiAgICBxdWVzdFRpbWVPcHRpb25zRGl2LmFwcGVuZENoaWxkKHRvZGF5UXVlc3RzRGl2KTtcclxuICAgIHF1ZXN0VGltZU9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQod2Vla2x5UXVlc3RzRGl2KTtcclxuICBcclxuICAgIHF1ZXN0SGVhZGVyRGl2LmFwcGVuZENoaWxkKHF1ZXN0VGltZU9wdGlvbnNEaXYpO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbEhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsSGVhZGVyRGl2LmlkID0gXCJnb2FsSGVhZGVyXCI7XHJcbiAgICBnb2FsSGVhZGVyRGl2LnRleHRDb250ZW50ID0gXCJNeSBHb2Fsc1wiO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbENvbXBsZXRlT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsQ29tcGxldGVPcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVPcHRpb25zXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgaW5Qcm9ncmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBpblByb2dyZXNzRGl2LmlkID0gXCJpblByb2dyZXNzXCI7XHJcbiAgICBpblByb2dyZXNzRGl2LnRleHRDb250ZW50ID0gXCJJbiBQcm9ncmVzc1wiO1xyXG4gIFxyXG4gICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbXBsZXRlZERpdi5pZCA9IFwiY29tcGxldGVkXCI7XHJcbiAgICBjb21wbGV0ZWREaXYudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlZFwiO1xyXG4gIFxyXG4gICAgZ29hbENvbXBsZXRlT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChpblByb2dyZXNzRGl2KTtcclxuICAgIGdvYWxDb21wbGV0ZU9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2KTtcclxuICBcclxuICAgIGdvYWxIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZ29hbENvbXBsZXRlT3B0aW9uc0Rpdik7XHJcbiAgXHJcbiAgICBnYW1lQ29udGVudEhlYWRlckRpdi5hcHBlbmRDaGlsZChxdWVzdEhlYWRlckRpdik7XHJcbiAgICBnYW1lQ29udGVudEhlYWRlckRpdi5hcHBlbmRDaGlsZChnb2FsSGVhZGVyRGl2KTtcclxuICBcclxuICAgIC8vIENyZWF0ZSB0aGUgZ2FtZUNvbnRlbnQgZGl2XHJcbiAgICBjb25zdCBnYW1lQ29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnYW1lQ29udGVudERpdi5jbGFzc0xpc3QuYWRkKFwiZ2FtZUNvbnRlbnRcIik7XHJcbiAgXHJcbiAgICBjb25zdCBxdWVzdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBxdWVzdENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb250YWluZXJcIik7XHJcbiAgXHJcbiAgICBjb25zdCBnb2FsQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdvYWxDb250YWluZXJEaXYuY2xhc3NMaXN0LmFkZChcImdvYWxDb250YWluZXJcIik7XHJcbiAgXHJcbiAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIGRpdnMgdG8gdGhlIGdhbWVDb250ZW50IGRpdlxyXG4gICAgZ2FtZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocXVlc3RDb250YWluZXJEaXYpO1xyXG4gICAgZ2FtZUNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZ29hbENvbnRhaW5lckRpdik7XHJcbiAgXHJcbiAgICAvLyBSZXBsYWNlIHRoZSBtYWluUGFnZSBjb250ZW50IHdpdGggdGhlIGdhbWVDb250ZW50IGRpdlxyXG4gICAgbWFpblBhZ2UuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyKTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGdhbWVDb250ZW50SGVhZGVyRGl2KTtcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGdhbWVDb250ZW50RGl2KTtcclxuICB9XHJcbiAgXHJcbiAgLy8gQ2FsbCB0aGUgcmVuZGVyRGVmYXVsdEluZGV4IGZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgZGVmYXVsdCBpbmRleCBIVE1MIGVsZW1lbnRzXHJcbi8vICAgY29uc3QgbWFpblBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcENvbnRlbnRcIik7XHJcbi8vICAgcmVuZGVyRGVmYXVsdEluZGV4KG1haW5QYWdlQ29udGFpbmVyKTsiLCIvLyBBc3N1bWluZyB0aGUgY29kZSBmb3IgdGhlIFdlYXBvbiBjbGFzcywgSGVyb1R5cGVXZWFwb25MaXN0IGNsYXNzLCBhbmQgd2VhcG9uTGlzdHMgZm9yIGVhY2ggY2xhc3MgaXMgYWxyZWFkeSBkZWZpbmVkLlxyXG5pbXBvcnQgeyByb2d1ZVdlYXBvbkxpc3QsIHdhcnJpb3JXZWFwb25MaXN0LCBwcmllc3RXZWFwb25MaXN0LCBzb3JjZXJlcldlYXBvbkxpc3QsIHRlc3RXZWFwb25MaXN0IH0gZnJvbSBcIi4vd2VhcG9uTGlzdC5qc1wiXHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gXCIuL2NsYXNzZXMvaXRlbVN0YXRzLmpzXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzJztcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3dlYXBvbnMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCBhcm1vdXJJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9hcm1vdXInLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCBlbGVtZW50SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9yYXJpdGllcycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKVxyXG5cclxuXHJcblxyXG5jbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgZWxlbWVudCwgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVR5cGUocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXZWFwb25MaXN0KHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgc3dpdGNoIChwbGF5ZXJDbGFzcykge1xyXG4gICAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiByb2d1ZVdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBwcmllc3RXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHdhcnJpb3JXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzb3JjZXJlcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwidGVzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdGVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgcGxheWVyIGNsYXNzLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3Qgd2VhcG9uTGlzdCA9IGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpO1xyXG4gIFxyXG4gICAgaWYgKHdlYXBvbkxpc3QpIHtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHdlYXBvbkxpc3RbcmFuZG9tSW5kZXhdLl90eXBlO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIG9mIGFuIGludmFsaWQgcGxheWVyIGNsYXNzXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHJldHJpZXZlIHdlYXBvbiBsaXN0LlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SYXJpdHkgKGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdG90YWwgY2hhbmNlIHRvIDBcclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBjaGFuY2UgdmFsdWVzIG9mIGFsbCByYXJpdHkgb2JqZWN0IGNoYW5jZXNcclxuICAgIC8vIFRoaXMgc2hvdWxkIGFkZCB1cCB0byAxMDBcclxuICAgIGZvciAobGV0IHJhcml0eU9iamVjdCBvZiBpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuICAgICAgICB0b3RhbENoYW5jZSArPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIHdob2xlIGludGVnZXIgYmV0d2VlbiAwIC0gMTAwXHJcbiAgICBsZXQgcmFuZG9tQ2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2UpO1xyXG5cclxuICAgIC8vIFNldCByYXJpdHkgdmFsdWUgdG8gbnVsbFxyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSByYXJpdHkgYmFzZWQgb24geW91ciByYW5kb21DaGFuY2Ugcm9sbC4gXHJcbiAgICAvLyBGb3IgZXhhbXBsZSBpZiBSYW5kb20gQ2hhbmNlIHdhcyA5NDpcclxuICAgIC8vIDk0IC0gNDAgKE5vcm1hbCBSYXJpdHkpID0gNTQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gNTQgLSAzMCAoVW5jb21tb24gUmFyaXR5KSA9IDI0IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDI0IC0gMTUgKFJhcmUgUmFyaXR5KSA9IDkgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gOSAtIDEwIChFcGljIFJhcml0eSkgPSAtMSA8LS0gVGhlcmVmb3JlIHJhcml0eSBvZiBpdGVtIGlzIEVwaWMgYXMgKDkgLSAxMCkgPCAoMClcclxuICAgIGZvciAobGV0IHJhcml0eU9iamVjdCBvZiBpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5T2JqZWN0LmNoYW5jZTtcclxuICAgICAgICAvLyBUaGUgdmFsdWUgaXMgKC0wLjAxIHRvIGFjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzKVxyXG4gICAgICAgIGlmIChyYW5kb21DaGFuY2UgPD0gLTAuMDEpIHtcclxuICAgICAgICAgICAgcmFyaXR5ID0gcmFyaXR5T2JqZWN0LnJhcml0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhcml0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RhdHMoaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1SYXJpdHkpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCkge1xyXG4gICAgY29uc3QgZGVjaW1hbFBsYWNlcyA9IDI7IC8vIE51bWJlciBvZiBkZWNpbWFsIHBsYWNlc1xyXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgcmV0dXJuIE51bWJlcihyYW5kb21OdW1iZXIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSk7XHJcbiAgfVxyXG5cclxuICAgIC8vIFVzaW5nIHRoZSBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB0byBhY2Nlc3MgdGhlIHByb3BlcnR5IGF0IHJ1bnRpbWVcclxuICAgIGNvbnN0IHJhcml0eVN0YXRzID0gaXRlbVBvc3NpYmxlU3RhdHNbaXRlbVJhcml0eV07XHJcbiAgICBjb25zdCBpdGVtU3RhdHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0YXQgaW4gcmFyaXR5U3RhdHMpIHtcclxuICAgICAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSByYXJpdHlTdGF0c1tzdGF0XTtcclxuICAgIGl0ZW1TdGF0c1tzdGF0XSA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXQsIGl0ZW1TdGF0c1tzdGF0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGF0cztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1QcmVmaXgoaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUmFyaXR5KSB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtUG9zc2libGVQcmVmaXhbaXRlbVJhcml0eV0ubGVuZ3RoKVxyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XVtyYW5kb21JbmRleF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlRWxlbWVudHNbcmFuZG9tSW5kZXhdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVN1ZmZpeFtlbGVtZW50XTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21XZWFwb24gKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgbGV0IHdlYXBvblR5cGUgPSBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcyk7XHJcbiAgICBsZXQgd2VhcG9uRWxlbWVudCA9IGdldEl0ZW1FbGVtZW50KGl0ZW1Qb3NzaWJsZUVsZW1lbnRzKTtcclxuICAgIGxldCB3ZWFwb25SYXJpdHkgPSBnZXRJdGVtUmFyaXR5KGl0ZW1Qb3NzaWJsZVJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3RhdHMgPSBnZXRJdGVtU3RhdHMoaXRlbVBvc3NpYmxlU3RhdHMsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uUHJlZml4ID0gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3VmZml4ID0gZ2V0SXRlbVN1ZmZpeChpdGVtUG9zc2libGVTdWZmaXgsIHdlYXBvbkVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgV2VhcG9uKFxyXG4gICAgICAgICh3ZWFwb25QcmVmaXggKyBcIiBcIiArIHdlYXBvblR5cGUgKyBcIiBcIiArIHdlYXBvblN1ZmZpeCksIFxyXG4gICAgICAgIHdlYXBvblR5cGUsXHJcbiAgICAgICAgcGxheWVyQ2xhc3MsXHJcbiAgICAgICAgd2VhcG9uUmFyaXR5LFxyXG4gICAgICAgIHdlYXBvblN0YXRzLFxyXG4gICAgICAgIHdlYXBvbkVsZW1lbnQsXHJcbiAgICAgICAgbnVsbCxcclxuICAgIClcclxuXHJcbiBcclxufVxyXG4vLyBTaW11bGF0aW5nIGFuIGl0ZW0gYmVpbmcgcHVsbGVkIGZyb20gYSBjaGVzdCBiYXNlZCBvbiBwbGF5ZXIncyBjbGFzcyBhbmQgcmFyaXR5IHByb2JhYmlsaXRpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHB1bGxJdGVtRnJvbUNoZXN0KHBsYXllckNsYXNzLCBwaXR5KSB7XHJcbiAgIFxyXG5cclxuICAgIC8vIENvbnNpZGVyIGNvbnN0YW50IHJhcml0eSBvYmplY3QgZm9yIHNjYWxpbmcgcHVycG9zZXNcclxuICAgIGNvbnN0IHJhcml0eVByb2JhYmlsaXRpZXMgPSBbXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTm9ybWFsXCIsIGNoYW5jZTogNDAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJVbmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiUmFyZVwiLCBjaGFuY2U6IDE1IH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiRXBpY1wiLCBjaGFuY2U6IDEwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTGVnZW5kYXJ5XCIsIGNoYW5jZTogNSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICB0b3RhbENoYW5jZSArPSByYXJpdHlEYXRhLmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmFuZG9tQ2hhbmNlID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tQ2hhbmNlKTtcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgcmFyaXR5RGF0YSBvZiByYXJpdHlQcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgICAgIGlmIChyYW5kb21DaGFuY2UgPD0gMCkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlEYXRhLnJhcml0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhcml0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgY29uc3QgcmFuZG9tV2VhcG9uID0gd2VhcG9uTGlzdFtyYW5kb21JbmRleF07XHJcblxyXG4gICAgLy8gQXNzaWduIHJhbmRvbSBwcm9wZXJ0aWVzIHRvIHRoZSB3ZWFwb25cclxuICAgIHJhbmRvbVdlYXBvbi5fbmFtZSA9IFwiRGl2aW5lIFN0YWZmXCI7IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gcmFyaXR5OyAvLyBBc3NpZ25pbmcgdGhlIGRldGVybWluZWQgcmFyaXR5XHJcblxyXG4gICAgLy8gSWYgdGhlIHB1bGxlZCBpdGVtIGlzIGxlZ2VuZGFyeSwgcmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgaWYgKHJhcml0eSA9PT0gXCJMZWdlbmRhcnlcIikge1xyXG4gICAgICAgIHBpdHkgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwaXR5Kys7IC8vIEluY3JlbWVudCB0aGUgcGl0eSBjb3VudGVyIGlmIGEgbGVnZW5kYXJ5IGl0ZW0gd2FzIG5vdCBwdWxsZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBHdWFyYW50ZWUgYSBsZWdlbmRhcnkgaXRlbSBpZiB0aGUgcGl0eSBjb3VudGVyIHJlYWNoZXMgMTAwXHJcbiAgICBpZiAocGl0eSA+PSAxMDApIHtcclxuICAgICAgICByYW5kb21XZWFwb24uX3Jhcml0eSA9IFwiTGVnZW5kYXJ5XCI7XHJcbiAgICAgICAgcGl0eSA9IDA7IC8vIFJlc2V0IHRoZSBwaXR5IGNvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21XZWFwb24uX3N0YXRzID0ge1xyXG4gICAgICAgIGF0dGFjazogMTUwLFxyXG4gICAgICAgIGludGVsbGVjdDogNTAsXHJcbiAgICAgICAgc3RhbWluYTogODAsXHJcbiAgICB9OyAvLyBFeGFtcGxlIHByb3BlcnR5XHJcblxyXG4gICAgcmV0dXJuIHsgaXRlbTogcmFuZG9tV2VhcG9uLCBwaXR5IH07XHJcbn1cclxuIiwiY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJvZ3VlV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJEYWdnZXJcIiwgXCJEYWdnZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsIEJsYWRlc1wiLCBcIkR1YWwgQmxhZGVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQm93XCIsIFwiQm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2xhdyBXZWFwb25zXCIsIFwiQ2xhdyBXZWFwb25zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3Jvc3Nib3dcIiwgXCJDcm9zc2Jvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJhcGllclwiLCBcIlJhcGllclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJsb3dndW5cIiwgXCJCbG93Z3VuXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2hha3JhbXNcIiwgXCJDaGFrcmFtc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhcnJvdGVcIiwgXCJHYXJyb3RlXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHdhcnJpb3JXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0c3dvcmRcIiwgXCJHcmVhdHN3b3JkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyaGFtbWVyXCIsIFwiV2FyaGFtbWVyXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQb2xlYXJtXCIsIFwiUG9sZWFybVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXhlXCIsIFwiQXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlXCIsIFwiTWFjZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdGF4ZVwiLCBcIkdyZWF0YXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJGbGFpbFwiLCBcIkZsYWlsXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FyIEdhdW50bGV0c1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHByaWVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBXYW5kXCIsIFwiSG9seSBXYW5kXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRvbWVcIiwgXCJUb21lXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgSGFtbWVyXCIsIFwiSG9seSBIYW1tZXJcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQW5raFwiLCBcIkFua2hcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBCb3dcIiwgXCJIb2x5IEJvd1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlNhY3JlZCBDaGFsaWNlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlByYXllciBCZWFkc1wiLCBcIlByYXllciBCZWFkc1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFNjeXRoZVwiLCBcIkhvbHkgU2N5dGhlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBzb3JjZXJlcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNwZWxsYm9va1wiLCBcIlNwZWxsYm9va1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVsZW1lbnRhbCBXYW5kXCIsIFwiRWxlbWVudGFsIFdhbmRcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcnlzdGFsIE9yYlwiLCBcIkNyeXN0YWwgT3JiXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZWJsYWRlXCIsIFwiUnVuZWJsYWRlXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbmNoYW50ZWQgQm93XCIsIFwiRW5jaGFudGVkIEJvd1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNjZXB0ZXJcIiwgXCJTY2VwdGVyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIERhZ2dlclwiLCBcIkFyY2FuZSBEYWdnZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmF2aXRvbiBTdGFmZlwiLCBcIkdyYXZpdG9uIFN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHRlc3RXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkFieXNzIFNob3J0IFN3b3JkXCIsIFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiR2FpYSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJJbmZlcm5vIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTHVuYXIgU2hvcnQgU3dvcmRcIiwgXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJNaXN0IFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJ1bmUgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTb2xhciBTaG9ydCBTd29yZFwiLCBcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlZvbHQgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuZXhwb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0LCB0ZXN0V2VhcG9uTGlzdCB9OyIsImNsYXNzIFpvZGlhY1NpZ24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydERhdGVSYW5nZShkYXRlUmFuZ2UpIHtcclxuICAgICAgLy8gU3BsaXQgdGhlIGRhdGUgcmFuZ2Ugc3RyaW5nIGludG8gc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gICAgICBjb25zdCBbc3RhcnRTdHIsIGVuZFN0cl0gPSBkYXRlUmFuZ2Uuc3BsaXQoJyAtICcpO1xyXG4gICAgXHJcbiAgICAgIC8vIFBhcnNlIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHVzaW5nIHRoZSBEYXRlIGNvbnN0cnVjdG9yXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0U3RyKTtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZFN0cik7XHJcbiAgICBcclxuICAgICAgLy8gQWRqdXN0IHRoZSB5ZWFyIG9mIHRoZSBlbmQgZGF0ZSBpZiBuZWNlc3NhcnlcclxuICAgICAgaWYgKGVuZERhdGUgPCBzdGFydERhdGUpIHtcclxuICAgICAgICBlbmREYXRlLnNldEZ1bGxZZWFyKHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgYW4gb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IHpvZGlhY1NpZ25zID0gW1xyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXJpZXNcIixcclxuICAgICAgXCJNYXJjaCAyMSAtIEFwcmlsIDE5XCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlN0ZWVsXCIsXHJcbiAgICAgIFwiQXJlcywgdGhlIEdvZCBvZiBXYXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVGF1cnVzXCIsXHJcbiAgICAgIFwiQXByaWwgMjAgLSBNYXkgMjBcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkFieXNzXCIsXHJcbiAgICAgIFwiSGFkZXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiR2VtaW5pXCIsXHJcbiAgICAgIFwiTWF5IDIxIC0gSnVuZSAyMFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlplcGh5clwiLFxyXG4gICAgICBcIkl6YW5hbWkvSXphbmFnaSwgdGhlIEdvZHMvR29kZGVzc2VzIG9mIENyZWF0aW9uIGFuZCBEZWF0aCAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYW5jZXJcIixcclxuICAgICAgXCJKdW5lIDIxIC0gSnVseSAyMlwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTHVuYXJcIixcclxuICAgICAgXCJUc3VrdXlvbWksIHRoZSBHb2Qgb2YgdGhlIE1vb24gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGVvXCIsXHJcbiAgICAgIFwiSnVseSAyMyAtIEF1Z3VzdCAyMlwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTb2xhclwiLFxyXG4gICAgICBcIlJhLCB0aGUgR29kIG9mIHRoZSBTdW4gKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVmlyZ29cIixcclxuICAgICAgXCJBdWd1c3QgMjMgLSBTZXB0ZW1iZXIgMjJcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIlRlcnJhXCIsXHJcbiAgICAgIFwiT3NpcmlzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxpYnJhXCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIkFldGhlclwiLFxyXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2NvcnBpb1wiLFxyXG4gICAgICBcIk9jdG9iZXIgMjMgLSBOb3ZlbWJlciAyMVwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgICBcIlBvc2VpZG9uLCB0aGUgR29kIG9mIHRoZSBTZWEgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2FnaXR0YXJpdXNcIixcclxuICAgICAgXCJOb3ZlbWJlciAyMiAtIERlY2VtYmVyIDIxXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIkluZmVybm9cIixcclxuICAgICAgXCJBbWF0ZXJhc3UsIHRoZSBHb2RkZXNzIG9mIHRoZSBTdW4gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2Fwcmljb3JuXCIsXHJcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJHYWlhXCIsXHJcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXF1YXJpdXNcIixcclxuICAgICAgXCJKYW51YXJ5IDIwIC0gRmVicnVhcnkgMThcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJWb2x0XCIsXHJcbiAgICAgIFwiWmV1cywgdGhlIEdvZCBvZiBUaHVuZGVyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlBpc2Nlc1wiLFxyXG4gICAgICBcIkZlYnJ1YXJ5IDE5IC0gTWFyY2ggMjBcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIk1pc3RcIixcclxuICAgICAgXCJTdXNhbm9vLCB0aGUgR29kIG9mIHRoZSBTZWEgYW5kIFN0b3JtcyAoSmFwYW5lc2UpXCJcclxuICAgIClcclxuICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5LCBXZWFwb24sIEFybW91ciwgUGxheWVyQ2hhcmFjdGVyLCBQbGF5ZXJTdGF0cywgR29hbCB9IGZyb20gXCIuL2NsYXNzZXMvY2xhc3Nlcy5qc1wiO1xyXG5pbXBvcnQgeyBnZXROZXdRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMsIGFkZFF1ZXN0LCBnZW5lcmF0ZVRhc2tDb250YWluZXIsIGNyZWF0ZVF1ZXN0Q2FyZFRlbXBsYXRlLCBkaXNwbGF5UXVlc3RDYXJkQ29udGVudCwgcmVuZGVyUXVlc3RMaXN0LCBjcmVhdGVDYXJkVGVtcGxhdGUsIGRpc3BsYXlHb2FsQ2FyZENvbnRlbnQsIGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlLCBjcmVhdGVHaG9zdENhcmR9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtTW9kYWwsIGNsb3NlRm9ybU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IGR1ZURhdGUgZnJvbSBcIi4vZHVlRGF0ZS5qc1wiO1xyXG5pbXBvcnQgZ2V0T2JqZWN0aXZlIGZyb20gXCIuL2dldE9iamVjdGl2ZS5qc1wiO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXInO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zJztcclxuaW1wb3J0IHsgcHVsbEl0ZW1Gcm9tQ2hlc3QsIGdldEl0ZW1SYXJpdHksIGdldEl0ZW1TdGF0cywgZ2V0SXRlbVR5cGUsIGdldEl0ZW1FbGVtZW50LCBnZXRJdGVtUHJlZml4LCBnZXRJdGVtU3VmZml4LCBnZW5lcmF0ZVJhbmRvbVdlYXBvbn0gZnJvbSAnLi9zaG9wRnVuY3Rpb24nO1xyXG5pbXBvcnQgeyBpdGVtUG9zc2libGVFbGVtZW50cywgaXRlbVBvc3NpYmxlUmFyaXR5LCBpdGVtUG9zc2libGVTdGF0cywgaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUG9zc2libGVTdWZmaXggfSBmcm9tICcuL2NsYXNzZXMvaXRlbVN0YXRzJztcclxuaW1wb3J0IHsgc3Bpbiwgb3BlblNsb3RNYWNoaW5lTW9kYWwsIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCwgcmVzZXRTbG90TWFjaGluZUltYWdlc30gZnJvbSAnLi9nYWNoYVNwaW5GdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjSGVyb1Njb3JlIH0gZnJvbSAnLi9wbGF5ZXJDaGFyYWN0ZXJGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBhcHBlbmRJdGVtSW1hZ2UsIGNyZWF0ZUludmVudG9yeU1vZGFsLCBjcmVhdGVJbnZlbnRvcnlQYWdlLCBnZW5lcmF0ZUludmVudG9yeUl0ZW1JbWFnZSwgZ2VuZXJhdGVJbnZlbnRvcnlJdGVtcywgdXBkYXRlSW52ZW50b3J5UGFnZSwgaW52ZW50b3J5RXZlbnRIYW5kbGVyfSAgZnJvbSAnLi9pbnZlbnRvcnlGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRJdGVtSW1hZ2UgfSBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UnO1xyXG5pbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBwbGF5ZXJJbnZlbnRvcnksIGN1cnJlbmN5Q29udGFpbmVyLCBwbGF5ZXJFcXVpcHBlZEl0ZW1zLCBjdXJyZW50R29hbExpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVFbXB0eVRhc2tHb2FsUHJvbXB0LCBjcmVhdGVUYXNrQ29udGFpbmVyLCBxdWVzdENvbnRyb2xsZXIsIGdvYWxDb250cm9sbGVyLCBzaG93RW1wdHlRdWVzdEFuZEdvYWxzLCBzaG93RW1wdHlRdWVzdHNTdGF0ZSwgc2hvd0VtcHR5R29hbHNTdGF0ZSwgZW1wdHlTdGF0ZUV2ZW50SGFuZGxlciwgcmVtb3ZlRW1wdHlRdWVzdFN0YXRlLCBjcmVhdGVRdWVzdFBhcmFsbGF4IH0gZnJvbSAnLi9pbmRleFZpZXdGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVHZXREYXRhRm9ybSB9IGZyb20gJy4vZ2VuZXJhdGVGb3JtJztcclxuaW1wb3J0IHJlbmRlckdvYWxDcmVhdGlvblBhZ2UgZnJvbSAnLi9nb2FsQ3JlYXRpb25QYWdlJztcclxuaW1wb3J0IHJlbmRlckRlZmF1bHRJbmRleCBmcm9tICcuL3JlbmRlckRlZmF1bHRJbmRleEh0bWwnO1xyXG5pbXBvcnQgaW5pdGlhbGl6ZURlZmF1bHRJbmRleCBmcm9tICcuL2luaXRpYWxpemVJbmRleEZ1bmN0aW9ucyc7XHJcblxyXG4vLyBpbml0aWFsaXplRGVmYXVsdEluZGV4KClcclxucmVuZGVyR29hbENyZWF0aW9uUGFnZSgpO1xyXG5cclxuLy8gY29uc29sZS5sb2coY3VycmVuY3lDb250YWluZXIpXHJcbi8vIC8vIEdsb2JhbGx5IFNjb3BlZCBWYXJpYWJsZXNcclxuXHJcbi8vIGxldCBwbGF5ZXJCaXJ0aGRheSA9IG5ldyBEYXRlIChcIjAyLTAzLTE5OTZcIik7XHJcbi8vIGxldCBoZXJvU2VsZWN0aW9uID0gKFwiU29yY2VyZXJcIik7XHJcbi8vIGxldCBwbGF5ZXIgPSBuZXcgUGxheWVyQ2hhcmFjdGVyKFwiaW1hZ2VzL3pldXNTcHJpdGUucG5nXCIsIGhlcm9TZWxlY3Rpb24sIHBsYXllckVxdWlwcGVkSXRlbXMsIHBsYXllckJpcnRoZGF5KTtcclxuLy8gbGV0IHBpeGVsSW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RJbWFnZVwiKTtcclxuLy8gcGl4ZWxJbWFnZUNvbnRhaW5lci5zcmMgPSAocGxheWVyLnNwcml0ZUltYWdlKTtcclxuLy8gbGV0IGdldEhlcm9TY29yZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGVyb1Njb3JlQ29udGFpbmVyXCIpO1xyXG4vLyBsZXQgaGVyb1Njb3JlID0gY2FsY0hlcm9TY29yZShwbGF5ZXIpO1xyXG4vLyBnZXRIZXJvU2NvcmVDb250YWluZXIudGV4dENvbnRlbnQgPSAoYEhlcm8gU2NvcmU6ICR7aGVyb1Njb3JlfWApXHJcblxyXG4vLyBsZXQgdGVzdFF1ZXN0ID0gbmV3IFF1ZXN0IChcIkZpbmlzaCBGblwiLCBcIjQ6MzBwbSAtIDg6MDBwbVwiLCBmYWxzZSwgbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMTIpLCBudWxsLCBmYWxzZSwgbnVsbCk7XHJcbi8vIGxldCB0ZXN0UXVlc3QyID0gbmV3IFF1ZXN0IChcIkZpbmlzaCBGblwiLCBcIjQ6MzBwbSAtIDg6MDBwbVwiLCBmYWxzZSwgbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMTIpLCBudWxsLCBmYWxzZSwgbnVsbCk7XHJcblxyXG4vLyAvLyBjdXJyZW50UXVlc3RMaXN0LnB1c2godGVzdFF1ZXN0KTtcclxuLy8gY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdCk7XHJcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRHb2FsTGlzdCk7XHJcblxyXG4vLyBsZXQgdGVzdEdvYWwgPSBuZXcgR29hbCAoXCJCZWNvbWUgRmx1ZW50IGluIFNwYW5pc2hcIiwgbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMTIpKVxyXG5cclxuLy8gLy8gY2xhc3MgR29hbCB7XHJcbi8vIC8vICAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIHJld2FyZCwgZnJlcXVlbmN5LCBmcmVxdWVuY3lWYWx1ZSwgdG90YWxUaW1lUmVxdWlyZWQsIHRvdGFsVGltZVNwZW50KSBcclxuXHJcbi8vIGxldCBneW1Hb2FsID0gbmV3IEdvYWwgKChcIkdldCBTaXggUGFjayBBYnNcIiksIG5ldyBDdXJyZW5jeSAoXCJHR1Rva2Vuc1wiLCAxMikpO1xyXG4vLyBsZXQgZ3ltUXVlc3QgPSBneW1Hb2FsLmdlbmVyYXRlUXVlc3QoNCwgMCk7XHJcbi8vIGd5bUdvYWwucXVlc3RzLnB1c2goZ3ltUXVlc3QpO1xyXG4vLyBjb25zb2xlLmxvZyhneW1Hb2FsLnF1ZXN0cyk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhneW1Hb2FsLnF1ZXN0c1swXS50aW1lc1BlcldlZWtSZXF1aXJlZClcclxuXHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdDIpO1xyXG5cclxuLy8gY29uc29sZS5sb2codGVzdEdvYWwucXVlc3RzKTtcclxuXHJcbi8vIC8vIHRlc3RHb2FsLnF1ZXN0cy5wdXNoKHRlc3RRdWVzdCk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHRlc3RHb2FsLnF1ZXN0cyk7XHJcblxyXG4vLyAvLyBsZXQgdGVzdENsaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQ29udGVudEhlYWRlclwiKVxyXG4vLyAvLyB0ZXN0Q2xpY2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gLy8gICB0ZXN0UXVlc3QucXVlc3RDb21wbGV0ZSA9IHRydWU7XHJcbi8vIC8vICAgY29uc29sZS5sb2codGVzdEdvYWwucXVlc3RzKTtcclxuLy8gLy8gfSlcclxuXHJcbi8vIHNob3dFbXB0eVF1ZXN0c1N0YXRlKCk7XHJcbi8vIC8vIHNob3dFbXB0eUdvYWxzU3RhdGUoKTtcclxuXHJcbi8vIGxldCBnY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb250YWluZXJcIik7XHJcblxyXG4vLyBmdW5jdGlvbiBnZW5lcmF0ZUdvYWxDYXJkKGdvYWwpIHtcclxuXHJcbi8vICAgICBjb25zdCBnb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ29hbENhcmQuY2xhc3NMaXN0LmFkZCgnZ29hbENhcmQnKTtcclxuICBcclxuLy8gICAgIGNvbnN0IHRvcEhhbGZHb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgdG9wSGFsZkdvYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ3RvcEhhbGZHb2FsQ2FyZCcpO1xyXG4vLyAgICAgZ29hbENhcmQuYXBwZW5kQ2hpbGQodG9wSGFsZkdvYWxDYXJkKTtcclxuICBcclxuLy8gICAgIGNvbnN0IGJvdHRvbUhhbGZHb2FsQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgYm90dG9tSGFsZkdvYWxDYXJkLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUhhbGZHb2FsQ2FyZCcpO1xyXG4vLyAgICAgZ29hbENhcmQuYXBwZW5kQ2hpbGQoYm90dG9tSGFsZkdvYWxDYXJkKTtcclxuICBcclxuLy8gICAgIGNvbnN0IGdvYWxPYmplY3RpdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGdvYWxPYmplY3RpdmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ29hbE9iamVjdGl2ZUNvbnRhaW5lcicpO1xyXG4vLyAgICAgdG9wSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmVDb250YWluZXIpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZ29hbENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBnb2FsQ29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ29hbENvbXBsZXRlQ29udGFpbmVyJyk7XHJcbi8vICAgICB0b3BIYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQoZ29hbENvbXBsZXRlQ29udGFpbmVyKTtcclxuICBcclxuLy8gICAgIGNvbnN0IGdvYWxPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4vLyAgICAgZ29hbE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKCdnb2FsLW9iamVjdGl2ZScpO1xyXG4vLyAgICAgZ29hbE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IGdvYWwub2JqZWN0aXZlO1xyXG4vLyAgICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsT2JqZWN0aXZlKTtcclxuICBcclxuLy8gICAgIGNvbnN0IHF1ZXN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgcXVlc3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdENvbnRhaW5lcicpO1xyXG4vLyAgICAgYm90dG9tSGFsZkdvYWxDYXJkLmFwcGVuZENoaWxkKHF1ZXN0TGlzdENvbnRhaW5lcik7XHJcbiAgXHJcbi8vICAgICBjb25zdCBxdWVzdExpc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgcXVlc3RMaXN0UGFyYWxsYXguY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0UGFyYWxsYXgnKTtcclxuLy8gICAgIHF1ZXN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdExpc3RQYXJhbGxheCk7XHJcbiAgXHJcbi8vICAgICBjb25zdCBxdWVzdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4vLyAgICAgcXVlc3RMaXN0LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdCcpO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnb2FsLnF1ZXN0cy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICBjb25zdCBxdWVzdEl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW1Db250YWluZXInKTtcclxuICBcclxuLy8gICAgICAgY29uc3QgcXVlc3RJdGVtQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuLy8gICAgICAgcXVlc3RJdGVtQ29udGVudC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RJdGVtJyk7XHJcbi8vICAgICAgIHF1ZXN0SXRlbUNvbnRlbnQudGV4dENvbnRlbnQgPSBnb2FsLnF1ZXN0c1tpXS5vYmplY3RpdmU7XHJcbiAgXHJcbi8vICAgICAgIGNvbnN0IHByb2dyZXNzQmFyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2dyZXNzLWJhci1jb250YWluZXInKTtcclxuICBcclxuLy8gICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgcHJvZ3Jlc3NCYXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyJyk7XHJcbiAgXHJcbi8vICAgICAgIHByb2dyZXNzQmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuLy8gICAgICAgcXVlc3RJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0SXRlbUNvbnRlbnQpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXJDb250YWluZXIpO1xyXG4vLyAgICAgICBxdWVzdExpc3QuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGFpbmVyKTtcclxuXHJcbiAgICAgIFxyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICBnZW5lcmF0ZU1vZGFsKGdvYWwucXVlc3RzW2ldKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcXVlc3RMaXN0UGFyYWxsYXguYXBwZW5kQ2hpbGQocXVlc3RMaXN0KTtcclxuICBcclxuLy8gICAgIHJldHVybiBnb2FsQ2FyZDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGZ1bmN0aW9uIGdlbmVyYXRlTW9kYWwoZ29hbFF1ZXN0KSB7XHJcblxyXG4vLyAgICAgY29uc3QgZ29hbFF1ZXN0TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGdvYWxRdWVzdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsJyk7XHJcbiAgXHJcbi8vICAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKCdnb2FsUXVlc3RNb2RhbENvbnRlbnQnKTtcclxuICBcclxuLy8gICAgIGxldCBnb2FsUXVlc3RNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4vLyAgICAgZ29hbFF1ZXN0TW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIkNvbXBsZXRpb24gUmVxdWlyZW1lbnQocyk6IFwiXHJcblxyXG4vLyAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuLy8gICAgIG5hbWUuaW5uZXJUZXh0ID0gZ29hbFF1ZXN0Lm9iamVjdGl2ZTtcclxuXHJcblxyXG4vLyAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsVGl0bGUpO1xyXG4vLyAgICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG5hbWUpXHJcbi8vICAgICBnb2FsUXVlc3RNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnb2FsUXVlc3RNb2RhbCk7XHJcbiAgXHJcbi8vICAgICByZXR1cm4gZ29hbFF1ZXN0TW9kYWw7XHJcbi8vICAgfVxyXG4gICAgICBcclxuICBcclxuXHJcbi8vICAgbGV0IGdDYXJkID0gZ2VuZXJhdGVHb2FsQ2FyZCh0ZXN0R29hbCk7XHJcbi8vICAgbGV0IGdDYXJkMiA9IGdlbmVyYXRlR29hbENhcmQoZ3ltR29hbCk7XHJcblxyXG4vLyAgIGdjYy5hcHBlbmRDaGlsZChnQ2FyZCk7XHJcbi8vICAgZ2NjLmFwcGVuZENoaWxkKGdDYXJkMik7XHJcblxyXG4vLyAvLyBsZXQgZ29hbENhcmQgPSBjcmVhdGVDYXJkVGVtcGxhdGUoXCJnb2FsXCIpO1xyXG4vLyAvLyB4LmFwcGVuZENoaWxkKGdvYWxDYXJkKTtcclxuLy8gLy8gZGlzcGxheUdvYWxDYXJkQ29udGVudCh0ZXN0R29hbCwgZ29hbENhcmQsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcblxyXG5cclxuLy8gdXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuLy8gLy8gY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuLy8gLy8gY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdCk7XHJcblxyXG4vLyAvLyB0ZXN0R29hbC5saW5rUXVlc3RUb0dvYWwoY3VycmVudFF1ZXN0TGlzdFswXSk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKHRlc3RHb2FsLnRpbWVSZXF1aXJlZClcclxuXHJcblxyXG4vLyAvLyBFdmVudCBMaXN0ZW5lciB0byBPcGVuIFF1ZXN0IENyZWF0aW9uIE1vZGFsXHJcbi8vIGxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZFF1ZXN0QnV0dG9uXCIpXHJcbi8vIGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuLy8gICAgIGlmICghcmVtb3ZlRW1wdHlRdWVzdFN0YXRlKCkpIHtcclxuLy8gICAgICAgICByZW1vdmVFbXB0eVF1ZXN0U3RhdGUoKTtcclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyAgICAgaWYgKCFjcmVhdGVRdWVzdFBhcmFsbGF4KCkpIHtcclxuLy8gICAgICAgICBjcmVhdGVRdWVzdFBhcmFsbGF4KCk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmVuZGVyUXVlc3RMaXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIFxyXG4vLyAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbi8vICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlKCkpO1xyXG4vLyAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4vLyB9KVxyXG5cclxuLy8gbGV0IGFkZEdvYWxCdXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRHb2FsQnV0dG9uXCIpXHJcbi8vIGFkZEdvYWxCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAvLyByZW1vdmVFbXB0eVRhc2tHb2FsUHJvbXB0KCk7XHJcbi8vICAgICAvLyBjcmVhdGVUYXNrQ29udGFpbmVyKCk7XHJcbi8vICAgICAvLyBnb2FsQ29udHJvbGxlcigpO1xyXG4gICAgXHJcbi8vICAgICBjdXJyZW50R29hbExpc3QucHVzaCh0ZXN0R29hbCk7XHJcbi8vICAgICBjcmVhdGVHZXREYXRhRm9ybShcImdvYWxcIik7XHJcbi8vIH0pXHJcblxyXG5cclxuLy8gLy8gRXZlbnQgTGlzdGVuZXIgdG8gQWRkIFF1ZXN0IHRvIFF1ZXN0IExpc3QgYW5kIERpc3BsYXlcclxuLy8gbGV0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TdWJtaXRCdXR0b25cIik7XHJcbi8vIGZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbi8vICAgICBjbG9zZUZvcm1Nb2RhbChlKTtcclxuLy8gICAgIHJlbW92ZUVtcHR5UXVlc3RHb2FsUHJvbXB0KCk7XHJcbi8vICAgICBsZXQgbmV3bHlHZW5lcmF0ZWRRdWVzdCA9IGdldE5ld1F1ZXN0KCk7XHJcbi8vICAgICBhZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBuZXdseUdlbmVyYXRlZFF1ZXN0KTtcclxuLy8gICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuLy8gfSlcclxuXHJcbi8vIC8vIGZ1bmN0aW9uIGNyZWF0ZVN0YXRlKGluaXRpYWxWYWx1ZSkge1xyXG4vLyAvLyAgIGxldCB2YWx1ZSA9IGluaXRpYWxWYWx1ZTsgLy8gU3RhdGUgdmFsdWVcclxuXHJcbi8vIC8vICAgLy8gRnVuY3Rpb24gdG8gZ2V0IHRoZSBjdXJyZW50IHN0YXRlIHZhbHVlXHJcbi8vIC8vICAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XHJcbi8vIC8vICAgICByZXR1cm4gdmFsdWU7XHJcbi8vIC8vICAgfVxyXG5cclxuLy8gLy8gICAvLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIHN0YXRlIHZhbHVlXHJcbi8vIC8vICAgZnVuY3Rpb24gc2V0U3RhdGUobmV3VmFsdWUpIHtcclxuLy8gLy8gICAgIHZhbHVlID0gbmV3VmFsdWU7XHJcbi8vIC8vICAgfVxyXG5cclxuLy8gLy8gICAvLyBSZXR1cm4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGdldFN0YXRlIGFuZCBzZXRTdGF0ZSBmdW5jdGlvbnNcclxuLy8gLy8gICByZXR1cm4ge1xyXG4vLyAvLyAgICAgZ2V0U3RhdGUsXHJcbi8vIC8vICAgICBzZXRTdGF0ZSxcclxuLy8gLy8gICB9O1xyXG4vLyAvLyB9XHJcblxyXG4vLyAvLyAvLyBVc2FnZSBleGFtcGxlXHJcbi8vIC8vIGNvbnN0IGNvdW50ZXJTdGF0ZSA9IGNyZWF0ZVN0YXRlKDApO1xyXG5cclxuLy8gLy8gLy8gR2V0IHRoZSBjdXJyZW50IHN0YXRlIHZhbHVlXHJcbi8vIC8vIGNvbnNvbGUubG9nKGNvdW50ZXJTdGF0ZS5nZXRTdGF0ZSgpKTsgLy8gT3V0cHV0OiAwXHJcblxyXG4vLyAvLyAvLyBVcGRhdGUgdGhlIHN0YXRlIHZhbHVlXHJcbi8vIC8vIGNvdW50ZXJTdGF0ZS5zZXRTdGF0ZSg1KTtcclxuXHJcbi8vIC8vIC8vIEdldCB0aGUgdXBkYXRlZCBzdGF0ZSB2YWx1ZVxyXG4vLyAvLyBjb25zb2xlLmxvZyhjb3VudGVyU3RhdGUuZ2V0U3RhdGUoKSk7IC8vIE91dHB1dDogNVxyXG5cclxuLy8gbGV0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBDb250ZW50XCIpO1xyXG5cclxuLy8gLy8gUmVtb3ZlIGFsbCBjdXJyZW50IGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgZWxlbWVudFxyXG4vLyB3aGlsZSAobWFpblBhZ2UuZmlyc3RDaGlsZCkge1xyXG4vLyAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQobWFpblBhZ2UuZmlyc3RDaGlsZCk7XHJcbi8vICAgfVxyXG5cclxuLy8gcmVuZGVyRGVmYXVsdEluZGV4KG1haW5QYWdlKTtcclxuLy8gcmVuZGVyR29hbENyZWF0aW9uUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==