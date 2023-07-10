import { Quest, Currency } from './classes/classes.js'
import { rewardUtilities, currencyAggregator, displayPlayerCurrentCurrency } from './currencyFunctions.js';
import { currentQuestList } from './data.js';
import userInterfaceManager from './eventManager.js';
import { createQuestParallax, createQuestContainer, questController, removeEmptyState } from './indexViewFunctions.js';
import { saveDataToLocalStorage } from './localStorageFunctions.js';





export function getNewQuest () {
    let questObject = new Quest(null, null, null, new Currency(null, null), null)
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


export function createCardTemplate (type) {

    
    // Initialize Card (Container) Creation and Content
    let card = document.createElement("div"); 

    //Quest Objective Content
    let objective = document.createElement("div");

    let objectiveText = document.createElement("span");

    // Complete Checkbox Nested in  Objective Content Div 
    let completeContainer = document.createElement("div");

    //  Label
    let completeLabel = document.createElement("label");
    completeLabel.textContent = "Mark  Complete";

    //  Check Box
    let completeCheckbox = document.createElement("input");
    completeCheckbox.setAttribute("type", "checkbox");


    objective.appendChild(objectiveText);
    completeContainer.appendChild(completeCheckbox);
    completeContainer.appendChild(completeLabel);
    objective.appendChild(completeContainer);


    //Date to Complete Content
    let dateToCompleteBox = document.createElement("div");
    dateToCompleteBox.classList.add("dateToCompleteBox");


    //Reward Box Content
    let rewardBox =  document.createElement("div");
    rewardBox.classList.add("rewardBox");

    // Reward Box Image
    let rewardBoxCurrencyTypeImage = document.createElement("img");         
    rewardBox.appendChild(rewardBoxCurrencyTypeImage)

    // Reward Box Currency Amount
    let rewardBoxCurrencyAmount = document.createElement("div");
    rewardBox.appendChild(rewardBoxCurrencyAmount);

    card.appendChild(objective);
    card.appendChild(dateToCompleteBox);
    card.appendChild(rewardBox);

    if (type == "quest") {
        card.classList.add("questCard")
        objective.classList.add("questCardObjective");
        objectiveText.classList.add("questCardText");
        completeContainer.classList.add("questCompleteContainer");
        completeLabel.textContent = "Mark Quest Complete";
        completeCheckbox.classList.add("questCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");
        dateToCompleteBox.classList.add("dateToCompleteBox");       
        rewardBoxCurrencyTypeImage.classList.add("questRewardImage");
        rewardBoxCurrencyAmount.classList.add("questRewardAmount");
    }

    if (type == "goal") {
        card.classList.add("goalCard")
        objective.classList.add("goalObjective");
        objectiveText.classList.add("goalCardText");
        completeContainer.classList.add("goalCompleteContainer");
        completeLabel.textContent = "Mark Goal Complete";
        completeCheckbox.classList.add("goalCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");
        dateToCompleteBox.classList.add("dateToCompleteBox");       
        rewardBoxCurrencyTypeImage.classList.add("goalRewardImage");
        rewardBoxCurrencyAmount.classList.add("goalRewardAmount");
    }

    if (type == null || type == undefined) {
        console.log("Invalid Type!");
        return;
    }
    
    return card;
}

export function displayQuestCardContent (quest, cardElement, currencyContainer) {

        //Quest Objective Content
        let questObjective = cardElement.querySelector(".questCardText");
        questObjective.innerText = quest.objective;
        questObjective.setAttribute("id", `${quest.objective}`)
    
        let checkbox = cardElement.querySelector(".questCompleteCheckbox");
        if (checkbox) {
          checkbox.addEventListener("click", function() {
            currencyAggregator(currencyContainer, quest);
            displayPlayerCurrentCurrency(currencyContainer);
            removeCompletedQuest(currentQuestList);
          });
        } else {
          console.log("Checkbox element not found in the card");
        }
        
        //Date to Complete Content
        let dateToCompleteBox = cardElement.querySelector(".dateToCompleteBox");
        dateToCompleteBox.setAttribute("id", `questCard-${quest.dateToComplete}`)
        dateToCompleteBox.textContent = (`${quest.dateToComplete}`);

        //Reward Box Content
        let rewardBox = cardElement.querySelector(".rewardBox");
        rewardBox.setAttribute("id", `questCard-${quest}-reward`);

            // Reward Box Image
            let rewardBoxCurrencyTypeImage = cardElement.querySelector(".questRewardImage");
            console.log(rewardUtilities.getRewardImage(quest))
            rewardBoxCurrencyTypeImage.setAttribute("src", rewardUtilities.getRewardImage(quest));            
           
            // Reward Box Currency Amount
            let rewardBoxCurrencyAmount = cardElement.querySelector(".questRewardAmount");
            rewardBoxCurrencyAmount.textContent = (`${quest.reward.amount} ${quest.reward.type}`);

        return cardElement;
}

export function displayGoalCardContent (goal, cardElement, currencyContainer) {

    //Goal Objective Content
    let goalObjective = cardElement.querySelector(".goalCardText");
    goalObjective.innerText = goal.objective;
    goalObjective.setAttribute("id", `${goal.objective}`)

    let checkbox = cardElement.querySelector(".goalCompleteCheckbox");
    if (checkbox) {
      checkbox.addEventListener("click", function() {
        currencyAggregator(currencyContainer, goal);
        displayPlayerCurrentCurrency(currencyContainer);
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
        console.log(rewardUtilities.getRewardImage(goal))
        rewardBoxCurrencyTypeImage.setAttribute("src", rewardUtilities.getRewardImage(goal));            
       
        // Reward Box Currency Amount
        let rewardBoxCurrencyAmount = cardElement.querySelector(".goalRewardAmount");
        rewardBoxCurrencyAmount.textContent = (`${goal.reward.amount} ${goal.reward.type}`);

    return cardElement;
}

export function renderQuestList (currentQuestList, currencyContainer) {


    if (currentQuestList == null) {
        console.log("Quest List is Empty");
        return;
    }

    else {

        removeEmptyState();
        createQuestParallax();
        let questList = document.querySelector(".questParallax");
        console.log(questList);

        for (let i = 0; i < currentQuestList.length; i++) {
            let card = createCardTemplate("quest");
            card.setAttribute("id", `quest-${i}`);
            displayQuestCardContent(currentQuestList[i], card, currencyContainer);
            questList.appendChild(card);
        }
    }
}


export function addQuest (currentQuestList, quest) {
    currentQuestList.push(quest);
    return currentQuestList;
}

export function removeCompletedQuest (currentQuestList) {
    for (let index = 0; index < currentQuestList.length; index++) {
        if (currentQuestList[index].questComplete == true) {
            currentQuestList.splice(index, 1);
        }
    }
}

