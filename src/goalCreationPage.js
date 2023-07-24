import { currentQuestList } from "./data";
import initializeDefaultIndex from "./initializeIndexFunctions";
import { createEmptyCardTemplate } from "./questFunctions";

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
            let goalTitleContainer = document.createElement("div");
            goalTitleContainer.className = "goalTitleContainer";

            let goalTitleContainerInput = document.createElement("input");
            goalTitleContainerInput.setAttribute("type", "text");
            goalTitleContainerInput.setAttribute("placeholder", "Enter Your Goal Objective Here...");
            goalTitleContainerInput.setAttribute("maxlength", "100"); // Set character limit to 70
            goalTitleContainerInput.setAttribute("id", "goalTitleContainerInput");

            let goalTitleContainerExampleText = document.createElement("h6");
            goalTitleContainerExampleText.textContent = 'Enter the name of your goal in the "Untitled" field above. An example of a goal can be: "Become Fluent in Spanish" or "Get Six-Pack Abs"... ';
            goalTitleContainerExampleText.classList.add("goalCreationExampleText");

            // Append the input element to the goalTitleContainer
            goalTitleContainer.appendChild(goalTitleContainerInput);
            goalTitleContainer.appendChild(goalTitleContainerExampleText);

    
        // Create the second child div with class "rewardAssignmentContainer"
        let rewardAssignmentContainer = document.createElement("div");
        rewardAssignmentContainer.classList.add("rewardAssignmentContainer");

        let rewardAssignmentInputContainer = document.createElement("div");
        rewardAssignmentInputContainer.classList.add("rewardAssignmentInputContainer");

        let rewardAssignmentExampleTextContainer = document.createElement("div");
        rewardAssignmentExampleTextContainer.classList.add("rewardAssignmentExampleTextContainer");

        let rewardAssignmentTitle = document.createElement("h4");
        rewardAssignmentTitle.textContent = "Assign Rewards:"

        let rewardAssignmentAmount = document.createElement("input");
        rewardAssignmentAmount.classList.add("goalRewardAssignmentAmount")

        let rewardAssignmentContainerExampleText = document.createElement("h6");
        rewardAssignmentContainerExampleText.textContent = 'Assign rewards to your goal. The specified amount will be split among your outstanding quests.';
        rewardAssignmentContainerExampleText.classList.add("goalCreationExampleText")

        rewardAssignmentInputContainer.appendChild(rewardAssignmentTitle);
        rewardAssignmentInputContainer.appendChild(rewardAssignmentAmount);
        rewardAssignmentExampleTextContainer.appendChild(rewardAssignmentContainerExampleText);

        rewardAssignmentContainer.appendChild(rewardAssignmentInputContainer);
        rewardAssignmentContainer.appendChild(rewardAssignmentExampleTextContainer);

        // Create the third child div with class "timeAssignmentContainer"
        let timeAssignmentContainer = document.createElement("div");
        timeAssignmentContainer.classList.add("timeAssignmentContainer");
      
        let timeAssignmentInputContainer = document.createElement("div");
        timeAssignmentInputContainer.classList.add("timeAssignmentInputContainer");
      
        // Create the radio buttons for time options
        let hoursRadioLabel = document.createElement("label");
        hoursRadioLabel.classList.add("radioLabel");
      
        let hoursRadioInput = document.createElement("input");
        hoursRadioInput.setAttribute("type", "radio");
        hoursRadioInput.setAttribute("name", "timeAssignment");
        hoursRadioInput.setAttribute("value", "hours");
        hoursRadioInput.classList.add("timeAssignmentRadioButton");
        hoursRadioLabel.appendChild(hoursRadioInput);
        hoursRadioLabel.appendChild(document.createTextNode("Hours"));
      
        let naRadioLabel = document.createElement("label");
        naRadioLabel.classList.add("radioLabel");
      
        let naRadioInput = document.createElement("input");
        naRadioInput.setAttribute("type", "radio");
        naRadioInput.setAttribute("name", "timeAssignment");
        naRadioInput.setAttribute("value", "na");
        naRadioInput.classList.add("timeAssignmentRadioButton");
        naRadioLabel.appendChild(naRadioInput);
        naRadioLabel.appendChild(document.createTextNode("N/A"));
      
        // Create the input element for time
        let timeAssignmentAmount = document.createElement("input");
        timeAssignmentAmount.classList.add("goalTimeAssignmentAmount");
        timeAssignmentAmount.setAttribute("type", "number");
        timeAssignmentAmount.setAttribute("min", "0");
      
        let timeAssignmentExampleTextContainer = document.createElement("div");
        timeAssignmentExampleTextContainer.classList.add("timeAssignmentExampleTextContainer");
      
        let timeAssignmentTitle = document.createElement("h4");
        timeAssignmentTitle.textContent = "Assign Time:";
      
        let timeAssignmentContainerExampleText = document.createElement("h6");
        timeAssignmentContainerExampleText.textContent = "Assign time to your goal. The specified time will be split among your outstanding quests.";
        timeAssignmentContainerExampleText.classList.add("goalCreationExampleText");
        timeAssignmentContainerExampleText.id = "timeAssignmentExampleText";
      
        timeAssignmentInputContainer.appendChild(timeAssignmentTitle);
        timeAssignmentInputContainer.appendChild(timeAssignmentAmount);
        timeAssignmentInputContainer.appendChild(hoursRadioLabel);
        timeAssignmentInputContainer.appendChild(naRadioLabel);
        timeAssignmentExampleTextContainer.appendChild(timeAssignmentContainerExampleText);
      
        timeAssignmentContainer.appendChild(timeAssignmentInputContainer);
        timeAssignmentContainer.appendChild(timeAssignmentExampleTextContainer)
      
        goalCreationContainer.appendChild(goalTitleContainer);
        goalCreationContainer.appendChild(rewardAssignmentContainer);
        goalCreationContainer.appendChild(timeAssignmentContainer);
      
        hoursRadioInput.addEventListener("change", handleRadioChange);
        naRadioInput.addEventListener("change", handleRadioChange);

        timeAssignmentAmount.addEventListener("input", function () {
            const enteredValue = timeAssignmentAmount.value;
            const parsedValue = parseInt(enteredValue);
          
            if (parsedValue <= 0 || isNaN(parsedValue)) {
              timeAssignmentAmount.setCustomValidity("Please enter a positive whole number greater than 0.");
            } else {
              timeAssignmentAmount.setCustomValidity("");
            }
        });

        // Function to handle radio button changes
        function handleRadioChange(event) {
            const timeAssignmentAmount = document.querySelector(".goalTimeAssignmentAmount");
            const timeAssignmentExampleText = document.querySelector("#timeAssignmentExampleText");
          
            if (event.target.value === "na") {
              // If N/A is selected, disable the input field and show the N/A message
              timeAssignmentAmount.disabled = true;
              timeAssignmentExampleText.textContent =
                "Selecting 'N/A' for time assignment will require your goal to be completed based solely on the completion of quests. No time entry is required.";
            } else if (event.target.value === "hours") {
              // If Hours is selected, enable the input field and show the Hours message
              timeAssignmentAmount.disabled = false;
              timeAssignmentExampleText.textContent =
                "Selecting 'Hours' for time assignment will require your goal to be completed based on overall time completion. Time will be allotted to all outstanding quests available to the goal.";
            }
          }

        
        let linkExistingQuestContainer = document.createElement("div");
        linkExistingQuestContainer.classList.add("linkExistingQuestContainer");
        
        let linkExistingQuestTitle = document.createElement("h4");
        let linkExistingQuestInputContainer = document.createElement("div");
        let linkExistingQuestInput = document.createElement("select");
        
        let linkExistingQuestExampleText = document.createElement("h6");
        linkExistingQuestExampleText.textContent = 'If you have already created a quest that you would like to link to this goal, please select from your list of outstanding unfinished quests.';
        linkExistingQuestExampleText.classList.add("goalCreationExampleText")

       // Add the placeholder option as the first option in the dropdown
        let placeholderOption = document.createElement("option");
        placeholderOption.value = ""; // Set the value to an empty string or any appropriate default value
        placeholderOption.textContent = "Select an Existing Quest to Link";
        placeholderOption.disabled = true;
        placeholderOption.selected = true;
        linkExistingQuestInput.appendChild(placeholderOption);

        // Add event listener to handle focus event
        linkExistingQuestInput.addEventListener("focus", function() {
            // Check if the placeholder option is selected (value is an empty string)
            if (linkExistingQuestInput.value === "") {
            // Remove the placeholder option from the dropdown
            linkExistingQuestInput.removeChild(linkExistingQuestInput.options[0]);
            }
        });
  
        // Add event listener to handle blur event (when the dropdown loses focus)
        linkExistingQuestInput.addEventListener("blur", function() {
            // Check if no option is selected (value is an empty string)
            if (linkExistingQuestInput.value === "") {
            // Re-add the placeholder option to the dropdown
      const placeholderOption = document.createElement("option");
      placeholderOption.value = "";
      placeholderOption.textContent = "Select an Existing Quest to Link:";
      placeholderOption.disabled = true;
      placeholderOption.selected = true;
      linkExistingQuestInput.insertBefore(placeholderOption, linkExistingQuestInput.firstChild);
    }
  });

        for (let i = 0; i < currentQuestList.length; i++) {
            let quest = currentQuestList[i];
            let option = document.createElement("option");
            option.value = quest.id;
            option.textContent = quest.objective;
            linkExistingQuestInput.appendChild(option);
        }

        // // Add event listener to the dropdown to handle change event
        // linkExistingQuestInput.addEventListener("change", function() {
        //     // Check if the placeholder option is selected (value is empty string)
        //     if (linkExistingQuestInput.value === "") {
        //     // Remove the placeholder option from the dropdown
        //     linkExistingQuestInput.removeChild(placeholderOption);
        //     }
        // });
        
        // Add classes to the elements corresponding to their variable names
        linkExistingQuestTitle.classList.add("linkExistingQuestTitle");
        linkExistingQuestInputContainer.classList.add("linkExistingQuestInputContainer");
        linkExistingQuestInput.classList.add("linkExistingQuestInput");
        
        // Add content or styles to the elements as needed
        linkExistingQuestTitle.textContent = "Link Existing Quest:";
        
        // Append the elements to the linkExistingQuestContainer
        linkExistingQuestContainer.appendChild(linkExistingQuestTitle);
        linkExistingQuestContainer.appendChild(linkExistingQuestInputContainer);
        linkExistingQuestContainer.appendChild(linkExistingQuestExampleText);
        linkExistingQuestInputContainer.appendChild(linkExistingQuestInput)

    
        // Create the fourth child div with class "addQuestContainer"
        let addQuestContainer = document.createElement("div");
        let addQuestContainerTitle = document.createElement("h4");
        let addQuestContainerInputField = document.createElement("div");
        addQuestContainerInputField.classList.add("addQuestContainerInputField");

        addQuestContainerTitle.textContent = "Add Quest(s) to Your Goal:"
        
        addQuestContainer.className = "addQuestContainer";
        addQuestContainer.appendChild(addQuestContainerTitle);
        addQuestContainer.appendChild(addQuestContainerInputField);

        let defineQuest = document.createElement("div");
        defineQuest.classList.add("questParallax")
        defineQuest.appendChild(createQuestForm());

        // let questPreview = document.createElement("div");
        // questPreview.classList.add("goalQuestPreviewContainer")

        addQuestContainerInputField.appendChild(defineQuest);
        // addQuestContainerInputField.appendChild(questPreview);

    // Append the child divs to the second parent div
    goalCreationContainer.appendChild(goalTitleContainer);
    goalCreationContainer.appendChild(rewardAssignmentContainer);
    goalCreationContainer.appendChild(timeAssignmentContainer);
    // goalCreationContainer.appendChild(linkExistingQuestContainer);
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

    
}


