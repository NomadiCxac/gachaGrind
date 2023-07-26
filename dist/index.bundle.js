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
        console.log(inputContainer)
    // Create the radio buttons for time options

        // Hours Radio Label
        let hoursRadioLabel = document.createElement("label");
        hoursRadioLabel.classList.add("radioLabel");
    
        let hoursRadioInput = document.createElement("input");
        hoursRadioInput.setAttribute("type", "radio");
        hoursRadioInput.setAttribute("name", "element");
        hoursRadioInput.setAttribute("value", "hours");
        hoursRadioInput.classList.add("radioButton");
        hoursRadioLabel.appendChild(hoursRadioInput);
        hoursRadioLabel.appendChild(document.createTextNode("Hours"));
    
        // N/A Radio Lavel
        let naRadioLabel = document.createElement("label");
        naRadioLabel.classList.add("radioLabel");
    
        let naRadioInput = document.createElement("input");
        naRadioInput.setAttribute("type", "radio");
        naRadioInput.setAttribute("name", "element");
        naRadioInput.setAttribute("value", "na");
        naRadioInput.classList.add("radioButton");
        naRadioLabel.appendChild(naRadioInput);
        naRadioLabel.appendChild(document.createTextNode("N/A"));
          
        hoursRadioInput.addEventListener("change", handleRadioChange);
        naRadioInput.addEventListener("change", handleRadioChange);



        // Function to handle radio button changes
        function handleRadioChange(event) {
            const timeAssignmentAmount = document.querySelector(".goalTimeAssignmentAmount");
            const timeAssignmentExampleText = document.querySelector("#timeAssignmentExampleText");
          
            if (event.target.value === "na") {
              // If N/A is selected, disable the input field and show the N/A message
              timeAssignmentAmount.disabled = true;
              timeAssignmentExampleText.textContent =
                "Selecting 'N/A' for time assignment will require your goal to be completed based solely on the completion of quests. No time entry is required.";
            } else if (event.target.value === "hours") {
              // If Hours is selected, enable the input field and show the Hours message
              timeAssignmentAmount.disabled = false;
              timeAssignmentExampleText.textContent =
                "Selecting 'Hours' for time assignment will require your goal to be completed based on overall time completion. Time will be allotted to all outstanding quests available to the goal.";
            }
          }

          inputContainer.appendChild(hoursRadioLabel);
          inputContainer.appendChild(naRadioLabel);
  
}


function createQuestForm () {
    const questForm = document.createElement("form");
    questForm.classList.add("questForm");

    let x = document.querySelector(".questParallax");
    console.log(x);
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
        "rewardAssignmentInputContainer", 
        "rewardAssignmentExampleTextContainer", 
        "Assign Rewards:", 
        "goalRewardAssignmentAmount", 
        "goalRewardAssignmentAmount", 
        "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "rewardAssignmentExampleText",
    );

    questForm.appendChild(goalTimeContainer);
  
    // Frequency of Quest
    let frequencyContainer = createInputValueElement (
        "formFieldContainer", 
        "timeAssignmentInputContainer", 
        "rewardAssignmentExampleTextContainer", 
        "Assign Time:", 
        "goalTimeAssignmentAmount", 
        "goalTimeAssignmentAmount", 
        "Assign time to your goal. The specified time will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "timeAssignmentExampleText",
    );

    addRadioButtonsToElement(frequencyContainer, "timeAssignmentInputContainer");
    questForm.appendChild(frequencyContainer);
  
    // Goal Deadline
    let deadlineContainer = createFormField(
      "date",
      "deadline",
      "Enter the deadline for your quest.",
      "Enter the start date and end date for your Goal."
    );
    questForm.appendChild(deadlineContainer);
 
  
    x.appendChild(questForm);
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
    // listItemsContainer.appendChild(createQuestForm());
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

// The code below is if I want to include the ability to link and existing quest.

//         let linkExistingQuestContainer = document.createElement("div");
//         linkExistingQuestContainer.classList.add("linkExistingQuestContainer");
        
//         let linkExistingQuestTitle = document.createElement("h4");
//         let linkExistingQuestInputContainer = document.createElement("div");
//         let linkExistingQuestInput = document.createElement("select");
        
//         let linkExistingQuestExampleText = document.createElement("h6");
//         linkExistingQuestExampleText.textContent = 'If you have already created a quest that you would like to link to this goal, please select from your list of outstanding unfinished quests.';
//         linkExistingQuestExampleText.classList.add("goalCreationExampleText")

//        // Add the placeholder option as the first option in the dropdown
//         let placeholderOption = document.createElement("option");
//         placeholderOption.value = ""; // Set the value to an empty string or any appropriate default value
//         placeholderOption.textContent = "Select an Existing Quest to Link";
//         placeholderOption.disabled = true;
//         placeholderOption.selected = true;
//         linkExistingQuestInput.appendChild(placeholderOption);

//         // Add event listener to handle focus event
//         linkExistingQuestInput.addEventListener("focus", function() {
//             // Check if the placeholder option is selected (value is an empty string)
//             if (linkExistingQuestInput.value === "") {
//             // Remove the placeholder option from the dropdown
//             linkExistingQuestInput.removeChild(linkExistingQuestInput.options[0]);
//             }
//         });
  
//         // Add event listener to handle blur event (when the dropdown loses focus)
//         linkExistingQuestInput.addEventListener("blur", function() {
//             // Check if no option is selected (value is an empty string)
//             if (linkExistingQuestInput.value === "") {
//             // Re-add the placeholder option to the dropdown
//       const placeholderOption = document.createElement("option");
//       placeholderOption.value = "";
//       placeholderOption.textContent = "Select an Existing Quest to Link:";
//       placeholderOption.disabled = true;
//       placeholderOption.selected = true;
//       linkExistingQuestInput.insertBefore(placeholderOption, linkExistingQuestInput.firstChild);
//     }
//   });

