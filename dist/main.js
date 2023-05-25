/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/modalfunctions.js":
/*!*******************************!*\
  !*** ./src/modalfunctions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _currencyAggregator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./currencyAggregator.js */ "./src/currencyAggregator.js");
/* harmony import */ var _questCard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questCard.js */ "./src/questCard.js");
/* harmony import */ var _getNewQuest_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getNewQuest.js */ "./src/getNewQuest.js");
/* harmony import */ var _modalfunctions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modalfunctions.js */ "./src/modalfunctions.js");









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


// test cases
let gymTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Gym"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), false, new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Keys", 2));
let waterTask = new _questClass_js__WEBPACK_IMPORTED_MODULE_0__["default"]((0,_getObjective_js__WEBPACK_IMPORTED_MODULE_3__["default"])("Water"), (0,_dueDate_js__WEBPACK_IMPORTED_MODULE_1__["default"])(20, 30, 0), false, new _currencyClass_js__WEBPACK_IMPORTED_MODULE_2__["default"]("GG Tokens", 15));
addQuest(currentQuestList, gymTask);
addQuest(currentQuestList, waterTask);
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currencyContainer, gymTask));
((0,_currencyAggregator_js__WEBPACK_IMPORTED_MODULE_4__["default"])(currencyContainer, waterTask));
(0,_questCard_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currentQuestList);


// Event Listener to Open Quest Creation Modal
let addQuestButtonClicked = document.querySelector("button#addQuestButton")
addQuestButtonClicked.addEventListener("click", function () {
    ;(0,_modalfunctions_js__WEBPACK_IMPORTED_MODULE_7__.displayFormModal)();
})


