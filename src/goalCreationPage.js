import { currentQuestList } from "./data";
import initializeDefaultIndex from "./initializeIndexFunctions";
import { createEmptyCardTemplate } from "./questFunctions";
import { createObjectiveInputElement, createInputValueElement, addRadioButtonsToElement, listContainer, createQuestForm } from "./goalCreationPageHTML";

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
            "questParallax"
        )
        // )document.createElement("div");
        // addQuestContainer.className = "addQuestContainer";

        // let addQuestContainerTitle = document.createElement("h4");
        // let addQuestContainerInputField = document.createElement("div");
        // addQuestContainerInputField.classList.add("addQuestContainerInputField");

        // addQuestContainerTitle.textContent = "Add Quest(s) to Your Goal:"
        
      
        // addQuestContainer.appendChild(addQuestContainerTitle);
        // addQuestContainer.appendChild(addQuestContainerInputField);

        // let defineQuest = document.createElement("div");
        // defineQuest.classList.add("questParallax")
        // defineQuest.appendChild(createQuestForm());

        // addQuestContainerInputField.appendChild(defineQuest);

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
    footer.appendChild(goalConfirmCreateButton);

    // Append the parent divs to the document body or any other container
    mainPage.appendChild(header);
    mainPage.appendChild(goalCreationContainer);
    mainPage.appendChild(footer);


createQuestForm();


//     let goalTimeContainer = createInputValueElement (
//         "formFieldContainer", 
//         "rewardAssignmentInputContainer", 
//         "rewardAssignmentExampleTextContainer", 
//         "Assign Rewards:", 
//         "goalRewardAssignmentAmount", 
//         "goalRewardAssignmentAmount", 
//         "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
//         "goalCreationExampleText",
//         "rewardAssignmentExampleText",
//     );

//     // questForm.appendChild(goalTimeContainer);
  
//     // Frequency of Quest
//     let frequencyContainer = createInputValueElement (
//         "formFieldContainer", 
//         "timeAssignmentInputContainer", 
//         "rewardAssignmentExampleTextContainer", 
//         "Assign Time:", 
//         "goalTimeAssignmentAmount", 
//         "goalTimeAssignmentAmount", 
//         "Assign time to your goal. The specified time will be split among your outstanding quests.", 
//         "goalCreationExampleText",
//         "timeAssignmentExampleText",
//     );

//     let deadlineContainer = createFormField(
//         "date",
//         "deadline",
//         "Enter the deadline for your quest.",
//         "Enter the start date and end date for your Goal."
//       );

// x.appendChild(questNameContainer);
// x.appendChild(goalTimeContainer);
// x.appendChild(frequencyContainer);
// x.appendChild(deadlineContainer);

}





// let questNameContainer = createObjectiveInputElement(
//     "formInputContainer", 
//     "text", 
//     "questGoalObjective",
//     "Enter Your Quest Objective Here...",
//     'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
// );


// function createQuestForm() {
//     const questForm = document.createElement("form");
//     questForm.classList.add("questForm");

//     let defaultClass = "formInputContainer";
  
//     // Quest Name
//     let questNameContainer = createObjectiveInputElement(
//         defaultClass, 
//         "text", 
//         "questGoalObjective",
//         "Enter Your Quest Objective Here...",
//         'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
//     );
//     questForm.appendChild(questNameContainer);

//     // Goal Time Allotment
//     let goalTimeContainer = createValueAssignmentContainer(
//         "Allocate Quest Time:",
//         "Assign time to your goal. The specified time will be split among your outstanding quests.",
//         "questGoalTimeSpent"
//     );
//     questForm.appendChild(goalTimeContainer);
  
//     // Frequency of Quest
//     let frequencyContainer = createValueAssignmentContainer(
//         "Quest Frequency:",
//         'Enter the frequency (per week) at which you will complete this quest. Example: "4 times / Week" or "Every Monday, Tuesday, Thursday and Sunday of each Week"',
//         "questGoalFrequency"
//     );
//     questForm.appendChild(frequencyContainer);
  
//     // Goal Deadline
//     let deadlineContainer = createFormField(
//       "date",
//       "deadline",
//       "Enter the deadline for your quest.",
//       "Enter the start date and end date for your Goal."
//     );
//     questForm.appendChild(deadlineContainer);
 
  
//     return questForm;
// }

// function createValueAssignmentContainer(titleText, exampleText, id) {
//     let valueAssignmentContainer = document.createElement("div");
//     valueAssignmentContainer.classList.add("formFieldContainer");
//     valueAssignmentContainer.setAttribute("id", id);
  
//     let valueAssignmentInputContainer = document.createElement("div");
//     valueAssignmentInputContainer.classList.add("valueAssignmentInputContainer");
  
//     // Create the radio buttons for time options
//     let hoursRadioLabel = document.createElement("label");
//     hoursRadioLabel.classList.add("radioLabel");
  
//     let hoursRadioInput = document.createElement("input");
//     hoursRadioInput.setAttribute("type", "radio");
//     hoursRadioInput.setAttribute("name", "valueAssignment");
//     hoursRadioInput.setAttribute("value", "hours");
//     hoursRadioInput.classList.add("valueAssignmentRadioButton");
//     hoursRadioLabel.appendChild(hoursRadioInput);
//     hoursRadioLabel.appendChild(document.createTextNode("Hours"));
  
//     let naRadioLabel = document.createElement("label");
//     naRadioLabel.classList.add("radioLabel");
  
//     let naRadioInput = document.createElement("input");
//     naRadioInput.setAttribute("type", "radio");
//     naRadioInput.setAttribute("name", "valueAssignment");
//     naRadioInput.setAttribute("value", "na");
//     naRadioInput.classList.add("valueAssignmentRadioButton");
//     naRadioLabel.appendChild(naRadioInput);
//     naRadioLabel.appendChild(document.createTextNode("N/A"));
  
//     // Create the input element for time
//     let valueAssignmentAmount = document.createElement("input");
//     valueAssignmentAmount.classList.add("goalValueAssignmentAmount");
//     valueAssignmentAmount.setAttribute("type", "number");
//     valueAssignmentAmount.setAttribute("min", "0");
  
//     let valueAssignmentExampleTextContainer = document.createElement("div");
//     valueAssignmentExampleTextContainer.classList.add("valueAssignmentExampleTextContainer");
  
//     let valueAssignmentTitle = document.createElement("h4");
//     valueAssignmentTitle.textContent = titleText;
  
//     let valueAssignmentContainerExampleText = document.createElement("h6");
//     valueAssignmentContainerExampleText.textContent = exampleText;
//     valueAssignmentContainerExampleText.classList.add("goalCreationExampleText");
//     valueAssignmentContainerExampleText.id = "valueAssignmentExampleText";
  
//     valueAssignmentInputContainer.appendChild(valueAssignmentTitle);
//     valueAssignmentInputContainer.appendChild(valueAssignmentAmount);
//     valueAssignmentInputContainer.appendChild(hoursRadioLabel);
//     valueAssignmentInputContainer.appendChild(naRadioLabel);
//     valueAssignmentExampleTextContainer.appendChild(valueAssignmentContainerExampleText);
  
//     valueAssignmentContainer.appendChild(valueAssignmentInputContainer);
//     valueAssignmentContainer.appendChild(valueAssignmentExampleTextContainer);

//     return valueAssignmentContainer;
// }