//         for (let i = 0; i < currentQuestList.length; i++) {
//             let quest = currentQuestList[i];
//             let option = document.createElement("option");
//             option.value = quest.id;
//             option.textContent = quest.objective;
//             linkExistingQuestInput.appendChild(option);
//         }

        // // Add event listener to the dropdown to handle change event
        // linkExistingQuestInput.addEventListener("change", function() {
        //     // Check if the placeholder option is selected (value is empty string)
        //     if (linkExistingQuestInput.value === "") {
        //     // Remove the placeholder option from the dropdown
        //     linkExistingQuestInput.removeChild(placeholderOption);
        //     }
        // });
        
        // Add classes to the elements corresponding to their variable names
        // linkExistingQuestTitle.classList.add("linkExistingQuestTitle");
        // linkExistingQuestInputContainer.classList.add("linkExistingQuestInputContainer");
        // linkExistingQuestInput.classList.add("linkExistingQuestInput");
        
        // Add content or styles to the elements as needed
        // linkExistingQuestTitle.textContent = "Link Existing Quest:";
        
        // Append the elements to the linkExistingQuestContainer
        // linkExistingQuestContainer.appendChild(linkExistingQuestTitle);
        // linkExistingQuestContainer.appendChild(linkExistingQuestInputContainer);
        // linkExistingQuestContainer.appendChild(linkExistingQuestExampleText);
        // linkExistingQuestInputContainer.appendChild(linkExistingQuestInput)

    

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDTjtBQUMxQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxPQUFPO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDOUMsVUFBVSx3Q0FBd0M7QUFDbEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVDQUF1QztBQUN2RCxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3ZPZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGMEM7QUFDc0I7QUFDTDtBQUM2RjtBQUN4SjtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFzQjtBQUNsQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsa0ZBQTJCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDhFQUF1QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDhFQUF1QjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGdGQUF3QjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msb0VBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFUQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGdFQUFnRSx3QkFBd0I7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNa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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ3FGO0FBQzRKO0FBQ2hNO0FBQ3BDO0FBQ1U7QUFDSztBQUN3QztBQUNzRTtBQUN0QjtBQUMxQjtBQUNyRDtBQUN1STtBQUNwSTtBQUN5RDtBQUN1STtBQUMzTTtBQUNLO0FBQ0U7QUFDTTtBQUNoRTtBQUNBO0FBQ0EsOERBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsVUFBVTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdCQUF3QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9jbGFzc2VzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY2xhc3Nlcy9pdGVtU3RhdHMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jdXJyZW5jeUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2VuZXJhdGVGb3JtLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ29hbENyZWF0aW9uUGFnZS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2dvYWxDcmVhdGlvblBhZ2VIVE1MLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ29hbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleFZpZXdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbml0aWFsaXplSW5kZXhGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbnZlbnRvcnlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWwuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9tb2RhbEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvcmVuZGVyRGVmYXVsdEluZGV4SHRtbC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3BGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3dlYXBvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBnZXROZXdRdWVzdCB9IGZyb20gXCIuLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgem9kaWFjU2lnbnMgZnJvbSBcIi4uL3pvZGlhY1Bvd2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0IHtcclxuICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkLCBvbmVPZmZCb29sLCBnb2FsSWQsIHRpbWVTcGVudCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm9uZU9mZkJvb2wgPSBvbmVPZmZCb29sO1xyXG4gICAgdGhpcy5nb2FsSWQgPSBnb2FsSWQ7XHJcbiAgICB0aGlzLnRpbWVTcGVudCA9IHRpbWVTcGVudFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdvYWwge1xyXG4gIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgcmV3YXJkKSB7XHJcbiAgICB0aGlzLm9iamVjdGl2ZSA9IG9iamVjdGl2ZTtcclxuICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgdGhpcy5xdWVzdHMgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICAgIHRoaXMudGltZXNQZXJXZWVrU3BlbnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdCh0aW1lc1BlcldlZWtSZXF1aXJlZCwgdG90YWxUaW1lUmVxdWlyZWQpIHtcclxuXHJcbiAgICBsZXQgcXVlc3QgPSBuZXcgUXVlc3QoXCJHbyB0byBHeW1cIiwgbnVsbCwgZmFsc2UsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDE4KSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgLy8gQ2FzZSAxOiBGcmVxdWVuY3kgdHlwZSBpcyB0aW1lLWFyYml0cmFyeVxyXG4gICAgIGlmICh0b3RhbFRpbWVSZXF1aXJlZCA9PSAwIHx8IHRvdGFsVGltZVJlcXVpcmVkID09IG51bGwpIHtcclxuICAgICAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGltZXNQZXJXZWVrUmVxdWlyZWQgLSB0aGlzLnRpbWVzUGVyV2Vla1NwZW50O1xyXG4gICAgICAgIHJldHVybiB7cXVlc3QsIHRpbWVzUGVyV2Vla1JlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgICB9XHJcblxyXG5cclxuICAgIC8vIENhc2UgMjogRnJlcXVlbmN5IHR5cGUgaXMgdGltZS1zcGVjaWZpY1xyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0b3RhbFRpbWVSZXF1aXJlZCAtIHRoaXMudG90YWxUaW1lU3BlbnQ7XHJcbiAgICAgIHJldHVybiB7cXVlc3QsIHRvdGFsVGltZVJlcXVpcmVkLCByZW1haW5pbmdUaW1lfTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICB9XHJcblxyXG4gIGxpbmtRdWVzdFRvR29hbChxdWVzdCkge1xyXG4gICAgaWYgKHRoaXMucXVlc3RzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHF1ZXN0cyk7XHJcbiAgICB0aGlzLnF1ZXN0cy5wdXNoKHF1ZXN0KTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgKz0gcXVlc3QucXVlc3RDb21wbGV0ZSA/IHF1ZXN0LmR1cmF0aW9uIDogMDtcclxuICB9XHJcbiBcclxuICBpc0dvYWxDb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZVNwZW50ID49IHRoaXMudGltZVJlcXVpcmVkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCgpIHtcclxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIHF1ZXN0XHJcbiAgLy8gWW91IGNhbiB1c2UgYSBsaWJyYXJ5IG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb247XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0cyA9IHt9O1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTdGF0KHN0YXROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgY29uc3QgZXF1aXBwZWRWYWx1ZSA9IHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgKyBlcXVpcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdW5lcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSAmJiB0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gLT0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpIHtcclxuICAgICAgc3dpdGNoIChoZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNixcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA4LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNixcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA4LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDgsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogOCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIHR5cGUuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXZlbFVwKCkge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCB8fCAxO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgPSBsZXZlbCArIDE7XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzICs9IDU7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgNSBza2lsbCBwb2ludHMgcGVyIGxldmVsXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbGxvY2F0ZVNraWxsUG9pbnQoc3RhdE5hbWUpIHtcclxuICAgICAgaWYgKHRoaXMuX3NraWxsUG9pbnRzID4gMCAmJiB0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSAxO1xyXG4gICAgICAgIHRoaXMuX3NraWxsUG9pbnRzIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldCBza2lsbFBvaW50cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NraWxsUG9pbnRzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVJbWFnZSwgaGVyb1R5cGUsIGVxdWlwcGVkSXRlbXMsIGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxTZWxlY3Rpb24gPSBlbGVtZW50YWxTZWxlY3Rpb247XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gdGhpcy5nZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgZ2V0IHNwcml0ZUltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVJbWFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHNwcml0ZUltYWdlKHNwcml0ZUltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVyb1R5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9oZXJvVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVyb1R5cGUoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZXF1aXBwZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50YWxBZmZpbml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxBZmZpbml0eSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciBlcXVpcHBpbmcgYW4gaXRlbVxyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhdHRhY2sgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsQXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTcGVjaWFsIEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCaXJ0aGRheUluUmFuZ2UoYmlydGhkYXksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGJpcnRoZGF5IHRvIGEgRGF0ZSBvYmplY3QgaWYgaXQncyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheVxyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURheSA9IGJpcnRoZGF5RGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGVuZERheSA9IGVuZERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAxMSAmJiBiaXJ0aGRheURheSA+IDIxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAwICYmIGJpcnRoZGF5RGF5IDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoID4gc3RhcnRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gc3RhcnRNb250aCAmJiBiaXJ0aGRheURheSA+PSBzdGFydERheSkpICYmXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy8gT3RoZXIgbWV0aG9kcyBjYW4gYmUgYWRkZWQgaGVyZSBmb3IgZnVydGhlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG5cclxuICAgICAgICAvLyBpZiBlbGVtZW50YWwgc2VsZWN0aW9uIGlzIGEgYmlydGhkYXkgcHJvdmlkZWQ6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSB6b2RpYWMgU2lnbnMgZGF0ZSByYW5nZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcclxuICAgICAgICAgICAgbGV0IGJpcnRoRGF5UmFuZ2VDaGVjayA9IHRoaXMuaXNCaXJ0aGRheUluUmFuZ2UoZWxlbWVudGFsU2VsZWN0aW9uLCBkYXRlQ2hlY2tlci5zdGFydERhdGUsIGRhdGVDaGVja2VyLmVuZERhdGUpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbOV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmlydGhEYXlSYW5nZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gPT0gem9kaWFjU2lnbnNbaW5kZXhdLl91bmlxdWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4iLCJleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlRWxlbWVudHMgPSBbXHJcbiAgICBcIlN0ZWVsXCIsXHJcbiAgICBcIkFieXNzXCIsXHJcbiAgICBcIlplcGh5clwiLFxyXG4gICAgXCJMdW5hclwiLFxyXG4gICAgXCJTb2xhclwiLFxyXG4gICAgXCJHYWlhXCIsXHJcbiAgICBcIkFldGhlclwiLFxyXG4gICAgXCJDb3Jyb2RlXCIsXHJcbiAgICBcIkluZmVybm9cIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJWb2x0XCIsXHJcbiAgICBcIk1pc3RcIixcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVJhcml0eSA9IFtcclxuICAgIHsgcmFyaXR5OiBcIm5vcm1hbFwiLCBjaGFuY2U6IDQwfSxcclxuICAgIHsgcmFyaXR5OiBcInVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgIHsgcmFyaXR5OiBcInJhcmVcIiwgY2hhbmNlOiAxOCB9LFxyXG4gICAgeyByYXJpdHk6IFwiZXBpY1wiLCBjaGFuY2U6IDkgfSxcclxuICAgIHsgcmFyaXR5OiBcImxlZ2VuZGFyeVwiLCBjaGFuY2U6IDMgfSxcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVTdGF0cyA9IHtcclxuICBub3JtYWw6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUsIG1heDogMTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAsIG1heDogMjAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAwNSwgbWF4OiAwLjAyIH1cclxuICB9LFxyXG4gIHVuY29tbW9uOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA3LjUsIG1heDogMTUgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMiwgbWF4OiAwLjA2IH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgcmFyZToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMTUsIG1heDogMzAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDMwLCBtYXg6IDYwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wNiwgbWF4OiAwLjEyIH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgZXBpYzoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMjUsIG1heDogNTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMTIsIG1heDogMC4yNCB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGxlZ2VuZGFyeToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAwLCBtYXg6IDIwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMjQsIG1heDogMC4zIH0gLy8gVXBkYXRlZCBtYXhcclxuICB9XHJcbn07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVQcmVmaXggPSB7XHJcbiAgICBub3JtYWw6IFtcclxuICAgICAgXCJPcmRpbmFyeVwiLCBcIkNvbW1vblwiLCBcIlBsYWluXCIsIFwiUmVndWxhclwiLCBcIkJhc2ljXCJcclxuICAgIF0sXHJcbiAgICB1bmNvbW1vbjogW1xyXG4gICAgICBcIlVuY29tbW9uXCIsIFwiU3RyYW5nZVwiLCBcIlNwZWNpYWxcIiwgXCJEaXN0aW5jdGl2ZVwiLCBcIkFibm9ybWFsXCJcclxuICAgIF0sXHJcbiAgICByYXJlOiBbXHJcbiAgICAgIFwiUmFyZVwiLCBcIlByZWNpb3VzXCIsIFwiRXhxdWlzaXRlXCIsIFwiTWFnbmlmaWNlbnRcIiwgXCJFbGl0ZVwiXHJcbiAgICBdLFxyXG4gICAgZXBpYzogW1xyXG4gICAgICBcIkVwaWNcIiwgXCJHcmFuZFwiLCBcIklsbHVzdHJpb3VzXCIsIFwiVHJhbnNjZW5kZW50XCIsIFwiTWFqZXN0aWNcIlxyXG4gICAgXSxcclxuICAgIGxlZ2VuZGFyeTogW1xyXG4gICAgICBcIkxlZ2VuZGFyeVwiLCBcIlVsdGltYXRlXCIsIFwiRXRlcm5hbFwiLCBcIkludmluY2libGVcIiwgXCJHb2RsaWtlXCJcclxuICAgIF1cclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3VmZml4ID0ge1xyXG4gICAgU3RlZWw6IFwib2YgV2FyXCIsXHJcbiAgICBBYnlzczogXCJvZiBXYWlsaW5nXCIsXHJcbiAgICBaZXBoeXI6IFwib2YgSG93bGluZ1wiLFxyXG4gICAgTHVuYXI6IFwib2YgTW9vbmxpZ2h0XCIsXHJcbiAgICBTb2xhcjogXCJvZiBTdW5saWdodFwiLFxyXG4gICAgVGVycmE6IFwib2YgVGVjdG9uaWNcIixcclxuICAgIEFldGhlcjogXCJvZiBHcmF2aXR5XCIsXHJcbiAgICBDb3Jyb2RlOiBcIm9mIFBvaXNvblwiLFxyXG4gICAgSW5mZXJubzogXCJvZiBCdXJuaW5nXCIsXHJcbiAgICBHYWlhOiBcIm9mIE5hdHVyZVwiLFxyXG4gICAgVm9sdDogXCJvZiBTaG9ja2luZ1wiLFxyXG4gICAgTWlzdDogXCJvZiBGcmVlemluZ1wiXHJcbiAgfTsiLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gXCIuL2NsYXNzZXMvY2xhc3Nlc1wiO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTtcclxuZXhwb3J0IGxldCBjdXJyZW50R29hbExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudEdvYWxMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSB8fCBbbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIkNoZXN0S2V5c1wiLCAwKV07XHJcbmV4cG9ydCBsZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xyXG5leHBvcnQgbGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG5cclxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcclxufSIsImltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCwgY3JlYXRlR2hvc3RDYXJkIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSwgY3JlYXRlUXVlc3RQYXJhbGxheCB9IGZyb20gXCIuL2luZGV4Vmlld0Z1bmN0aW9uc1wiO1xyXG4vLyBpbXBvcnQgeyBjdXJyZW50R29hbExpc3QsIGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlTWFuYWdlciAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRHb2FsTGlzdCkge1xyXG5cclxuICAgIC8vIERlZmF1bHQgYW5kIFBlcnNpc3RpbmcgRXZlbnRzOlxyXG4gICAgLy8gMS4gUmVuZGVyIEN1cnJlbmN5IFZhbHVlc1xyXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4gICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpXHJcbiAgICAgICAgcXVlc3RQYXJhbGxheC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdlbmVyYXRlUmFuZG9tV2VhcG9uIH0gZnJvbSBcIi4vc2hvcEZ1bmN0aW9uXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2ltYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlLCBnZXRXZWFwb25JbWFnZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuICBcclxuZnVuY3Rpb24gY2hlY2tWYWxpZEN1cnJlbmN5QW1vdW50KGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBpZiAoY3VycmVuY3lDb250YWluZXJbMF0uYW1vdW50IDwgMjApIHtcclxuICAgICAgYWxlcnQoXCJJTlNVRkZJQ0lFTlQgR0cgVE9LRU5TXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgLT0gMjA7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNsb3RNYWNoaW5lSXRlbSAoaGVyb1NlbGVjdGlvbikge1xyXG4gICAvLyBHZW5lcmF0ZSB0aGUgd2VhcG9uIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgdXNpbmcgdGhlIGdlbmVyYXRlUmFuZG9tV2VhcG9uIGZ1bmN0aW9uXHJcbiAgIGxldCBnZW5lcmF0ZWRXZWFwb24gPSBnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKTtcclxuXHJcbiAgIC8vIFBhcnNlIHRoZSB3ZWFwb24gQ2xhc3MgZGF0YSB0byBiZSB1c2VkIGZvciBmcm9udCBlbmQgaW1hZ2VzXHJcbiAgIGxldCByZXN1bHRpbmdUeXBlID0gZ2VuZXJhdGVkV2VhcG9uLl90eXBlO1xyXG4gICBsZXQgcmVzdWx0aW5nUmFyaXR5ID0gZ2VuZXJhdGVkV2VhcG9uLl9yYXJpdHk7XHJcbiAgIGxldCByZXN1bHRpbmdFbGVtZW50ID0gZ2VuZXJhdGVkV2VhcG9uLl9lbGVtZW50O1xyXG5cclxuICAgLy8gUGFzcyB0aGUgZGF0YSB0byBhIGZpbmQgZnVuY3Rpb24gdGhhdCBsb2NhdGVzIHRoZSBjaGVja3MgZWFjaCBpbWFnZSAoc3RyaW5nKSBVUkwgdG8gc2VlIGlmIGl0IGluY2x1ZGVzIHRoZSBwYXJzZWQgZGF0YSAgIFxyXG4gICAvLyBJZiBkYXRhIG1hdGNoZXMsIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgaW1hZ2UgbGluayBhcyB2YXJpYWJsZSBcclxuICAgbGV0IHNlbGVjdGVkVHlwZUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UocmVzdWx0aW5nVHlwZSk7XHJcbiAgIGxldCBzZWxlY3RlZFJhcml0eUltYWdlID0gZ2V0UmFyaXR5SW1hZ2UocmVzdWx0aW5nUmFyaXR5KTtcclxuICAgbGV0IHNlbGVjdGVkRWxlbWVudEltYWdlID0gZ2V0RWxlbWVudEltYWdlKHJlc3VsdGluZ0VsZW1lbnQpO1xyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZXF1aXBtZW50IHJlZWxcclxuICAgY29uc3QgZXF1aXBtZW50UmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcG1lbnRSZWVsJyk7XHJcblxyXG4gICAvLyBTZWxlY3RlZCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRXF1aXBtZW50U3ltYm9sID0gIGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFR5cGVJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIHRvcCBzbG90XHJcbiAgIGNvbnN0IHRvcEVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBib3R0b20gc2xvdFxyXG4gICBjb25zdCBib3R0b21FcXVpcG1lbnRTeW1ib2wgPSBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRXF1aXBtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX0nKWBcclxuICAgICBcclxuICAgXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIHJhcml0eSByZWVsXHJcbiAgIGNvbnN0IHJhcml0eVJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFyaXR5UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkUmFyaXR5U3ltYm9sID0gIHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRSYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFJhcml0eUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbVJhcml0eVN5bWJvbCA9IHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21SYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyYXJpdHlJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFyaXR5SW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgICBcclxuXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIGVsZW1lbnQgcmVlbFxyXG4gICBjb25zdCBlbGVtZW50UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICBjb25zdCBzZWxlY3RlZEVsZW1lbnRTeW1ib2wgPSAgZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2VsZWN0ZWRFbGVtZW50SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVsZW1lbnRTeW1ib2wgPSBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbUVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsZW1lbnRJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICByZXR1cm4gZ2VuZXJhdGVkV2VhcG9uO1xyXG4gfVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGluIChoZXJvU2VsZWN0aW9uLCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmIChjaGVja1ZhbGlkQ3VycmVuY3lBbW91bnQoY3VycmVuY3lDb250YWluZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2xvdE1hY2hpbmVJdGVtKGhlcm9TZWxlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXMgKCkge1xyXG4gICAgY29uc3Qgc3ltYm9sRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN5bWJvbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHN5bWJvbEVsZW1lbnRzKTtcclxuXHJcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc3ltYm9sIGVsZW1lbnRzXHJcbiAgICAgIHN5bWJvbEVsZW1lbnRzLmZvckVhY2goKHN5bWJvbEVsZW1lbnQpID0+IHtcclxuICAgICAgICBzeW1ib2xFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gb3BlblNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2VTbG90TWFjaGluZU1vZGFsKCkge1xyXG4gICAgcmVzZXRTbG90TWFjaGluZUltYWdlcygpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3RNYWNoaW5lTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHZXREYXRhRm9ybSh0eXBlKSB7XHJcblxyXG5cclxuICAgIGlmICh0eXBlID09PSBcImdvYWxcIikge1xyXG4gICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdvYWxDb250YWluZXInKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIGZvcm0gZWxlbWVudFxyXG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICBmb3JtLmNsYXNzTmFtZSA9ICdnb2FsLWZvcm0nOyAvLyBBZGQgYSBjbGFzcyBmb3Igc3R5bGluZ1xyXG4gICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xyXG4gIFxyXG4gICAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYW4gZXhhbXBsZSBsYWJlbFxyXG4gICAgICBjb25zdCBjcmVhdGVFeGFtcGxlTGFiZWwgPSAoZXhhbXBsZVRleHQpID0+IHtcclxuICAgICAgICBjb25zdCBleGFtcGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGV4YW1wbGVMYWJlbC50ZXh0Q29udGVudCA9IGAke2V4YW1wbGVUZXh0fWA7XHJcbiAgICAgICAgZXhhbXBsZUxhYmVsLmNsYXNzTmFtZSA9ICdleGFtcGxlLWxhYmVsJztcclxuICAgICAgICByZXR1cm4gZXhhbXBsZUxhYmVsO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICAvLyBDcmVhdGUgZ29hbCBuYW1lIGlucHV0XHJcbiAgICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiR29hbCBOYW1lL09iamVjdGl2ZTpcIjtcclxuICAgICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2dvYWxOYW1lJyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFeGFtcGxlTGFiZWwoJ1doYXQgaXMgbXkgZGVzaXJlZCBHb2FsPyBBbiBlLmc6IFwiQmVjb21lIGZsdWVudCBpbiBTcGFuaXNoXCInKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2dvYWxOYW1lJyk7XHJcbiAgICAgIG5hbWVJbnB1dC5pZCA9ICdnb2FsTmFtZSc7IC8vIEFkZCBhbiBpZCBmb3IgdGFyZ2V0aW5nIHdpdGggQ1NTXHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIHRhc2sgaW5wdXRcclxuICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIFJlcXVpcmVkOlwiO1xyXG4gICAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndGFzaycpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRXhhbXBsZUxhYmVsKCdXaGF0IHRhc2sgd2lsbCBoZWxwIG1lIGFjaGlldmUgdGhpcyBnb2FsPyBBbiBlLmc6IFN0dWR5IFNwYW5pc2gnKSk7XHJcbiAgXHJcbiAgICAgIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Rhc2snKTtcclxuICAgICAgdGFza0lucHV0LmlkID0gJ3Rhc2snOyAvLyBBZGQgYW4gaWQgZm9yIHRhcmdldGluZyB3aXRoIENTU1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgXHJcbiAgICAgIC8vIENyZWF0ZSBmcmVxdWVuY3kgaW5wdXRcclxuICAgICAgY29uc3QgZnJlcXVlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBmcmVxdWVuY3lMYWJlbC50ZXh0Q29udGVudCA9IFwiRnJlcXVlbmN5OlwiO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGZyZXF1ZW5jeUxhYmVsKTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgY29uc3QgZnJlcXVlbmN5T3B0aW9ucyA9IFtcclxuICAgICAgICB7IGxhYmVsOiAnSG91cnMvZGF5JywgdmFsdWU6ICdob3VycycgfSxcclxuICAgICAgICB7IGxhYmVsOiAnTWludXRlcy9kYXknLCB2YWx1ZTogJ21pbnV0ZXMnIH0sXHJcbiAgICAgICAgeyBsYWJlbDogJ09uY2UvZGF5JywgdmFsdWU6ICdvbmNlJyB9XHJcbiAgICAgIF07XHJcbiAgXHJcbiAgICAgIGNvbnN0IGZyZXF1ZW5jeVZhbHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBmcmVxdWVuY3lWYWx1ZUxhYmVsLnRleHRDb250ZW50ID0gXCJGcmVxdWVuY3kgVmFsdWU6XCI7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZnJlcXVlbmN5VmFsdWVMYWJlbCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRXhhbXBsZUxhYmVsKCcyJykpO1xyXG4gIFxyXG4gICAgICBjb25zdCBmcmVxdWVuY3lWYWx1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgZnJlcXVlbmN5VmFsdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2ZyZXF1ZW5jeVZhbHVlJyk7XHJcbiAgICAgIGZyZXF1ZW5jeVZhbHVlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpO1xyXG4gICAgICBmcmVxdWVuY3lWYWx1ZUlucHV0LmlkID0gJ2ZyZXF1ZW5jeVZhbHVlJzsgLy8gQWRkIGFuIGlkIGZvciB0YXJnZXRpbmcgd2l0aCBDU1NcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lWYWx1ZUlucHV0KTtcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgZnJlcXVlbmN5T3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIG9wdGlvbkxhYmVsLnRleHRDb250ZW50ID0gb3B0aW9uLmxhYmVsO1xyXG4gIFxyXG4gICAgICAgIGNvbnN0IG9wdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBvcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFkaW8nKTtcclxuICAgICAgICBvcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZnJlcXVlbmN5VHlwZScpO1xyXG4gICAgICAgIG9wdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBvcHRpb24udmFsdWUpO1xyXG4gIFxyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uTGFiZWwpO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQob3B0aW9uSW5wdXQpO1xyXG4gICAgICB9KTtcclxuICBcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICBcclxuICAgICAgLy8gQ3JlYXRlIHRvdGFsIHRpbWUgaW5wdXRcclxuICAgICAgY29uc3QgdG90YWxUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICB0b3RhbFRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVG90YWwgVGltZSB0byBDb21wbGV0ZSB0aGUgR29hbDpcIjtcclxuICAgICAgdG90YWxUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndG90YWxUaW1lJyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQodG90YWxUaW1lTGFiZWwpO1xyXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUV4YW1wbGVMYWJlbCgnMTAgaG91cnMgYSB3ZWVrJykpO1xyXG4gIFxyXG4gICAgICBjb25zdCB0b3RhbFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgIHRvdGFsVGltZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgIHRvdGFsVGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b3RhbFRpbWUnKTtcclxuICAgICAgdG90YWxUaW1lSW5wdXQuaWQgPSAndG90YWxUaW1lJzsgLy8gQWRkIGFuIGlkIGZvciB0YXJnZXRpbmcgd2l0aCBDU1NcclxuICAgICAgZm9ybS5hcHBlbmRDaGlsZCh0b3RhbFRpbWVJbnB1dCk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgXHJcbiAgICAgIC8vIENyZWF0ZSBhIHN1Ym1pdCBidXR0b25cclxuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICAgICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnU3VibWl0Jyk7XHJcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBcInF1ZXN0XCIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVlc3RQYXJhbGxheCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZm9ybSBlbGVtZW50XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGZvcm0uY2xhc3NOYW1lID0gJ2NyZWF0ZVF1ZXN0Rm9ybSc7XHJcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1Ub3AgZGl2XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1Ub3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZm9ybVRvcERpdi5jbGFzc05hbWUgPSAnZm9ybVRvcCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRvcERpdik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1Ub3BCdXR0b25cclxuICAgICAgICAgICAgY29uc3QgZm9ybVRvcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICAgICBmb3JtVG9wQnV0dG9uLmNsYXNzTmFtZSA9ICdmb3JtVG9wQnV0dG9uJztcclxuICAgICAgICAgICAgZm9ybVRvcEJ1dHRvbi5pZCA9ICdmb3JtVG9wRXhpdEJ1dHRvbic7XHJcbiAgICAgICAgICAgIGZvcm1Ub3BCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XHJcbiAgICAgICAgICAgIGZvcm1Ub3BEaXYuYXBwZW5kQ2hpbGQoZm9ybVRvcEJ1dHRvbik7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIG9iamVjdGl2ZSBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RpdmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0T2JqZWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUxhYmVsLnRleHRDb250ZW50ID0gJ09iamVjdGl2ZTonO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9iamVjdGl2ZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBvYmplY3RpdmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdE9iamVjdGl2ZScpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVJbnB1dC5pZCA9ICdxdWVzdE9iamVjdGl2ZSc7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG9iamVjdGl2ZUlucHV0KTtcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgZGF0ZSBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlIHRvIENvbXBsZXRlOic7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdERhdGUnKTtcclxuICAgICAgICAgICAgZGF0ZUlucHV0LmlkID0gJ3F1ZXN0RGF0ZSc7XHJcbiAgICAgICAgICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBjdXJyZW5jeSB0eXBlIHNlbGVjdFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeVR5cGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0Q3VycmVuY3lUeXBlJyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZUxhYmVsLnRleHRDb250ZW50ID0gJ0N1cnJlbmN5IFR5cGU6JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjdXJyZW5jeVR5cGVMYWJlbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lUeXBlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5VHlwZVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3RDdXJyZW5jeVR5cGUnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmlkID0gJ3F1ZXN0Q3VycmVuY3lUeXBlJztcclxuICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICBmb3JtLmFwcGVuZENoaWxkKGN1cnJlbmN5VHlwZVNlbGVjdCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lPcHRpb25zID0gW1xyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdHR1Rva2VucycsIGxhYmVsOiAnR0cgVG9rZW5zJyB9LFxyXG4gICAgICAgICAgICAgIHsgdmFsdWU6ICdDaGVzdEtleXMnLCBsYWJlbDogJ0NoZXN0IEtleXMnIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBjdXJyZW5jeU9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lPcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIG9wdGlvbi52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24ubGFiZWw7XHJcbiAgICAgICAgICAgICAgY3VycmVuY3lUeXBlU2VsZWN0LmFwcGVuZENoaWxkKGN1cnJlbmN5T3B0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGN1cnJlbmN5IGFtb3VudCBpbnB1dFxyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW5jeUFtb3VudExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgY3VycmVuY3lBbW91bnRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdEN1cnJlbmN5QW1vdW50Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgQW1vdW50Oic7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3VycmVuY3lBbW91bnRMYWJlbCk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgY3VycmVuY3lBbW91bnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFtb3VudElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdEN1cnJlbmN5QW1vdW50Jyk7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuaWQgPSAncXVlc3RDdXJyZW5jeUFtb3VudCc7XHJcbiAgICAgICAgICAgIGN1cnJlbmN5QW1vdW50SW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3VycmVuY3lBbW91bnRJbnB1dCk7XHJcbiAgICAgICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGZvcm1CdXR0b25EaXZcclxuICAgICAgICAgICAgY29uc3QgZm9ybUJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmb3JtQnV0dG9uRGl2LmNsYXNzTmFtZSA9ICdmb3JtQnV0dG9uRGl2JztcclxuICAgICAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtQnV0dG9uRGl2KTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxyXG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTmFtZSA9ICdmb3JtQnV0dG9uJztcclxuICAgICAgICAgICAgc3VibWl0QnV0dG9uLmlkID0gJ2Zvcm1TdWJtaXRCdXR0b24nO1xyXG4gICAgICAgICAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcclxuICAgICAgICAgICAgZm9ybUJ1dHRvbkRpdi5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEFkZCBmb3JtIHN1Ym1pdCBldmVudCBsaXN0ZW5lclxyXG4gICAgICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBmb3JtIHN1Ym1pc3Npb25cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBmb3JtIHZhbHVlc1xyXG4gICAgICAgICAgICAgIGNvbnN0IG9iamVjdGl2ZSA9IG9iamVjdGl2ZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBkYXRlSW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgY29uc3QgY3VycmVuY3lUeXBlID0gY3VycmVuY3lUeXBlU2VsZWN0LnZhbHVlO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbmN5QW1vdW50ID0gY3VycmVuY3lBbW91bnRJbnB1dC52YWx1ZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIERpc3BsYXkgdGhlIGZvcm0gdmFsdWVzXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPYmplY3RpdmU6IFwiICsgb2JqZWN0aXZlKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRhdGUgdG8gQ29tcGxldGU6IFwiICsgZGF0ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW5jeSBUeXBlOiBcIiArIGN1cnJlbmN5VHlwZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW5jeSBBbW91bnQ6IFwiICsgY3VycmVuY3lBbW91bnQpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gWW91IGNhbiBwZXJmb3JtIG90aGVyIG9wZXJhdGlvbnMgd2l0aCB0aGUgZm9ybSBkYXRhIGhlcmVcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPYmplY3RpdmUgKG9iamVjdGl2ZSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xyXG59IiwiaW1wb3J0IHsgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuaW1wb3J0IGluaXRpYWxpemVEZWZhdWx0SW5kZXggZnJvbSBcIi4vaW5pdGlhbGl6ZUluZGV4RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlIH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50LCBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCwgYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50LCBsaXN0Q29udGFpbmVyLCBjcmVhdGVRdWVzdEZvcm0gfSBmcm9tIFwiLi9nb2FsQ3JlYXRpb25QYWdlSFRNTFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyR29hbENyZWF0aW9uUGFnZSAoKSB7XHJcblxyXG4gICAgbGV0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBDb250ZW50XCIpO1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgaGVhZGVyIGRpdlxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImdvYWxDcmVhdGlvblBhZ2VcIik7XHJcbiAgICBoZWFkZXIuaWQgPSBcImhlYWRlckdvYWxDcmVhdGlvblBhZ2VcIjtcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlciBlbGVtZW50c1xyXG4gICAgICAgIGxldCBoZWFkZXJUaXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGxldCBiYWNrUGFnZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGhlYWRlclRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tQYWdlQnV0dG9uKTtcclxuICAgICAgICAgICAgaGVhZGVyVGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xyXG5cclxuICAgICAgICBsZXQgZGVsZXRlR29hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgICAgIC8vIEFkZCBjbGFzc2VzIGFuZCBJRCB0byB0aGUgZWxlbWVudHNcclxuICAgICAgICBoZWFkZXJUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyVGl0bGVDb250YWluZXJcIilcclxuICAgICAgICBiYWNrUGFnZUJ1dHRvbi5pZCA9IFwiYmFja1BhZ2VCdXR0b25Hb2FsQ3JlYXRpb25QYWdlXCI7XHJcbiAgICAgICAgaGVhZGVyVGl0bGUuaWQgPSBcImhlYWRlclRpdGxlR29hbENyZWF0aW9uUGFnZVwiO1xyXG4gICAgICAgIGRlbGV0ZUdvYWwuaWQgPSBcImRlbGV0ZUdvYWxDcmVhdGlvblBhZ2VcIjtcclxuXHJcbiAgICAgICAgLy8gVGV4dCBDb250ZW50XHJcbiAgICAgICAgYmFja1BhZ2VCdXR0b24udGV4dENvbnRlbnQgPSBcIjxcIjtcclxuICAgICAgICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiR29hbHNcIjtcclxuICAgICAgICBkZWxldGVHb2FsLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcclxuXHJcbiAgICAgICAgYmFja1BhZ2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZSAobWFpblBhZ2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQobWFpblBhZ2UuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGRlbGV0ZUdvYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gIFxyXG4gICAgICAgICAgICB3aGlsZSAobWFpblBhZ2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFpblBhZ2UucmVtb3ZlQ2hpbGQobWFpblBhZ2UuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgLy8gQXBwZW5kIHRoZSBlbGVtZW50cyB0byB0aGUgaGVhZGVyXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGVDb250YWluZXIpXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlR29hbCk7XHJcblxyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgY29udGVudCBkaXZcclxuICAgIGxldCBnb2FsQ3JlYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbENyZWF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25QYWdlXCIpO1xyXG4gICAgZ29hbENyZWF0aW9uQ29udGFpbmVyLmlkID0gXCJnb2FsQ3JlYXRpb25Db250ZW50Q29udGFpbmVyXCI7XHJcblxyXG4gICAgICAgICAvLyBDcmVhdGUgdGhlIGZpcnN0IGNoaWxkIGRpdiB3aXRoIGNsYXNzIFwiZ29hbFRpdGxlQ29udGFpbmVyXCJcclxuXHJcbiAgICAgICAgbGV0IGdvYWxUaXRsZUNvbnRhaW5lciA9IGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudCAoXHJcbiAgICAgICAgICAgIFwiZ29hbFRpdGxlQ29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInRleHRcIixcclxuICAgICAgICAgICAgXCJnb2FsVGl0bGVDb250YWluZXJJbnB1dFwiLFxyXG4gICAgICAgICAgICBcIkVudGVyIFlvdXIgR29hbCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4gICAgICAgICAgICAnRW50ZXIgdGhlIG5hbWUgb2YgeW91ciBnb2FsIGluIHRoZSBcIlVudGl0bGVkXCIgZmllbGQgYWJvdmUuIEFuIGV4YW1wbGUgb2YgYSBnb2FsIGNhbiBiZTogXCJCZWNvbWUgRmx1ZW50IGluIFNwYW5pc2hcIiBvciBcIkdldCBTaXgtUGFjayBBYnNcIi4uLiAnLFxyXG4gICAgICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCJcclxuICAgICAgICAgICAgKSBcclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBzZWNvbmQgY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyXCJcclxuXHJcbiAgICAgICAgbGV0IHJld2FyZEFzc2lnbm1lbnRDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudENvbnRhaW5lclwiLCBcclxuICAgICAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiBSZXdhcmRzOlwiLCBcclxuICAgICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICAgICAgJ0Fzc2lnbiByZXdhcmRzIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCBhbW91bnQgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy4nLCBcclxuICAgICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4gICAgICAgICAgICBcInJld2FyZEFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgdGhpcmQgY2hpbGQgZGl2IHdpdGggY2xhc3MgXCJ0aW1lQXNzaWdubWVudENvbnRhaW5lclwiXHJcbiAgXHJcbiAgICAgICAgbGV0IHRpbWVBc3NpZ25tZW50Q29udGFpbmVyID0gY3JlYXRlSW5wdXRWYWx1ZUVsZW1lbnQgKFxyXG4gICAgICAgICAgICBcInRpbWVBc3NpZ25tZW50Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiBUaW1lOlwiLCBcclxuICAgICAgICAgICAgXCJnb2FsVGltZUFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbiAgICAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgICAgICBcIkFzc2lnbiB0aW1lIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCB0aW1lIHdpbGwgYmUgc3BsaXQgYW1vbmcgeW91ciBvdXRzdGFuZGluZyBxdWVzdHMuXCIsIFxyXG4gICAgICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIsXHJcbiAgICAgICAgICAgIFwidGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICAvLyBBZGQgUmFkaW8gQnV0dG9ucyB0byB0aGUgdGhpcmQgY2hpbGQgZGl2XHJcbiAgICAgICAgYWRkUmFkaW9CdXR0b25zVG9FbGVtZW50KHRpbWVBc3NpZ25tZW50Q29udGFpbmVyLCBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIik7XHJcblxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGZvdXJ0aCBjaGlsZCBkaXYgd2l0aCBjbGFzcyBcImFkZFF1ZXN0Q29udGFpbmVyXCJcclxuICAgICAgICBsZXQgYWRkUXVlc3RDb250YWluZXIgPSBsaXN0Q29udGFpbmVyIChcclxuICAgICAgICAgICAgXCJhZGRRdWVzdENvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIkFkZCBRdWVzdChzKSB0byBZb3VyIEdvYWw6XCIsXHJcbiAgICAgICAgICAgIFwiYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkXCIsXHJcbiAgICAgICAgICAgIFwicXVlc3RQYXJhbGxheFwiXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC8vIClkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIC8vIGFkZFF1ZXN0Q29udGFpbmVyLmNsYXNzTmFtZSA9IFwiYWRkUXVlc3RDb250YWluZXJcIjtcclxuXHJcbiAgICAgICAgLy8gbGV0IGFkZFF1ZXN0Q29udGFpbmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgICAgICAgLy8gbGV0IGFkZFF1ZXN0Q29udGFpbmVySW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdENvbnRhaW5lcklucHV0RmllbGRcIik7XHJcblxyXG4gICAgICAgIC8vIGFkZFF1ZXN0Q29udGFpbmVyVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBRdWVzdChzKSB0byBZb3VyIEdvYWw6XCJcclxuICAgICAgICBcclxuICAgICAgXHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXJUaXRsZSk7XHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGRlZmluZVF1ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAvLyBkZWZpbmVRdWVzdC5jbGFzc0xpc3QuYWRkKFwicXVlc3RQYXJhbGxheFwiKVxyXG4gICAgICAgIC8vIGRlZmluZVF1ZXN0LmFwcGVuZENoaWxkKGNyZWF0ZVF1ZXN0Rm9ybSgpKTtcclxuXHJcbiAgICAgICAgLy8gYWRkUXVlc3RDb250YWluZXJJbnB1dEZpZWxkLmFwcGVuZENoaWxkKGRlZmluZVF1ZXN0KTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIGNoaWxkIGRpdnMgdG8gdGhlIHNlY29uZCBwYXJlbnQgZGl2XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFRpdGxlQ29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXdhcmRBc3NpZ25tZW50Q29udGFpbmVyKTtcclxuICAgIGdvYWxDcmVhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lQXNzaWdubWVudENvbnRhaW5lcik7XHJcbiAgICBnb2FsQ3JlYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RDb250YWluZXIpO1xyXG4gXHJcbiAgICAvLyBDcmVhdGUgdGhlIGZvb3RlciBkaXZcclxuICAgIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25QYWdlXCIpO1xyXG4gICAgZm9vdGVyLmlkID0gXCJmb290ZXJHb2FsQ3JlYXRpb25QYWdlXCJcclxuXHJcbiAgICBsZXQgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImdvYWxDb25maXJtQ3JlYXRlQnV0dG9uXCIpO1xyXG4gICAgZ29hbENvbmZpcm1DcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIlxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdvYWxDb25maXJtQ3JlYXRlQnV0dG9uKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgdGhlIHBhcmVudCBkaXZzIHRvIHRoZSBkb2N1bWVudCBib2R5IG9yIGFueSBvdGhlciBjb250YWluZXJcclxuICAgIG1haW5QYWdlLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtYWluUGFnZS5hcHBlbmRDaGlsZChnb2FsQ3JlYXRpb25Db250YWluZXIpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcblxyXG5jcmVhdGVRdWVzdEZvcm0oKTtcclxuXHJcblxyXG4vLyAgICAgbGV0IGdvYWxUaW1lQ29udGFpbmVyID0gY3JlYXRlSW5wdXRWYWx1ZUVsZW1lbnQgKFxyXG4vLyAgICAgICAgIFwiZm9ybUZpZWxkQ29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIFJld2FyZHM6XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFJld2FyZEFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbi8vICAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuLy8gICAgICAgICBcIkFzc2lnbiByZXdhcmRzIHRvIHlvdXIgZ29hbC4gVGhlIHNwZWNpZmllZCBhbW91bnQgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbi8vICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0XCIsXHJcbi8vICAgICApO1xyXG5cclxuLy8gICAgIC8vIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChnb2FsVGltZUNvbnRhaW5lcik7XHJcbiAgXHJcbi8vICAgICAvLyBGcmVxdWVuY3kgb2YgUXVlc3RcclxuLy8gICAgIGxldCBmcmVxdWVuY3lDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbi8vICAgICAgICAgXCJmb3JtRmllbGRDb250YWluZXJcIiwgXHJcbi8vICAgICAgICAgXCJ0aW1lQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwicmV3YXJkQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIFRpbWU6XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4vLyAgICAgICAgIFwiZ29hbFRpbWVBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4vLyAgICAgICAgIFwiQXNzaWduIHRpbWUgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIHRpbWUgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIiwgXHJcbi8vICAgICAgICAgXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgICAgIFwidGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiLFxyXG4vLyAgICAgKTtcclxuXHJcbi8vICAgICBsZXQgZGVhZGxpbmVDb250YWluZXIgPSBjcmVhdGVGb3JtRmllbGQoXHJcbi8vICAgICAgICAgXCJkYXRlXCIsXHJcbi8vICAgICAgICAgXCJkZWFkbGluZVwiLFxyXG4vLyAgICAgICAgIFwiRW50ZXIgdGhlIGRlYWRsaW5lIGZvciB5b3VyIHF1ZXN0LlwiLFxyXG4vLyAgICAgICAgIFwiRW50ZXIgdGhlIHN0YXJ0IGRhdGUgYW5kIGVuZCBkYXRlIGZvciB5b3VyIEdvYWwuXCJcclxuLy8gICAgICAgKTtcclxuXHJcbi8vIHguYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuLy8geC5hcHBlbmRDaGlsZChnb2FsVGltZUNvbnRhaW5lcik7XHJcbi8vIHguYXBwZW5kQ2hpbGQoZnJlcXVlbmN5Q29udGFpbmVyKTtcclxuLy8geC5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gbGV0IHF1ZXN0TmFtZUNvbnRhaW5lciA9IGNyZWF0ZU9iamVjdGl2ZUlucHV0RWxlbWVudChcclxuLy8gICAgIFwiZm9ybUlucHV0Q29udGFpbmVyXCIsIFxyXG4vLyAgICAgXCJ0ZXh0XCIsIFxyXG4vLyAgICAgXCJxdWVzdEdvYWxPYmplY3RpdmVcIixcclxuLy8gICAgIFwiRW50ZXIgWW91ciBRdWVzdCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4vLyAgICAgJ0VudGVyIHRoZSBcIm9iamVjdGl2ZVwiIE9SIFwibmFtZVwiIG9mIHlvdXIgcXVlc3QgKGFjdGlvbikgZmllbGQgYWJvdmUuIEV4YW1wbGVzIG9mIHF1ZXN0cyBhcmU6IFwiU3R1ZHkgU3BhbmlzaFwiIG9yIFwiRG8gQWItQ3J1bmNoZXNcIicsXHJcbi8vICk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlUXVlc3RGb3JtKCkge1xyXG4vLyAgICAgY29uc3QgcXVlc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbi8vICAgICBxdWVzdEZvcm0uY2xhc3NMaXN0LmFkZChcInF1ZXN0Rm9ybVwiKTtcclxuXHJcbi8vICAgICBsZXQgZGVmYXVsdENsYXNzID0gXCJmb3JtSW5wdXRDb250YWluZXJcIjtcclxuICBcclxuLy8gICAgIC8vIFF1ZXN0IE5hbWVcclxuLy8gICAgIGxldCBxdWVzdE5hbWVDb250YWluZXIgPSBjcmVhdGVPYmplY3RpdmVJbnB1dEVsZW1lbnQoXHJcbi8vICAgICAgICAgZGVmYXVsdENsYXNzLCBcclxuLy8gICAgICAgICBcInRleHRcIiwgXHJcbi8vICAgICAgICAgXCJxdWVzdEdvYWxPYmplY3RpdmVcIixcclxuLy8gICAgICAgICBcIkVudGVyIFlvdXIgUXVlc3QgT2JqZWN0aXZlIEhlcmUuLi5cIixcclxuLy8gICAgICAgICAnRW50ZXIgdGhlIFwib2JqZWN0aXZlXCIgT1IgXCJuYW1lXCIgb2YgeW91ciBxdWVzdCAoYWN0aW9uKSBmaWVsZCBhYm92ZS4gRXhhbXBsZXMgb2YgcXVlc3RzIGFyZTogXCJTdHVkeSBTcGFuaXNoXCIgb3IgXCJEbyBBYi1DcnVuY2hlc1wiJyxcclxuLy8gICAgICk7XHJcbi8vICAgICBxdWVzdEZvcm0uYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuXHJcbi8vICAgICAvLyBHb2FsIFRpbWUgQWxsb3RtZW50XHJcbi8vICAgICBsZXQgZ29hbFRpbWVDb250YWluZXIgPSBjcmVhdGVWYWx1ZUFzc2lnbm1lbnRDb250YWluZXIoXHJcbi8vICAgICAgICAgXCJBbGxvY2F0ZSBRdWVzdCBUaW1lOlwiLFxyXG4vLyAgICAgICAgIFwiQXNzaWduIHRpbWUgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIHRpbWUgd2lsbCBiZSBzcGxpdCBhbW9uZyB5b3VyIG91dHN0YW5kaW5nIHF1ZXN0cy5cIixcclxuLy8gICAgICAgICBcInF1ZXN0R29hbFRpbWVTcGVudFwiXHJcbi8vICAgICApO1xyXG4vLyAgICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGdvYWxUaW1lQ29udGFpbmVyKTtcclxuICBcclxuLy8gICAgIC8vIEZyZXF1ZW5jeSBvZiBRdWVzdFxyXG4vLyAgICAgbGV0IGZyZXF1ZW5jeUNvbnRhaW5lciA9IGNyZWF0ZVZhbHVlQXNzaWdubWVudENvbnRhaW5lcihcclxuLy8gICAgICAgICBcIlF1ZXN0IEZyZXF1ZW5jeTpcIixcclxuLy8gICAgICAgICAnRW50ZXIgdGhlIGZyZXF1ZW5jeSAocGVyIHdlZWspIGF0IHdoaWNoIHlvdSB3aWxsIGNvbXBsZXRlIHRoaXMgcXVlc3QuIEV4YW1wbGU6IFwiNCB0aW1lcyAvIFdlZWtcIiBvciBcIkV2ZXJ5IE1vbmRheSwgVHVlc2RheSwgVGh1cnNkYXkgYW5kIFN1bmRheSBvZiBlYWNoIFdlZWtcIicsXHJcbi8vICAgICAgICAgXCJxdWVzdEdvYWxGcmVxdWVuY3lcIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lDb250YWluZXIpO1xyXG4gIFxyXG4vLyAgICAgLy8gR29hbCBEZWFkbGluZVxyXG4vLyAgICAgbGV0IGRlYWRsaW5lQ29udGFpbmVyID0gY3JlYXRlRm9ybUZpZWxkKFxyXG4vLyAgICAgICBcImRhdGVcIixcclxuLy8gICAgICAgXCJkZWFkbGluZVwiLFxyXG4vLyAgICAgICBcIkVudGVyIHRoZSBkZWFkbGluZSBmb3IgeW91ciBxdWVzdC5cIixcclxuLy8gICAgICAgXCJFbnRlciB0aGUgc3RhcnQgZGF0ZSBhbmQgZW5kIGRhdGUgZm9yIHlvdXIgR29hbC5cIlxyXG4vLyAgICAgKTtcclxuLy8gICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcbiBcclxuICBcclxuLy8gICAgIHJldHVybiBxdWVzdEZvcm07XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVZhbHVlQXNzaWdubWVudENvbnRhaW5lcih0aXRsZVRleHQsIGV4YW1wbGVUZXh0LCBpZCkge1xyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1GaWVsZENvbnRhaW5lclwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudElucHV0Q29udGFpbmVyXCIpO1xyXG4gIFxyXG4vLyAgICAgLy8gQ3JlYXRlIHRoZSByYWRpbyBidXR0b25zIGZvciB0aW1lIG9wdGlvbnNcclxuLy8gICAgIGxldCBob3Vyc1JhZGlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbi8vICAgICBob3Vyc1JhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgXHJcbi8vICAgICBsZXQgaG91cnNSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcclxuLy8gICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidmFsdWVBc3NpZ25tZW50XCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiaG91cnNcIik7XHJcbi8vICAgICBob3Vyc1JhZGlvSW5wdXQuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudFJhZGlvQnV0dG9uXCIpO1xyXG4vLyAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9JbnB1dCk7XHJcbi8vICAgICBob3Vyc1JhZGlvTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJIb3Vyc1wiKSk7XHJcbiAgXHJcbi8vICAgICBsZXQgbmFSYWRpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4vLyAgICAgbmFSYWRpb0xhYmVsLmNsYXNzTGlzdC5hZGQoXCJyYWRpb0xhYmVsXCIpO1xyXG4gIFxyXG4vLyAgICAgbGV0IG5hUmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuLy8gICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbi8vICAgICBuYVJhZGlvSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInZhbHVlQXNzaWdubWVudFwiKTtcclxuLy8gICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5hXCIpO1xyXG4vLyAgICAgbmFSYWRpb0lucHV0LmNsYXNzTGlzdC5hZGQoXCJ2YWx1ZUFzc2lnbm1lbnRSYWRpb0J1dHRvblwiKTtcclxuLy8gICAgIG5hUmFkaW9MYWJlbC5hcHBlbmRDaGlsZChuYVJhZGlvSW5wdXQpO1xyXG4vLyAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTi9BXCIpKTtcclxuICBcclxuLy8gICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZWxlbWVudCBmb3IgdGltZVxyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudEFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudEFtb3VudC5jbGFzc0xpc3QuYWRkKFwiZ29hbFZhbHVlQXNzaWdubWVudEFtb3VudFwiKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudEFtb3VudC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50QW1vdW50LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIik7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyXCIpO1xyXG4gIFxyXG4vLyAgICAgbGV0IHZhbHVlQXNzaWdubWVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRleHQ7XHJcbiAgXHJcbi8vICAgICBsZXQgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXJFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0O1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQuY2xhc3NMaXN0LmFkZChcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyRXhhbXBsZVRleHQuaWQgPSBcInZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0XCI7XHJcbiAgXHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRUaXRsZSk7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRBbW91bnQpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0xhYmVsKTtcclxuLy8gICAgIHZhbHVlQXNzaWdubWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hUmFkaW9MYWJlbCk7XHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRFeGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWx1ZUFzc2lnbm1lbnRDb250YWluZXJFeGFtcGxlVGV4dCk7XHJcbiAgXHJcbi8vICAgICB2YWx1ZUFzc2lnbm1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodmFsdWVBc3NpZ25tZW50SW5wdXRDb250YWluZXIpO1xyXG4vLyAgICAgdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHZhbHVlQXNzaWdubWVudEV4YW1wbGVUZXh0Q29udGFpbmVyKTtcclxuXHJcbi8vICAgICByZXR1cm4gdmFsdWVBc3NpZ25tZW50Q29udGFpbmVyO1xyXG4vLyB9XHJcbiIsIlxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0aXZlSW5wdXRFbGVtZW50IChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBpbnB1dFR5cGUsIFxyXG4gICAgaW5wdXRJRCwgXHJcbiAgICBpbnB1dFBsYWNlSG9sZGVyVGV4dCxcclxuICAgIGV4YW1wbGVUZXh0Q29udGVudCwgXHJcbiAgICBleGFtcGxlQ2xhc3NOYW1lXHJcbiAgICApIHtcclxuXHJcbiAgICBsZXQgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lckNsYXNzTmFtZTtcclxuXHJcbiAgICBsZXQgZWxlbWVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgZWxlbWVudElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgaW5wdXRUeXBlKTtcclxuICAgIGVsZW1lbnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBpbnB1dFBsYWNlSG9sZGVyVGV4dCk7XHJcbiAgICBlbGVtZW50SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMTAwXCIpOyAvLyBTZXQgY2hhcmFjdGVyIGxpbWl0IHRvIDcwXHJcbiAgICBlbGVtZW50SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW5wdXRJRCk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRFeGFtcGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9IGV4YW1wbGVUZXh0Q29udGVudDtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dC5jbGFzc0xpc3QuYWRkKGV4YW1wbGVDbGFzc05hbWUpO1xyXG5cclxuICAgIC8vIEFwcGVuZCB0aGUgaW5wdXQgZWxlbWVudCB0byB0aGUgZWxlbWVudFxyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50SW5wdXQpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50RXhhbXBsZVRleHQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50Q29udGFpbmVyO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBpbnB1dENvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lckNsYXNzTmFtZSwgXHJcbiAgICBwcm9tcHRUaXRsZSwgXHJcbiAgICBpbnB1dFZhbHVlQ2xhc3MsXHJcbiAgICBpbnB1dFZhbHVlSUQsIFxyXG4gICAgZXhhbXBsZVRleHRDb250ZW50LCBcclxuICAgIGV4YW1wbGVUZXh0Q2xhc3NOYW1lLFxyXG4gICAgZXhhbXBsZVRleHRJRFxyXG4gICAgKSB7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50SW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChpbnB1dENvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRFeGFtcGxlVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50RXhhbXBsZVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZChleGFtcGxlVGV4dENvbnRhaW5lckNsYXNzTmFtZSk7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb21wdFRpdGxlO1xyXG5cclxuICAgIGxldCBlbGVtZW50SW5wdXRWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGVsZW1lbnRJbnB1dFZhbHVlLmNsYXNzTGlzdC5hZGQoaW5wdXRWYWx1ZUNsYXNzKTtcclxuICAgIGVsZW1lbnRJbnB1dFZhbHVlLmlkID0gaW5wdXRWYWx1ZUlEO1xyXG5cclxuICAgIGxldCBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBleGFtcGxlVGV4dENvbnRlbnQ7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQuY2xhc3NMaXN0LmFkZChleGFtcGxlVGV4dENsYXNzTmFtZSk7XHJcbiAgICBlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQuaWQgPSBleGFtcGxlVGV4dElEO1xyXG5cclxuICAgIGVsZW1lbnRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50VGl0bGUpO1xyXG4gICAgZWxlbWVudElucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRJbnB1dFZhbHVlKTtcclxuICAgIGVsZW1lbnRFeGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50Q29udGFpbmVyRXhhbXBsZVRleHQpO1xyXG5cclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudElucHV0Q29udGFpbmVyKTtcclxuICAgIGVsZW1lbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEV4YW1wbGVUZXh0Q29udGFpbmVyKTtcclxuXHJcbiAgICBlbGVtZW50SW5wdXRWYWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IGVudGVyZWRWYWx1ZSA9IGVsZW1lbnRJbnB1dFZhbHVlLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbHVlID0gcGFyc2VJbnQoZW50ZXJlZFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKHBhcnNlZFZhbHVlIDw9IDAgfHwgaXNOYU4ocGFyc2VkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnRJbnB1dFZhbHVlQW1vdW50LnNldEN1c3RvbVZhbGlkaXR5KFwiUGxlYXNlIGVudGVyIGEgcG9zaXRpdmUgd2hvbGUgbnVtYmVyIGdyZWF0ZXIgdGhhbiAwLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50SW5wdXRWYWx1ZUFtb3VudC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZWxlbWVudENvbnRhaW5lcjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSYWRpb0J1dHRvbnNUb0VsZW1lbnQgKGVsZW1lbnRDb250YWluZXIsIGlucHV0Q29udGFpbmVyQ2xhc3NOYW1lKSB7XHJcblxyXG4gICAgICAgIGxldCBpbnB1dENvbnRhaW5lciA9IGVsZW1lbnRDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRDb250YWluZXJDbGFzc05hbWV9YClcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dENvbnRhaW5lcilcclxuICAgIC8vIENyZWF0ZSB0aGUgcmFkaW8gYnV0dG9ucyBmb3IgdGltZSBvcHRpb25zXHJcblxyXG4gICAgICAgIC8vIEhvdXJzIFJhZGlvIExhYmVsXHJcbiAgICAgICAgbGV0IGhvdXJzUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBob3Vyc1JhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgICBcclxuICAgICAgICBsZXQgaG91cnNSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbGVtZW50XCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImhvdXJzXCIpO1xyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25cIik7XHJcbiAgICAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGhvdXJzUmFkaW9JbnB1dCk7XHJcbiAgICAgICAgaG91cnNSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSG91cnNcIikpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gTi9BIFJhZGlvIExhdmVsXHJcbiAgICAgICAgbGV0IG5hUmFkaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBuYVJhZGlvTGFiZWwuY2xhc3NMaXN0LmFkZChcInJhZGlvTGFiZWxcIik7XHJcbiAgICBcclxuICAgICAgICBsZXQgbmFSYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFkaW9cIik7XHJcbiAgICAgICAgbmFSYWRpb0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbGVtZW50XCIpO1xyXG4gICAgICAgIG5hUmFkaW9JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIm5hXCIpO1xyXG4gICAgICAgIG5hUmFkaW9JbnB1dC5jbGFzc0xpc3QuYWRkKFwicmFkaW9CdXR0b25cIik7XHJcbiAgICAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKG5hUmFkaW9JbnB1dCk7XHJcbiAgICAgICAgbmFSYWRpb0xhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTi9BXCIpKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIGhvdXJzUmFkaW9JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVJhZGlvQ2hhbmdlKTtcclxuICAgICAgICBuYVJhZGlvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBoYW5kbGVSYWRpb0NoYW5nZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gRnVuY3Rpb24gdG8gaGFuZGxlIHJhZGlvIGJ1dHRvbiBjaGFuZ2VzXHJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmFkaW9DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZUFzc2lnbm1lbnRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxUaW1lQXNzaWdubWVudEFtb3VudFwiKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGltZUFzc2lnbm1lbnRFeGFtcGxlVGV4dFwiKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcIm5hXCIpIHtcclxuICAgICAgICAgICAgICAvLyBJZiBOL0EgaXMgc2VsZWN0ZWQsIGRpc2FibGUgdGhlIGlucHV0IGZpZWxkIGFuZCBzaG93IHRoZSBOL0EgbWVzc2FnZVxyXG4gICAgICAgICAgICAgIHRpbWVBc3NpZ25tZW50QW1vdW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aW1lQXNzaWdubWVudEV4YW1wbGVUZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgIFwiU2VsZWN0aW5nICdOL0EnIGZvciB0aW1lIGFzc2lnbm1lbnQgd2lsbCByZXF1aXJlIHlvdXIgZ29hbCB0byBiZSBjb21wbGV0ZWQgYmFzZWQgc29sZWx5IG9uIHRoZSBjb21wbGV0aW9uIG9mIHF1ZXN0cy4gTm8gdGltZSBlbnRyeSBpcyByZXF1aXJlZC5cIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQudmFsdWUgPT09IFwiaG91cnNcIikge1xyXG4gICAgICAgICAgICAgIC8vIElmIEhvdXJzIGlzIHNlbGVjdGVkLCBlbmFibGUgdGhlIGlucHV0IGZpZWxkIGFuZCBzaG93IHRoZSBIb3VycyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgdGltZUFzc2lnbm1lbnRBbW91bnQuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aW1lQXNzaWdubWVudEV4YW1wbGVUZXh0LnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgIFwiU2VsZWN0aW5nICdIb3VycycgZm9yIHRpbWUgYXNzaWdubWVudCB3aWxsIHJlcXVpcmUgeW91ciBnb2FsIHRvIGJlIGNvbXBsZXRlZCBiYXNlZCBvbiBvdmVyYWxsIHRpbWUgY29tcGxldGlvbi4gVGltZSB3aWxsIGJlIGFsbG90dGVkIHRvIGFsbCBvdXRzdGFuZGluZyBxdWVzdHMgYXZhaWxhYmxlIHRvIHRoZSBnb2FsLlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNSYWRpb0xhYmVsKTtcclxuICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hUmFkaW9MYWJlbCk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3RGb3JtICgpIHtcclxuICAgIGNvbnN0IHF1ZXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG4gICAgcXVlc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJxdWVzdEZvcm1cIik7XHJcblxyXG4gICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgIC8vIFF1ZXN0IE5hbWVcclxuICAgIGxldCBxdWVzdE5hbWVDb250YWluZXIgPSBjcmVhdGVPYmplY3RpdmVJbnB1dEVsZW1lbnQgKFxyXG4gICAgICAgIFwiZm9ybUZpZWxkQ29udGFpbmVyXCIsIFxyXG4gICAgICAgIFwidGV4dFwiLCBcclxuICAgICAgICBcInF1ZXN0R29hbE9iamVjdGl2ZVwiLFxyXG4gICAgICAgIFwiRW50ZXIgWW91ciBRdWVzdCBPYmplY3RpdmUgSGVyZS4uLlwiLFxyXG4gICAgICAgICdFbnRlciB0aGUgXCJvYmplY3RpdmVcIiBPUiBcIm5hbWVcIiBvZiB5b3VyIHF1ZXN0IChhY3Rpb24pIGZpZWxkIGFib3ZlLiBFeGFtcGxlcyBvZiBxdWVzdHMgYXJlOiBcIlN0dWR5IFNwYW5pc2hcIiBvciBcIkRvIEFiLUNydW5jaGVzXCInLFxyXG4gICAgICAgIFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIlxyXG4gICAgICAgICk7XHJcbiAgXHJcbiAgICBxdWVzdEZvcm0uYXBwZW5kQ2hpbGQocXVlc3ROYW1lQ29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBHb2FsIFRpbWUgQWxsb3RtZW50XHJcbiAgICBsZXQgZ29hbFRpbWVDb250YWluZXIgPSBjcmVhdGVJbnB1dFZhbHVlRWxlbWVudCAoXHJcbiAgICAgICAgXCJmb3JtRmllbGRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJBc3NpZ24gUmV3YXJkczpcIiwgXHJcbiAgICAgICAgXCJnb2FsUmV3YXJkQXNzaWdubWVudEFtb3VudFwiLCBcclxuICAgICAgICBcImdvYWxSZXdhcmRBc3NpZ25tZW50QW1vdW50XCIsIFxyXG4gICAgICAgIFwiQXNzaWduIHJld2FyZHMgdG8geW91ciBnb2FsLiBUaGUgc3BlY2lmaWVkIGFtb3VudCB3aWxsIGJlIHNwbGl0IGFtb25nIHlvdXIgb3V0c3RhbmRpbmcgcXVlc3RzLlwiLCBcclxuICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIsXHJcbiAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50RXhhbXBsZVRleHRcIixcclxuICAgICk7XHJcblxyXG4gICAgcXVlc3RGb3JtLmFwcGVuZENoaWxkKGdvYWxUaW1lQ29udGFpbmVyKTtcclxuICBcclxuICAgIC8vIEZyZXF1ZW5jeSBvZiBRdWVzdFxyXG4gICAgbGV0IGZyZXF1ZW5jeUNvbnRhaW5lciA9IGNyZWF0ZUlucHV0VmFsdWVFbGVtZW50IChcclxuICAgICAgICBcImZvcm1GaWVsZENvbnRhaW5lclwiLCBcclxuICAgICAgICBcInRpbWVBc3NpZ25tZW50SW5wdXRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJyZXdhcmRBc3NpZ25tZW50RXhhbXBsZVRleHRDb250YWluZXJcIiwgXHJcbiAgICAgICAgXCJBc3NpZ24gVGltZTpcIiwgXHJcbiAgICAgICAgXCJnb2FsVGltZUFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbiAgICAgICAgXCJnb2FsVGltZUFzc2lnbm1lbnRBbW91bnRcIiwgXHJcbiAgICAgICAgXCJBc3NpZ24gdGltZSB0byB5b3VyIGdvYWwuIFRoZSBzcGVjaWZpZWQgdGltZSB3aWxsIGJlIHNwbGl0IGFtb25nIHlvdXIgb3V0c3RhbmRpbmcgcXVlc3RzLlwiLCBcclxuICAgICAgICBcImdvYWxDcmVhdGlvbkV4YW1wbGVUZXh0XCIsXHJcbiAgICAgICAgXCJ0aW1lQXNzaWdubWVudEV4YW1wbGVUZXh0XCIsXHJcbiAgICApO1xyXG5cclxuICAgIGFkZFJhZGlvQnV0dG9uc1RvRWxlbWVudChmcmVxdWVuY3lDb250YWluZXIsIFwidGltZUFzc2lnbm1lbnRJbnB1dENvbnRhaW5lclwiKTtcclxuICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChmcmVxdWVuY3lDb250YWluZXIpO1xyXG4gIFxyXG4gICAgLy8gR29hbCBEZWFkbGluZVxyXG4gICAgbGV0IGRlYWRsaW5lQ29udGFpbmVyID0gY3JlYXRlRm9ybUZpZWxkKFxyXG4gICAgICBcImRhdGVcIixcclxuICAgICAgXCJkZWFkbGluZVwiLFxyXG4gICAgICBcIkVudGVyIHRoZSBkZWFkbGluZSBmb3IgeW91ciBxdWVzdC5cIixcclxuICAgICAgXCJFbnRlciB0aGUgc3RhcnQgZGF0ZSBhbmQgZW5kIGRhdGUgZm9yIHlvdXIgR29hbC5cIlxyXG4gICAgKTtcclxuICAgIHF1ZXN0Rm9ybS5hcHBlbmRDaGlsZChkZWFkbGluZUNvbnRhaW5lcik7XHJcbiBcclxuICBcclxuICAgIHguYXBwZW5kQ2hpbGQocXVlc3RGb3JtKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsaXN0Q29udGFpbmVyIChcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSxcclxuICAgIHByb21wdFRpdGxlLFxyXG4gICAgY29udGFpbmVySW5wdXRGaWVsZENsYXNzTmFtZSxcclxuICAgIGxpc3RJdGVtc0NvbnRhaW5lckNsYXNzXHJcbikge1xyXG4gICAgICAgIFxyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjb250YWluZXJDbGFzc05hbWU7XHJcblxyXG4gICAgbGV0IGVsZW1lbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICAgIGVsZW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb21wdFRpdGxlO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50VGl0bGUpO1xyXG5cclxuICAgIGxldCBlbGVtZW50SW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBlbGVtZW50SW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKGNvbnRhaW5lcklucHV0RmllbGRDbGFzc05hbWUpO1xyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50SW5wdXRGaWVsZCk7XHJcblxyXG4gICAgbGV0IGxpc3RJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsaXN0SXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChsaXN0SXRlbXNDb250YWluZXJDbGFzcyk7XHJcbiAgICAvLyBsaXN0SXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlUXVlc3RGb3JtKCkpO1xyXG4gICAgZWxlbWVudElucHV0RmllbGQuYXBwZW5kQ2hpbGQobGlzdEl0ZW1zQ29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybUZpZWxkKHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCBleGFtcGxlVGV4dCkge1xyXG4gICAgbGV0IGZvcm1GaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmb3JtRmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm1GaWVsZENvbnRhaW5lclwiKTtcclxuICBcclxuICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xyXG4gICAgICAvLyBDcmVhdGUgYSBkaXYgdG8gaG91c2UgdGhlIGRhdGUgaW5wdXRzXHJcbiAgICAgIGxldCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgIGxldCBzdGFydERhdGVJbnB1dCA9IGNyZWF0ZUlucHV0KHR5cGUsIG5hbWUgKyBcIlN0YXJ0XCIsIFwiU3RhcnQgXCIgKyBwbGFjZWhvbGRlcik7XHJcbiAgICAgIGxldCBlbmREYXRlSW5wdXQgPSBjcmVhdGVJbnB1dCh0eXBlLCBuYW1lICsgXCJFbmRcIiwgXCJFbmQgXCIgKyBwbGFjZWhvbGRlcik7XHJcbiAgICAgIFxyXG4gICAgICAvLyBJbml0aWFsaXplIHRoZSBzdGFydCBkYXRlJ3MgbWluIHZhbHVlIHRvIHRvZGF5XHJcbiAgICAgIHN0YXJ0RGF0ZUlucHV0Lm1pbiA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XHJcbiAgICAgIFxyXG4gICAgICAvLyBVcGRhdGUgdGhlIGVuZCBkYXRlJ3MgbWluIHZhbHVlIHdoZW5ldmVyIHRoZSBzdGFydCBkYXRlIGNoYW5nZXNcclxuICAgICAgc3RhcnREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZUlucHV0LnZhbHVlKTtcclxuICAgICAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZW5kRGF0ZS5zZXREYXRlKHN0YXJ0RGF0ZS5nZXREYXRlKCkgKyA3KTtcclxuICAgICAgICBlbmREYXRlSW5wdXQudmFsdWUgPSBlbmREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RhcnQgZGF0ZSdzIG1heCB2YWx1ZSB3aGVuZXZlciB0aGUgZW5kIGRhdGUgY2hhbmdlc1xyXG4gICAgICBlbmREYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgc3RhcnREYXRlSW5wdXQubWF4ID0gZW5kRGF0ZUlucHV0LnZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIC8vIEFkZCBsYWJlbHMgZm9yIHN0YXJ0IGRhdGUgYW5kIGVuZCBkYXRlIGlucHV0c1xyXG4gICAgICBsZXQgc3RhcnREYXRlTGFiZWwgPSBjcmVhdGVMYWJlbChuYW1lICsgXCJTdGFydFwiLCBcIkdvYWwgU3RhcnQgRGF0ZVwiKTtcclxuICAgICAgbGV0IGVuZERhdGVMYWJlbCA9IGNyZWF0ZUxhYmVsKG5hbWUgKyBcIkVuZFwiLCBcIkdvYWwgRW5kIERhdGVcIik7XHJcbiAgICAgIFxyXG4gICAgICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0RGF0ZUxhYmVsKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydERhdGVJbnB1dCk7XHJcbiAgICAgIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5kRGF0ZUxhYmVsKTtcclxuICAgICAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbmREYXRlSW5wdXQpO1xyXG4gICAgICBcclxuICAgICAgZm9ybUZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGZvcm1GaWVsZElucHV0ID0gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIpO1xyXG4gICAgICBmb3JtRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybUZpZWxkSW5wdXQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV0IGZvcm1GaWVsZEV4YW1wbGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xyXG4gICAgZm9ybUZpZWxkRXhhbXBsZVRleHQudGV4dENvbnRlbnQgPSBleGFtcGxlVGV4dDtcclxuICAgIGZvcm1GaWVsZEV4YW1wbGVUZXh0LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ3JlYXRpb25FeGFtcGxlVGV4dFwiKTtcclxuICBcclxuICAgIGxldCBleGFtcGxlVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXhhbXBsZVRleHRDb250YWluZXJcIik7XHJcbiAgICBleGFtcGxlVGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRmllbGRFeGFtcGxlVGV4dCk7XHJcbiAgICBmb3JtRmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHRDb250YWluZXIpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGZvcm1GaWVsZENvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5wdXQodHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIpIHtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdHlwZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIG5hbWUpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgcGxhY2Vob2xkZXIpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbmFtZSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIxMDBcIik7IC8vIFNldCBjaGFyYWN0ZXIgbGltaXQgdG8gMTAwXHJcbiAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiZm9ybUZpZWxkSW5wdXRcIik7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZvcklucHV0LCBsYWJlbFRleHQpIHtcclxuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmb3JJbnB1dCk7XHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcclxuICAgIHJldHVybiBsYWJlbDtcclxufVxyXG5cclxuLy8gVGhlIGNvZGUgYmVsb3cgaXMgaWYgSSB3YW50IHRvIGluY2x1ZGUgdGhlIGFiaWxpdHkgdG8gbGluayBhbmQgZXhpc3RpbmcgcXVlc3QuXHJcblxyXG4vLyAgICAgICAgIGxldCBsaW5rRXhpc3RpbmdRdWVzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgICAgICAgbGlua0V4aXN0aW5nUXVlc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpbmtFeGlzdGluZ1F1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIFxyXG4vLyAgICAgICAgIGxldCBsaW5rRXhpc3RpbmdRdWVzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4vLyAgICAgICAgIGxldCBsaW5rRXhpc3RpbmdRdWVzdElucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICAgICAgICBsZXQgbGlua0V4aXN0aW5nUXVlc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbiAgICAgICAgXHJcbi8vICAgICAgICAgbGV0IGxpbmtFeGlzdGluZ1F1ZXN0RXhhbXBsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XHJcbi8vICAgICAgICAgbGlua0V4aXN0aW5nUXVlc3RFeGFtcGxlVGV4dC50ZXh0Q29udGVudCA9ICdJZiB5b3UgaGF2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBxdWVzdCB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGxpbmsgdG8gdGhpcyBnb2FsLCBwbGVhc2Ugc2VsZWN0IGZyb20geW91ciBsaXN0IG9mIG91dHN0YW5kaW5nIHVuZmluaXNoZWQgcXVlc3RzLic7XHJcbi8vICAgICAgICAgbGlua0V4aXN0aW5nUXVlc3RFeGFtcGxlVGV4dC5jbGFzc0xpc3QuYWRkKFwiZ29hbENyZWF0aW9uRXhhbXBsZVRleHRcIilcclxuXHJcbi8vICAgICAgICAvLyBBZGQgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiBhcyB0aGUgZmlyc3Qgb3B0aW9uIGluIHRoZSBkcm9wZG93blxyXG4vLyAgICAgICAgIGxldCBwbGFjZWhvbGRlck9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbi8vICAgICAgICAgcGxhY2Vob2xkZXJPcHRpb24udmFsdWUgPSBcIlwiOyAvLyBTZXQgdGhlIHZhbHVlIHRvIGFuIGVtcHR5IHN0cmluZyBvciBhbnkgYXBwcm9wcmlhdGUgZGVmYXVsdCB2YWx1ZVxyXG4vLyAgICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYW4gRXhpc3RpbmcgUXVlc3QgdG8gTGlua1wiO1xyXG4vLyAgICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLmRpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbi8vICAgICAgICAgbGlua0V4aXN0aW5nUXVlc3RJbnB1dC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlck9wdGlvbik7XHJcblxyXG4vLyAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBoYW5kbGUgZm9jdXMgZXZlbnRcclxuLy8gICAgICAgICBsaW5rRXhpc3RpbmdRdWVzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiBpcyBzZWxlY3RlZCAodmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nKVxyXG4vLyAgICAgICAgICAgICBpZiAobGlua0V4aXN0aW5nUXVlc3RJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiBmcm9tIHRoZSBkcm9wZG93blxyXG4vLyAgICAgICAgICAgICBsaW5rRXhpc3RpbmdRdWVzdElucHV0LnJlbW92ZUNoaWxkKGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQub3B0aW9uc1swXSk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KTtcclxuICBcclxuLy8gICAgICAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgdG8gaGFuZGxlIGJsdXIgZXZlbnQgKHdoZW4gdGhlIGRyb3Bkb3duIGxvc2VzIGZvY3VzKVxyXG4vLyAgICAgICAgIGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24oKSB7XHJcbi8vICAgICAgICAgICAgIC8vIENoZWNrIGlmIG5vIG9wdGlvbiBpcyBzZWxlY3RlZCAodmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nKVxyXG4vLyAgICAgICAgICAgICBpZiAobGlua0V4aXN0aW5nUXVlc3RJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4vLyAgICAgICAgICAgICAvLyBSZS1hZGQgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiB0byB0aGUgZHJvcGRvd25cclxuLy8gICAgICAgY29uc3QgcGxhY2Vob2xkZXJPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4vLyAgICAgICBwbGFjZWhvbGRlck9wdGlvbi52YWx1ZSA9IFwiXCI7XHJcbi8vICAgICAgIHBsYWNlaG9sZGVyT3B0aW9uLnRleHRDb250ZW50ID0gXCJTZWxlY3QgYW4gRXhpc3RpbmcgUXVlc3QgdG8gTGluazpcIjtcclxuLy8gICAgICAgcGxhY2Vob2xkZXJPcHRpb24uZGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICBwbGFjZWhvbGRlck9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbi8vICAgICAgIGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQuaW5zZXJ0QmVmb3JlKHBsYWNlaG9sZGVyT3B0aW9uLCBsaW5rRXhpc3RpbmdRdWVzdElucHV0LmZpcnN0Q2hpbGQpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0pO1xyXG5cclxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgbGV0IHF1ZXN0ID0gY3VycmVudFF1ZXN0TGlzdFtpXTtcclxuLy8gICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbi8vICAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IHF1ZXN0LmlkO1xyXG4vLyAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBxdWVzdC5vYmplY3RpdmU7XHJcbi8vICAgICAgICAgICAgIGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgZHJvcGRvd24gdG8gaGFuZGxlIGNoYW5nZSBldmVudFxyXG4gICAgICAgIC8vIGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgLy8gQ2hlY2sgaWYgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiBpcyBzZWxlY3RlZCAodmFsdWUgaXMgZW1wdHkgc3RyaW5nKVxyXG4gICAgICAgIC8vICAgICBpZiAobGlua0V4aXN0aW5nUXVlc3RJbnB1dC52YWx1ZSA9PT0gXCJcIikge1xyXG4gICAgICAgIC8vICAgICAvLyBSZW1vdmUgdGhlIHBsYWNlaG9sZGVyIG9wdGlvbiBmcm9tIHRoZSBkcm9wZG93blxyXG4gICAgICAgIC8vICAgICBsaW5rRXhpc3RpbmdRdWVzdElucHV0LnJlbW92ZUNoaWxkKHBsYWNlaG9sZGVyT3B0aW9uKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFkZCBjbGFzc2VzIHRvIHRoZSBlbGVtZW50cyBjb3JyZXNwb25kaW5nIHRvIHRoZWlyIHZhcmlhYmxlIG5hbWVzXHJcbiAgICAgICAgLy8gbGlua0V4aXN0aW5nUXVlc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwibGlua0V4aXN0aW5nUXVlc3RUaXRsZVwiKTtcclxuICAgICAgICAvLyBsaW5rRXhpc3RpbmdRdWVzdElucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaW5rRXhpc3RpbmdRdWVzdElucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIC8vIGxpbmtFeGlzdGluZ1F1ZXN0SW5wdXQuY2xhc3NMaXN0LmFkZChcImxpbmtFeGlzdGluZ1F1ZXN0SW5wdXRcIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWRkIGNvbnRlbnQgb3Igc3R5bGVzIHRvIHRoZSBlbGVtZW50cyBhcyBuZWVkZWRcclxuICAgICAgICAvLyBsaW5rRXhpc3RpbmdRdWVzdFRpdGxlLnRleHRDb250ZW50ID0gXCJMaW5rIEV4aXN0aW5nIFF1ZXN0OlwiO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgZWxlbWVudHMgdG8gdGhlIGxpbmtFeGlzdGluZ1F1ZXN0Q29udGFpbmVyXHJcbiAgICAgICAgLy8gbGlua0V4aXN0aW5nUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0V4aXN0aW5nUXVlc3RUaXRsZSk7XHJcbiAgICAgICAgLy8gbGlua0V4aXN0aW5nUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0V4aXN0aW5nUXVlc3RJbnB1dENvbnRhaW5lcik7XHJcbiAgICAgICAgLy8gbGlua0V4aXN0aW5nUXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlua0V4aXN0aW5nUXVlc3RFeGFtcGxlVGV4dCk7XHJcbiAgICAgICAgLy8gbGlua0V4aXN0aW5nUXVlc3RJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5rRXhpc3RpbmdRdWVzdElucHV0KVxyXG5cclxuICAgICIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckdvYWxMaXN0IChjdXJyZW50R29hbExpc3QpIHtcclxuXHJcbiAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBnb2FsID0gMDsgZ29hbCA8IGN1cnJlbnRHb2FsTGlzdC5sZW5ndGg7IGdvYWwrKykge1xyXG4gICAgICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVHb2FsQ2FyZChjdXJyZW50R29hbExpc3RbZ29hbF0pKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlR29hbENhcmQoZ29hbCkge1xyXG5cclxuICAgIGNvbnN0IGdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBnb2FsQ2FyZC5jbGFzc0xpc3QuYWRkKCdnb2FsQ2FyZCcpO1xyXG4gIFxyXG4gICAgY29uc3QgdG9wSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b3BIYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgndG9wSGFsZkdvYWxDYXJkJyk7XHJcbiAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZCh0b3BIYWxmR29hbENhcmQpO1xyXG4gIFxyXG4gICAgY29uc3QgYm90dG9tSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib3R0b21IYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgnYm90dG9tSGFsZkdvYWxDYXJkJyk7XHJcbiAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZChib3R0b21IYWxmR29hbENhcmQpO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbE9iamVjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsT2JqZWN0aXZlQ29udGFpbmVyJyk7XHJcbiAgICB0b3BIYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQoZ29hbE9iamVjdGl2ZUNvbnRhaW5lcik7XHJcbiAgXHJcbiAgICBjb25zdCBnb2FsQ29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGdvYWxDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsQ29tcGxldGVDb250YWluZXInKTtcclxuICAgIHRvcEhhbGZHb2FsQ2FyZC5hcHBlbmRDaGlsZChnb2FsQ29tcGxldGVDb250YWluZXIpO1xyXG4gIFxyXG4gICAgY29uc3QgZ29hbE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBnb2FsT2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2dvYWwtb2JqZWN0aXZlJyk7XHJcbiAgICBnb2FsT2JqZWN0aXZlLnRleHRDb250ZW50ID0gZ29hbC5vYmplY3RpdmU7XHJcbiAgICBnb2FsT2JqZWN0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmUpO1xyXG4gIFxyXG4gICAgY29uc3QgcXVlc3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBxdWVzdExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Q29udGFpbmVyJyk7XHJcbiAgICBib3R0b21IYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQocXVlc3RMaXN0Q29udGFpbmVyKTtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0TGlzdFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBxdWVzdExpc3RQYXJhbGxheC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RQYXJhbGxheCcpO1xyXG4gICAgcXVlc3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0TGlzdFBhcmFsbGF4KTtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBxdWVzdExpc3QuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Jyk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvYWwucXVlc3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHF1ZXN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0SXRlbUNvbnRhaW5lcicpO1xyXG4gIFxyXG4gICAgICBjb25zdCBxdWVzdEl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICBxdWVzdEl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW0nKTtcclxuICAgICAgcXVlc3RJdGVtQ29udGVudC50ZXh0Q29udGVudCA9IGdvYWwucXVlc3RzW2ldLm9iamVjdGl2ZTtcclxuICBcclxuICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicpO1xyXG4gIFxyXG4gICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuICBcclxuICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4gICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGVudCk7XHJcbiAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckNvbnRhaW5lcik7XHJcbiAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChxdWVzdEl0ZW1Db250YWluZXIpO1xyXG5cclxuICAgICAgXHJcbiAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGdlbmVyYXRlTW9kYWwoZ29hbC5xdWVzdHNbaV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBxdWVzdExpc3RQYXJhbGxheC5hcHBlbmRDaGlsZChxdWVzdExpc3QpO1xyXG4gIFxyXG4gICAgcmV0dXJuIGdvYWxDYXJkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbChnb2FsUXVlc3QpIHtcclxuXHJcbiAgICBjb25zdCBnb2FsUXVlc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ29hbFF1ZXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnZ29hbFF1ZXN0TW9kYWwnKTtcclxuICBcclxuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsQ29udGVudCcpO1xyXG4gIFxyXG4gICAgbGV0IGdvYWxRdWVzdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBnb2FsUXVlc3RNb2RhbFRpdGxlLmlubmVyVGV4dCA9IFwiQ29tcGxldGlvbiBSZXF1aXJlbWVudChzKTogXCJcclxuXHJcbiAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgbmFtZS5pbm5lclRleHQgPSBnb2FsUXVlc3Qub2JqZWN0aXZlO1xyXG5cclxuXHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbFF1ZXN0TW9kYWxUaXRsZSk7XHJcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSlcclxuICAgIGdvYWxRdWVzdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsKTtcclxuICBcclxuICAgIHJldHVybiBnb2FsUXVlc3RNb2RhbDtcclxuICB9XHJcbiAgICAgICIsImltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlICh3ZWFwb24pIHtcclxuLy8gICAgIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG4vLyAgICAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2Uod2VhcG9uKSB7XHJcbiAgaWYgKCF3ZWFwb24gfHwgdHlwZW9mIHdlYXBvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgLy8gSW52YWxpZCB3ZWFwb24gcGFyYW1ldGVyLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcblxyXG4gIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSB3ZWFwb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICAgIC8vIEltYWdlIG5vdCBmb3VuZCBmb3IgdGhlIGdpdmVuIHdlYXBvbiwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuLy8gICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4vLyAgICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UoYXJtb3VyKSB7XHJcbiAgaWYgKCFhcm1vdXIgfHwgdHlwZW9mIGFybW91ciAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG5cclxuICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gYXJtb3VyLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlIChyYXJpdHkpIHtcclxuLy8gICAgIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG4vLyAgICAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlIChlbGVtZW50KSB7XHJcbi8vICAgICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuLy8gICAgIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZShyYXJpdHkpIHtcclxuICBpZiAoIXJhcml0eSB8fCB0eXBlb2YgcmFyaXR5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcblxyXG4gIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSByYXJpdHkgKyBcIlJhcml0eVwiO1xyXG4gICAgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlKGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtSW1hZ2Uoc3RyaW5nKSB7XHJcblxyXG4gIGxldCBpdGVtSW1hZ2VVcmw7XHJcblxyXG4gIGlmIChzdHJpbmcudHlwZSA9PT0gXCJ3ZWFwb25cIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0V2VhcG9uSW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiYXJtb3VyXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEFybW91ckltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcInJhcml0eVwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRSYXJpdHlJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJlbGVtZW50XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEVsZW1lbnRJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbUltYWdlVXJsO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYnlzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWJ5c3MucG5nXCIsXG5cdFwiLi9hZXRoZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FldGhlci5wbmdcIixcblx0XCIuL2NvcnJvZGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2NvcnJvZGUucG5nXCIsXG5cdFwiLi9nYWlhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9nYWlhLnBuZ1wiLFxuXHRcIi4vaW5mZXJuby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvaW5mZXJuby5wbmdcIixcblx0XCIuL2x1bmFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9sdW5hci5wbmdcIixcblx0XCIuL21pc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL21pc3QucG5nXCIsXG5cdFwiLi9zb2xhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc29sYXIucG5nXCIsXG5cdFwiLi9zdGVlbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc3RlZWwucG5nXCIsXG5cdFwiLi90ZXJyYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdGVycmEucG5nXCIsXG5cdFwiLi92b2x0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy92b2x0LnBuZ1wiLFxuXHRcIi4vemVwaHlyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy96ZXBoeXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VwaWNSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2VwaWNSYXJpdHkucG5nXCIsXG5cdFwiLi9sZWdlbmRhcnlSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2xlZ2VuZGFyeVJhcml0eS5wbmdcIixcblx0XCIuL25vcm1hbFJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbm9ybWFsUmFyaXR5LnBuZ1wiLFxuXHRcIi4vcmFyZVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvcmFyZVJhcml0eS5wbmdcIixcblx0XCIuL3VuY29tbW9uUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy91bmNvbW1vblJhcml0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0FieXNzU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0dhaWFTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0dhaWFTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vSW5mZXJub1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvSW5mZXJub1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9MdW5hclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTHVuYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTWlzdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTWlzdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1NvbGFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Tb2xhclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Wb2x0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Wb2x0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1plcGh5clNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvWmVwaHlyU2hvcnRTd29yZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMgc3luYyBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbnRHb2FsTGlzdCwgY3VycmVuY3lDb250YWluZXIgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbmltcG9ydCB7IHJlbmRlclF1ZXN0TGlzdCB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlLCBjcmVhdGVHaG9zdENhcmQgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRlbnRIZWFkZXJcIik7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVF1ZXN0c1N0YXRlICgpIHtcclxuXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcXVlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5U3RhdGVDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5UXVlc3RDb250YWluZXJcIik7XHJcbiAgICAgICAgcXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlTdGF0ZUNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIFF1ZXN0IHRvIGdldCBzdGFydGVkIGFuZCBjaGVjayB0aGVtIGhlcmU6XCJcclxuICAgICAgICBsZXQgcXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHF1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKVxyXG4gICAgICAgIHF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUXVlc3QgK1wiXHJcbiAgICAgICAgcXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFyZW1vdmVFbXB0eVN0YXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbXB0eXN0YXRlIFJlbW92ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIHJlbW92ZUVtcHR5U3RhdGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKCFjcmVhdGVRdWVzdFBhcmFsbGF4KCkpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdFBhcmFsbGF4IGNyZWF0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHJlbmRlclF1ZXN0TGlzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgICAgICAgeC5hcHBlbmRDaGlsZChjcmVhdGVFbXB0eUNhcmRUZW1wbGF0ZSgpKTtcclxuICAgICAgICAgICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdEJ1dHRvbik7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgIGV4cG9ydCBmdW5jdGlvbiBzaG93RW1wdHlHb2Fsc1N0YXRlICgpIHtcclxuXHJcbiAgICBcclxuICAgICAgICBsZXQgZW1wdHlTdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBnb2FsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5U3RhdGVDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtcHR5R29hbENvbnRhaW5lclwiKTtcclxuICAgICAgICBnb2FsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5U3RhdGVDb250YWluZXIpO1xyXG5cclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJTZXQgR29hbHMgYW5kIHRyYWNrIHlvdXIgcHJvZ3Jlc3MgaGVyZTpcIlxyXG4gICAgICAgIGxldCBnb2FsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICBnb2FsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRHb2FsQnV0dG9uXCIpXHJcbiAgICAgICAgZ29hbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIEdvYWwgK1wiXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsQnV0dG9uKTtcclxuICAgIFxyXG4gICAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eVF1ZXN0U3RhdGUgKCkge1xyXG5cclxuICBjb25zdCBlbXB0eVF1ZXN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW1wdHlTdGF0ZUNvbnRhaW5lciNlbXB0eVF1ZXN0Q29udGFpbmVyXCIpXHJcbiAgICAgICAgaWYgKGVtcHR5UXVlc3RMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlRdWVzdExpc3QucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eUdvYWxTdGF0ZSAoKSB7XHJcblxyXG4gIGNvbnN0IGVtcHR5R29hbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlHb2FsQ29udGFpbmVyXCIpXHJcbiAgICAgICAgaWYgKGVtcHR5R29hbExpc3QpIHtcclxuICAgICAgICAgICAgZW1wdHlHb2FsTGlzdC5yZW1vdmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3RQYXJhbGxheCgpIHtcclxuXHJcbiAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcblxyXG4gIC8vIENoZWNrIGlmIHRoZSBlbGVtZW50IGFscmVhZHkgZXhpc3RzXHJcbiAgaWYgKHF1ZXN0UGFyYWxsYXgpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBSZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZWxlbWVudCBhbHJlYWR5IGV4aXN0c1xyXG4gIH1cclxuXHJcbiAgbGV0IHF1ZXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbnRhaW5lclwiKTtcclxuICBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBxdWVzdFBhcmFsbGF4LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFBhcmFsbGF4XCIpO1xyXG4gIHF1ZXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0UGFyYWxsYXgpO1xyXG5cclxuICByZXR1cm4gdHJ1ZTsgLy8gUmV0dXJuIHRydWUgdG8gaW5kaWNhdGUgdGhhdCB0aGUgZWxlbWVudCB3YXMgY3JlYXRlZFxyXG59XHJcblxyXG5sZXQgZ29hbFBhcmFsbGF4O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdvYWxQYXJhbGxheCgpIHtcclxuXHJcbiAgaWYgKCFnb2FsUGFyYWxsYXgpIHtcclxuICAgIGxldCBnb2FsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29udGFpbmVyXCIpO1xyXG4gICAgZ29hbFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdvYWxQYXJhbGxheC5jbGFzc0xpc3QuYWRkKFwiZ29hbFBhcmFsbGF4XCIpO1xyXG4gICAgZ29hbENvbnRhaW5lci5hcHBlbmRDaGlsZChnb2FsUGFyYWxsYXgpO1xyXG5cclxuICB9XHJcbiAgZ29hbFBhcmFsbGF4LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBRdWVzdCwgQ3VycmVuY3ksIFBsYXllckNoYXJhY3RlciwgUGxheWVyU3RhdHMsIEdvYWwgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXMuanNcIjtcclxuaW1wb3J0IHsgZ2V0TmV3UXVlc3QsIGFkZFF1ZXN0LCByZW5kZXJRdWVzdExpc3QsIGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlLCBjcmVhdGVHaG9zdENhcmR9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zLmpzXCI7XHJcbmltcG9ydCB7IGNsb3NlRm9ybU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyJztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNhbGNIZXJvU2NvcmUgfSBmcm9tICcuL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyLCBwbGF5ZXJFcXVpcHBlZEl0ZW1zLCBjdXJyZW50R29hbExpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgeyByZW1vdmVFbXB0eVF1ZXN0U3RhdGUsIGNyZWF0ZVF1ZXN0UGFyYWxsYXggfSBmcm9tICcuL2luZGV4Vmlld0Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUdldERhdGFGb3JtIH0gZnJvbSAnLi9nZW5lcmF0ZUZvcm0nO1xyXG5pbXBvcnQgcmVuZGVyRGVmYXVsdEluZGV4IGZyb20gJy4vcmVuZGVyRGVmYXVsdEluZGV4SHRtbCc7XHJcbmltcG9ydCBnZW5lcmF0ZUdvYWxDYXJkIGZyb20gJy4vZ29hbEZ1bmN0aW9ucyc7XHJcbmltcG9ydCByZW5kZXJHb2FsTGlzdCBmcm9tICcuL2dvYWxGdW5jdGlvbnMnO1xyXG5pbXBvcnQgcmVuZGVyR29hbENyZWF0aW9uUGFnZSBmcm9tICcuL2dvYWxDcmVhdGlvblBhZ2UnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsaXplRGVmYXVsdEluZGV4ICgpIHtcclxuXHJcbiAgICBsZXQgaW5kZXhQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcHBDb250ZW50XCIpO1xyXG5cclxuICAgIHJlbmRlckRlZmF1bHRJbmRleChpbmRleFBhZ2UpO1xyXG5cclxuXHJcblxyXG5sZXQgcGxheWVyQmlydGhkYXkgPSBuZXcgRGF0ZSAoXCIwMi0wMy0xOTk2XCIpO1xyXG5sZXQgaGVyb1NlbGVjdGlvbiA9IChcIlNvcmNlcmVyXCIpO1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcihcImltYWdlcy96ZXVzU3ByaXRlLnBuZ1wiLCBoZXJvU2VsZWN0aW9uLCBwbGF5ZXJFcXVpcHBlZEl0ZW1zLCBwbGF5ZXJCaXJ0aGRheSk7XHJcbmxldCBwaXhlbEltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0SW1hZ2VcIik7XHJcbnBpeGVsSW1hZ2VDb250YWluZXIuc3JjID0gKHBsYXllci5zcHJpdGVJbWFnZSk7XHJcbmxldCBnZXRIZXJvU2NvcmVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hlcm9TY29yZUNvbnRhaW5lclwiKTtcclxubGV0IGhlcm9TY29yZSA9IGNhbGNIZXJvU2NvcmUocGxheWVyKTtcclxuZ2V0SGVyb1Njb3JlQ29udGFpbmVyLnRleHRDb250ZW50ID0gKGBIZXJvIFNjb3JlOiAke2hlcm9TY29yZX1gKVxyXG5sZXQgY3VycmVudEdvYWxMaXN0ID0gW107XHJcblxyXG5cclxubGV0IHRlc3RHb2FsID0gbmV3IEdvYWwgKFwiQmVjb21lIEZsdWVudCBpbiBTcGFuaXNoXCIsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDEyKSlcclxubGV0IGd5bUdvYWwgPSBuZXcgR29hbCAoKFwiR2V0IFNpeCBQYWNrIEFic1wiKSwgbmV3IEN1cnJlbmN5IChcIkdHVG9rZW5zXCIsIDEyKSk7XHJcblxyXG5jdXJyZW50R29hbExpc3QucHVzaCh0ZXN0R29hbCk7XHJcbmN1cnJlbnRHb2FsTGlzdC5wdXNoKGd5bUdvYWwpO1xyXG5cclxubGV0IGd5bVF1ZXN0ID0gZ3ltR29hbC5nZW5lcmF0ZVF1ZXN0KDQsIDApO1xyXG5neW1Hb2FsLnF1ZXN0cy5wdXNoKGd5bVF1ZXN0KTtcclxuXHJcbnJlbmRlckdvYWxMaXN0KGN1cnJlbnRHb2FsTGlzdCk7XHJcblxyXG5cclxudXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuXHJcblxyXG4vLyBFdmVudCBMaXN0ZW5lciB0byBPcGVuIFF1ZXN0IENyZWF0aW9uIE1vZGFsXHJcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZFF1ZXN0QnV0dG9uXCIpXHJcbmFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIGlmICghcmVtb3ZlRW1wdHlRdWVzdFN0YXRlKCkpIHtcclxuICAgICAgICByZW1vdmVFbXB0eVF1ZXN0U3RhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFjcmVhdGVRdWVzdFBhcmFsbGF4KCkpIHtcclxuICAgICAgICBjcmVhdGVRdWVzdFBhcmFsbGF4KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUXVlc3RMaXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIFxyXG4gICAgbGV0IHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlKCkpO1xyXG4gICAgeC5hcHBlbmRDaGlsZChjcmVhdGVHaG9zdENhcmQoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG59KVxyXG5cclxubGV0IGFkZEdvYWxCdXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbi5hZGRHb2FsQnV0dG9uXCIpXHJcbmFkZEdvYWxCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBcclxuICAgIHdoaWxlIChpbmRleFBhZ2UuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGluZGV4UGFnZS5yZW1vdmVDaGlsZChpbmRleFBhZ2UuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJHb2FsQ3JlYXRpb25QYWdlKCk7XHJcblxyXG59KVxyXG5cclxuXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXRXZWFwb25JbWFnZSwgZ2V0QXJtb3VySW1hZ2UsIGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlXCI7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IGdlbmVyYXRlSXRlbUNhcmRNb2RhbCBmcm9tIFwiLi9tb2RhbEVsZW1lbnRzL2l0ZW1DYXJkTW9kYWxcIjtcclxuXHJcbmNvbnN0IGludmVudG9yeVBhZ2VQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50XCIpO1xyXG5jb25zdCBpbnZlbnRvcnlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW52ZW50b3J5UGFnZS5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5UGFnZVwiKVxyXG5cclxuY29uc3QgcmFyaXR5Q29sb3JzID0ge1xyXG4gICAgbm9ybWFsOiBcInJnYigyMTEsIDIxMSwgMjExLCAwLjgpXCIsXHJcbiAgICB1bmNvbW1vbjogXCJyZ2IoMCwgMTI4LCAwLCAwLjgpXCIsXHJcbiAgICByYXJlOiBcInJnYigzMCwgMzAsIDI1NSwgMC44KVwiLFxyXG4gICAgZXBpYzogXCJyZ2IoMTYwLCAzMiwgMjQwLCAwLjgpXCIsXHJcbiAgICBsZWdlbmRhcnk6IFwicmdiKDI1NSwgMTY1LCAwLjgpXCIsXHJcbiAgICB9OyAgXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52ZW50b3J5UGFnZSAoaW52ZW50b3J5KSB7XHJcblxyXG4gICAgaW52ZW50b3J5UGFnZVBhcmVudC5hcHBlbmRDaGlsZChpbnZlbnRvcnlQYWdlKVxyXG5cclxuICAgICAgICAvLyBDb2RlIHRvIGdlbmVyYXRlIGVhY2ggaW52ZW50b3J5IHJvd1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArKykge1xyXG4gICAgICAgICAgICBsZXQgaW52ZW50b3J5SXRlbVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1Sb3dcIik7XHJcbiAgICAgICAgICAgIGludmVudG9yeUl0ZW1Sb3cuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGludmVudG9yeUl0ZW1Sb3ctJHtpKzF9YCk7XHJcbiAgICAgICAgICAgIGludmVudG9yeVBhZ2UuYXBwZW5kQ2hpbGQoaW52ZW50b3J5SXRlbVJvdylcclxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAoaSAqIDUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC8vIENvZGUgdG8gZ2VuZXJhdGUgZWFjaCBpbmRleCBpbiBlYWNoIGludmVudG9yeSByb3dcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA1OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnZlbnRvcnlJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2NvdW50ZXIgKyBqICsgMX1gKTtcclxuICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IChjb3VudGVyICsgailcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZEltYWdlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlSXRlbUNhcmRNb2RhbChlLnRhcmdldCwgaW52ZW50b3J5W2l0ZW1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGludmVudG9yeUl0ZW1Db250YWluZXIuc3R5bGUuYm9yZGVyID0gXCI0cHggc29saWQgeWVsbG93XCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5SXRlbUNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB3aGl0ZVwiO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnRvcnlJdGVtUm93LmFwcGVuZENoaWxkKGludmVudG9yeUl0ZW1Db250YWluZXIpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblxyXG59XHJcblxyXG4vLyBUaGlzIGlzIHNlcGFyYXRlIGZyb20gaW52ZW50b3J5IGFuZCBvbmx5IGdlbmVyYXRlcyB0aGUgY29udGFpbmVyIGZvciBpbnZlbnRvcnkgaXRlbXNcclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUludmVudG9yeVBhZ2UgKGludmVudG9yeSkge1xyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gPSAwOyBpdGVtIDwgaW52ZW50b3J5Lmxlbmd0aDsgaXRlbSsrKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50b3J5W2l0ZW1dKTtcclxuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZlbnRvcnlJdGVtJylbaXRlbV07XHJcbiAgICAgICAgbGV0IGl0ZW1TcHJpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGl0ZW1TcHJpdGUuY2xhc3NMaXN0LmFkZChcImludmVudG9yeUl0ZW1TcHJpdGVcIik7XHJcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtU3ByaXRlKTtcclxuICAgICAgICBsZXQgaXRlbUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UoaW52ZW50b3J5W2l0ZW1dLl90eXBlLnJlcGxhY2UoL1xccy9nLCAnJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1JbWFnZSlcclxuICAgICAgICBpdGVtU3ByaXRlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aXRlbUltYWdlfScpYFxyXG4gICAgICAgIGl0ZW1TcHJpdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmFyaXR5Q29sb3JzW2ludmVudG9yeVtpdGVtXS5fcmFyaXR5XTtcclxuICAgICAgICBpdGVtQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnZlbnRvcnlbaXRlbV07XHJcbiAgICAgICAgfVxyXG4gICAgKX07XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52ZW50b3J5RXZlbnRIYW5kbGVyKGludmVudG9yeSkge1xyXG4gICAgaWYgKGludmVudG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY3JlYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgICAgIHVwZGF0ZUludmVudG9yeVBhZ2UoaW52ZW50b3J5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3JlYXRlSW52ZW50b3J5UGFnZShpbnZlbnRvcnkpO1xyXG4gICAgfVxyXG4gIH1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2Uoa2V5LCBkYXRhKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGtleSkge1xyXG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gZGF0YSA/IEpTT04ucGFyc2UoZGF0YSkgOiBudWxsO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgcGFyc2luZyBKU09OIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UgZm9yIGtleSAnJHtrZXl9JzpgLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0iLCJpbXBvcnQgeyBnZXRXZWFwb25JbWFnZSwgZ2V0QXJtb3VySW1hZ2UsIGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UgfSBmcm9tIFwiLi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5pbXBvcnQgeyBjYWxjV2VhcG9uU2NvcmUgfSBmcm9tIFwiLi4vcGxheWVyQ2hhcmFjdGVyRnVuY3Rpb25zXCI7XHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBoaWRlSW52ZW50b3J5TW9kYWwoZSkge1xyXG4gICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIFxyXG5mdW5jdGlvbiBjcmVhdGVJdGVtQ2FyZE1vZGFsKGUsIGl0ZW0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjYWxjV2VhcG9uU2NvcmUoaXRlbSkpXHJcbiAgICAgICAgXHJcbmNvbnN0IHJhcml0eUNvbG9ycyA9IHtcclxuICAgIG5vcm1hbDogXCJyZ2IoMjExLCAyMTEsIDIxMSlcIixcclxuICAgIHVuY29tbW9uOiBcInJnYigwLCAxMjgsIDApXCIsXHJcbiAgICByYXJlOiBcInJnYigzMCwgMzAsIDI1NSlcIixcclxuICAgIGVwaWM6IFwicmdiKDE2MCwgMzIsIDI0MClcIixcclxuICAgIGxlZ2VuZGFyeTogXCJyZ2IoMjU1LCAxNjUsIDApXCIsXHJcbiAgICB9O1xyXG5cclxuY29uc3QgaXRlbVN0YXRzVG9wSGFsZiA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVsZW1lbnRcIixcclxuICAgICAgICBpZDogXCJlbGVtZW50XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX2VsZW1lbnQsXHJcbiAgICAgICAgaWNvbjogZ2V0RWxlbWVudEltYWdlKGl0ZW0uX2VsZW1lbnQpXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmFyaXR5XCIsXHJcbiAgICAgICAgaWQ6IFwicmFyaXR5XCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3Jhcml0eVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkhlcm8gU2NvcmVcIixcclxuICAgICAgICBpZDogXCJoZXJvU2NvcmVcIixcclxuICAgICAgICB2YWx1ZTogY2FsY1dlYXBvblNjb3JlKGl0ZW0pXHJcbiAgICB9XHJcbl1cclxuXHJcbmNvbnN0IGl0ZW1TdGF0c0JvdHRvbUhhbGY9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkl0ZW0gVHlwZVwiLFxyXG4gICAgICAgIGlkOiBcIml0ZW1UeXBlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3R5cGVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXZWFwb24gRGFtYWdlXCIsXHJcbiAgICAgICAgaWQ6IFwiZGFtYWdlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmRhbWFnZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNyaXRpY2FsIENoYW5jZVwiLFxyXG4gICAgICAgIGlkOiBcImNyaXRDaGFuY2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY3JpdENoYW5jZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNyaXRpY2FsIERhbWFnZVwiLFxyXG4gICAgICAgIGlkOiBcImNyaXREYW1hZ2VcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuY3JpdERhbWFnZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkNvbnN0aXR1dGlvblwiLFxyXG4gICAgICAgIGlkOiBcImNvbnN0aXR1dGlvblwiLFxyXG4gICAgICAgIHZhbHVlOiBpdGVtLl9zdGF0cy5jb25zdGl0dXRpb25cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJEZXh0ZXJpdHlcIixcclxuICAgICAgICBpZDogXCJkZXh0ZXJpdHlcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuZGV4dGVyaXR5XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiSW50ZWxsaWdlbmNlXCIsXHJcbiAgICAgICAgaWQ6IFwiaW50ZWxsaWdlbmNlXCIsXHJcbiAgICAgICAgdmFsdWU6IGl0ZW0uX3N0YXRzLmludGVsbGlnZW5jZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlN0cmVuZ3RoXCIsXHJcbiAgICAgICAgaWQ6IFwic3RyZW5ndGhcIixcclxuICAgICAgICB2YWx1ZTogaXRlbS5fc3RhdHMuc3RyZW5ndGhcclxuICAgIH1cclxuICAgIF07XHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuICAgICBcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsXCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWNvbnRlbnRcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZENvbnRlbnRcIik7XHJcbiAgICBcclxuICAgICAgY29uc3QgaXRlbUNhcmRUb3BIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaXRlbUNhcmRUb3BIYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFRvcEhhbGZcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkQm90dG9tSGFsZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkQm90dG9tSGFsZi5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRCb3R0b21IYWxmXCIpO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGl0ZW1DYXJkU3RhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaXRlbUNhcmRTdGF0Q29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdCBvZiBpdGVtU3RhdHNCb3R0b21IYWxmKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUNhcmRTdGF0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkU3RhdENvbnRhaW5lclwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuaWQgPSBzdGF0LmlkO1xyXG4gICAgICAgIC8vIGl0ZW1DYXJkU3RhdENvbnRhaW5lci5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIjogXCIgKyBzdGF0LnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGl0ZW1DYXJkQm90dG9tSGFsZi5hcHBlbmRDaGlsZChpdGVtQ2FyZFN0YXRDb250YWluZXIpXHJcbiAgICAgICAgY29uc3Qgc3RhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0TmFtZS5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIiA6XFx1MDBBMFwiXHJcbiAgICAgICAgc3RhdE5hbWUuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBzdGF0VmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gKHN0YXQudmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXROYW1lKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaXRlbUNhcmRCb3R0b21IYWxmLmFwcGVuZENoaWxkKGl0ZW1DYXJkU3RhdENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxJdGVtSW1hZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImludmVudG9yeS1tb2RhbC1pdGVtLWltYWdlLWNvbnRhaW5lclwiKVxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktbW9kYWwtaXRlbS1pbWFnZVwiKTtcclxuICAgICAgbGV0IGl0ZW1JbWFnZSA9IGUuc3R5bGUuYmFja2dyb3VuZEltYWdlO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpdGVtSW1hZ2U7XHJcbiAgICAgIGludmVudG9yeU1vZGFsSXRlbUltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsSXRlbUltYWdlKTtcclxuICAgICAgY29uc3QgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cy5jbGFzc0xpc3QuYWRkKFwiaW52ZW50b3J5LW1vZGFsLWl0ZW0tc3RhdHNcIik7XHJcbiAgICBcclxuICAgICAgLy8gY29uc3QgZWxlbWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIC8vIGVsZW1lbnRDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2V9JylgXHJcbiAgICAgIC8vIGVsZW1lbnRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIml0ZW1DYXJkQ29udGFpbmVyXCIpO1xyXG4gICAgXHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdCBvZiBpdGVtU3RhdHNUb3BIYWxmKSB7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBpdGVtQ2FyZFN0YXRDb250YWluZXJUb3BIYWxmLmNsYXNzTGlzdC5hZGQoXCJpdGVtQ2FyZFN0YXRDb250YWluZXJcIik7XHJcbiAgICAgICAgaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZi5pZCA9IHN0YXQuaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBzdGF0TmFtZS5pbm5lclRleHQgPSBzdGF0Lm5hbWUgKyBcIjpcXHUwMEEwXCI7XHJcbiAgICAgICAgc3RhdE5hbWUuc3R5bGUuY29sb3IgPSBcInllbGxvd1wiO1xyXG4gICAgXHJcbiAgICAgICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cmluZykge1xyXG4gICAgICAgICAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3Qgc3RhdFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgaWYgKHN0YXQubmFtZSA9PSBcIlJhcml0eVwiKSB7XHJcbiAgICAgICAgICBsZXQgcmFyaXR5TmFtZSA9IGNhcGl0YWxpemVGaXJzdExldHRlcihzdGF0LnZhbHVlKVxyXG4gICAgICAgICAgc3RhdFZhbHVlLmlubmVyVGV4dCA9IHJhcml0eU5hbWU7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuc3R5bGUuY29sb3IgPSByYXJpdHlDb2xvcnNbaXRlbS5fcmFyaXR5XTtcclxuICAgICAgICAgIHN0YXRWYWx1ZS5zdHlsZS5mb250V2VpZ2h0ID0gODAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdC5uYW1lID09IFwiSGVybyBTY29yZVwiKSB7XHJcbiAgICAgICAgICBzdGF0VmFsdWUuaW5uZXJUZXh0ID0gXCIrXCIgKyBzdGF0LnZhbHVlO1xyXG4gICAgICAgICAgc3RhdFZhbHVlLnN0eWxlLmZvbnRTaXplID0gXCIzMnB4XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBlbGVtZW50SWNvbi5zcmMgPSBzdGF0Lmljb247XHJcbiAgICAgICAgICAgIGVsZW1lbnRJY29uLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiOyAvLyBBbGlnbiB0aGUgaW1hZ2UgdmVydGljYWxseSBpbiBsaW5lIHdpdGggdGhlIHRleHRcclxuICAgICAgICAgICAgZWxlbWVudEljb24uc3R5bGUubWFyZ2luTGVmdCA9IFwiMTBweFwiOyAvLyBBZGQgbWFyZ2luIGJldHdlZW4gdGhlIHRleHQgYW5kIGltYWdlXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiOyAvLyBFbmFibGUgZmxleGJveCBsYXlvdXRcclxuICAgICAgICAgICAgdmFsdWVDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7IC8vIEFsaWduIGl0ZW1zIHZlcnRpY2FsbHkgaW4gdGhlIGNlbnRlclxyXG4gICAgICAgICAgICB2YWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdGF0LnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnRJY29uKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBzdGF0VmFsdWUuYXBwZW5kQ2hpbGQodmFsdWVDb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuYXBwZW5kQ2hpbGQoc3RhdE5hbWUpO1xyXG4gICAgICAgIGl0ZW1DYXJkU3RhdENvbnRhaW5lclRvcEhhbGYuYXBwZW5kQ2hpbGQoc3RhdFZhbHVlKTtcclxuICAgICAgXHJcbiAgICAgICAgaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuYXBwZW5kQ2hpbGQoaXRlbUNhcmRTdGF0Q29udGFpbmVyVG9wSGFsZik7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgIGNsb3NlQnRuLmNsYXNzTGlzdC5hZGQoXCJpbnZlbnRvcnktY2xvc2VcIik7XHJcbiAgICAgIGNsb3NlQnRuLmlubmVyVGV4dCA9IFwiWFwiO1xyXG4gICAgICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGhpZGVJbnZlbnRvcnlNb2RhbChlKSBcclxuICAgICAgfSlcclxuICAgIFxyXG4gICAgICBjb25zdCBpbnZlbnRvcnlNb2RhbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gXCJNb2RhbCBUaXRsZVwiO1xyXG4gICAgXHJcbiAgICAgIGNvbnN0IGludmVudG9yeU1vZGFsQ29udGVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50VGV4dC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyB0aGUgaW52ZW50b3J5IG1vZGFsIGNvbnRlbnQuXCI7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsVGl0bGUpO1xyXG4gICAgICBpbnZlbnRvcnlNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRDb250ZW50KTtcclxuICAgIFxyXG4gICAgICBpdGVtQ2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQoaXRlbUNhcmRUb3BIYWxmKTtcclxuICAgICAgaXRlbUNhcmRDb250ZW50LmFwcGVuZENoaWxkKGl0ZW1DYXJkQm90dG9tSGFsZik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1JbWFnZUNvbnRhaW5lcik7XHJcbiAgICAgIGl0ZW1DYXJkVG9wSGFsZi5hcHBlbmRDaGlsZChpbnZlbnRvcnlNb2RhbEl0ZW1TdGF0cyk7XHJcbiAgICBcclxuICAgICAgLy8gaW52ZW50b3J5TW9kYWxJdGVtU3RhdHMuYXBwZW5kQ2hpbGQoZWxlbWVudENvbnRhaW5lcik7XHJcbiAgICBcclxuICAgICAgaW52ZW50b3J5TW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsQ29udGVudFRleHQpO1xyXG4gICAgXHJcbiAgICAgIGludmVudG9yeU1vZGFsLmFwcGVuZENoaWxkKGludmVudG9yeU1vZGFsQ29udGVudCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW52ZW50b3J5TW9kYWwpO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiBpbnZlbnRvcnlNb2RhbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVJdGVtQ2FyZE1vZGFsKGUsIGludmVudG9yeSkge1xyXG4gICAgY29uc3QgaW52ZW50b3J5TW9kYWwgPSBjcmVhdGVJdGVtQ2FyZE1vZGFsKGUsIGludmVudG9yeSk7XHJcbiAgICBpbnZlbnRvcnlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH0iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvcm1Nb2RhbCAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBibG9ja1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiBcclxuICAgIH1cclxuIFxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtTW9kYWwgKGV2ZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBIaWRlIG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBub25lXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY2FsY0hlcm9TY29yZSAocGxheWVyQ2hhcmFjdGVyKSB7XHJcbiAgICBsZXQgaGVyb1Njb3JlID0gMDtcclxuXHJcbiAgICAvLyBCYXNlIHN0YXRzIGNhbGNcclxuICAgIGxldCBpbmhlcmVudFN0cmVuZ3RoID0gcGxheWVyQ2hhcmFjdGVyLl9zdGF0cy5nZXRTdGF0KFwic3RyZW5ndGhcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRJbnRlbGxpZ2VuY2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJpbnRlbGxpZ2VuY2VcIik7XHJcbiAgICBsZXQgaW5oZXJlbnREZXh0ZXJpdHkgPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJkZXh0ZXJpdHlcIik7XHJcbiAgICBsZXQgaW5oZXJlbnRDb25zdGl0dXRpb24gPSBwbGF5ZXJDaGFyYWN0ZXIuX3N0YXRzLmdldFN0YXQoXCJjb25zdGl0dXRpb25cIik7XHJcblxyXG4gICAgLy8gV2VhcG9uIFN0YXRzIENhbGNcclxuICAgIGxldCB3ZWFwb25TdHJlbmd0aCA9IDA7XHJcbiAgICBsZXQgd2VhcG9uSW50ZWxsaWdlbmNlID0gMDtcclxuICAgIGxldCB3ZWFwb25EZXh0ZXJpdHkgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkNvbnN0aXR1dGlvbiA9IDA7XHJcbiAgICBsZXQgZXF1aXBtZW50U3RhdCA9IDA7XHJcbiAgIFxyXG4gICAgZm9yIChsZXQgd2VhcG9uSW5kZXggPSAwOyB3ZWFwb25JbmRleCA8IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtcy5sZW5ndGg7IHdlYXBvbkluZGV4KyspIHtcclxuICAgICAgICB3ZWFwb25TdHJlbmd0aCArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5zdHJlbmd0aDtcclxuICAgICAgICB3ZWFwb25JbnRlbGxpZ2VuY2UgKz0gcGxheWVyQ2hhcmFjdGVyLl9lcXVpcHBlZEl0ZW1zW3dlYXBvbkluZGV4XS5fc3RhdHMuaW50ZWxsaWdlbmNlO1xyXG4gICAgICAgIHdlYXBvbkRleHRlcml0eSArPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kZXh0ZXJpdHk7XHJcbiAgICAgICAgd2VhcG9uQ29uc3RpdHV0aW9uICs9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNvbnN0aXR1dGlvbjtcclxuICAgICAgICBsZXQgd2VhcG9uQ3JpdENoYW5jZSA9IHBsYXllckNoYXJhY3Rlci5fZXF1aXBwZWRJdGVtc1t3ZWFwb25JbmRleF0uX3N0YXRzLmNyaXRDaGFuY2U7XHJcbiAgICAgICAgbGV0IHdlYXBvbkNyaXREYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5jcml0RGFtYWdlO1xyXG4gICAgICAgIGxldCB3ZWFwb25EYW1hZ2UgPSBwbGF5ZXJDaGFyYWN0ZXIuX2VxdWlwcGVkSXRlbXNbd2VhcG9uSW5kZXhdLl9zdGF0cy5kYW1hZ2U7XHJcbiAgICAgICAgZXF1aXBtZW50U3RhdCArPSAod2VhcG9uRGFtYWdlICsgKHdlYXBvbkRhbWFnZSAqIHdlYXBvbkNyaXRDaGFuY2UgKiB3ZWFwb25Dcml0RGFtYWdlKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFRvdGFsIFN0YXRzXHJcblxyXG4gICAgbGV0IHRvdGFsU3RyZW5ndGggPSBpbmhlcmVudFN0cmVuZ3RoICsgd2VhcG9uU3RyZW5ndGg7XHJcbiAgICBsZXQgdG90YWxJbnRlbGxpZ2VuY2UgPSBpbmhlcmVudEludGVsbGlnZW5jZSArIHdlYXBvbkludGVsbGlnZW5jZTtcclxuICAgIGxldCB0b3RhbERleHRlcml0eSA9IGluaGVyZW50RGV4dGVyaXR5ICsgd2VhcG9uRGV4dGVyaXR5O1xyXG4gICAgbGV0IHRvdGFsQ29uc3RpdHV0aW9uID0gaW5oZXJlbnRDb25zdGl0dXRpb24gKyB3ZWFwb25Db25zdGl0dXRpb247XHJcblxyXG4gICAgc3dpdGNoKHBsYXllckNoYXJhY3Rlci5oZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJXYXJyaW9yXCI6XHJcbiAgICAgICAgICAgIHRvdGFsU3RyZW5ndGggKj0gMjtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgdG90YWxJbnRlbGxpZ2VuY2UgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgdG90YWxEZXh0ZXJpdHkgKj0gMjtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICAgIHRvdGFsQ29uc3RpdHV0aW9uICo9IDI7XHJcbiAgICB9XHJcblxyXG4gICAgaGVyb1Njb3JlICs9ICh0b3RhbFN0cmVuZ3RoICsgdG90YWxJbnRlbGxpZ2VuY2UgKyB0b3RhbERleHRlcml0eSArIHRvdGFsQ29uc3RpdHV0aW9uICsgZXF1aXBtZW50U3RhdClcclxuXHJcblxyXG5cclxuICAgIHJldHVybiBoZXJvU2NvcmUudG9GaXhlZCgyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNXZWFwb25TY29yZSAod2VhcG9uKSB7XHJcbiAgICBcclxuICAgIGxldCB0b3RhbFdlYXBvblNjb3JlID0gMDsgXHJcblxyXG4gICAgbGV0IHdlYXBvblN0cmVuZ3RoID0gMDtcclxuICAgIGxldCB3ZWFwb25JbnRlbGxpZ2VuY2UgPSAwO1xyXG4gICAgbGV0IHdlYXBvbkRleHRlcml0eSA9IDA7XHJcbiAgICBsZXQgd2VhcG9uQ29uc3RpdHV0aW9uID0gMDtcclxuICAgIGxldCBlcXVpcG1lbnRTdGF0ID0gMDtcclxuXHJcbiAgICBcclxuICAgIHdlYXBvblN0cmVuZ3RoICs9IHdlYXBvbi5fc3RhdHMuc3RyZW5ndGg7XHJcbiAgICB3ZWFwb25JbnRlbGxpZ2VuY2UgKz0gd2VhcG9uLl9zdGF0cy5pbnRlbGxpZ2VuY2U7XHJcbiAgICB3ZWFwb25EZXh0ZXJpdHkgKz0gd2VhcG9uLl9zdGF0cy5kZXh0ZXJpdHk7XHJcbiAgICB3ZWFwb25Db25zdGl0dXRpb24gKz0gd2VhcG9uLl9zdGF0cy5jb25zdGl0dXRpb247XHJcbiAgICBsZXQgd2VhcG9uQ3JpdENoYW5jZSA9IHdlYXBvbi5fc3RhdHMuY3JpdENoYW5jZTtcclxuICAgIGxldCB3ZWFwb25Dcml0RGFtYWdlID0gd2VhcG9uLl9zdGF0cy5jcml0RGFtYWdlO1xyXG4gICAgbGV0IHdlYXBvbkRhbWFnZSA9IHdlYXBvbi5fc3RhdHMuZGFtYWdlO1xyXG4gICAgZXF1aXBtZW50U3RhdCArPSAod2VhcG9uRGFtYWdlICsgKHdlYXBvbkRhbWFnZSAqIHdlYXBvbkNyaXRDaGFuY2UgKiB3ZWFwb25Dcml0RGFtYWdlKSk7XHJcblxyXG4gICAgdG90YWxXZWFwb25TY29yZSA9ICh3ZWFwb25TdHJlbmd0aCArIHdlYXBvbkludGVsbGlnZW5jZSArIHdlYXBvbkRleHRlcml0eSArIHdlYXBvbkNvbnN0aXR1dGlvbiArIGVxdWlwbWVudFN0YXQpXHJcblxyXG4gICAgcmV0dXJuIHRvdGFsV2VhcG9uU2NvcmUudG9GaXhlZCgyKTtcclxuXHJcbn1cclxuICAgIFxyXG4iLCJpbXBvcnQgeyBRdWVzdCwgQ3VycmVuY3kgfSBmcm9tICcuL2NsYXNzZXMvY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IsIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVRdWVzdFBhcmFsbGF4LCBjcmVhdGVRdWVzdENvbnRhaW5lciwgcXVlc3RDb250cm9sbGVyLCByZW1vdmVFbXB0eVN0YXRlLCBzaG93RW1wdHlRdWVzdHNTdGF0ZSB9IGZyb20gJy4vaW5kZXhWaWV3RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKGNhcmQpIHtcclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBuZXcgQ3VycmVuY3kobnVsbCwgbnVsbCksIG51bGwsIG51bGwsIG51bGwsIG51bGwpXHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI29iamVjdGl2ZVRleHRJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0RGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW5jeVR5cGVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbmN5QW1vdW50SW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RUaW1lU3BlbnQgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoXCIjcXVlc3RUaW1lVmFsdWVcIikudmFsdWVcclxuICAgIGxldCBnZXRRdWVzdFRpbWVUeXBlID0gY2FyZC5xdWVyeVNlbGVjdG9yKFwiI3F1ZXN0VGltZVR5cGVcIikudmFsdWVcclxuICAgIGxldCB0aW1lRnJhbWVTdGFydCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdFN0YXJ0VGltZVwiKS52YWx1ZVxyXG4gICAgbGV0IHRpbWVGcmFtZUVuZCA9IGNhcmQucXVlcnlTZWxlY3RvcihcIiNxdWVzdEVuZFRpbWVcIikudmFsdWVcclxuXHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBwYXJzZUludChnZXRRdWVzdEN1cnJlbmN5QW1vdW50KTtcclxuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcclxuICAgIHF1ZXN0T2JqZWN0Lm9uZU9mZkJvb2wgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LmdvYWxJZCA9IG51bGw7XHJcbiAgICBxdWVzdE9iamVjdC50aW1lU3BlbnQgPSBnZXRRdWVzdFRpbWVTcGVudDtcclxuICAgIHF1ZXN0T2JqZWN0LnRpbWVUeXBlID0gZ2V0UXVlc3RUaW1lVHlwZTtcclxuXHJcbiAgIFxyXG5cclxuICAgICBcclxuICAgIGlmICh0aW1lRnJhbWVTdGFydCA9PSBudWxsIHx8IHRpbWVGcmFtZVN0YXJ0ID09IHVuZGVmaW5lZCB8fCB0aW1lRnJhbWVTdGFydCA9PSBcIlwiIHx8XHJcbiAgICAgICAgdGltZUZyYW1lRW5kID09IG51bGwgfHwgdGltZUZyYW1lRW5kID09IHVuZGVmaW5lZCB8fCB0aW1lRnJhbWVFbmQgPT0gXCJcIikge1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0LnRpbWVGcmFtZVN0YXJ0ID0gbnVsbDtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVFbmQgPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0T2JqZWN0LnRpbWVGcmFtZVN0YXJ0KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBxdWVzdE9iamVjdC50aW1lRnJhbWVTdGFydCA9IHRpbWVGcmFtZVN0YXJ0O1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0LnRpbWVGcmFtZUVuZCA9IHRpbWVGcmFtZUVuZDtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVRdWVzdFN1Ym1pc3Npb24gKG5ld1F1ZXN0KSB7XHJcbiAgICBcclxuICAgIGxldCB2YWxpZENyaXRlcmlhID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoIW5ld1F1ZXN0Lm9iamVjdGl2ZSkge1xyXG4gICAgICAgIGFsZXJ0KFwiUXVlc3QgT2JqZWN0aXZlIFJlcXVpcmVkIVwiKVxyXG4gICAgICAgIHZhbGlkQ3JpdGVyaWEgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIW5ld1F1ZXN0LmRhdGVUb0NvbXBsZXRlKSB7XHJcbiAgICAgICAgYWxlcnQoXCJJbnZhbGlkIERhdGUhXCIpXHJcbiAgICAgICAgdmFsaWRDcml0ZXJpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEludmFsaWQgQ3VycmVuY3kgQW1vdW50OlxyXG4gICAgaWYgKCFuZXdRdWVzdC5yZXdhcmQuYW1vdW50KSB7XHJcbiAgICAgICAgYWxlcnQoXCJDdXJyZW5jeSBBbW91bnQgbXVzdCBiZSBncmVhdGVyIHRoYW4gMCFcIik7XHJcbiAgICAgICAgdmFsaWRDcml0ZXJpYSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gdmFsaWRDcml0ZXJpYTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdob3N0Q2FyZCgpIHtcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImdob3N0Q2FyZFwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuXHJcbiAgICBjb25zdCBjcmVhdGVOZXdRdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjcmVhdGVOZXdRdWVzdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkUXVlc3RCdXR0b25cIik7XHJcbiAgICBjcmVhdGVOZXdRdWVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkNhbm5vdCBtYWtlIGEgbmV3IHF1ZXN0IHVudGlsIHlvdSBoYXZlIHN1Ym1pdHRlZCB5b3VyIGZpcnN0IHF1ZXN0IE9SIHlvdXIgY3VycmVudCBxdWVzdCBsaXN0IGlzIGdyZWF0ZXIgdGhhbiAwIVwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgIGxldCBnaG9zdENhcmQgPSB0aGlzLnBhcmVudE5vZGU7XHJcbiAgICAgICAgbGV0IG5ld1F1ZXN0Q2FyZCA9IGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlKCk7XHJcbiAgICAgICAgcXVlc3RQYXJhbGxheC5pbnNlcnRCZWZvcmUobmV3UXVlc3RDYXJkLCBnaG9zdENhcmQpO1xyXG4gICAgfSk7XHJcbiAgICBjcmVhdGVOZXdRdWVzdEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZCBRdWVzdCArXCI7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGNyZWF0ZU5ld1F1ZXN0QnV0dG9uKTtcclxuXHJcbiAgICAvLyBBZGQgaG92ZXIgZXZlbnQgbGlzdGVuZXJzIHRvIHRvZ2dsZSBvcGFjaXR5XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJlbXB0eUNhcmRcIik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDYXJkIENvbnRlbnRcclxuICAgIGxldCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlDYXJkQ29udGVudFwiKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIDEuIFN1Ym1pdCBidXR0b24gQ09OVEFJTkVSIGNvbnRlbnRcclxuICAgIGxldCBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gMWEpIFN1Ym1pdCBOZXcgUXVlc3QgQnV0dG9uXHJcbiAgICAgICAgY29uc3Qgc3VtYml0TmV3UXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXROZXdRdWVzdEJ1dHRvblwiKTtcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0TmV3UXVlc3QoY2FyZCk7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZVF1ZXN0U3VibWlzc2lvbih4KSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHgpO1xyXG4gICAgICAgICAgICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbnRRdWVzdExpc3RcIiwgY3VycmVudFF1ZXN0TGlzdCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgY2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0UGFyYWxsYXguYXBwZW5kQ2hpbGQoY3JlYXRlR2hvc3RDYXJkKCkpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcclxuICAgICAgICBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1iaXROZXdRdWVzdEJ1dHRvbik7XHJcblxyXG5cclxuICAgIC8vIDIuIE9iamVjdGl2ZSBDT05UQUlORVIgY29udGVudCAtIGluY2x1ZGVzIHVzZXIgb2JqZWN0aXZlIHRleHR1YWwgaW5wdXQgYW5kIHRpbWUgaW5wdXRzXHJcbiAgICBsZXQgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVDb250ZW50Q29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQ29udGVudENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gMmEpIE9iamVjdGl2ZSBUZXh0IElucHV0IENvbnRhaW5lclxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gMmEpIC0gT2JqZWN0aXZlIFRleHQgXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVmaW5lIHlvdXIgcXVlc3QgaGVyZS4uLlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjcwXCIpOyAvLyBTZXQgY2hhcmFjdGVyIGxpbWl0IHRvIDcwXHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9iamVjdGl2ZVRleHRJbnB1dFwiKTsgXHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0SW5wdXQpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIC8vIDJiKSBPYmplY3RpdmUgVGltZWZyYW1lIEVsZW1lbnRzIENvbnRhaW5lclxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICAvLyAyYikgaSkgT2JqZWN0aXZlIFRpbWVmcmFtZSBMYWJlbCBDb250YWluZXJcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGkpIDEuIC0gSW5wdXQgRGF0ZSBsYWJlbFxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3F1ZXN0RGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXREYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdERhdGVMYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXREYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRGF0ZTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXREYXRlTGFiZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAyYikgaSkgMi4gLSBJbnB1dCBTdGFydCBUaW1lIChPcHRpb25hbClcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dFN0YXJ0VGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0U3RhcnRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncXVlc3RTdGFydFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0U3RhcnRUaW1lTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdFN0YXJ0VGltZUxhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0YXJ0VGltZUxhYmVsLnRleHRDb250ZW50ID0gJ1N0YXJ0IFRpbWUgKE9wdGlvbmFsKTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRTdGFydFRpbWVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIDJiKSBpKSAzLiAtIElucHV0IEVuZCBUaW1lIChPcHRpb25hbClcclxuICAgICAgICAgICAgICAgIGxldCBpbnB1dEVuZFRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdEVuZFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RW5kVGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnaWQnLCAncXVlc3RFbmRUaW1lTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0RW5kVGltZUxhYmVsLnRleHRDb250ZW50ID0gJ0VuZCBUaW1lIChPcHRpb25hbCk6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0RW5kVGltZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcXVlc3RUaW1lVHlwZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVR5cGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdFRpbWVUeXBlJyk7XHJcbiAgICAgICAgICAgICAgICBxdWVzdFRpbWVUeXBlTGFiZWwuc2V0QXR0cmlidXRlKCdpZCcsICdxdWVzdFRpbWVUeXBlTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVR5cGVMYWJlbC50ZXh0Q29udGVudCA9ICdUaW1lIFNwZW50IFR5cGU6JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0VGltZVR5cGVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0VGltZVZhbHVlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVmFsdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdFRpbWVWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RUaW1lVmFsdWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0VGltZVZhbHVlTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0VGltZVZhbHVlTGFiZWwudGV4dENvbnRlbnQgPSAnVGltZSBTcGVudCBWYWx1ZTonO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RUaW1lVmFsdWVMYWJlbCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGlpKSBPYmplY3RpdmUgVGltZWZyYW1lIElucHV0IENvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBvYmplY3RpdmUgdGltZSBmcmFtZSBpbnB1dFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuaWQgPSAncXVlc3REYXRlJztcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBtaW5pbXVtIGRhdGUgdG8gdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBzdGFydCB0aW1lIGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0U3RhcnRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5pZCA9ICdxdWVzdFN0YXJ0VGltZSc7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydFRpbWVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBlbmQgdGltZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdEVuZFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5pZCA9ICdxdWVzdEVuZFRpbWUnO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZFRpbWVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIHRpbWUgc3BlbnQgdW5pdCBzZWxlY3QgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVTcGVudFR5cGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdFRpbWVUeXBlJyk7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuaWQgPSAncXVlc3RUaW1lVHlwZSc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uIDE6IEhvdXJzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBob3Vyc09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgaG91cnNPcHRpb24udmFsdWUgPSAnaG91cnMnO1xyXG4gICAgICAgICAgICAgICAgaG91cnNPcHRpb24udGV4dENvbnRlbnQgPSAnSG91cnMnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFwcGVuZENoaWxkKGhvdXJzT3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBPcHRpb24gMjogTWludXRlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWludXRlc09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbWludXRlc09wdGlvbi52YWx1ZSA9ICdtaW51dGVzJztcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXNPcHRpb24udGV4dENvbnRlbnQgPSAnTWludXRlcyc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRUeXBlSW5wdXQuYXBwZW5kQ2hpbGQobWludXRlc09wdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gT3B0aW9uIDM6IE5vIHNwZWNpZmljIHRpbWVmcmFtZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmxleGlibGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGZsZXhpYmxlT3B0aW9uLnZhbHVlID0gJ04vQSc7XHJcbiAgICAgICAgICAgICAgICBmbGV4aWJsZU9wdGlvbi50ZXh0Q29udGVudCA9ICdOL0EnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50VHlwZUlucHV0LmFwcGVuZENoaWxkKGZsZXhpYmxlT3B0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50VHlwZUlucHV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAyYikgaWkpIC0gQ3JlYXRlIHRpbWUgc3BlbnQgaW5wdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVTcGVudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdFRpbWVWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuaWQgPSAncXVlc3RUaW1lVmFsdWUnO1xyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm1JbnB1dCc7XHJcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC5taW4gPSAxOyAvLyBTZXQgdGhlIG1pbmltdW0gdmFsdWUgdG8gMFxyXG4gICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7IC8vIERpc2FibGUgYXV0b2NvbXBsZXRlIGZvciBudW1lcmljIGlucHV0XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50SW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byBkaXNhYmxlIHRpbWVTcGVudElucHV0IHdoZW4gXCJOL0FcIiBvcHRpb24gaXMgc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudFR5cGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGltZVNwZW50VHlwZUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmRpc2FibGVkID0gKHNlbGVjdGVkVmFsdWUgPT09ICdOL0EnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ04vQScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lU3BlbnRJbnB1dC52YWx1ZSA9ICcnOyAvLyBDbGVhciB0aGUgdmFsdWUgaWYgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyIHRvIHZhbGlkYXRlIHRoZSBpbnB1dCBhcyBhIHBvc2l0aXZlIGludGVnZXJcclxuICAgICAgICAgICAgICAgIHRpbWVTcGVudElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aW1lU3BlbnRJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTsgLy8gUmVtb3ZlIGFsbCBub24tbnVtZXJpYyBjaGFyYWN0ZXJzXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZVNwZW50SW5wdXQudmFsdWUgPSBudW1lcmljVmFsdWU7IC8vIFVwZGF0ZSB0aGUgaW5wdXQgdmFsdWUgdG8gbnVtZXJpYy1vbmx5IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVTcGVudElucHV0KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgIC8vIDMuIFJld2FyZCBDT05UQUlORVIgY29udGVudCAtIGluY2x1ZGVzIHVzZXIgcmV3YXJkIHR5cGUgaW5wdXQgYW5kIHJld2FyZCBhbW91bnQgaW5wdXRcclxuICAgIGxldCByZXdhcmRTZWxlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkU2VsZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRTZWxlY3Rpb25Db250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChyZXdhcmRTZWxlY3Rpb25Db250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIDNhKSBSZXdhcmQgQm94IFBhcmVudCBFbGVtZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hJbnB1dFwiKTtcclxuICAgICAgICByZXdhcmRTZWxlY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICAgICAgICAgIC8vIDNhKSAtIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgICAgICAgICBcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG5cclxuICAgICAgICAgICAgLy8gM2EpIC0gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIElucHV0cyAtIEN1cnJlbmN5IFR5cGVcclxuICAgICAgICBsZXQgcmV3YXJkVHlwZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiTGFiZWxcIik7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkTGFiZWxcIik7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSAnQ3VycmVuY3kgVHlwZSc7XHJcbiAgICAgICAgbGV0IHJld2FyZFR5cGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcclxuICAgICAgICByZXdhcmRUeXBlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInJld2FyZFR5cGVJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgICAgIHJld2FyZFR5cGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbmN5VHlwZUlucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZFR5cGVJbnB1dExhYmVsKTtcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkVHlwZUlucHV0KTtcclxuIFxyXG5cclxuICAgICAgICAvLyBSZXdhcmQgVHlwZSAtIE9wdGlvbnMgZHluYW1pY2FsbHkgZ2VuZXJhdGVkIGJhc2VkIG9uIHRoZSByZXdhcmQgdXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llcyBvYmplY3QgbGlzdFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV3YXJkVXRpbGl0aWVzLnZhbGlkQ3VycmVuY2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKVxyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXNbaV0pO1xyXG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldfWA7XHJcbiAgICAgICAgICAgIHJld2FyZFR5cGVJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIElucHV0cyAtIEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgIGxldCByZXdhcmRBbW91bnRJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkxhYmVsXCIpO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0TGFiZWwuY2xhc3NMaXN0LmFkZChcImlucHV0UmV3YXJkTGFiZWxcIik7XHJcbiAgICAgICAgbGV0IHJld2FyZEFtb3VudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXRMYWJlbC50ZXh0Q29udGVudCA9ICdDdXJyZW5jeSBBbW91bnQnO1xyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFJld2FyZEZvcm1cIik7XHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZXdhcmRBbW91bnRJbnB1dFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjBcIilcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIxMDAwMFwiKVxyXG4gICAgICAgIHJld2FyZEFtb3VudElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiMFwiKTtcclxuICAgICAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbmN5QW1vdW50SW5wdXRcIilcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQW1vdW50SW5wdXRMYWJlbCk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEFtb3VudElucHV0KTtcclxuXHJcbiAgICAgICAgLy8gUmV3YXJkIEFtb3VudCAtIENvbnN0cmFpbnQgdG8gZml0IGF2YWlsYWJsZSBjdXJyZW5jeSBhbGxvY2F0aW9uXHJcbiAgICAgICAgcmV3YXJkQW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA+IDEwMDAwKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiVGhpcyB2YWx1ZSBjYW5ub3QgZXhjZWVkIHRoZSBtYXhpbXVtIG9mOiAxMDAwMFwiKVxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMTAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyA0LiBSZW1vdmUgY3VycmVudCBjYXJkIGNvbnRhaW5lclxyXG4gICAgbGV0IHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyA0YSkgQ2xvc2UgQnV0dG9uXHJcbiAgICAgICAgbGV0IHJlbW92ZUN1cnJlbnRDYXJkQ29udGFpbmVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlQ3VycmVudENhcmRDb250YWluZXJCdXR0b25cIilcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi50ZXh0Q29udGVudCA9ICdcXHUwMEQ3JzsgLy8gU2V0IHRoZSBtdWx0aXBsaWNhdGlvbiBzaWduIGFzIHRleHQgY29udGVudFxyXG5cclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1ZXN0UGFyYWxsYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIilcclxuICAgICAgICAgICAgICAgIGxldCBnaG9zdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdob3N0Q2FyZFwiKTtcclxuICAgICAgICAgICAgICAgIGdob3N0Q2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHF1ZXN0UGFyYWxsYXgucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBzaG93RW1wdHlRdWVzdHNTdGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhcmQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICByZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChyZW1vdmVDdXJyZW50Q2FyZENvbnRhaW5lckJ1dHRvbilcclxuXHJcblxyXG4gICAgcmV0dXJuIGNhcmQ7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZFRlbXBsYXRlICh0eXBlKSB7XHJcbiBcclxuICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuXHJcbiAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICBsZXQgb2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGxldCBvYmplY3RpdmVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZUNvbnRlbnRDb250YWluZXJcIilcclxuXHJcbiAgICAgICAgLy8gUXVlc3QgT2JqZWN0aXZlIFRleHRcclxuICAgICAgICBsZXQgb2JqZWN0aXZlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGV4dC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGV4dFwiKTtcclxuXHJcbiAgICAgICAgLy8gUXVlc3QgT2JqZWN0aXZlIFRpbWUgQ29udGVudFxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBsZXQgZG90T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb3RPbmUuY2xhc3NMaXN0LmFkZChcImRvdFwiKTtcclxuICAgICAgICBkb3RPbmUuaWQgPSBcImRvdE9uZVwiO1xyXG5cclxuICAgICAgICBsZXQgZG90VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkb3RUd28uY2xhc3NMaXN0LmFkZChcImRvdFwiKTtcclxuICAgICAgICBkb3RUd28uaWQgPSBcImRvdFR3b1wiO1xyXG5cclxuICAgICAgICBsZXQgZGF0ZVRvQ29tcGxldGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZVRleHQuaWQgPSBcImRhdGVUb0NvbXBsZXRlVGV4dFwiO1xyXG5cclxuICAgICAgICBsZXQgdGltZVNwZW50T25RdWVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZVNwZW50T25RdWVzdC5pZCA9IFwidGltZVNwZW50T25RdWVzdFwiO1xyXG5cclxuICAgICAgICBsZXQgdGltZUZyYW1lT2ZRdWVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGltZUZyYW1lT2ZRdWVzdC5pZCA9IFwidGltZUZyYW1lT2ZRdWVzdFwiO1xyXG5cclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZVRvQ29tcGxldGVUZXh0KTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG90T25lKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZVNwZW50T25RdWVzdCk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdFR3byk7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVGcmFtZU9mUXVlc3QpO1xyXG5cclxuXHJcbiAgICAvLyAgQ2hlY2sgQm94XHJcbiAgICBsZXQgY29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGNvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgLy8gY29tcGxldGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJUcnVlXCIpXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChjb21wbGV0ZUNoZWNrYm94KTtcclxuICAgIG9iamVjdGl2ZS5hcHBlbmRDaGlsZChvYmplY3RpdmVDb250ZW50KTtcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dClcclxuICAgIG9iamVjdGl2ZUNvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lQ29udGFpbmVyKVxyXG4gICBcclxuXHJcbiAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgbGV0IHJld2FyZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuXHJcbiAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAgICAgICAgIFxyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG5cclxuICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKG9iamVjdGl2ZSk7XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICBpZiAodHlwZSA9PSBcInF1ZXN0XCIpIHtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBvYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcImNhcmRDb250ZW50XCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTsgICAgICAgXHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IFwiZ29hbFwiKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwiZ29hbENhcmRcIilcclxuICAgICAgICBvYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcImdvYWxPYmplY3RpdmVcIik7XHJcbiAgICAgICAgY29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImdvYWxDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJNYXJrIEdvYWwgQ29tcGxldGVcIjtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBvYmplY3RpdmVUaW1lLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVcIik7ICAgICAgIFxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcImdvYWxSZXdhcmRBbW91bnRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gbnVsbCB8fCB0eXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBUeXBlIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBjYXJkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheWNhcmRDb250ZW50IChxdWVzdCwgY2FyZEVsZW1lbnQsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm9iamVjdGl2ZVRleHRcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuaW5uZXJUZXh0ID0gcXVlc3Qub2JqZWN0aXZlO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3F1ZXN0Lm9iamVjdGl2ZX1gKVxyXG4gICAgXHJcbiAgICAgICAgbGV0IGNoZWNrYm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBxdWVzdC5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlc3QpO1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHF1ZXN0KTtcclxuICAgICAgICAgICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KVxyXG4gICAgICAgICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVuY3lDb250YWluZXJcIiwgY3VycmVuY3lDb250YWluZXIpXHJcbiAgICAgICAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBnaG9zdENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdob3N0Q2FyZFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBxdWVzdFBhcmFsbGF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgICAgICAgICAgZ2hvc3RDYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgcXVlc3RQYXJhbGxheC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIHNob3dFbXB0eVF1ZXN0c1N0YXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSBcclxuICAgICAgICBcclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCB0aW1lQ3JpdGVyaWFDb250ZW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVUaW1lRnJhbWVDb250YWluZXJcIik7XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgZGF0ZVRvQ29tcGxldGVUZXh0ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlVG9Db21wbGV0ZVRleHRcIik7XHJcbiAgICAgICAgbGV0IHRpbWVTcGVudE9uUXVlc3QgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVTcGVudE9uUXVlc3RcIik7XHJcbiAgICAgICAgbGV0IHRpbWVGcmFtZU9mUXVlc3QgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpbWVGcmFtZU9mUXVlc3RcIik7XHJcblxyXG4gICAgICAgIGxldCBkb3RUd28gPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdFR3b1wiKTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXN0LnRpbWVGcmFtZVN0YXJ0ID09IG51bGwgfHwgcXVlc3QudGltZUZyYW1lRW5kID09IG51bGwpIHtcclxuICAgICAgICAgICAgZG90VHdvLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aW1lRnJhbWVPZlF1ZXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xyXG5cclxuICAgICAgICAgICAgaWYgKHF1ZXN0LnRpbWVUeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICAgICBkYXRlVG9Db21wbGV0ZVRleHQudGV4dENvbnRlbnQgPSAoYCR7cXVlc3QuZGF0ZVRvQ29tcGxldGV9YCk7XHJcbiAgICAgICAgdGltZVNwZW50T25RdWVzdC50ZXh0Q29udGVudCA9IChgVGltZSBSZXF1aXJlbWVudDogJHtxdWVzdC50aW1lU3BlbnR9ICR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHF1ZXN0LnRpbWVUeXBlKX1gKTtcclxuICAgICAgICB0aW1lRnJhbWVPZlF1ZXN0LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LnRpbWVGcmFtZVN0YXJ0fSB0byAke3F1ZXN0LnRpbWVGcmFtZUVuZH1gKVxyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke3F1ZXN0fS1yZXdhcmRgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKHF1ZXN0KSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LnJld2FyZC5hbW91bnR9ICR7cXVlc3QucmV3YXJkLnR5cGV9YCk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlHb2FsQ2FyZENvbnRlbnQgKGdvYWwsIGNhcmRFbGVtZW50LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIC8vR29hbCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IGdvYWxPYmplY3RpdmUgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDYXJkVGV4dFwiKTtcclxuICAgIGdvYWxPYmplY3RpdmUuaW5uZXJUZXh0ID0gZ29hbC5vYmplY3RpdmU7XHJcbiAgICBnb2FsT2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2dvYWwub2JqZWN0aXZlfWApXHJcblxyXG4gICAgbGV0IGNoZWNrYm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsQ29tcGxldGVDaGVja2JveFwiKTtcclxuICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBnb2FsKTtcclxuICAgICAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNoZWNrYm94IGVsZW1lbnQgbm90IGZvdW5kIGluIHRoZSBjYXJkXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgbGV0IGRhdGVUb0NvbXBsZXRlVGV4dCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZVRvQ29tcGxldGVUZXh0XCIpO1xyXG4gICAgZGF0ZVRvQ29tcGxldGVUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIGBnb2FsQ2FyZC0ke2dvYWwuZGF0ZVRvQ29tcGxldGV9YClcclxuICAgIGRhdGVUb0NvbXBsZXRlVGV4dC50ZXh0Q29udGVudCA9IChgJHtnb2FsLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICBsZXQgcmV3YXJkQm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXdhcmRCb3hcIik7XHJcbiAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGdvYWxDYXJkLSR7Z29hbH0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoZ29hbCkpXHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShnb2FsKSk7ICAgICAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbFJld2FyZEFtb3VudFwiKTtcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtnb2FsLnJld2FyZC5hbW91bnR9ICR7Z29hbC5yZXdhcmQudHlwZX1gKTtcclxuXHJcbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdWVzdExpc3QgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlF1ZXN0IExpc3QgaXMgRW1wdHlcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGxldCBxdWVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UGFyYWxsYXhcIik7XHJcbiAgICAgICAgcXVlc3RMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gY3JlYXRlQ2FyZFRlbXBsYXRlKFwicXVlc3RcIik7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0LSR7aX1gKTtcclxuICAgICAgICAgICAgZGlzcGxheWNhcmRDb250ZW50KGN1cnJlbnRRdWVzdExpc3RbaV0sIGNhcmQsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgcXVlc3RMaXN0LmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcclxuICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaChxdWVzdCk7XHJcbiAgICByZXR1cm4gY3VycmVudFF1ZXN0TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0KSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdFtpbmRleF0ucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckRlZmF1bHRJbmRleChtYWluUGFnZSkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSB0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lciBkaXZcclxuICAgIGNvbnN0IHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQW5kR29hbEJ1dHRvbkNvbnRhaW5lclwiKTtcclxuICBcclxuICAgIGNvbnN0IGFkZFF1ZXN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGFkZFF1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRRdWVzdEJ1dHRvblwiKTtcclxuICAgIGFkZFF1ZXN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgUXVlc3QgK1wiO1xyXG4gIFxyXG4gICAgY29uc3QgYWRkR29hbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBhZGRHb2FsQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGRHb2FsQnV0dG9uXCIpO1xyXG4gICAgYWRkR29hbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIEdvYWwgK1wiO1xyXG4gIFxyXG4gICAgdGFza0FuZEdvYWxCdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUXVlc3RCdXR0b24pOyBcclxuICAgIHRhc2tBbmRHb2FsQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEdvYWxCdXR0b24pO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHRoZSBnYW1lQ29udGVudEhlYWRlciBkaXZcclxuICAgIGNvbnN0IGdhbWVDb250ZW50SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdhbWVDb250ZW50SGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lQ29udGVudEhlYWRlclwiKTtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0SGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0SGVhZGVyRGl2LmlkID0gXCJxdWVzdEhlYWRlclwiO1xyXG4gICAgcXVlc3RIZWFkZXJEaXYudGV4dENvbnRlbnQgPSBcIk15IFF1ZXN0c1wiO1xyXG4gIFxyXG4gICAgY29uc3QgcXVlc3RUaW1lT3B0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBxdWVzdFRpbWVPcHRpb25zRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFRpbWVPcHRpb25zXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgdG9kYXlRdWVzdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdG9kYXlRdWVzdHNEaXYuaWQgPSBcInRvZGF5UXVlc3RzXCI7XHJcbiAgICB0b2RheVF1ZXN0c0Rpdi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICBcclxuICAgIGNvbnN0IHdlZWtseVF1ZXN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICB3ZWVrbHlRdWVzdHNEaXYuaWQgPSBcIndlZWtseVF1ZXN0c1wiO1xyXG4gICAgd2Vla2x5UXVlc3RzRGl2LnRleHRDb250ZW50ID0gXCJXZWVrbHlcIjtcclxuICBcclxuICAgIHF1ZXN0VGltZU9wdGlvbnNEaXYuYXBwZW5kQ2hpbGQodG9kYXlRdWVzdHNEaXYpO1xyXG4gICAgcXVlc3RUaW1lT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrbHlRdWVzdHNEaXYpO1xyXG4gIFxyXG4gICAgcXVlc3RIZWFkZXJEaXYuYXBwZW5kQ2hpbGQocXVlc3RUaW1lT3B0aW9uc0Rpdik7XHJcbiAgXHJcbiAgICBjb25zdCBnb2FsSGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdvYWxIZWFkZXJEaXYuaWQgPSBcImdvYWxIZWFkZXJcIjtcclxuICAgIGdvYWxIZWFkZXJEaXYudGV4dENvbnRlbnQgPSBcIk15IEdvYWxzXCI7XHJcbiAgXHJcbiAgICBjb25zdCBnb2FsQ29tcGxldGVPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdvYWxDb21wbGV0ZU9wdGlvbnNEaXYuY2xhc3NMaXN0LmFkZChcImdvYWxDb21wbGV0ZU9wdGlvbnNcIik7XHJcbiAgXHJcbiAgICBjb25zdCBpblByb2dyZXNzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGluUHJvZ3Jlc3NEaXYuaWQgPSBcImluUHJvZ3Jlc3NcIjtcclxuICAgIGluUHJvZ3Jlc3NEaXYudGV4dENvbnRlbnQgPSBcIkluIFByb2dyZXNzXCI7XHJcbiAgXHJcbiAgICBjb25zdCBjb21wbGV0ZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29tcGxldGVkRGl2LmlkID0gXCJjb21wbGV0ZWRcIjtcclxuICAgIGNvbXBsZXRlZERpdi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVkXCI7XHJcbiAgXHJcbiAgICBnb2FsQ29tcGxldGVPcHRpb25zRGl2LmFwcGVuZENoaWxkKGluUHJvZ3Jlc3NEaXYpO1xyXG4gICAgZ29hbENvbXBsZXRlT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xyXG4gIFxyXG4gICAgZ29hbEhlYWRlckRpdi5hcHBlbmRDaGlsZChnb2FsQ29tcGxldGVPcHRpb25zRGl2KTtcclxuICBcclxuICAgIGdhbWVDb250ZW50SGVhZGVyRGl2LmFwcGVuZENoaWxkKHF1ZXN0SGVhZGVyRGl2KTtcclxuICAgIGdhbWVDb250ZW50SGVhZGVyRGl2LmFwcGVuZENoaWxkKGdvYWxIZWFkZXJEaXYpO1xyXG4gIFxyXG4gICAgLy8gQ3JlYXRlIHRoZSBnYW1lQ29udGVudCBkaXZcclxuICAgIGNvbnN0IGdhbWVDb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGdhbWVDb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoXCJnYW1lQ29udGVudFwiKTtcclxuICBcclxuICAgIGNvbnN0IHF1ZXN0Q29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0Q29udGFpbmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbnRhaW5lclwiKTtcclxuICBcclxuICAgIGNvbnN0IGdvYWxDb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZ29hbENvbnRhaW5lckRpdi5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbnRhaW5lclwiKTtcclxuICBcclxuICAgIC8vIEFwcGVuZCB0aGUgY2hpbGQgZGl2cyB0byB0aGUgZ2FtZUNvbnRlbnQgZGl2XHJcbiAgICBnYW1lQ29udGVudERpdi5hcHBlbmRDaGlsZChxdWVzdENvbnRhaW5lckRpdik7XHJcbiAgICBnYW1lQ29udGVudERpdi5hcHBlbmRDaGlsZChnb2FsQ29udGFpbmVyRGl2KTtcclxuICBcclxuICAgIC8vIFJlcGxhY2UgdGhlIG1haW5QYWdlIGNvbnRlbnQgd2l0aCB0aGUgZ2FtZUNvbnRlbnQgZGl2XHJcbiAgICBtYWluUGFnZS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQodGFza0FuZEdvYWxCdXR0b25Db250YWluZXIpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRlbnRIZWFkZXJEaXYpO1xyXG4gICAgbWFpblBhZ2UuYXBwZW5kQ2hpbGQoZ2FtZUNvbnRlbnREaXYpO1xyXG4gIH1cclxuICBcclxuICAvLyBDYWxsIHRoZSByZW5kZXJEZWZhdWx0SW5kZXggZnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBkZWZhdWx0IGluZGV4IEhUTUwgZWxlbWVudHNcclxuLy8gICBjb25zdCBtYWluUGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXBwQ29udGVudFwiKTtcclxuLy8gICByZW5kZXJEZWZhdWx0SW5kZXgobWFpblBhZ2VDb250YWluZXIpOyIsIi8vIEFzc3VtaW5nIHRoZSBjb2RlIGZvciB0aGUgV2VhcG9uIGNsYXNzLCBIZXJvVHlwZVdlYXBvbkxpc3QgY2xhc3MsIGFuZCB3ZWFwb25MaXN0cyBmb3IgZWFjaCBjbGFzcyBpcyBhbHJlYWR5IGRlZmluZWQuXHJcbmltcG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfSBmcm9tIFwiLi93ZWFwb25MaXN0LmpzXCJcclxuaW1wb3J0IHsgaXRlbVBvc3NpYmxlRWxlbWVudHMsIGl0ZW1Qb3NzaWJsZVJhcml0eSwgaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVBvc3NpYmxlU3VmZml4IH0gZnJvbSBcIi4vY2xhc3Nlcy9pdGVtU3RhdHMuanNcIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMnO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pXHJcblxyXG5cclxuXHJcbmNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBlbGVtZW50LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHJvZ3VlV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHByaWVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gd2FycmlvcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNvcmNlcmVyV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJ0ZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwbGF5ZXIgY2xhc3MuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWFwb25MaXN0ID0gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcyk7XHJcbiAgXHJcbiAgICBpZiAod2VhcG9uTGlzdCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gd2VhcG9uTGlzdFtyYW5kb21JbmRleF0uX3R5cGU7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW52YWxpZCBwbGF5ZXIgY2xhc3NcclxuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcmV0cmlldmUgd2VhcG9uIGxpc3QuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJhcml0eSAoaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b3RhbCBjaGFuY2UgdG8gMFxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGNoYW5jZSB2YWx1ZXMgb2YgYWxsIHJhcml0eSBvYmplY3QgY2hhbmNlc1xyXG4gICAgLy8gVGhpcyBzaG91bGQgYWRkIHVwIHRvIDEwMFxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSByYW5kb20gd2hvbGUgaW50ZWdlciBiZXR3ZWVuIDAgLSAxMDBcclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZSk7XHJcblxyXG4gICAgLy8gU2V0IHJhcml0eSB2YWx1ZSB0byBudWxsXHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJhcml0eSBiYXNlZCBvbiB5b3VyIHJhbmRvbUNoYW5jZSByb2xsLiBcclxuICAgIC8vIEZvciBleGFtcGxlIGlmIFJhbmRvbSBDaGFuY2Ugd2FzIDk0OlxyXG4gICAgLy8gOTQgLSA0MCAoTm9ybWFsIFJhcml0eSkgPSA1NCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA1NCAtIDMwIChVbmNvbW1vbiBSYXJpdHkpID0gMjQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gMjQgLSAxNSAoUmFyZSBSYXJpdHkpID0gOSA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA5IC0gMTAgKEVwaWMgUmFyaXR5KSA9IC0xIDwtLSBUaGVyZWZvcmUgcmFyaXR5IG9mIGl0ZW0gaXMgRXBpYyBhcyAoOSAtIDEwKSA8ICgwKVxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpcyAoLTAuMDEgdG8gYWNvdW50IGZvciByb3VuZGluZyBlcnJvcnMpXHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAtMC4wMSkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlPYmplY3QucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgaXRlbVJhcml0eSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBkZWNpbWFsUGxhY2VzID0gMjsgLy8gTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzXHJcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICByZXR1cm4gTnVtYmVyKHJhbmRvbU51bWJlci50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpKTtcclxuICB9XHJcblxyXG4gICAgLy8gVXNpbmcgdGhlIHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHRvIGFjY2VzcyB0aGUgcHJvcGVydHkgYXQgcnVudGltZVxyXG4gICAgY29uc3QgcmFyaXR5U3RhdHMgPSBpdGVtUG9zc2libGVTdGF0c1tpdGVtUmFyaXR5XTtcclxuICAgIGNvbnN0IGl0ZW1TdGF0cyA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RhdCBpbiByYXJpdHlTdGF0cykge1xyXG4gICAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHJhcml0eVN0YXRzW3N0YXRdO1xyXG4gICAgaXRlbVN0YXRzW3N0YXRdID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpO1xyXG4gICAgY29uc29sZS5sb2coc3RhdCwgaXRlbVN0YXRzW3N0YXRdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXRzO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1SYXJpdHkpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XS5sZW5ndGgpXHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldW3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cykge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlRWxlbWVudHMubGVuZ3RoKTtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVFbGVtZW50c1tyYW5kb21JbmRleF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlU3VmZml4W2VsZW1lbnRdO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdlYXBvbiAocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBsZXQgd2VhcG9uVHlwZSA9IGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKTtcclxuICAgIGxldCB3ZWFwb25FbGVtZW50ID0gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpO1xyXG4gICAgbGV0IHdlYXBvblJhcml0eSA9IGdldEl0ZW1SYXJpdHkoaXRlbVBvc3NpYmxlUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdGF0cyA9IGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25QcmVmaXggPSBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdWZmaXggPSBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgd2VhcG9uRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBXZWFwb24oXHJcbiAgICAgICAgKHdlYXBvblByZWZpeCArIFwiIFwiICsgd2VhcG9uVHlwZSArIFwiIFwiICsgd2VhcG9uU3VmZml4KSwgXHJcbiAgICAgICAgd2VhcG9uVHlwZSxcclxuICAgICAgICBwbGF5ZXJDbGFzcyxcclxuICAgICAgICB3ZWFwb25SYXJpdHksXHJcbiAgICAgICAgd2VhcG9uU3RhdHMsXHJcbiAgICAgICAgd2VhcG9uRWxlbWVudCxcclxuICAgICAgICBudWxsLFxyXG4gICAgKVxyXG5cclxuIFxyXG59XHJcbi8vIFNpbXVsYXRpbmcgYW4gaXRlbSBiZWluZyBwdWxsZWQgZnJvbSBhIGNoZXN0IGJhc2VkIG9uIHBsYXllcidzIGNsYXNzIGFuZCByYXJpdHkgcHJvYmFiaWxpdGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcHVsbEl0ZW1Gcm9tQ2hlc3QocGxheWVyQ2xhc3MsIHBpdHkpIHtcclxuICAgXHJcblxyXG4gICAgLy8gQ29uc2lkZXIgY29uc3RhbnQgcmFyaXR5IG9iamVjdCBmb3Igc2NhbGluZyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgcmFyaXR5UHJvYmFiaWxpdGllcyA9IFtcclxuICAgICAgICB7IHJhcml0eTogXCJOb3JtYWxcIiwgY2hhbmNlOiA0MCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJSYXJlXCIsIGNoYW5jZTogMTUgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJFcGljXCIsIGNoYW5jZTogMTAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJMZWdlbmRhcnlcIiwgY2hhbmNlOiA1IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2U7XHJcbiAgICBjb25zb2xlLmxvZyhyYW5kb21DaGFuY2UpO1xyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eURhdGEucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICBjb25zdCByYW5kb21XZWFwb24gPSB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAvLyBBc3NpZ24gcmFuZG9tIHByb3BlcnRpZXMgdG8gdGhlIHdlYXBvblxyXG4gICAgcmFuZG9tV2VhcG9uLl9uYW1lID0gXCJEaXZpbmUgU3RhZmZcIjsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG4gICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSByYXJpdHk7IC8vIEFzc2lnbmluZyB0aGUgZGV0ZXJtaW5lZCByYXJpdHlcclxuXHJcbiAgICAvLyBJZiB0aGUgcHVsbGVkIGl0ZW0gaXMgbGVnZW5kYXJ5LCByZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICBpZiAocmFyaXR5ID09PSBcIkxlZ2VuZGFyeVwiKSB7XHJcbiAgICAgICAgcGl0eSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBpdHkrKzsgLy8gSW5jcmVtZW50IHRoZSBwaXR5IGNvdW50ZXIgaWYgYSBsZWdlbmRhcnkgaXRlbSB3YXMgbm90IHB1bGxlZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEd1YXJhbnRlZSBhIGxlZ2VuZGFyeSBpdGVtIGlmIHRoZSBwaXR5IGNvdW50ZXIgcmVhY2hlcyAxMDBcclxuICAgIGlmIChwaXR5ID49IDEwMCkge1xyXG4gICAgICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gXCJMZWdlbmRhcnlcIjtcclxuICAgICAgICBwaXR5ID0gMDsgLy8gUmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVdlYXBvbi5fc3RhdHMgPSB7XHJcbiAgICAgICAgYXR0YWNrOiAxNTAsXHJcbiAgICAgICAgaW50ZWxsZWN0OiA1MCxcclxuICAgICAgICBzdGFtaW5hOiA4MCxcclxuICAgIH07IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuXHJcbiAgICByZXR1cm4geyBpdGVtOiByYW5kb21XZWFwb24sIHBpdHkgfTtcclxufVxyXG4iLCJjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3Qgcm9ndWVXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkRhZ2dlclwiLCBcIkRhZ2dlclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkR1YWwgQmxhZGVzXCIsIFwiRHVhbCBCbGFkZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJCb3dcIiwgXCJCb3dcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDbGF3IFdlYXBvbnNcIiwgXCJDbGF3IFdlYXBvbnNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcm9zc2Jvd1wiLCBcIkNyb3NzYm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUmFwaWVyXCIsIFwiUmFwaWVyXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQmxvd2d1blwiLCBcIkJsb3dndW5cIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDaGFrcmFtc1wiLCBcIkNoYWtyYW1zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR2Fycm90ZVwiLCBcIkdhcnJvdGVcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3Qgd2FycmlvcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiR3JlYXRzd29yZFwiLCBcIkdyZWF0c3dvcmRcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlN3b3JkIGFuZCBTaGllbGRcIiwgXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXJoYW1tZXJcIiwgXCJXYXJoYW1tZXJcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlBvbGVhcm1cIiwgXCJQb2xlYXJtXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBeGVcIiwgXCJBeGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2VcIiwgXCJNYWNlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0YXhlXCIsIFwiR3JlYXRheGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkZsYWlsXCIsIFwiRmxhaWxcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIldhciBHYXVudGxldHNcIiwgXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgcHJpZXN0V2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFdhbmRcIiwgXCJIb2x5IFdhbmRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVG9tZVwiLCBcIlRvbWVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBIYW1tZXJcIiwgXCJIb2x5IEhhbW1lclwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBbmtoXCIsIFwiQW5raFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IEJvd1wiLCBcIkhvbHkgQm93XCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNhY3JlZCBDaGFsaWNlXCIsIFwiU2FjcmVkIENoYWxpY2VcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUHJheWVyIEJlYWRzXCIsIFwiUHJheWVyIEJlYWRzXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgU2N5dGhlXCIsIFwiSG9seSBTY3l0aGVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHNvcmNlcmVyV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU3BlbGxib29rXCIsIFwiU3BlbGxib29rXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRWxlbWVudGFsIFdhbmRcIiwgXCJFbGVtZW50YWwgV2FuZFwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNyeXN0YWwgT3JiXCIsIFwiQ3J5c3RhbCBPcmJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lYmxhZGVcIiwgXCJSdW5lYmxhZGVcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgR2F1bnRsZXRzXCIsIFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVuY2hhbnRlZCBCb3dcIiwgXCJFbmNoYW50ZWQgQm93XCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU2NlcHRlclwiLCBcIlNjZXB0ZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgRGFnZ2VyXCIsIFwiQXJjYW5lIERhZ2dlclwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyYXZpdG9uIFN0YWZmXCIsIFwiR3Jhdml0b24gU3RhZmZcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgdGVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJBYnlzcyBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhaWEgU2hvcnQgU3dvcmRcIiwgXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSW5mZXJubyBTaG9ydCBTd29yZFwiLCBcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIkx1bmFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWlzdCBTaG9ydCBTd29yZFwiLCBcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lIFNob3J0IFN3b3JkXCIsIFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiU29sYXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJWb2x0IFNob3J0IFN3b3JkXCIsIFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5leHBvcnQgeyByb2d1ZVdlYXBvbkxpc3QsIHdhcnJpb3JXZWFwb25MaXN0LCBwcmllc3RXZWFwb25MaXN0LCBzb3JjZXJlcldlYXBvbkxpc3QsIHRlc3RXZWFwb25MaXN0IH07IiwiY2xhc3MgWm9kaWFjU2lnbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xyXG4gICAgICAvLyBTcGxpdCB0aGUgZGF0ZSByYW5nZSBzdHJpbmcgaW50byBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgICAgIGNvbnN0IFtzdGFydFN0ciwgZW5kU3RyXSA9IGRhdGVSYW5nZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBcclxuICAgICAgLy8gUGFyc2UgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdXNpbmcgdGhlIERhdGUgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRTdHIpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcclxuICAgIFxyXG4gICAgICAvLyBBZGp1c3QgdGhlIHllYXIgb2YgdGhlIGVuZCBkYXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIGVuZERhdGUuc2V0RnVsbFllYXIoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBhbiBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3RhcnREYXRlLCBlbmREYXRlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcmllc1wiLFxyXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU3RlZWxcIixcclxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJUYXVydXNcIixcclxuICAgICAgXCJBcHJpbCAyMCAtIE1heSAyMFwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJIYWRlcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJHZW1pbmlcIixcclxuICAgICAgXCJNYXkgMjEgLSBKdW5lIDIwXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiWmVwaHlyXCIsXHJcbiAgICAgIFwiSXphbmFtaS9JemFuYWdpLCB0aGUgR29kcy9Hb2RkZXNzZXMgb2YgQ3JlYXRpb24gYW5kIERlYXRoIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhbmNlclwiLFxyXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJMdW5hclwiLFxyXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMZW9cIixcclxuICAgICAgXCJKdWx5IDIzIC0gQXVndXN0IDIyXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlNvbGFyXCIsXHJcbiAgICAgIFwiUmEsIHRoZSBHb2Qgb2YgdGhlIFN1biAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJWaXJnb1wiLFxyXG4gICAgICBcIkF1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMlwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiVGVycmFcIixcclxuICAgICAgXCJPc2lyaXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGlicmFcIixcclxuICAgICAgXCJTZXB0ZW1iZXIgMjMgLSBPY3RvYmVyIDIyXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiQWV0aGVyXCIsXHJcbiAgICAgIFwiSG9ydXMsIHRoZSBHb2Qgb2YgdGhlIFNreSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTY29ycGlvXCIsXHJcbiAgICAgIFwiT2N0b2JlciAyMyAtIE5vdmVtYmVyIDIxXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJDb3Jyb2RlXCIsXHJcbiAgICAgIFwiUG9zZWlkb24sIHRoZSBHb2Qgb2YgdGhlIFNlYSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTYWdpdHRhcml1c1wiLFxyXG4gICAgICBcIk5vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjFcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiSW5mZXJub1wiLFxyXG4gICAgICBcIkFtYXRlcmFzdSwgdGhlIEdvZGRlc3Mgb2YgdGhlIFN1biAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYXByaWNvcm5cIixcclxuICAgICAgXCJEZWNlbWJlciAyMiAtIEphbnVhcnkgMTlcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkdhaWFcIixcclxuICAgICAgXCJJc2lzLCB0aGUgR29kZGVzcyBvZiBNYWdpYyBhbmQgTGlmZSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcXVhcml1c1wiLFxyXG4gICAgICBcIkphbnVhcnkgMjAgLSBGZWJydWFyeSAxOFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlZvbHRcIixcclxuICAgICAgXCJaZXVzLCB0aGUgR29kIG9mIFRodW5kZXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiUGlzY2VzXCIsXHJcbiAgICAgIFwiRmVicnVhcnkgMTkgLSBNYXJjaCAyMFwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTWlzdFwiLFxyXG4gICAgICBcIlN1c2Fub28sIHRoZSBHb2Qgb2YgdGhlIFNlYSBhbmQgU3Rvcm1zIChKYXBhbmVzZSlcIlxyXG4gICAgKVxyXG4gIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB6b2RpYWNTaWduczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBRdWVzdCwgQ3VycmVuY3ksIFdlYXBvbiwgQXJtb3VyLCBQbGF5ZXJDaGFyYWN0ZXIsIFBsYXllclN0YXRzLCBHb2FsIH0gZnJvbSBcIi4vY2xhc3Nlcy9jbGFzc2VzLmpzXCI7XHJcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcywgYWRkUXVlc3QsIGdlbmVyYXRlVGFza0NvbnRhaW5lciwgY3JlYXRlUXVlc3RDYXJkVGVtcGxhdGUsIGRpc3BsYXlRdWVzdENhcmRDb250ZW50LCByZW5kZXJRdWVzdExpc3QsIGNyZWF0ZUNhcmRUZW1wbGF0ZSwgZGlzcGxheUdvYWxDYXJkQ29udGVudCwgY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUsIGNyZWF0ZUdob3N0Q2FyZH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnMuanNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbEZ1bmN0aW9ucy5qc1wiO1xyXG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XHJcbmltcG9ydCBnZXRPYmplY3RpdmUgZnJvbSBcIi4vZ2V0T2JqZWN0aXZlLmpzXCI7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XHJcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xyXG5pbXBvcnQgeyBwdWxsSXRlbUZyb21DaGVzdCwgZ2V0SXRlbVJhcml0eSwgZ2V0SXRlbVN0YXRzLCBnZXRJdGVtVHlwZSwgZ2V0SXRlbUVsZW1lbnQsIGdldEl0ZW1QcmVmaXgsIGdldEl0ZW1TdWZmaXgsIGdlbmVyYXRlUmFuZG9tV2VhcG9ufSBmcm9tICcuL3Nob3BGdW5jdGlvbic7XHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gJy4vY2xhc3Nlcy9pdGVtU3RhdHMnO1xyXG5pbXBvcnQgeyBzcGluLCBvcGVuU2xvdE1hY2hpbmVNb2RhbCwgY2xvc2VTbG90TWFjaGluZU1vZGFsLCByZXNldFNsb3RNYWNoaW5lSW1hZ2VzfSBmcm9tICcuL2dhY2hhU3BpbkZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNhbGNIZXJvU2NvcmUgfSBmcm9tICcuL3BsYXllckNoYXJhY3RlckZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGFwcGVuZEl0ZW1JbWFnZSwgY3JlYXRlSW52ZW50b3J5TW9kYWwsIGNyZWF0ZUludmVudG9yeVBhZ2UsIGdlbmVyYXRlSW52ZW50b3J5SXRlbUltYWdlLCBnZW5lcmF0ZUludmVudG9yeUl0ZW1zLCB1cGRhdGVJbnZlbnRvcnlQYWdlLCBpbnZlbnRvcnlFdmVudEhhbmRsZXJ9ICBmcm9tICcuL2ludmVudG9yeUZ1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGdldEl0ZW1JbWFnZSB9IGZyb20gJy4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZSc7XHJcbmltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIHBsYXllckludmVudG9yeSwgY3VycmVuY3lDb250YWluZXIsIHBsYXllckVxdWlwcGVkSXRlbXMsIGN1cnJlbnRHb2FsTGlzdCB9IGZyb20gJy4vZGF0YS5qcyc7XHJcbmltcG9ydCB7IHJlbW92ZUVtcHR5VGFza0dvYWxQcm9tcHQsIGNyZWF0ZVRhc2tDb250YWluZXIsIHF1ZXN0Q29udHJvbGxlciwgZ29hbENvbnRyb2xsZXIsIHNob3dFbXB0eVF1ZXN0QW5kR29hbHMsIHNob3dFbXB0eVF1ZXN0c1N0YXRlLCBzaG93RW1wdHlHb2Fsc1N0YXRlLCBlbXB0eVN0YXRlRXZlbnRIYW5kbGVyLCByZW1vdmVFbXB0eVF1ZXN0U3RhdGUsIGNyZWF0ZVF1ZXN0UGFyYWxsYXggfSBmcm9tICcuL2luZGV4Vmlld0Z1bmN0aW9ucyc7XHJcbmltcG9ydCB7IGNyZWF0ZUdldERhdGFGb3JtIH0gZnJvbSAnLi9nZW5lcmF0ZUZvcm0nO1xyXG5pbXBvcnQgcmVuZGVyR29hbENyZWF0aW9uUGFnZSBmcm9tICcuL2dvYWxDcmVhdGlvblBhZ2UnO1xyXG5pbXBvcnQgcmVuZGVyRGVmYXVsdEluZGV4IGZyb20gJy4vcmVuZGVyRGVmYXVsdEluZGV4SHRtbCc7XHJcbmltcG9ydCBpbml0aWFsaXplRGVmYXVsdEluZGV4IGZyb20gJy4vaW5pdGlhbGl6ZUluZGV4RnVuY3Rpb25zJztcclxuXHJcbi8vIGluaXRpYWxpemVEZWZhdWx0SW5kZXgoKVxyXG5yZW5kZXJHb2FsQ3JlYXRpb25QYWdlKCk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhjdXJyZW5jeUNvbnRhaW5lcilcclxuLy8gLy8gR2xvYmFsbHkgU2NvcGVkIFZhcmlhYmxlc1xyXG5cclxuLy8gbGV0IHBsYXllckJpcnRoZGF5ID0gbmV3IERhdGUgKFwiMDItMDMtMTk5NlwiKTtcclxuLy8gbGV0IGhlcm9TZWxlY3Rpb24gPSAoXCJTb3JjZXJlclwiKTtcclxuLy8gbGV0IHBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIoXCJpbWFnZXMvemV1c1Nwcml0ZS5wbmdcIiwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgcGxheWVyQmlydGhkYXkpO1xyXG4vLyBsZXQgcGl4ZWxJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdEltYWdlXCIpO1xyXG4vLyBwaXhlbEltYWdlQ29udGFpbmVyLnNyYyA9IChwbGF5ZXIuc3ByaXRlSW1hZ2UpO1xyXG4vLyBsZXQgZ2V0SGVyb1Njb3JlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoZXJvU2NvcmVDb250YWluZXJcIik7XHJcbi8vIGxldCBoZXJvU2NvcmUgPSBjYWxjSGVyb1Njb3JlKHBsYXllcik7XHJcbi8vIGdldEhlcm9TY29yZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IChgSGVybyBTY29yZTogJHtoZXJvU2NvcmV9YClcclxuXHJcbi8vIGxldCB0ZXN0UXVlc3QgPSBuZXcgUXVlc3QgKFwiRmluaXNoIEZuXCIsIFwiNDozMHBtIC0gODowMHBtXCIsIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMiksIG51bGwsIGZhbHNlLCBudWxsKTtcclxuLy8gbGV0IHRlc3RRdWVzdDIgPSBuZXcgUXVlc3QgKFwiRmluaXNoIEZuXCIsIFwiNDozMHBtIC0gODowMHBtXCIsIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMiksIG51bGwsIGZhbHNlLCBudWxsKTtcclxuXHJcbi8vIC8vIGN1cnJlbnRRdWVzdExpc3QucHVzaCh0ZXN0UXVlc3QpO1xyXG4vLyBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuLy8gY29uc29sZS5sb2coY3VycmVudEdvYWxMaXN0KTtcclxuXHJcbi8vIGxldCB0ZXN0R29hbCA9IG5ldyBHb2FsIChcIkJlY29tZSBGbHVlbnQgaW4gU3BhbmlzaFwiLCBuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAxMikpXHJcblxyXG4vLyAvLyBjbGFzcyBHb2FsIHtcclxuLy8gLy8gICAgIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgcmV3YXJkLCBmcmVxdWVuY3ksIGZyZXF1ZW5jeVZhbHVlLCB0b3RhbFRpbWVSZXF1aXJlZCwgdG90YWxUaW1lU3BlbnQpIFxyXG5cclxuLy8gbGV0IGd5bUdvYWwgPSBuZXcgR29hbCAoKFwiR2V0IFNpeCBQYWNrIEFic1wiKSwgbmV3IEN1cnJlbmN5IChcIkdHVG9rZW5zXCIsIDEyKSk7XHJcbi8vIGxldCBneW1RdWVzdCA9IGd5bUdvYWwuZ2VuZXJhdGVRdWVzdCg0LCAwKTtcclxuLy8gZ3ltR29hbC5xdWVzdHMucHVzaChneW1RdWVzdCk7XHJcbi8vIGNvbnNvbGUubG9nKGd5bUdvYWwucXVlc3RzKTtcclxuXHJcbi8vIGNvbnNvbGUubG9nKGd5bUdvYWwucXVlc3RzWzBdLnRpbWVzUGVyV2Vla1JlcXVpcmVkKVxyXG5cclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0Mik7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh0ZXN0R29hbC5xdWVzdHMpO1xyXG5cclxuLy8gLy8gdGVzdEdvYWwucXVlc3RzLnB1c2godGVzdFF1ZXN0KTtcclxuLy8gLy8gY29uc29sZS5sb2codGVzdEdvYWwucXVlc3RzKTtcclxuXHJcbi8vIC8vIGxldCB0ZXN0Q2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpXHJcbi8vIC8vIHRlc3RDbGljay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAvLyAgIHRlc3RRdWVzdC5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuLy8gLy8gICBjb25zb2xlLmxvZyh0ZXN0R29hbC5xdWVzdHMpO1xyXG4vLyAvLyB9KVxyXG5cclxuLy8gc2hvd0VtcHR5UXVlc3RzU3RhdGUoKTtcclxuLy8gLy8gc2hvd0VtcHR5R29hbHNTdGF0ZSgpO1xyXG5cclxuLy8gbGV0IGdjYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGdlbmVyYXRlR29hbENhcmQoZ29hbCkge1xyXG5cclxuLy8gICAgIGNvbnN0IGdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBnb2FsQ2FyZC5jbGFzc0xpc3QuYWRkKCdnb2FsQ2FyZCcpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgdG9wSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICB0b3BIYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgndG9wSGFsZkdvYWxDYXJkJyk7XHJcbi8vICAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZCh0b3BIYWxmR29hbENhcmQpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgYm90dG9tSGFsZkdvYWxDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBib3R0b21IYWxmR29hbENhcmQuY2xhc3NMaXN0LmFkZCgnYm90dG9tSGFsZkdvYWxDYXJkJyk7XHJcbi8vICAgICBnb2FsQ2FyZC5hcHBlbmRDaGlsZChib3R0b21IYWxmR29hbENhcmQpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZ29hbE9iamVjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ29hbE9iamVjdGl2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsT2JqZWN0aXZlQ29udGFpbmVyJyk7XHJcbi8vICAgICB0b3BIYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQoZ29hbE9iamVjdGl2ZUNvbnRhaW5lcik7XHJcbiAgXHJcbi8vICAgICBjb25zdCBnb2FsQ29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgIGdvYWxDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdnb2FsQ29tcGxldGVDb250YWluZXInKTtcclxuLy8gICAgIHRvcEhhbGZHb2FsQ2FyZC5hcHBlbmRDaGlsZChnb2FsQ29tcGxldGVDb250YWluZXIpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgZ29hbE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoJ2dvYWwtb2JqZWN0aXZlJyk7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlLnRleHRDb250ZW50ID0gZ29hbC5vYmplY3RpdmU7XHJcbi8vICAgICBnb2FsT2JqZWN0aXZlQ29udGFpbmVyLmFwcGVuZENoaWxkKGdvYWxPYmplY3RpdmUpO1xyXG4gIFxyXG4vLyAgICAgY29uc3QgcXVlc3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBxdWVzdExpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Q29udGFpbmVyJyk7XHJcbi8vICAgICBib3R0b21IYWxmR29hbENhcmQuYXBwZW5kQ2hpbGQocXVlc3RMaXN0Q29udGFpbmVyKTtcclxuICBcclxuLy8gICAgIGNvbnN0IHF1ZXN0TGlzdFBhcmFsbGF4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICBxdWVzdExpc3RQYXJhbGxheC5jbGFzc0xpc3QuYWRkKCdxdWVzdExpc3RQYXJhbGxheCcpO1xyXG4vLyAgICAgcXVlc3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0TGlzdFBhcmFsbGF4KTtcclxuICBcclxuLy8gICAgIGNvbnN0IHF1ZXN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbi8vICAgICBxdWVzdExpc3QuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0Jyk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvYWwucXVlc3RzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgIGNvbnN0IHF1ZXN0SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncXVlc3RMaXN0SXRlbUNvbnRhaW5lcicpO1xyXG4gIFxyXG4vLyAgICAgICBjb25zdCBxdWVzdEl0ZW1Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3F1ZXN0TGlzdEl0ZW0nKTtcclxuLy8gICAgICAgcXVlc3RJdGVtQ29udGVudC50ZXh0Q29udGVudCA9IGdvYWwucXVlc3RzW2ldLm9iamVjdGl2ZTtcclxuICBcclxuLy8gICAgICAgY29uc3QgcHJvZ3Jlc3NCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuLy8gICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvZ3Jlc3MtYmFyLWNvbnRhaW5lcicpO1xyXG4gIFxyXG4vLyAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICBwcm9ncmVzc0Jhci5jbGFzc0xpc3QuYWRkKCdwcm9ncmVzcy1iYXInKTtcclxuICBcclxuLy8gICAgICAgcHJvZ3Jlc3NCYXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCYXIpO1xyXG4vLyAgICAgICBxdWVzdEl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RJdGVtQ29udGVudCk7XHJcbi8vICAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9ncmVzc0JhckNvbnRhaW5lcik7XHJcbi8vICAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChxdWVzdEl0ZW1Db250YWluZXIpO1xyXG5cclxuICAgICAgXHJcbi8vICAgICAgIHF1ZXN0SXRlbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgICAgICAgIGdlbmVyYXRlTW9kYWwoZ29hbC5xdWVzdHNbaV0pO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBxdWVzdExpc3RQYXJhbGxheC5hcHBlbmRDaGlsZChxdWVzdExpc3QpO1xyXG4gIFxyXG4vLyAgICAgcmV0dXJuIGdvYWxDYXJkO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZnVuY3Rpb24gZ2VuZXJhdGVNb2RhbChnb2FsUXVlc3QpIHtcclxuXHJcbi8vICAgICBjb25zdCBnb2FsUXVlc3RNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgZ29hbFF1ZXN0TW9kYWwuY2xhc3NMaXN0LmFkZCgnZ29hbFF1ZXN0TW9kYWwnKTtcclxuICBcclxuLy8gICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dvYWxRdWVzdE1vZGFsQ29udGVudCcpO1xyXG4gIFxyXG4vLyAgICAgbGV0IGdvYWxRdWVzdE1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbi8vICAgICBnb2FsUXVlc3RNb2RhbFRpdGxlLmlubmVyVGV4dCA9IFwiQ29tcGxldGlvbiBSZXF1aXJlbWVudChzKTogXCJcclxuXHJcbi8vICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4vLyAgICAgbmFtZS5pbm5lclRleHQgPSBnb2FsUXVlc3Qub2JqZWN0aXZlO1xyXG5cclxuXHJcbi8vICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZ29hbFF1ZXN0TW9kYWxUaXRsZSk7XHJcbi8vICAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZSlcclxuLy8gICAgIGdvYWxRdWVzdE1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XHJcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdvYWxRdWVzdE1vZGFsKTtcclxuICBcclxuLy8gICAgIHJldHVybiBnb2FsUXVlc3RNb2RhbDtcclxuLy8gICB9XHJcbiAgICAgIFxyXG4gIFxyXG5cclxuLy8gICBsZXQgZ0NhcmQgPSBnZW5lcmF0ZUdvYWxDYXJkKHRlc3RHb2FsKTtcclxuLy8gICBsZXQgZ0NhcmQyID0gZ2VuZXJhdGVHb2FsQ2FyZChneW1Hb2FsKTtcclxuXHJcbi8vICAgZ2NjLmFwcGVuZENoaWxkKGdDYXJkKTtcclxuLy8gICBnY2MuYXBwZW5kQ2hpbGQoZ0NhcmQyKTtcclxuXHJcbi8vIC8vIGxldCBnb2FsQ2FyZCA9IGNyZWF0ZUNhcmRUZW1wbGF0ZShcImdvYWxcIik7XHJcbi8vIC8vIHguYXBwZW5kQ2hpbGQoZ29hbENhcmQpO1xyXG4vLyAvLyBkaXNwbGF5R29hbENhcmRDb250ZW50KHRlc3RHb2FsLCBnb2FsQ2FyZCwgY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuXHJcblxyXG4vLyB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50R29hbExpc3QpO1xyXG4vLyAvLyBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcclxuXHJcbi8vIC8vIHRlc3RHb2FsLmxpbmtRdWVzdFRvR29hbChjdXJyZW50UXVlc3RMaXN0WzBdKTtcclxuLy8gLy8gY29uc29sZS5sb2codGVzdEdvYWwudGltZVJlcXVpcmVkKVxyXG5cclxuXHJcbi8vIC8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcclxuLy8gbGV0IGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkUXVlc3RCdXR0b25cIilcclxuLy8gYWRkUXVlc3RCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4vLyAgICAgaWYgKCFyZW1vdmVFbXB0eVF1ZXN0U3RhdGUoKSkge1xyXG4vLyAgICAgICAgIHJlbW92ZUVtcHR5UXVlc3RTdGF0ZSgpO1xyXG4vLyAgICAgfVxyXG4gICAgXHJcbi8vICAgICBpZiAoIWNyZWF0ZVF1ZXN0UGFyYWxsYXgoKSkge1xyXG4vLyAgICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZW5kZXJRdWVzdExpc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgXHJcbi8vICAgICBsZXQgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RQYXJhbGxheFwiKTtcclxuLy8gICAgIHguYXBwZW5kQ2hpbGQoY3JlYXRlRW1wdHlDYXJkVGVtcGxhdGUoKSk7XHJcbi8vICAgICB4LmFwcGVuZENoaWxkKGNyZWF0ZUdob3N0Q2FyZCgpKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGN1cnJlbnRHb2FsTGlzdCk7XHJcbi8vIH0pXHJcblxyXG4vLyBsZXQgYWRkR29hbEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZEdvYWxCdXR0b25cIilcclxuLy8gYWRkR29hbEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIC8vIHJlbW92ZUVtcHR5VGFza0dvYWxQcm9tcHQoKTtcclxuLy8gICAgIC8vIGNyZWF0ZVRhc2tDb250YWluZXIoKTtcclxuLy8gICAgIC8vIGdvYWxDb250cm9sbGVyKCk7XHJcbiAgICBcclxuLy8gICAgIGN1cnJlbnRHb2FsTGlzdC5wdXNoKHRlc3RHb2FsKTtcclxuLy8gICAgIGNyZWF0ZUdldERhdGFGb3JtKFwiZ29hbFwiKTtcclxuLy8gfSlcclxuXHJcblxyXG4vLyAvLyBFdmVudCBMaXN0ZW5lciB0byBBZGQgUXVlc3QgdG8gUXVlc3QgTGlzdCBhbmQgRGlzcGxheVxyXG4vLyBsZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcclxuLy8gZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcclxuLy8gICAgIGNsb3NlRm9ybU1vZGFsKGUpO1xyXG4vLyAgICAgcmVtb3ZlRW1wdHlRdWVzdEdvYWxQcm9tcHQoKTtcclxuLy8gICAgIGxldCBuZXdseUdlbmVyYXRlZFF1ZXN0ID0gZ2V0TmV3UXVlc3QoKTtcclxuLy8gICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xyXG4vLyAgICAgdXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xyXG4vLyB9KVxyXG5cclxuLy8gLy8gZnVuY3Rpb24gY3JlYXRlU3RhdGUoaW5pdGlhbFZhbHVlKSB7XHJcbi8vIC8vICAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlOyAvLyBTdGF0ZSB2YWx1ZVxyXG5cclxuLy8gLy8gICAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWVcclxuLy8gLy8gICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcclxuLy8gLy8gICAgIHJldHVybiB2YWx1ZTtcclxuLy8gLy8gICB9XHJcblxyXG4vLyAvLyAgIC8vIEZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgc3RhdGUgdmFsdWVcclxuLy8gLy8gICBmdW5jdGlvbiBzZXRTdGF0ZShuZXdWYWx1ZSkge1xyXG4vLyAvLyAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcclxuLy8gLy8gICB9XHJcblxyXG4vLyAvLyAgIC8vIFJldHVybiBhbiBvYmplY3QgY29udGFpbmluZyB0aGUgZ2V0U3RhdGUgYW5kIHNldFN0YXRlIGZ1bmN0aW9uc1xyXG4vLyAvLyAgIHJldHVybiB7XHJcbi8vIC8vICAgICBnZXRTdGF0ZSxcclxuLy8gLy8gICAgIHNldFN0YXRlLFxyXG4vLyAvLyAgIH07XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIC8vIFVzYWdlIGV4YW1wbGVcclxuLy8gLy8gY29uc3QgY291bnRlclN0YXRlID0gY3JlYXRlU3RhdGUoMCk7XHJcblxyXG4vLyAvLyAvLyBHZXQgdGhlIGN1cnJlbnQgc3RhdGUgdmFsdWVcclxuLy8gLy8gY29uc29sZS5sb2coY291bnRlclN0YXRlLmdldFN0YXRlKCkpOyAvLyBPdXRwdXQ6IDBcclxuXHJcbi8vIC8vIC8vIFVwZGF0ZSB0aGUgc3RhdGUgdmFsdWVcclxuLy8gLy8gY291bnRlclN0YXRlLnNldFN0YXRlKDUpO1xyXG5cclxuLy8gLy8gLy8gR2V0IHRoZSB1cGRhdGVkIHN0YXRlIHZhbHVlXHJcbi8vIC8vIGNvbnNvbGUubG9nKGNvdW50ZXJTdGF0ZS5nZXRTdGF0ZSgpKTsgLy8gT3V0cHV0OiA1XHJcblxyXG4vLyBsZXQgbWFpblBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFwcENvbnRlbnRcIik7XHJcblxyXG4vLyAvLyBSZW1vdmUgYWxsIGN1cnJlbnQgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50XHJcbi8vIHdoaWxlIChtYWluUGFnZS5maXJzdENoaWxkKSB7XHJcbi8vICAgICBtYWluUGFnZS5yZW1vdmVDaGlsZChtYWluUGFnZS5maXJzdENoaWxkKTtcclxuLy8gICB9XHJcblxyXG4vLyByZW5kZXJEZWZhdWx0SW5kZXgobWFpblBhZ2UpO1xyXG4vLyByZW5kZXJHb2FsQ3JlYXRpb25QYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9