// Event Listener to Add Quest to Quest List and Display
let formSubmitButton = document.querySelector("#formSubmitButton");
formSubmitButton.addEventListener("click", function (e) {
    (0,_modalfunctions_js__WEBPACK_IMPORTED_MODULE_7__.closeFormModal)(e);
    let newlyGeneratedQuest = (0,_getNewQuest_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
    addQuest(currentQuestList, newlyGeneratedQuest);
    (0,_questCard_js__WEBPACK_IMPORTED_MODULE_5__["default"])(currentQuestList);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxLQUFLO0FBQ0wsRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5QWdncmVnYXRvci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvY3VycmVuY3lDbGFzcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZHVlRGF0ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZ2V0TmV3UXVlc3QuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE9iamVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kYWxmdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3F1ZXN0Q2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvcXVlc3RDbGFzcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3VycmVuY3lBZ2dyZWdhdG9yIChjdXJyZW5jeUNvbnRhaW5lciwgY3VycmVudFF1ZXN0KSB7XHJcbiAgICBpZiAoY3VycmVudFF1ZXN0LnF1ZXN0Q29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVuY3lDb250YWluZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbmN5Q29udGFpbmVyW2ldLnR5cGUgPT0gY3VycmVudFF1ZXN0LnJld2FyZC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW5jeUNvbnRhaW5lcltpXS5hbW91bnQgKz0gY3VycmVudFF1ZXN0LnJld2FyZC5hbW91bnQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG5cclxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW5jeSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBhbW91bnQpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuYW1vdW50ID0gYW1vdW50O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVUb0NvbXBsZXRlIChob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUgKCk7XHJcblxyXG4gICAgY3VycmVudERhdGUuc2V0SG91cnMoaG91cnMpO1xyXG4gICAgY3VycmVudERhdGUuc2V0TWludXRlcyhtaW51dGVzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldFNlY29uZHMoc2Vjb25kcyk7XHJcblxyXG4gICAgcmV0dXJuIGN1cnJlbnREYXRlO1xyXG59IiwiaW1wb3J0IFF1ZXN0IGZyb20gJy4vcXVlc3RDbGFzcy5qcydcclxuaW1wb3J0IEN1cnJlbmN5IGZyb20gJy4vY3VycmVuY3lDbGFzcy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXROZXdRdWVzdCAoKSB7XHJcbiAgICBsZXQgcXVlc3RPYmplY3QgPSBuZXcgUXVlc3QobnVsbCwgbnVsbCwgbnVsbCwgbmV3IEN1cnJlbmN5KG51bGwsIG51bGwpLCBudWxsKVxyXG4gICAgbGV0IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybU9iamVjdGl2ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEZvcm1EYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtRGF0ZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5VHlwZVwiKS52YWx1ZTtcclxuICAgIGxldCBnZXRRdWVzdEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtQ3VycmVuY3lBbW91bnRcIikudmFsdWU7XHJcblxyXG4gICAgcXVlc3RPYmplY3Qub2JqZWN0aXZlID0gZ2V0UXVlc3RGb3JtT2JqZWN0aXZlO1xyXG4gICAgcXVlc3RPYmplY3QuZGF0ZVRvQ29tcGxldGUgPSBnZXRRdWVzdEZvcm1EYXRlO1xyXG4gICAgcXVlc3RPYmplY3QucXVlc3RDb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgcXVlc3RPYmplY3QucmV3YXJkLnR5cGUgPSBnZXRRdWVzdEN1cnJlbmN5VHlwZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC5hbW91bnQgPSBnZXRRdWVzdEN1cnJlbmN5QW1vdW50O1xyXG4gICAgcXVlc3RPYmplY3QuaWQgPSBudWxsO1xyXG5cclxuICAgIHJldHVybiBxdWVzdE9iamVjdDtcclxufVxyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0T2JqZWN0aXZlIChvYmplY3RpdmUpIHtcclxuICAgIHJldHVybiBTdHJpbmcob2JqZWN0aXZlKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Rm9ybU1vZGFsICgpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIERpc3BsYXkgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIGJsb2NrXHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuIFxyXG4gICAgfVxyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUZvcm1Nb2RhbCAoZXZlbnQpIHtcclxuICAgIFxyXG4gICAgY29uc3QgbW9kYWxEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtZm9ybScpO1xyXG5cclxuICAgIC8vIEhpZGUgbW9kYWwgYnkgc2V0dGluZyBkaXNwbGF5IHRvIG5vbmVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBtb2RhbERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0Q2FyZHMgKGN1cnJlbnRRdWVzdExpc3QpIHtcclxuXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucXVlc3RDb250YWluZXJcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBmb3IgKGxldCBxdWVzdEluZGV4ID0gMDsgcXVlc3RJbmRleCA8IGN1cnJlbnRRdWVzdExpc3QubGVuZ3RoOyBxdWVzdEluZGV4KyspIHtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBDYXJkIChDb250YWluZXIpIENyZWF0aW9uIGFuZCBDb250ZW50XHJcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZFwiKVxyXG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYCR7W3F1ZXN0SW5kZXhdfWApO1xyXG5cclxuXHJcbiAgICAgICAgLy9RdWVzdCBPYmplY3RpdmUgQ29udGVudFxyXG4gICAgICAgIGxldCBxdWVzdE9iamVjdGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuY2xhc3NMaXN0LmFkZChcInF1ZXN0Q2FyZE9iamVjdGl2ZVwiKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YClcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLm9iamVjdGl2ZX1gKTtcclxuXHJcbiAgICAgICAgLy9RdWVzdCBDb21wbGV0ZSBDaGVja2JveCBOZXN0ZWQgaW4gUXVlc3QgT2JqZWN0aXZlIENvbnRlbnQgRGl2IFxyXG4gICAgICAgIGxldCBxdWVzdENvbXBsZXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENvbXBsZXRlQ29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTWFyayBRdWVzdCBDb21wbGV0ZVwiO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVMYWJlbC5odG1sRm9yID0gYGlzUXVlc3RDb21wbGV0ZS0ke3F1ZXN0SW5kZXh9YDtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWApO1xyXG5cclxuICAgICAgICBxdWVzdENvbXBsZXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVDaGVja2JveCk7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlTGFiZWwpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmFwcGVuZENoaWxkKHF1ZXN0Q29tcGxldGVDb250YWluZXIpO1xyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgLy9EYXRlIHRvIENvbXBsZXRlIENvbnRlbnRcclxuICAgICAgICBsZXQgZGF0ZVRvQ29tcGxldGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LmNsYXNzTGlzdC5hZGQoXCJkYXRlVG9Db21wbGV0ZUJveFwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5kYXRlVG9Db21wbGV0ZX1gKVxyXG4gICAgICAgIGRhdGVUb0NvbXBsZXRlQm94LnRleHRDb250ZW50ID0gKGAke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YCk7XHJcblxyXG4gICAgICAgIC8vUmV3YXJkIEJveCBDb250ZW50XHJcbiAgICAgICAgbGV0IHJld2FyZEJveCA9ICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5jbGFzc0xpc3QuYWRkKFwicmV3YXJkQm94XCIpO1xyXG4gICAgICAgIHJld2FyZEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcXVlc3RDYXJkLSR7W3F1ZXN0SW5kZXhdfS1yZXdhcmRgKTtcclxuICAgICAgICBsZXQgcmV3YXJkQm94Q3VycmVuY3lUeXBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeVR5cGUudGV4dENvbnRlbnQgPSAoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQudHlwZSk7XHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5QW1vdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3hDdXJyZW5jeUFtb3VudC50ZXh0Q29udGVudCA9IChjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLnJld2FyZC5hbW91bnQpO1xyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeVR5cGUpO1xyXG4gICAgICAgIHJld2FyZEJveC5hcHBlbmRDaGlsZChyZXdhcmRCb3hDdXJyZW5jeUFtb3VudCk7XHJcblxyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocXVlc3RPYmplY3RpdmUpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGF0ZVRvQ29tcGxldGVCb3gpO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocmV3YXJkQm94KTtcclxuXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdGl2ZSwgZGF0ZVRvQ29tcGxldGUsIHF1ZXN0Q29tcGxldGUsIHJld2FyZCwgaWQpIHtcclxuICAgICAgICB0aGlzLm9iamVjdGl2ZSA9IG9iamVjdGl2ZTtcclxuICAgICAgICB0aGlzLmRhdGVUb0NvbXBsZXRlID0gZGF0ZVRvQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5xdWVzdENvbXBsZXRlID0gcXVlc3RDb21wbGV0ZTtcclxuICAgICAgICB0aGlzLnJld2FyZCA9IHJld2FyZDtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFF1ZXN0IGZyb20gXCIuL3F1ZXN0Q2xhc3MuanNcIjtcbmltcG9ydCBkdWVEYXRlIGZyb20gXCIuL2R1ZURhdGUuanNcIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwiLi9jdXJyZW5jeUNsYXNzLmpzXCI7XG5pbXBvcnQgZ2V0T2JqZWN0aXZlIGZyb20gXCIuL2dldE9iamVjdGl2ZS5qc1wiO1xuaW1wb3J0IGN1cnJlbmN5QWdncmVnYXRvciBmcm9tIFwiLi9jdXJyZW5jeUFnZ3JlZ2F0b3IuanNcIjtcbmltcG9ydCBjcmVhdGVBbmREaXNwbGF5UXVlc3RDYXJkcyBmcm9tIFwiLi9xdWVzdENhcmQuanNcIjtcbmltcG9ydCBnZXROZXdRdWVzdCBmcm9tIFwiLi9nZXROZXdRdWVzdC5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheUZvcm1Nb2RhbCwgY2xvc2VGb3JtTW9kYWwgfSBmcm9tIFwiLi9tb2RhbGZ1bmN0aW9ucy5qc1wiO1xuXG5sZXQgY3VycmVudFF1ZXN0TGlzdCA9IFtdO1xubGV0IGN1cnJlbmN5Q29udGFpbmVyID0gW25ldyBDdXJyZW5jeShcIkdHIFRva2Vuc1wiLCAwKSwgbmV3IEN1cnJlbmN5KFwiS2V5c1wiLCAwKV1cbnZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG52YXIgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG52YXIgbW9udGggPSBTdHJpbmcoY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XG52YXIgZGF5ID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbnZhciBmb3JtYXR0ZWREYXRlID0geWVhciArICctJyArIG1vbnRoICsgJy0nICsgZGF5O1xubGV0IHF1ZXN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybURhdGVcIik7XG5xdWVzdEZvcm0uc2V0QXR0cmlidXRlKFwibWluXCIsIGZvcm1hdHRlZERhdGUpO1xucXVlc3RGb3JtLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGZvcm1hdHRlZERhdGUpO1xuXG5mdW5jdGlvbiBhZGRRdWVzdCAoY3VycmVudFF1ZXN0TGlzdCwgcXVlc3QpIHtcbiAgICBjdXJyZW50UXVlc3RMaXN0LnB1c2gocXVlc3QpO1xufVxuXG5cbi8vIHRlc3QgY2FzZXNcbmxldCBneW1UYXNrID0gbmV3IFF1ZXN0KGdldE9iamVjdGl2ZShcIkd5bVwiKSwgZHVlRGF0ZSgyMCwgMzAsIDApLCBmYWxzZSwgbmV3IEN1cnJlbmN5KFwiS2V5c1wiLCAyKSk7XG5sZXQgd2F0ZXJUYXNrID0gbmV3IFF1ZXN0KGdldE9iamVjdGl2ZShcIldhdGVyXCIpLCBkdWVEYXRlKDIwLCAzMCwgMCksIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHRyBUb2tlbnNcIiwgMTUpKTtcbmFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGd5bVRhc2spO1xuYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgd2F0ZXJUYXNrKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGd5bVRhc2spKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHdhdGVyVGFzaykpO1xuY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCk7XG5cblxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gT3BlbiBRdWVzdCBDcmVhdGlvbiBNb2RhbFxubGV0IGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jYWRkUXVlc3RCdXR0b25cIilcbmFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BsYXlGb3JtTW9kYWwoKTtcbn0pXG5cblxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gQWRkIFF1ZXN0IHRvIFF1ZXN0IExpc3QgYW5kIERpc3BsYXlcbmxldCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtU3VibWl0QnV0dG9uXCIpO1xuZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbG9zZUZvcm1Nb2RhbChlKTtcbiAgICBsZXQgbmV3bHlHZW5lcmF0ZWRRdWVzdCA9IGdldE5ld1F1ZXN0KCk7XG4gICAgYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgbmV3bHlHZW5lcmF0ZWRRdWVzdCk7XG4gICAgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCk7XG59KVxuXG4vLyBFdmVudCBMaXN0ZW5lciB0byBDaGVjayBpZiBRdWVzdCBDb21wbGV0ZVxubGV0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcbmNoZWNrQm94ZXMuZm9yRWFjaChjaGVja0JveCA9PiB7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3RbKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdExpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFsodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCldLnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG59ICkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=