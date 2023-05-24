export default function createQuestCard (quest) {
    
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