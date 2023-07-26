
export function createObjectiveInputElement (
    containerClassName, 
    inputType, 
    inputID, 
    inputPlaceHolderText,
    exampleTextContent, 
    exampleClassName
    ) {

    let elementContainer = document.createElement("div");
    elementContainer.className = containerClassName;

    let elementInput = document.createElement("input");
    elementInput.setAttribute("type", inputType);
    elementInput.setAttribute("placeholder", inputPlaceHolderText);
    elementInput.setAttribute("maxlength", "100"); // Set character limit to 70
    elementInput.setAttribute("id", inputID);

    let elementExampleText = document.createElement("h6");
    elementExampleText.textContent = exampleTextContent;
    elementExampleText.classList.add(exampleClassName);

    // Append the input element to the element
    elementContainer.appendChild(elementInput);
    elementContainer.appendChild(elementExampleText);

    return elementContainer;

}

export function createInputValueElement (
    containerClassName, 
    inputContainerClassName, 
    exampleTextContainerClassName, 
    promptTitle, 
    inputValueClass,
    inputValueID, 
    exampleTextContent, 
    exampleTextClassName,
    exampleTextID
    ) {

    let elementContainer = document.createElement("div");
    elementContainer.classList.add(containerClassName);

    let elementInputContainer = document.createElement("div");
    elementInputContainer.classList.add(inputContainerClassName);

    let elementExampleTextContainer = document.createElement("div");
    elementExampleTextContainer.classList.add(exampleTextContainerClassName);

    let elementTitle = document.createElement("h4");
    elementTitle.textContent = promptTitle;

    let elementInputValue = document.createElement("input");
    elementInputValue.classList.add(inputValueClass);
    elementInputValue.id = inputValueID;

    let elementContainerExampleText = document.createElement("h6");
    elementContainerExampleText.textContent = exampleTextContent;
    elementContainerExampleText.classList.add(exampleTextClassName);
    elementContainerExampleText.id = exampleTextID;

    elementInputContainer.appendChild(elementTitle);
    elementInputContainer.appendChild(elementInputValue);
    elementExampleTextContainer.appendChild(elementContainerExampleText);

    elementContainer.appendChild(elementInputContainer);
    elementContainer.appendChild(elementExampleTextContainer);

    elementInputValue.addEventListener("input", function () {
        const enteredValue = elementInputValue.value;
        const parsedValue = parseInt(enteredValue);
      
        if (parsedValue <= 0 || isNaN(parsedValue)) {
            elementInputValueAmount.setCustomValidity("Please enter a positive whole number greater than 0.");
        } else {
            elementInputValueAmount.setCustomValidity("");
        }
    });

    return elementContainer;
}


export function addRadioButtonsToElement (elementContainer, inputContainerClassName) {

        let inputContainer = elementContainer.querySelector(`.${inputContainerClassName}`)
        console.log(inputContainer)
    // Create the radio buttons for time options

        // Hours Radio Label
        let hoursRadioLabel = document.createElement("label");
        hoursRadioLabel.classList.add("radioLabel");
    
        let hoursRadioInput = document.createElement("input");
        hoursRadioInput.setAttribute("type", "radio");
        hoursRadioInput.setAttribute("name", "element");
        hoursRadioInput.setAttribute("value", "hours");
        hoursRadioInput.classList.add("radioButton");
        hoursRadioLabel.appendChild(hoursRadioInput);
        hoursRadioLabel.appendChild(document.createTextNode("Hours"));
    
        // N/A Radio Lavel
        let naRadioLabel = document.createElement("label");
        naRadioLabel.classList.add("radioLabel");
    
        let naRadioInput = document.createElement("input");
        naRadioInput.setAttribute("type", "radio");
        naRadioInput.setAttribute("name", "element");
        naRadioInput.setAttribute("value", "na");
        naRadioInput.classList.add("radioButton");
        naRadioLabel.appendChild(naRadioInput);
        naRadioLabel.appendChild(document.createTextNode("N/A"));
          
        hoursRadioInput.addEventListener("change", handleRadioChange);
        naRadioInput.addEventListener("change", handleRadioChange);



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

          inputContainer.appendChild(hoursRadioLabel);
          inputContainer.appendChild(naRadioLabel);
  
}


