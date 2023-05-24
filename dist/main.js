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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsS0FBSztBQUNMLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jdXJyZW5jeUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2N1cnJlbmN5Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2R1ZURhdGUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2dldE5ld1F1ZXN0LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9nZXRPYmplY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL21vZGFsZnVuY3Rpb25zLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9xdWVzdENhcmQuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL3F1ZXN0Q2xhc3MuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1cnJlbmN5QWdncmVnYXRvciAoY3VycmVuY3lDb250YWluZXIsIGN1cnJlbnRRdWVzdCkge1xyXG4gICAgaWYgKGN1cnJlbnRRdWVzdC5xdWVzdENvbXBsZXRlID09IHRydWUpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbmN5Q29udGFpbmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW5jeUNvbnRhaW5lcltpXS50eXBlID09IGN1cnJlbnRRdWVzdC5yZXdhcmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVuY3lDb250YWluZXJbaV0uYW1vdW50ICs9IGN1cnJlbnRRdWVzdC5yZXdhcmQuYW1vdW50O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxufVxyXG5cclxuXHJcbiAgIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVuY3kge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSwgYW1vdW50KSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmFtb3VudCA9IGFtb3VudDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lVG9Db21wbGV0ZSAoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcclxuICAgIGxldCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlICgpO1xyXG5cclxuICAgIGN1cnJlbnREYXRlLnNldEhvdXJzKGhvdXJzKTtcclxuICAgIGN1cnJlbnREYXRlLnNldE1pbnV0ZXMobWludXRlcyk7XHJcbiAgICBjdXJyZW50RGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50RGF0ZTtcclxufSIsImltcG9ydCBRdWVzdCBmcm9tICcuL3F1ZXN0Q2xhc3MuanMnXHJcbmltcG9ydCBDdXJyZW5jeSBmcm9tICcuL2N1cnJlbmN5Q2xhc3MuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0TmV3UXVlc3QgKCkge1xyXG4gICAgbGV0IHF1ZXN0T2JqZWN0ID0gbmV3IFF1ZXN0KG51bGwsIG51bGwsIG51bGwsIG5ldyBDdXJyZW5jeShudWxsLCBudWxsKSwgbnVsbClcclxuICAgIGxldCBnZXRRdWVzdEZvcm1PYmplY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1PYmplY3RpdmVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RGb3JtRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybURhdGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1DdXJyZW5jeVR5cGVcIikudmFsdWU7XHJcbiAgICBsZXQgZ2V0UXVlc3RDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybUN1cnJlbmN5QW1vdW50XCIpLnZhbHVlO1xyXG5cclxuICAgIHF1ZXN0T2JqZWN0Lm9iamVjdGl2ZSA9IGdldFF1ZXN0Rm9ybU9iamVjdGl2ZTtcclxuICAgIHF1ZXN0T2JqZWN0LmRhdGVUb0NvbXBsZXRlID0gZ2V0UXVlc3RGb3JtRGF0ZTtcclxuICAgIHF1ZXN0T2JqZWN0LnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcclxuICAgIHF1ZXN0T2JqZWN0LnJld2FyZC50eXBlID0gZ2V0UXVlc3RDdXJyZW5jeVR5cGU7XHJcbiAgICBxdWVzdE9iamVjdC5yZXdhcmQuYW1vdW50ID0gZ2V0UXVlc3RDdXJyZW5jeUFtb3VudDtcclxuICAgIHF1ZXN0T2JqZWN0LmlkID0gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gcXVlc3RPYmplY3Q7XHJcbn1cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldE9iamVjdGl2ZSAob2JqZWN0aXZlKSB7XHJcbiAgICByZXR1cm4gU3RyaW5nKG9iamVjdGl2ZSk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUZvcm1Nb2RhbCAoKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBEaXNwbGF5IG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBibG9ja1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiBcclxuICAgIH1cclxuIFxyXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VGb3JtTW9kYWwgKGV2ZW50KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG1vZGFsRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWZvcm0nKTtcclxuXHJcbiAgICAvLyBIaWRlIG1vZGFsIGJ5IHNldHRpbmcgZGlzcGxheSB0byBub25lXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbW9kYWxEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVRdWVzdENhcmRzIChjdXJyZW50UXVlc3RMaXN0KSB7XHJcblxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnF1ZXN0Q29udGFpbmVyXCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgZm9yIChsZXQgcXVlc3RJbmRleCA9IDA7IHF1ZXN0SW5kZXggPCBjdXJyZW50UXVlc3RMaXN0Lmxlbmd0aDsgcXVlc3RJbmRleCsrKSB7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgQ2FyZCAoQ29udGFpbmVyKSBDcmVhdGlvbiBhbmQgQ29udGVudFxyXG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRcIilcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGAke1txdWVzdEluZGV4XX1gKTtcclxuXHJcblxyXG4gICAgICAgIC8vUXVlc3QgT2JqZWN0aXZlIENvbnRlbnRcclxuICAgICAgICBsZXQgcXVlc3RPYmplY3RpdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHF1ZXN0T2JqZWN0aXZlLmNsYXNzTGlzdC5hZGQoXCJxdWVzdENhcmRPYmplY3RpdmVcIik7XHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ub2JqZWN0aXZlfWApXHJcbiAgICAgICAgcXVlc3RPYmplY3RpdmUudGV4dENvbnRlbnQgPSAoYCR7Y3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5vYmplY3RpdmV9YCk7XHJcblxyXG4gICAgICAgIC8vUXVlc3QgQ29tcGxldGUgQ2hlY2tib3ggTmVzdGVkIGluIFF1ZXN0IE9iamVjdGl2ZSBDb250ZW50IERpdiBcclxuICAgICAgICBsZXQgcXVlc3RDb21wbGV0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicXVlc3RDb21wbGV0ZUNvbnRhaW5lclwiKTtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIk1hcmsgUXVlc3QgQ29tcGxldGVcIjtcclxuICAgICAgICBxdWVzdENvbXBsZXRlTGFiZWwuaHRtbEZvciA9IGBpc1F1ZXN0Q29tcGxldGUtJHtxdWVzdEluZGV4fWA7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgbGV0IHF1ZXN0Q29tcGxldGVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guY2xhc3NMaXN0LmFkZChcInF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcclxuICAgICAgICBxdWVzdENvbXBsZXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgaXNRdWVzdENvbXBsZXRlLSR7cXVlc3RJbmRleH1gKTtcclxuXHJcbiAgICAgICAgcXVlc3RDb21wbGV0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ2hlY2tib3gpO1xyXG4gICAgICAgIHF1ZXN0Q29tcGxldGVDb250YWluZXIuYXBwZW5kQ2hpbGQocXVlc3RDb21wbGV0ZUxhYmVsKTtcclxuICAgICAgICBxdWVzdE9iamVjdGl2ZS5hcHBlbmRDaGlsZChxdWVzdENvbXBsZXRlQ29udGFpbmVyKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIC8vRGF0ZSB0byBDb21wbGV0ZSBDb250ZW50XHJcbiAgICAgICAgbGV0IGRhdGVUb0NvbXBsZXRlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC5jbGFzc0xpc3QuYWRkKFwiZGF0ZVRvQ29tcGxldGVCb3hcIik7XHJcbiAgICAgICAgZGF0ZVRvQ29tcGxldGVCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke2N1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0uZGF0ZVRvQ29tcGxldGV9YClcclxuICAgICAgICBkYXRlVG9Db21wbGV0ZUJveC50ZXh0Q29udGVudCA9IChgJHtjdXJyZW50UXVlc3RMaXN0W3F1ZXN0SW5kZXhdLmRhdGVUb0NvbXBsZXRlfWApO1xyXG5cclxuICAgICAgICAvL1Jld2FyZCBCb3ggQ29udGVudFxyXG4gICAgICAgIGxldCByZXdhcmRCb3ggPSAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICByZXdhcmRCb3guY2xhc3NMaXN0LmFkZChcInJld2FyZEJveFwiKTtcclxuICAgICAgICByZXdhcmRCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHF1ZXN0Q2FyZC0ke1txdWVzdEluZGV4XX0tcmV3YXJkYCk7XHJcbiAgICAgICAgbGV0IHJld2FyZEJveEN1cnJlbmN5VHlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lUeXBlLnRleHRDb250ZW50ID0gKGN1cnJlbnRRdWVzdExpc3RbcXVlc3RJbmRleF0ucmV3YXJkLnR5cGUpO1xyXG4gICAgICAgIGxldCByZXdhcmRCb3hDdXJyZW5jeUFtb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgcmV3YXJkQm94Q3VycmVuY3lBbW91bnQudGV4dENvbnRlbnQgPSAoY3VycmVudFF1ZXN0TGlzdFtxdWVzdEluZGV4XS5yZXdhcmQuYW1vdW50KTtcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lUeXBlKTtcclxuICAgICAgICByZXdhcmRCb3guYXBwZW5kQ2hpbGQocmV3YXJkQm94Q3VycmVuY3lBbW91bnQpO1xyXG5cclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHF1ZXN0T2JqZWN0aXZlKTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRhdGVUb0NvbXBsZXRlQm94KTtcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHJld2FyZEJveCk7XHJcblxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RpdmUsIGRhdGVUb0NvbXBsZXRlLCBxdWVzdENvbXBsZXRlLCByZXdhcmQsIGlkKSB7XHJcbiAgICAgICAgdGhpcy5vYmplY3RpdmUgPSBvYmplY3RpdmU7XHJcbiAgICAgICAgdGhpcy5kYXRlVG9Db21wbGV0ZSA9IGRhdGVUb0NvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMucXVlc3RDb21wbGV0ZSA9IHF1ZXN0Q29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5yZXdhcmQgPSByZXdhcmQ7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBRdWVzdCBmcm9tIFwiLi9xdWVzdENsYXNzLmpzXCI7XG5pbXBvcnQgZHVlRGF0ZSBmcm9tIFwiLi9kdWVEYXRlLmpzXCI7XG5pbXBvcnQgQ3VycmVuY3kgZnJvbSBcIi4vY3VycmVuY3lDbGFzcy5qc1wiO1xuaW1wb3J0IGdldE9iamVjdGl2ZSBmcm9tIFwiLi9nZXRPYmplY3RpdmUuanNcIjtcbmltcG9ydCBjdXJyZW5jeUFnZ3JlZ2F0b3IgZnJvbSBcIi4vY3VycmVuY3lBZ2dyZWdhdG9yLmpzXCI7XG5pbXBvcnQgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMgZnJvbSBcIi4vcXVlc3RDYXJkLmpzXCI7XG5pbXBvcnQgZ2V0TmV3UXVlc3QgZnJvbSBcIi4vZ2V0TmV3UXVlc3QuanNcIjtcbmltcG9ydCB7IGRpc3BsYXlGb3JtTW9kYWwsIGNsb3NlRm9ybU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxmdW5jdGlvbnMuanNcIjtcblxubGV0IGN1cnJlbnRRdWVzdExpc3QgPSBbXTtcbmxldCBjdXJyZW5jeUNvbnRhaW5lciA9IFtuZXcgQ3VycmVuY3koXCJHRyBUb2tlbnNcIiwgMCksIG5ldyBDdXJyZW5jeShcIktleXNcIiwgMCldXG52YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xudmFyIHllYXIgPSBjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xudmFyIG1vbnRoID0gU3RyaW5nKGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xudmFyIGRheSA9IFN0cmluZyhjdXJyZW50RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XG52YXIgZm9ybWF0dGVkRGF0ZSA9IHllYXIgKyAnLScgKyBtb250aCArICctJyArIGRheTtcbmxldCBxdWVzdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm1EYXRlXCIpO1xucXVlc3RGb3JtLnNldEF0dHJpYnV0ZShcIm1pblwiLCBmb3JtYXR0ZWREYXRlKTtcbnF1ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBmb3JtYXR0ZWREYXRlKTtcblxuZnVuY3Rpb24gYWRkUXVlc3QgKGN1cnJlbnRRdWVzdExpc3QsIHF1ZXN0KSB7XG4gICAgY3VycmVudFF1ZXN0TGlzdC5wdXNoKHF1ZXN0KTtcbn1cblxuXG5cbi8vIHRlc3QgY2FzZXNcbmxldCBneW1UYXNrID0gbmV3IFF1ZXN0KGdldE9iamVjdGl2ZShcIkd5bVwiKSwgZHVlRGF0ZSgyMCwgMzAsIDApLCBmYWxzZSwgbmV3IEN1cnJlbmN5KFwiS2V5c1wiLCAyKSk7XG5sZXQgd2F0ZXJUYXNrID0gbmV3IFF1ZXN0KGdldE9iamVjdGl2ZShcIldhdGVyXCIpLCBkdWVEYXRlKDIwLCAzMCwgMCksIGZhbHNlLCBuZXcgQ3VycmVuY3koXCJHRyBUb2tlbnNcIiwgMTUpKTtcbmFkZFF1ZXN0KGN1cnJlbnRRdWVzdExpc3QsIGd5bVRhc2spO1xuYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgd2F0ZXJUYXNrKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIGd5bVRhc2spKTtcbihjdXJyZW5jeUFnZ3JlZ2F0b3IoY3VycmVuY3lDb250YWluZXIsIHdhdGVyVGFzaykpO1xuY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCk7XG5cblxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gT3BlbiBRdWVzdCBDcmVhdGlvbiBNb2RhbFxubGV0IGFkZFF1ZXN0QnV0dG9uQ2xpY2tlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24jYWRkUXVlc3RCdXR0b25cIilcbmFkZFF1ZXN0QnV0dG9uQ2xpY2tlZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BsYXlGb3JtTW9kYWwoKTtcbn0pXG5cblxuLy8gRXZlbnQgTGlzdGVuZXIgdG8gQWRkIFF1ZXN0IHRvIFF1ZXN0IExpc3QgYW5kIERpc3BsYXlcbmxldCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtU3VibWl0QnV0dG9uXCIpO1xuZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbG9zZUZvcm1Nb2RhbChlKTtcbiAgICBsZXQgbmV3bHlHZW5lcmF0ZWRRdWVzdCA9IGdldE5ld1F1ZXN0KCk7XG4gICAgYWRkUXVlc3QoY3VycmVudFF1ZXN0TGlzdCwgbmV3bHlHZW5lcmF0ZWRRdWVzdCk7XG4gICAgY3JlYXRlQW5kRGlzcGxheVF1ZXN0Q2FyZHMoY3VycmVudFF1ZXN0TGlzdCk7XG59KVxuXG4vLyBFdmVudCBMaXN0ZW5lciB0byBDaGVjayBpZiBRdWVzdCBDb21wbGV0ZVxubGV0IGNoZWNrQm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0Q29tcGxldGVDaGVja2JveFwiKTtcbmNoZWNrQm94ZXMuZm9yRWFjaChjaGVja0JveCA9PiB7XG4gICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdExpc3RbKHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXS5xdWVzdENvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRRdWVzdExpc3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0TGlzdFsodGhpcy5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCldLnF1ZXN0Q29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pXG59ICkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=