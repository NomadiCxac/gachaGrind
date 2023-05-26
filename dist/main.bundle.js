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

/***/ "./src/images/Key.png":
/*!****************************!*\
  !*** ./src/images/Key.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("./images/Key.png");

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
/* harmony export */   Quest: () => (/* binding */ Quest)
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


/***/ }),

/***/ "./src/currencyAggregator.js":
/*!***********************************!*\
  !*** ./src/currencyAggregator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ currencyAggregator)
/* harmony export */ });
function currencyAggregator (currencyContainer, currentQuest) {
    if (currentQuest.questComplete == true) {
        for (let i = 0; i < currencyContainer.length; i++) {
            if (currencyContainer[i].type == currentQuest.reward.type) {
                currencyContainer[i].amount += currentQuest.reward.amount;
                return;
            }
        }
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
/* harmony export */   rewardUtilities: () => (/* binding */ rewardUtilities)
/* harmony export */ });
/* harmony import */ var _images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/GGToken.png */ "./src/images/GGToken.png");
/* harmony import */ var _images_Key_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Key.png */ "./src/images/Key.png");




const validCurrencies = ["GGTokens", "Keys"]

const currencyImages = {
    GGTokens: _images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__["default"],
    Keys: _images_Key_png__WEBPACK_IMPORTED_MODULE_1__["default"]
};

const rewardUtilities = {

    validCurrencies: [...validCurrencies],
    getRewardImage: function(quest) {

        const rewardType = quest.reward.type;

        if (validCurrencies.includes(rewardType)) {
            console.log(_images_GGToken_png__WEBPACK_IMPORTED_MODULE_0__["default"] )
            return currencyImages[rewardType];
        }

    // Return a default image or handle invalid reward types
    return null;
  }
};


function currencyAggregator (currencyContainer, currentQuest) {
    if (currentQuest.questComplete == true) {
        for (let i = 0; i < currencyContainer.length; i++) {
            if (currencyContainer[i].type == currentQuest.reward.type) {
                currencyContainer[i].amount += currentQuest.reward.amount;
                return;
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
/* harmony export */   getNewQuest: () => (/* binding */ getNewQuest)
/* harmony export */ });
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyFunctions.js */ "./src/currencyFunctions.js");






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
    questObject.reward.amount = getQuestCurrencyAmount;
    questObject.id = null;

    return questObject;
}



function createAndDisplayQuestCards (currentQuestList) {

    let taskContainer = document.querySelector(".questContainer");
    taskContainer.textContent = "";

    for (let questIndex = 0; questIndex < currentQuestList.length; questIndex++) {

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
            console.log(_currencyFunctions_js__WEBPACK_IMPORTED_MODULE_1__.rewardUtilities.getRewardImage(currentQuestList[questIndex]));
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
/* harmony import */ var _currencyAggregator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currencyAggregator.js */ "./src/currencyAggregator.js");
/* harmony import */ var _src_images_GGToken_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/images/GGToken.png */ "./src/images/GGToken.png");
/* harmony import */ var _src_images_ChestKey_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/images/ChestKey.png */ "./src/images/ChestKey.png");











// Globally Scoped Variables
let currentQuestList = [];
let currencyContainer = [new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 0), new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("Keys", 0)]
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;
let questForm = document.getElementById("formDate");
questForm.setAttribute("min", formattedDate);
questForm.setAttribute("value", formattedDate);


// test cases
let gymTask = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Quest((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Gym"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(20, 30, 0), false, new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("Keys", 2));
let waterTask = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Quest((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Water"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_4__["default"])(20, 30, 0), false, new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Currency("GGTokens", 15));
(0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.addQuest)(currentQuestList, gymTask);
(0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.addQuest)(currentQuestList, waterTask);
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(currencyContainer, gymTask));
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_6__["default"])(currencyContainer, waterTask));
(0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createAndDisplayQuestCards)(currentQuestList);


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
    (0,_questFunctions_js__WEBPACK_IMPORTED_MODULE_2__.createAndDisplayQuestCards)(currentQuestList);
})

