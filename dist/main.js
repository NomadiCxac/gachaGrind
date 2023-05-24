/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkQuestCompletion.js":
/*!*************************************!*\
  !*** ./src/checkQuestCompletion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isQuestComplete)
/* harmony export */ });
function isQuestComplete (questStatus) {
    return questStatus;
}

/***/ }),

/***/ "./src/currencyAggregator.js":
/*!***********************************!*\
  !*** ./src/currencyAggregator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/currencyClass.js":
/*!******************************!*\
  !*** ./src/currencyClass.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Currency)
/* harmony export */ });
class Currency {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
}


/***/ }),

/***/ "./src/dueDate.js":
/*!************************!*\
  !*** ./src/dueDate.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/getNewQuest.js":
/*!****************************!*\
  !*** ./src/getNewQuest.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getNewQuest)
/* harmony export */ });
/* harmony import */ var _questClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questClass.js */ "./src/questClass.js");
/* harmony import */ var _currencyClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currencyClass.js */ "./src/currencyClass.js");



function getNewQuest () {
    let questObject = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"](null, null, null, new _currencyClass_js__WEBPACK_IMPORTED_MODULE_1__["default"](null, null), null)
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



/***/ }),

/***/ "./src/getObjective.js":
/*!*****************************!*\
  !*** ./src/getObjective.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getObjective)
/* harmony export */ });
function getObjective (objective) {
    return String(objective);
}

/***/ }),

/***/ "./src/questCard.js":
/*!**************************!*\
  !*** ./src/questCard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createQuestCards)
/* harmony export */ });
function createQuestCards (currentQuestList) {

    let taskContainer = document.querySelector(".questContainer");
    taskContainer.textContent = "";

    for (let questIndex = 0; questIndex < currentQuestList.length; questIndex++) {

        // Initialize Card (Container) Creation and Content
        let card = document.createElement("div");
        card.classList.add("questCard")
        card.setAttribute("id", `${currentQuestList[questIndex].objective}`);


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
        questCompleteLabel.htmlFor = "isQuestComplete";
       

        let questCompleteCheckbox = document.createElement("input");
        questCompleteCheckbox.classList.add("questCompleteCheckbox");
        questCompleteCheckbox.setAttribute("type", "checkbox");
        questCompleteCheckbox.setAttribute("id", "isQuestComplete");

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
        let rewardBoxCurrencyType = document.createElement("div");
        rewardBoxCurrencyType.textContent = (currentQuestList[questIndex].reward.type);
        let rewardBoxCurrencyAmount = document.createElement("div");
        rewardBoxCurrencyAmount.textContent = (currentQuestList[questIndex].reward.amount);
        rewardBox.appendChild(rewardBoxCurrencyType);
        rewardBox.appendChild(rewardBoxCurrencyAmount);

        card.appendChild(questObjective);
        card.appendChild(dateToCompleteBox);
        card.appendChild(rewardBox);

        taskContainer.appendChild(card);
    }
    

}

/***/ }),

/***/ "./src/questClass.js":
/*!***************************!*\
  !*** ./src/questClass.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quest)
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _questClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./questClass.js */ "./src/questClass.js");
/* harmony import */ var _dueDate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dueDate.js */ "./src/dueDate.js");
/* harmony import */ var _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currencyClass.js */ "./src/currencyClass.js");
/* harmony import */ var _getObjective_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getObjective.js */ "./src/getObjective.js");
/* harmony import */ var _checkQuestCompletion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkQuestCompletion.js */ "./src/checkQuestCompletion.js");
/* harmony import */ var _currencyAggregator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currencyAggregator.js */ "./src/currencyAggregator.js");
/* harmony import */ var _questCard_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questCard.js */ "./src/questCard.js");
/* harmony import */ var _getNewQuest_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getNewQuest.js */ "./src/getNewQuest.js");









const modalDiv = document.getElementById('modal-form');
let currentQuestList = [];
let currencyContainer = [new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("GG Tokens", 0), new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Keys", 0)]
var currentDate = new Date();
var year = currentDate.getFullYear();
var month = String(currentDate.getMonth() + 1).padStart(2, '0');
var day = String(currentDate.getDate()).padStart(2, '0');

var formattedDate = year + '-' + month + '-' + day;
let questForm = document.getElementById("formDate");
questForm.setAttribute("min", formattedDate);
questForm.setAttribute("value", formattedDate);

function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);
}

function displayFormModal () {
 
    // Display modal by setting display to block
    modalDiv.style.display = 'block';
 
    }
 
function closeFormModal (event) {
 
    event.preventDefault();
    modalDiv.style.display = 'none';
}