export function createQuestForm () {
    const questForm = document.createElement("form");
    questForm.classList.add("questForm");

    let x = document.querySelector(".questParallax");
    console.log(x);
    // Quest Name
    let questNameContainer = createObjectiveInputElement (
        "formFieldContainer", 
        "text", 
        "questGoalObjective",
        "Enter Your Quest Objective Here...",
        'Enter the "objective" OR "name" of your quest (action) field above. Examples of quests are: "Study Spanish" or "Do Ab-Crunches"',
        "goalCreationExampleText"
        );
  
    questForm.appendChild(questNameContainer);

    // Goal Time Allotment
    let goalTimeContainer = createInputValueElement (
        "formFieldContainer", 
        "rewardAssignmentInputContainer", 
        "rewardAssignmentExampleTextContainer", 
        "Assign Rewards:", 
        "goalRewardAssignmentAmount", 
        "goalRewardAssignmentAmount", 
        "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "rewardAssignmentExampleText",
    );

    questForm.appendChild(goalTimeContainer);
  
    // Frequency of Quest
    let frequencyContainer = createInputValueElement (
        "formFieldContainer", 
        "timeAssignmentInputContainer", 
        "rewardAssignmentExampleTextContainer", 
        "Assign Time:", 
        "goalTimeAssignmentAmount", 
        "goalTimeAssignmentAmount", 
        "Assign time to your goal. The specified time will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "timeAssignmentExampleText",
    );

    addRadioButtonsToElement(frequencyContainer, "timeAssignmentInputContainer");
    questForm.appendChild(frequencyContainer);
  
    // Goal Deadline
    let deadlineContainer = createFormField(
      "date",
      "deadline",
      "Enter the deadline for your quest.",
      "Enter the start date and end date for your Goal."
    );
    questForm.appendChild(deadlineContainer);
 
  
    x.appendChild(questForm);
}


export function listContainer (
    containerClassName,
    promptTitle,
    containerInputFieldClassName,
    listItemsContainerClass
) {
        
    let element = document.createElement("div");
    element.className = containerClassName;

    let elementTitle = document.createElement("h4");
    elementTitle.textContent = promptTitle;
    element.appendChild(elementTitle);

    let elementInputField = document.createElement("div");
    elementInputField.classList.add(containerInputFieldClassName);
    element.appendChild(elementInputField);

    let listItemsContainer = document.createElement("div");
    listItemsContainer.classList.add(listItemsContainerClass);
    // listItemsContainer.appendChild(createQuestForm());
    elementInputField.appendChild(listItemsContainer);
    
    return element
}




function createFormField(type, name, placeholder, exampleText) {
    let formFieldContainer = document.createElement("div");
    formFieldContainer.classList.add("formFieldContainer");
  
    if (type === "date") {
      // Create a div to house the date inputs
      let dateContainer = document.createElement("div");
      dateContainer.classList.add("dateContainer");

      let startDateInput = createInput(type, name + "Start", "Start " + placeholder);
      let endDateInput = createInput(type, name + "End", "End " + placeholder);
      
      // Initialize the start date's min value to today
      startDateInput.min = new Date().toISOString().split("T")[0];
      
      // Update the end date's min value whenever the start date changes
      startDateInput.addEventListener("change", () => {
        let startDate = new Date(startDateInput.value);
        let endDate = new Date();
        endDate.setDate(startDate.getDate() + 7);
        endDateInput.value = endDate.toISOString().split("T")[0];
      });
      
      // Update the start date's max value whenever the end date changes
      endDateInput.addEventListener("change", () => {
        startDateInput.max = endDateInput.value;
      });
      
      // Add labels for start date and end date inputs
      let startDateLabel = createLabel(name + "Start", "Goal Start Date");
      let endDateLabel = createLabel(name + "End", "Goal End Date");
      
      dateContainer.appendChild(startDateLabel);
      dateContainer.appendChild(startDateInput);
      dateContainer.appendChild(endDateLabel);
      dateContainer.appendChild(endDateInput);
      
      formFieldContainer.appendChild(dateContainer);
    } else {
      let formFieldInput = createInput(type, name, placeholder);
      formFieldContainer.appendChild(formFieldInput);
    }
  
    let formFieldExampleText = document.createElement("h6");
    formFieldExampleText.textContent = exampleText;
    formFieldExampleText.classList.add("goalCreationExampleText");
  
    let exampleTextContainer = document.createElement("div");
    exampleTextContainer.classList.add("exampleTextContainer");
    exampleTextContainer.appendChild(formFieldExampleText);
    formFieldContainer.appendChild(exampleTextContainer);
  
    return formFieldContainer;
}

