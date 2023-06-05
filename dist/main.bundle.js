/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/ChestKey.png":
/*!*********************************!*\
  !*** ./src/images/ChestKey.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./images/ChestKey.png");

/***/ }),

/***/ "./src/images/GGToken.png":
/*!********************************!*\
  !*** ./src/images/GGToken.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./images/GGToken.png");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (() => {

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
  
    get elementalValue() {
      return this._elementalValue;
    }
  
    get stats() {
      return this._stats;
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
    constructor(classType) {
      this._classType = classType;
      this._baseStats = this.getInitialBaseStats(classType);
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
  
    getInitialBaseStats(classType) {
      switch (classType) {
        case "sorcerer":
          return {
            strength: 4,
            agility: 6,
            intelligence: 8,
            constitution: 4,
          };
        case "priest":
          return {
            strength: 4,
            agility: 4,
            intelligence: 6,
            constitution: 8,
          };
        case "warrior":
          return {
            strength: 8,
            agility: 4,
            intelligence: 4,
            constitution: 6,
          };
        case "rogue":
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
        constructor(spriteImage, stats, equippedItems, elementalSelection) {
            this._spriteImage = spriteImage;
            this._stats = stats;
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
    GGTokens: _images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChestKeys: _images_ChestKey_png__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./src/modalfunctions.js":
/*!*******************************!*\
  !*** ./src/modalfunctions.js ***!
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
      "Gaia",
      "Isis, the Goddess of Magic and Life (Egyptian)"
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
      "Abyss",
      "Osiris, the God of the Underworld (Egyptian)"
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _questFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questFunctions.js */ "./src/questFunctions.js");
/* harmony import */ var _modalfunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modalfunctions.js */ "./src/modalfunctions.js");
/* harmony import */ var _dueDate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dueDate.js */ "./src/dueDate.js");
/* harmony import */ var _getObjective_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getObjective.js */ "./src/getObjective.js");
/* harmony import */ var _eventManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventManager */ "./src/eventManager.js");
/* harmony import */ var _localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorageFunctions */ "./src/localStorageFunctions.js");










// Globally Scoped Variables
let currentQuestList = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currentQuestList') || []; // Load from local storage
let currencyContainer = ((0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currencyContainer') || [new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("ChestKeys", 0)]); // Load from local storage
let playerInventory = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerInventory') || [];
let playerEquippedItems = (0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('playerEquippedItems') || [];



(0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);

// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button#addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {
    ;(0,_modalfunctions_js__WEBPACK_IMPORTED_MODULE_3__.displayFormModal)();
})


// Event Listener to Add Quest to Quest List and Display
let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    (0,_modalfunctions_js__WEBPACK_IMPORTED_MODULE_3__.closeFormModal)(e);
    let newlyGeneratedQuest = (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.getNewQuest)();
    (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.addQuest)(currentQuestList, newlyGeneratedQuest);
    (0,_eventManager__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList, currencyContainer);
})

// Weapon Creation Test
let fireSword = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Weapon("fire sword", "sword", "rare", {strength: 30});
// console.log(fireSword);

let birthday = new Date("1996-01-21");
let birthday2 = new Date("1998-12-22");
let currentPlayerStats = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerStats("warrior");
let currentPlayer = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerCharacter(null, currentPlayerStats, playerEquippedItems, birthday);

currentPlayer.equipItem(fireSword);
currentPlayer.stats.levelUp();
currentPlayer.stats.allocateSkillPoint("strength");
console.log(currentPlayer);
console.log(birthday)
console.log(currentPlayer._elementalAffinity);

// // var currentDate = new Date();
// // var year = currentDate.getFullYear();
// // var month = String(currentDate.getMonth() + 1).padStart(2, '0');
// // var day = String(currentDate.getDate()).padStart(2, '0');
// // var formattedDate = year + '-' + month + '-' + day;
// // let questForm = document.getElementById("formDate");
// // questForm.setAttribute("min", formattedDate);
// // questForm.setAttribute("value", formattedDate);


