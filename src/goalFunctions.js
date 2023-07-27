import { Currency, Goal } from "./classes/classes";
import { rewardUtilities } from "./currencyFunctions";

export function renderGoalList (currentGoalList) {

    let goalContainer = document.querySelector(".goalParallax");

    for (let goal = 0; goal < currentGoalList.length; goal++) {
        goalContainer.appendChild(generateGoalCard(currentGoalList[goal]));
    }
}

export function createNewGoalObject () {


    if (validateGoalForm()) {
      return getNewGoalObject();
    }
    return null;
}


export function getFormValues() {
    let ids = [
      "goalTitleContainerInput",
      "goalRewardAssignmentAmount",
      "goalTimeAssignmentAmount",
      "goalQuestFrequencyInput",
      "questGoalObjective",
      "goalQuestTimeInput",
      "deadlineStart.formFieldInput",
      "deadlineEnd.formFieldInput",
    ];

    let formValues = {};

    for (let i = 0; i < ids.length; i++) {
      formValues[ids[i]] = document.querySelector("#" + ids[i]).value;
    }

    return formValues;
  }

  export function validateGoalForm() {
    let formValues = getFormValues();
    let isValid = true;

    for (let key in formValues) {
        let inputField = document.querySelector("#" + key);

        // Remove the 'invalid' class in case it was added before
        inputField.classList.remove('invalid');

        if (formValues[key] === null || formValues[key] === "") {
            console.log(`Input with id ${key} is empty or null`);
            // Add the 'invalid' class to the input field
            inputField.classList.add('invalid');
            isValid = false;
        }
    }

    return isValid;
}

export function getNewGoalObject() {
  let goalObject = new Goal(null, new Currency('GGTokens', null))
  let formValues = getFormValues();

  goalObject.objective = formValues["goalTitleContainerInput"];
  goalObject.reward.amount = formValues["goalRewardAssignmentAmount"];
  goalObject.quests = [];
  goalObject.completed = false;
  goalObject.totalTimeRequired = formValues["goalTimeAssignmentAmount"];
  goalObject.totalTimeSpent = 0;
  goalObject.timesPerWeekRequired = formValues["goalQuestFrequencyInput"];
  goalObject.timesPerWeekSpent = 0;
  goalObject.startDate = formValues["deadlineStart.formFieldInput"];
  goalObject.endDate = formValues["deadlineEnd.formFieldInput"];

  console.log(goalObject);
  return goalObject;
}

function generateGoalCard(goal) {

    // Create Entire Goal Card Element
    const goalCard = document.createElement('div');
    goalCard.classList.add('goalCard');
  
    // Separate Card into Two Halves
    const topHalfGoalCard = document.createElement('div');
    topHalfGoalCard.classList.add('topHalfGoalCard');
    goalCard.appendChild(topHalfGoalCard);
  
    const bottomHalfGoalCard = document.createElement('div');
    bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
    goalCard.appendChild(bottomHalfGoalCard);
  
    // Top Half Card Content

      // Goal Objective Content
      const goalObjectiveContainer = document.createElement('div');
      goalObjectiveContainer.classList.add('goalObjectiveContainer');
      topHalfGoalCard.appendChild(goalObjectiveContainer);

      const goalObjective = document.createElement('div');
      goalObjective.classList.add('goalObjectiveTitle');
      goalObjective.textContent = goal.objective;
      goalObjectiveContainer.appendChild(goalObjective);

      const goalTimeRequirement = document.createElement('div');
      goalTimeRequirement.classList.add('goalTimeRequirement');

      if (goal.timesPerWeekRequired == null) {
        goalTimeRequirement.textContent = `Completion Requirements: ${goal.totalTimeRequired} Hour(s) Total`;
      }

      if (goal.totalTimeRequired == null) {
        goalTimeRequirement.textContent = `Completion Requirements: Complete All Outstanding Quests`;
      }
      
      goalObjectiveContainer.appendChild(goalTimeRequirement);
  
      // Goal Reward Content
      const goalCompleteContainer = document.createElement('div');
      goalCompleteContainer.classList.add('goalCompleteContainer');
      topHalfGoalCard.appendChild(goalCompleteContainer);

      const goalCompleteRewardType = document.createElement("img");
      goalCompleteRewardType.setAttribute("src", rewardUtilities.getRewardImage(goal))
      goalCompleteRewardType.classList.add("goalRewardImage");
      goalCompleteContainer.appendChild(goalCompleteRewardType);

      const goalCompleteRewardAmount = document.createElement("div");
      goalCompleteRewardAmount.textContent = (`${goal.reward.amount} ${goal.reward.type}`)
      goalCompleteContainer.appendChild(goalCompleteRewardAmount);

    // Bottom Half Card Content
    const questListContainer = document.createElement('div');
    questListContainer.classList.add('questListContainer');
    bottomHalfGoalCard.appendChild(questListContainer);
  
    const questListParallax = document.createElement('div');
    questListParallax.classList.add('questListParallax');
    questListContainer.appendChild(questListParallax);
  
    const questList = document.createElement('ul');
    questList.classList.add('questList');
    for (let i = 0; i < goal.quests.length; i++) {
      const questItemContainer = document.createElement('div');
      questItemContainer.classList.add('questListItemContainer');
  
      const questItemContent = document.createElement('span');
      questItemContent.classList.add('questListItem');
      questItemContent.textContent = goal.quests[i].objective;
  
      const progressBarContainer = document.createElement('div');
      progressBarContainer.classList.add('progress-bar-container');
  
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
  
      progressBarContainer.appendChild(progressBar);
      questItemContainer.appendChild(questItemContent);
      questItemContainer.appendChild(progressBarContainer);
      questList.appendChild(questItemContainer);

      
      questItemContainer.addEventListener('click', function () {
          generateModal(goal.quests[i]);
      });
    }

    questListParallax.appendChild(questList);
  
    return goalCard;
  }

  function generateModal(goalQuest) {

    const goalQuestModal = document.createElement('div');
    goalQuestModal.classList.add('goalQuestModal');
  
    const modalContent = document.createElement('div');
    modalContent.classList.add('goalQuestModalContent');
  
    let goalQuestModalTitle = document.createElement("h2");
    goalQuestModalTitle.innerText = "Completion Requirement(s): "

    let name = document.createElement("p");
    name.innerText = goalQuest.objective;


    modalContent.appendChild(goalQuestModalTitle);
    modalContent.appendChild(name)
    goalQuestModal.appendChild(modalContent);
    document.body.appendChild(goalQuestModal);
  
    return goalQuestModal;
  }
      