// test cases
let gymTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Gym"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), (0,_checkQuestCompletion_js__WEBPACK_IMPORTED_MODULE_4__["default"])(true), new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Keys", 2));
let waterTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Water"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), (0,_checkQuestCompletion_js__WEBPACK_IMPORTED_MODULE_4__["default"])(true), new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("GG Tokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currencyContainer, gymTask));
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currencyContainer, waterTask));
(0,_questCard_js__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList);

let addQuestButton = document.querySelector("button#addQuestButton")
addQuestButton.addEventListener("click", function () {
    displayFormModal();
})

let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    closeFormModal(e);
    let newlyGeneratedQuest = (0,_getNewQuest_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    addQuest(currentQuestList, newlyGeneratedQuest);
    (0,_questCard_js__WEBPACK_IMPORTED_MODULE_6__["default"])(currentQuestList);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JtQztBQUNPO0FBQzFDO0FBQ2U7QUFDZiwwQkFBMEIsc0RBQUssdUJBQXVCLHlEQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHNDQUFzQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyx1Q0FBdUM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCx1Q0FBdUM7QUFDOUYseUNBQXlDLHVDQUF1QztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsNENBQTRDO0FBQ3RHLDRDQUE0Qyw0Q0FBNEM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNUQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNEO0FBQ087QUFDRztBQUNXO0FBQ0M7QUFDWDtBQUNIOztBQUUzQztBQUNBO0FBQ0EsNkJBQTZCLHlEQUFRLHNCQUFzQix5REFBUTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGtCQUFrQixzREFBSyxDQUFDLDREQUFZLFNBQVMsdURBQU8sYUFBYSxvRUFBZSxZQUFZLHlEQUFRO0FBQ3BHLG9CQUFvQixzREFBSyxDQUFDLDREQUFZLFdBQVcsdURBQU8sYUFBYSxvRUFBZSxZQUFZLHlEQUFRO0FBQ3hHO0FBQ0E7QUFDQSxDQUFDLGtFQUFrQjtBQUNuQixDQUFDLGtFQUFrQjtBQUNuQix5REFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0EsSUFBSSx5REFBZ0I7QUFDcEIsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2NoZWNrUXVlc3RDb21wbGV0aW9uLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jdXJyZW5jeUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2R1ZURhdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE5ld1F1ZXN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nZXRPYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3F1ZXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcXVlc3RDbGFzcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNRdWVzdENvbXBsZXRlIChxdWVzdFN0YXR1cykge1xyXG4gICAgcmV0dXJuIHF1ZXN0U3RhdHVzO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY3lDb250YWluZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2ldLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpXS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59IiwiaW1wb3J0IFF1ZXN0IGZyb20gJy4vcXVlc3RDbGFzcy5qcydcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJy4vY3VycmVuY3lDbGFzcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybU9iamVjdGl2ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtRGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5VHlwZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lBbW91bnRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBnZXRRdWVzdEN1cnJlbmN5QW1vdW50O1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2JqZWN0aXZlIChvYmplY3RpdmUpIHtcclxuICAgIHJldHVybiBTdHJpbmcob2JqZWN0aXZlKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4ID0gMDsgcXVlc3RJbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBxdWVzdEluZGV4KyspIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG5cclxuICAgICAgICAvL1F1ZXN0IE9iamVjdGl2ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5jbGFzc0xpc3QuYWRkKFwicXVlc3RDYXJkT2JqZWN0aXZlXCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKVxyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApO1xyXG5cclxuICAgICAgICAvL1F1ZXN0IENvbXBsZXRlIENoZWNrYm94IE5lc3RlZCBpbiBRdWVzdCBPYmplY3RpdmUgQ29udGVudCBEaXYgXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJNYXJrIFF1ZXN0IENvbXBsZXRlXCI7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUxhYmVsLmh0bWxGb3IgPSBcImlzUXVlc3RDb21wbGV0ZVwiO1xyXG4gICAgICAgXHJcblxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpc1F1ZXN0Q29tcGxldGVcIik7XHJcblxyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNoZWNrYm94KTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVMYWJlbCk7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUNvbnRhaW5lcik7XHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAvL0RhdGUgdG8gQ29tcGxldGUgQ29udGVudFxyXG4gICAgICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guY2xhc3NMaXN0LmFkZChcImRhdGVUb0NvbXBsZXRlQm94XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApXHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3gudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKTtcclxuXHJcbiAgICAgICAgLy9SZXdhcmQgQm94IENvbnRlbnRcclxuICAgICAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LmNsYXNzTGlzdC5hZGQoXCJyZXdhcmRCb3hcIik7XHJcbiAgICAgICAgcmV3YXJkQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBxdWVzdENhcmQtJHtbcXVlc3RJbmRleF19LXJld2FyZGApO1xyXG4gICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5VHlwZS50ZXh0Q29udGVudCA9IChjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC50eXBlKTtcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLmFtb3VudCk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZSk7XHJcbiAgICAgICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5QW1vdW50KTtcclxuXHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChxdWVzdE9iamVjdGl2ZSk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkYXRlVG9Db21wbGV0ZUJveCk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0aXZlLCBkYXRlVG9Db21wbGV0ZSwgcXVlc3RDb21wbGV0ZSwgcmV3YXJkLCBpZCkge1xyXG4gICAgICAgIHRoaXMub2JqZWN0aXZlID0gb2JqZWN0aXZlO1xyXG4gICAgICAgIHRoaXMuZGF0ZVRvQ29tcGxldGUgPSBkYXRlVG9Db21wbGV0ZTtcclxuICAgICAgICB0aGlzLnF1ZXN0Q29tcGxldGUgPSBxdWVzdENvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucmV3YXJkID0gcmV3YXJkO1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUXVlc3QgZnJvbSBcIi4vcXVlc3RDbGFzcy5qc1wiO1xuaW1wb3J0IGR1ZURhdGUgZnJvbSBcIi4vZHVlRGF0ZS5qc1wiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCIuL2N1cnJlbmN5Q2xhc3MuanNcIjtcbmltcG9ydCBnZXRPYmplY3RpdmUgZnJvbSBcIi4vZ2V0T2JqZWN0aXZlLmpzXCI7XG5pbXBvcnQgaXNRdWVzdENvbXBsZXRlIGZyb20gXCIuL2NoZWNrUXVlc3RDb21wbGV0aW9uLmpzXCI7XG5pbXBvcnQgY3VycmVuY3lBZ2dyZWdhdG9yIGZyb20gXCIuL2N1cnJlbmN5QWdncmVnYXRvci5qc1wiO1xuaW1wb3J0IGNyZWF0ZVF1ZXN0Q2FyZHMgZnJvbSBcIi4vcXVlc3RDYXJkLmpzXCI7XG5pbXBvcnQgZ2V0TmV3UXVlc3QgZnJvbSBcIi4vZ2V0TmV3UXVlc3QuanNcIjtcblxuY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xubGV0IGN1cnJlbnRRdWVzdExpc3QgPSBbXTtcbmxldCBjdXJyZW5jeUNvbnRhaW5lciA9IFtuZXcgQ3VycmVuY3koXCJHRyBUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIktleXNcIiwgMCldXG52YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xudmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xudmFyIG1vbnRoID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xudmFyIGRheSA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG5cbnZhciBmb3JtYXR0ZWREYXRlID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xubGV0IHF1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybURhdGVcIik7XG5xdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwibWluXCIsIGZvcm1hdHRlZERhdGUpO1xucXVlc3RGb3JtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZvcm1hdHRlZERhdGUpO1xuXG5mdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcbiBcbiAgICAvLyBEaXNwbGF5IG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBibG9ja1xuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuIFxuICAgIH1cbiBcbmZ1bmN0aW9uIGNsb3NlRm9ybU1vZGFsIChldmVudCkge1xuIFxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuXG4vLyB0ZXN0IGNhc2VzXG5sZXQgZ3ltVGFzayA9IG5ldyBRdWVzdChnZXRPYmplY3RpdmUoXCJHeW1cIiksIGR1ZURhdGUoMjAsIDMwLCAwKSwgaXNRdWVzdENvbXBsZXRlKHRydWUpLCBuZXcgQ3VycmVuY3koXCJLZXlzXCIsIDIpKTtcbmxldCB3YXRlclRhc2sgPSBuZXcgUXVlc3QoZ2V0T2JqZWN0aXZlKFwiV2F0ZXJcIiksIGR1ZURhdGUoMjAsIDMwLCAwKSwgaXNRdWVzdENvbXBsZXRlKHRydWUpLCBuZXcgQ3VycmVuY3koXCJHRyBUb2tlbnNcIiwgMTUpKTtcbmFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGd5bVRhc2spO1xuYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgd2F0ZXJUYXNrKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGd5bVRhc2spKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHdhdGVyVGFzaykpO1xuY3JlYXRlUXVlc3RDYXJkcyhjdXJyZW50UXVlc3RMaXN0KTtcblxubGV0IGFkZFF1ZXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiNhZGRRdWVzdEJ1dHRvblwiKVxuYWRkUXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5Rm9ybU1vZGFsKCk7XG59KVxuXG5sZXQgZm9ybVN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVN1Ym1pdEJ1dHRvblwiKTtcbmZvcm1TdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xvc2VGb3JtTW9kYWwoZSk7XG4gICAgbGV0IG5ld2x5R2VuZXJhdGVkUXVlc3QgPSBnZXROZXdRdWVzdCgpO1xuICAgIGFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xuICAgIGNyZWF0ZVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==