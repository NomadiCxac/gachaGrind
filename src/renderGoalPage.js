import { currentGoalList, currentQuestList } from "./data";
import initializeDefaultIndex from "./initializeIndexFunctions";
import { createEmptyCardTemplate } from "./questFunctions";
import { createObjectiveInputElement, createInputValueElement, addRadioButtonsToElement, listContainer, createQuestForm } from "./goalCreationPageHTML";
import { createNewGoalObject } from "./goalFunctions";
import { saveDataToLocalStorage } from "./localStorageFunctions";

export default function renderGoalCreationPage () {

    let mainPage = document.querySelector(".appContent");

    // Create the header div
    let header = document.createElement("div");
    header.classList.add("goalCreationPage");
    header.id = "headerGoalCreationPage";

        // Create header elements
        let headerTitleContainer = document.createElement("div");
            let backPageButton = document.createElement("button");
            let headerTitle = document.createElement("div");
            headerTitleContainer.appendChild(backPageButton);
            headerTitleContainer.appendChild(headerTitle);

        let deleteGoal = document.createElement("button");

        // Add classes and ID to the elements
        headerTitleContainer.classList.add("headerTitleContainer")
        backPageButton.id = "backPageButtonGoalCreationPage";
        headerTitle.id = "headerTitleGoalCreationPage";
        deleteGoal.id = "deleteGoalCreationPage";

        // Text Content
        backPageButton.textContent = "<";
        headerTitle.textContent = "Goals";
        deleteGoal.textContent = "Delete";

        backPageButton.addEventListener("click", function() {
        
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }

            initializeDefaultIndex()
        })

        deleteGoal.addEventListener("click", function() {
  
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }

            initializeDefaultIndex()
        })

    // Append the elements to the header
    header.appendChild(headerTitleContainer)
    header.appendChild(deleteGoal);


    // Create the content div
    let goalCreationContainer = document.createElement("div");
    goalCreationContainer.classList.add("goalCreationPage");
    goalCreationContainer.id = "goalCreationContentContainer";

         // Create the first child div with class "goalTitleContainer"

        let goalTitleContainer = createObjectiveInputElement (
            "goalTitleContainer", 
            "text",
            "goalTitleContainerInput",
            "Enter Your Goal Objective Here...",
            'Enter the name of your goal in the "Untitled" field above. An example of a goal can be: "Become Fluent in Spanish" or "Get Six-Pack Abs"... ',
            "goalCreationExampleText"
            ) 

        // Create the second child div with class "rewardAssignmentContainer"

        let rewardAssignmentContainer = createInputValueElement (
            "rewardAssignmentContainer", 
            "rewardAssignmentInputContainer", 
            "rewardAssignmentExampleTextContainer", 
            "Assign Rewards:", 
            "goalRewardAssignmentAmount", 
            "goalRewardAssignmentAmount", 
            'Assign rewards to your goal. The specified amount will be split among your outstanding quests.', 
            "goalCreationExampleText",
            "rewardAssignmentExampleText"
            )

        // Create the third child div with class "timeAssignmentContainer"
  
        let timeAssignmentContainer = createInputValueElement (
            "timeAssignmentContainer", 
            "timeAssignmentInputContainer", 
            "rewardAssignmentExampleTextContainer", 
            "Assign Time:", 
            "goalTimeAssignmentAmount", 
            "goalTimeAssignmentAmount", 
            "Assign time to your goal. The specified time will be split among your outstanding quests.", 
            "goalCreationExampleText",
            "timeAssignmentExampleText"
            )
        
        // Add Radio Buttons to the third child div
        addRadioButtonsToElement(timeAssignmentContainer, "timeAssignmentInputContainer");


        // Create the fourth child div with class "addQuestContainer"
        let addQuestContainer = listContainer (
            "addQuestContainer",
            "Add Quest(s) to Your Goal:",
            "addQuestContainerInputField",
            "goalQuestList"
        )

    // Append the child divs to the second parent div
    goalCreationContainer.appendChild(goalTitleContainer);
    goalCreationContainer.appendChild(rewardAssignmentContainer);
    goalCreationContainer.appendChild(timeAssignmentContainer);
    goalCreationContainer.appendChild(addQuestContainer);
 
    // Create the footer div
    let footer = document.createElement("div");
    footer.classList.add("goalCreationPage");
    footer.id = "footerGoalCreationPage"

    let goalConfirmCreateButton = document.createElement("button");
    goalConfirmCreateButton.classList.add("goalConfirmCreateButton");
    goalConfirmCreateButton.textContent = "Confirm"
    goalConfirmCreateButton.addEventListener('click', function() {
        let newGoal = createNewGoalObject();

        // Only add the goal, save it, and re-initialize the page if newGoal is not null
        if(newGoal !== null) {
            currentGoalList.push(newGoal);
            saveDataToLocalStorage("currentGoalList", currentGoalList);
            console.log(currentGoalList);
    
            while (mainPage.firstChild) {
                mainPage.removeChild(mainPage.firstChild);
            }
    
            initializeDefaultIndex();
        }
    })
    footer.appendChild(goalConfirmCreateButton);

    // Append the parent divs to the document body or any other container
    mainPage.appendChild(header);
    mainPage.appendChild(goalCreationContainer);
    mainPage.appendChild(footer);

    console.log(currentGoalList);
  
}



