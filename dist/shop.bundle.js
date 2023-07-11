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
  constructor(objective, reward, frequency, frequencyValue, timeRequired, timeSpentUnit) {
    this.objective = objective;
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

function userInterfaceManager (currentQuestList, currencyContainer, currentGoalList) {

    // Default and Persisting Events:
    // 1. Render Currency Values
    (0,_currencyFunctions__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);

    // if (currentQuestList.length <= 0 && currentGoalList.length <= 0) {
    //     showEmptyQuestAndGoals();
    // }
    
    (0,_questFunctions__WEBPACK_IMPORTED_MODULE_0__.removeCompletedQuest)(currentQuestList, currencyContainer);
    (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_2__.saveDataToLocalStorage)("currentQuestList", currentQuestList);
    (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_2__.saveDataToLocalStorage)("currencyContainer", currencyContainer);
    // createAndDisplayQuestCards(currentQuestList, currencyContainer);
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
/* harmony export */   createGoalParallax: () => (/* binding */ createGoalParallax),
/* harmony export */   createQuestParallax: () => (/* binding */ createQuestParallax),
/* harmony export */   removeEmptyState: () => (/* binding */ removeEmptyState),
/* harmony export */   showEmptyState: () => (/* binding */ showEmptyState)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


let header = document.querySelector(".gameContentHeader");

function showEmptyState () {
   
    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length <= 0) {

        let emptyStateContainer = document.createElement('div');
        
        let questContainer = document.querySelector(".questContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyQuestContainer");
        questContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Create a Quest to get started and check them here:"
        let questButton = document.createElement("button");
        questButton.classList.add("addQuestButton")
        questButton.textContent = "Add Quest +"
        emptyStateContainer.appendChild(questButton);
    
    }

    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length <= 0) {

        let emptyStateContainer = document.createElement('div');
        
        let goalContainer = document.querySelector(".goalContainer");
        emptyStateContainer.classList.add("emptyStateContainer");
        emptyStateContainer.setAttribute("id", "emptyGoalContainer");
        goalContainer.appendChild(emptyStateContainer);

        emptyStateContainer.textContent = "Set Goals and track your progress here:"
        let goalButton = document.createElement("button");
        goalButton.classList.add("addGoalButton")
        goalButton.textContent = "Add Goal +"
        emptyStateContainer.appendChild(goalButton);
    
    }
}


function removeEmptyState () {

    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length > 0) {
        const emptyQuestList = document.querySelector(".emptyStateContainer#emptyQuestContainer")
        if (emptyQuestList) {
                    emptyQuestList.remove();
                } else {
                  return;
                }
        } 

    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length > 0) {
        const emptyQuestList = document.querySelector(".emptyStateContainer#emptyGoalContainer")
        if (emptyQuestList) {
            emptyQuestList.remove();
        } else {
          return;
        }
    } 
}

let questParallax;

