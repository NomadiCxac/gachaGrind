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


let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currentQuestList') || [];
let currentGoalList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currentGoalList') || [];
let currencyContainer = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_0__.getDataFromLocalStorage)('currencyContainer') || [new Currency("GGTokens", 0), new Currency("ChestKeys", 0)];
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





function userInterfaceManager (currentQuestList, currencyContainer) {

    (0,_indexViewFunctions__WEBPACK_IMPORTED_MODULE_3__["default"])();
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
/* harmony export */   "default": () => (/* binding */ taskAndGoalController)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function taskAndGoalController () {

    let header = document.querySelector(".gameContentHeader");
    if (header.hasChildNodes()) {
        while (header.firstChild) {
          header.removeChild(header.firstChild);
        }
      }


    // Case: User has no goals or tasks 
    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length <= 0 && _data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length <= 0) {
        let gameContainer = document.querySelector(".gameContent");
        let emptyContainer = document.createElement("div");
        emptyContainer.classList.add("emptyQuestList");
        emptyContainer.textContent = "Create a Goal or Task to Get Started"
        gameContainer.appendChild(emptyContainer);
    }

    // Case: User creates a task but no goals
    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentQuestList.length > 0) {
        let taskHeader = document.createElement("div");
        taskHeader.style.gridColumn = "1";
        taskHeader.textContent = "Tasks";
        header.appendChild(taskHeader);
    }

    // Case: User creates a goal
    if (_data__WEBPACK_IMPORTED_MODULE_0__.currentGoalList.length > 0) {
        let goalHeader = document.createElement("div");
        goalHeader.style.gridColumn = "2";
        goalHeader.textContent = "Goals";
        header.appendChild(goalHeader);
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
    return data ? JSON.parse(data) : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQzFDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsV0FBVyxNQUFNLGVBQWUsRUFBRSxtQkFBbUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxPQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xIMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUN3QztBQUNxRDtBQUM5RDtBQUNpQjtBQUNGO0FBQ3BFO0FBQ0E7QUFDQSxZQUFZLHVEQUFpQjtBQUM3QjtBQUNBO0FBQ0EsWUFBWSxxREFBZTtBQUMzQjtBQUNBLG1GQUE0QixDQUFDLHVEQUFpQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxJQUFJLDRFQUFvQjtBQUN4QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDREQUFJLGlCQUFpQix1REFBaUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBZTtBQUNyQixNQUFNLGtGQUFzQixvQkFBb0IscURBQWU7QUFDL0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZFQUFxQjtBQUN2QixDQUFDO0FBQ0QsSSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2NsYXNzZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2NsYXNzZXMvaXRlbVN0YXRzLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZXZlbnRNYW5hZ2VyLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvZ2FjaGFTcGluRnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaGVscGVyRnVuY3Rpb25zL2dldEl0ZW1JbWFnZS5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvYXJtb3VyLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nKSQiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC8uL3NyYy9pbWFnZXMvZWxlbWVudHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2ltYWdlcy9yYXJpdGllcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZykkIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvaW1hZ2VzL3dlYXBvbnMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmcpJCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2luZGV4Vmlld0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3F1ZXN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvc2hvcEZ1bmN0aW9uLmpzIiwid2VicGFjazovL2dhY2hhR3JpbmQvLi9zcmMvd2VhcG9uTGlzdC5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3pvZGlhY1Bvd2Vycy5qcyIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhY2hhR3JpbmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FjaGFHcmluZC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYWNoYUdyaW5kLy4vc3JjL3Nob3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHpvZGlhY1NpZ25zIGZyb20gXCIuLi96b2RpYWNQb3dlcnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCwgb25lT2ZmQm9vbCwgZ29hbElkKSB7XHJcbiAgICB0aGlzLm9iamVjdGl2ZSA9IG9iamVjdGl2ZTtcclxuICAgIHRoaXMuZGF0ZVRvQ29tcGxldGUgPSBkYXRlVG9Db21wbGV0ZTtcclxuICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIHRoaXMub25lT2ZmQm9vbCA9IG9uZU9mZkJvb2w7XHJcbiAgICB0aGlzLmdvYWxJZCA9IGdvYWxJZDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHb2FsIHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCByZXdhcmQsIGZyZXF1ZW5jeSwgZnJlcXVlbmN5VmFsdWUsIHRpbWVSZXF1aXJlZCwgdGltZVNwZW50VW5pdCkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgdGhpcy5mcmVxdWVuY3kgPSBmcmVxdWVuY3k7XHJcbiAgICB0aGlzLmZyZXF1ZW5jeVZhbHVlID0gZnJlcXVlbmN5VmFsdWU7XHJcbiAgICB0aGlzLnRpbWVSZXF1aXJlZCA9IHRpbWVSZXF1aXJlZDtcclxuICAgIHRoaXMudGltZVNwZW50VW5pdCA9IHRpbWVTcGVudFVuaXQ7XHJcbiAgICB0aGlzLnF1ZXN0cyA9IFtdO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgPSAwO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVRdWVzdCgpIHtcclxuICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSB0aGlzLnRpbWVSZXF1aXJlZCAtIHRoaXMudG90YWxUaW1lU3BlbnQ7XHJcbiAgICBjb25zdCBxdWVzdER1cmF0aW9uID0gTWF0aC5taW4odGhpcy50aW1lU3BlbnRVbml0ID09PSAnaG91cnMnID8gNjAgOiAxLCByZW1haW5pbmdUaW1lKTtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gYFN0dWR5ICR7dGhpcy5uYW1lfSBmb3IgJHtxdWVzdER1cmF0aW9ufSAke3RoaXMudGltZVNwZW50VW5pdH1gO1xyXG5cclxuICAgIGNvbnN0IHF1ZXN0ID0gbmV3IFF1ZXN0KGRlc2NyaXB0aW9uLCBxdWVzdER1cmF0aW9uLCBmYWxzZSwgdGhpcy5yZXdhcmQsIGdlbmVyYXRlVW5pcXVlSWQoKSwgZmFsc2UsIHRoaXMpO1xyXG4gICAgdGhpcy5xdWVzdHMucHVzaChxdWVzdCk7XHJcbiAgICB0aGlzLnRvdGFsVGltZVNwZW50ICs9IHF1ZXN0RHVyYXRpb247XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0O1xyXG4gIH1cclxuXHJcbiAgbGlua1F1ZXN0VG9Hb2FsKHF1ZXN0KSB7XHJcbiAgICB0aGlzLnF1ZXN0cy5wdXNoKHF1ZXN0KTtcclxuICAgIHRoaXMudG90YWxUaW1lU3BlbnQgKz0gcXVlc3QucXVlc3RDb21wbGV0ZSA/IHF1ZXN0LmR1cmF0aW9uIDogMDtcclxuICB9XHJcbiBcclxuICBpc0dvYWxDb21wbGV0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRvdGFsVGltZVNwZW50ID49IHRoaXMudGltZVJlcXVpcmVkO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVVbmlxdWVJZCgpIHtcclxuICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBJRCBmb3IgdGhlIHF1ZXN0XHJcbiAgLy8gWW91IGNhbiB1c2UgYSBsaWJyYXJ5IG9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHNcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHR5cGUsIGNsYXNzUmVzdHJpY3Rpb24sIHJhcml0eSwgc3RhdHMsIGlkKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fY2xhc3NSZXN0cmljdGlvbiA9IGNsYXNzUmVzdHJpY3Rpb247XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb247XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgcmFyaXR5KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcclxuICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0cyA9IHt9O1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyA9IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRTdGF0KHN0YXROYW1lKSB7XHJcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcclxuICAgICAgY29uc3QgZXF1aXBwZWRWYWx1ZSA9IHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIHJldHVybiBiYXNlVmFsdWUgKyBlcXVpcHBlZFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgc2V0U3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdICs9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgdW5lcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcclxuICAgICAgICBpZiAoaXRlbVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSAmJiB0aGlzLl9lcXVpcHBlZFN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gLT0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxCYXNlU3RhdHMoaGVyb1R5cGUpIHtcclxuICAgICAgc3dpdGNoIChoZXJvVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJTb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNixcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA4LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN0cmVuZ3RoOiA0LFxyXG4gICAgICAgICAgICBkZXh0ZXJpdHk6IDQsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNixcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA4LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDgsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJSb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGRleHRlcml0eTogOCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIHR5cGUuXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBsZXZlbFVwKCkge1xyXG4gICAgICBjb25zdCBsZXZlbCA9IHRoaXMuX2Jhc2VTdGF0cy5sZXZlbCB8fCAxO1xyXG4gICAgICB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgPSBsZXZlbCArIDE7XHJcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzICs9IDU7IC8vIEFzc3VtaW5nIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgNSBza2lsbCBwb2ludHMgcGVyIGxldmVsXHJcbiAgICB9XHJcbiAgXHJcbiAgICBhbGxvY2F0ZVNraWxsUG9pbnQoc3RhdE5hbWUpIHtcclxuICAgICAgaWYgKHRoaXMuX3NraWxsUG9pbnRzID4gMCAmJiB0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSAxO1xyXG4gICAgICAgIHRoaXMuX3NraWxsUG9pbnRzIC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGdldCBza2lsbFBvaW50cygpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NraWxsUG9pbnRzO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuXHJcbiAgZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVJbWFnZSwgaGVyb1R5cGUsIGVxdWlwcGVkSXRlbXMsIGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG4gICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgICB0aGlzLl9lbGVtZW50YWxTZWxlY3Rpb24gPSBlbGVtZW50YWxTZWxlY3Rpb247XHJcbiAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gdGhpcy5nZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pO1xyXG4gICAgfVxyXG4gIFxyXG4gIFxyXG4gICAgZ2V0IHNwcml0ZUltYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVJbWFnZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IHNwcml0ZUltYWdlKHNwcml0ZUltYWdlKSB7XHJcbiAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGVyb1R5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9oZXJvVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaGVyb1R5cGUoaGVyb1R5cGUpIHtcclxuICAgICAgdGhpcy5faGVyb1R5cGUgPSBoZXJvVHlwZTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZXF1aXBwZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50YWxBZmZpbml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxBZmZpbml0eSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciBlcXVpcHBpbmcgYW4gaXRlbVxyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhdHRhY2sgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsQXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTcGVjaWFsIEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCaXJ0aGRheUluUmFuZ2UoYmlydGhkYXksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGJpcnRoZGF5IHRvIGEgRGF0ZSBvYmplY3QgaWYgaXQncyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheVxyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURheSA9IGJpcnRoZGF5RGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGVuZERheSA9IGVuZERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAxMSAmJiBiaXJ0aGRheURheSA+IDIxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAwICYmIGJpcnRoZGF5RGF5IDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoID4gc3RhcnRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gc3RhcnRNb250aCAmJiBiaXJ0aGRheURheSA+PSBzdGFydERheSkpICYmXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy8gT3RoZXIgbWV0aG9kcyBjYW4gYmUgYWRkZWQgaGVyZSBmb3IgZnVydGhlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG5cclxuICAgICAgICAvLyBpZiBlbGVtZW50YWwgc2VsZWN0aW9uIGlzIGEgYmlydGhkYXkgcHJvdmlkZWQ6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSB6b2RpYWMgU2lnbnMgZGF0ZSByYW5nZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcclxuICAgICAgICAgICAgbGV0IGJpcnRoRGF5UmFuZ2VDaGVjayA9IHRoaXMuaXNCaXJ0aGRheUluUmFuZ2UoZWxlbWVudGFsU2VsZWN0aW9uLCBkYXRlQ2hlY2tlci5zdGFydERhdGUsIGRhdGVDaGVja2VyLmVuZERhdGUpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbOV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmlydGhEYXlSYW5nZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gPT0gem9kaWFjU2lnbnNbaW5kZXhdLl91bmlxdWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4iLCJleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlRWxlbWVudHMgPSBbXHJcbiAgICBcIlN0ZWVsXCIsXHJcbiAgICBcIkFieXNzXCIsXHJcbiAgICBcIlplcGh5clwiLFxyXG4gICAgXCJMdW5hclwiLFxyXG4gICAgXCJTb2xhclwiLFxyXG4gICAgXCJHYWlhXCIsXHJcbiAgICBcIkFldGhlclwiLFxyXG4gICAgXCJDb3Jyb2RlXCIsXHJcbiAgICBcIkluZmVybm9cIixcclxuICAgIFwiR2FpYVwiLFxyXG4gICAgXCJWb2x0XCIsXHJcbiAgICBcIk1pc3RcIixcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGl0ZW1Qb3NzaWJsZVJhcml0eSA9IFtcclxuICAgIHsgcmFyaXR5OiBcIm5vcm1hbFwiLCBjaGFuY2U6IDQwfSxcclxuICAgIHsgcmFyaXR5OiBcInVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgIHsgcmFyaXR5OiBcInJhcmVcIiwgY2hhbmNlOiAxOCB9LFxyXG4gICAgeyByYXJpdHk6IFwiZXBpY1wiLCBjaGFuY2U6IDkgfSxcclxuICAgIHsgcmFyaXR5OiBcImxlZ2VuZGFyeVwiLCBjaGFuY2U6IDMgfSxcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVTdGF0cyA9IHtcclxuICBub3JtYWw6IHtcclxuICAgIGRhbWFnZTogeyBtaW46IDUsIG1heDogMTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxLCBtYXg6IDUgfSxcclxuICAgIGludGVsbGlnZW5jZTogeyBtaW46IDEsIG1heDogNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMSwgbWF4OiA1IH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAsIG1heDogMjAgfSxcclxuICAgIGNyaXRDaGFuY2U6IHsgbWluOiAwLjAwNSwgbWF4OiAwLjAyIH1cclxuICB9LFxyXG4gIHVuY29tbW9uOiB7XHJcbiAgICBkYW1hZ2U6IHsgbWluOiA3LjUsIG1heDogMTUgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMS41LCBtYXg6IDcuNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDE1LCBtYXg6IDMwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wMiwgbWF4OiAwLjA2IH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgcmFyZToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMTUsIG1heDogMzAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogMywgbWF4OiAxNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDMwLCBtYXg6IDYwIH0sXHJcbiAgICBjcml0Q2hhbmNlOiB7IG1pbjogMC4wNiwgbWF4OiAwLjEyIH0gLy8gVXBkYXRlZCBtaW4gYW5kIG1heFxyXG4gIH0sXHJcbiAgZXBpYzoge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogMjUsIG1heDogNTAgfSxcclxuICAgIHN0cmVuZ3RoOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgZGV4dGVyaXR5OiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY29uc3RpdHV0aW9uOiB7IG1pbjogNSwgbWF4OiAyNSB9LFxyXG4gICAgY3JpdERhbWFnZTogeyBtaW46IDUwLCBtYXg6IDEwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMTIsIG1heDogMC4yNCB9IC8vIFVwZGF0ZWQgbWluIGFuZCBtYXhcclxuICB9LFxyXG4gIGxlZ2VuZGFyeToge1xyXG4gICAgZGFtYWdlOiB7IG1pbjogNTAsIG1heDogMTAwIH0sXHJcbiAgICBzdHJlbmd0aDogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBkZXh0ZXJpdHk6IHsgbWluOiAxMCwgbWF4OiA1MCB9LFxyXG4gICAgaW50ZWxsaWdlbmNlOiB7IG1pbjogMTAsIG1heDogNTAgfSxcclxuICAgIGNvbnN0aXR1dGlvbjogeyBtaW46IDEwLCBtYXg6IDUwIH0sXHJcbiAgICBjcml0RGFtYWdlOiB7IG1pbjogMTAwLCBtYXg6IDIwMCB9LFxyXG4gICAgY3JpdENoYW5jZTogeyBtaW46IDAuMjQsIG1heDogMC4zIH0gLy8gVXBkYXRlZCBtYXhcclxuICB9XHJcbn07XHJcblxyXG4gIGV4cG9ydCBjb25zdCBpdGVtUG9zc2libGVQcmVmaXggPSB7XHJcbiAgICBub3JtYWw6IFtcclxuICAgICAgXCJPcmRpbmFyeVwiLCBcIkNvbW1vblwiLCBcIlBsYWluXCIsIFwiUmVndWxhclwiLCBcIkJhc2ljXCJcclxuICAgIF0sXHJcbiAgICB1bmNvbW1vbjogW1xyXG4gICAgICBcIlVuY29tbW9uXCIsIFwiU3RyYW5nZVwiLCBcIlNwZWNpYWxcIiwgXCJEaXN0aW5jdGl2ZVwiLCBcIkFibm9ybWFsXCJcclxuICAgIF0sXHJcbiAgICByYXJlOiBbXHJcbiAgICAgIFwiUmFyZVwiLCBcIlByZWNpb3VzXCIsIFwiRXhxdWlzaXRlXCIsIFwiTWFnbmlmaWNlbnRcIiwgXCJFbGl0ZVwiXHJcbiAgICBdLFxyXG4gICAgZXBpYzogW1xyXG4gICAgICBcIkVwaWNcIiwgXCJHcmFuZFwiLCBcIklsbHVzdHJpb3VzXCIsIFwiVHJhbnNjZW5kZW50XCIsIFwiTWFqZXN0aWNcIlxyXG4gICAgXSxcclxuICAgIGxlZ2VuZGFyeTogW1xyXG4gICAgICBcIkxlZ2VuZGFyeVwiLCBcIlVsdGltYXRlXCIsIFwiRXRlcm5hbFwiLCBcIkludmluY2libGVcIiwgXCJHb2RsaWtlXCJcclxuICAgIF1cclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaXRlbVBvc3NpYmxlU3VmZml4ID0ge1xyXG4gICAgU3RlZWw6IFwib2YgV2FyXCIsXHJcbiAgICBBYnlzczogXCJvZiBXYWlsaW5nXCIsXHJcbiAgICBaZXBoeXI6IFwib2YgSG93bGluZ1wiLFxyXG4gICAgTHVuYXI6IFwib2YgTW9vbmxpZ2h0XCIsXHJcbiAgICBTb2xhcjogXCJvZiBTdW5saWdodFwiLFxyXG4gICAgVGVycmE6IFwib2YgVGVjdG9uaWNcIixcclxuICAgIEFldGhlcjogXCJvZiBHcmF2aXR5XCIsXHJcbiAgICBDb3Jyb2RlOiBcIm9mIFBvaXNvblwiLFxyXG4gICAgSW5mZXJubzogXCJvZiBCdXJuaW5nXCIsXHJcbiAgICBHYWlhOiBcIm9mIE5hdHVyZVwiLFxyXG4gICAgVm9sdDogXCJvZiBTaG9ja2luZ1wiLFxyXG4gICAgTWlzdDogXCJvZiBGcmVlemluZ1wiXHJcbiAgfTsiLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTtcclxuZXhwb3J0IGxldCBjdXJyZW50R29hbExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudEdvYWxMaXN0JykgfHwgW107XHJcbmV4cG9ydCBsZXQgY3VycmVuY3lDb250YWluZXIgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSB8fCBbbmV3IEN1cnJlbmN5KFwiR0dUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIkNoZXN0S2V5c1wiLCAwKV07XHJcbmV4cG9ydCBsZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xyXG5leHBvcnQgbGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdOyIsImltcG9ydCB7IHJlbW92ZUNvbXBsZXRlZFF1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyB9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tIFwiLi9jdXJyZW5jeUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdGFza0FuZEdvYWxDb250cm9sbGVyIGZyb20gXCIuL2luZGV4Vmlld0Z1bmN0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlckludGVyZmFjZU1hbmFnZXIgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgdGFza0FuZEdvYWxDb250cm9sbGVyKCk7XHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZW5lcmF0ZVJhbmRvbVdlYXBvbiB9IGZyb20gXCIuL3Nob3BGdW5jdGlvblwiO1xyXG5pbXBvcnQgaW1wb3J0QWxsSW1hZ2VzIGZyb20gXCIuL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXJcIjtcclxuaW1wb3J0IHsgZ2V0RWxlbWVudEltYWdlLCBnZXRSYXJpdHlJbWFnZSwgZ2V0V2VhcG9uSW1hZ2UgfSBmcm9tIFwiLi9oZWxwZXJGdW5jdGlvbnMvZ2V0SXRlbUltYWdlXCI7XHJcblxyXG5jb25zdCB3ZWFwb25JbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3dlYXBvbnMnLCBmYWxzZSwgL1xcLihwbmcpJC8pXHJcbiAgKTtcclxuICBcclxuICBjb25zdCBhcm1vdXJJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2VsZW1lbnRzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gICk7XHJcbiAgXHJcbiAgY29uc3QgcmFyaXR5SW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9yYXJpdGllcycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApXHJcbiAgXHJcbmZ1bmN0aW9uIGNoZWNrVmFsaWRDdXJyZW5jeUFtb3VudChjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyWzBdLmFtb3VudCA8IDIwKSB7XHJcbiAgICAgIGFsZXJ0KFwiSU5TVUZGSUNJRU5UIEdHIFRPS0VOU1wiKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3VycmVuY3lDb250YWluZXJbMF0uYW1vdW50IC09IDIwO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTbG90TWFjaGluZUl0ZW0gKGhlcm9TZWxlY3Rpb24pIHtcclxuICAgLy8gR2VuZXJhdGUgdGhlIHdlYXBvbiB0aGUgcGxheWVyIHJlY2VpdmVzIHVzaW5nIHRoZSBnZW5lcmF0ZVJhbmRvbVdlYXBvbiBmdW5jdGlvblxyXG4gICBsZXQgZ2VuZXJhdGVkV2VhcG9uID0gZ2VuZXJhdGVSYW5kb21XZWFwb24oaGVyb1NlbGVjdGlvbik7XHJcblxyXG4gICAvLyBQYXJzZSB0aGUgd2VhcG9uIENsYXNzIGRhdGEgdG8gYmUgdXNlZCBmb3IgZnJvbnQgZW5kIGltYWdlc1xyXG4gICBsZXQgcmVzdWx0aW5nVHlwZSA9IGdlbmVyYXRlZFdlYXBvbi5fdHlwZTtcclxuICAgbGV0IHJlc3VsdGluZ1Jhcml0eSA9IGdlbmVyYXRlZFdlYXBvbi5fcmFyaXR5O1xyXG4gICBsZXQgcmVzdWx0aW5nRWxlbWVudCA9IGdlbmVyYXRlZFdlYXBvbi5fZWxlbWVudDtcclxuXHJcbiAgIC8vIFBhc3MgdGhlIGRhdGEgdG8gYSBmaW5kIGZ1bmN0aW9uIHRoYXQgbG9jYXRlcyB0aGUgY2hlY2tzIGVhY2ggaW1hZ2UgKHN0cmluZykgVVJMIHRvIHNlZSBpZiBpdCBpbmNsdWRlcyB0aGUgcGFyc2VkIGRhdGEgICBcclxuICAgLy8gSWYgZGF0YSBtYXRjaGVzLCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIGltYWdlIGxpbmsgYXMgdmFyaWFibGUgXHJcbiAgIGxldCBzZWxlY3RlZFR5cGVJbWFnZSA9IGdldFdlYXBvbkltYWdlKHJlc3VsdGluZ1R5cGUpO1xyXG4gICBsZXQgc2VsZWN0ZWRSYXJpdHlJbWFnZSA9IGdldFJhcml0eUltYWdlKHJlc3VsdGluZ1Jhcml0eSk7XHJcbiAgIGxldCBzZWxlY3RlZEVsZW1lbnRJbWFnZSA9IGdldEVsZW1lbnRJbWFnZShyZXN1bHRpbmdFbGVtZW50KTtcclxuICAgXHJcbiAgIC8vIEltYWdlcyBmb3IgdGhlIGVxdWlwbWVudCByZWVsXHJcbiAgIGNvbnN0IGVxdWlwbWVudFJlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXF1aXBtZW50UmVlbCcpO1xyXG5cclxuICAgLy8gU2VsZWN0ZWQgZXF1aXBtZW50IGNhc2UgLS0gMXN0IHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICBjb25zdCBzZWxlY3RlZEVxdWlwbWVudFN5bWJvbCA9ICBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpXHJcbiAgIHNlbGVjdGVkRXF1aXBtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2VsZWN0ZWRUeXBlSW1hZ2V9JylgO1xyXG5cclxuICAgLy8gVG9wIGVxdWlwbWVudCBjYXNlIC0tIDFzdCByZWVsLCB0b3Agc2xvdFxyXG4gICBjb25zdCB0b3BFcXVpcG1lbnRTeW1ib2wgPSBlcXVpcG1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy50b3AnKTtcclxuICAgdG9wRXF1aXBtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7d2VhcG9uSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkltYWdlcy5sZW5ndGgpXX0nKWBcclxuXHJcbiAgIC8vIEJvdHRvbSBlcXVpcG1lbnQgY2FzZSAtLSAxc3QgcmVlbCwgYm90dG9tIHNsb3RcclxuICAgY29uc3QgYm90dG9tRXF1aXBtZW50U3ltYm9sID0gZXF1aXBtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tJyk7XHJcbiAgIGJvdHRvbUVxdWlwbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3dlYXBvbkltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25JbWFnZXMubGVuZ3RoKV19JylgXHJcbiAgICAgXHJcbiAgIFxyXG4gICAvLyBJbWFnZXMgZm9yIHRoZSByYXJpdHkgcmVlbFxyXG4gICBjb25zdCByYXJpdHlSZWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jhcml0eVJlZWwnKVxyXG5cclxuICAgLy8gU2VsZWN0ZWQgcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIG1pZGRsZSBzbG90IFxyXG4gICBjb25zdCBzZWxlY3RlZFJhcml0eVN5bWJvbCA9ICByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpXHJcbiAgIHNlbGVjdGVkUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7c2VsZWN0ZWRSYXJpdHlJbWFnZX0nKWA7XHJcblxyXG4gICAvLyBUb3AgcmFyaXR5IGNhc2UgLS0gMm5kIHJlZWwsIHRvcCBzbG90XHJcbiAgIGNvbnN0IHRvcFJhcml0eVN5bWJvbCA9IHJhcml0eVJlZWwucXVlcnlTZWxlY3RvcignLnRvcCcpO1xyXG4gICB0b3BSYXJpdHlTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtyYXJpdHlJbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFyaXR5SW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgLy8gQm90dG9tIHJhcml0eSBjYXNlIC0tIDJuZCByZWVsLCBib3R0b20gc2xvdFxyXG4gICBjb25zdCBib3R0b21SYXJpdHlTeW1ib2wgPSByYXJpdHlSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5ib3R0b20nKTtcclxuICAgYm90dG9tUmFyaXR5U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cmFyaXR5SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhcml0eUltYWdlcy5sZW5ndGgpXX0nKWBcclxuICAgICAgXHJcblxyXG4gICAvLyBJbWFnZXMgZm9yIHRoZSBlbGVtZW50IHJlZWxcclxuICAgY29uc3QgZWxlbWVudFJlZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWxlbWVudFJlZWwnKVxyXG5cclxuICAgLy8gU2VsZWN0ZWQgZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCBtaWRkbGUgc2xvdCBcclxuICAgY29uc3Qgc2VsZWN0ZWRFbGVtZW50U3ltYm9sID0gIGVsZW1lbnRSZWVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpXHJcbiAgIHNlbGVjdGVkRWxlbWVudFN5bWJvbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3NlbGVjdGVkRWxlbWVudEltYWdlfScpYDtcclxuXHJcbiAgIC8vIFRvcCBlbGVtZW50IGNhc2UgLS0gM3JkIHJlZWwsIHRvcCBzbG90XHJcbiAgIGNvbnN0IHRvcEVsZW1lbnRTeW1ib2wgPSBlbGVtZW50UmVlbC5xdWVyeVNlbGVjdG9yKCcudG9wJyk7XHJcbiAgIHRvcEVsZW1lbnRTeW1ib2wuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtlbGVtZW50SW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVsZW1lbnRJbWFnZXMubGVuZ3RoKV19JylgXHJcblxyXG4gICAvLyBCb3R0b20gZWxlbWVudCBjYXNlIC0tIDNyZCByZWVsLCBib3R0b20gc2xvdFxyXG4gICBjb25zdCBib3R0b21FbGVtZW50U3ltYm9sID0gZWxlbWVudFJlZWwucXVlcnlTZWxlY3RvcignLmJvdHRvbScpO1xyXG4gICBib3R0b21FbGVtZW50U3ltYm9sLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7ZWxlbWVudEltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbGVtZW50SW1hZ2VzLmxlbmd0aCldfScpYFxyXG5cclxuICAgcmV0dXJuIGdlbmVyYXRlZFdlYXBvbjtcclxuIH1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BpbiAoaGVyb1NlbGVjdGlvbiwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBpZiAoY2hlY2tWYWxpZEN1cnJlbmN5QW1vdW50KGN1cnJlbmN5Q29udGFpbmVyKSkge1xyXG4gICAgICAgIHJldHVybiBnZW5lcmF0ZVNsb3RNYWNoaW5lSXRlbShoZXJvU2VsZWN0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvc2VTbG90TWFjaGluZU1vZGFsKCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4gIGV4cG9ydCBmdW5jdGlvbiByZXNldFNsb3RNYWNoaW5lSW1hZ2VzICgpIHtcclxuICAgIGNvbnN0IHN5bWJvbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zeW1ib2xcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzeW1ib2xFbGVtZW50cyk7XHJcblxyXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHN5bWJvbCBlbGVtZW50c1xyXG4gICAgICBzeW1ib2xFbGVtZW50cy5mb3JFYWNoKChzeW1ib2xFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgc3ltYm9sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcIlwiO1xyXG4gICAgICB9KVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIG9wZW5TbG90TWFjaGluZU1vZGFsKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nsb3RNYWNoaW5lTW9kYWwnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU2xvdE1hY2hpbmVNb2RhbCgpIHtcclxuICAgIHJlc2V0U2xvdE1hY2hpbmVJbWFnZXMoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbG90TWFjaGluZU1vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4iLCJpbXBvcnQgaW1wb3J0QWxsSW1hZ2VzIGZyb20gXCIuL2ltYWdlSGFuZGxlclwiO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gICAgcmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgICByZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuICApO1xyXG4gIFxyXG4gIGNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4gIClcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRXZWFwb25JbWFnZSAod2VhcG9uKSB7XHJcbi8vICAgICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyh3ZWFwb24pKTtcclxuLy8gICAgIHJldHVybiB3ZWFwb25JbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlYXBvbkltYWdlKHdlYXBvbikge1xyXG4gIGlmICghd2VhcG9uIHx8IHR5cGVvZiB3ZWFwb24gIT09IFwic3RyaW5nXCIpIHtcclxuICAgIC8vIEludmFsaWQgd2VhcG9uIHBhcmFtZXRlciwgaGFuZGxlIHRoZSBlcnJvciBvciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgd2VhcG9uSW1hZ2VVcmwgPSB3ZWFwb25JbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHdlYXBvbikpO1xyXG5cclxuICBpZiAoIXdlYXBvbkltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gd2VhcG9uLnJlcGxhY2UoL1xccy9nLCBcIlwiKTtcclxuICAgIHdlYXBvbkltYWdlVXJsID0gd2VhcG9uSW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCF3ZWFwb25JbWFnZVVybCkge1xyXG4gICAgICAvLyBJbWFnZSBub3QgZm91bmQgZm9yIHRoZSBnaXZlbiB3ZWFwb24sIGhhbmRsZSB0aGUgZXJyb3Igb3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gd2VhcG9uSW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRBcm1vdXJJbWFnZSAoYXJtb3VyKSB7XHJcbi8vICAgICBsZXQgYXJtb3VySW1hZ2VVcmwgPSBhcm1vdXJJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuLy8gICAgIHJldHVybiBhcm1vdXJJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFybW91ckltYWdlKGFybW91cikge1xyXG4gIGlmICghYXJtb3VyIHx8IHR5cGVvZiBhcm1vdXIgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBudWxsOyAvLyBPciByZXR1cm4gYSBkZWZhdWx0IGltYWdlIFVSTFxyXG4gIH1cclxuXHJcbiAgbGV0IGFybW91ckltYWdlVXJsID0gYXJtb3VySW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhhcm1vdXIpKTtcclxuXHJcbiAgaWYgKCFhcm1vdXJJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGFybW91ci5yZXBsYWNlKC9cXHMvZywgXCJcIik7XHJcbiAgICBhcm1vdXJJbWFnZVVybCA9IGFybW91ckltYWdlcy5maW5kKChpbWFnZSkgPT4gaW1hZ2UuaW5jbHVkZXMocmVzdWx0aW5nVHlwZSkpO1xyXG5cclxuICAgIGlmICghYXJtb3VySW1hZ2VVcmwpIHtcclxuICAgICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYXJtb3VySW1hZ2VVcmw7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRSYXJpdHlJbWFnZSAocmFyaXR5KSB7XHJcbi8vICAgICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhyYXJpdHkpKTtcclxuLy8gICAgIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZSAoZWxlbWVudCkge1xyXG4vLyAgICAgbGV0IGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZChpbWFnZSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcbi8vICAgICByZXR1cm4gZWxlbWVudEltYWdlVXJsO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFyaXR5SW1hZ2UocmFyaXR5KSB7XHJcbiAgaWYgKCFyYXJpdHkgfHwgdHlwZW9mIHJhcml0eSAhPT0gXCJzdHJpbmdcIikge1xyXG4gICAgcmV0dXJuIG51bGw7IC8vIE9yIHJldHVybiBhIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgfVxyXG5cclxuICBsZXQgcmFyaXR5SW1hZ2VVcmwgPSByYXJpdHlJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJhcml0eSkpO1xyXG5cclxuICBpZiAoIXJhcml0eUltYWdlVXJsKSB7XHJcbiAgICBjb25zdCByZXN1bHRpbmdUeXBlID0gcmFyaXR5ICsgXCJSYXJpdHlcIjtcclxuICAgIHJhcml0eUltYWdlVXJsID0gcmFyaXR5SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhyZXN1bHRpbmdUeXBlKSk7XHJcblxyXG4gICAgaWYgKCFyYXJpdHlJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByYXJpdHlJbWFnZVVybDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRJbWFnZShlbGVtZW50KSB7XHJcbiAgaWYgKCFlbGVtZW50IHx8IHR5cGVvZiBlbGVtZW50ICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICB9XHJcblxyXG4gIGxldCBlbGVtZW50SW1hZ2VVcmwgPSBlbGVtZW50SW1hZ2VzLmZpbmQoKGltYWdlKSA9PiBpbWFnZS5pbmNsdWRlcyhlbGVtZW50KSk7XHJcblxyXG5cclxuICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgY29uc3QgcmVzdWx0aW5nVHlwZSA9IGVsZW1lbnQudG9Mb3dlckNhc2UoKTtcclxuICAgIGVsZW1lbnRJbWFnZVVybCA9IGVsZW1lbnRJbWFnZXMuZmluZCgoaW1hZ2UpID0+IGltYWdlLmluY2x1ZGVzKHJlc3VsdGluZ1R5cGUpKTtcclxuXHJcbiAgICBpZiAoIWVsZW1lbnRJbWFnZVVybCkge1xyXG4gICAgICByZXR1cm4gbnVsbDsgLy8gT3IgcmV0dXJuIGEgZGVmYXVsdCBpbWFnZSBVUkxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50SW1hZ2VVcmw7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbUltYWdlKHN0cmluZykge1xyXG5cclxuICBsZXQgaXRlbUltYWdlVXJsO1xyXG5cclxuICBpZiAoc3RyaW5nLnR5cGUgPT09IFwid2VhcG9uXCIpIHtcclxuICAgIGl0ZW1JbWFnZVVybCA9IGdldFdlYXBvbkltYWdlKHN0cmluZy5pdGVtKTtcclxuICB9IGVsc2UgaWYgKHN0cmluZy50eXBlID09PSBcImFybW91clwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRBcm1vdXJJbWFnZShzdHJpbmcuaXRlbSk7XHJcbiAgfSBlbHNlIGlmIChzdHJpbmcudHlwZSA9PT0gXCJyYXJpdHlcIikge1xyXG4gICAgaXRlbUltYWdlVXJsID0gZ2V0UmFyaXR5SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH0gZWxzZSBpZiAoc3RyaW5nLnR5cGUgPT09IFwiZWxlbWVudFwiKSB7XHJcbiAgICBpdGVtSW1hZ2VVcmwgPSBnZXRFbGVtZW50SW1hZ2Uoc3RyaW5nLml0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGl0ZW1JbWFnZVVybDtcclxufSIsIi8vIHdoZXJlIFwiclwiIGlzIGEgcmVxdWlyZS5jb250ZXh0IGZ1bmN0aW9uXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGltcG9ydEFsbEltYWdlcyhyKSB7XHJcbiAgICBsZXQgaW1hZ2VzID0gW107XHJcblxyXG4gICAgLy8ga2V5cyBpcyBhbiBhcnJheSB0aGF0IHN0b3JlcyBhbGwgdGhlIGZpbGVuYW1lcyByZXR1cm5lZCBieSByLmtleXMoKVxyXG4gICAgY29uc3Qga2V5cyA9IHIua2V5cygpO1xyXG5cclxuICAgIC8vIGxlbmd0aCBzb3RyZXMgdGhlIGxlbmd0aCBvZiB0aGUga2V5cyBhcnJheVxyXG4gICAgY29uc3QgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XHJcbiAgXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgIGltYWdlcy5wdXNoKHIoa2V5KSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZXR1cm4gaW1hZ2VzO1xyXG4gIH1cclxuXHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9SZWQgRGVtb24gSGVsbS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvYXJtb3VyL1JlZCBEZW1vbiBIZWxtLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvYXJtb3VyIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJ5c3MucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2FieXNzLnBuZ1wiLFxuXHRcIi4vYWV0aGVyLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9hZXRoZXIucG5nXCIsXG5cdFwiLi9jb3Jyb2RlLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9jb3Jyb2RlLnBuZ1wiLFxuXHRcIi4vZ2FpYS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvZ2FpYS5wbmdcIixcblx0XCIuL2luZmVybm8ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL2luZmVybm8ucG5nXCIsXG5cdFwiLi9sdW5hci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvbHVuYXIucG5nXCIsXG5cdFwiLi9taXN0LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9lbGVtZW50cy9taXN0LnBuZ1wiLFxuXHRcIi4vc29sYXIucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3NvbGFyLnBuZ1wiLFxuXHRcIi4vc3RlZWwucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3N0ZWVsLnBuZ1wiLFxuXHRcIi4vdGVycmEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2VsZW1lbnRzL3RlcnJhLnBuZ1wiLFxuXHRcIi4vdm9sdC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvdm9sdC5wbmdcIixcblx0XCIuL3plcGh5ci5wbmdcIjogXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMvemVwaHlyLnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9pbWFnZXMvZWxlbWVudHMgc3luYyBcXFxcLihwbmcpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lcGljUmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9lcGljUmFyaXR5LnBuZ1wiLFxuXHRcIi4vbGVnZW5kYXJ5UmFyaXR5LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcy9sZWdlbmRhcnlSYXJpdHkucG5nXCIsXG5cdFwiLi9ub3JtYWxSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL25vcm1hbFJhcml0eS5wbmdcIixcblx0XCIuL3JhcmVSYXJpdHkucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3Jhcml0aWVzL3JhcmVSYXJpdHkucG5nXCIsXG5cdFwiLi91bmNvbW1vblJhcml0eS5wbmdcIjogXCIuL3NyYy9pbWFnZXMvcmFyaXRpZXMvdW5jb21tb25SYXJpdHkucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy9yYXJpdGllcyBzeW5jIFxcXFwuKHBuZykkXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL0FieXNzU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9BYnlzc1Nob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Db3Jyb3Npb25TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0NvcnJvc2lvblNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9HYWlhU2hvcnRTd29yZC5wbmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhcG9ucy9HYWlhU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0luZmVybm9TaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vTHVuYXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL0x1bmFyU2hvcnRTd29yZC5wbmdcIixcblx0XCIuL01pc3RTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL01pc3RTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vUnVuZVNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvUnVuZVNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9Tb2xhclNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvU29sYXJTaG9ydFN3b3JkLnBuZ1wiLFxuXHRcIi4vVm9sdFNob3J0U3dvcmQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXBvbnMvVm9sdFNob3J0U3dvcmQucG5nXCIsXG5cdFwiLi9aZXBoeXJTaG9ydFN3b3JkLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy93ZWFwb25zL1plcGh5clNob3J0U3dvcmQucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcy93ZWFwb25zIHN5bmMgXFxcXC4ocG5nKSRcIjsiLCJpbXBvcnQgeyBjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW50R29hbExpc3QgfSBmcm9tIFwiLi9kYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YXNrQW5kR29hbENvbnRyb2xsZXIgKCkge1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50SGVhZGVyXCIpO1xyXG4gICAgaWYgKGhlYWRlci5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICB3aGlsZSAoaGVhZGVyLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGhlYWRlci5yZW1vdmVDaGlsZChoZWFkZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgIC8vIENhc2U6IFVzZXIgaGFzIG5vIGdvYWxzIG9yIHRhc2tzIFxyXG4gICAgaWYgKGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoIDw9IDAgJiYgY3VycmVudEdvYWxMaXN0Lmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgbGV0IGdhbWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVDb250ZW50XCIpO1xyXG4gICAgICAgIGxldCBlbXB0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZW1wdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5UXVlc3RMaXN0XCIpO1xyXG4gICAgICAgIGVtcHR5Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBHb2FsIG9yIFRhc2sgdG8gR2V0IFN0YXJ0ZWRcIlxyXG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHlDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhc2U6IFVzZXIgY3JlYXRlcyBhIHRhc2sgYnV0IG5vIGdvYWxzXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgbGV0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRhc2tIZWFkZXIuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMVwiO1xyXG4gICAgICAgIHRhc2tIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRhc2tIZWFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhc2U6IFVzZXIgY3JlYXRlcyBhIGdvYWxcclxuICAgIGlmIChjdXJyZW50R29hbExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBnb2FsSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBnb2FsSGVhZGVyLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjJcIjtcclxuICAgICAgICBnb2FsSGVhZGVyLnRleHRDb250ZW50ID0gXCJHb2Fsc1wiO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChnb2FsSGVhZGVyKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuXHJcbn1cclxuXHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGtleSwgZGF0YSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShrZXkpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcclxuICB9IiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzL2NsYXNzZXMuanMnXHJcbmltcG9ydCB7IHJld2FyZFV0aWxpdGllcywgY3VycmVuY3lBZ2dyZWdhdG9yIH0gZnJvbSAnLi9jdXJyZW5jeUZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucy5qcyc7XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1F1ZXN0ICgpIHtcclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBuZXcgQ3VycmVuY3kobnVsbCwgbnVsbCksIG51bGwpXHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtT2JqZWN0aXZlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1EYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lUeXBlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeUFtb3VudFwiKS52YWx1ZTtcclxuXHJcbiAgICBxdWVzdE9iamVjdC5vYmplY3RpdmUgPSBnZXRRdWVzdEZvcm1PYmplY3RpdmU7XHJcbiAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IGdldFF1ZXN0Rm9ybURhdGU7XHJcbiAgICBxdWVzdE9iamVjdC5xdWVzdENvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQudHlwZSA9IGdldFF1ZXN0Q3VycmVuY3lUeXBlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLmFtb3VudCA9IHBhcnNlSW50KGdldFF1ZXN0Q3VycmVuY3lBbW91bnQpO1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgcXVlc3RJbmRleCBpbiBjdXJyZW50UXVlc3RMaXN0KSB7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTsgXHJcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkXCIpXHJcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtbcXVlc3RJbmRleF19YCk7XHJcblxyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKVxyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApO1xyXG5cclxuICAgICAgICAvL1F1ZXN0IENvbXBsZXRlIENoZWNrYm94IE5lc3RlZCBpbiBRdWVzdCBPYmplY3RpdmUgQ29udGVudCBEaXYgXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJNYXJrIFF1ZXN0IENvbXBsZXRlXCI7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLmh0bWxGb3IgPSBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YCk7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucXVlc3RDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNoZWNrYm94KTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVMYWJlbCk7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcImRhdGVUb0NvbXBsZXRlQm94XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtbcXVlc3RJbmRleF19LXJld2FyZGApO1xyXG5cclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBJbWFnZVxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkSW1hZ2VcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSlcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gUmV3YXJkIEJveCBDdXJyZW5jeSBBbW91bnRcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC5hbW91bnR9ICR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQudHlwZX1gKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChxdWVzdE9iamVjdGl2ZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlVG9Db21wbGV0ZUJveCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcclxuICAgIGN1cnJlbnRRdWVzdExpc3QucHVzaChxdWVzdCk7XHJcbiAgICByZXR1cm4gY3VycmVudFF1ZXN0TGlzdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0KSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY3VycmVudFF1ZXN0TGlzdC5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBpZiAoY3VycmVudFF1ZXN0TGlzdFtpbmRleF0ucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8vIEFzc3VtaW5nIHRoZSBjb2RlIGZvciB0aGUgV2VhcG9uIGNsYXNzLCBIZXJvVHlwZVdlYXBvbkxpc3QgY2xhc3MsIGFuZCB3ZWFwb25MaXN0cyBmb3IgZWFjaCBjbGFzcyBpcyBhbHJlYWR5IGRlZmluZWQuXHJcbmltcG9ydCB7IHJvZ3VlV2VhcG9uTGlzdCwgd2FycmlvcldlYXBvbkxpc3QsIHByaWVzdFdlYXBvbkxpc3QsIHNvcmNlcmVyV2VhcG9uTGlzdCwgdGVzdFdlYXBvbkxpc3QgfSBmcm9tIFwiLi93ZWFwb25MaXN0LmpzXCJcclxuaW1wb3J0IHsgaXRlbVBvc3NpYmxlRWxlbWVudHMsIGl0ZW1Qb3NzaWJsZVJhcml0eSwgaXRlbVBvc3NpYmxlU3RhdHMsIGl0ZW1Qb3NzaWJsZVByZWZpeCwgaXRlbVBvc3NpYmxlU3VmZml4IH0gZnJvbSBcIi4vY2xhc3Nlcy9pdGVtU3RhdHMuanNcIjtcclxuaW1wb3J0IGltcG9ydEFsbEltYWdlcyBmcm9tICcuL2hlbHBlckZ1bmN0aW9ucy9pbWFnZUhhbmRsZXIuanMnO1xyXG5cclxuY29uc3Qgd2VhcG9uSW1hZ2VzID0gaW1wb3J0QWxsSW1hZ2VzKFxyXG4gIHJlcXVpcmUuY29udGV4dCgnLi9pbWFnZXMvd2VhcG9ucycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGFybW91ckltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL2FybW91cicsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IGVsZW1lbnRJbWFnZXMgPSBpbXBvcnRBbGxJbWFnZXMoXHJcbiAgcmVxdWlyZS5jb250ZXh0KCcuL2ltYWdlcy9lbGVtZW50cycsIGZhbHNlLCAvXFwuKHBuZykkLylcclxuKTtcclxuXHJcbmNvbnN0IHJhcml0eUltYWdlcyA9IGltcG9ydEFsbEltYWdlcyhcclxuICByZXF1aXJlLmNvbnRleHQoJy4vaW1hZ2VzL3Jhcml0aWVzJywgZmFsc2UsIC9cXC4ocG5nKSQvKVxyXG4pXHJcblxyXG5cclxuXHJcbmNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBlbGVtZW50LCBpZCkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xyXG4gICAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtVHlwZShwbGF5ZXJDbGFzcykge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFdlYXBvbkxpc3QocGxheWVyQ2xhc3MpIHtcclxuICAgICAgICBzd2l0Y2ggKHBsYXllckNsYXNzKSB7XHJcbiAgICAgICAgICBjYXNlIFwiUm9ndWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHJvZ3VlV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJQcmllc3RcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHByaWVzdFdlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiV2FycmlvclwiOlxyXG4gICAgICAgICAgICByZXR1cm4gd2FycmlvcldlYXBvbkxpc3Q7XHJcbiAgICAgICAgICBjYXNlIFwiU29yY2VyZXJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNvcmNlcmVyV2VhcG9uTGlzdDtcclxuICAgICAgICAgIGNhc2UgXCJ0ZXN0XCI6XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXN0V2VhcG9uTGlzdDtcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW52YWxpZCBwbGF5ZXIgY2xhc3MuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdCB3ZWFwb25MaXN0ID0gZ2V0V2VhcG9uTGlzdChwbGF5ZXJDbGFzcyk7XHJcbiAgXHJcbiAgICBpZiAod2VhcG9uTGlzdCkge1xyXG4gICAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHdlYXBvbkxpc3QubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gd2VhcG9uTGlzdFtyYW5kb21JbmRleF0uX3R5cGU7XHJcbiAgICAgICAgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugb2YgYW4gaW52YWxpZCBwbGF5ZXIgY2xhc3NcclxuICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gcmV0cmlldmUgd2VhcG9uIGxpc3QuXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVJhcml0eSAoaXRlbVBvc3NpYmxlUmFyaXR5KSB7XHJcblxyXG4gICAgLy8gSW5pdGlhbGl6ZSB0b3RhbCBjaGFuY2UgdG8gMFxyXG4gICAgbGV0IHRvdGFsQ2hhbmNlID0gMDtcclxuXHJcbiAgICAvLyBBZGQgdGhlIGNoYW5jZSB2YWx1ZXMgb2YgYWxsIHJhcml0eSBvYmplY3QgY2hhbmNlc1xyXG4gICAgLy8gVGhpcyBzaG91bGQgYWRkIHVwIHRvIDEwMFxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eU9iamVjdC5jaGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgYSByYW5kb20gd2hvbGUgaW50ZWdlciBiZXR3ZWVuIDAgLSAxMDBcclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiB0b3RhbENoYW5jZSk7XHJcblxyXG4gICAgLy8gU2V0IHJhcml0eSB2YWx1ZSB0byBudWxsXHJcbiAgICBsZXQgcmFyaXR5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHJhcml0eSBiYXNlZCBvbiB5b3VyIHJhbmRvbUNoYW5jZSByb2xsLiBcclxuICAgIC8vIEZvciBleGFtcGxlIGlmIFJhbmRvbSBDaGFuY2Ugd2FzIDk0OlxyXG4gICAgLy8gOTQgLSA0MCAoTm9ybWFsIFJhcml0eSkgPSA1NCA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA1NCAtIDMwIChVbmNvbW1vbiBSYXJpdHkpID0gMjQgPC0tIG51bWJlciB1c2VkIGluIG5leHQgY2FsY1xyXG4gICAgLy8gMjQgLSAxNSAoUmFyZSBSYXJpdHkpID0gOSA8LS0gbnVtYmVyIHVzZWQgaW4gbmV4dCBjYWxjXHJcbiAgICAvLyA5IC0gMTAgKEVwaWMgUmFyaXR5KSA9IC0xIDwtLSBUaGVyZWZvcmUgcmFyaXR5IG9mIGl0ZW0gaXMgRXBpYyBhcyAoOSAtIDEwKSA8ICgwKVxyXG4gICAgZm9yIChsZXQgcmFyaXR5T2JqZWN0IG9mIGl0ZW1Qb3NzaWJsZVJhcml0eSkge1xyXG4gICAgICAgIHJhbmRvbUNoYW5jZSAtPSByYXJpdHlPYmplY3QuY2hhbmNlO1xyXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpcyAoLTAuMDEgdG8gYWNvdW50IGZvciByb3VuZGluZyBlcnJvcnMpXHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAtMC4wMSkge1xyXG4gICAgICAgICAgICByYXJpdHkgPSByYXJpdHlPYmplY3QucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgaXRlbVJhcml0eSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgICBjb25zdCBkZWNpbWFsUGxhY2VzID0gMjsgLy8gTnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzXHJcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XHJcbiAgICByZXR1cm4gTnVtYmVyKHJhbmRvbU51bWJlci50b0ZpeGVkKGRlY2ltYWxQbGFjZXMpKTtcclxuICB9XHJcblxyXG4gICAgLy8gVXNpbmcgdGhlIHNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHRvIGFjY2VzcyB0aGUgcHJvcGVydHkgYXQgcnVudGltZVxyXG4gICAgY29uc3QgcmFyaXR5U3RhdHMgPSBpdGVtUG9zc2libGVTdGF0c1tpdGVtUmFyaXR5XTtcclxuICAgIGNvbnN0IGl0ZW1TdGF0cyA9IHt9O1xyXG5cclxuICAgIGZvciAoY29uc3Qgc3RhdCBpbiByYXJpdHlTdGF0cykge1xyXG4gICAgICAgIGNvbnN0IHsgbWluLCBtYXggfSA9IHJhcml0eVN0YXRzW3N0YXRdO1xyXG4gICAgaXRlbVN0YXRzW3N0YXRdID0gZ2VuZXJhdGVSYW5kb21OdW1iZXIobWluLCBtYXgpO1xyXG4gICAgY29uc29sZS5sb2coc3RhdCwgaXRlbVN0YXRzW3N0YXRdKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVN0YXRzO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SXRlbVByZWZpeChpdGVtUG9zc2libGVQcmVmaXgsIGl0ZW1SYXJpdHkpIHtcclxuICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1Qb3NzaWJsZVByZWZpeFtpdGVtUmFyaXR5XS5sZW5ndGgpXHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlUHJlZml4W2l0ZW1SYXJpdHldW3JhbmRvbUluZGV4XTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtRWxlbWVudChpdGVtUG9zc2libGVFbGVtZW50cykge1xyXG4gICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbVBvc3NpYmxlRWxlbWVudHMubGVuZ3RoKTtcclxuICAgIHJldHVybiBpdGVtUG9zc2libGVFbGVtZW50c1tyYW5kb21JbmRleF1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1TdWZmaXgoaXRlbVBvc3NpYmxlU3VmZml4LCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gaXRlbVBvc3NpYmxlU3VmZml4W2VsZW1lbnRdO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVdlYXBvbiAocGxheWVyQ2xhc3MpIHtcclxuXHJcbiAgICBsZXQgd2VhcG9uVHlwZSA9IGdldEl0ZW1UeXBlKHBsYXllckNsYXNzKTtcclxuICAgIGxldCB3ZWFwb25FbGVtZW50ID0gZ2V0SXRlbUVsZW1lbnQoaXRlbVBvc3NpYmxlRWxlbWVudHMpO1xyXG4gICAgbGV0IHdlYXBvblJhcml0eSA9IGdldEl0ZW1SYXJpdHkoaXRlbVBvc3NpYmxlUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdGF0cyA9IGdldEl0ZW1TdGF0cyhpdGVtUG9zc2libGVTdGF0cywgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25QcmVmaXggPSBnZXRJdGVtUHJlZml4KGl0ZW1Qb3NzaWJsZVByZWZpeCwgd2VhcG9uUmFyaXR5KTtcclxuICAgIGxldCB3ZWFwb25TdWZmaXggPSBnZXRJdGVtU3VmZml4KGl0ZW1Qb3NzaWJsZVN1ZmZpeCwgd2VhcG9uRWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBXZWFwb24oXHJcbiAgICAgICAgKHdlYXBvblByZWZpeCArIFwiIFwiICsgd2VhcG9uVHlwZSArIFwiIFwiICsgd2VhcG9uU3VmZml4KSwgXHJcbiAgICAgICAgd2VhcG9uVHlwZSxcclxuICAgICAgICBwbGF5ZXJDbGFzcyxcclxuICAgICAgICB3ZWFwb25SYXJpdHksXHJcbiAgICAgICAgd2VhcG9uU3RhdHMsXHJcbiAgICAgICAgd2VhcG9uRWxlbWVudCxcclxuICAgICAgICBudWxsLFxyXG4gICAgKVxyXG5cclxuIFxyXG59XHJcbi8vIFNpbXVsYXRpbmcgYW4gaXRlbSBiZWluZyBwdWxsZWQgZnJvbSBhIGNoZXN0IGJhc2VkIG9uIHBsYXllcidzIGNsYXNzIGFuZCByYXJpdHkgcHJvYmFiaWxpdGllc1xyXG5leHBvcnQgZnVuY3Rpb24gcHVsbEl0ZW1Gcm9tQ2hlc3QocGxheWVyQ2xhc3MsIHBpdHkpIHtcclxuICAgXHJcblxyXG4gICAgLy8gQ29uc2lkZXIgY29uc3RhbnQgcmFyaXR5IG9iamVjdCBmb3Igc2NhbGluZyBwdXJwb3Nlc1xyXG4gICAgY29uc3QgcmFyaXR5UHJvYmFiaWxpdGllcyA9IFtcclxuICAgICAgICB7IHJhcml0eTogXCJOb3JtYWxcIiwgY2hhbmNlOiA0MCB9LFxyXG4gICAgICAgIHsgcmFyaXR5OiBcIlVuY29tbW9uXCIsIGNoYW5jZTogMzAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJSYXJlXCIsIGNoYW5jZTogMTUgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJFcGljXCIsIGNoYW5jZTogMTAgfSxcclxuICAgICAgICB7IHJhcml0eTogXCJMZWdlbmRhcnlcIiwgY2hhbmNlOiA1IH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGxldCB0b3RhbENoYW5jZSA9IDA7XHJcbiAgICBmb3IgKGNvbnN0IHJhcml0eURhdGEgb2YgcmFyaXR5UHJvYmFiaWxpdGllcykge1xyXG4gICAgICAgIHRvdGFsQ2hhbmNlICs9IHJhcml0eURhdGEuY2hhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByYW5kb21DaGFuY2UgPSBNYXRoLnJhbmRvbSgpICogdG90YWxDaGFuY2U7XHJcbiAgICBjb25zb2xlLmxvZyhyYW5kb21DaGFuY2UpO1xyXG4gICAgbGV0IHJhcml0eSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChjb25zdCByYXJpdHlEYXRhIG9mIHJhcml0eVByb2JhYmlsaXRpZXMpIHtcclxuICAgICAgICByYW5kb21DaGFuY2UgLT0gcmFyaXR5RGF0YS5jaGFuY2U7XHJcbiAgICAgICAgaWYgKHJhbmRvbUNoYW5jZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJhcml0eSA9IHJhcml0eURhdGEucmFyaXR5O1xyXG4gICAgICAgICAgICByZXR1cm4gcmFyaXRcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB3ZWFwb25MaXN0Lmxlbmd0aCk7XHJcbiAgICBjb25zdCByYW5kb21XZWFwb24gPSB3ZWFwb25MaXN0W3JhbmRvbUluZGV4XTtcclxuXHJcbiAgICAvLyBBc3NpZ24gcmFuZG9tIHByb3BlcnRpZXMgdG8gdGhlIHdlYXBvblxyXG4gICAgcmFuZG9tV2VhcG9uLl9uYW1lID0gXCJEaXZpbmUgU3RhZmZcIjsgLy8gRXhhbXBsZSBwcm9wZXJ0eVxyXG4gICAgcmFuZG9tV2VhcG9uLl9yYXJpdHkgPSByYXJpdHk7IC8vIEFzc2lnbmluZyB0aGUgZGV0ZXJtaW5lZCByYXJpdHlcclxuXHJcbiAgICAvLyBJZiB0aGUgcHVsbGVkIGl0ZW0gaXMgbGVnZW5kYXJ5LCByZXNldCB0aGUgcGl0eSBjb3VudGVyXHJcbiAgICBpZiAocmFyaXR5ID09PSBcIkxlZ2VuZGFyeVwiKSB7XHJcbiAgICAgICAgcGl0eSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBpdHkrKzsgLy8gSW5jcmVtZW50IHRoZSBwaXR5IGNvdW50ZXIgaWYgYSBsZWdlbmRhcnkgaXRlbSB3YXMgbm90IHB1bGxlZFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEd1YXJhbnRlZSBhIGxlZ2VuZGFyeSBpdGVtIGlmIHRoZSBwaXR5IGNvdW50ZXIgcmVhY2hlcyAxMDBcclxuICAgIGlmIChwaXR5ID49IDEwMCkge1xyXG4gICAgICAgIHJhbmRvbVdlYXBvbi5fcmFyaXR5ID0gXCJMZWdlbmRhcnlcIjtcclxuICAgICAgICBwaXR5ID0gMDsgLy8gUmVzZXQgdGhlIHBpdHkgY291bnRlclxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbVdlYXBvbi5fc3RhdHMgPSB7XHJcbiAgICAgICAgYXR0YWNrOiAxNTAsXHJcbiAgICAgICAgaW50ZWxsZWN0OiA1MCxcclxuICAgICAgICBzdGFtaW5hOiA4MCxcclxuICAgIH07IC8vIEV4YW1wbGUgcHJvcGVydHlcclxuXHJcbiAgICByZXR1cm4geyBpdGVtOiByYW5kb21XZWFwb24sIHBpdHkgfTtcclxufVxyXG4iLCJjbGFzcyBXZWFwb24ge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgY2xhc3NSZXN0cmljdGlvbiwgcmFyaXR5LCBzdGF0cywgaWQpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uID0gY2xhc3NSZXN0cmljdGlvbjtcclxuICAgICAgICB0aGlzLl9yYXJpdHkgPSByYXJpdHk7XHJcbiAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICB0aGlzLl9pZCA9IGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3Qgcm9ndWVXZWFwb25MaXN0ID0gW1xyXG4gICAgbmV3IFdlYXBvbihcIkRhZ2dlclwiLCBcIkRhZ2dlclwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkR1YWwgQmxhZGVzXCIsIFwiRHVhbCBCbGFkZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJCb3dcIiwgXCJCb3dcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJUaHJvd2luZyBLbml2ZXNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDbGF3IFdlYXBvbnNcIiwgXCJDbGF3IFdlYXBvbnNcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDcm9zc2Jvd1wiLCBcIkNyb3NzYm93XCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUmFwaWVyXCIsIFwiUmFwaWVyXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiQmxvd2d1blwiLCBcIkJsb3dndW5cIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJDaGFrcmFtc1wiLCBcIkNoYWtyYW1zXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiR2Fycm90ZVwiLCBcIkdhcnJvdGVcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3Qgd2FycmlvcldlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiR3JlYXRzd29yZFwiLCBcIkdyZWF0c3dvcmRcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlN3b3JkIGFuZCBTaGllbGRcIiwgXCJTd29yZCBhbmQgU2hpZWxkXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJXYXJoYW1tZXJcIiwgXCJXYXJoYW1tZXJcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlBvbGVhcm1cIiwgXCJQb2xlYXJtXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBeGVcIiwgXCJBeGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2VcIiwgXCJNYWNlXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJEdWFsLVdpZWxkaW5nIEF4ZXNcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyZWF0YXhlXCIsIFwiR3JlYXRheGVcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkZsYWlsXCIsIFwiRmxhaWxcIiwgXCJXYXJyaW9yXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIldhciBHYXVudGxldHNcIiwgXCJXYXIgR2F1bnRsZXRzXCIsIFwiV2FycmlvclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgcHJpZXN0V2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIk1hY2UgYW5kIFNoaWVsZFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IFdhbmRcIiwgXCJIb2x5IFdhbmRcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiVG9tZVwiLCBcIlRvbWVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSG9seSBIYW1tZXJcIiwgXCJIb2x5IEhhbW1lclwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBbmtoXCIsIFwiQW5raFwiLCBcIlByaWVzdFwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJIb2x5IEJvd1wiLCBcIkhvbHkgQm93XCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNhY3JlZCBDaGFsaWNlXCIsIFwiU2FjcmVkIENoYWxpY2VcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiUHJheWVyIEJlYWRzXCIsIFwiUHJheWVyIEJlYWRzXCIsIFwiUHJpZXN0XCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkhvbHkgU2N5dGhlXCIsIFwiSG9seSBTY3l0aGVcIiwgXCJQcmllc3RcIiwgbnVsbCwgbnVsbCwgbnVsbClcclxuXTtcclxuXHJcbmNvbnN0IHNvcmNlcmVyV2VhcG9uTGlzdCA9IFtcclxuICAgIG5ldyBXZWFwb24oXCJTdGFmZlwiLCBcIlN0YWZmXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU3BlbGxib29rXCIsIFwiU3BlbGxib29rXCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiRWxlbWVudGFsIFdhbmRcIiwgXCJFbGVtZW50YWwgV2FuZFwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNyeXN0YWwgT3JiXCIsIFwiQ3J5c3RhbCBPcmJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lYmxhZGVcIiwgXCJSdW5lYmxhZGVcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgR2F1bnRsZXRzXCIsIFwiQXJjYW5lIEdhdW50bGV0c1wiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkVuY2hhbnRlZCBCb3dcIiwgXCJFbmNoYW50ZWQgQm93XCIsIFwiU29yY2VyZXJcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiU2NlcHRlclwiLCBcIlNjZXB0ZXJcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJBcmNhbmUgRGFnZ2VyXCIsIFwiQXJjYW5lIERhZ2dlclwiLCBcIlNvcmNlcmVyXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdyYXZpdG9uIFN0YWZmXCIsIFwiR3Jhdml0b24gU3RhZmZcIiwgXCJTb3JjZXJlclwiLCBudWxsLCBudWxsLCBudWxsKVxyXG5dO1xyXG5cclxuY29uc3QgdGVzdFdlYXBvbkxpc3QgPSBbXHJcbiAgICBuZXcgV2VhcG9uKFwiQWJ5c3MgU2hvcnQgU3dvcmRcIiwgXCJBYnlzcyBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIkNvcnJvc2lvbiBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIkdhaWEgU2hvcnQgU3dvcmRcIiwgXCJHYWlhIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiSW5mZXJubyBTaG9ydCBTd29yZFwiLCBcIkluZmVybm8gU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJMdW5hciBTaG9ydCBTd29yZFwiLCBcIkx1bmFyIFNob3J0IFN3b3JkXCIsIFwiUm9ndWVcIiwgbnVsbCwgbnVsbCwgbnVsbCksXHJcbiAgICBuZXcgV2VhcG9uKFwiTWlzdCBTaG9ydCBTd29yZFwiLCBcIk1pc3QgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJSdW5lIFNob3J0IFN3b3JkXCIsIFwiUnVuZSBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlNvbGFyIFNob3J0IFN3b3JkXCIsIFwiU29sYXIgU2hvcnQgU3dvcmRcIiwgXCJSb2d1ZVwiLCBudWxsLCBudWxsLCBudWxsKSxcclxuICAgIG5ldyBXZWFwb24oXCJWb2x0IFNob3J0IFN3b3JkXCIsIFwiVm9sdCBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpLFxyXG4gICAgbmV3IFdlYXBvbihcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlplcGh5ciBTaG9ydCBTd29yZFwiLCBcIlJvZ3VlXCIsIG51bGwsIG51bGwsIG51bGwpXHJcbl07XHJcblxyXG5leHBvcnQgeyByb2d1ZVdlYXBvbkxpc3QsIHdhcnJpb3JXZWFwb25MaXN0LCBwcmllc3RXZWFwb25MaXN0LCBzb3JjZXJlcldlYXBvbkxpc3QsIHRlc3RXZWFwb25MaXN0IH07IiwiY2xhc3MgWm9kaWFjU2lnbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xyXG4gICAgICAvLyBTcGxpdCB0aGUgZGF0ZSByYW5nZSBzdHJpbmcgaW50byBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgICAgIGNvbnN0IFtzdGFydFN0ciwgZW5kU3RyXSA9IGRhdGVSYW5nZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBcclxuICAgICAgLy8gUGFyc2UgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdXNpbmcgdGhlIERhdGUgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRTdHIpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcclxuICAgIFxyXG4gICAgICAvLyBBZGp1c3QgdGhlIHllYXIgb2YgdGhlIGVuZCBkYXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIGVuZERhdGUuc2V0RnVsbFllYXIoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBhbiBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3RhcnREYXRlLCBlbmREYXRlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcmllc1wiLFxyXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU3RlZWxcIixcclxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJUYXVydXNcIixcclxuICAgICAgXCJBcHJpbCAyMCAtIE1heSAyMFwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJIYWRlcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJHZW1pbmlcIixcclxuICAgICAgXCJNYXkgMjEgLSBKdW5lIDIwXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiWmVwaHlyXCIsXHJcbiAgICAgIFwiSXphbmFtaS9JemFuYWdpLCB0aGUgR29kcy9Hb2RkZXNzZXMgb2YgQ3JlYXRpb24gYW5kIERlYXRoIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhbmNlclwiLFxyXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJMdW5hclwiLFxyXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMZW9cIixcclxuICAgICAgXCJKdWx5IDIzIC0gQXVndXN0IDIyXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlNvbGFyXCIsXHJcbiAgICAgIFwiUmEsIHRoZSBHb2Qgb2YgdGhlIFN1biAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJWaXJnb1wiLFxyXG4gICAgICBcIkF1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMlwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiVGVycmFcIixcclxuICAgICAgXCJPc2lyaXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiTGlicmFcIixcclxuICAgICAgXCJTZXB0ZW1iZXIgMjMgLSBPY3RvYmVyIDIyXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiQWV0aGVyXCIsXHJcbiAgICAgIFwiSG9ydXMsIHRoZSBHb2Qgb2YgdGhlIFNreSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTY29ycGlvXCIsXHJcbiAgICAgIFwiT2N0b2JlciAyMyAtIE5vdmVtYmVyIDIxXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJDb3Jyb2RlXCIsXHJcbiAgICAgIFwiUG9zZWlkb24sIHRoZSBHb2Qgb2YgdGhlIFNlYSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJTYWdpdHRhcml1c1wiLFxyXG4gICAgICBcIk5vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjFcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiSW5mZXJub1wiLFxyXG4gICAgICBcIkFtYXRlcmFzdSwgdGhlIEdvZGRlc3Mgb2YgdGhlIFN1biAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJDYXByaWNvcm5cIixcclxuICAgICAgXCJEZWNlbWJlciAyMiAtIEphbnVhcnkgMTlcIixcclxuICAgICAgXCJFYXJ0aFwiLFxyXG4gICAgICBcIkdhaWFcIixcclxuICAgICAgXCJJc2lzLCB0aGUgR29kZGVzcyBvZiBNYWdpYyBhbmQgTGlmZSAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcXVhcml1c1wiLFxyXG4gICAgICBcIkphbnVhcnkgMjAgLSBGZWJydWFyeSAxOFwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIlZvbHRcIixcclxuICAgICAgXCJaZXVzLCB0aGUgR29kIG9mIFRodW5kZXIgKEdyZWVrKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiUGlzY2VzXCIsXHJcbiAgICAgIFwiRmVicnVhcnkgMTkgLSBNYXJjaCAyMFwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiTWlzdFwiLFxyXG4gICAgICBcIlN1c2Fub28sIHRoZSBHb2Qgb2YgdGhlIFNlYSBhbmQgU3Rvcm1zIChKYXBhbmVzZSlcIlxyXG4gICAgKVxyXG4gIF07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB6b2RpYWNTaWduczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgeyBjdXJyZW5jeUNvbnRhaW5lciwgcGxheWVySW52ZW50b3J5fSBmcm9tICcuL2RhdGEuanMnO1xyXG5pbXBvcnQgeyBzcGluLCBvcGVuU2xvdE1hY2hpbmVNb2RhbCwgY2xvc2VTbG90TWFjaGluZU1vZGFsLCByZXNldFNsb3RNYWNoaW5lSW1hZ2VzfSBmcm9tICcuL2dhY2hhU3BpbkZ1bmN0aW9ucy5qcyc7XHJcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5jb25zb2xlLmxvZyhjdXJyZW5jeUNvbnRhaW5lcilcclxuXHJcbmxldCB0ZXN0V2VhcG9uTGlzdCA9IChcInRlc3RcIilcclxuY29uc29sZS5sb2cocGxheWVySW52ZW50b3J5KTtcclxuXHJcbmRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3koY3VycmVuY3lDb250YWluZXIpO1xyXG5cclxuY29uc3Qgd2VhcG9uUm9sbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjd2VhcG9uR2VuZXJhdG9yXCIpO1xyXG53ZWFwb25Sb2xsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBvcGVuU2xvdE1hY2hpbmVNb2RhbCgpO1xyXG59KVxyXG5cclxuY29uc3Qgc3BpblNsb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NwaW5TbG90QnV0dG9uXCIpO1xyXG5zcGluU2xvdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCl7XHJcbiAgICBsZXQgbmV3SXRlbSA9IHNwaW4odGVzdFdlYXBvbkxpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuXHJcbiAgICBpZiAobmV3SXRlbSAhPSBmYWxzZSkge1xyXG4gICAgICAvLyBwbGF5ZXIuZXF1aXBJdGVtKG5ld0l0ZW0pO1xyXG4gICAgICBwbGF5ZXJJbnZlbnRvcnkucHVzaChuZXdJdGVtKVxyXG4gICAgICBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKFwicGxheWVySW52ZW50b3J5XCIsIHBsYXllckludmVudG9yeSlcclxuICAgIH1cclxuICAgIFxyXG59KTtcclxuXHJcbmNvbnN0IGNsb3NlU2xvdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG9zZVNsb3RcIik7XHJcbmNsb3NlU2xvdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICBjbG9zZVNsb3RNYWNoaW5lTW9kYWwoKTtcclxufSlcclxuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==