// Event Listener to Check if Quest Complete
let checkBoxes = document.querySelectorAll(".questCompleteCheckbox");
checkBoxes.forEach(checkBox => {
    checkBox.addEventListener("change", function () {
        if (this.checked) {
            currentQuestList[(this.parentNode.parentNode.parentNode.id)].questComplete = true;
            console.log(currentQuestList);
        } else {
            currentQuestList[(this.parentNode.parentNode.parentNode.id)].questComplete = false;
        }
    })
} )
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3lCO0FBQ3lDO0FBQ2pCO0FBQ3BDO0FBQ1U7QUFDWTtBQUNUO0FBQ0g7OztBQUc3QztBQUNBO0FBQ0EsNkJBQTZCLGlEQUFRLHFCQUFxQixpREFBUTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGtCQUFrQiw4Q0FBSyxDQUFDLDREQUFZLFNBQVMsdURBQU8sd0JBQXdCLGlEQUFRO0FBQ3BGLG9CQUFvQiw4Q0FBSyxDQUFDLDREQUFZLFdBQVcsdURBQU8sd0JBQXdCLGlEQUFRO0FBQ3hGLDREQUFRO0FBQ1IsNERBQVE7QUFDUixDQUFDLGtFQUFrQjtBQUNuQixDQUFDLGtFQUFrQjtBQUNuQiw4RUFBMEI7OztBQUcxQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFFQUFnQjtBQUNwQixDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtFQUFjO0FBQ2xCLDhCQUE4QiwrREFBVztBQUN6QyxJQUFJLDREQUFRO0FBQ1osSUFBSSw4RUFBMEI7QUFDOUIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsS0FBSztBQUNMLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbWFnZXMvQ2hlc3RLZXkucG5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbWFnZXMvR0dUb2tlbi5wbmciLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2ltYWdlcy9LZXkucG5nIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jdXJyZW5jeUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kdWVEYXRlLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nZXRPYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZGFsZnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9xdWVzdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLi9pbWFnZXMvQ2hlc3RLZXkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiLi9pbWFnZXMvS2V5LnBuZ1wiOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImV4cG9ydCBjbGFzcyBRdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY3lDb250YWluZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2ldLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpXS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuICAiLCJpbXBvcnQgR0dUb2tlbkltYWdlIGZyb20gXCIuL2ltYWdlcy9HR1Rva2VuLnBuZ1wiXHJcbmltcG9ydCBLZXlJbWFnZSBmcm9tIFwiLi9pbWFnZXMvS2V5LnBuZ1wiXHJcblxyXG5cclxuY29uc3QgdmFsaWRDdXJyZW5jaWVzID0gW1wiR0dUb2tlbnNcIiwgXCJLZXlzXCJdXHJcblxyXG5jb25zdCBjdXJyZW5jeUltYWdlcyA9IHtcclxuICAgIEdHVG9rZW5zOiBHR1Rva2VuSW1hZ2UsXHJcbiAgICBLZXlzOiBLZXlJbWFnZVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJld2FyZFV0aWxpdGllcyA9IHtcclxuXHJcbiAgICB2YWxpZEN1cnJlbmNpZXM6IFsuLi52YWxpZEN1cnJlbmNpZXNdLFxyXG4gICAgZ2V0UmV3YXJkSW1hZ2U6IGZ1bmN0aW9uKHF1ZXN0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHJld2FyZFR5cGUgPSBxdWVzdC5yZXdhcmQudHlwZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkQ3VycmVuY2llcy5pbmNsdWRlcyhyZXdhcmRUeXBlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhHR1Rva2VuSW1hZ2UgKVxyXG4gICAgICAgICAgICByZXR1cm4gY3VycmVuY3lJbWFnZXNbcmV3YXJkVHlwZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIC8vIFJldHVybiBhIGRlZmF1bHQgaW1hZ2Ugb3IgaGFuZGxlIGludmFsaWQgcmV3YXJkIHR5cGVzXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbmN5QWdncmVnYXRvciAoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdCkge1xyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmN5Q29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpXS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb250YWluZXJbaV0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbiAgIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZVRvQ29tcGxldGUgKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSAoKTtcclxuXHJcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0U2Vjb25kcyhzZWNvbmRzKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudERhdGU7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPYmplY3RpdmUgKG9iamVjdGl2ZSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlGb3JtTW9kYWwgKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XHJcblxyXG4gICAgLy8gRGlzcGxheSBtb2RhbCBieSBzZXR0aW5nIGRpc3BsYXkgdG8gYmxvY2tcclxuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gXHJcbiAgICB9XHJcbiBcclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlRm9ybU1vZGFsIChldmVudCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbC1mb3JtJyk7XHJcblxyXG4gICAgLy8gSGlkZSBtb2RhbCBieSBzZXR0aW5nIGRpc3BsYXkgdG8gbm9uZVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuIiwiaW1wb3J0IHsgUXVlc3QsIEN1cnJlbmN5IH0gZnJvbSAnLi9jbGFzc2VzLmpzJ1xyXG5pbXBvcnQgeyByZXdhcmRVdGlsaXRpZXMgfSBmcm9tICcuL2N1cnJlbmN5RnVuY3Rpb25zLmpzJztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybU9iamVjdGl2ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtRGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5VHlwZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lBbW91bnRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBnZXRRdWVzdEN1cnJlbmN5QW1vdW50O1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4ID0gMDsgcXVlc3RJbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBxdWVzdEluZGV4KyspIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7W3F1ZXN0SW5kZXhdfWApO1xyXG5cclxuXHJcbiAgICAgICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgICAgIGxldCBxdWVzdE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZE9iamVjdGl2ZVwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YClcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKTtcclxuXHJcbiAgICAgICAgLy9RdWVzdCBDb21wbGV0ZSBDaGVja2JveCBOZXN0ZWQgaW4gUXVlc3QgT2JqZWN0aXZlIENvbnRlbnQgRGl2IFxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBRdWVzdCBDb21wbGV0ZVwiO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC5odG1sRm9yID0gYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YDtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWApO1xyXG5cclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVDaGVja2JveCk7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlTGFiZWwpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgICAgICBsZXQgZGF0ZVRvQ29tcGxldGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJkYXRlVG9Db21wbGV0ZUJveFwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKVxyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YCk7XHJcblxyXG4gICAgICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7W3F1ZXN0SW5kZXhdfS1yZXdhcmRgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggSW1hZ2VcclxuICAgICAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdKSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJld2FyZFV0aWxpdGllcy5nZXRSZXdhcmRJbWFnZShjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdKSk7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZUltYWdlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEltYWdlXCIpO1xyXG4gICAgICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lUeXBlSW1hZ2UpXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFJld2FyZCBCb3ggQ3VycmVuY3kgQW1vdW50XHJcbiAgICAgICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LmNsYXNzTGlzdC5hZGQoXCJxdWVzdFJld2FyZEFtb3VudFwiKTtcclxuICAgICAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQuYW1vdW50fSAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLnR5cGV9YCk7XHJcbiAgICAgICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocXVlc3RPYmplY3RpdmUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZVRvQ29tcGxldGVCb3gpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XHJcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IFF1ZXN0LCBDdXJyZW5jeSB9IGZyb20gXCIuL2NsYXNzZXMuanNcIjtcbmltcG9ydCB7IGdldE5ld1F1ZXN0LCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcywgYWRkUXVlc3QgfSBmcm9tIFwiLi9xdWVzdEZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbGZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IGR1ZURhdGUgZnJvbSBcIi4vZHVlRGF0ZS5qc1wiO1xuaW1wb3J0IGdldE9iamVjdGl2ZSBmcm9tIFwiLi9nZXRPYmplY3RpdmUuanNcIjtcbmltcG9ydCBjdXJyZW5jeUFnZ3JlZ2F0b3IgZnJvbSBcIi4vY3VycmVuY3lBZ2dyZWdhdG9yLmpzXCI7XG5pbXBvcnQgR0dUb2tlbnMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvR0dUb2tlbi5wbmdcIlxuaW1wb3J0IEtleXMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvQ2hlc3RLZXkucG5nXCJcblxuXG4vLyBHbG9iYWxseSBTY29wZWQgVmFyaWFibGVzXG5sZXQgY3VycmVudFF1ZXN0TGlzdCA9IFtdO1xubGV0IGN1cnJlbmN5Q29udGFpbmVyID0gW25ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJLZXlzXCIsIDApXVxudmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbnZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbnZhciBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xudmFyIGZvcm1hdHRlZERhdGUgPSB5ZWFyICsgJy0nICsgbW9udGggKyAnLScgKyBkYXk7XG5sZXQgcXVlc3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtRGF0ZVwiKTtcbnF1ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZm9ybWF0dGVkRGF0ZSk7XG5xdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZm9ybWF0dGVkRGF0ZSk7XG5cblxuLy8gdGVzdCBjYXNlc1xubGV0IGd5bVRhc2sgPSBuZXcgUXVlc3QoZ2V0T2JqZWN0aXZlKFwiR3ltXCIpLCBkdWVEYXRlKDIwLCAzMCwgMCksIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJLZXlzXCIsIDIpKTtcbmxldCB3YXRlclRhc2sgPSBuZXcgUXVlc3QoZ2V0T2JqZWN0aXZlKFwiV2F0ZXJcIiksIGR1ZURhdGUoMjAsIDMwLCAwKSwgZmFsc2UsIG5ldyBDdXJyZW5jeShcIkdHVG9rZW5zXCIsIDE1KSk7XG5hZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBneW1UYXNrKTtcbmFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIHdhdGVyVGFzayk7XG4oY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBneW1UYXNrKSk7XG4oY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCB3YXRlclRhc2spKTtcbmNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QpO1xuXG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIE9wZW4gUXVlc3QgQ3JlYXRpb24gTW9kYWxcbmxldCBhZGRRdWVzdEJ1dHRvbkNsaWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uI2FkZFF1ZXN0QnV0dG9uXCIpXG5hZGRRdWVzdEJ1dHRvbkNsaWNrZWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5Rm9ybU1vZGFsKCk7XG59KVxuXG5cbi8vIEV2ZW50IExpc3RlbmVyIHRvIEFkZCBRdWVzdCB0byBRdWVzdCBMaXN0IGFuZCBEaXNwbGF5XG5sZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcbmZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xvc2VGb3JtTW9kYWwoZSk7XG4gICAgbGV0IG5ld2x5R2VuZXJhdGVkUXVlc3QgPSBnZXROZXdRdWVzdCgpO1xuICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xuICAgIGNyZWF0ZUFuZERpc3BsYXlRdWVzdENhcmRzKGN1cnJlbnRRdWVzdExpc3QpO1xufSlcblxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gQ2hlY2sgaWYgUXVlc3QgQ29tcGxldGVcbmxldCBjaGVja0JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XG5jaGVja0JveGVzLmZvckVhY2goY2hlY2tCb3ggPT4ge1xuICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3RMaXN0Wyh0aGlzLnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKV0ucXVlc3RDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50UXVlc3RMaXN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3RbKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXS5xdWVzdENvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KVxufSApIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9