function createQuestParallax() {

  if (!questParallax) {
    let questContainer = document.querySelector(".questContainer");
    questParallax = document.createElement("div");
    questParallax.classList.add("questParallax");
    questContainer.appendChild(questParallax);

  }
  questParallax.textContent = "";
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
/* harmony export */   createCardTemplate: () => (/* binding */ createCardTemplate),
/* harmony export */   createEmptyCardTemplate: () => (/* binding */ createEmptyCardTemplate),
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








function getNewQuest (form) {
    let questObject = new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Quest(null, null, null, new _classes_classes_js__WEBPACK_IMPORTED_MODULE_0__.Currency(null, null), null, null, null)
    let getQuestFormObjective = form.querySelector("#objectiveInput").value;
    let getQuestFormDate = form.querySelector("#objectiveTimeFrameInput").value;
    let getQuestCurrencyType = form.querySelector("#currencyTypeInput").value;
    let getQuestCurrencyAmount = form.querySelector("#currencyAmountInput").value;

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

function validateQuestSubmission (form) {
    let getQuestFormObjective = form.querySelector("#objectiveInput").value;
    let getQuestFormDate = form.querySelector("#objectiveTimeFrameInput").value;
    let getQuestCurrencyType = form.querySelector("#currencyTypeInput").value;
    let getQuestCurrencyAmount = form.querySelector("#currencyAmountInput").value;
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
            let questFormCtx = this.parentNode;
            let newQuest = getNewQuest(questFormCtx);
            console.log(newQuest);
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

                // 2b) i) - Input Date label
                let inputDateLabel = document.createElement('label');
                // inputDateLabel.setAttribute('for', 'objectiveTimeFrameInput');
                inputDateLabel.textContent = 'Date:';
                objectiveTimeFrameLabelContainer.appendChild(inputDateLabel);

                //  2b) i) - Input Start Time (Optional)
                let inputStartTimeLabel = document.createElement('label');
                inputStartTimeLabel.setAttribute('for', 'questStartTime');
                inputStartTimeLabel.setAttribute('id', 'questStartTimeLabel');
                inputStartTimeLabel.textContent = 'Start Time (Optional):';
                objectiveTimeFrameLabelContainer.appendChild(inputStartTimeLabel);

                //  2b) i) - Input End Time (Optional)
                let inputEndTimeLabel = document.createElement('label');
                // inputTimeLabel.setAttribute('for', 'objectiveTimeFrameInput');
                inputEndTimeLabel.textContent = 'End Time (Optional):';
                objectiveTimeFrameLabelContainer.appendChild(inputEndTimeLabel);


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
                


                // const objectiveTimeFrameInput = document.createElement('div');
                // objectiveTimeFrameInput.id = 'objectiveTimeFrameInput';
                // objectiveTimeFrameInput.className = 'time-frame-input';
                // objectiveTimeFrame.appendChild(objectiveTimeFrameInput);

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


    let rewardTypeInput = document.createElement("select")
    rewardTypeInput.setAttribute("name", "rewardTypeInput")
    rewardTypeInput.classList.add("inputRewardForm");
    rewardTypeInput.setAttribute("id", "currencyTypeInput")

    for (let i = 0; i < _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies.length; i++) {
        console.log(_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i])
        let option = document.createElement("option");
        option.setAttribute("value", _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i]);
        option.textContent = `${_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.validCurrencies[i]}`;
        rewardTypeInput.appendChild(option);
    }

    let rewardAmountInput = document.createElement("input")
    rewardAmountInput.classList.add("inputRewardForm");
    rewardAmountInput.setAttribute("type", "number")
    rewardAmountInput.setAttribute("name", "rewardAmountInput")
    rewardAmountInput.setAttribute("min", "0")
    rewardAmountInput.setAttribute("max", "1000")
    rewardAmountInput.setAttribute("placeholder", "0");
    rewardAmountInput.setAttribute("id", "currencyAmountInput")


    rewardAmountInput.addEventListener("input", function() {
        if (this.value > 1000) {
            alert("This value cannot exceed the maximum of: 1000")
            this.value = 1000;
        }
        });

    rewardBox.appendChild(rewardTypeInput);
    rewardBox.appendChild(rewardAmountInput);

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
        if (checkbox) {
          checkbox.addEventListener("click", function() {
            (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.currencyAggregator)(currencyContainer, quest);
            (0,_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.displayPlayerCurrentCurrency)(currencyContainer);
            removeCompletedQuest(_data_js__WEBPACK_IMPORTED_MODULE_2__.currentQuestList);
          });
        } else {
          console.log("Checkbox element not found in the card");
        }
        
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


    if (currentQuestList == null) {
        console.log("Quest List is Empty");
        return;
    }

    else {

        (0,_indexViewFunctions_js__WEBPACK_IMPORTED_MODULE_4__.removeEmptyState)();
        (0,_indexViewFunctions_js__WEBPACK_IMPORTED_MODULE_4__.createQuestParallax)();
        let questList = document.querySelector(".questParallax");
        console.log(questList);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVyxNQUFNLGVBQWUsRUFBRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE9BQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsT0FBTztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pzRDtBQUNxRDtBQUM5RDtBQUNRO0FBQ2tFO0FBQ25EO0FBQ3BFO0FBQ0E7QUFDTztBQUNQLDBCQUEwQixzREFBSyx1QkFBdUIseURBQVE7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSDFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDd0M7QUFDcUQ7QUFDOUQ7QUFDaUI7QUFDRjtBQUNwRTtBQUNBO0FBQ0EsWUFBWSx1REFBaUI7QUFDN0I7QUFDQTtBQUNBLFlBQVkscURBQWU7QUFDM0I7QUFDQSxtRkFBNEIsQ0FBQyx1REFBaUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RUFBb0I7QUFDeEIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0REFBSSxpQkFBaUIsdURBQWlCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQWU7QUFDckIsTUFBTSxrRkFBc0Isb0JBQW9CLHFEQUFlO0FBQy9EO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2RUFBcUI7QUFDdkIsQ0FBQztBQUNELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9jbGFzc2VzL2l0ZW1TdGF0cy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2N1cnJlbmN5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2dhY2hhU3BpbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2FybW91ci8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL2VsZW1lbnRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvcmFyaXRpZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy93ZWFwb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbmRleFZpZXdGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9xdWVzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3BGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3dlYXBvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy96b2RpYWNQb3dlcnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9zaG9wLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi4vem9kaWFjUG93ZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUXVlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgZGF0ZVRvQ29tcGxldGUsIHF1ZXN0Q29tcGxldGUsIHJld2FyZCwgaWQsIG9uZU9mZkJvb2wsIGdvYWxJZCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm9uZU9mZkJvb2wgPSBvbmVPZmZCb29sO1xyXG4gICAgdGhpcy5nb2FsSWQgPSBnb2FsSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR29hbCB7XHJcbiAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCByZXdhcmQsIGZyZXF1ZW5jeSwgZnJlcXVlbmN5VmFsdWUsIHRpbWVSZXF1aXJlZCwgdGltZVNwZW50VW5pdCkge1xyXG4gICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgIHRoaXMuZnJlcXVlbmN5ID0gZnJlcXVlbmN5O1xyXG4gICAgdGhpcy5mcmVxdWVuY3lWYWx1ZSA9IGZyZXF1ZW5jeVZhbHVlO1xyXG4gICAgdGhpcy50aW1lUmVxdWlyZWQgPSB0aW1lUmVxdWlyZWQ7XHJcbiAgICB0aGlzLnRpbWVTcGVudFVuaXQgPSB0aW1lU3BlbnRVbml0O1xyXG4gICAgdGhpcy5xdWVzdHMgPSBbXTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ID0gMDtcclxuICB9XHJcblxyXG4gIGdlbmVyYXRlUXVlc3QoKSB7XHJcbiAgICBjb25zdCByZW1haW5pbmdUaW1lID0gdGhpcy50aW1lUmVxdWlyZWQgLSB0aGlzLnRvdGFsVGltZVNwZW50O1xyXG4gICAgY29uc3QgcXVlc3REdXJhdGlvbiA9IE1hdGgubWluKHRoaXMudGltZVNwZW50VW5pdCA9PT0gJ2hvdXJzJyA/IDYwIDogMSwgcmVtYWluaW5nVGltZSk7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGBTdHVkeSAke3RoaXMubmFtZX0gZm9yICR7cXVlc3REdXJhdGlvbn0gJHt0aGlzLnRpbWVTcGVudFVuaXR9YDtcclxuXHJcbiAgICBjb25zdCBxdWVzdCA9IG5ldyBRdWVzdChkZXNjcmlwdGlvbiwgcXVlc3REdXJhdGlvbiwgZmFsc2UsIHRoaXMucmV3YXJkLCBnZW5lcmF0ZVVuaXF1ZUlkKCksIGZhbHNlLCB0aGlzKTtcclxuICAgIHRoaXMucXVlc3RzLnB1c2gocXVlc3QpO1xyXG4gICAgdGhpcy50b3RhbFRpbWVTcGVudCArPSBxdWVzdER1cmF0aW9uO1xyXG5cclxuICAgIHJldHVybiBxdWVzdDtcclxuICB9XHJcblxyXG5cclxuICBsaW5rUXVlc3RUb0dvYWwocXVlc3QpIHtcclxuICAgIGlmICh0aGlzLnF1ZXN0cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhxdWVzdHMpO1xyXG4gICAgdGhpcy5xdWVzdHMucHVzaChxdWVzdCk7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ICs9IHF1ZXN0LnF1ZXN0Q29tcGxldGUgPyBxdWVzdC5kdXJhdGlvbiA6IDA7XHJcbiAgfVxyXG4gXHJcbiAgaXNHb2FsQ29tcGxldGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b3RhbFRpbWVTcGVudCA+PSB0aGlzLnRpbWVSZXF1aXJlZDtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVW5pcXVlSWQoKSB7XHJcbiAgLy8gR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIHRoZSBxdWVzdFxyXG4gIC8vIFlvdSBjYW4gdXNlIGEgbGlicmFyeSBvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiB0byBnZW5lcmF0ZSB1bmlxdWUgSURzXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNsYXNzUmVzdHJpY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBzdGF0cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgY2xhc3MgQXJtb3VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIHJhcml0eSwgc3RhdHMpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgdHlwZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3R5cGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclN0YXRzIHtcclxuICAgIGNvbnN0cnVjdG9yKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0cyA9IHRoaXMuZ2V0SW5pdGlhbEJhc2VTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHMgPSB7fTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgPSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0U3RhdChzdGF0TmFtZSkge1xyXG4gICAgICBjb25zdCBiYXNlVmFsdWUgPSB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIGNvbnN0IGVxdWlwcGVkVmFsdWUgPSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICByZXR1cm4gYmFzZVZhbHVlICsgZXF1aXBwZWRWYWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIHNldFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gKz0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdID0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHVuZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkgJiYgdGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIC09IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPD0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKSB7XHJcbiAgICAgIHN3aXRjaCAoaGVyb1R5cGUpIHtcclxuICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDYsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogOCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgZGV4dGVyaXR5OiA0LFxyXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDYsXHJcbiAgICAgICAgICAgIGNvbnN0aXR1dGlvbjogOCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA4LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA2LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA2LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDgsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyB0eXBlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV2ZWxVcCgpIHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgfHwgMTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzLmxldmVsID0gbGV2ZWwgKyAxO1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLl9za2lsbFBvaW50cyA+IDAgJiYgdGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc2tpbGxQb2ludHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2lsbFBvaW50cztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIGV4cG9ydCBjbGFzcyBQbGF5ZXJDaGFyYWN0ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc3ByaXRlSW1hZ2UsIGhlcm9UeXBlLCBlcXVpcHBlZEl0ZW1zLCBlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgICAgdGhpcy5fZWxlbWVudGFsU2VsZWN0aW9uID0gZWxlbWVudGFsU2VsZWN0aW9uO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IHRoaXMuZ2V0RWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsU2VsZWN0aW9uKTtcclxuICAgIH1cclxuICBcclxuICBcclxuICAgIGdldCBzcHJpdGVJbWFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBzcHJpdGVJbWFnZShzcHJpdGVJbWFnZSkge1xyXG4gICAgICAgIHRoaXMuX3Nwcml0ZUltYWdlID0gc3ByaXRlSW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhlcm9UeXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faGVyb1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGhlcm9UeXBlKGhlcm9UeXBlKSB7XHJcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XHJcbiAgICAgIHRoaXMuX3N0YXRzID0gbmV3IFBsYXllclN0YXRzKGhlcm9UeXBlKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHN0YXRzKHN0YXRzKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGVxdWlwcGVkSXRlbXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VxdWlwcGVkSXRlbXM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlcXVpcHBlZEl0ZW1zKGVxdWlwcGVkSXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZWxlbWVudGFsQWZmaW5pdHkoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgZWxlbWVudGFsQWZmaW5pdHkoZWxlbWVudGFsQWZmaW5pdHkpIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50YWxBZmZpbml0eSA9IGVsZW1lbnRhbEFmZmluaXR5O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWlwSXRlbShpdGVtKSB7XHJcbiAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3IgZXF1aXBwaW5nIGFuIGl0ZW1cclxuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMuZXF1aXBJdGVtU3RhdHMoaXRlbS5zdGF0cyk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgYXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gYXR0YWNrIGxvZ2ljXHJcbiAgICAgICAgY29uc29sZS5sb2coYEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BlY2lhbEF0dGFjayh0YXJnZXQpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIHNwZWNpYWwgYXR0YWNrIGxvZ2ljIGhlcmVcclxuICAgICAgICBjb25zb2xlLmxvZyhgU3BlY2lhbCBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQmlydGhkYXlJblJhbmdlKGJpcnRoZGF5LCBzdGFydERhdGUsIGVuZERhdGUpIHtcclxuICAgICAgICAvLyBDb252ZXJ0IHRoZSBiaXJ0aGRheSB0byBhIERhdGUgb2JqZWN0IGlmIGl0J3MgYSBzdHJpbmdcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURhdGUgPSB0eXBlb2YgYmlydGhkYXkgPT09ICdzdHJpbmcnID8gbmV3IERhdGUoYmlydGhkYXkpIDogYmlydGhkYXk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXlcclxuICAgICAgICBjb25zdCBiaXJ0aGRheU1vbnRoID0gYmlydGhkYXlEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXkgPSBiaXJ0aGRheURhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbW9udGggYW5kIGRheSBvZiB0aGUgYmlydGhkYXkgZmFsbCB3aXRoaW4gdGhlIHJhbmdlXHJcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0RGF5ID0gc3RhcnREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCBlbmRNb250aCA9IGVuZERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBlbmREYXkgPSBlbmREYXRlLmdldERhdGUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYXByaWNvcm4gZWRnZSBjYXNlXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMTEgJiYgYmlydGhkYXlEYXkgPiAyMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJDYXByaWNvcm5cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMCAmJiBiaXJ0aGRheURheSA8IDIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29tcGFyZSB0aGUgbW9udGggYW5kIGRheSB2YWx1ZXNcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA+IHN0YXJ0TW9udGggfHwgKGJpcnRoZGF5TW9udGggPT09IHN0YXJ0TW9udGggJiYgYmlydGhkYXlEYXkgPj0gc3RhcnREYXkpKSAmJlxyXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPCBlbmRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gZW5kTW9udGggJiYgYmlydGhkYXlEYXkgPD0gZW5kRGF5KSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIE90aGVyIG1ldGhvZHMgY2FuIGJlIGFkZGVkIGhlcmUgZm9yIGZ1cnRoZXIgZnVuY3Rpb25hbGl0eVxyXG4gICAgICBnZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuXHJcbiAgICAgICAgLy8gaWYgZWxlbWVudGFsIHNlbGVjdGlvbiBpcyBhIGJpcnRoZGF5IHByb3ZpZGVkOlxyXG4gICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICAvLyBBbGlhcyB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBvZiB0aGUgem9kaWFjIFNpZ25zIGRhdGUgcmFuZ2UgcHJvcGVydHlcclxuICAgICAgICAgICAgbGV0IGRhdGVDaGVja2VyID0gKHpvZGlhY1NpZ25zW2luZGV4XS5jb252ZXJ0RGF0ZVJhbmdlKHpvZGlhY1NpZ25zW2luZGV4XS5fZGF0ZVJhbmdlKSk7XHJcbiAgICAgICAgICAgIGxldCBiaXJ0aERheVJhbmdlQ2hlY2sgPSB0aGlzLmlzQmlydGhkYXlJblJhbmdlKGVsZW1lbnRhbFNlbGVjdGlvbiwgZGF0ZUNoZWNrZXIuc3RhcnREYXRlLCBkYXRlQ2hlY2tlci5lbmREYXRlKVxyXG5cclxuICAgICAgICAgICAgICBpZiAoYmlydGhEYXlSYW5nZUNoZWNrID09ICdDYXByaWNvcm4nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zWzldKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJpcnRoRGF5UmFuZ2VDaGVjaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICAgIH0gIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudGFsU2VsZWN0aW9uID09IHpvZGlhY1NpZ25zW2luZGV4XS5fdW5pcXVlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfVxyXG4gIH1cclxuICAgICAgXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEVsZW1lbnRhbFBvd2VyIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICB0aGlzLl9kYXRlUmFuZ2UgPSBkYXRlUmFuZ2U7XHJcbiAgICAgICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl9kZWl0eSA9IGRlaXR5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuIiwiZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzID0gW1xyXG4gICAgXCJTdGVlbFwiLFxyXG4gICAgXCJBYnlzc1wiLFxyXG4gICAgXCJaZXBoeXJcIixcclxuICAgIFwiTHVuYXJcIixcclxuICAgIFwiU29sYXJcIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJBZXRoZXJcIixcclxuICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgXCJJbmZlcm5vXCIsXHJcbiAgICBcIkdhaWFcIixcclxuICAgIFwiVm9sdFwiLFxyXG4gICAgXCJNaXN0XCIsXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVSYXJpdHkgPSBbXHJcbiAgICB7IHJhcml0eTogXCJub3JtYWxcIiwgY2hhbmNlOiA0MH0sXHJcbiAgICB7IHJhcml0eTogXCJ1bmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICB7IHJhcml0eTogXCJyYXJlXCIsIGNoYW5jZTogMTggfSxcclxuICAgIHsgcmFyaXR5OiBcImVwaWNcIiwgY2hhbmNlOiA5IH0sXHJcbiAgICB7IHJhcml0eTogXCJsZWdlbmRhcnlcIiwgY2hhbmNlOiAzIH0sXHJcbl1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3RhdHMgPSB7XHJcbiAgbm9ybWFsOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA1LCBtYXg6IDEwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBpbnRlbGxpZ2VuY2U6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwLCBtYXg6IDIwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMDUsIG1heDogMC4wMiB9XHJcbiAgfSxcclxuICB1bmNvbW1vbjoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNy41LCBtYXg6IDE1IH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEuNSwgbWF4OiA3LjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAxNSwgbWF4OiAzMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDIsIG1heDogMC4wNiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIHJhcmU6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDMsIG1heDogMTUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiAzMCwgbWF4OiA2MCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMDYsIG1heDogMC4xMiB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGVwaWM6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDI1LCBtYXg6IDUwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGRleHRlcml0eTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDUsIG1heDogMjUgfSxcclxuICAgIGNyaXREYW1hZ2U6IHsgbWluOiA1MCwgbWF4OiAxMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjEyLCBtYXg6IDAuMjQgfSAvLyBVcGRhdGVkIG1pbiBhbmQgbWF4XHJcbiAgfSxcclxuICBsZWdlbmRhcnk6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgc3RyZW5ndGg6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjb25zdGl0dXRpb246IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDEwMCwgbWF4OiAyMDAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjI0LCBtYXg6IDAuMyB9IC8vIFVwZGF0ZWQgbWF4XHJcbiAgfVxyXG59O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlUHJlZml4ID0ge1xyXG4gICAgbm9ybWFsOiBbXHJcbiAgICAgIFwiT3JkaW5hcnlcIiwgXCJDb21tb25cIiwgXCJQbGFpblwiLCBcIlJlZ3VsYXJcIiwgXCJCYXNpY1wiXHJcbiAgICBdLFxyXG4gICAgdW5jb21tb246IFtcclxuICAgICAgXCJVbmNvbW1vblwiLCBcIlN0cmFuZ2VcIiwgXCJTcGVjaWFsXCIsIFwiRGlzdGluY3RpdmVcIiwgXCJBYm5vcm1hbFwiXHJcbiAgICBdLFxyXG4gICAgcmFyZTogW1xyXG4gICAgICBcIlJhcmVcIiwgXCJQcmVjaW91c1wiLCBcIkV4cXVpc2l0ZVwiLCBcIk1hZ25pZmljZW50XCIsIFwiRWxpdGVcIlxyXG4gICAgXSxcclxuICAgIGVwaWM6IFtcclxuICAgICAgXCJFcGljXCIsIFwiR3JhbmRcIiwgXCJJbGx1c3RyaW91c1wiLCBcIlRyYW5zY2VuZGVudFwiLCBcIk1hamVzdGljXCJcclxuICAgIF0sXHJcbiAgICBsZWdlbmRhcnk6IFtcclxuICAgICAgXCJMZWdlbmRhcnlcIiwgXCJVbHRpbWF0ZVwiLCBcIkV0ZXJuYWxcIiwgXCJJbnZpbmNpYmxlXCIsIFwiR29kbGlrZVwiXHJcbiAgICBdXHJcbiAgfTtcclxuXHJcbiAgZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVN1ZmZpeCA9IHtcclxuICAgIFN0ZWVsOiBcIm9mIFdhclwiLFxyXG4gICAgQWJ5c3M6IFwib2YgV2FpbGluZ1wiLFxyXG4gICAgWmVwaHlyOiBcIm9mIEhvd2xpbmdcIixcclxuICAgIEx1bmFyOiBcIm9mIE1vb25saWdodFwiLFxyXG4gICAgU29sYXI6IFwib2YgU3VubGlnaHRcIixcclxuICAgIFRlcnJhOiBcIm9mIFRlY3RvbmljXCIsXHJcbiAgICBBZXRoZXI6IFwib2YgR3Jhdml0eVwiLFxyXG4gICAgQ29ycm9kZTogXCJvZiBQb2lzb25cIixcclxuICAgIEluZmVybm86IFwib2YgQnVybmluZ1wiLFxyXG4gICAgR2FpYTogXCJvZiBOYXR1cmVcIixcclxuICAgIFZvbHQ6IFwib2YgU2hvY2tpbmdcIixcclxuICAgIE1pc3Q6IFwib2YgRnJlZXppbmdcIlxyXG4gIH07IiwiaW1wb3J0IEdHVG9rZW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIlxyXG5pbXBvcnQgQ2hlc3RLZXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCJcclxuXHJcblxyXG5jb25zdCB2YWxpZEN1cnJlbmNpZXMgPSBbXCJHR1Rva2Vuc1wiLCBcIkNoZXN0S2V5c1wiXVxyXG5jb25zdCBjdXJyZW5jeUltYWdlcyA9IHtcclxuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXHJcbiAgICBDaGVzdEtleXM6IENoZXN0S2V5SW1hZ2VcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcmV3YXJkVXRpbGl0aWVzID0ge1xyXG5cclxuICAgIHZhbGlkQ3VycmVuY2llczogWy4uLnZhbGlkQ3VycmVuY2llc10sXHJcbiAgICBnZXRSZXdhcmRJbWFnZTogZnVuY3Rpb24ocXVlc3QpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcmV3YXJkVHlwZSA9IHF1ZXN0LnJld2FyZC50eXBlO1xyXG5cclxuICAgICAgICBpZiAodmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHJld2FyZFR5cGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW5jeUltYWdlc1tyZXdhcmRUeXBlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgLy8gUmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBvciBoYW5kbGUgaW52YWxpZCByZXdhcmQgdHlwZXNcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IChjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgZm9yIChsZXQgaW5kZXggaW4gY3VycmVuY3lDb250YWluZXIpIHtcclxuICAgICAgICBsZXQgY3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZX1Vc2VySW50ZXJmYWNlYCk7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnR9YCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3lDb250YWluZXJbaW5kZXhdLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tIFwiLi9jbGFzc2VzL2NsYXNzZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgY3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50UXVlc3RMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVudEdvYWxMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRHb2FsTGlzdCcpIHx8IFtdO1xyXG5leHBvcnQgbGV0IGN1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbmN5Q29udGFpbmVyJykgfHwgW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJDaGVzdEtleXNcIiwgMCldO1xyXG5leHBvcnQgbGV0IHBsYXllckludmVudG9yeSA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJJbnZlbnRvcnknKSB8fCBbXTtcclxuZXhwb3J0IGxldCBwbGF5ZXJFcXVpcHBlZEl0ZW1zID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckVxdWlwcGVkSXRlbXMnKSB8fCBbXTsiLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgdGFza0FuZEdvYWxDb250cm9sbGVyLCByZW1vdmVFbXB0eVRhc2tHb2FsUHJvbXB0LCBjcmVhdGVUYXNrQ29udGFpbmVyLCBzaG93RW1wdHlRdWVzdEFuZEdvYWxzRW1wdHlRdWVzdEFuZEdvYWxzIH0gZnJvbSBcIi4vaW5kZXhWaWV3RnVuY3Rpb25zXCI7XHJcbi8vIGltcG9ydCB7IGN1cnJlbnRHb2FsTGlzdCwgY3VycmVudFF1ZXN0TGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudEdvYWxMaXN0KSB7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBhbmQgUGVyc2lzdGluZyBFdmVudHM6XHJcbiAgICAvLyAxLiBSZW5kZXIgQ3VycmVuY3kgVmFsdWVzXHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbiAgICAvLyBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCAmJiBjdXJyZW50R29hbExpc3QubGVuZ3RoIDw9IDApIHtcclxuICAgIC8vICAgICBzaG93RW1wdHlRdWVzdEFuZEdvYWxzKCk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIC8vIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7IGdlbmVyYXRlUmFuZG9tV2VhcG9uIH0gZnJvbSBcIi4vc2hvcEZ1bmN0aW9uXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaGVscGVyRnVuY3Rpb25zL2ltYWdlSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBnZXRFbGVtZW50SW1hZ2UsIGdldFJhcml0eUltYWdlLCBnZXRXZWFwb25JbWFnZSB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9nZXRJdGVtSW1hZ2VcIjtcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuICBcclxuZnVuY3Rpb24gY2hlY2tWYWxpZEN1cnJlbmN5QW1vdW50KGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBpZiAoY3VycmVuY3lDb250YWluZXJbMF0uYW1vdW50IDwgMjApIHtcclxuICAgICAgYWxlcnQoXCJJTlNVRkZJQ0lFTlQgR0cgVE9LRU5TXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW5jeUNvbnRhaW5lclswXS5hbW91bnQgLT0gMjA7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVNsb3RNYWNoaW5lSXRlbSAoaGVyb1NlbGVjdGlvbikge1xyXG4gICAvLyBHZW5lcmF0ZSB0aGUgd2VhcG9uIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgdXNpbmcgdGhlIGdlbmVyYXRlUmFuZG9tV2VhcG9uIGZ1bmN0aW9uXHJcbiAgIGxldCBnZW5lcmF0ZWRXZWFwb24gPSBnZW5lcmF0ZVJhbmRvbVdlYXBvbihoZXJvU2VsZWN0aW9uKTtcclxuXHJcbiAgIC8vIFBhcnNlIHRoZSB3ZWFwb24gQ2xhc3MgZGF0YSB0byBiZSB1c2VkIGZvciBmcm9udCBlbmQgaW1hZ2VzXHJcbiAgIGxldCByZXN1bHRpbmdUeXBlID0gZ2VuZXJhdGVkV2VhcG9uLl90eXBlO1xyXG4gICBsZXQgcmVzdWx0aW5nUmFyaXR5ID0gZ2VuZXJhdGVkV2VhcG9uLl9yYXJpdHk7XHJcbiAgIGxldCByZXN1bHRpbmdFbGVtZW50ID0gZ2VuZXJhdGVkV2VhcG9uLl9lbGVtZW50O1xyXG5cclxuICAgLy8gUGFzcyB0aGUgZGF0YSB0byBhIGZpbmQgZnVuY3Rpb24gdGhhdCBsb2NhdGVzIHRoZSBjaGVja3MgZWFjaCBpbWFnZSAoc3RyaW5nKSBVUkwgdG8gc2VlIGlmIGl0IGluY2x1ZGVzIHRoZSBwYXJzZWQgZGF0YSAgIFxyXG4gICAvLyBJZiBkYXRhIG1hdGNoZXMsIHJldHVybiB0aGUgYXBwcm9wcmlhdGUgaW1hZ2UgbGluayBhcyB2YXJpYWJsZSBcclxuICAgbGV0IHNlbGVjdGVkVHlwZUltYWdlID0gZ2V0V2VhcG9uSW1hZ2UocmVzdWx0aW5nVHlwZSk7XHJcbiAgIGxldCBzZWxlY3RlZFJhcml0eUltYWdlID0gZ2V0UmFyaXR5SW1hZ2UocmVzdWx0aW5nUmFyaXR5KTtcclxuICAgbGV0IHNlbGVjdGVkRWxlbWVudEltYWdlID0gZ2V0RWxlbWVudEltYWdlKHJlc3VsdGluZ0VsZW1lbnQpO1xyXG4gICBcclxuICAgLy8gSW1hZ2VzIGZvciB0aGUgZXF1aXBtZW50IHJlZWxcclxuICAgY29uc3QgZXF1aXBtZW50UmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcXVpcG1lbnRSZWVsJyk7XHJcblxyXG4gICAvLyBTZWxlY3RlZCBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkRXF1aXBtZW50U3ltYm9sID0gIGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFR5cGVJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIHRvcCBzbG90XHJcbiAgIGNvbnN0IHRvcEVxdWlwbWVudFN5bWJvbCA9IGVxdWlwbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BFcXVpcG1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHt3ZWFwb25JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uSW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCBib3R0b20gc2xvdFxyXG4gICBjb25zdCBib3R0b21FcXVpcG1lbnRTeW1ib2wgPSBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tRXF1aXBtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX0nKWBcclxuICAgICBcclxuICAgXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIHJhcml0eSByZWVsXHJcbiAgIGNvbnN0IHJhcml0eVJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFyaXR5UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgbWlkZGxlIHNsb3QgXHJcbiAgIGNvbnN0IHNlbGVjdGVkUmFyaXR5U3ltYm9sID0gIHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRSYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzZWxlY3RlZFJhcml0eUltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCByYXJpdHkgY2FzZSAtLSAybmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wUmFyaXR5U3ltYm9sID0gcmFyaXR5UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcFJhcml0eVN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3Jhcml0eUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYXJpdHlJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbVJhcml0eVN5bWJvbCA9IHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21SYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyYXJpdHlJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFyaXR5SW1hZ2VzLmxlbmd0aCldfScpYFxyXG4gICAgICBcclxuXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIGVsZW1lbnQgcmVlbFxyXG4gICBjb25zdCBlbGVtZW50UmVlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbGVtZW50UmVlbCcpXHJcblxyXG4gICAvLyBTZWxlY3RlZCBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICBjb25zdCBzZWxlY3RlZEVsZW1lbnRTeW1ib2wgPSAgZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJylcclxuICAgc2VsZWN0ZWRFbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2VsZWN0ZWRFbGVtZW50SW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIGVsZW1lbnQgY2FzZSAtLSAzcmQgcmVlbCwgdG9wIHNsb3RcclxuICAgY29uc3QgdG9wRWxlbWVudFN5bWJvbCA9IGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2VsZW1lbnRJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZWxlbWVudEltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIGJvdHRvbSBzbG90XHJcbiAgIGNvbnN0IGJvdHRvbUVsZW1lbnRTeW1ib2wgPSBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbUVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsZW1lbnRJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICByZXR1cm4gZ2VuZXJhdGVkV2VhcG9uO1xyXG4gfVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGluIChoZXJvU2VsZWN0aW9uLCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgIGlmIChjaGVja1ZhbGlkQ3VycmVuY3lBbW91bnQoY3VycmVuY3lDb250YWluZXIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlU2xvdE1hY2hpbmVJdGVtKGhlcm9TZWxlY3Rpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXMgKCkge1xyXG4gICAgY29uc3Qgc3ltYm9sRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN5bWJvbFwiKTtcclxuICAgIGNvbnNvbGUubG9nKHN5bWJvbEVsZW1lbnRzKTtcclxuXHJcbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgc3ltYm9sIGVsZW1lbnRzXHJcbiAgICAgIHN5bWJvbEVsZW1lbnRzLmZvckVhY2goKHN5bWJvbEVsZW1lbnQpID0+IHtcclxuICAgICAgICBzeW1ib2xFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiXCI7XHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICBleHBvcnQgZnVuY3Rpb24gb3BlblNsb3RNYWNoaW5lTW9kYWwoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2xvdE1hY2hpbmVNb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2VTbG90TWFjaGluZU1vZGFsKCkge1xyXG4gICAgcmVzZXRTbG90TWFjaGluZUltYWdlcygpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3RNYWNoaW5lTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiIsImltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSBcIi4vaW1hZ2VIYW5kbGVyXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy93ZWFwb25zJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgYXJtb3VySW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvYXJtb3VyJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgZWxlbWVudEltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvcmFyaXRpZXMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlICh3ZWFwb24pIHtcclxuLy8gICAgIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG4vLyAgICAgcmV0dXJuIHdlYXBvbkltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhcG9uSW1hZ2Uod2VhcG9uKSB7XHJcbiAgaWYgKCF3ZWFwb24gfHwgdHlwZW9mIHdlYXBvbiAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgLy8gSW52YWxpZCB3ZWFwb24gcGFyYW1ldGVyLCBoYW5kbGUgdGhlIGVycm9yIG9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCB3ZWFwb25JbWFnZVVybCA9IHdlYXBvbkltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMod2VhcG9uKSk7XHJcblxyXG4gIGlmICghd2VhcG9uSW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSB3ZWFwb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpO1xyXG4gICAgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICAgIC8vIEltYWdlIG5vdCBmb3VuZCBmb3IgdGhlIGdpdmVuIHdlYXBvbiwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlIChhcm1vdXIpIHtcclxuLy8gICAgIGxldCBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG4vLyAgICAgcmV0dXJuIGFybW91ckltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXJtb3VySW1hZ2UoYXJtb3VyKSB7XHJcbiAgaWYgKCFhcm1vdXIgfHwgdHlwZW9mIGFybW91ciAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGFybW91cikpO1xyXG5cclxuICBpZiAoIWFybW91ckltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gYXJtb3VyLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFJhcml0eUltYWdlIChyYXJpdHkpIHtcclxuLy8gICAgIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG4vLyAgICAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlIChlbGVtZW50KSB7XHJcbi8vICAgICBsZXQgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKGltYWdlID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuLy8gICAgIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZShyYXJpdHkpIHtcclxuICBpZiAoIXJhcml0eSB8fCB0eXBlb2YgcmFyaXR5ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCByYXJpdHlJbWFnZVVybCA9IHJhcml0eUltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmFyaXR5KSk7XHJcblxyXG4gIGlmICghcmFyaXR5SW1hZ2VVcmwpIHtcclxuICAgIGNvbnN0IHJlc3VsdGluZ1R5cGUgPSByYXJpdHkgKyBcIlJhcml0eVwiO1xyXG4gICAgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJhcml0eUltYWdlVXJsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEltYWdlKGVsZW1lbnQpIHtcclxuICBpZiAoIWVsZW1lbnQgfHwgdHlwZW9mIGVsZW1lbnQgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKGVsZW1lbnQpKTtcclxuXHJcblxyXG4gIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gZWxlbWVudC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgZWxlbWVudEltYWdlVXJsID0gZWxlbWVudEltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghZWxlbWVudEltYWdlVXJsKSB7XHJcbiAgICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRJbWFnZVVybDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtSW1hZ2Uoc3RyaW5nKSB7XHJcblxyXG4gIGxldCBpdGVtSW1hZ2VVcmw7XHJcblxyXG4gIGlmIChzdHJpbmcudHlwZSA9PT0gXCJ3ZWFwb25cIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0V2VhcG9uSW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiYXJtb3VyXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEFybW91ckltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcInJhcml0eVwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRSYXJpdHlJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJlbGVtZW50XCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldEVsZW1lbnRJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXRlbUltYWdlVXJsO1xyXG59IiwiLy8gd2hlcmUgXCJyXCIgaXMgYSByZXF1aXJlLmNvbnRleHQgZnVuY3Rpb25cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW1wb3J0QWxsSW1hZ2VzKHIpIHtcclxuICAgIGxldCBpbWFnZXMgPSBbXTtcclxuXHJcbiAgICAvLyBrZXlzIGlzIGFuIGFycmF5IHRoYXQgc3RvcmVzIGFsbCB0aGUgZmlsZW5hbWVzIHJldHVybmVkIGJ5IHIua2V5cygpXHJcbiAgICBjb25zdCBrZXlzID0gci5rZXlzKCk7XHJcblxyXG4gICAgLy8gbGVuZ3RoIHNvdHJlcyB0aGUgbGVuZ3RoIG9mIHRoZSBrZXlzIGFycmF5XHJcbiAgICBjb25zdCBsZW5ndGggPSBrZXlzLmxlbmd0aDtcclxuICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgaW1hZ2VzLnB1c2gocihrZXkpKTtcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiBpbWFnZXM7XHJcbiAgfVxyXG5cclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1JlZCBEZW1vbiBIZWxtLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9hcm1vdXIvUmVkIERlbW9uIEhlbG0ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9hcm1vdXIgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hYnlzcy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvYWJ5c3MucG5nXCIsXG5cdFwiLi9hZXRoZXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FldGhlci5wbmdcIixcblx0XCIuL2NvcnJvZGUucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2NvcnJvZGUucG5nXCIsXG5cdFwiLi9nYWlhLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9nYWlhLnBuZ1wiLFxuXHRcIi4vaW5mZXJuby5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvaW5mZXJuby5wbmdcIixcblx0XCIuL2x1bmFyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9sdW5hci5wbmdcIixcblx0XCIuL21pc3QucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL21pc3QucG5nXCIsXG5cdFwiLi9zb2xhci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc29sYXIucG5nXCIsXG5cdFwiLi9zdGVlbC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvc3RlZWwucG5nXCIsXG5cdFwiLi90ZXJyYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdGVycmEucG5nXCIsXG5cdFwiLi92b2x0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy92b2x0LnBuZ1wiLFxuXHRcIi4vemVwaHlyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy96ZXBoeXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2VwaWNSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2VwaWNSYXJpdHkucG5nXCIsXG5cdFwiLi9sZWdlbmRhcnlSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL2xlZ2VuZGFyeVJhcml0eS5wbmdcIixcblx0XCIuL25vcm1hbFJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvbm9ybWFsUmFyaXR5LnBuZ1wiLFxuXHRcIi4vcmFyZVJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvcmFyZVJhcml0eS5wbmdcIixcblx0XCIuL3VuY29tbW9uUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy91bmNvbW1vblJhcml0eS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWJ5c3NTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0FieXNzU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvQ29ycm9zaW9uU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0dhaWFTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0dhaWFTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vSW5mZXJub1Nob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvSW5mZXJub1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9MdW5hclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTHVuYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTWlzdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvTWlzdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9SdW5lU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9SdW5lU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1NvbGFyU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Tb2xhclNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Wb2x0U2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9Wb2x0U2hvcnRTd29yZC5wbmdcIixcblx0XCIuL1plcGh5clNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvWmVwaHlyU2hvcnRTd29yZC5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMgc3luYyBcXFxcLihwbmcpJFwiOyIsImltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbnRHb2FsTGlzdCB9IGZyb20gXCIuL2RhdGFcIjtcclxuXHJcbmxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dFbXB0eVN0YXRlICgpIHtcclxuICAgXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPD0gMCkge1xyXG5cclxuICAgICAgICBsZXQgZW1wdHlTdGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBxdWVzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHlTdGF0ZUNvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1wdHlRdWVzdENvbnRhaW5lclwiKTtcclxuICAgICAgICBxdWVzdENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIGEgUXVlc3QgdG8gZ2V0IHN0YXJ0ZWQgYW5kIGNoZWNrIHRoZW0gaGVyZTpcIlxyXG4gICAgICAgIGxldCBxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgcXVlc3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImFkZFF1ZXN0QnV0dG9uXCIpXHJcbiAgICAgICAgcXVlc3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBRdWVzdCArXCJcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0QnV0dG9uKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjdXJyZW50R29hbExpc3QubGVuZ3RoIDw9IDApIHtcclxuXHJcbiAgICAgICAgbGV0IGVtcHR5U3RhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgICAgICBlbXB0eVN0YXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eVN0YXRlQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbXB0eUdvYWxDb250YWluZXJcIik7XHJcbiAgICAgICAgZ29hbENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eVN0YXRlQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZW1wdHlTdGF0ZUNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiU2V0IEdvYWxzIGFuZCB0cmFjayB5b3VyIHByb2dyZXNzIGhlcmU6XCJcclxuICAgICAgICBsZXQgZ29hbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgZ29hbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWRkR29hbEJ1dHRvblwiKVxyXG4gICAgICAgIGdvYWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBHb2FsICtcIlxyXG4gICAgICAgIGVtcHR5U3RhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbEJ1dHRvbik7XHJcbiAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbXB0eVN0YXRlICgpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlRdWVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlRdWVzdENvbnRhaW5lclwiKVxyXG4gICAgICAgIGlmIChlbXB0eVF1ZXN0TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5UXVlc3RMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgaWYgKGN1cnJlbnRHb2FsTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlRdWVzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVtcHR5U3RhdGVDb250YWluZXIjZW1wdHlHb2FsQ29udGFpbmVyXCIpXHJcbiAgICAgICAgaWYgKGVtcHR5UXVlc3RMaXN0KSB7XHJcbiAgICAgICAgICAgIGVtcHR5UXVlc3RMaXN0LnJlbW92ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxubGV0IHF1ZXN0UGFyYWxsYXg7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUXVlc3RQYXJhbGxheCgpIHtcclxuXHJcbiAgaWYgKCFxdWVzdFBhcmFsbGF4KSB7XHJcbiAgICBsZXQgcXVlc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgcXVlc3RQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBxdWVzdFBhcmFsbGF4LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgcXVlc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RQYXJhbGxheCk7XHJcblxyXG4gIH1cclxuICBxdWVzdFBhcmFsbGF4LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxubGV0IGdvYWxQYXJhbGxheDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHb2FsUGFyYWxsYXgoKSB7XHJcblxyXG4gIGlmICghZ29hbFBhcmFsbGF4KSB7XHJcbiAgICBsZXQgZ29hbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENvbnRhaW5lclwiKTtcclxuICAgIGdvYWxQYXJhbGxheCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBnb2FsUGFyYWxsYXguY2xhc3NMaXN0LmFkZChcImdvYWxQYXJhbGxheFwiKTtcclxuICAgIGdvYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoZ29hbFBhcmFsbGF4KTtcclxuXHJcbiAgfVxyXG4gIGdvYWxQYXJhbGxheC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGtleSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHBhcnNpbmcgSlNPTiBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIGZvciBrZXkgJyR7a2V5fSc6YCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9IiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzL2NsYXNzZXMuanMnXHJcbmltcG9ydCB7IHJld2FyZFV0aWxpdGllcywgY3VycmVuY3lBZ2dyZWdhdG9yLCBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IGN1cnJlbnRRdWVzdExpc3QgfSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVRdWVzdFBhcmFsbGF4LCBjcmVhdGVRdWVzdENvbnRhaW5lciwgcXVlc3RDb250cm9sbGVyLCByZW1vdmVFbXB0eVN0YXRlIH0gZnJvbSAnLi9pbmRleFZpZXdGdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoZm9ybSkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbCwgbnVsbCwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjb2JqZWN0aXZlSW5wdXRcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNvYmplY3RpdmVUaW1lRnJhbWVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNjdXJyZW5jeVR5cGVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbmN5QW1vdW50SW5wdXRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBwYXJzZUludChnZXRRdWVzdEN1cnJlbmN5QW1vdW50KTtcclxuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcclxuICAgIHF1ZXN0T2JqZWN0Lm9uZU9mZkJvb2wgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LmdvYWxJZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZVF1ZXN0U3VibWlzc2lvbiAoZm9ybSkge1xyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcihcIiNvYmplY3RpdmVJbnB1dFwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI29iamVjdGl2ZVRpbWVGcmFtZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lUeXBlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbmN5VHlwZUlucHV0XCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVuY3lBbW91bnRJbnB1dFwiKS52YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVtcHR5Q2FyZFRlbXBsYXRlICgpIHtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJlbXB0eUNhcmRcIik7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSBDYXJkIENvbnRlbnRcclxuICAgIGxldCBjYXJkQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjYXJkQ29udGVudC5jbGFzc0xpc3QuYWRkKFwiZW1wdHlDYXJkQ29udGVudFwiKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZENvbnRlbnQpO1xyXG5cclxuICAgIC8vIDEuIFN1Ym1pdCBidXR0b24gQ09OVEFJTkVSIGNvbnRlbnRcclxuICAgIGxldCBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VibWl0TmV3UXVlc3RCdXR0b25Db250YWluZXJcIik7XHJcbiAgICBjYXJkQ29udGVudC5hcHBlbmRDaGlsZChzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gMWEpIFN1Ym1pdCBOZXcgUXVlc3QgQnV0dG9uXHJcbiAgICAgICAgY29uc3Qgc3VtYml0TmV3UXVlc3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgIHN1bWJpdE5ld1F1ZXN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXROZXdRdWVzdEJ1dHRvblwiKTtcclxuICAgICAgICBzdW1iaXROZXdRdWVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGV0IHF1ZXN0Rm9ybUN0eCA9IHRoaXMucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgbGV0IG5ld1F1ZXN0ID0gZ2V0TmV3UXVlc3QocXVlc3RGb3JtQ3R4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3UXVlc3QpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc3VtYml0TmV3UXVlc3RCdXR0b24uaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcclxuICAgICAgICBzdWJtaXROZXdRdWVzdEJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChzdW1iaXROZXdRdWVzdEJ1dHRvbik7XHJcblxyXG5cclxuICAgIC8vIDIuIE9iamVjdGl2ZSBDT05UQUlORVIgY29udGVudCAtIGluY2x1ZGVzIHVzZXIgb2JqZWN0aXZlIHRleHR1YWwgaW5wdXQgYW5kIHRpbWUgaW5wdXRzXHJcbiAgICBsZXQgb2JqZWN0aXZlQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVDb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVDb250ZW50Q29udGFpbmVyXCIpO1xyXG4gICAgY2FyZENvbnRlbnQuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQ29udGVudENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gMmEpIE9iamVjdGl2ZSBUZXh0IElucHV0IENvbnRhaW5lclxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUZXh0SW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGV4dElucHV0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgLy8gMmEpIC0gT2JqZWN0aXZlIFRleHQgXHJcbiAgICAgICAgICAgIGxldCBvYmplY3RpdmVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRGVmaW5lIHlvdXIgcXVlc3QgaGVyZS4uLlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGV4dElucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjcwXCIpOyAvLyBTZXQgY2hhcmFjdGVyIGxpbWl0IHRvIDcwXHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm9iamVjdGl2ZVRleHRJbnB1dFwiKTsgXHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRleHRJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUZXh0SW5wdXQpO1xyXG4gICAgXHJcblxyXG4gICAgICAgIC8vIDJiKSBPYmplY3RpdmUgVGltZWZyYW1lIEVsZW1lbnRzIENvbnRhaW5lclxyXG4gICAgICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyXCIpO1xyXG4gICAgICAgIG9iamVjdGl2ZUNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQob2JqZWN0aXZlVGltZUZyYW1lRWxlbWVudHNDb250YWluZXIpXHJcblxyXG4gICAgICAgICAgICAvLyAyYikgaSkgT2JqZWN0aXZlIFRpbWVmcmFtZSBMYWJlbCBDb250YWluZXJcclxuICAgICAgICAgICAgbGV0IG9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lTGFiZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm9iamVjdGl2ZVRpbWVGcmFtZUxhYmVsQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVFbGVtZW50c0NvbnRhaW5lci5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGkpIC0gSW5wdXQgRGF0ZSBsYWJlbFxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0RGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIC8vIGlucHV0RGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ29iamVjdGl2ZVRpbWVGcmFtZUlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dERhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dERhdGVMYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gIDJiKSBpKSAtIElucHV0IFN0YXJ0IFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0U3RhcnRUaW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdxdWVzdFN0YXJ0VGltZScpO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRTdGFydFRpbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3F1ZXN0U3RhcnRUaW1lTGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIGlucHV0U3RhcnRUaW1lTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhcnQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFN0YXJ0VGltZUxhYmVsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAgMmIpIGkpIC0gSW5wdXQgRW5kIFRpbWUgKE9wdGlvbmFsKVxyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0RW5kVGltZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICAgICAgICAgIC8vIGlucHV0VGltZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ29iamVjdGl2ZVRpbWVGcmFtZUlucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBpbnB1dEVuZFRpbWVMYWJlbC50ZXh0Q29udGVudCA9ICdFbmQgVGltZSAoT3B0aW9uYWwpOic7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dEVuZFRpbWVMYWJlbCk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gMmIpIGlpKSBPYmplY3RpdmUgVGltZWZyYW1lIElucHV0IENvbnRhaW5lclxyXG4gICAgICAgICAgICBsZXQgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUVsZW1lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBvYmplY3RpdmUgdGltZSBmcmFtZSBpbnB1dFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncXVlc3REYXRlJyk7XHJcbiAgICAgICAgICAgICAgICBkYXRlSW5wdXQuaWQgPSAncXVlc3REYXRlJztcclxuICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBtaW5pbXVtIGRhdGUgdG8gdG9kYXlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIHRvZGF5KTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmplY3RpdmVUaW1lRnJhbWVJbnB1dHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBzdGFydCB0aW1lIGlucHV0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3F1ZXN0U3RhcnRUaW1lJyk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5pZCA9ICdxdWVzdFN0YXJ0VGltZSc7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVJbnB1dC5jbGFzc05hbWUgPSAnZm9ybUlucHV0JztcclxuICAgICAgICAgICAgICAgIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFydFRpbWVJbnB1dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gMmIpIGlpKSAtIENyZWF0ZSBlbmQgdGltZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdxdWVzdEVuZFRpbWUnKTtcclxuICAgICAgICAgICAgICAgIGVuZFRpbWVJbnB1dC5pZCA9ICdxdWVzdEVuZFRpbWUnO1xyXG4gICAgICAgICAgICAgICAgZW5kVGltZUlucHV0LmNsYXNzTmFtZSA9ICdmb3JtSW5wdXQnO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVuZFRpbWVJbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc3Qgb2JqZWN0aXZlVGltZUZyYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0LmlkID0gJ29iamVjdGl2ZVRpbWVGcmFtZUlucHV0JztcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdGl2ZVRpbWVGcmFtZUlucHV0LmNsYXNzTmFtZSA9ICd0aW1lLWZyYW1lLWlucHV0JztcclxuICAgICAgICAgICAgICAgIC8vIG9iamVjdGl2ZVRpbWVGcmFtZS5hcHBlbmRDaGlsZChvYmplY3RpdmVUaW1lRnJhbWVJbnB1dCk7XHJcblxyXG4gICAgLy8gMy4gUmV3YXJkIENPTlRBSU5FUiBjb250ZW50IC0gaW5jbHVkZXMgdXNlciByZXdhcmQgdHlwZSBpbnB1dCBhbmQgcmV3YXJkIGFtb3VudCBpbnB1dFxyXG4gICAgbGV0IHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRTZWxlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInJld2FyZFNlbGVjdGlvbkNvbnRhaW5lclwiKTtcclxuICAgIGNhcmRDb250ZW50LmFwcGVuZENoaWxkKHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgLy8gM2EpIFJld2FyZCBCb3ggUGFyZW50IEVsZW1lbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveElucHV0XCIpO1xyXG4gICAgICAgIHJld2FyZFNlbGVjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICAgICAgLy8gM2EpIC0gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpOyAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UpXHJcblxyXG4gICAgICAgICAgICAvLyAzYSkgLSBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuXHJcbiAgICBsZXQgcmV3YXJkVHlwZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKVxyXG4gICAgcmV3YXJkVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZXdhcmRUeXBlSW5wdXRcIilcclxuICAgIHJld2FyZFR5cGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgcmV3YXJkVHlwZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VycmVuY3lUeXBlSW5wdXRcIilcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJld2FyZFV0aWxpdGllcy52YWxpZEN1cnJlbmNpZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKVxyXG4gICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCByZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldKTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBgJHtyZXdhcmRVdGlsaXRpZXMudmFsaWRDdXJyZW5jaWVzW2ldfWA7XHJcbiAgICAgICAgcmV3YXJkVHlwZUlucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHJld2FyZEFtb3VudElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXHJcbiAgICByZXdhcmRBbW91bnRJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRSZXdhcmRGb3JtXCIpO1xyXG4gICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKVxyXG4gICAgcmV3YXJkQW1vdW50SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInJld2FyZEFtb3VudElucHV0XCIpXHJcbiAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIwXCIpXHJcbiAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIxMDAwXCIpXHJcbiAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjBcIik7XHJcbiAgICByZXdhcmRBbW91bnRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbmN5QW1vdW50SW5wdXRcIilcclxuXHJcblxyXG4gICAgcmV3YXJkQW1vdW50SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlID4gMTAwMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIlRoaXMgdmFsdWUgY2Fubm90IGV4Y2VlZCB0aGUgbWF4aW11bSBvZjogMTAwMFwiKVxyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMTAwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZFR5cGVJbnB1dCk7XHJcbiAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQW1vdW50SW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRUZW1wbGF0ZSAodHlwZSkge1xyXG4gXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcblxyXG4gICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IG9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBsZXQgb2JqZWN0aXZlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVDb250ZW50XCIpXHJcblxyXG4gICAgbGV0IG9iamVjdGl2ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb2JqZWN0aXZlVGV4dC5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGV4dFwiKTtcclxuICAgIGxldCBvYmplY3RpdmVUaW1lRnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgb2JqZWN0aXZlVGltZUZyYW1lLmNsYXNzTGlzdC5hZGQoXCJvYmplY3RpdmVUaW1lRnJhbWVcIik7XHJcblxyXG4gICAgLy8gIENoZWNrIEJveFxyXG4gICAgbGV0IGNvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQoY29tcGxldGVDaGVja2JveCk7XHJcbiAgICBvYmplY3RpdmUuYXBwZW5kQ2hpbGQob2JqZWN0aXZlQ29udGVudCk7XHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRleHQpXHJcbiAgICBvYmplY3RpdmVDb250ZW50LmFwcGVuZENoaWxkKG9iamVjdGl2ZVRpbWVGcmFtZSlcclxuICAgXHJcblxyXG4gICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgIGxldCByZXdhcmRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcblxyXG4gICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTsgICAgICAgICBcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuXHJcbiAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChvYmplY3RpdmUpO1xyXG4gICAgb2JqZWN0aXZlLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgaWYgKHR5cGUgPT0gXCJxdWVzdFwiKSB7XHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJjYXJkQ29udGVudFwiKTtcclxuICAgICAgICBjb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7ICAgICAgIFxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PSBcImdvYWxcIikge1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImdvYWxDYXJkXCIpXHJcbiAgICAgICAgb2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJnb2FsT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIGNvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJnb2FsQ29tcGxldGVDb250YWluZXJcIik7XHJcbiAgICAgICAgY29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBHb2FsIENvbXBsZXRlXCI7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwiZ29hbENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgY29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgb2JqZWN0aXZlVGltZS5jbGFzc0xpc3QuYWRkKFwib2JqZWN0aXZlVGltZUZyYW1lXCIpOyAgICAgICBcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwiZ29hbFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJnb2FsUmV3YXJkQW1vdW50XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09IG51bGwgfHwgdHlwZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgVHlwZSFcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gY2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXljYXJkQ29udGVudCAocXVlc3QsIGNhcmRFbGVtZW50LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVUZXh0XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmlubmVyVGV4dCA9IHF1ZXN0Lm9iamVjdGl2ZTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtxdWVzdC5vYmplY3RpdmV9YClcclxuICAgIFxyXG4gICAgICAgIGxldCBjaGVja2JveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHF1ZXN0KTtcclxuICAgICAgICAgICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggZWxlbWVudCBub3QgZm91bmQgaW4gdGhlIGNhcmRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5vYmplY3RpdmVUaW1lRnJhbWVcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke3F1ZXN0LmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7cXVlc3QuZGF0ZVRvQ29tcGxldGV9YCk7XHJcblxyXG4gICAgICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV3YXJkQm94XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7cXVlc3R9LXJld2FyZGApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShxdWVzdCkpXHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UocXVlc3QpKTsgICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7cXVlc3QucmV3YXJkLmFtb3VudH0gJHtxdWVzdC5yZXdhcmQudHlwZX1gKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUdvYWxDYXJkQ29udGVudCAoZ29hbCwgY2FyZEVsZW1lbnQsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgLy9Hb2FsIE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICBsZXQgZ29hbE9iamVjdGl2ZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ29hbENhcmRUZXh0XCIpO1xyXG4gICAgZ29hbE9iamVjdGl2ZS5pbm5lclRleHQgPSBnb2FsLm9iamVjdGl2ZTtcclxuICAgIGdvYWxPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Z29hbC5vYmplY3RpdmV9YClcclxuXHJcbiAgICBsZXQgY2hlY2tib3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgaWYgKGNoZWNrYm94KSB7XHJcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGdvYWwpO1xyXG4gICAgICAgIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2hlY2tib3ggZWxlbWVudCBub3QgZm91bmQgaW4gdGhlIGNhcmRcIik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICBsZXQgZGF0ZVRvQ29tcGxldGVCb3ggPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGVUb0NvbXBsZXRlQm94XCIpO1xyXG4gICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGdvYWxDYXJkLSR7Z29hbC5kYXRlVG9Db21wbGV0ZX1gKVxyXG4gICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgbGV0IHJld2FyZEJveCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmV3YXJkQm94XCIpO1xyXG4gICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBnb2FsQ2FyZC0ke2dvYWx9LXJld2FyZGApO1xyXG5cclxuICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5nb2FsUmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGdvYWwpKVxyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoZ29hbCkpOyAgICAgICAgICAgIFxyXG4gICAgICAgXHJcbiAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmdvYWxSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Z29hbC5yZXdhcmQuYW1vdW50fSAke2dvYWwucmV3YXJkLnR5cGV9YCk7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVlc3RMaXN0IChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG5cclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdCA9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJRdWVzdCBMaXN0IGlzIEVtcHR5XCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgcmVtb3ZlRW1wdHlTdGF0ZSgpO1xyXG4gICAgICAgIGNyZWF0ZVF1ZXN0UGFyYWxsYXgoKTtcclxuICAgICAgICBsZXQgcXVlc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdFBhcmFsbGF4XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0TGlzdCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2FyZCA9IGNyZWF0ZUNhcmRUZW1wbGF0ZShcInF1ZXN0XCIpO1xyXG4gICAgICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdC0ke2l9YCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXljYXJkQ29udGVudChjdXJyZW50UXVlc3RMaXN0W2ldLCBjYXJkLCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHF1ZXN0TGlzdC5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XHJcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRRdWVzdExpc3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb21wbGV0ZWRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCkge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWVzdExpc3RbaW5kZXhdLnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvLyBBc3N1bWluZyB0aGUgY29kZSBmb3IgdGhlIFdlYXBvbiBjbGFzcywgSGVyb1R5cGVXZWFwb25MaXN0IGNsYXNzLCBhbmQgd2VhcG9uTGlzdHMgZm9yIGVhY2ggY2xhc3MgaXMgYWxyZWFkeSBkZWZpbmVkLlxyXG5pbXBvcnQgeyByb2d1ZVdlYXBvbkxpc3QsIHdhcnJpb3JXZWFwb25MaXN0LCBwcmllc3RXZWFwb25MaXN0LCBzb3JjZXJlcldlYXBvbkxpc3QsIHRlc3RXZWFwb25MaXN0IH0gZnJvbSBcIi4vd2VhcG9uTGlzdC5qc1wiXHJcbmltcG9ydCB7IGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLCBpdGVtUG9zc2libGVSYXJpdHksIGl0ZW1Qb3NzaWJsZVN0YXRzLCBpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1Qb3NzaWJsZVN1ZmZpeCB9IGZyb20gXCIuL2NsYXNzZXMvaXRlbVN0YXRzLmpzXCI7XHJcbmltcG9ydCBpbXBvcnRBbGxJbWFnZXMgZnJvbSAnLi9oZWxwZXJGdW5jdGlvbnMvaW1hZ2VIYW5kbGVyLmpzJztcclxuXHJcbmNvbnN0IHdlYXBvbkltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3dlYXBvbnMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCBhcm1vdXJJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9hcm1vdXInLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCBlbGVtZW50SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvZWxlbWVudHMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbik7XHJcblxyXG5jb25zdCByYXJpdHlJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9yYXJpdGllcycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKVxyXG5cclxuXHJcblxyXG5jbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgZWxlbWVudCwgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVR5cGUocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXZWFwb25MaXN0KHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgc3dpdGNoIChwbGF5ZXJDbGFzcykge1xyXG4gICAgICAgICAgY2FzZSBcIlJvZ3VlXCI6XHJcbiAgICAgICAgICAgIHJldHVybiByb2d1ZVdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiUHJpZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiBwcmllc3RXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIldhcnJpb3JcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHdhcnJpb3JXZWFwb25MaXN0O1xyXG4gICAgICAgICAgY2FzZSBcIlNvcmNlcmVyXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBzb3JjZXJlcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwidGVzdFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gdGVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgcGxheWVyIGNsYXNzLlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3Qgd2VhcG9uTGlzdCA9IGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpO1xyXG4gIFxyXG4gICAgaWYgKHdlYXBvbkxpc3QpIHtcclxuICAgICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIHdlYXBvbkxpc3RbcmFuZG9tSW5kZXhdLl90eXBlO1xyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIG9mIGFuIGludmFsaWQgcGxheWVyIGNsYXNzXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkIHRvIHJldHJpZXZlIHdlYXBvbiBsaXN0LlwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1SYXJpdHkgKGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdG90YWwgY2hhbmNlIHRvIDBcclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcblxyXG4gICAgLy8gQWRkIHRoZSBjaGFuY2UgdmFsdWVzIG9mIGFsbCByYXJpdHkgb2JqZWN0IGNoYW5jZXNcclxuICAgIC8vIFRoaXMgc2hvdWxkIGFkZCB1cCB0byAxMDBcclxuICAgIGZvciAobGV0IHJhcml0eU9iamVjdCBvZiBpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuICAgICAgICB0b3RhbENoYW5jZSArPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIHdob2xlIGludGVnZXIgYmV0d2VlbiAwIC0gMTAwXHJcbiAgICBsZXQgcmFuZG9tQ2hhbmNlID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2UpO1xyXG5cclxuICAgIC8vIFNldCByYXJpdHkgdmFsdWUgdG8gbnVsbFxyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgLy8gUmV0dXJuIHRoZSByYXJpdHkgYmFzZWQgb24geW91ciByYW5kb21DaGFuY2Ugcm9sbC4gXHJcbiAgICAvLyBGb3IgZXhhbXBsZSBpZiBSYW5kb20gQ2hhbmNlIHdhcyA5NDpcclxuICAgIC8vIDk0IC0gNDAgKE5vcm1hbCBSYXJpdHkpID0gNTQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gNTQgLSAzMCAoVW5jb21tb24gUmFyaXR5KSA9IDI0IDwtLSBudW1iZXIgdXNlZCBpbiBuZXh0IGNhbGNcclxuICAgIC8vIDI0IC0gMTUgKFJhcmUgUmFyaXR5KSA9IDkgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gOSAtIDEwIChFcGljIFJhcml0eSkgPSAtMSA8LS0gVGhlcmVmb3JlIHJhcml0eSBvZiBpdGVtIGlzIEVwaWMgYXMgKDkgLSAxMCkgPCAoMClcclxuICAgIGZvciAobGV0IHJhcml0eU9iamVjdCBvZiBpdGVtUG9zc2libGVSYXJpdHkpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5T2JqZWN0LmNoYW5jZTtcclxuICAgICAgICAvLyBUaGUgdmFsdWUgaXMgKC0wLjAxIHRvIGFjb3VudCBmb3Igcm91bmRpbmcgZXJyb3JzKVxyXG4gICAgICAgIGlmIChyYW5kb21DaGFuY2UgPD0gLTAuMDEpIHtcclxuICAgICAgICAgICAgcmFyaXR5ID0gcmFyaXR5T2JqZWN0LnJhcml0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhcml0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3RhdHMoaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1SYXJpdHkpIHtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbU51bWJlcihtaW4sIG1heCkge1xyXG4gICAgY29uc3QgZGVjaW1hbFBsYWNlcyA9IDI7IC8vIE51bWJlciBvZiBkZWNpbWFsIHBsYWNlc1xyXG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xyXG4gICAgcmV0dXJuIE51bWJlcihyYW5kb21OdW1iZXIudG9GaXhlZChkZWNpbWFsUGxhY2VzKSk7XHJcbiAgfVxyXG5cclxuICAgIC8vIFVzaW5nIHRoZSBzcXVhcmUgYnJhY2tldCBub3RhdGlvbiB0byBhY2Nlc3MgdGhlIHByb3BlcnR5IGF0IHJ1bnRpbWVcclxuICAgIGNvbnN0IHJhcml0eVN0YXRzID0gaXRlbVBvc3NpYmxlU3RhdHNbaXRlbVJhcml0eV07XHJcbiAgICBjb25zdCBpdGVtU3RhdHMgPSB7fTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0YXQgaW4gcmFyaXR5U3RhdHMpIHtcclxuICAgICAgICBjb25zdCB7IG1pbiwgbWF4IH0gPSByYXJpdHlTdGF0c1tzdGF0XTtcclxuICAgIGl0ZW1TdGF0c1tzdGF0XSA9IGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXQsIGl0ZW1TdGF0c1tzdGF0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TdGF0cztcclxuXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1QcmVmaXgoaXRlbVBvc3NpYmxlUHJlZml4LCBpdGVtUmFyaXR5KSB7XHJcbiAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtUG9zc2libGVQcmVmaXhbaXRlbVJhcml0eV0ubGVuZ3RoKVxyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XVtyYW5kb21JbmRleF07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZUVsZW1lbnRzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlRWxlbWVudHNbcmFuZG9tSW5kZXhdXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGl0ZW1Qb3NzaWJsZVN1ZmZpeFtlbGVtZW50XTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21XZWFwb24gKHBsYXllckNsYXNzKSB7XHJcblxyXG4gICAgbGV0IHdlYXBvblR5cGUgPSBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcyk7XHJcbiAgICBsZXQgd2VhcG9uRWxlbWVudCA9IGdldEl0ZW1FbGVtZW50KGl0ZW1Qb3NzaWJsZUVsZW1lbnRzKTtcclxuICAgIGxldCB3ZWFwb25SYXJpdHkgPSBnZXRJdGVtUmFyaXR5KGl0ZW1Qb3NzaWJsZVJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3RhdHMgPSBnZXRJdGVtU3RhdHMoaXRlbVBvc3NpYmxlU3RhdHMsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uUHJlZml4ID0gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIHdlYXBvblJhcml0eSk7XHJcbiAgICBsZXQgd2VhcG9uU3VmZml4ID0gZ2V0SXRlbVN1ZmZpeChpdGVtUG9zc2libGVTdWZmaXgsIHdlYXBvbkVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBuZXcgV2VhcG9uKFxyXG4gICAgICAgICh3ZWFwb25QcmVmaXggKyBcIiBcIiArIHdlYXBvblR5cGUgKyBcIiBcIiArIHdlYXBvblN1ZmZpeCksIFxyXG4gICAgICAgIHdlYXBvblR5cGUsXHJcbiAgICAgICAgcGxheWVyQ2xhc3MsXHJcbiAgICAgICAgd2VhcG9uUmFyaXR5LFxyXG4gICAgICAgIHdlYXBvblN0YXRzLFxyXG4gICAgICAgIHdlYXBvbkVsZW1lbnQsXHJcbiAgICAgICAgbnVsbCxcclxuICAgIClcclxuXHJcbiBcclxufVxyXG4vLyBTaW11bGF0aW5nIGFuIGl0ZW0gYmVpbmcgcHVsbGVkIGZyb20gYSBjaGVzdCBiYXNlZCBvbiBwbGF5ZXIncyBjbGFzcyBhbmQgcmFyaXR5IHByb2JhYmlsaXRpZXNcclxuZXhwb3J0IGZ1bmN0aW9uIHB1bGxJdGVtRnJvbUNoZXN0KHBsYXllckNsYXNzLCBwaXR5KSB7XHJcbiAgIFxyXG5cclxuICAgIC8vIENvbnNpZGVyIGNvbnN0YW50IHJhcml0eSBvYmplY3QgZm9yIHNjYWxpbmcgcHVycG9zZXNcclxuICAgIGNvbnN0IHJhcml0eVByb2JhYmlsaXRpZXMgPSBbXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTm9ybWFsXCIsIGNoYW5jZTogNDAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJVbmNvbW1vblwiLCBjaGFuY2U6IDMwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiUmFyZVwiLCBjaGFuY2U6IDE1IH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiRXBpY1wiLCBjaGFuY2U6IDEwIH0sXHJcbiAgICAgICAgeyByYXJpdHk6IFwiTGVnZW5kYXJ5XCIsIGNoYW5jZTogNSB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBsZXQgdG90YWxDaGFuY2UgPSAwO1xyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICB0b3RhbENoYW5jZSArPSByYXJpdHlEYXRhLmNoYW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcmFuZG9tQ2hhbmNlID0gTWF0aC5yYW5kb20oKSAqIHRvdGFsQ2hhbmNlO1xyXG4gICAgY29uc29sZS5sb2cocmFuZG9tQ2hhbmNlKTtcclxuICAgIGxldCByYXJpdHkgPSBudWxsO1xyXG5cclxuICAgIGZvciAoY29uc3QgcmFyaXR5RGF0YSBvZiByYXJpdHlQcm9iYWJpbGl0aWVzKSB7XHJcbiAgICAgICAgcmFuZG9tQ2hhbmNlIC09IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgICAgIGlmIChyYW5kb21DaGFuY2UgPD0gMCkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlEYXRhLnJhcml0eTtcclxuICAgICAgICAgICAgcmV0dXJuIHJhcml0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd2VhcG9uTGlzdC5sZW5ndGgpO1xyXG4gICAgY29uc3QgcmFuZG9tV2VhcG9uID0gd2VhcG9uTGlzdFtyYW5kb21JbmRleF07XHJcblxyXG4gICAgLy8gQXNzaWduIHJhbmRvbSBwcm9wZXJ0aWVzIHRvIHRoZSB3ZWFwb25cclxuICAgIHJhbmRvbVdlYXBvbi5fbmFtZSA9IFwiRGl2aW5lIFN0YWZmXCI7IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gcmFyaXR5OyAvLyBBc3NpZ25pbmcgdGhlIGRldGVybWluZWQgcmFyaXR5XHJcblxyXG4gICAgLy8gSWYgdGhlIHB1bGxlZCBpdGVtIGlzIGxlZ2VuZGFyeSwgcmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgaWYgKHJhcml0eSA9PT0gXCJMZWdlbmRhcnlcIikge1xyXG4gICAgICAgIHBpdHkgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwaXR5Kys7IC8vIEluY3JlbWVudCB0aGUgcGl0eSBjb3VudGVyIGlmIGEgbGVnZW5kYXJ5IGl0ZW0gd2FzIG5vdCBwdWxsZWRcclxuICAgIH1cclxuXHJcbiAgICAvLyBHdWFyYW50ZWUgYSBsZWdlbmRhcnkgaXRlbSBpZiB0aGUgcGl0eSBjb3VudGVyIHJlYWNoZXMgMTAwXHJcbiAgICBpZiAocGl0eSA+PSAxMDApIHtcclxuICAgICAgICByYW5kb21XZWFwb24uX3Jhcml0eSA9IFwiTGVnZW5kYXJ5XCI7XHJcbiAgICAgICAgcGl0eSA9IDA7IC8vIFJlc2V0IHRoZSBwaXR5IGNvdW50ZXJcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21XZWFwb24uX3N0YXRzID0ge1xyXG4gICAgICAgIGF0dGFjazogMTUwLFxyXG4gICAgICAgIGludGVsbGVjdDogNTAsXHJcbiAgICAgICAgc3RhbWluYTogODAsXHJcbiAgICB9OyAvLyBFeGFtcGxlIHByb3BlcnR5XHJcblxyXG4gICAgcmV0dXJuIHsgaXRlbTogcmFuZG9tV2VhcG9uLCBwaXR5IH07XHJcbn1cclxuIiwiY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IHJvZ3VlV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJEYWdnZXJcIiwgXCJEYWdnZXJcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsIEJsYWRlc1wiLCBcIkR1YWwgQmxhZGVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQm93XCIsIFwiQm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiVGhyb3dpbmcgS25pdmVzXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2xhdyBXZWFwb25zXCIsIFwiQ2xhdyBXZWFwb25zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ3Jvc3Nib3dcIiwgXCJDcm9zc2Jvd1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlJhcGllclwiLCBcIlJhcGllclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkJsb3dndW5cIiwgXCJCbG93Z3VuXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQ2hha3JhbXNcIiwgXCJDaGFrcmFtc1wiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhcnJvdGVcIiwgXCJHYXJyb3RlXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHdhcnJpb3JXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0c3dvcmRcIiwgXCJHcmVhdHN3b3JkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiU3dvcmQgYW5kIFNoaWVsZFwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiV2FyaGFtbWVyXCIsIFwiV2FyaGFtbWVyXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJQb2xlYXJtXCIsIFwiUG9sZWFybVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXhlXCIsIFwiQXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlXCIsIFwiTWFjZVwiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiRHVhbC1XaWVsZGluZyBBeGVzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmVhdGF4ZVwiLCBcIkdyZWF0YXhlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJGbGFpbFwiLCBcIkZsYWlsXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FyIEdhdW50bGV0c1wiLCBcIldhcnJpb3JcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHByaWVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJNYWNlIGFuZCBTaGllbGRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBXYW5kXCIsIFwiSG9seSBXYW5kXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlRvbWVcIiwgXCJUb21lXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgSGFtbWVyXCIsIFwiSG9seSBIYW1tZXJcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQW5raFwiLCBcIkFua2hcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBCb3dcIiwgXCJIb2x5IEJvd1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTYWNyZWQgQ2hhbGljZVwiLCBcIlNhY3JlZCBDaGFsaWNlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlByYXllciBCZWFkc1wiLCBcIlByYXllciBCZWFkc1wiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFNjeXRoZVwiLCBcIkhvbHkgU2N5dGhlXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5jb25zdCBzb3JjZXJlcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiU3RhZmZcIiwgXCJTdGFmZlwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNwZWxsYm9va1wiLCBcIlNwZWxsYm9va1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVsZW1lbnRhbCBXYW5kXCIsIFwiRWxlbWVudGFsIFdhbmRcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcnlzdGFsIE9yYlwiLCBcIkNyeXN0YWwgT3JiXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZWJsYWRlXCIsIFwiUnVuZWJsYWRlXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIkFyY2FuZSBHYXVudGxldHNcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJFbmNoYW50ZWQgQm93XCIsIFwiRW5jaGFudGVkIEJvd1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNjZXB0ZXJcIiwgXCJTY2VwdGVyXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQXJjYW5lIERhZ2dlclwiLCBcIkFyY2FuZSBEYWdnZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHcmF2aXRvbiBTdGFmZlwiLCBcIkdyYXZpdG9uIFN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHRlc3RXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkFieXNzIFNob3J0IFN3b3JkXCIsIFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJDb3Jyb3Npb24gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiR2FpYSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJJbmZlcm5vIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTHVuYXIgU2hvcnQgU3dvcmRcIiwgXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJNaXN0IFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJ1bmUgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJTb2xhciBTaG9ydCBTd29yZFwiLCBcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlZvbHQgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJaZXBoeXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuZXhwb3J0IHsgcm9ndWVXZWFwb25MaXN0LCB3YXJyaW9yV2VhcG9uTGlzdCwgcHJpZXN0V2VhcG9uTGlzdCwgc29yY2VyZXJXZWFwb25MaXN0LCB0ZXN0V2VhcG9uTGlzdCB9OyIsImNsYXNzIFpvZGlhY1NpZ24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcclxuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcclxuICAgICAgdGhpcy5fdW5pcXVlRWxlbWVudCA9IHVuaXF1ZUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydERhdGVSYW5nZShkYXRlUmFuZ2UpIHtcclxuICAgICAgLy8gU3BsaXQgdGhlIGRhdGUgcmFuZ2Ugc3RyaW5nIGludG8gc3RhcnQgYW5kIGVuZCBkYXRlc1xyXG4gICAgICBjb25zdCBbc3RhcnRTdHIsIGVuZFN0cl0gPSBkYXRlUmFuZ2Uuc3BsaXQoJyAtICcpO1xyXG4gICAgXHJcbiAgICAgIC8vIFBhcnNlIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHVzaW5nIHRoZSBEYXRlIGNvbnN0cnVjdG9yXHJcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHN0YXJ0U3RyKTtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZFN0cik7XHJcbiAgICBcclxuICAgICAgLy8gQWRqdXN0IHRoZSB5ZWFyIG9mIHRoZSBlbmQgZGF0ZSBpZiBuZWNlc3NhcnlcclxuICAgICAgaWYgKGVuZERhdGUgPCBzdGFydERhdGUpIHtcclxuICAgICAgICBlbmREYXRlLnNldEZ1bGxZZWFyKHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICAvLyBSZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgYW4gb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN0YXJ0RGF0ZSwgZW5kRGF0ZSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmNvbnN0IHpvZGlhY1NpZ25zID0gW1xyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXJpZXNcIixcclxuICAgICAgXCJNYXJjaCAyMSAtIEFwcmlsIDE5XCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlN0ZWVsXCIsXHJcbiAgICAgIFwiQXJlcywgdGhlIEdvZCBvZiBXYXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVGF1cnVzXCIsXHJcbiAgICAgIFwiQXByaWwgMjAgLSBNYXkgMjBcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkFieXNzXCIsXHJcbiAgICAgIFwiSGFkZXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiR2VtaW5pXCIsXHJcbiAgICAgIFwiTWF5IDIxIC0gSnVuZSAyMFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlplcGh5clwiLFxyXG4gICAgICBcIkl6YW5hbWkvSXphbmFnaSwgdGhlIEdvZHMvR29kZGVzc2VzIG9mIENyZWF0aW9uIGFuZCBEZWF0aCAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYW5jZXJcIixcclxuICAgICAgXCJKdW5lIDIxIC0gSnVseSAyMlwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTHVuYXJcIixcclxuICAgICAgXCJUc3VrdXlvbWksIHRoZSBHb2Qgb2YgdGhlIE1vb24gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGVvXCIsXHJcbiAgICAgIFwiSnVseSAyMyAtIEF1Z3VzdCAyMlwiLFxyXG4gICAgICBcIkZpcmVcIixcclxuICAgICAgXCJTb2xhclwiLFxyXG4gICAgICBcIlJhLCB0aGUgR29kIG9mIHRoZSBTdW4gKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiVmlyZ29cIixcclxuICAgICAgXCJBdWd1c3QgMjMgLSBTZXB0ZW1iZXIgMjJcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIlRlcnJhXCIsXHJcbiAgICAgIFwiT3NpcmlzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxpYnJhXCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIkFldGhlclwiLFxyXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2NvcnBpb1wiLFxyXG4gICAgICBcIk9jdG9iZXIgMjMgLSBOb3ZlbWJlciAyMVwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiQ29ycm9kZVwiLFxyXG4gICAgICBcIlBvc2VpZG9uLCB0aGUgR29kIG9mIHRoZSBTZWEgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2FnaXR0YXJpdXNcIixcclxuICAgICAgXCJOb3ZlbWJlciAyMiAtIERlY2VtYmVyIDIxXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIkluZmVybm9cIixcclxuICAgICAgXCJBbWF0ZXJhc3UsIHRoZSBHb2RkZXNzIG9mIHRoZSBTdW4gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2Fwcmljb3JuXCIsXHJcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJHYWlhXCIsXHJcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXF1YXJpdXNcIixcclxuICAgICAgXCJKYW51YXJ5IDIwIC0gRmVicnVhcnkgMThcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJWb2x0XCIsXHJcbiAgICAgIFwiWmV1cywgdGhlIEdvZCBvZiBUaHVuZGVyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlBpc2Nlc1wiLFxyXG4gICAgICBcIkZlYnJ1YXJ5IDE5IC0gTWFyY2ggMjBcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIk1pc3RcIixcclxuICAgICAgXCJTdXNhbm9vLCB0aGUgR29kIG9mIHRoZSBTZWEgYW5kIFN0b3JtcyAoSmFwYW5lc2UpXCJcclxuICAgIClcclxuICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgY3VycmVuY3lDb250YWluZXIsIHBsYXllckludmVudG9yeX0gZnJvbSAnLi9kYXRhLmpzJztcclxuaW1wb3J0IHsgc3Bpbiwgb3BlblNsb3RNYWNoaW5lTW9kYWwsIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCwgcmVzZXRTbG90TWFjaGluZUltYWdlc30gZnJvbSAnLi9nYWNoYVNwaW5GdW5jdGlvbnMuanMnO1xyXG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuY29uc29sZS5sb2coY3VycmVuY3lDb250YWluZXIpXHJcblxyXG5sZXQgdGVzdFdlYXBvbkxpc3QgPSAoXCJ0ZXN0XCIpXHJcbmNvbnNvbGUubG9nKHBsYXllckludmVudG9yeSk7XHJcblxyXG5kaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbmNvbnN0IHdlYXBvblJvbGxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXBvbkdlbmVyYXRvclwiKTtcclxud2VhcG9uUm9sbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgb3BlblNsb3RNYWNoaW5lTW9kYWwoKTtcclxufSlcclxuXHJcbmNvbnN0IHNwaW5TbG90ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzcGluU2xvdEJ1dHRvblwiKTtcclxuc3BpblNsb3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xyXG4gICAgbGV0IG5ld0l0ZW0gPSBzcGluKHRlc3RXZWFwb25MaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcblxyXG4gICAgaWYgKG5ld0l0ZW0gIT0gZmFsc2UpIHtcclxuICAgICAgLy8gcGxheWVyLmVxdWlwSXRlbShuZXdJdGVtKTtcclxuICAgICAgcGxheWVySW52ZW50b3J5LnB1c2gobmV3SXRlbSlcclxuICAgICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcInBsYXllckludmVudG9yeVwiLCBwbGF5ZXJJbnZlbnRvcnkpXHJcbiAgICB9XHJcbiAgICBcclxufSk7XHJcblxyXG5jb25zdCBjbG9zZVNsb3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2VTbG90XCIpO1xyXG5jbG9zZVNsb3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgY2xvc2VTbG90TWFjaGluZU1vZGFsKCk7XHJcbn0pXHJcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=