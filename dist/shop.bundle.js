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
/* harmony import */ var _zodiacPowers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../zodiacPowers */ "./src/zodiacPowers.js");


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
  constructor(name, reward, frequency, frequencyValue, timeRequired, timeSpentUnit) {
    this.name = name;
    this.reward = reward;
    this.frequency = frequency;
    this.frequencyValue = frequencyValue;
    this.timeRequired = timeRequired;
    this.timeSpentUnit = timeSpentUnit;
    this.quests = [];
    this.completed = false;
    this.totalTimeSpent = 0;
  }

  generateQuest() {
    const remainingTime = this.timeRequired - this.totalTimeSpent;
    const questDuration = Math.min(this.timeSpentUnit === 'hours' ? 60 : 1, remainingTime);
    const description = `Study ${this.name} for ${questDuration} ${this.timeSpentUnit}`;

    const quest = new Quest(description, questDuration, false, this.reward, generateUniqueId(), false, this);
    this.quests.push(quest);
    this.totalTimeSpent += questDuration;

    return quest;
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

function userInterfaceManager (currentQuestList, currencyContainer) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    (0,_currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);

    // if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
    //     showEmptyQuestAndGoals();
    // }
    
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
/* harmony export */   createTaskContainer: () => (/* binding */ createTaskContainer),
/* harmony export */   goalController: () => (/* binding */ goalController),
/* harmony export */   questController: () => (/* binding */ questController),
/* harmony export */   removeEmptyTaskGoalPrompt: () => (/* binding */ removeEmptyTaskGoalPrompt),
/* harmony export */   showEmptyQuestAndGoals: () => (/* binding */ showEmptyQuestAndGoals)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


let header = document.querySelector(".gameContentHeader");

function showEmptyQuestAndGoals () {
   
      if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length <= 0 && _data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length <= 0) {
        if (header.hasChildNodes()) {
            while (header.firstChild) {
              header.removeChild(header.firstChild);
            }
          }
        let gameContainer = document.querySelector(".gameContent");
        if (gameContainer.hasChildNodes()) {
            while (gameContainer.firstChild) {
              gameContainer.removeChild(gameContainer.firstChild);
            }
          }
        let emptyContainer = document.createElement("div");
        emptyContainer.classList.add("emptyQuestList");
        emptyContainer.textContent = "Create a Goal or Task to Get Started"
        gameContainer.appendChild(emptyContainer);
    }
}

function questController () {
    if (header.hasChildNodes()) {
        while (header.firstChild) {
          header.removeChild(header.firstChild);
        }
      }

    // Case: User creates a task but no goals
    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length > 0) {
        let taskHeader = document.createElement("div");
        taskHeader.style.gridColumn = "1";
        taskHeader.textContent = "Tasks";
        header.appendChild(taskHeader);
    }

   
}

function goalController () {
     // Case: User creates a goal
     if (_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length > 0) {
        let goalHeader = document.createElement("div");
        goalHeader.style.gridColumn = "2";
        goalHeader.textContent = "Goals";
        header.appendChild(goalHeader);
      }
      
}

function removeEmptyTaskGoalPrompt () {
    console.log("Empty is working")
    const emptyQuestList = document.querySelector(".emptyQuestList")
    console.log(emptyQuestList)
    if (emptyQuestList) {
        console.log("true");
        emptyQuestList.remove();
    }
}

function createTaskContainer () {
    console.log("Create is working")
    let gameContainer = document.querySelector(".gameContent");
    let createTaskContainer = document.createElement("div");
    createTaskContainer.classList.add("questContainer"); 
    gameContainer.appendChild(createTaskContainer);
    let taskContainer = document.querySelector(".questContainer");
    taskContainer.textContent = "";
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
/* harmony import */ var _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/classes.js */ "./src/classes/classes.js");
/* harmony import */ var _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions.js */ "./src/currencyFunctions.js");
/* harmony import */ var _eventManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventManager.js */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localStorageFunctions.js */ "./src/localStorageFunctions.js");









function getNewQuest () {
    let questObject = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Quest(null, null, null, new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Currency(null, null), null)
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
                    console.log(currentQuestList)
                    ;(0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.currencyAggregator)(currencyContainer, currentQuestList[questIndex]);
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
/*!*********************!*\
  !*** ./src/shop.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
/* harmony import */ var _gachaSpinFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gachaSpinFunctions.js */ "./src/gachaSpinFunctions.js");
/* harmony import */ var _eventManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventManager.js */ "./src/eventManager.js");
/* harmony import */ var _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currencyFunctions.js */ "./src/currencyFunctions.js");
/* harmony import */ var _localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorageFunctions.js */ "./src/localStorageFunctions.js");








console.log(_data_js__WEBPACK_IMPORTED_MODULE_1__.currencyContainer)

let testWeaponList = ("test")
console.log(_data_js__WEBPACK_IMPORTED_MODULE_1__.playerInventory);

(0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_4__.displayPlayerCurrentCurrency)(_data_js__WEBPACK_IMPORTED_MODULE_1__.currencyContainer);

const weaponRollButton = document.querySelector("#weaponGenerator");
weaponRollButton.addEventListener("click", function () {
    (0,_gachaSpinFunctions_js__WEBPACK_IMPORTED_MODULE_2__.openSlotMachineModal)();
})

const spinSlot = document.querySelector("#spinSlotButton");
spinSlot.addEventListener("click", function (){
    let newItem = (0,_gachaSpinFunctions_js__WEBPACK_IMPORTED_MODULE_2__.spin)(testWeaponList, _data_js__WEBPACK_IMPORTED_MODULE_1__.currencyContainer);

    if (newItem != false) {
      // player.equipItem(newItem);
      _data_js__WEBPACK_IMPORTED_MODULE_1__.playerInventory.push(newItem)
      ;(0,_localStorageFunctions_js__WEBPACK_IMPORTED_MODULE_5__.saveDataToLocalStorage)("playerInventory", _data_js__WEBPACK_IMPORTED_MODULE_1__.playerInventory)
    }
    
});

