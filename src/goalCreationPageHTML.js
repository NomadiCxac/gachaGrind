
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
    elementInputValue.type = 'number';
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

    return elementContainer;
}


export function addRadioButtonsToElement (elementContainer, inputContainerClassName) {

        let inputContainer = elementContainer.querySelector(`.${inputContainerClassName}`)

 
        // Create the radio buttons for time options

        // Hours Radio Label
        let hoursRadioLabel = document.createElement("label");
        hoursRadioLabel.classList.add("radioLabel");
        let hoursRadioInput = document.createElement("input");
        hoursRadioInput.setAttribute("type", "radio");
        hoursRadioInput.setAttribute("name", "element");
        hoursRadioInput.setAttribute("value", "hours");
        hoursRadioInput.classList.add("radioButton");

        // Minutes Radio Label
        let minutesRadioLabel = document.createElement("label");
        minutesRadioLabel.classList.add("radioLabel");
        let minutesRadioInput = document.createElement("input");
        minutesRadioInput.setAttribute("type", "radio");
        minutesRadioInput.setAttribute("name", "element");
        minutesRadioInput.setAttribute("value", "minutes");
        minutesRadioInput.classList.add("radioButton");

    
        // N/A Radio Lavel
        let naRadioLabel = document.createElement("label");
        naRadioLabel.classList.add("radioLabel");
        let naRadioInput = document.createElement("input");
        naRadioInput.setAttribute("type", "radio");
        naRadioInput.setAttribute("name", "element");
        naRadioInput.setAttribute("value", "na");
        naRadioInput.classList.add("radioButton");

        // Radio Change Text Event Listeners
        hoursRadioInput.addEventListener("change", handleRadioChange);
        minutesRadioInput.addEventListener("change", handleRadioChange);
        naRadioInput.addEventListener("change", handleRadioChange);

          
        if (inputContainerClassName == "goalQuestTimeInputContainer") {
            hoursRadioLabel.appendChild(hoursRadioInput);
            hoursRadioLabel.appendChild(document.createTextNode("Hours"));
            minutesRadioLabel.appendChild(minutesRadioInput);
            minutesRadioLabel.appendChild(document.createTextNode("Minutes"));  
            
            inputContainer.appendChild(hoursRadioLabel);
            inputContainer.appendChild(minutesRadioLabel);

        } else {
            hoursRadioLabel.appendChild(hoursRadioInput);
            hoursRadioLabel.appendChild(document.createTextNode("Hours"));
            naRadioLabel.appendChild(naRadioInput);
            naRadioLabel.appendChild(document.createTextNode("N/A"));

            inputContainer.appendChild(hoursRadioLabel);
            inputContainer.appendChild(naRadioLabel);
        }


        // Function to handle radio button changes
        function handleRadioChange(event) {
            const timeAssignmentAmount = document.querySelector(".goalTimeAssignmentAmount");
            const timeAssignmentExampleText = document.querySelector("#timeAssignmentExampleText");
            const goalQuestTimeInput = document.querySelector(".goalQuestTimeInput");
            const goalQuestTimeExampleText = document.querySelector("#goalQuestTimeExampleText");
            const goalQuestTimeContainer = document.querySelector(".goalQuestTimeInputContainer");
            const hoursButton = goalQuestTimeContainer.querySelector("input[value='hours']");
            const minutesButton = goalQuestTimeContainer.querySelector("input[value='minutes']");
          
            // Case: N/A selected in Assign Time Field
            if (event.target.value === "na") {
              // If N/A is selected, disable the input field and show the N/A message
              timeAssignmentAmount.disabled = true;
              goalQuestTimeInput.disabled = true;
              timeAssignmentExampleText.textContent =
                "Selecting 'N/A' for time assignment will require your goal to be completed based solely on the completion of quests. No time entry is required.";
                if (inputContainerClassName === "timeAssignmentInputContainer") {
                    // Disable radio buttons for hours and minutes in goalQuestTimeInputContainer
                    hoursButton.disabled = true;
                    minutesButton.disabled = true;
                    goalQuestTimeExampleText.textContent = "All time input fields disabled for this quest, as the the time assigned to this goal is 'N/A'."
                }
            } 
            
            if (event.target.value === "hours" && inputContainerClassName == "timeAssignmentInputContainer") {
              
                // If Hours is selected, enable the input field and show the Hours message
              timeAssignmentAmount.disabled = false;
              goalQuestTimeInput.disabled = false;
              hoursButton.disabled = false;
              minutesButton.disabled = false;

              timeAssignmentExampleText.textContent =
                "Selecting 'Hours' for time assignment will require your goal to be completed based on overall time completion. Time will be allotted to all outstanding quests available to the goal.";
            } 
            
            if (event.target.value === "minutes") {
                // If Hours is selected, enable the input field and show the Hours message
                goalQuestTimeExampleText.textContent =
                  'The required time to complete this quest will be documented in "Minutes".'
              } 

              if (event.target.value === "hours" && inputContainerClassName == "goalQuestTimeInputContainer") {
                // If Hours is selected, enable the input field and show the Hours message
                goalQuestTimeExampleText.textContent =
                  'The required time to complete this quest will be documented in "Hours".';
              } 
          }


  
}


export function createQuestForm () {
    const questForm = document.createElement("form");
    questForm.classList.add("questForm");

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
        "goalQuestFrequencyInputContainer", 
        "goalQuestFrequencyExampleTextContainer", 
        "Quest Frequency:", 
        "goalQuestFrequencyInput", 
        "goalQuestFrequencyInput", 
        "Assign rewards to your goal. The specified amount will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "goalQuestFrequencyInputExampleText",
    );

    questForm.appendChild(goalTimeContainer);
  
    // Frequency of Quest
    let frequencyContainer = createInputValueElement (
        "formFieldContainer", 
        "goalQuestTimeInputContainer", 
        "goalQuestTimeExampleTextContainer", 
        "Assign Time to Quest:", 
        "goalQuestTimeInput", 
        "goalQuestTimeInput", 
        "Assign time to your goal. The specified time will be split among your outstanding quests.", 
        "goalCreationExampleText",
        "goalQuestTimeExampleText",
    );

    addRadioButtonsToElement(frequencyContainer, "goalQuestTimeInputContainer");
    questForm.appendChild(frequencyContainer);
  
    // Goal Deadline
    let deadlineContainer = createFormField(
      "date",
      "deadline",
      "Enter the deadline for your quest.",
      "Enter the start date and end date for your Goal."
    );
    questForm.appendChild(deadlineContainer);
 
        
    return questForm;
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
    listItemsContainer.appendChild(createQuestForm());
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
