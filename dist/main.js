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
/* harmony export */   "default": () => (/* binding */ createQuestCard)
/* harmony export */ });
function createQuestCard (quest) {
    
    // Initialize Card (Container) Creation and Content
    let card = document.createElement("div");
    card.classList.add("questCard")
    card.setAttribute("id", `${quest}`);


    //Quest Objective Content
    let questObjective = document.createElement("div");
    questObjective.classList.add("questCardObjective");
    questObjective.setAttribute("id", `questCard-${quest.objective}`)
    questObjective.textContent = (`${quest.objective}`);

    //Date to Complete Content
    let dateToCompleteBox = document.createElement("div");
    dateToCompleteBox.classList.add("dateToCompleteBox");
    dateToCompleteBox.setAttribute("id", `questCard-${quest.dateToComplete}`)
    dateToCompleteBox.textContent = (`${quest.dateToComplete}`);

    //Reward Box Content
    let rewardBox =  document.createElement("div");
    rewardBox.classList.add("rewardBox");
    rewardBox.setAttribute("id", `questCard-${quest}-reward`);
    let rewardBoxCurrencyType = document.createElement("div");
    rewardBoxCurrencyType.textContent = (quest.reward.type);
    let rewardBoxCurrencyAmount = document.createElement("div");
    rewardBoxCurrencyAmount.textContent = (quest.reward.amount);
    rewardBox.appendChild(rewardBoxCurrencyType);
    rewardBox.appendChild(rewardBoxCurrencyAmount);


    card.appendChild(questObjective);
    card.appendChild(dateToCompleteBox);
    card.appendChild(rewardBox);

    let taskContainer = document.querySelector(".taskContainer");
    taskContainer.appendChild(card);

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

console.log(currencyContainer);

let gymTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Gym"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), (0,_checkQuestCompletion_js__WEBPACK_IMPORTED_MODULE_4__["default"])(true), new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Keys", 2));
let waterTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Water"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), (0,_checkQuestCompletion_js__WEBPACK_IMPORTED_MODULE_4__["default"])(true), new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("GG Tokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currencyContainer, gymTask));
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currencyContainer, waterTask));

console.log(currentQuestList);
console.log(currencyContainer);

let taskButton = document.querySelector("button#taskButton")
taskButton.addEventListener("click", function (e) {
    displayFormModal();
})