// // test cases
// addQuest(currentQuestList, gymTask);
// addQuest(currentQuestList, waterTask);
// createAndDisplayQuestCards(currentQuestList, currencyContainer);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzFGO0FBQ0EsdUJBQXVCLCtFQUF1Qiw0QkFBNEI7QUFDMUUseUJBQXlCLCtFQUF1Qiw4QkFBOEIsaURBQVEscUJBQXFCLGlEQUFRLG9CQUFvQjtBQUN2SSxzQkFBc0IsK0VBQXVCO0FBQzdDLDBCQUEwQiwrRUFBdUI7Ozs7QUFJakQseURBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFnQjtBQUNwQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSx5REFBb0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBLG9CQUFvQiwrQ0FBTSxpQ0FBaUMsYUFBYTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFXO0FBQ3hDLHdCQUF3Qix3REFBZTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2ltYWdlcy9DaGVzdEtleS5wbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2ltYWdlcy9HR1Rva2VuLnBuZyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY3VycmVuY3lGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2R1ZURhdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V2ZW50TWFuYWdlci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2V0T2JqZWN0aXZlLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZGFsZnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9xdWVzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvem9kaWFjUG93ZXJzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcIi4vaW1hZ2VzL0dHVG9rZW4ucG5nXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHpvZGlhY1NpZ25zIGZyb20gXCIuL3pvZGlhY1Bvd2Vyc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgZGF0ZVRvQ29tcGxldGUsIHF1ZXN0Q29tcGxldGUsIHJld2FyZCwgaWQpIHtcclxuICAgICAgICB0aGlzLm9iamVjdGl2ZSA9IG9iamVjdGl2ZTtcclxuICAgICAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5xdWVzdENvbXBsZXRlID0gcXVlc3RDb21wbGV0ZTtcclxuICAgICAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRXF1aXBtZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgaXNFcXVpcHBlZCwgaW5QbGF5ZXJJbnZlbnRvcnksIGlkKSB7XHJcbiAgICAgICAgdGhpcy5fb2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMuX2lzRXF1aXBwZWQgPSBpc0VxdWlwcGVkO1xyXG4gICAgICAgIHRoaXMuX2luUGxheWVySW52ZW50b3J5ID0gaW5QbGF5ZXJJbnZlbnRvcnk7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCByYXJpdHksIHN0YXRzKSB7XHJcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xyXG4gICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHR5cGUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHJhcml0eSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3Jhcml0eTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCBlbGVtZW50YWxWYWx1ZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRhbFZhbHVlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0IHN0YXRzKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBBcm1vdXIge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fdHlwZSA9IHR5cGU7XHJcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcclxuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgIH1cclxuICBcclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCB0eXBlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICAgIH1cclxuICBcclxuICAgIGdldCByYXJpdHkoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xyXG4gICAgY29uc3RydWN0b3IoY2xhc3NUeXBlKSB7XHJcbiAgICAgIHRoaXMuX2NsYXNzVHlwZSA9IGNsYXNzVHlwZTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGNsYXNzVHlwZSk7XHJcbiAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHMgPSB7fTtcclxuICAgICAgdGhpcy5fc2tpbGxQb2ludHMgPSAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0U3RhdChzdGF0TmFtZSkge1xyXG4gICAgICBjb25zdCBiYXNlVmFsdWUgPSB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdIHx8IDA7XHJcbiAgICAgIGNvbnN0IGVxdWlwcGVkVmFsdWUgPSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSB8fCAwO1xyXG4gICAgICByZXR1cm4gYmFzZVZhbHVlICsgZXF1aXBwZWRWYWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIHNldFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICBcclxuICAgIGFkZFN0YXQoc3RhdE5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIGlmICh0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIGVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xyXG4gICAgICBmb3IgKGNvbnN0IHN0YXROYW1lIGluIGl0ZW1TdGF0cykge1xyXG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gKz0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdID0gaXRlbVN0YXRzW3N0YXROYW1lXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIHVuZXF1aXBJdGVtU3RhdHMoaXRlbVN0YXRzKSB7XHJcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XHJcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkgJiYgdGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcclxuICAgICAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHNbc3RhdE5hbWVdIC09IGl0ZW1TdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICBpZiAodGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV0gPD0gMCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRJbml0aWFsQmFzZVN0YXRzKGNsYXNzVHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKGNsYXNzVHlwZSkge1xyXG4gICAgICAgIGNhc2UgXCJzb3JjZXJlclwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIGFnaWxpdHk6IDYsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogOCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIFwicHJpZXN0XCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcclxuICAgICAgICAgICAgYWdpbGl0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA2LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJ3YXJyaW9yXCI6XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdHJlbmd0aDogOCxcclxuICAgICAgICAgICAgYWdpbGl0eTogNCxcclxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxyXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDYsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJyb2d1ZVwiOlxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc3RyZW5ndGg6IDYsXHJcbiAgICAgICAgICAgIGFnaWxpdHk6IDgsXHJcbiAgICAgICAgICAgIGludGVsbGlnZW5jZTogNCxcclxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA0LFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjbGFzcyB0eXBlLlwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgbGV2ZWxVcCgpIHtcclxuICAgICAgY29uc3QgbGV2ZWwgPSB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgfHwgMTtcclxuICAgICAgdGhpcy5fYmFzZVN0YXRzLmxldmVsID0gbGV2ZWwgKyAxO1xyXG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxyXG4gICAgfVxyXG4gIFxyXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XHJcbiAgICAgIGlmICh0aGlzLl9za2lsbFBvaW50cyA+IDAgJiYgdGhpcy5fYmFzZVN0YXRzLmhhc093blByb3BlcnR5KHN0YXROYW1lKSkge1xyXG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gMTtcclxuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc2tpbGxQb2ludHMoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9za2lsbFBvaW50cztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFBsYXllckNoYXJhY3RlciB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc3ByaXRlSW1hZ2UsIHN0YXRzLCBlcXVpcHBlZEl0ZW1zLCBlbGVtZW50YWxTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcclxuICAgICAgICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcclxuICAgICAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcyA9IGVxdWlwcGVkSXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnRhbFNlbGVjdGlvbiA9IGVsZW1lbnRhbFNlbGVjdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudGFsQWZmaW5pdHkgPSB0aGlzLmdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXQgc3ByaXRlSW1hZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3ByaXRlSW1hZ2Uoc3ByaXRlSW1hZ2UpIHtcclxuICAgICAgICB0aGlzLl9zcHJpdGVJbWFnZSA9IHNwcml0ZUltYWdlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgc3RhdHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXQgc3RhdHMoc3RhdHMpIHtcclxuICAgICAgICB0aGlzLl9zdGF0cyA9IHN0YXRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZXF1aXBwZWRJdGVtcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMgPSBlcXVpcHBlZEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBlbGVtZW50YWxBZmZpbml0eSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldCBlbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxBZmZpbml0eSkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcclxuICAgICAgICAvLyBBZGRpdGlvbmFsIGxvZ2ljIGZvciBlcXVpcHBpbmcgYW4gaXRlbVxyXG4gICAgICAgIHRoaXMuX2VxdWlwcGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICBhdHRhY2sodGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gUGVyZm9ybSBhdHRhY2sgbG9naWNcclxuICAgICAgICBjb25zb2xlLmxvZyhgQXR0YWNraW5nICR7dGFyZ2V0fSFgKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGVjaWFsQXR0YWNrKHRhcmdldCkge1xyXG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBTcGVjaWFsIEF0dGFja2luZyAke3RhcmdldH0hYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCaXJ0aGRheUluUmFuZ2UoYmlydGhkYXksIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xyXG4gICAgICAgIC8vIENvbnZlcnQgdGhlIGJpcnRoZGF5IHRvIGEgRGF0ZSBvYmplY3QgaWYgaXQncyBhIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheVxyXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjb25zdCBiaXJ0aGRheURheSA9IGJpcnRoZGF5RGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcclxuICAgICAgICBjb25zdCBzdGFydE1vbnRoID0gc3RhcnREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgY29uc3Qgc3RhcnREYXkgPSBzdGFydERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgIGNvbnN0IGVuZERheSA9IGVuZERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAxMSAmJiBiaXJ0aGRheURheSA+IDIxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIkNhcHJpY29yblwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYmlydGhkYXlNb250aCA9PSAwICYmIGJpcnRoZGF5RGF5IDwgMjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIChiaXJ0aGRheU1vbnRoID4gc3RhcnRNb250aCB8fCAoYmlydGhkYXlNb250aCA9PT0gc3RhcnRNb250aCAmJiBiaXJ0aGRheURheSA+PSBzdGFydERheSkpICYmXHJcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICAgLy8gT3RoZXIgbWV0aG9kcyBjYW4gYmUgYWRkZWQgaGVyZSBmb3IgZnVydGhlciBmdW5jdGlvbmFsaXR5XHJcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xyXG5cclxuICAgICAgICAvLyBpZiBlbGVtZW50YWwgc2VsZWN0aW9uIGlzIGEgYmlydGhkYXkgcHJvdmlkZWQ6XHJcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIC8vIEFsaWFzIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIG9mIHRoZSB6b2RpYWMgU2lnbnMgZGF0ZSByYW5nZSBwcm9wZXJ0eVxyXG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcclxuICAgICAgICAgICAgbGV0IGJpcnRoRGF5UmFuZ2VDaGVjayA9IHRoaXMuaXNCaXJ0aGRheUluUmFuZ2UoZWxlbWVudGFsU2VsZWN0aW9uLCBkYXRlQ2hlY2tlci5zdGFydERhdGUsIGRhdGVDaGVja2VyLmVuZERhdGUpXHJcblxyXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoem9kaWFjU2lnbnNbOV0pO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmlydGhEYXlSYW5nZUNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGZvciAobGV0IGluZGV4IGluIHpvZGlhY1NpZ25zKSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50YWxTZWxlY3Rpb24gPT0gem9kaWFjU2lnbnNbaW5kZXhdLl91bmlxdWVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gICAgICBcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRhdGVSYW5nZSwgYmFzZUVsZW1lbnQsIHVuaXF1ZUVsZW1lbnQsIGRlaXR5KSB7XHJcbiAgICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcclxuICAgICAgICAgIHRoaXMuX2Jhc2VFbGVtZW50ID0gYmFzZUVsZW1lbnQ7XHJcbiAgICAgICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4iLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lVG9Db21wbGV0ZSAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlICgpO1xyXG5cclxuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKGhvdXJzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gY3VycmVudERhdGU7XHJcbn0iLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgLy8gbGV0IHBlcnNpc3RpbmdDdXJyZW5jeUNvbnRhaW5lciA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGAke2N1cnJlbmN5Q29udGFpbmVyfWApXHJcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShgJHtjdXJyZW50UXVlc3RMaXN0fWApXHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1PYmplY3RpdmVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5QW1vdW50XCIpLnZhbHVlO1xyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4IGluIGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke1txdWVzdEluZGV4XX1gKTtcclxuXHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApXHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgQ29tcGxldGUgQ2hlY2tib3ggTmVzdGVkIGluIFF1ZXN0IE9iamVjdGl2ZSBDb250ZW50IERpdiBcclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwuaHRtbEZvciA9IGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUxhYmVsKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XSkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLmFtb3VudH0gJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC50eXBlfWApO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiY2xhc3MgWm9kaWFjU2lnbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xyXG4gICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xyXG4gICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xyXG4gICAgICB0aGlzLl91bmlxdWVFbGVtZW50ID0gdW5pcXVlRWxlbWVudDtcclxuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xyXG4gICAgICAvLyBTcGxpdCB0aGUgZGF0ZSByYW5nZSBzdHJpbmcgaW50byBzdGFydCBhbmQgZW5kIGRhdGVzXHJcbiAgICAgIGNvbnN0IFtzdGFydFN0ciwgZW5kU3RyXSA9IGRhdGVSYW5nZS5zcGxpdCgnIC0gJyk7XHJcbiAgICBcclxuICAgICAgLy8gUGFyc2UgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgdXNpbmcgdGhlIERhdGUgY29uc3RydWN0b3JcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRTdHIpO1xyXG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcclxuICAgIFxyXG4gICAgICAvLyBBZGp1c3QgdGhlIHllYXIgb2YgdGhlIGVuZCBkYXRlIGlmIG5lY2Vzc2FyeVxyXG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgIGVuZERhdGUuc2V0RnVsbFllYXIoc3RhcnREYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIC8vIFJldHVybiB0aGUgc3RhcnQgYW5kIGVuZCBkYXRlcyBhcyBhbiBvYmplY3RcclxuICAgICAgcmV0dXJuIHsgc3RhcnREYXRlLCBlbmREYXRlIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJBcmllc1wiLFxyXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcclxuICAgICAgXCJGaXJlXCIsXHJcbiAgICAgIFwiU3RlZWxcIixcclxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJUYXVydXNcIixcclxuICAgICAgXCJBcHJpbCAyMCAtIE1heSAyMFwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJIYWRlcywgdGhlIEdvZCBvZiB0aGUgVW5kZXJ3b3JsZCAoR3JlZWspXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJHZW1pbmlcIixcclxuICAgICAgXCJNYXkgMjEgLSBKdW5lIDIwXCIsXHJcbiAgICAgIFwiQWlyXCIsXHJcbiAgICAgIFwiWmVwaHlyXCIsXHJcbiAgICAgIFwiSXphbmFtaS9JemFuYWdpLCB0aGUgR29kcy9Hb2RkZXNzZXMgb2YgQ3JlYXRpb24gYW5kIERlYXRoIChKYXBhbmVzZSlcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkNhbmNlclwiLFxyXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXHJcbiAgICAgIFwiV2F0ZXJcIixcclxuICAgICAgXCJMdW5hclwiLFxyXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJMZW9cIixcclxuICAgICAgXCJKdWx5IDIzIC0gQXVndXN0IDIyXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIlNvbGFyXCIsXHJcbiAgICAgIFwiUmEsIHRoZSBHb2Qgb2YgdGhlIFN1biAoRWd5cHRpYW4pXCJcclxuICAgICksXHJcbiAgICBuZXcgWm9kaWFjU2lnbihcclxuICAgICAgXCJWaXJnb1wiLFxyXG4gICAgICBcIkF1Z3VzdCAyMyAtIFNlcHRlbWJlciAyMlwiLFxyXG4gICAgICBcIkVhcnRoXCIsXHJcbiAgICAgIFwiR2FpYVwiLFxyXG4gICAgICBcIklzaXMsIHRoZSBHb2RkZXNzIG9mIE1hZ2ljIGFuZCBMaWZlIChFZ3lwdGlhbilcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIkxpYnJhXCIsXHJcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxyXG4gICAgICBcIkFpclwiLFxyXG4gICAgICBcIkFldGhlclwiLFxyXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2NvcnBpb1wiLFxyXG4gICAgICBcIk9jdG9iZXIgMjMgLSBOb3ZlbWJlciAyMVwiLFxyXG4gICAgICBcIldhdGVyXCIsXHJcbiAgICAgIFwiQWJ5c3NcIixcclxuICAgICAgXCJPc2lyaXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiU2FnaXR0YXJpdXNcIixcclxuICAgICAgXCJOb3ZlbWJlciAyMiAtIERlY2VtYmVyIDIxXCIsXHJcbiAgICAgIFwiRmlyZVwiLFxyXG4gICAgICBcIkluZmVybm9cIixcclxuICAgICAgXCJBbWF0ZXJhc3UsIHRoZSBHb2RkZXNzIG9mIHRoZSBTdW4gKEphcGFuZXNlKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQ2Fwcmljb3JuXCIsXHJcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXHJcbiAgICAgIFwiRWFydGhcIixcclxuICAgICAgXCJHYWlhXCIsXHJcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXHJcbiAgICApLFxyXG4gICAgbmV3IFpvZGlhY1NpZ24oXHJcbiAgICAgIFwiQXF1YXJpdXNcIixcclxuICAgICAgXCJKYW51YXJ5IDIwIC0gRmVicnVhcnkgMThcIixcclxuICAgICAgXCJBaXJcIixcclxuICAgICAgXCJWb2x0XCIsXHJcbiAgICAgIFwiWmV1cywgdGhlIEdvZCBvZiBUaHVuZGVyIChHcmVlaylcIlxyXG4gICAgKSxcclxuICAgIG5ldyBab2RpYWNTaWduKFxyXG4gICAgICBcIlBpc2Nlc1wiLFxyXG4gICAgICBcIkZlYnJ1YXJ5IDE5IC0gTWFyY2ggMjBcIixcclxuICAgICAgXCJXYXRlclwiLFxyXG4gICAgICBcIk1pc3RcIixcclxuICAgICAgXCJTdXNhbm9vLCB0aGUgR29kIG9mIHRoZSBTZWEgYW5kIFN0b3JtcyAoSmFwYW5lc2UpXCJcclxuICAgIClcclxuICBdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSwgV2VhcG9uLCBQbGF5ZXJDaGFyYWN0ZXIsIFBsYXllclN0YXRzIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuaW1wb3J0IHsgZ2V0TmV3UXVlc3QsIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzLCBhZGRRdWVzdH0gZnJvbSBcIi4vcXVlc3RGdW5jdGlvbnMuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb3JtTW9kYWwsIGNsb3NlRm9ybU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxmdW5jdGlvbnMuanNcIjtcbmltcG9ydCBkdWVEYXRlIGZyb20gXCIuL2R1ZURhdGUuanNcIjtcbmltcG9ydCBnZXRPYmplY3RpdmUgZnJvbSBcIi4vZ2V0T2JqZWN0aXZlLmpzXCI7XG5pbXBvcnQgdXNlckludGVyZmFjZU1hbmFnZXIgZnJvbSAnLi9ldmVudE1hbmFnZXInO1xuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZUZ1bmN0aW9ucyc7XG5cblxuLy8gR2xvYmFsbHkgU2NvcGVkIFZhcmlhYmxlc1xubGV0IGN1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVudFF1ZXN0TGlzdCcpIHx8IFtdOyAvLyBMb2FkIGZyb20gbG9jYWwgc3RvcmFnZVxubGV0IGN1cnJlbmN5Q29udGFpbmVyID0gKGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW5jeUNvbnRhaW5lcicpIHx8IFtuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiQ2hlc3RLZXlzXCIsIDApXSk7IC8vIExvYWQgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgcGxheWVySW52ZW50b3J5ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ3BsYXllckludmVudG9yeScpIHx8IFtdO1xubGV0IHBsYXllckVxdWlwcGVkSXRlbXMgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVyRXF1aXBwZWRJdGVtcycpIHx8IFtdO1xuXG5cblxudXNlckludGVyZmFjZU1hbmFnZXIoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xuXG4vLyBFdmVudCBMaXN0ZW5lciB0byBPcGVuIFF1ZXN0IENyZWF0aW9uIE1vZGFsXG5sZXQgYWRkUXVlc3RCdXR0b25DbGlja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNhZGRRdWVzdEJ1dHRvblwiKVxuYWRkUXVlc3RCdXR0b25DbGlja2VkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgZGlzcGxheUZvcm1Nb2RhbCgpO1xufSlcblxuXG4vLyBFdmVudCBMaXN0ZW5lciB0byBBZGQgUXVlc3QgdG8gUXVlc3QgTGlzdCBhbmQgRGlzcGxheVxubGV0IGZvcm1TdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TdWJtaXRCdXR0b25cIik7XG5mb3JtU3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGNsb3NlRm9ybU1vZGFsKGUpO1xuICAgIGxldCBuZXdseUdlbmVyYXRlZFF1ZXN0ID0gZ2V0TmV3UXVlc3QoKTtcbiAgICBhZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBuZXdseUdlbmVyYXRlZFF1ZXN0KTtcbiAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XG59KVxuXG4vLyBXZWFwb24gQ3JlYXRpb24gVGVzdFxubGV0IGZpcmVTd29yZCA9IG5ldyBXZWFwb24oXCJmaXJlIHN3b3JkXCIsIFwic3dvcmRcIiwgXCJyYXJlXCIsIHtzdHJlbmd0aDogMzB9KTtcbi8vIGNvbnNvbGUubG9nKGZpcmVTd29yZCk7XG5cbmxldCBiaXJ0aGRheSA9IG5ldyBEYXRlKFwiMTk5Ni0wMS0yMVwiKTtcbmxldCBiaXJ0aGRheTIgPSBuZXcgRGF0ZShcIjE5OTgtMTItMjJcIik7XG5sZXQgY3VycmVudFBsYXllclN0YXRzID0gbmV3IFBsYXllclN0YXRzKFwid2FycmlvclwiKTtcbmxldCBjdXJyZW50UGxheWVyID0gbmV3IFBsYXllckNoYXJhY3RlcihudWxsLCBjdXJyZW50UGxheWVyU3RhdHMsIHBsYXllckVxdWlwcGVkSXRlbXMsIGJpcnRoZGF5KTtcblxuY3VycmVudFBsYXllci5lcXVpcEl0ZW0oZmlyZVN3b3JkKTtcbmN1cnJlbnRQbGF5ZXIuc3RhdHMubGV2ZWxVcCgpO1xuY3VycmVudFBsYXllci5zdGF0cy5hbGxvY2F0ZVNraWxsUG9pbnQoXCJzdHJlbmd0aFwiKTtcbmNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIpO1xuY29uc29sZS5sb2coYmlydGhkYXkpXG5jb25zb2xlLmxvZyhjdXJyZW50UGxheWVyLl9lbGVtZW50YWxBZmZpbml0eSk7XG5cbi8vIC8vIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4vLyAvLyB2YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4vLyAvLyB2YXIgbW9udGggPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG4vLyAvLyB2YXIgZGF5ID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbi8vIC8vIHZhciBmb3JtYXR0ZWREYXRlID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xuLy8gLy8gbGV0IHF1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybURhdGVcIik7XG4vLyAvLyBxdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwibWluXCIsIGZvcm1hdHRlZERhdGUpO1xuLy8gLy8gcXVlc3RGb3JtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZvcm1hdHRlZERhdGUpO1xuXG5cbi8vIC8vIHRlc3QgY2FzZXNcbi8vIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGd5bVRhc2spO1xuLy8gYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgd2F0ZXJUYXNrKTtcbi8vIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9