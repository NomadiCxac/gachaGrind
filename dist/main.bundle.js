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
/* harmony export */   Currency: () => (/* binding */ Currency),
/* harmony export */   Quest: () => (/* binding */ Quest),
/* harmony export */   currencyContainer: () => (/* binding */ currencyContainer)
/* harmony export */ });
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

const currencyContainer = [];

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
let currencyContainer = ((0,_localStorageFunctions__WEBPACK_IMPORTED_MODULE_7__.getDataFromLocalStorage)('currencyContainer') 
|| [new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("ChestKeys", 0)]); // Load from local storage
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNQLHdCQUF3QixpQ0FBaUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDeEhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDeUI7QUFDd0M7QUFDaEI7QUFDcEM7QUFDVTtBQUNLO0FBQ3dDOzs7QUFHMUY7QUFDQSx1QkFBdUIsK0VBQXVCLDRCQUE0QjtBQUMxRSx5QkFBeUIsK0VBQXVCO0FBQ2hELFFBQVEsaURBQVEscUJBQXFCLGlEQUFRLG9CQUFvQjtBQUNqRSx5REFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBLElBQUkscUVBQWdCO0FBQ3BCLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWM7QUFDbEIsOEJBQThCLCtEQUFXO0FBQ3pDLElBQUksNERBQVE7QUFDWixJQUFJLHlEQUFvQjtBQUN4QixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbWFnZXMvQ2hlc3RLZXkucG5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbWFnZXMvR0dUb2tlbi5wbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9ldmVudE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE9iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9tb2RhbGZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcXVlc3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi4vaW1hZ2VzL0NoZXN0S2V5LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiLi9pbWFnZXMvR0dUb2tlbi5wbmdcIjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgY2xhc3MgUXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvQ29tcGxldGUgPSBkYXRlVG9Db21wbGV0ZTtcclxuICAgICAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY3VycmVuY3lDb250YWluZXIgPSBbXTsiLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBDaGVzdEtleUltYWdlIGZyb20gXCIuL2ltYWdlcy9DaGVzdEtleS5wbmdcIlxyXG5cclxuXHJcbmNvbnN0IHZhbGlkQ3VycmVuY2llcyA9IFtcIkdHVG9rZW5zXCIsIFwiQ2hlc3RLZXlzXCJdXHJcbmNvbnN0IGN1cnJlbmN5SW1hZ2VzID0ge1xyXG4gICAgR0dUb2tlbnM6IEdHVG9rZW5JbWFnZSxcclxuICAgIENoZXN0S2V5czogQ2hlc3RLZXlJbWFnZVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByZXdhcmRVdGlsaXRpZXMgPSB7XHJcblxyXG4gICAgdmFsaWRDdXJyZW5jaWVzOiBbLi4udmFsaWRDdXJyZW5jaWVzXSxcclxuICAgIGdldFJld2FyZEltYWdlOiBmdW5jdGlvbihxdWVzdCkge1xyXG5cclxuICAgICAgICBjb25zdCByZXdhcmRUeXBlID0gcXVlc3QucmV3YXJkLnR5cGU7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZEN1cnJlbmNpZXMuaW5jbHVkZXMocmV3YXJkVHlwZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbmN5SW1hZ2VzW3Jld2FyZFR5cGVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gYSBkZWZhdWx0IGltYWdlIG9yIGhhbmRsZSBpbnZhbGlkIHJld2FyZCB0eXBlc1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQbGF5ZXJDdXJyZW50Q3VycmVuY3kgKGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICBmb3IgKGxldCBpbmRleCBpbiBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCBjdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2N1cnJlbmN5Q29udGFpbmVyW2luZGV4XS50eXBlfVVzZXJJbnRlcmZhY2VgKTtcclxuICAgICAgICBjdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgY3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVuY3lDb250YWluZXJbaW5kZXhdLmFtb3VudH1gKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuXHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4IGluIGN1cnJlbmN5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpbmRleF0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2luZGV4XS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lVG9Db21wbGV0ZSAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlICgpO1xyXG5cclxuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKGhvdXJzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gY3VycmVudERhdGU7XHJcbn0iLCJpbXBvcnQgeyByZW1vdmVDb21wbGV0ZWRRdWVzdCwgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgeyBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5IH0gZnJvbSBcIi4vY3VycmVuY3lGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UsIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2VNYW5hZ2VyIChjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcikge1xyXG4gICAgLy8gbGV0IHBlcnNpc3RpbmdDdXJyZW5jeUNvbnRhaW5lciA9IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlKGAke2N1cnJlbmN5Q29udGFpbmVyfWApXHJcbiAgICAvLyBsZXQgcGVyc2lzdGluZ0N1cnJlbnRRdWVzdExpc3QgPSBnZXREYXRhRnJvbUxvY2FsU3RvcmFnZShgJHtjdXJyZW50UXVlc3RMaXN0fWApXHJcbiAgICBkaXNwbGF5UGxheWVyQ3VycmVudEN1cnJlbmN5KGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHJlbW92ZUNvbXBsZXRlZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIHNhdmVEYXRhVG9Mb2NhbFN0b3JhZ2UoXCJjdXJyZW50UXVlc3RMaXN0XCIsIGN1cnJlbnRRdWVzdExpc3QpO1xyXG4gICAgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShcImN1cnJlbmN5Q29udGFpbmVyXCIsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2F2ZURhdGFUb0xvY2FsU3RvcmFnZShrZXksIGRhdGEpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gIH1cclxuICBcclxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBkYXRhID8gSlNPTi5wYXJzZShkYXRhKSA6IG51bGw7XHJcbiAgfSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gJy4vY2xhc3Nlcy5qcydcclxuaW1wb3J0IHsgcmV3YXJkVXRpbGl0aWVzLCBjdXJyZW5jeUFnZ3JlZ2F0b3IgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgc2F2ZURhdGFUb0xvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlRnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1PYmplY3RpdmVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5QW1vdW50XCIpLnZhbHVlO1xyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gcGFyc2VJbnQoZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCk7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyAoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4IGluIGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyBcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke1txdWVzdEluZGV4XX1gKTtcclxuXHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApXHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgQ29tcGxldGUgQ2hlY2tib3ggTmVzdGVkIGluIFF1ZXN0IE9iamVjdGl2ZSBDb250ZW50IERpdiBcclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwuaHRtbEZvciA9IGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUxhYmVsKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEltYWdlXHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCByZXdhcmRVdGlsaXRpZXMuZ2V0UmV3YXJkSW1hZ2UoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XSkpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGVJbWFnZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRJbWFnZVwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBSZXdhcmQgQm94IEN1cnJlbmN5IEFtb3VudFxyXG4gICAgICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC5jbGFzc0xpc3QuYWRkKFwicXVlc3RSZXdhcmRBbW91bnRcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLmFtb3VudH0gJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC50eXBlfWApO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFF1ZXN0IChjdXJyZW50UXVlc3RMaXN0LCBxdWVzdCkge1xyXG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcclxuICAgIHJldHVybiBjdXJyZW50UXVlc3RMaXN0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGlmIChjdXJyZW50UXVlc3RMaXN0W2luZGV4XS5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcywgYWRkUXVlc3R9IGZyb20gXCIuL3F1ZXN0RnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5Rm9ybU1vZGFsLCBjbG9zZUZvcm1Nb2RhbCB9IGZyb20gXCIuL21vZGFsZnVuY3Rpb25zLmpzXCI7XG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XG5pbXBvcnQgZ2V0T2JqZWN0aXZlIGZyb20gXCIuL2dldE9iamVjdGl2ZS5qc1wiO1xuaW1wb3J0IHVzZXJJbnRlcmZhY2VNYW5hZ2VyIGZyb20gJy4vZXZlbnRNYW5hZ2VyJztcbmltcG9ydCB7IGdldERhdGFGcm9tTG9jYWxTdG9yYWdlLCBzYXZlRGF0YVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2VGdW5jdGlvbnMnO1xuXG5cbi8vIEdsb2JhbGx5IFNjb3BlZCBWYXJpYWJsZXNcbmxldCBjdXJyZW50UXVlc3RMaXN0ID0gZ2V0RGF0YUZyb21Mb2NhbFN0b3JhZ2UoJ2N1cnJlbnRRdWVzdExpc3QnKSB8fCBbXTsgLy8gTG9hZCBmcm9tIGxvY2FsIHN0b3JhZ2VcbmxldCBjdXJyZW5jeUNvbnRhaW5lciA9IChnZXREYXRhRnJvbUxvY2FsU3RvcmFnZSgnY3VycmVuY3lDb250YWluZXInKSBcbnx8IFtuZXcgQ3VycmVuY3koXCJHR1Rva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiQ2hlc3RLZXlzXCIsIDApXSk7IC8vIExvYWQgZnJvbSBsb2NhbCBzdG9yYWdlXG51c2VySW50ZXJmYWNlTWFuYWdlcihjdXJyZW50UXVlc3RMaXN0LCBjdXJyZW5jeUNvbnRhaW5lcik7XG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2FkZFF1ZXN0QnV0dG9uXCIpXG5hZGRRdWVzdEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5Rm9ybU1vZGFsKCk7XG59KVxuXG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIEFkZCBRdWVzdCB0byBRdWVzdCBMaXN0IGFuZCBEaXNwbGF5XG5sZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcbmZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xvc2VGb3JtTW9kYWwoZSk7XG4gICAgbGV0IG5ld2x5R2VuZXJhdGVkUXVlc3QgPSBnZXROZXdRdWVzdCgpO1xuICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xuICAgIHVzZXJJbnRlcmZhY2VNYW5hZ2VyKGN1cnJlbnRRdWVzdExpc3QsIGN1cnJlbmN5Q29udGFpbmVyKTtcbn0pXG5cblxuLy8gLy8gdmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbi8vIC8vIHZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbi8vIC8vIHZhciBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbi8vIC8vIHZhciBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuLy8gLy8gdmFyIGZvcm1hdHRlZERhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG4vLyAvLyBsZXQgcXVlc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtRGF0ZVwiKTtcbi8vIC8vIHF1ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZm9ybWF0dGVkRGF0ZSk7XG4vLyAvLyBxdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZm9ybWF0dGVkRGF0ZSk7XG5cblxuLy8gLy8gdGVzdCBjYXNlc1xuLy8gYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgZ3ltVGFzayk7XG4vLyBhZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCB3YXRlclRhc2spO1xuLy8gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCwgY3VycmVuY3lDb250YWluZXIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=