let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    closeFormModal(e);
    let newlyGeneratedQuest = (0,_getNewQuest_js__WEBPACK_IMPORTED_MODULE_7__["default"])();
    console.log(newlyGeneratedQuest);
    (0,_questCard_js__WEBPACK_IMPORTED_MODULE_6__["default"])(newlyGeneratedQuest);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JtQztBQUNPO0FBQzFDO0FBQ2U7QUFDZiwwQkFBMEIsc0RBQUssdUJBQXVCLHlEQUFRO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLE1BQU07QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkUscUNBQXFDLGdCQUFnQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxxQkFBcUI7QUFDM0Usd0NBQXdDLHFCQUFxQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0Q7QUFDTztBQUNHO0FBQ1c7QUFDQztBQUNaO0FBQ0Y7O0FBRTNDO0FBQ0E7QUFDQSw2QkFBNkIseURBQVEsc0JBQXNCLHlEQUFRO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLHNEQUFLLENBQUMsNERBQVksU0FBUyx1REFBTyxhQUFhLG9FQUFlLFlBQVkseURBQVE7QUFDcEcsb0JBQW9CLHNEQUFLLENBQUMsNERBQVksV0FBVyx1REFBTyxhQUFhLG9FQUFlLFlBQVkseURBQVE7QUFDeEc7QUFDQTtBQUNBLENBQUMsa0VBQWtCO0FBQ25CLENBQUMsa0VBQWtCOztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDJEQUFXO0FBQ3pDO0FBQ0EsSUFBSSx5REFBZTtBQUNuQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY2hlY2tRdWVzdENvbXBsZXRpb24uanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5QWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY3VycmVuY3lDbGFzcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZHVlRGF0ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2V0TmV3UXVlc3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE9iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcXVlc3RDYXJkLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9xdWVzdENsYXNzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1F1ZXN0Q29tcGxldGUgKHF1ZXN0U3RhdHVzKSB7XHJcbiAgICByZXR1cm4gcXVlc3RTdGF0dXM7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXJyZW5jeUFnZ3JlZ2F0b3IgKGN1cnJlbmN5Q29udGFpbmVyLCBjdXJyZW50UXVlc3QpIHtcclxuICAgIGlmIChjdXJyZW50UXVlc3QucXVlc3RDb21wbGV0ZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW5jeUNvbnRhaW5lci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY3VycmVuY3lDb250YWluZXJbaV0udHlwZSA9PSBjdXJyZW50UXVlc3QucmV3YXJkLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29udGFpbmVyW2ldLmFtb3VudCArPSBjdXJyZW50UXVlc3QucmV3YXJkLmFtb3VudDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbn1cclxuXHJcblxyXG4gICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnJlbmN5IHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGFtb3VudCkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBhbW91bnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZVRvQ29tcGxldGUgKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSAoKTtcclxuXHJcbiAgICBjdXJyZW50RGF0ZS5zZXRIb3Vycyhob3Vycyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRNaW51dGVzKG1pbnV0ZXMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0U2Vjb25kcyhzZWNvbmRzKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudERhdGU7XHJcbn0iLCJpbXBvcnQgUXVlc3QgZnJvbSAnLi9xdWVzdENsYXNzLmpzJ1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAnLi9jdXJyZW5jeUNsYXNzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE5ld1F1ZXN0ICgpIHtcclxuICAgIGxldCBxdWVzdE9iamVjdCA9IG5ldyBRdWVzdChudWxsLCBudWxsLCBudWxsLCBuZXcgQ3VycmVuY3kobnVsbCwgbnVsbCksIG51bGwpXHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtT2JqZWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtT2JqZWN0aXZlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1EYXRlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lUeXBlXCIpLnZhbHVlO1xyXG4gICAgbGV0IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeUFtb3VudFwiKS52YWx1ZTtcclxuXHJcbiAgICBxdWVzdE9iamVjdC5vYmplY3RpdmUgPSBnZXRRdWVzdEZvcm1PYmplY3RpdmU7XHJcbiAgICBxdWVzdE9iamVjdC5kYXRlVG9Db21wbGV0ZSA9IGdldFF1ZXN0Rm9ybURhdGU7XHJcbiAgICBxdWVzdE9iamVjdC5xdWVzdENvbXBsZXRlID0gZmFsc2U7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQudHlwZSA9IGdldFF1ZXN0Q3VycmVuY3lUeXBlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLmFtb3VudCA9IGdldFF1ZXN0Q3VycmVuY3lBbW91bnQ7XHJcbiAgICBxdWVzdE9iamVjdC5pZCA9IG51bGw7XHJcblxyXG4gICAgcmV0dXJuIHF1ZXN0T2JqZWN0O1xyXG59XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRPYmplY3RpdmUgKG9iamVjdGl2ZSkge1xyXG4gICAgcmV0dXJuIFN0cmluZyhvYmplY3RpdmUpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUXVlc3RDYXJkIChxdWVzdCkge1xyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIENhcmQgKENvbnRhaW5lcikgQ3JlYXRpb24gYW5kIENvbnRlbnRcclxuICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtxdWVzdH1gKTtcclxuXHJcblxyXG4gICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgbGV0IHF1ZXN0T2JqZWN0aXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7cXVlc3Qub2JqZWN0aXZlfWApXHJcbiAgICBxdWVzdE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IChgJHtxdWVzdC5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgIGxldCBkYXRlVG9Db21wbGV0ZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICBkYXRlVG9Db21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7cXVlc3QuZGF0ZVRvQ29tcGxldGV9YClcclxuICAgIGRhdGVUb0NvbXBsZXRlQm94LnRleHRDb250ZW50ID0gKGAke3F1ZXN0LmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICBsZXQgcmV3YXJkQm94ID0gIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7cXVlc3R9LXJld2FyZGApO1xyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGUudGV4dENvbnRlbnQgPSAocXVlc3QucmV3YXJkLnR5cGUpO1xyXG4gICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHJld2FyZEJveEN1cnJlbmN5QW1vdW50LnRleHRDb250ZW50ID0gKHF1ZXN0LnJld2FyZC5hbW91bnQpO1xyXG4gICAgcmV3YXJkQm94LmFwcGVuZENoaWxkKHJld2FyZEJveEN1cnJlbmN5VHlwZSk7XHJcbiAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuXHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZVRvQ29tcGxldGVCb3gpO1xyXG4gICAgY2FyZC5hcHBlbmRDaGlsZChyZXdhcmRCb3gpO1xyXG5cclxuICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrQ29udGFpbmVyXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBRdWVzdCBmcm9tIFwiLi9xdWVzdENsYXNzLmpzXCI7XG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcIi4vY3VycmVuY3lDbGFzcy5qc1wiO1xuaW1wb3J0IGdldE9iamVjdGl2ZSBmcm9tIFwiLi9nZXRPYmplY3RpdmUuanNcIjtcbmltcG9ydCBpc1F1ZXN0Q29tcGxldGUgZnJvbSBcIi4vY2hlY2tRdWVzdENvbXBsZXRpb24uanNcIjtcbmltcG9ydCBjdXJyZW5jeUFnZ3JlZ2F0b3IgZnJvbSBcIi4vY3VycmVuY3lBZ2dyZWdhdG9yLmpzXCI7XG5pbXBvcnQgY3JlYXRlUXVlc3RDYXJkIGZyb20gXCIuL3F1ZXN0Q2FyZC5qc1wiO1xuaW1wb3J0IGdldE5ld1F1ZXN0IGZyb20gXCIuL2dldE5ld1F1ZXN0LmpzXCI7XG5cbmNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcbmxldCBjdXJyZW50UXVlc3RMaXN0ID0gW107XG5sZXQgY3VycmVuY3lDb250YWluZXIgPSBbbmV3IEN1cnJlbmN5KFwiR0cgVG9rZW5zXCIsIDApLCBuZXcgQ3VycmVuY3koXCJLZXlzXCIsIDApXVxudmFyIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbnZhciB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbnZhciBtb250aCA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBkYXkgPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuXG52YXIgZm9ybWF0dGVkRGF0ZSA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbmxldCBxdWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1EYXRlXCIpO1xucXVlc3RGb3JtLnNldEF0dHJpYnV0ZShcIm1pblwiLCBmb3JtYXR0ZWREYXRlKTtcbnF1ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmb3JtYXR0ZWREYXRlKTtcblxuZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUZvcm1Nb2RhbCAoKSB7XG4gXG4gICAgLy8gRGlzcGxheSBtb2RhbCBieSBzZXR0aW5nIGRpc3BsYXkgdG8gYmxvY2tcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiBcbiAgICB9XG4gXG5mdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcbiBcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG1vZGFsRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59XG5cbmNvbnNvbGUubG9nKGN1cnJlbmN5Q29udGFpbmVyKTtcblxubGV0IGd5bVRhc2sgPSBuZXcgUXVlc3QoZ2V0T2JqZWN0aXZlKFwiR3ltXCIpLCBkdWVEYXRlKDIwLCAzMCwgMCksIGlzUXVlc3RDb21wbGV0ZSh0cnVlKSwgbmV3IEN1cnJlbmN5KFwiS2V5c1wiLCAyKSk7XG5sZXQgd2F0ZXJUYXNrID0gbmV3IFF1ZXN0KGdldE9iamVjdGl2ZShcIldhdGVyXCIpLCBkdWVEYXRlKDIwLCAzMCwgMCksIGlzUXVlc3RDb21wbGV0ZSh0cnVlKSwgbmV3IEN1cnJlbmN5KFwiR0cgVG9rZW5zXCIsIDE1KSk7XG5hZGRRdWVzdChjdXJyZW50UXVlc3RMaXN0LCBneW1UYXNrKTtcbmFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIHdhdGVyVGFzayk7XG4oY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCBneW1UYXNrKSk7XG4oY3VycmVuY3lBZ2dyZWdhdG9yKGN1cnJlbmN5Q29udGFpbmVyLCB3YXRlclRhc2spKTtcblxuY29uc29sZS5sb2coY3VycmVudFF1ZXN0TGlzdCk7XG5jb25zb2xlLmxvZyhjdXJyZW5jeUNvbnRhaW5lcik7XG5cbmxldCB0YXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvbiN0YXNrQnV0dG9uXCIpXG50YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGRpc3BsYXlGb3JtTW9kYWwoKTtcbn0pXG5cbmxldCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtU3VibWl0QnV0dG9uXCIpO1xuZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbG9zZUZvcm1Nb2RhbChlKTtcbiAgICBsZXQgbmV3bHlHZW5lcmF0ZWRRdWVzdCA9IGdldE5ld1F1ZXN0KCk7XG4gICAgY29uc29sZS5sb2cobmV3bHlHZW5lcmF0ZWRRdWVzdCk7XG4gICAgY3JlYXRlUXVlc3RDYXJkKG5ld2x5R2VuZXJhdGVkUXVlc3QpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=