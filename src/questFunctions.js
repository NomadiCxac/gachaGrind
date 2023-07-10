import { Quest, Currency } from './classes/classes.js'
import { rewardUtilities, currencyAggregator, displayPlayerCurrentCurrency } from './currencyFunctions.js';
import { currentQuestList } from './data.js';
import userInterfaceManager from './eventManager.js';
import { createQuestParallax, createQuestContainer, questController, removeEmptyState } from './indexViewFunctions.js';
import { saveDataToLocalStorage } from './localStorageFunctions.js';


export function getNewQuest () {
    let questObject = new Quest(null, null, null, new Currency(null, null), null)
    let getQuestFormObjective = document.querySelector("objectiveInput").value;
    let getQuestFormDate = document.querySelector("#objectiveTimeFrameInput").value;
    let getQuestCurrencyType = document.querySelector("#currencyTypeInput").value;
    let getQuestCurrencyAmount = document.querySelector("#currencyAmountInput").value;

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
    let objectiveContent = document.createElement("div");
    objectiveContent.classList.add("objectiveContent")

    let objectiveText = document.createElement("div");
    objectiveText.classList.add("objectiveText");
    let objectiveTimeFrame = document.createElement("div");
    objectiveTimeFrame.classList.add("objectiveTimeFrame");

    //  Check Box
    let completeCheckbox = document.createElement("input");
    completeCheckbox.setAttribute("type", "checkbox");

    objective.appendChild(completeCheckbox);
    objective.appendChild(objectiveContent);
    objectiveContent.appendChild(objectiveText)
    objectiveContent.appendChild(objectiveTimeFrame)
   

    //Reward Box Content
    let rewardBox = document.createElement("div");
    rewardBox.classList.add("rewardBox");

    // Reward Box Image
    let rewardBoxCurrencyTypeImage = document.createElement("img");         
    rewardBox.appendChild(rewardBoxCurrencyTypeImage)

    // Reward Box Currency Amount
    let rewardBoxCurrencyAmount = document.createElement("div");
    rewardBox.appendChild(rewardBoxCurrencyAmount);

    card.appendChild(objective);
    objective.appendChild(rewardBox);

    if (type == "quest") {
        card.classList.add("questCard")
        objective.classList.add("cardContent");
        completeCheckbox.classList.add("questCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");       
        rewardBoxCurrencyTypeImage.classList.add("questRewardImage");
        rewardBoxCurrencyAmount.classList.add("questRewardAmount");
    }

    if (type == "goal") {
        card.classList.add("goalCard")
        objective.classList.add("goalObjective");
        completeContainer.classList.add("goalCompleteContainer");
        completeLabel.textContent = "Mark Goal Complete";
        completeCheckbox.classList.add("goalCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");
        objectiveTime.classList.add("objectiveTimeFrame");       
        rewardBoxCurrencyTypeImage.classList.add("goalRewardImage");
        rewardBoxCurrencyAmount.classList.add("goalRewardAmount");
    }

    if (type == "emptyQuest") {

        card.classList.add("questCard");

        objective.removeChild(completeCheckbox);
        let sumbitNewQuestButton = document.createElement("button");
        sumbitNewQuestButton.innerText = "Submit";
        objective.insertBefore(sumbitNewQuestButton, objective.firstChild);
      
        let objectiveTextInput = document.createElement("input");
        objectiveTextInput.setAttribute("type", "text");
        objectiveTextInput.setAttribute("placeholder", "Define your quest here...");
        objectiveTextInput.setAttribute("maxlength", "70"); // Set character limit to 70
        objectiveTextInput.classList.add("input");
        objectiveTextInput.setAttribute("id", "objectiveInput"); 

        let objectiveTimeFrameInput = document.createElement("input");
        objectiveTimeFrameInput.setAttribute("type", "text");
        objectiveTimeFrameInput.setAttribute("placeholder", "Time to complete quest...");
        objectiveTimeFrameInput.setAttribute("maxlength", "70"); // Set character limit to 70
        objectiveTimeFrameInput.classList.add("input");
        objectiveTimeFrameInput.setAttribute("id", "objectiveTimeFrameInput"); 

        let rewardTypeInput = document.createElement("select")
        rewardTypeInput.setAttribute("name", "rewardTypeInput")
        rewardTypeInput.classList.add("inputRewardForm");
        rewardTypeInput.setAttribute("id", "currencyTypeInput")

        for (let i = 0; i < rewardUtilities.validCurrencies.length; i++) {
            console.log(rewardUtilities.validCurrencies[i])
            let option = document.createElement("option");
            option.setAttribute("value", rewardUtilities.validCurrencies[i]);
            option.textContent = `${rewardUtilities.validCurrencies[i]}`;
            rewardTypeInput.appendChild(option);
        }

        let rewardAmountInput = document.createElement("input")
        rewardAmountInput.classList.add("inputRewardForm");
        rewardAmountInput.setAttribute("type", "number")
        rewardAmountInput.setAttribute("name", "rewardAmountInput")
        rewardAmountInput.setAttribute("min", "0")
        rewardAmountInput.setAttribute("max", "1000")
        rewardAmountInput.setAttribute("placeholder", "0");
        rewardAmountInput.setAttribute("id", "currencyAmountInput")
        

        rewardAmountInput.addEventListener("input", function() {
            if (this.value > 1000) {
                alert("This value cannot exceed the maximum of: 1000")
              this.value = 1000;
            }
          });

        rewardBox.appendChild(rewardTypeInput);
        rewardBox.appendChild(rewardAmountInput);

        objectiveText.appendChild(objectiveTextInput);
        objectiveTimeFrame.appendChild(objectiveTimeFrameInput);

        objective.classList.add("cardContent");
        completeCheckbox.classList.add("questCompleteCheckbox");
        completeCheckbox.setAttribute("type", "checkbox");
    }

    if (type == null || type == undefined) {
        console.log("Invalid Type!");
        return;
    }
    
    return card;
}

export function displaycardContent (quest, cardElement, currencyContainer) {

        //Quest Objective Content
        let questObjective = cardElement.querySelector(".objectiveText");
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
        let dateToCompleteBox = cardElement.querySelector(".objectiveTimeFrame");
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
            displaycardContent(currentQuestList[i], card, currencyContainer);
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

