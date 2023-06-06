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
let KratosChains = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Weapon("Kratos Chains", "Chains", "Legendary", {strength: 500});
let cheapWoodenArmour = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Armour("Wooden Armour", "Chest", "Normal", {strength: 5});
// console.log(fireSword);

let heroSelection = ("warrior");
let birthday = new Date("1997-09-28");
let birthday2 = new Date("1998-12-22");
let currentPlayerStats = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerStats("warrior");
let currentPlayer = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.PlayerCharacter(null, heroSelection, playerEquippedItems, birthday);

currentPlayer.equipItem(KratosChains);
currentPlayer.equipItem(cheapWoodenArmour);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSx5REFBb0I7QUFDeEIsQ0FBQzs7QUFFRDtBQUNBLHVCQUF1QiwrQ0FBTSwwQ0FBMEMsY0FBYztBQUNyRiw0QkFBNEIsK0NBQU0sc0NBQXNDLFlBQVk7QUFDcEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG9EQUFXO0FBQ3hDLHdCQUF3Qix3REFBZTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW1hZ2VzL0NoZXN0S2V5LnBuZyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW1hZ2VzL0dHVG9rZW4ucG5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzP2E5MDQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE9iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2RhbGZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcXVlc3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3pvZGlhY1Bvd2Vycy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB6b2RpYWNTaWducyBmcm9tIFwiLi96b2RpYWNQb3dlcnNcIjtcblxuZXhwb3J0IGNsYXNzIFF1ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XG4gICAgICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xuICAgICAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XG4gICAgICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG59XG5leHBvcnQgY2xhc3MgQ3VycmVuY3kge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBFcXVpcG1lbnQge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgaXNFcXVpcHBlZCwgaW5QbGF5ZXJJbnZlbnRvcnksIGlkKSB7XG4gICAgICAgIHRoaXMuX29iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5faXNFcXVpcHBlZCA9IGlzRXF1aXBwZWQ7XG4gICAgICAgIHRoaXMuX2luUGxheWVySW52ZW50b3J5ID0gaW5QbGF5ZXJJbnZlbnRvcnk7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2VhcG9uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0eXBlLCBjbGFzc1Jlc3RyaWN0aW9uLCByYXJpdHksIHN0YXRzLCBpZCkge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuX2NsYXNzUmVzdHJpY3Rpb24gPSBjbGFzc1Jlc3RyaWN0aW9uO1xuICAgICAgdGhpcy5fcmFyaXR5ID0gcmFyaXR5O1xuICAgICAgdGhpcy5fc3RhdHMgPSBzdGF0cztcbiAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgfVxuICBcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG5cbiAgICBnZXQgY2xhc3NSZXN0cmljdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jbGFzc1Jlc3RyaWN0aW9uO1xuICAgIH1cbiAgXG4gICAgZ2V0IHJhcml0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yYXJpdHk7XG4gICAgfVxuICBcbiAgICBnZXQgc3RhdHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3RhdHM7XG4gICAgfVxuXG4gICAgZ2V0IGlkKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIEFybW91ciB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgcmFyaXR5LCBzdGF0cykge1xuICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICAgIHRoaXMuX3Jhcml0eSA9IHJhcml0eTtcbiAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XG4gICAgfVxuICBcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cbiAgXG4gICAgZ2V0IHR5cGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgICB9XG4gIFxuICAgIGdldCByYXJpdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmFyaXR5O1xuICAgIH1cbiAgXG4gICAgZ2V0IHN0YXRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0YXRzO1xuICAgIH1cbiAgfVxuXG5leHBvcnQgY2xhc3MgUGxheWVyU3RhdHMge1xuICAgIGNvbnN0cnVjdG9yKGhlcm9UeXBlKSB7XG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xuICAgICAgdGhpcy5fYmFzZVN0YXRzID0gdGhpcy5nZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKTtcbiAgICAgIHRoaXMuX2VxdWlwcGVkU3RhdHMgPSB7fTtcbiAgICAgIHRoaXMuX3NraWxsUG9pbnRzID0gMDtcbiAgICB9XG4gIFxuICAgIGdldFN0YXQoc3RhdE5hbWUpIHtcbiAgICAgIGNvbnN0IGJhc2VWYWx1ZSA9IHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gfHwgMDtcbiAgICAgIGNvbnN0IGVxdWlwcGVkVmFsdWUgPSB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSB8fCAwO1xuICAgICAgcmV0dXJuIGJhc2VWYWx1ZSArIGVxdWlwcGVkVmFsdWU7XG4gICAgfVxuICBcbiAgICBzZXRTdGF0KHN0YXROYW1lLCB2YWx1ZSkge1xuICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgXG4gICAgYWRkU3RhdChzdGF0TmFtZSwgdmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLl9iYXNlU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VTdGF0c1tzdGF0TmFtZV0gKz0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9iYXNlU3RhdHNbc3RhdE5hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBlcXVpcEl0ZW1TdGF0cyhpdGVtU3RhdHMpIHtcbiAgICAgIGZvciAoY29uc3Qgc3RhdE5hbWUgaW4gaXRlbVN0YXRzKSB7XG4gICAgICAgIGlmIChpdGVtU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2VxdWlwcGVkU3RhdHMuaGFzT3duUHJvcGVydHkoc3RhdE5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSArPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA9IGl0ZW1TdGF0c1tzdGF0TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICB1bmVxdWlwSXRlbVN0YXRzKGl0ZW1TdGF0cykge1xuICAgICAgZm9yIChjb25zdCBzdGF0TmFtZSBpbiBpdGVtU3RhdHMpIHtcbiAgICAgICAgaWYgKGl0ZW1TdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkgJiYgdGhpcy5fZXF1aXBwZWRTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcbiAgICAgICAgICB0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSAtPSBpdGVtU3RhdHNbc3RhdE5hbWVdO1xuICAgICAgICAgIGlmICh0aGlzLl9lcXVpcHBlZFN0YXRzW3N0YXROYW1lXSA8PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZXF1aXBwZWRTdGF0c1tzdGF0TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICBnZXRJbml0aWFsQmFzZVN0YXRzKGhlcm9UeXBlKSB7XG4gICAgICBzd2l0Y2ggKGhlcm9UeXBlKSB7XG4gICAgICAgIGNhc2UgXCJzb3JjZXJlclwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcbiAgICAgICAgICAgIGFnaWxpdHk6IDYsXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDgsXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcInByaWVzdFwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHJlbmd0aDogNCxcbiAgICAgICAgICAgIGFnaWxpdHk6IDQsXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDYsXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDgsXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIndhcnJpb3JcIjpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RyZW5ndGg6IDgsXG4gICAgICAgICAgICBhZ2lsaXR5OiA0LFxuICAgICAgICAgICAgaW50ZWxsaWdlbmNlOiA0LFxuICAgICAgICAgICAgY29uc3RpdHV0aW9uOiA2LFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJyb2d1ZVwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdHJlbmd0aDogNixcbiAgICAgICAgICAgIGFnaWxpdHk6IDgsXG4gICAgICAgICAgICBpbnRlbGxpZ2VuY2U6IDQsXG4gICAgICAgICAgICBjb25zdGl0dXRpb246IDQsXG4gICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNsYXNzIHR5cGUuXCIpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgbGV2ZWxVcCgpIHtcbiAgICAgIGNvbnN0IGxldmVsID0gdGhpcy5fYmFzZVN0YXRzLmxldmVsIHx8IDE7XG4gICAgICB0aGlzLl9iYXNlU3RhdHMubGV2ZWwgPSBsZXZlbCArIDE7XG4gICAgICB0aGlzLl9za2lsbFBvaW50cyArPSA1OyAvLyBBc3N1bWluZyB0aGUgcGxheWVyIHJlY2VpdmVzIDUgc2tpbGwgcG9pbnRzIHBlciBsZXZlbFxuICAgIH1cbiAgXG4gICAgYWxsb2NhdGVTa2lsbFBvaW50KHN0YXROYW1lKSB7XG4gICAgICBpZiAodGhpcy5fc2tpbGxQb2ludHMgPiAwICYmIHRoaXMuX2Jhc2VTdGF0cy5oYXNPd25Qcm9wZXJ0eShzdGF0TmFtZSkpIHtcbiAgICAgICAgdGhpcy5fYmFzZVN0YXRzW3N0YXROYW1lXSArPSAxO1xuICAgICAgICB0aGlzLl9za2lsbFBvaW50cyAtPSAxO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgZ2V0IHNraWxsUG9pbnRzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NraWxsUG9pbnRzO1xuICAgIH1cbiAgfVxuICBcblxuICBleHBvcnQgY2xhc3MgUGxheWVyQ2hhcmFjdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzcHJpdGVJbWFnZSwgaGVyb1R5cGUsIGVxdWlwcGVkSXRlbXMsIGVsZW1lbnRhbFNlbGVjdGlvbikge1xuICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcbiAgICAgIHRoaXMuX2hlcm9UeXBlID0gaGVyb1R5cGU7XG4gICAgICB0aGlzLl9zdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhoZXJvVHlwZSk7XG4gICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcbiAgICAgIHRoaXMuX2VsZW1lbnRhbFNlbGVjdGlvbiA9IGVsZW1lbnRhbFNlbGVjdGlvbjtcbiAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gdGhpcy5nZXRFbGVtZW50YWxBZmZpbml0eShlbGVtZW50YWxTZWxlY3Rpb24pO1xuICAgIH1cbiAgXG4gIFxuICAgIGdldCBzcHJpdGVJbWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nwcml0ZUltYWdlO1xuICAgIH1cbiAgICBcbiAgICBzZXQgc3ByaXRlSW1hZ2Uoc3ByaXRlSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5fc3ByaXRlSW1hZ2UgPSBzcHJpdGVJbWFnZTtcbiAgICB9XG5cbiAgICBnZXQgaGVyb1R5cGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faGVyb1R5cGU7XG4gICAgfVxuXG4gICAgc2V0IGhlcm9UeXBlKGhlcm9UeXBlKSB7XG4gICAgICB0aGlzLl9oZXJvVHlwZSA9IGhlcm9UeXBlO1xuICAgICAgdGhpcy5fc3RhdHMgPSBuZXcgUGxheWVyU3RhdHMoaGVyb1R5cGUpO1xuICAgIH1cbiAgICBcbiAgICBnZXQgc3RhdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0cztcbiAgICB9XG4gICAgXG4gICAgc2V0IHN0YXRzKHN0YXRzKSB7XG4gICAgICAgIHRoaXMuX3N0YXRzID0gc3RhdHM7XG4gICAgfVxuICAgIFxuICAgIGdldCBlcXVpcHBlZEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXF1aXBwZWRJdGVtcztcbiAgICB9XG4gICAgXG4gICAgc2V0IGVxdWlwcGVkSXRlbXMoZXF1aXBwZWRJdGVtcykge1xuICAgICAgICB0aGlzLl9lcXVpcHBlZEl0ZW1zID0gZXF1aXBwZWRJdGVtcztcbiAgICB9XG5cbiAgICBnZXQgZWxlbWVudGFsQWZmaW5pdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50YWxBZmZpbml0eTtcbiAgICB9XG4gICAgXG4gICAgc2V0IGVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbEFmZmluaXR5KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRhbEFmZmluaXR5ID0gZWxlbWVudGFsQWZmaW5pdHk7XG4gICAgfVxuXG4gICAgZXF1aXBJdGVtKGl0ZW0pIHtcbiAgICAgICAgLy8gQWRkaXRpb25hbCBsb2dpYyBmb3IgZXF1aXBwaW5nIGFuIGl0ZW1cbiAgICAgICAgdGhpcy5fZXF1aXBwZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLl9zdGF0cy5lcXVpcEl0ZW1TdGF0cyhpdGVtLnN0YXRzKTtcbiAgICAgIH1cbiAgICBcbiAgICBhdHRhY2sodGFyZ2V0KSB7XG4gICAgICAgIC8vIFBlcmZvcm0gYXR0YWNrIGxvZ2ljXG4gICAgICAgIGNvbnNvbGUubG9nKGBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xuICAgIH1cblxuICAgIHNwZWNpYWxBdHRhY2sodGFyZ2V0KSB7XG4gICAgICAgIC8vIFBlcmZvcm0gc3BlY2lhbCBhdHRhY2sgbG9naWMgaGVyZVxuICAgICAgICBjb25zb2xlLmxvZyhgU3BlY2lhbCBBdHRhY2tpbmcgJHt0YXJnZXR9IWApO1xuICAgIH1cblxuICAgIGlzQmlydGhkYXlJblJhbmdlKGJpcnRoZGF5LCBzdGFydERhdGUsIGVuZERhdGUpIHtcbiAgICAgICAgLy8gQ29udmVydCB0aGUgYmlydGhkYXkgdG8gYSBEYXRlIG9iamVjdCBpZiBpdCdzIGEgc3RyaW5nXG4gICAgICAgIGNvbnN0IGJpcnRoZGF5RGF0ZSA9IHR5cGVvZiBiaXJ0aGRheSA9PT0gJ3N0cmluZycgPyBuZXcgRGF0ZShiaXJ0aGRheSkgOiBiaXJ0aGRheTtcblxuICAgICAgICAvLyBHZXQgdGhlIG1vbnRoIGFuZCBkYXkgb2YgdGhlIGJpcnRoZGF5XG4gICAgICAgIGNvbnN0IGJpcnRoZGF5TW9udGggPSBiaXJ0aGRheURhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgYmlydGhkYXlEYXkgPSBiaXJ0aGRheURhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtb250aCBhbmQgZGF5IG9mIHRoZSBiaXJ0aGRheSBmYWxsIHdpdGhpbiB0aGUgcmFuZ2VcbiAgICAgICAgY29uc3Qgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBzdGFydERheSA9IHN0YXJ0RGF0ZS5nZXREYXRlKCk7XG4gICAgICAgIGNvbnN0IGVuZE1vbnRoID0gZW5kRGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBlbmREYXkgPSBlbmREYXRlLmdldERhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIENhcHJpY29ybiBlZGdlIGNhc2VcbiAgICAgICAgaWYgKGJpcnRoZGF5TW9udGggPT0gMTEgJiYgYmlydGhkYXlEYXkgPiAyMSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChiaXJ0aGRheU1vbnRoID09IDAgJiYgYmlydGhkYXlEYXkgPCAyMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiQ2Fwcmljb3JuXCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wYXJlIHRoZSBtb250aCBhbmQgZGF5IHZhbHVlc1xuICAgICAgICBpZiAoXG4gICAgICAgICAgKGJpcnRoZGF5TW9udGggPiBzdGFydE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBzdGFydE1vbnRoICYmIGJpcnRoZGF5RGF5ID49IHN0YXJ0RGF5KSkgJiZcbiAgICAgICAgICAoYmlydGhkYXlNb250aCA8IGVuZE1vbnRoIHx8IChiaXJ0aGRheU1vbnRoID09PSBlbmRNb250aCAmJiBiaXJ0aGRheURheSA8PSBlbmREYXkpKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgICAvLyBPdGhlciBtZXRob2RzIGNhbiBiZSBhZGRlZCBoZXJlIGZvciBmdXJ0aGVyIGZ1bmN0aW9uYWxpdHlcbiAgICAgIGdldEVsZW1lbnRhbEFmZmluaXR5KGVsZW1lbnRhbFNlbGVjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIGVsZW1lbnRhbCBzZWxlY3Rpb24gaXMgYSBiaXJ0aGRheSBwcm92aWRlZDpcbiAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xuICAgICAgICAgICAgLy8gQWxpYXMgdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgb2YgdGhlIHpvZGlhYyBTaWducyBkYXRlIHJhbmdlIHByb3BlcnR5XG4gICAgICAgICAgICBsZXQgZGF0ZUNoZWNrZXIgPSAoem9kaWFjU2lnbnNbaW5kZXhdLmNvbnZlcnREYXRlUmFuZ2Uoem9kaWFjU2lnbnNbaW5kZXhdLl9kYXRlUmFuZ2UpKTtcbiAgICAgICAgICAgIGxldCBiaXJ0aERheVJhbmdlQ2hlY2sgPSB0aGlzLmlzQmlydGhkYXlJblJhbmdlKGVsZW1lbnRhbFNlbGVjdGlvbiwgZGF0ZUNoZWNrZXIuc3RhcnREYXRlLCBkYXRlQ2hlY2tlci5lbmREYXRlKVxuXG4gICAgICAgICAgICAgIGlmIChiaXJ0aERheVJhbmdlQ2hlY2sgPT0gJ0NhcHJpY29ybicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zWzldKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChiaXJ0aERheVJhbmdlQ2hlY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHpvZGlhY1NpZ25zW2luZGV4XSk7XG4gICAgICAgICAgICAgIH0gIFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCBpbiB6b2RpYWNTaWducykge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRhbFNlbGVjdGlvbiA9PSB6b2RpYWNTaWduc1tpbmRleF0uX3VuaXF1ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICh6b2RpYWNTaWduc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgfVxuICAgICAgXG5cbiAgICBleHBvcnQgY2xhc3MgRWxlbWVudGFsUG93ZXIge1xuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lLCBkYXRlUmFuZ2UsIGJhc2VFbGVtZW50LCB1bmlxdWVFbGVtZW50LCBkZWl0eSkge1xuICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICAgIHRoaXMuX2RhdGVSYW5nZSA9IGRhdGVSYW5nZTtcbiAgICAgICAgICB0aGlzLl9iYXNlRWxlbWVudCA9IGJhc2VFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xuICAgICAgICAgIHRoaXMuX2RlaXR5ID0gZGVpdHk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuIiwiaW1wb3J0IEdHVG9rZW5JbWFnZSBmcm9tIFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIlxuaW1wb3J0IENoZXN0S2V5SW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL0NoZXN0S2V5LnBuZ1wiXG5cblxuY29uc3QgdmFsaWRDdXJyZW5jaWVzID0gW1wiR0dUb2tlbnNcIiwgXCJDaGVzdEtleXNcIl1cbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXG4gICAgQ2hlc3RLZXlzOiBDaGVzdEtleUltYWdlXG59O1xuXG5cbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XG5cbiAgICB2YWxpZEN1cnJlbmNpZXM6IFsuLi52YWxpZEN1cnJlbmNpZXNdLFxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xuXG4gICAgICAgIGNvbnN0IHJld2FyZFR5cGUgPSBxdWVzdC5yZXdhcmQudHlwZTtcblxuICAgICAgICBpZiAodmFsaWRDdXJyZW5jaWVzLmluY2x1ZGVzKHJld2FyZFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VycmVuY3lJbWFnZXNbcmV3YXJkVHlwZV07XG4gICAgICAgIH1cblxuICAgIC8vIFJldHVybiBhIGRlZmF1bHQgaW1hZ2Ugb3IgaGFuZGxlIGludmFsaWQgcmV3YXJkIHR5cGVzXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IChjdXJyZW5jeUNvbnRhaW5lcikge1xuICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0uYW1vdW50fWApO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XG5cbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lVG9Db21wbGV0ZSAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSAoKTtcblxuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKGhvdXJzKTtcbiAgICBjdXJyZW50RGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XG5cblxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcbn0iLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeSB9IGZyb20gXCIuL2N1cnJlbmN5RnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZUZ1bmN0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VySW50ZXJmYWNlTWFuYWdlciAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbmN5Q29udGFpbmVyID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoYCR7Y3VycmVuY3lDb250YWluZXJ9YClcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShgJHtjdXJyZW50UXVlc3RMaXN0fWApXG4gICAgZGlzcGxheVBsYXllckN1cnJlbnRDdXJyZW5jeShjdXJyZW5jeUNvbnRhaW5lcik7XG4gICAgcmVtb3ZlQ29tcGxldGVkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW5jeUNvbnRhaW5lclwiLCBjdXJyZW5jeUNvbnRhaW5lcik7XG4gICAgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlKGtleSwgZGF0YSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgcmV0dXJuIGRhdGEgPyBKU09OLnBhcnNlKGRhdGEpIDogbnVsbDtcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcbiAgICBcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XG5cbiAgICAvLyBEaXNwbGF5IG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBibG9ja1xuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuIFxuICAgIH1cbiBcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcbiAgICBcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XG5cbiAgICAvLyBIaWRlIG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBub25lXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufVxuIiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzLmpzJ1xuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlci5qcyc7XG5pbXBvcnQgeyBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMuanMnO1xuXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoKSB7XG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtT2JqZWN0aXZlXCIpLnZhbHVlO1xuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtRGF0ZVwiKS52YWx1ZTtcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeUFtb3VudFwiKS52YWx1ZTtcblxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcbiAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IGdldFF1ZXN0Rm9ybURhdGU7XG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XG4gICAgcXVlc3RPYmplY3QucmV3YXJkLmFtb3VudCA9IHBhcnNlSW50KGdldFF1ZXN0Q3VycmVuY3lBbW91bnQpO1xuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcblxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcbn1cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcblxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5xdWVzdENvbnRhaW5lclwiKTtcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGZvciAobGV0IHF1ZXN0SW5kZXggaW4gY3VycmVudFF1ZXN0TGlzdCkge1xuXG4gICAgICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IFxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtbcXVlc3RJbmRleF19YCk7XG5cblxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XG4gICAgICAgIGxldCBxdWVzdE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKVxuICAgICAgICBxdWVzdE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKTtcblxuICAgICAgICAvL1F1ZXN0IENvbXBsZXRlIENoZWNrYm94IE5lc3RlZCBpbiBRdWVzdCBPYmplY3RpdmUgQ29udGVudCBEaXYgXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcblxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLmh0bWxGb3IgPSBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gO1xuICAgICAgIFxuXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YCk7XG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnF1ZXN0Q29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB1c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVMYWJlbCk7XG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVDb250YWluZXIpO1xuICAgICAgICBcblxuXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJkYXRlVG9Db21wbGV0ZUJveFwiKTtcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKTtcblxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94XCIpO1xuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XG5cbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcmV3YXJkVXRpbGl0aWVzLmdldFJld2FyZEltYWdlKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pKTsgICAgICAgICAgICBcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEltYWdlXCIpO1xuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxuICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQuY2xhc3NMaXN0LmFkZChcInF1ZXN0UmV3YXJkQW1vdW50XCIpO1xuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQuYW1vdW50fSAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLnR5cGV9YCk7XG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xuXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocXVlc3RPYmplY3RpdmUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgfVxuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcbiAgICByZXR1cm4gY3VycmVudFF1ZXN0TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0KSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiY2xhc3MgWm9kaWFjU2lnbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGF0ZVJhbmdlLCBiYXNlRWxlbWVudCwgdW5pcXVlRWxlbWVudCwgZGVpdHkpIHtcbiAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5fZGF0ZVJhbmdlID0gZGF0ZVJhbmdlO1xuICAgICAgdGhpcy5fYmFzZUVsZW1lbnQgPSBiYXNlRWxlbWVudDtcbiAgICAgIHRoaXMuX3VuaXF1ZUVsZW1lbnQgPSB1bmlxdWVFbGVtZW50O1xuICAgICAgdGhpcy5fZGVpdHkgPSBkZWl0eTtcbiAgICB9XG5cbiAgICBjb252ZXJ0RGF0ZVJhbmdlKGRhdGVSYW5nZSkge1xuICAgICAgLy8gU3BsaXQgdGhlIGRhdGUgcmFuZ2Ugc3RyaW5nIGludG8gc3RhcnQgYW5kIGVuZCBkYXRlc1xuICAgICAgY29uc3QgW3N0YXJ0U3RyLCBlbmRTdHJdID0gZGF0ZVJhbmdlLnNwbGl0KCcgLSAnKTtcbiAgICBcbiAgICAgIC8vIFBhcnNlIHRoZSBzdGFydCBhbmQgZW5kIGRhdGVzIHVzaW5nIHRoZSBEYXRlIGNvbnN0cnVjdG9yXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydFN0cik7XG4gICAgICBjb25zdCBlbmREYXRlID0gbmV3IERhdGUoZW5kU3RyKTtcbiAgICBcbiAgICAgIC8vIEFkanVzdCB0aGUgeWVhciBvZiB0aGUgZW5kIGRhdGUgaWYgbmVjZXNzYXJ5XG4gICAgICBpZiAoZW5kRGF0ZSA8IHN0YXJ0RGF0ZSkge1xuICAgICAgICBlbmREYXRlLnNldEZ1bGxZZWFyKHN0YXJ0RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICB9XG4gICAgXG4gICAgICAvLyBSZXR1cm4gdGhlIHN0YXJ0IGFuZCBlbmQgZGF0ZXMgYXMgYW4gb2JqZWN0XG4gICAgICByZXR1cm4geyBzdGFydERhdGUsIGVuZERhdGUgfTtcbiAgICB9XG4gIH1cblxuY29uc3Qgem9kaWFjU2lnbnMgPSBbXG4gICAgbmV3IFpvZGlhY1NpZ24oXG4gICAgICBcIkFyaWVzXCIsXG4gICAgICBcIk1hcmNoIDIxIC0gQXByaWwgMTlcIixcbiAgICAgIFwiRmlyZVwiLFxuICAgICAgXCJTdGVlbFwiLFxuICAgICAgXCJBcmVzLCB0aGUgR29kIG9mIFdhciAoR3JlZWspXCJcbiAgICApLFxuICAgIG5ldyBab2RpYWNTaWduKFxuICAgICAgXCJUYXVydXNcIixcbiAgICAgIFwiQXByaWwgMjAgLSBNYXkgMjBcIixcbiAgICAgIFwiRWFydGhcIixcbiAgICAgIFwiQWJ5c3NcIixcbiAgICAgIFwiSGFkZXMsIHRoZSBHb2Qgb2YgdGhlIFVuZGVyd29ybGQgKEdyZWVrKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiR2VtaW5pXCIsXG4gICAgICBcIk1heSAyMSAtIEp1bmUgMjBcIixcbiAgICAgIFwiQWlyXCIsXG4gICAgICBcIlplcGh5clwiLFxuICAgICAgXCJJemFuYW1pL0l6YW5hZ2ksIHRoZSBHb2RzL0dvZGRlc3NlcyBvZiBDcmVhdGlvbiBhbmQgRGVhdGggKEphcGFuZXNlKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiQ2FuY2VyXCIsXG4gICAgICBcIkp1bmUgMjEgLSBKdWx5IDIyXCIsXG4gICAgICBcIldhdGVyXCIsXG4gICAgICBcIkx1bmFyXCIsXG4gICAgICBcIlRzdWt1eW9taSwgdGhlIEdvZCBvZiB0aGUgTW9vbiAoSmFwYW5lc2UpXCJcbiAgICApLFxuICAgIG5ldyBab2RpYWNTaWduKFxuICAgICAgXCJMZW9cIixcbiAgICAgIFwiSnVseSAyMyAtIEF1Z3VzdCAyMlwiLFxuICAgICAgXCJGaXJlXCIsXG4gICAgICBcIlNvbGFyXCIsXG4gICAgICBcIlJhLCB0aGUgR29kIG9mIHRoZSBTdW4gKEVneXB0aWFuKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiVmlyZ29cIixcbiAgICAgIFwiQXVndXN0IDIzIC0gU2VwdGVtYmVyIDIyXCIsXG4gICAgICBcIkVhcnRoXCIsXG4gICAgICBcIkdhaWFcIixcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiTGlicmFcIixcbiAgICAgIFwiU2VwdGVtYmVyIDIzIC0gT2N0b2JlciAyMlwiLFxuICAgICAgXCJBaXJcIixcbiAgICAgIFwiQWV0aGVyXCIsXG4gICAgICBcIkhvcnVzLCB0aGUgR29kIG9mIHRoZSBTa3kgKEVneXB0aWFuKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiU2NvcnBpb1wiLFxuICAgICAgXCJPY3RvYmVyIDIzIC0gTm92ZW1iZXIgMjFcIixcbiAgICAgIFwiV2F0ZXJcIixcbiAgICAgIFwiQWJ5c3NcIixcbiAgICAgIFwiT3NpcmlzLCB0aGUgR29kIG9mIHRoZSBVbmRlcndvcmxkIChFZ3lwdGlhbilcIlxuICAgICksXG4gICAgbmV3IFpvZGlhY1NpZ24oXG4gICAgICBcIlNhZ2l0dGFyaXVzXCIsXG4gICAgICBcIk5vdmVtYmVyIDIyIC0gRGVjZW1iZXIgMjFcIixcbiAgICAgIFwiRmlyZVwiLFxuICAgICAgXCJJbmZlcm5vXCIsXG4gICAgICBcIkFtYXRlcmFzdSwgdGhlIEdvZGRlc3Mgb2YgdGhlIFN1biAoSmFwYW5lc2UpXCJcbiAgICApLFxuICAgIG5ldyBab2RpYWNTaWduKFxuICAgICAgXCJDYXByaWNvcm5cIixcbiAgICAgIFwiRGVjZW1iZXIgMjIgLSBKYW51YXJ5IDE5XCIsXG4gICAgICBcIkVhcnRoXCIsXG4gICAgICBcIkdhaWFcIixcbiAgICAgIFwiSXNpcywgdGhlIEdvZGRlc3Mgb2YgTWFnaWMgYW5kIExpZmUgKEVneXB0aWFuKVwiXG4gICAgKSxcbiAgICBuZXcgWm9kaWFjU2lnbihcbiAgICAgIFwiQXF1YXJpdXNcIixcbiAgICAgIFwiSmFudWFyeSAyMCAtIEZlYnJ1YXJ5IDE4XCIsXG4gICAgICBcIkFpclwiLFxuICAgICAgXCJWb2x0XCIsXG4gICAgICBcIlpldXMsIHRoZSBHb2Qgb2YgVGh1bmRlciAoR3JlZWspXCJcbiAgICApLFxuICAgIG5ldyBab2RpYWNTaWduKFxuICAgICAgXCJQaXNjZXNcIixcbiAgICAgIFwiRmVicnVhcnkgMTkgLSBNYXJjaCAyMFwiLFxuICAgICAgXCJXYXRlclwiLFxuICAgICAgXCJNaXN0XCIsXG4gICAgICBcIlN1c2Fub28sIHRoZSBHb2Qgb2YgdGhlIFNlYSBhbmQgU3Rvcm1zIChKYXBhbmVzZSlcIlxuICAgIClcbiAgXTtcblxuZXhwb3J0IGRlZmF1bHQgem9kaWFjU2lnbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSwgV2VhcG9uLCBBcm1vdXIsIFBsYXllckNoYXJhY3RlciwgUGxheWVyU3RhdHMgfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XG5pbXBvcnQgeyBnZXROZXdRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMsIGFkZFF1ZXN0fSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbGZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IGR1ZURhdGUgZnJvbSBcIi4vZHVlRGF0ZS5qc1wiO1xuaW1wb3J0IGdldE9iamVjdGl2ZSBmcm9tIFwiLi9nZXRPYmplY3RpdmUuanNcIjtcbmltcG9ydCB1c2VySW50ZXJmYWNlTWFuYWdlciBmcm9tICcuL2V2ZW50TWFuYWdlcic7XG5pbXBvcnQgeyBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zJztcblxuXG4vLyBHbG9iYWxseSBTY29wZWQgVmFyaWFibGVzXG5sZXQgY3VycmVudFF1ZXN0TGlzdCA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdjdXJyZW50UXVlc3RMaXN0JykgfHwgW107IC8vIExvYWQgZnJvbSBsb2NhbCBzdG9yYWdlXG5sZXQgY3VycmVuY3lDb250YWluZXIgPSAoZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbmN5Q29udGFpbmVyJykgfHwgW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJDaGVzdEtleXNcIiwgMCldKTsgLy8gTG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCBwbGF5ZXJJbnZlbnRvcnkgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgncGxheWVySW52ZW50b3J5JykgfHwgW107XG5sZXQgcGxheWVyRXF1aXBwZWRJdGVtcyA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKCdwbGF5ZXJFcXVpcHBlZEl0ZW1zJykgfHwgW107XG5cblxuXG51c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2FkZFF1ZXN0QnV0dG9uXCIpXG5hZGRRdWVzdEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5Rm9ybU1vZGFsKCk7XG59KVxuXG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIEFkZCBRdWVzdCB0byBRdWVzdCBMaXN0IGFuZCBEaXNwbGF5XG5sZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcbmZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xvc2VGb3JtTW9kYWwoZSk7XG4gICAgbGV0IG5ld2x5R2VuZXJhdGVkUXVlc3QgPSBnZXROZXdRdWVzdCgpO1xuICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xuICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcbn0pXG5cbi8vIFdlYXBvbiBDcmVhdGlvbiBUZXN0XG5sZXQgS3JhdG9zQ2hhaW5zID0gbmV3IFdlYXBvbihcIktyYXRvcyBDaGFpbnNcIiwgXCJDaGFpbnNcIiwgXCJMZWdlbmRhcnlcIiwge3N0cmVuZ3RoOiA1MDB9KTtcbmxldCBjaGVhcFdvb2RlbkFybW91ciA9IG5ldyBBcm1vdXIoXCJXb29kZW4gQXJtb3VyXCIsIFwiQ2hlc3RcIiwgXCJOb3JtYWxcIiwge3N0cmVuZ3RoOiA1fSk7XG4vLyBjb25zb2xlLmxvZyhmaXJlU3dvcmQpO1xuXG5sZXQgaGVyb1NlbGVjdGlvbiA9IChcIndhcnJpb3JcIik7XG5sZXQgYmlydGhkYXkgPSBuZXcgRGF0ZShcIjE5OTctMDktMjhcIik7XG5sZXQgYmlydGhkYXkyID0gbmV3IERhdGUoXCIxOTk4LTEyLTIyXCIpO1xubGV0IGN1cnJlbnRQbGF5ZXJTdGF0cyA9IG5ldyBQbGF5ZXJTdGF0cyhcIndhcnJpb3JcIik7XG5sZXQgY3VycmVudFBsYXllciA9IG5ldyBQbGF5ZXJDaGFyYWN0ZXIobnVsbCwgaGVyb1NlbGVjdGlvbiwgcGxheWVyRXF1aXBwZWRJdGVtcywgYmlydGhkYXkpO1xuXG5jdXJyZW50UGxheWVyLmVxdWlwSXRlbShLcmF0b3NDaGFpbnMpO1xuY3VycmVudFBsYXllci5lcXVpcEl0ZW0oY2hlYXBXb29kZW5Bcm1vdXIpO1xuY3VycmVudFBsYXllci5zdGF0cy5sZXZlbFVwKCk7XG5jdXJyZW50UGxheWVyLnN0YXRzLmFsbG9jYXRlU2tpbGxQb2ludChcInN0cmVuZ3RoXCIpO1xuY29uc29sZS5sb2coY3VycmVudFBsYXllcik7XG5jb25zb2xlLmxvZyhiaXJ0aGRheSlcbmNvbnNvbGUubG9nKGN1cnJlbnRQbGF5ZXIuX2VsZW1lbnRhbEFmZmluaXR5KTtcblxuLy8gLy8gdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbi8vIC8vIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbi8vIC8vIHZhciBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbi8vIC8vIHZhciBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuLy8gLy8gdmFyIGZvcm1hdHRlZERhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4vLyAvLyBsZXQgcXVlc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtRGF0ZVwiKTtcbi8vIC8vIHF1ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZm9ybWF0dGVkRGF0ZSk7XG4vLyAvLyBxdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZm9ybWF0dGVkRGF0ZSk7XG5cblxuLy8gLy8gdGVzdCBjYXNlc1xuLy8gYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgZ3ltVGFzayk7XG4vLyBhZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCB3YXRlclRhc2spO1xuLy8gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=