const closeSlotModal = document.querySelector("#closeSlot");
closeSlotModal.addEventListener("click", function() {
  (0,_gachaSpinFunctions_js__WEBPACK_IMPORTED_MODULE_2__.closeSlotMachineModal)();
})
    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVyxNQUFNLGVBQWUsRUFBRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDd0M7QUFDcUQ7QUFDOUQ7QUFDaUI7QUFDRjtBQUNwRTtBQUNBO0FBQ0EsWUFBWSx1REFBaUI7QUFDN0I7QUFDQTtBQUNBLFlBQVkscURBQWU7QUFDM0I7QUFDQSxtRkFBNEIsQ0FBQyx1REFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0REFBSSxpQkFBaUIsdURBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQWU7QUFDckIsTUFBTSxrRkFBc0Isb0JBQW9CLHFEQUFlO0FBQy9EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RUFBcUI7QUFDdkIsQ0FBQztBQUNELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzL2l0ZW1TdGF0cy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2N1cnJlbmN5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2dhY2hhU3BpbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleFZpZXdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9xdWVzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3BGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3dlYXBvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zaG9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi4vem9kaWFjUG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgZGF0ZVRvQ29tcGxldGUsIHF1ZXN0Q29tcGxldGUsIHJld2FyZCwgaWQsIG9uZU9mZkJvb2wsIGdvYWxJZCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm9uZU9mZkJvb2wgPSBvbmVPZmZCb29sO1xyXG4gICAgdGhpcy5nb2FsSWQgPSBnb2FsSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR29hbCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcmV3YXJkLCBmcmVxdWVuY3ksIGZyZXF1ZW5jeVZhbHVlLCB0aW1lUmVxdWlyZWQsIHRpbWVTcGVudFVuaXQpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgIHRoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgdGhpcy5mcmVxdWVuY3lWYWx1ZSA9IGZyZXF1ZW5jeVZhbHVlO1xyXG4gICAgdGhpcy50aW1lUmVxdWlyZWQgPSB0aW1lUmVxdWlyZWQ7XHJcbiAgICB0aGlzLnRpbWVTcGVudFVuaXQgPSB0aW1lU3BlbnRVbml0O1xyXG4gICAgdGhpcy5xdWVzdHMgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUXVlc3QoKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGhpcy50aW1lUmVxdWlyZWQgLSB0aGlzLnRvdGFsVGltZVNwZW50O1xyXG4gICAgY29uc3QgcXVlc3REdXJhdGlvbiA9IE1hdGgubWluKHRoaXMudGltZVNwZW50VW5pdCA9PT0gJ2hvdXJzJyA/IDYwIDogMSwgcmVtYWluaW5nVGltZSk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGBTdHVkeSAke3RoaXMubmFtZX0gZm9yICR7cXVlc3REdXJhdGlvbn0gJHt0aGlzLnRpbWVTcGVudFVuaXR9YDtcclxuXHJcbiAgICBjb25zdCBxdWVzdCA9IG5ldyBRdWVzdChkZXNjcmlwdGlvbiwgcXVlc3REdXJhdGlvbiwgZmFsc2UsIHRoaXMucmV3YXJkLCBnZW5lcmF0ZVVuaXF1ZUlkKCksIGZhbHNlLCB0aGlzKTtcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgdGhpcy50b3RhbFRpbWVTcGVudCArPSBxdWVzdER1cmF0aW9uO1xyXG5cclxuICAgIHJldHVybiBxdWVzdDtcclxuICB9XHJcblxyXG5cclxuICBsaW5rUXVlc3RUb0dvYWwocXVlc3QpIHtcclxuICAgIGlmICh0aGlzLnF1ZXN0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdHMpO1xyXG4gICAgdGhpcy5xdWVzdHMucHVzaChxdWVzdCk7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ICs9IHF1ZXN0LnF1ZXN0Q29tcGxldGUgPyBxdWVzdC5kdXJhdGlvbiA6IDA7XHJcbiAgfVxyXG4gXHJcbiAgaXNHb2FsQ29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWVTcGVudCA+PSB0aGlzLnRpbWVSZXF1aXJlZDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XHJcbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBxdWVzdFxyXG4gIC8vIFlvdSBjYW4gdXNlIGEgbGlicmFyeSBvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB0byBnZW5lcmF0ZSB1bmlxdWUgSURzXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsYXNzUmVzdHJpY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgQXJtb3VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIHJhcml0eSwgc3RhdHMpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclN0YXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cyA9IHRoaXMuZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHMgPSB7fTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgPSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0U3RhdChzdGF0TmFtZSkge1xyXG4gICAgICBjb25zdCBiYXNlVmFsdWUgPSB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIGNvbnN0IGVxdWlwcGVkVmFsdWUgPSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICByZXR1cm4gYmFzZVZhbHVlICsgZXF1aXBwZWRWYWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIHNldFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gKz0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdID0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHVuZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkgJiYgdGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIC09IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPD0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDYsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogOCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDYsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogOCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA4LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA2LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA2LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDgsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyB0eXBlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV2ZWxVcCgpIHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgfHwgMTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzLmxldmVsID0gbGV2ZWwgKyAxO1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLl9za2lsbFBvaW50cyA+IDAgJiYgdGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc2tpbGxQb2ludHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2lsbFBvaW50cztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlSW1hZ2UsIGhlcm9UeXBlLCBlcXVpcHBlZEl0ZW1zLCBlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgICAgdGhpcy5fZWxlbWVudGFsU2VsZWN0aW9uID0gZWxlbWVudGFsU2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IHRoaXMuZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIGdldCBzcHJpdGVJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzcHJpdGVJbWFnZShzcHJpdGVJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlcm9UeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faGVyb1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlcm9UeXBlKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHN0YXRzKHN0YXRzKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGVxdWlwcGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlcXVpcHBlZEl0ZW1zKGVxdWlwcGVkSXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudGFsQWZmaW5pdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsQWZmaW5pdHkpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IGVsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWlwSXRlbShpdGVtKSB7XHJcbiAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3IgZXF1aXBwaW5nIGFuIGl0ZW1cclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMuZXF1aXBJdGVtU3RhdHMoaXRlbS5zdGF0cyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gYXR0YWNrIGxvZ2ljXHJcbiAgICAgICAgY29uc29sZS5sb2coYEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlY2lhbEF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIHNwZWNpYWwgYXR0YWNrIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhgU3BlY2lhbCBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQmlydGhkYXlJblJhbmdlKGJpcnRoZGF5LCBzdGFydERhdGUsIGVuZERhdGUpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBiaXJ0aGRheSB0byBhIERhdGUgb2JqZWN0IGlmIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURhdGUgPSB0eXBlb2YgYmlydGhkYXkgPT09ICdzdHJpbmcnID8gbmV3IERhdGUoYmlydGhkYXkpIDogYmlydGhkYXk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXlcclxuICAgICAgICBjb25zdCBiaXJ0aGRheU1vbnRoID0gYmlydGhkYXlEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXkgPSBiaXJ0aGRheURhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXkgZmFsbCB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF5ID0gc3RhcnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBlbmREYXkgPSBlbmREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYXByaWNvcm4gZWRnZSBjYXNlXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMTEgJiYgYmlydGhkYXlEYXkgPiAyMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMCAmJiBiaXJ0aGRheURheSA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSB0aGUgbW9udGggYW5kIGRheSB2YWx1ZXNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA+IHN0YXJ0TW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IHN0YXJ0TW9udGggJiYgYmlydGhkYXlEYXkgPj0gc3RhcnREYXkpKSAmJlxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPCBlbmRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gZW5kTW9udGggJiYgYmlydGhkYXlEYXkgPD0gZW5kRGF5KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIE90aGVyIG1ldGhvZHMgY2FuIGJlIGFkZGVkIGhlcmUgZm9yIGZ1cnRoZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBnZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgLy8gaWYgZWxlbWVudGFsIHNlbGVjdGlvbiBpcyBhIGJpcnRoZGF5IHByb3ZpZGVkOlxyXG4gICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICAvLyBBbGlhcyB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgem9kaWFjIFNpZ25zIGRhdGUgcmFuZ2UgcHJvcGVydHlcclxuICAgICAgICAgICAgbGV0IGRhdGVDaGVja2VyID0gKHpvZGlhY1NpZ25zW2luZGV4XS5jb252ZXJ0RGF0ZVJhbmdlKHpvZGlhY1NpZ25zW2luZGV4XS5fZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgICAgIGxldCBiaXJ0aERheVJhbmdlQ2hlY2sgPSB0aGlzLmlzQmlydGhkYXlJblJhbmdlKGVsZW1lbnRhbFNlbGVjdGlvbiwgZGF0ZUNoZWNrZXIuc3RhcnREYXRlLCBkYXRlQ2hlY2tlci5lbmREYXRlKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYmlydGhEYXlSYW5nZUNoZWNrID09ICdDYXByaWNvcm4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zWzldKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uID09IHpvZGlhY1NpZ25zW2luZGV4XS5fdW5pcXVlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gIH1cclxuICAgICAgXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVsZW1lbnRhbFBvd2VyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzID0gW1xyXG4gICAgXCJTdGVlbFwiLFxyXG4gICAgXCJBYnlzc1wiLFxyXG4gICAgXCJaZXBoeXJcIixcclxuICAgIFwiTHVuYXJcIixcclxuICAgIFwiU29sYXJcIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJBZXRoZXJcIixcclxuICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgXCJJbmZlcm5vXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiVm9sdFwiLFxyXG4gICAgXCJNaXN0XCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVSYXJpdHkgPSBbXHJcbiAgICB7IHJhcml0eTogXCJub3JtYWxcIiwgY2hhbmNlOiA0MH0sXHJcbiAgICB7IHJhcml0eTogXCJ1bmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICB7IHJhcml0eTogXCJyYXJlXCIsIGNoYW5jZTogMTggfSxcclxuICAgIHsgcmFyaXR5OiBcImVwaWNcIiwgY2hhbmNlOiA5IH0sXHJcbiAgICB7IHJhcml0eTogXCJsZWdlbmRhcnlcIiwgY2hhbmNlOiAzIH0sXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3RhdHMgPSB7XHJcbiAgbm9ybWFsOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA1LCBtYXg6IDEwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwLCBtYXg6IDIwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMDUsIG1heDogMC4wMiB9XHJcbiAgfSxcclxuICB1bmNvbW1vbjoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNy41LCBtYXg6IDE1IH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDIsIG1heDogMC4wNiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIHJhcmU6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAzMCwgbWF4OiA2MCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDYsIG1heDogMC4xMiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGVwaWM6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDI1LCBtYXg6IDUwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjEyLCBtYXg6IDAuMjQgfSAvLyBVcGRhdGVkIG1pbiBhbmQgbWF4XHJcbiAgfSxcclxuICBsZWdlbmRhcnk6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwMCwgbWF4OiAyMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjI0LCBtYXg6IDAuMyB9IC8vIFVwZGF0ZWQgbWF4XHJcbiAgfVxyXG59O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlUHJlZml4ID0ge1xyXG4gICAgbm9ybWFsOiBbXHJcbiAgICAgIFwiT3JkaW5hcnlcIiwgXCJDb21tb25cIiwgXCJQbGFpblwiLCBcIlJlZ3VsYXJcIiwgXCJCYXNpY1wiXHJcbiAgICBdLFxyXG4gICAgdW5jb21tb246IFtcclxuICAgICAgXCJVbmNvbW1vblwiLCBcIlN0cmFuZ2VcIiwgXCJTcGVjaWFsXCIsIFwiRGlzdGluY3RpdmVcIiwgXCJBYm5vcm1hbFwiXHJcbiAgICBdLFxyXG4gICAgcmFyZTogW1xyXG4gICAgICBcIlJhcmVcIiwgXCJQcmVjaW91c1wiLCBcIkV4cXVpc2l0ZVwiLCBcIk1hZ25pZmljZW50XCIsIFwiRWxpdGVcIlxyXG4gICAgXSxcclxuICAgIGVwaWM6IFtcclxuICAgICAgXCJFcGljXCIsIFwiR3JhbmRcIiwgXCJJbGx1c3RyaW91c1wiLCBcIlRyYW5zY2VuZGVudFwiLCBcIk1hamVzdGljXCJcclxuICAgIF0sXHJcbiAgICBsZWdlbmRhcnk6IFtcclxuICAgICAgXCJMZWdlbmRhcnlcIiwgXCJVbHRpbWF0ZVwiLCBcIkV0ZXJuYWxcIiwgXCJJbnZpbmNpYmxlXCIsIFwiR29kbGlrZVwiXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVN1ZmZpeCA9IHtcclxuICAgIFN0ZWVsOiBcIm9mIFdhclwiLFxyXG4gICAgQWJ5c3M6IFwib2YgV2FpbGluZ1wiLFxyXG4gICAgWmVwaHlyOiBcIm9mIEhvd2xpbmdcIixcclxuICAgIEx1bmFyOiBcIm9mIE1vb25saWdodFwiLFxyXG4gICAgU29sYXI6IFwib2YgU3VubGlnaHRcIixcclxuICAgIFRlcnJhOiBcIm9mIFRlY3RvbmljXCIsXHJcbiAgICBBZXRoZXI6IFwib2YgR3Jhdml0eVwiLFxyXG4gICAgQ29ycm9kZTogXCJvZiBQb2lzb25cIixcclxuICAgIEluZmVybm86IFwib2YgQnVybmluZ1wiLFxyXG4gICAgR2FpYTogXCJvZiBOYXR1cmVcIixcclxuICAgIFZvbHQ6IFwib2YgU2hvY2tpbmdcIixcclxuICAgIE1pc3Q6IFwib2YgRnJlZXppbmdcIlxyXG4gIH07IiwiaW1wb3J0IEdHVG9rZW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIlxyXG5pbXBvcnQgQ2hlc3RLZXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCJcclxuXHJcblxyXG5jb25zdCB2YWxpZEN1cnJlbmNpZXMgPSBbXCJHR1Rva2Vuc1wiLCBcIkNoZXN0S2V5c1wiXVxyXG5jb25zdCBjdXJyZW5jeUltYWdlcyA9IHtcclxuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXHJcbiAgICBDaGVzdEtleXM6IENoZXN0S2V5SW1hZ2VcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmV3YXJkVXRpbGl0aWVzID0ge1xyXG5cclxuICAgIHZhbGlkQ3VycmVuY2llczogWy4uLnZhbGlkQ3VycmVuY2llc10sXHJcbiAgICBnZXRSZXdhcmRJbWFnZTogZnVuY3Rpb24ocXVlc3QpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkVHlwZSA9IHF1ZXN0LnJld2FyZC50eXBlO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHJld2FyZFR5cGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeUltYWdlc1tyZXdhcmRUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBvciBoYW5kbGUgaW52YWxpZCByZXdhcmQgdHlwZXNcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IChjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgY3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZX1Vc2VySW50ZXJmYWNlYCk7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50UXVlc3RMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVudEdvYWxMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRHb2FsTGlzdCcpIHx8IFtdO1xyXG5leHBvcnQgbGV0IGN1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbmN5Q29udGFpbmVyJykgfHwgW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJDaGVzdEtleXNcIiwgMCldO1xyXG5leHBvcnQgbGV0IHBsYXllckludmVudG9yeSA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJJbnZlbnRvcnknKSB8fCBbXTtcclxuZXhwb3J0IGxldCBwbGF5ZXJFcXVpcHBlZEl0ZW1zID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckVxdWlwcGVkSXRlbXMnKSB8fCBbXTsiLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgdGFza0FuZEdvYWxDb250cm9sbGVyLCByZW1vdmVFbXB0eVRhc2tHb2FsUHJvbXB0LCBjcmVhdGVUYXNrQ29udGFpbmVyLCBzaG93RW1wdHlRdWVzdEFuZEdvYWxzRW1wdHlRdWVzdEFuZEdvYWxzIH0gZnJvbSBcIi4vaW5kZXhWaWV3RnVuY3Rpb25zXCI7XHJcbi8vIGltcG9ydCB7IGN1cnJlbnRHb2FsTGlzdCwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIC8vIERlZmF1bHQgYW5kIFBlcnNpc3RpbmcgRXZlbnRzOlxyXG4gICAgLy8gMS4gUmVuZGVyIEN1cnJlbmN5IFZhbHVlc1xyXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDAgJiYgY3VycmVudEdvYWxMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAvLyAgICAgc2hvd0VtcHR5UXVlc3RBbmRHb2FscygpO1xyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICByZW1vdmVDb21wbGV0ZWRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwiY3VycmVudFF1ZXN0TGlzdFwiLCBjdXJyZW50UXVlc3RMaXN0KTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW5jeUNvbnRhaW5lclwiLCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyhjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21XZWFwb24gfSBmcm9tIFwiLi9zaG9wRnVuY3Rpb25cIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyXCI7XHJcbmltcG9ydCB7IGdldEVsZW1lbnRJbWFnZSwgZ2V0UmFyaXR5SW1hZ2UsIGdldFdlYXBvbkltYWdlIH0gZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZVwiO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9hcm1vdXInLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBlbGVtZW50SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG4gIFxyXG5mdW5jdGlvbiBjaGVja1ZhbGlkQ3VycmVuY3lBbW91bnQoY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgPCAyMCkge1xyXG4gICAgICBhbGVydChcIklOU1VGRklDSUVOVCBHRyBUT0tFTlNcIik7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGN1cnJlbmN5Q29udGFpbmVyWzBdLmFtb3VudCAtPSAyMDtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlU2xvdE1hY2hpbmVJdGVtIChoZXJvU2VsZWN0aW9uKSB7XHJcbiAgIC8vIEdlbmVyYXRlIHRoZSB3ZWFwb24gdGhlIHBsYXllciByZWNlaXZlcyB1c2luZyB0aGUgZ2VuZXJhdGVSYW5kb21XZWFwb24gZnVuY3Rpb25cclxuICAgbGV0IGdlbmVyYXRlZFdlYXBvbiA9IGdlbmVyYXRlUmFuZG9tV2VhcG9uKGhlcm9TZWxlY3Rpb24pO1xyXG5cclxuICAgLy8gUGFyc2UgdGhlIHdlYXBvbiBDbGFzcyBkYXRhIHRvIGJlIHVzZWQgZm9yIGZyb250IGVuZCBpbWFnZXNcclxuICAgbGV0IHJlc3VsdGluZ1R5cGUgPSBnZW5lcmF0ZWRXZWFwb24uX3R5cGU7XHJcbiAgIGxldCByZXN1bHRpbmdSYXJpdHkgPSBnZW5lcmF0ZWRXZWFwb24uX3Jhcml0eTtcclxuICAgbGV0IHJlc3VsdGluZ0VsZW1lbnQgPSBnZW5lcmF0ZWRXZWFwb24uX2VsZW1lbnQ7XHJcblxyXG4gICAvLyBQYXNzIHRoZSBkYXRhIHRvIGEgZmluZCBmdW5jdGlvbiB0aGF0IGxvY2F0ZXMgdGhlIGNoZWNrcyBlYWNoIGltYWdlIChzdHJpbmcpIFVSTCB0byBzZWUgaWYgaXQgaW5jbHVkZXMgdGhlIHBhcnNlZCBkYXRhICAgXHJcbiAgIC8vIElmIGRhdGEgbWF0Y2hlcywgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSBpbWFnZSBsaW5rIGFzIHZhcmlhYmxlIFxyXG4gICBsZXQgc2VsZWN0ZWRUeXBlSW1hZ2UgPSBnZXRXZWFwb25JbWFnZShyZXN1bHRpbmdUeXBlKTtcclxuICAgbGV0IHNlbGVjdGVkUmFyaXR5SW1hZ2UgPSBnZXRSYXJpdHlJbWFnZShyZXN1bHRpbmdSYXJpdHkpO1xyXG4gICBsZXQgc2VsZWN0ZWRFbGVtZW50SW1hZ2UgPSBnZXRFbGVtZW50SW1hZ2UocmVzdWx0aW5nRWxlbWVudCk7XHJcbiAgIFxyXG4gICAvLyBJbWFnZXMgZm9yIHRoZSBlcXVpcG1lbnQgcmVlbFxyXG4gICBjb25zdCBlcXVpcG1lbnRSZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VxdWlwbWVudFJlZWwnKTtcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wgPSAgZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkVHlwZUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRXF1aXBtZW50U3ltYm9sID0gZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcEVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXBvbkltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25JbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21FcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgIFxyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgcmFyaXR5IHJlZWxcclxuICAgY29uc3QgcmFyaXR5UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYXJpdHlSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRSYXJpdHlTeW1ib2wgPSAgcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkUmFyaXR5SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BSYXJpdHlTeW1ib2wgPSByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFyaXR5SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhcml0eUltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbVJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcbiAgICAgIFxyXG5cclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZWxlbWVudCByZWVsXHJcbiAgIGNvbnN0IGVsZW1lbnRSZWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VsZW1lbnRSZWVsJylcclxuXHJcbiAgIC8vIFNlbGVjdGVkIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRWxlbWVudFN5bWJvbCA9ICBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxyXG4gICBzZWxlY3RlZEVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZEVsZW1lbnRJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BFbGVtZW50U3ltYm9sID0gZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50SW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIHJldHVybiBnZW5lcmF0ZWRXZWFwb247XHJcbiB9XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaW4gKGhlcm9TZWxlY3Rpb24sIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgaWYgKGNoZWNrVmFsaWRDdXJyZW5jeUFtb3VudChjdXJyZW5jeUNvbnRhaW5lcikpIHtcclxuICAgICAgICByZXR1cm4gZ2VuZXJhdGVTbG90TWFjaGluZUl0ZW0oaGVyb1NlbGVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCgpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gcmVzZXRTbG90TWFjaGluZUltYWdlcyAoKSB7XHJcbiAgICBjb25zdCBzeW1ib2xFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc3ltYm9sXCIpO1xyXG4gICAgY29uc29sZS5sb2coc3ltYm9sRWxlbWVudHMpO1xyXG5cclxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBzeW1ib2wgZWxlbWVudHNcclxuICAgICAgc3ltYm9sRWxlbWVudHMuZm9yRWFjaCgoc3ltYm9sRWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHN5bWJvbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcclxuICAgICAgfSlcclxuICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuU2xvdE1hY2hpbmVNb2RhbCgpIHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbG90TWFjaGluZU1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICByZXNldFNsb3RNYWNoaW5lSW1hZ2VzKCk7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuIiwiaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tIFwiLi9pbWFnZUhhbmRsZXJcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL3dlYXBvbnMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBhcm1vdXJJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9hcm1vdXInLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBlbGVtZW50SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9yYXJpdGllcycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApXHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2UgKHdlYXBvbikge1xyXG4vLyAgICAgbGV0IHdlYXBvbkltYWdlVXJsID0gd2VhcG9uSW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcbi8vICAgICByZXR1cm4gd2VhcG9uSW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25JbWFnZSh3ZWFwb24pIHtcclxuICBpZiAoIXdlYXBvbiB8fCB0eXBlb2Ygd2VhcG9uICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAvLyBJbnZhbGlkIHdlYXBvbiBwYXJhbWV0ZXIsIGhhbmRsZSB0aGUgZXJyb3Igb3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IHdlYXBvbkltYWdlVXJsID0gd2VhcG9uSW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyh3ZWFwb24pKTtcclxuXHJcbiAgaWYgKCF3ZWFwb25JbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IHdlYXBvbi5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbiAgICB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgICAgLy8gSW1hZ2Ugbm90IGZvdW5kIGZvciB0aGUgZ2l2ZW4gd2VhcG9uLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UgKGFybW91cikge1xyXG4vLyAgICAgbGV0IGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMoYXJtb3VyKSk7XHJcbi8vICAgICByZXR1cm4gYXJtb3VySW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBcm1vdXJJbWFnZShhcm1vdXIpIHtcclxuICBpZiAoIWFybW91ciB8fCB0eXBlb2YgYXJtb3VyICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMoYXJtb3VyKSk7XHJcblxyXG4gIGlmICghYXJtb3VySW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSBhcm1vdXIucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0UmFyaXR5SW1hZ2UgKHJhcml0eSkge1xyXG4vLyAgICAgbGV0IHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcbi8vICAgICByZXR1cm4gcmFyaXR5SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SW1hZ2UgKGVsZW1lbnQpIHtcclxuLy8gICAgIGxldCBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoaW1hZ2UgPT4gaW1hZ2UuaW5jbHVkZXMoZWxlbWVudCkpO1xyXG4vLyAgICAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlKHJhcml0eSkge1xyXG4gIGlmICghcmFyaXR5IHx8IHR5cGVvZiByYXJpdHkgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyYXJpdHkpKTtcclxuXHJcbiAgaWYgKCFyYXJpdHlJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IHJhcml0eSArIFwiUmFyaXR5XCI7XHJcbiAgICByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmFyaXR5SW1hZ2VVcmw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SW1hZ2UoZWxlbWVudCkge1xyXG4gIGlmICghZWxlbWVudCB8fCB0eXBlb2YgZWxlbWVudCAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMoZWxlbWVudCkpO1xyXG5cclxuXHJcbiAgaWYgKCFlbGVtZW50SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSBlbGVtZW50LnRvTG93ZXJDYXNlKCk7XHJcbiAgICBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFlbGVtZW50SW1hZ2VVcmwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudEltYWdlVXJsO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1JbWFnZShzdHJpbmcpIHtcclxuXHJcbiAgbGV0IGl0ZW1JbWFnZVVybDtcclxuXHJcbiAgaWYgKHN0cmluZy50eXBlID09PSBcIndlYXBvblwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRXZWFwb25JbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJhcm1vdXJcIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0QXJtb3VySW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwicmFyaXR5XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldFJhcml0eUltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcImVsZW1lbnRcIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0RWxlbWVudEltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpdGVtSW1hZ2VVcmw7XHJcbn0iLCIvLyB3aGVyZSBcInJcIiBpcyBhIHJlcXVpcmUuY29udGV4dCBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbXBvcnRBbGxJbWFnZXMocikge1xyXG4gICAgbGV0IGltYWdlcyA9IFtdO1xyXG5cclxuICAgIC8vIGtleXMgaXMgYW4gYXJyYXkgdGhhdCBzdG9yZXMgYWxsIHRoZSBmaWxlbmFtZXMgcmV0dXJuZWQgYnkgci5rZXlzKClcclxuICAgIGNvbnN0IGtleXMgPSByLmtleXMoKTtcclxuXHJcbiAgICAvLyBsZW5ndGggc290cmVzIHRoZSBsZW5ndGggb2YgdGhlIGtleXMgYXJyYXlcclxuICAgIGNvbnN0IGxlbmd0aCA9IGtleXMubGVuZ3RoO1xyXG4gIFxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xyXG4gICAgICBpbWFnZXMucHVzaChyKGtleSkpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIGltYWdlcztcclxuICB9XHJcblxyXG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vUmVkIERlbW9uIEhlbG0ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2FybW91ci9SZWQgRGVtb24gSGVsbS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2FybW91ciBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FieXNzLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hYnlzcy5wbmdcIixcblx0XCIuL2FldGhlci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWV0aGVyLnBuZ1wiLFxuXHRcIi4vY29ycm9kZS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvY29ycm9kZS5wbmdcIixcblx0XCIuL2dhaWEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2dhaWEucG5nXCIsXG5cdFwiLi9pbmZlcm5vLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9pbmZlcm5vLnBuZ1wiLFxuXHRcIi4vbHVuYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2x1bmFyLnBuZ1wiLFxuXHRcIi4vbWlzdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbWlzdC5wbmdcIixcblx0XCIuL3NvbGFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zb2xhci5wbmdcIixcblx0XCIuL3N0ZWVsLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9zdGVlbC5wbmdcIixcblx0XCIuL3RlcnJhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy90ZXJyYS5wbmdcIixcblx0XCIuL3ZvbHQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3ZvbHQucG5nXCIsXG5cdFwiLi96ZXBoeXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3plcGh5ci5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZXBpY1Jhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvZXBpY1Jhcml0eS5wbmdcIixcblx0XCIuL2xlZ2VuZGFyeVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiLFxuXHRcIi4vbm9ybWFsUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9ub3JtYWxSYXJpdHkucG5nXCIsXG5cdFwiLi9yYXJlUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9yYXJlUmFyaXR5LnBuZ1wiLFxuXHRcIi4vdW5jb21tb25SYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3VuY29tbW9uUmFyaXR5LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9BYnlzc1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vR2FpYVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvR2FpYVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9JbmZlcm5vU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0x1bmFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9MdW5hclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9NaXN0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9NaXN0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1J1bmVTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1J1bmVTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vU29sYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1NvbGFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1ZvbHRTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vWmVwaHlyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvd2VhcG9ucyBzeW5jIFxcXFwuKHBuZykkXCI7IiwiaW1wb3J0IHsgY3VycmVudFF1ZXN0TGlzdCwgY3VycmVudEdvYWxMaXN0IH0gZnJvbSBcIi4vZGF0YVwiO1xyXG5cclxubGV0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRlbnRIZWFkZXJcIik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0VtcHR5UXVlc3RBbmRHb2FscyAoKSB7XHJcbiAgIFxyXG4gICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCAmJiBjdXJyZW50R29hbExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICBpZiAoaGVhZGVyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoaGVhZGVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoaGVhZGVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50XCIpO1xyXG4gICAgICAgIGlmIChnYW1lQ29udGFpbmVyLmhhc0NoaWxkTm9kZXMoKSkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZ2FtZUNvbnRhaW5lci5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgZ2FtZUNvbnRhaW5lci5yZW1vdmVDaGlsZChnYW1lQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVtcHR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBlbXB0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHlRdWVzdExpc3RcIik7XHJcbiAgICAgICAgZW1wdHlDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIEdvYWwgb3IgVGFzayB0byBHZXQgU3RhcnRlZFwiXHJcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eUNvbnRhaW5lcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBxdWVzdENvbnRyb2xsZXIgKCkge1xyXG4gICAgaWYgKGhlYWRlci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICB3aGlsZSAoaGVhZGVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChoZWFkZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgLy8gQ2FzZTogVXNlciBjcmVhdGVzIGEgdGFzayBidXQgbm8gZ29hbHNcclxuICAgIGlmIChjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsZXQgdGFza0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGFza0hlYWRlci5zdHlsZS5ncmlkQ29sdW1uID0gXCIxXCI7XHJcbiAgICAgICAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFza0hlYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvYWxDb250cm9sbGVyICgpIHtcclxuICAgICAvLyBDYXNlOiBVc2VyIGNyZWF0ZXMgYSBnb2FsXHJcbiAgICAgaWYgKGN1cnJlbnRHb2FsTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IGdvYWxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGdvYWxIZWFkZXIuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMlwiO1xyXG4gICAgICAgIGdvYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIkdvYWxzXCI7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGdvYWxIZWFkZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRW1wdHlUYXNrR29hbFByb21wdCAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkVtcHR5IGlzIHdvcmtpbmdcIilcclxuICAgIGNvbnN0IGVtcHR5UXVlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbXB0eVF1ZXN0TGlzdFwiKVxyXG4gICAgY29uc29sZS5sb2coZW1wdHlRdWVzdExpc3QpXHJcbiAgICBpZiAoZW1wdHlRdWVzdExpc3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICAgICAgZW1wdHlRdWVzdExpc3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrQ29udGFpbmVyICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRlIGlzIHdvcmtpbmdcIilcclxuICAgIGxldCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lQ29udGVudFwiKTtcclxuICAgIGxldCBjcmVhdGVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNyZWF0ZVRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29udGFpbmVyXCIpOyBcclxuICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0NvbnRhaW5lcik7XHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZGF0YSBmcm9tIGxvY2FsU3RvcmFnZSBmb3Iga2V5ICcke2tleX0nOmAsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfSIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy9jbGFzc2VzLmpzJ1xyXG5pbXBvcnQgeyByZXdhcmRVdGlsaXRpZXMsIGN1cnJlbmN5QWdncmVnYXRvciB9IGZyb20gJy4vY3VycmVuY3lGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybU9iamVjdGl2ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtRGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5VHlwZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lBbW91bnRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBwYXJzZUludChnZXRRdWVzdEN1cnJlbmN5QW1vdW50KTtcclxuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gcXVlc3RPYmplY3Q7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICAgIGZvciAobGV0IHF1ZXN0SW5kZXggaW4gY3VycmVudFF1ZXN0TGlzdCkge1xyXG5cclxuICAgICAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7W3F1ZXN0SW5kZXhdfWApO1xyXG5cclxuXHJcbiAgICAgICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgICAgIGxldCBxdWVzdE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZE9iamVjdGl2ZVwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YClcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKTtcclxuXHJcbiAgICAgICAgLy9RdWVzdCBDb21wbGV0ZSBDaGVja2JveCBOZXN0ZWQgaW4gUXVlc3QgT2JqZWN0aXZlIENvbnRlbnQgRGl2IFxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBRdWVzdCBDb21wbGV0ZVwiO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC5odG1sRm9yID0gYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YDtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWApO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnF1ZXN0Q29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdExpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNoZWNrYm94KTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVMYWJlbCk7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcImRhdGVUb0NvbXBsZXRlQm94XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtbcXVlc3RJbmRleF19LXJld2FyZGApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC5hbW91bnR9ICR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQudHlwZX1gKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChxdWVzdE9iamVjdGl2ZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlVG9Db21wbGV0ZUJveCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcclxuICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaChxdWVzdCk7XHJcbiAgICByZXR1cm4gY3VycmVudFF1ZXN0TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0KSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdFtpbmRleF0ucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIEFzc3VtaW5nIHRoZSBjb2RlIGZvciB0aGUgV2VhcG9uIGNsYXNzLCBIZXJvVHlwZVdlYXBvbkxpc3QgY2xhc3MsIGFuZCB3ZWFwb25MaXN0cyBmb3IgZWFjaCBjbGFzcyBpcyBhbHJlYWR5IGRlZmluZWQuXHJcbmltcG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfSBmcm9tIFwiLi93ZWFwb25MaXN0LmpzXCJcclxuaW1wb3J0IHsgaXRlbVBvc3NpYmxlRWxlbWVudHMsIGl0ZW1Qb3NzaWJsZVJhcml0eSwgaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVBvc3NpYmxlU3VmZml4IH0gZnJvbSBcIi4vY2xhc3Nlcy9pdGVtU3RhdHMuanNcIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMnO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pXHJcblxyXG5cclxuXHJcbmNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBlbGVtZW50LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHJvZ3VlV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHByaWVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gd2FycmlvcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNvcmNlcmVyV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJ0ZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwbGF5ZXIgY2xhc3MuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWFwb25MaXN0ID0gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcyk7XHJcbiAgXHJcbiAgICBpZiAod2VhcG9uTGlzdCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gd2VhcG9uTGlzdFtyYW5kb21JbmRleF0uX3R5cGU7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW52YWxpZCBwbGF5ZXIgY2xhc3NcclxuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcmV0cmlldmUgd2VhcG9uIGxpc3QuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJhcml0eSAoaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b3RhbCBjaGFuY2UgdG8gMFxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGNoYW5jZSB2YWx1ZXMgb2YgYWxsIHJhcml0eSBvYmplY3QgY2hhbmNlc1xyXG4gICAgLy8gVGhpcyBzaG91bGQgYWRkIHVwIHRvIDEwMFxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSByYW5kb20gd2hvbGUgaW50ZWdlciBiZXR3ZWVuIDAgLSAxMDBcclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZSk7XHJcblxyXG4gICAgLy8gU2V0IHJhcml0eSB2YWx1ZSB0byBudWxsXHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJhcml0eSBiYXNlZCBvbiB5b3VyIHJhbmRvbUNoYW5jZSByb2xsLiBcclxuICAgIC8vIEZvciBleGFtcGxlIGlmIFJhbmRvbSBDaGFuY2Ugd2FzIDk0OlxyXG4gICAgLy8gOTQgLSA0MCAoTm9ybWFsIFJhcml0eSkgPSA1NCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA1NCAtIDMwIChVbmNvbW1vbiBSYXJpdHkpID0gMjQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gMjQgLSAxNSAoUmFyZSBSYXJpdHkpID0gOSA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA5IC0gMTAgKEVwaWMgUmFyaXR5KSA9IC0xIDwtLSBUaGVyZWZvcmUgcmFyaXR5IG9mIGl0ZW0gaXMgRXBpYyBhcyAoOSAtIDEwKSA8ICgwKVxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpcyAoLTAuMDEgdG8gYWNvdW50IGZvciByb3VuZGluZyBlcnJvcnMpXHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAtMC4wMSkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlPYmplY3QucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgaXRlbVJhcml0eSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBkZWNpbWFsUGxhY2VzID0gMjsgLy8gTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzXHJcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICByZXR1cm4gTnVtYmVyKHJhbmRvbU51bWJlci50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpKTtcclxuICB9XHJcblxyXG4gICAgLy8gVXNpbmcgdGhlIHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHRvIGFjY2VzcyB0aGUgcHJvcGVydHkgYXQgcnVudGltZVxyXG4gICAgY29uc3QgcmFyaXR5U3RhdHMgPSBpdGVtUG9zc2libGVTdGF0c1tpdGVtUmFyaXR5XTtcclxuICAgIGNvbnN0IGl0ZW1TdGF0cyA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RhdCBpbiByYXJpdHlTdGF0cykge1xyXG4gICAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHJhcml0eVN0YXRzW3N0YXRdO1xyXG4gICAgaXRlbVN0YXRzW3N0YXRdID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpO1xyXG4gICAgY29uc29sZS5sb2coc3RhdCwgaXRlbVN0YXRzW3N0YXRdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXRzO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1SYXJpdHkpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XS5sZW5ndGgpXHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldW3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cykge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlRWxlbWVudHMubGVuZ3RoKTtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVFbGVtZW50c1tyYW5kb21JbmRleF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlU3VmZml4W2VsZW1lbnRdO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdlYXBvbiAocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBsZXQgd2VhcG9uVHlwZSA9IGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKTtcclxuICAgIGxldCB3ZWFwb25FbGVtZW50ID0gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpO1xyXG4gICAgbGV0IHdlYXBvblJhcml0eSA9IGdldEl0ZW1SYXJpdHkoaXRlbVBvc3NpYmxlUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdGF0cyA9IGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25QcmVmaXggPSBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdWZmaXggPSBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgd2VhcG9uRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBXZWFwb24oXHJcbiAgICAgICAgKHdlYXBvblByZWZpeCArIFwiIFwiICsgd2VhcG9uVHlwZSArIFwiIFwiICsgd2VhcG9uU3VmZml4KSwgXHJcbiAgICAgICAgd2VhcG9uVHlwZSxcclxuICAgICAgICBwbGF5ZXJDbGFzcyxcclxuICAgICAgICB3ZWFwb25SYXJpdHksXHJcbiAgICAgICAgd2VhcG9uU3RhdHMsXHJcbiAgICAgICAgd2VhcG9uRWxlbWVudCxcclxuICAgICAgICBudWxsLFxyXG4gICAgKVxyXG5cclxuIFxyXG59XHJcbi8vIFNpbXVsYXRpbmcgYW4gaXRlbSBiZWluZyBwdWxsZWQgZnJvbSBhIGNoZXN0IGJhc2VkIG9uIHBsYXllcidzIGNsYXNzIGFuZCByYXJpdHkgcHJvYmFiaWxpdGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcHVsbEl0ZW1Gcm9tQ2hlc3QocGxheWVyQ2xhc3MsIHBpdHkpIHtcclxuICAgXHJcblxyXG4gICAgLy8gQ29uc2lkZXIgY29uc3RhbnQgcmFyaXR5IG9iamVjdCBmb3Igc2NhbGluZyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgcmFyaXR5UHJvYmFiaWxpdGllcyA9IFtcclxuICAgICAgICB7IHJhcml0eTogXCJOb3JtYWxcIiwgY2hhbmNlOiA0MCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJSYXJlXCIsIGNoYW5jZTogMTUgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJFcGljXCIsIGNoYW5jZTogMTAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJMZWdlbmRhcnlcIiwgY2hhbmNlOiA1IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2U7XHJcbiAgICBjb25zb2xlLmxvZyhyYW5kb21DaGFuY2UpO1xyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eURhdGEucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICBjb25zdCByYW5kb21XZWFwb24gPSB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAvLyBBc3NpZ24gcmFuZG9tIHByb3BlcnRpZXMgdG8gdGhlIHdlYXBvblxyXG4gICAgcmFuZG9tV2VhcG9uLl9uYW1lID0gXCJEaXZpbmUgU3RhZmZcIjsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG4gICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSByYXJpdHk7IC8vIEFzc2lnbmluZyB0aGUgZGV0ZXJtaW5lZCByYXJpdHlcclxuXHJcbiAgICAvLyBJZiB0aGUgcHVsbGVkIGl0ZW0gaXMgbGVnZW5kYXJ5LCByZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICBpZiAocmFyaXR5ID09PSBcIkxlZ2VuZGFyeVwiKSB7XHJcbiAgICAgICAgcGl0eSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBpdHkrKzsgLy8gSW5jcmVtZW50IHRoZSBwaXR5IGNvdW50ZXIgaWYgYSBsZWdlbmRhcnkgaXRlbSB3YXMgbm90IHB1bGxlZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEd1YXJhbnRlZSBhIGxlZ2VuZGFyeSBpdGVtIGlmIHRoZSBwaXR5IGNvdW50ZXIgcmVhY2hlcyAxMDBcclxuICAgIGlmIChwaXR5ID49IDEwMCkge1xyXG4gICAgICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gXCJMZWdlbmRhcnlcIjtcclxuICAgICAgICBwaXR5ID0gMDsgLy8gUmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVdlYXBvbi5fc3RhdHMgPSB7XHJcbiAgICAgICAgYXR0YWNrOiAxNTAsXHJcbiAgICAgICAgaW50ZWxsZWN0OiA1MCxcclxuICAgICAgICBzdGFtaW5hOiA4MCxcclxuICAgIH07IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuXHJcbiAgICByZXR1cm4geyBpdGVtOiByYW5kb21XZWFwb24sIHBpdHkgfTtcclxufVxyXG4iLCJjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3Qgcm9ndWVXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkRhZ2dlclwiLCBcIkRhZ2dlclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkR1YWwgQmxhZGVzXCIsIFwiRHVhbCBCbGFkZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJCb3dcIiwgXCJCb3dcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDbGF3IFdlYXBvbnNcIiwgXCJDbGF3IFdlYXBvbnNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcm9zc2Jvd1wiLCBcIkNyb3NzYm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUmFwaWVyXCIsIFwiUmFwaWVyXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQmxvd2d1blwiLCBcIkJsb3dndW5cIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDaGFrcmFtc1wiLCBcIkNoYWtyYW1zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR2Fycm90ZVwiLCBcIkdhcnJvdGVcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3Qgd2FycmlvcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiR3JlYXRzd29yZFwiLCBcIkdyZWF0c3dvcmRcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlN3b3JkIGFuZCBTaGllbGRcIiwgXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXJoYW1tZXJcIiwgXCJXYXJoYW1tZXJcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlBvbGVhcm1cIiwgXCJQb2xlYXJtXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBeGVcIiwgXCJBeGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2VcIiwgXCJNYWNlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0YXhlXCIsIFwiR3JlYXRheGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkZsYWlsXCIsIFwiRmxhaWxcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIldhciBHYXVudGxldHNcIiwgXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgcHJpZXN0V2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFdhbmRcIiwgXCJIb2x5IFdhbmRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVG9tZVwiLCBcIlRvbWVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBIYW1tZXJcIiwgXCJIb2x5IEhhbW1lclwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBbmtoXCIsIFwiQW5raFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IEJvd1wiLCBcIkhvbHkgQm93XCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNhY3JlZCBDaGFsaWNlXCIsIFwiU2FjcmVkIENoYWxpY2VcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUHJheWVyIEJlYWRzXCIsIFwiUHJheWVyIEJlYWRzXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgU2N5dGhlXCIsIFwiSG9seSBTY3l0aGVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHNvcmNlcmVyV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU3BlbGxib29rXCIsIFwiU3BlbGxib29rXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRWxlbWVudGFsIFdhbmRcIiwgXCJFbGVtZW50YWwgV2FuZFwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNyeXN0YWwgT3JiXCIsIFwiQ3J5c3RhbCBPcmJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lYmxhZGVcIiwgXCJSdW5lYmxhZGVcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgR2F1bnRsZXRzXCIsIFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVuY2hhbnRlZCBCb3dcIiwgXCJFbmNoYW50ZWQgQm93XCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU2NlcHRlclwiLCBcIlNjZXB0ZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgRGFnZ2VyXCIsIFwiQXJjYW5lIERhZ2dlclwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyYXZpdG9uIFN0YWZmXCIsIFwiR3Jhdml0b24gU3RhZmZcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgdGVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJBYnlzcyBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhaWEgU2hvcnQgU3dvcmRcIiwgXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSW5mZXJubyBTaG9ydCBTd29yZFwiLCBcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIkx1bmFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWlzdCBTaG9ydCBTd29yZFwiLCBcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lIFNob3J0IFN3b3JkXCIsIFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiU29sYXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJWb2x0IFNob3J0IFN3b3JkXCIsIFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5leHBvcnQgeyByb2d1ZVdlYXBvbkxpc3QsIHdhcnJpb3JXZWFwb25MaXN0LCBwcmllc3RXZWFwb25MaXN0LCBzb3JjZXJlcldlYXBvbkxpc3QsIHRlc3RXZWFwb25MaXN0IH07IiwiY2xhc3MgWm9kaWFjU2lnbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xyXG4gICAgICAvLyBTcGxpdCB0aGUgZGF0ZSByYW5nZSBzdHJpbmcgaW50byBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgICAgIGNvbnN0IFtzdGFydFN0ciwgZW5kU3RyXSA9IGRhdGVSYW5nZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBcclxuICAgICAgLy8gUGFyc2UgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdXNpbmcgdGhlIERhdGUgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRTdHIpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcclxuICAgIFxyXG4gICAgICAvLyBBZGp1c3QgdGhlIHllYXIgb2YgdGhlIGVuZCBkYXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIGVuZERhdGUuc2V0RnVsbFllYXIoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBhbiBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3RhcnREYXRlLCBlbmREYXRlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcmllc1wiLFxyXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU3RlZWxcIixcclxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJUYXVydXNcIixcclxuICAgICAgXCJBcHJpbCAyMCAtIE1heSAyMFwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJIYWRlcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJHZW1pbmlcIixcclxuICAgICAgXCJNYXkgMjEgLSBKdW5lIDIwXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiWmVwaHlyXCIsXHJcbiAgICAgIFwiSXphbmFtaS9JemFuYWdpLCB0aGUgR29kcy9Hb2RkZXNzZXMgb2YgQ3JlYXRpb24gYW5kIERlYXRoIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhbmNlclwiLFxyXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJMdW5hclwiLFxyXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMZW9cIixcclxuICAgICAgXCJKdWx5IDIzIC0gQXVndXN0IDIyXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlNvbGFyXCIsXHJcbiAgICAgIFwiUmEsIHRoZSBHb2Qgb2YgdGhlIFN1biAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJWaXJnb1wiLFxyXG4gICAgICBcIkF1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMlwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiVGVycmFcIixcclxuICAgICAgXCJPc2lyaXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGlicmFcIixcclxuICAgICAgXCJTZXB0ZW1iZXIgMjMgLSBPY3RvYmVyIDIyXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiQWV0aGVyXCIsXHJcbiAgICAgIFwiSG9ydXMsIHRoZSBHb2Qgb2YgdGhlIFNreSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTY29ycGlvXCIsXHJcbiAgICAgIFwiT2N0b2JlciAyMyAtIE5vdmVtYmVyIDIxXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJDb3Jyb2RlXCIsXHJcbiAgICAgIFwiUG9zZWlkb24sIHRoZSBHb2Qgb2YgdGhlIFNlYSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTYWdpdHRhcml1c1wiLFxyXG4gICAgICBcIk5vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjFcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiSW5mZXJub1wiLFxyXG4gICAgICBcIkFtYXRlcmFzdSwgdGhlIEdvZGRlc3Mgb2YgdGhlIFN1biAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYXByaWNvcm5cIixcclxuICAgICAgXCJEZWNlbWJlciAyMiAtIEphbnVhcnkgMTlcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkdhaWFcIixcclxuICAgICAgXCJJc2lzLCB0aGUgR29kZGVzcyBvZiBNYWdpYyBhbmQgTGlmZSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcXVhcml1c1wiLFxyXG4gICAgICBcIkphbnVhcnkgMjAgLSBGZWJydWFyeSAxOFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlZvbHRcIixcclxuICAgICAgXCJaZXVzLCB0aGUgR29kIG9mIFRodW5kZXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiUGlzY2VzXCIsXHJcbiAgICAgIFwiRmVicnVhcnkgMTkgLSBNYXJjaCAyMFwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTWlzdFwiLFxyXG4gICAgICBcIlN1c2Fub28sIHRoZSBHb2Qgb2YgdGhlIFNlYSBhbmQgU3Rvcm1zIChKYXBhbmVzZSlcIlxyXG4gICAgKVxyXG4gIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB6b2RpYWNTaWduczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVySW52ZW50b3J5fSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBzcGluLCBvcGVuU2xvdE1hY2hpbmVNb2RhbCwgY2xvc2VTbG90TWFjaGluZU1vZGFsLCByZXNldFNsb3RNYWNoaW5lSW1hZ2VzfSBmcm9tICcuL2dhY2hhU3BpbkZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5jb25zb2xlLmxvZyhjdXJyZW5jeUNvbnRhaW5lcilcclxuXHJcbmxldCB0ZXN0V2VhcG9uTGlzdCA9IChcInRlc3RcIilcclxuY29uc29sZS5sb2cocGxheWVySW52ZW50b3J5KTtcclxuXHJcbmRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuY29uc3Qgd2VhcG9uUm9sbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhcG9uR2VuZXJhdG9yXCIpO1xyXG53ZWFwb25Sb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvcGVuU2xvdE1hY2hpbmVNb2RhbCgpO1xyXG59KVxyXG5cclxuY29uc3Qgc3BpblNsb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwaW5TbG90QnV0dG9uXCIpO1xyXG5zcGluU2xvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCl7XHJcbiAgICBsZXQgbmV3SXRlbSA9IHNwaW4odGVzdFdlYXBvbkxpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAobmV3SXRlbSAhPSBmYWxzZSkge1xyXG4gICAgICAvLyBwbGF5ZXIuZXF1aXBJdGVtKG5ld0l0ZW0pO1xyXG4gICAgICBwbGF5ZXJJbnZlbnRvcnkucHVzaChuZXdJdGVtKVxyXG4gICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwicGxheWVySW52ZW50b3J5XCIsIHBsYXllckludmVudG9yeSlcclxuICAgIH1cclxuICAgIFxyXG59KTtcclxuXHJcbmNvbnN0IGNsb3NlU2xvdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVNsb3RcIik7XHJcbmNsb3NlU2xvdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxufSlcclxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==