export default function renderGoalList (currentGoalList) {

    let goalContainer = document.querySelector(".goalContainer");

    for (let goal = 0; goal < currentGoalList.length; goal++) {
        goalContainer.appendChild(generateGoalCard(currentGoalList[goal]));
    }
}


function generateGoalCard(goal) {

    const goalCard = document.createElement('div');
    goalCard.classList.add('goalCard');
  
    const topHalfGoalCard = document.createElement('div');
    topHalfGoalCard.classList.add('topHalfGoalCard');
    goalCard.appendChild(topHalfGoalCard);
  
    const bottomHalfGoalCard = document.createElement('div');
    bottomHalfGoalCard.classList.add('bottomHalfGoalCard');
    goalCard.appendChild(bottomHalfGoalCard);
  
    const goalObjectiveContainer = document.createElement('div');
    goalObjectiveContainer.classList.add('goalObjectiveContainer');
    topHalfGoalCard.appendChild(goalObjectiveContainer);
  
    const goalCompleteContainer = document.createElement('div');
    goalCompleteContainer.classList.add('goalCompleteContainer');
    topHalfGoalCard.appendChild(goalCompleteContainer);
  
    const goalObjective = document.createElement('h3');
    goalObjective.classList.add('goal-objective');
    goalObjective.textContent = goal.objective;
    goalObjectiveContainer.appendChild(goalObjective);
  
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
      