function createQuestForm() {
    const questForm = document.createElement("form");
    questForm.classList.add("questForm");
  
    // Quest Name
    let questNameContainer = createFormField(
      "text",
      "questGoalObjective",
      "Enter Your Quest Objective Here...",
      'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"'
    );
  
    // Goal Time Allotment
    let goalTimeContainer = createFormField(
        "number",
        "questGoalObjective",
        "Enter Value Here - How Much Time Does This Quest Take?",
        'Examples of time taken are: "2 hours / Day" or "30 mins / Day"'
    );
  
    // Frequency of Quest
    let frequencyContainer = createFormField(
        "number",
        "questGoalObjective",
        "Enter Value Here - How Often Do You Want to Undertake This Quest (Per Week)?",
        'Enter the frequency (per week) at which you will complete this quest. Example: "4 times / Week" or "Every Monday, Tuesday, Thursday and Sunday of each Week"'
    );
  
    // Goal Deadline
    let deadlineContainer = createFormField(
      "date",
      "deadline",
      "Enter the deadline for your quest.",
      "Enter the deadline for your quest."
    );
  
    questForm.appendChild(questNameContainer);
    questForm.appendChild(goalTimeContainer);
    questForm.appendChild(frequencyContainer);
    questForm.appendChild(deadlineContainer);
  
    return questForm;
  }
  
  function createFormField(type, name, placeholder, exampleText) {
    let formFieldContainer = document.createElement("div");
    formFieldContainer.classList.add("formFieldContainer");
  
    let formFieldInput = document.createElement("input");
    formFieldInput.setAttribute("type", type);
    formFieldInput.setAttribute("name", name);
    formFieldInput.setAttribute("placeholder", placeholder);
    formFieldInput.setAttribute("id", name);
    formFieldInput.setAttribute("maxlength", "100"); // Set character limit to 100
    formFieldInput.classList.add("formFieldInput");
  
    formFieldContainer.appendChild(formFieldInput);
  
    let formFieldExampleText = document.createElement("h6");
    formFieldExampleText.textContent = exampleText;
    formFieldExampleText.classList.add("goalCreationExampleText");
  
    let exampleTextContainer = document.createElement("div");
    exampleTextContainer.classList.add("exampleTextContainer");
    exampleTextContainer.appendChild(formFieldExampleText);
    formFieldContainer.appendChild(exampleTextContainer);
  
    return formFieldContainer;
  }