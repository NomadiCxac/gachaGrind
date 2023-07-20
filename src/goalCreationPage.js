import { createEmptyCardTemplate } from "./questFunctions";

export default function renderGoalCreationPage () {

    let mainPage = document.querySelector(".appContent");

    // Create the header div
    let header = document.createElement("div");
    header.classList.add("goalCreationPage");
    header.id = "headerGoalCreationPage";

        // Create header elements
        let headerTitleContainer = document.createElement("div");
            let backPage = document.createElement("button");
            let headerTitle = document.createElement("div");
            headerTitleContainer.appendChild(backPage);
            headerTitleContainer.appendChild(headerTitle);

        let deleteGoal = document.createElement("button");

        // Add classes and ID to the elements
        headerTitleContainer.classList.add("headerTitleContainer")
        backPage.id = "backPageGoalCreationPage";
        headerTitle.id = "headerTitleGoalCreationPage";
        deleteGoal.id = "deleteGoalCreationPage";

        // Text Content
        backPage.textContent = "<";
        headerTitle.textContent = "Goals";
        deleteGoal.textContent = "Delete";

    // Append the elements to the header
    header.appendChild(headerTitleContainer)
    header.appendChild(deleteGoal);


    // Create the content div
    let goalCreationContainer = document.createElement("div");
    goalCreationContainer.classList.add("goalCreationPage");
    goalCreationContainer.id = "goalCreationContentContainer";


        // Create the first child div with class "goalTitleContainer"
        let goalTitleContainer = document.createElement("input");
        goalTitleContainer.className = "goalTitleContainer";
        goalTitleContainer.textContent = "InputContainer goes Here"
        // let goalTitleContainer = document.createElement("input");
        // goalTitleContainer.setAttribute("type", "text");
        goalTitleContainer.setAttribute("placeholder", "Untitled");
        goalTitleContainer.setAttribute("maxlength", "70"); // Set character limit to 70
        goalTitleContainer.setAttribute("id", "goalTitleContainer"); 


    
        // Create the second child div with class "rewardAssignmentContainer"
        let rewardAssignmentContainer = document.createElement("div");
        rewardAssignmentContainer.className = "rewardAssignmentContainer";

        let rewardAssignmentTitle = document.createElement("h2");
        rewardAssignmentTitle.textContent = "Assign Rewards"

        let rewardAssignmentAmount = document.createElement("input");

        rewardAssignmentContainer.appendChild(rewardAssignmentTitle);
        rewardAssignmentContainer.appendChild(rewardAssignmentAmount);
    
        let linkExistingQuestContainer = document.createElement("div");
        linkExistingQuestContainer.classList.add("linkExistingQuestContainer");
        
        let linkExistingQuestTitle = document.createElement("div");
        let linkExistingQuestInputContainer = document.createElement("div");
        let linkExistingQuestInput = document.createElement("input");
        
        // Add classes to the elements corresponding to their variable names
        linkExistingQuestTitle.classList.add("linkExistingQuestTitle");
        linkExistingQuestInputContainer.classList.add("linkExistingQuestInputContainer");
        linkExistingQuestInput.classList.add("linkExistingQuestInput");
        
        // Add content or styles to the elements as needed
        linkExistingQuestTitle.textContent = "Link Existing Quest:";
        linkExistingQuestInput.placeholder = "Enter Quest ID";
        
        // Append the elements to the linkExistingQuestContainer
        linkExistingQuestContainer.appendChild(linkExistingQuestTitle);
        linkExistingQuestContainer.appendChild(linkExistingQuestInputContainer);
        linkExistingQuestInputContainer.appendChild(linkExistingQuestInput)

    
        // Create the fourth child div with class "addQuestContainer"
        let addQuestContainer = document.createElement("div");
        addQuestContainer.className = "addQuestContainer";

        let emptyQuestGoalCard = createEmptyCardTemplate();
        addQuestContainer.appendChild(emptyQuestGoalCard);

    // Append the child divs to the second parent div
    goalCreationContainer.appendChild(goalTitleContainer);
    goalCreationContainer.appendChild(rewardAssignmentContainer);
    goalCreationContainer.appendChild(linkExistingQuestContainer);
    goalCreationContainer.appendChild(addQuestContainer);
 
    // Create the footer div
    let footer = document.createElement("div");
    footer.classList.add("goalCreationPage");
    footer.id = "footerGoalCreationPage"

    // Append the parent divs to the document body or any other container
    mainPage.appendChild(header);
    mainPage.appendChild(goalCreationContainer);
    mainPage.appendChild(footer);
}