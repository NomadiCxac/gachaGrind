export default function renderDefaultIndex(mainPage) {
    // Create the taskAndGoalButtonContainer div
    const taskAndGoalButtonContainer = document.createElement("div");
    taskAndGoalButtonContainer.classList.add("taskAndGoalButtonContainer");
  
    const addQuestButton = document.createElement("button");
    addQuestButton.classList.add("addQuestButton");
    addQuestButton.textContent = "Create Quest +";
  
    const addGoalButton = document.createElement("button");
    addGoalButton.classList.add("addGoalButton");
    addGoalButton.textContent = "Create Goal +";
  
    taskAndGoalButtonContainer.appendChild(addQuestButton); 
    taskAndGoalButtonContainer.appendChild(addGoalButton);
  
    // Create the gameContentHeader div
    const gameContentHeaderDiv = document.createElement("div");
    gameContentHeaderDiv.classList.add("gameContentHeader");
  
    const questHeaderDiv = document.createElement("div");
    questHeaderDiv.id = "questHeader";
    questHeaderDiv.textContent = "My Quests";
  
    const questTimeOptionsDiv = document.createElement("div");
    questTimeOptionsDiv.classList.add("questTimeOptions");
  
    const todayQuestsDiv = document.createElement("div");
    todayQuestsDiv.id = "todayQuests";
    todayQuestsDiv.textContent = "Today";
  
    const weeklyQuestsDiv = document.createElement("div");
    weeklyQuestsDiv.id = "weeklyQuests";
    weeklyQuestsDiv.textContent = "Weekly";
  
    questTimeOptionsDiv.appendChild(todayQuestsDiv);
    questTimeOptionsDiv.appendChild(weeklyQuestsDiv);
  
    questHeaderDiv.appendChild(questTimeOptionsDiv);
  
    const goalHeaderDiv = document.createElement("div");
    goalHeaderDiv.id = "goalHeader";
    goalHeaderDiv.textContent = "My Goals";
  
    const goalCompleteOptionsDiv = document.createElement("div");
    goalCompleteOptionsDiv.classList.add("goalCompleteOptions");
  
    const inProgressDiv = document.createElement("div");
    inProgressDiv.id = "inProgress";
    inProgressDiv.textContent = "In Progress";
  
    const completedDiv = document.createElement("div");
    completedDiv.id = "completed";
    completedDiv.textContent = "Completed";
  
    goalCompleteOptionsDiv.appendChild(inProgressDiv);
    goalCompleteOptionsDiv.appendChild(completedDiv);
  
    goalHeaderDiv.appendChild(goalCompleteOptionsDiv);
  
    gameContentHeaderDiv.appendChild(questHeaderDiv);
    gameContentHeaderDiv.appendChild(goalHeaderDiv);
  
    // Create the gameContent div
    const gameContentDiv = document.createElement("div");
    gameContentDiv.classList.add("gameContent");
  
    const questContainerDiv = document.createElement("div");
    questContainerDiv.classList.add("questContainer");
  
    const goalContainerDiv = document.createElement("div");
    goalContainerDiv.classList.add("goalContainer");

    const goalContainerParallax = document.createElement("div");
    goalContainerParallax.classList.add("goalParallax");
    goalContainerDiv.appendChild(goalContainerParallax);
  
    // Append the child divs to the gameContent div
    gameContentDiv.appendChild(questContainerDiv);
    gameContentDiv.appendChild(goalContainerDiv);
  
    // Replace the mainPage content with the gameContent div
    mainPage.innerHTML = "";
    mainPage.appendChild(taskAndGoalButtonContainer);
    mainPage.appendChild(gameContentHeaderDiv);
    mainPage.appendChild(gameContentDiv);
  }
  
  // Call the renderDefaultIndex function to render the default index HTML elements
//   const mainPageContainer = document.querySelector(".appContent");
//   renderDefaultIndex(mainPageContainer);