function createInput(type, name, placeholder) {
    let input = document.createElement("input");
    input.setAttribute("type", type);
    input.setAttribute("name", name);
    input.setAttribute("placeholder", placeholder);
    input.setAttribute("id", name);
    input.setAttribute("maxlength", "100"); // Set character limit to 100
    input.classList.add("formFieldInput");
    return input;
}

function createLabel(forInput, labelText) {
    let label = document.createElement("label");
    label.setAttribute("for", forInput);
    label.textContent = labelText;
    return label;
}

// The code below is if I want to include the ability to link and existing quest.

//         let linkExistingQuestContainer = document.createElement("div");
//         linkExistingQuestContainer.classList.add("linkExistingQuestContainer");
        
//         let linkExistingQuestTitle = document.createElement("h4");
//         let linkExistingQuestInputContainer = document.createElement("div");
//         let linkExistingQuestInput = document.createElement("select");
        
//         let linkExistingQuestExampleText = document.createElement("h6");
//         linkExistingQuestExampleText.textContent = 'If you have already created a quest that you would like to link to this goal, please select from your list of outstanding unfinished quests.';
//         linkExistingQuestExampleText.classList.add("goalCreationExampleText")

//        // Add the placeholder option as the first option in the dropdown
//         let placeholderOption = document.createElement("option");
//         placeholderOption.value = ""; // Set the value to an empty string or any appropriate default value
//         placeholderOption.textContent = "Select an Existing Quest to Link";
//         placeholderOption.disabled = true;
//         placeholderOption.selected = true;
//         linkExistingQuestInput.appendChild(placeholderOption);

//         // Add event listener to handle focus event
//         linkExistingQuestInput.addEventListener("focus", function() {
//             // Check if the placeholder option is selected (value is an empty string)
//             if (linkExistingQuestInput.value === "") {
//             // Remove the placeholder option from the dropdown
//             linkExistingQuestInput.removeChild(linkExistingQuestInput.options[0]);
//             }
//         });
  
//         // Add event listener to handle blur event (when the dropdown loses focus)
//         linkExistingQuestInput.addEventListener("blur", function() {
//             // Check if no option is selected (value is an empty string)
//             if (linkExistingQuestInput.value === "") {
//             // Re-add the placeholder option to the dropdown
//       const placeholderOption = document.createElement("option");
//       placeholderOption.value = "";
//       placeholderOption.textContent = "Select an Existing Quest to Link:";
//       placeholderOption.disabled = true;
//       placeholderOption.selected = true;
//       linkExistingQuestInput.insertBefore(placeholderOption, linkExistingQuestInput.firstChild);
//     }
//   });

//         for (let i = 0; i < currentQuestList.length; i++) {
//             let quest = currentQuestList[i];
//             let option = document.createElement("option");
//             option.value = quest.id;
//             option.textContent = quest.objective;
//             linkExistingQuestInput.appendChild(option);
//         }

        // // Add event listener to the dropdown to handle change event
        // linkExistingQuestInput.addEventListener("change", function() {
        //     // Check if the placeholder option is selected (value is empty string)
        //     if (linkExistingQuestInput.value === "") {
        //     // Remove the placeholder option from the dropdown
        //     linkExistingQuestInput.removeChild(placeholderOption);
        //     }
        // });
        
        // Add classes to the elements corresponding to their variable names
        // linkExistingQuestTitle.classList.add("linkExistingQuestTitle");
        // linkExistingQuestInputContainer.classList.add("linkExistingQuestInputContainer");
        // linkExistingQuestInput.classList.add("linkExistingQuestInput");
        
        // Add content or styles to the elements as needed
        // linkExistingQuestTitle.textContent = "Link Existing Quest:";
        
        // Append the elements to the linkExistingQuestContainer
        // linkExistingQuestContainer.appendChild(linkExistingQuestTitle);
        // linkExistingQuestContainer.appendChild(linkExistingQuestInputContainer);
        // linkExistingQuestContainer.appendChild(linkExistingQuestExampleText);
        // linkExistingQuestInputContainer.appendChild(linkExistingQuestInput)

    