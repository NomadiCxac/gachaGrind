import GGTokenImage from "./images/GGToken.png"
import ChestKeyImage from "./images/ChestKey.png"

const validCurrencies = ["GGTokens", "ChestKeys"]
const currencyImages = {
    GGTokens: GGTokenImage,
    ChestKeys: ChestKeyImage
};

export const rewardUtilities = {

    validCurrencies: [...validCurrencies],
    getRewardImage: function(quest) {

        const rewardType = quest.reward.type;

        if (validCurrencies.includes(rewardType)) {
            return currencyImages[rewardType];
        }

    // Return a default image or handle invalid reward types
    return null;
  }
};

export function displayPlayerCurrentCurrency (currencyContainer) {
    for (let index in currencyContainer) {
        let currencyInterface = document.querySelector(`#${currencyContainer[index].type}Container`);
        let currencyAmount = document.createElement("div");
        currencyAmount.textContent = (`: ${currencyContainer[index].amount} ${currencyContainer[index].type}`);
        currencyAmount.classList.add("currencyAmountUserInterface");
        currencyAmount.setAttribute("id", `${currencyContainer[index].type}UserInterface`);
        currencyInterface.appendChild(currencyAmount);
    }
}


export function currencyAggregator (currencyContainer, currentQuest) {
    if (currentQuest.questComplete == true) {
        for (let i = 0; i < currencyContainer.length; i++) {
            if (currencyContainer[i].type == currentQuest.reward.type) {
                currencyContainer[i].amount += currentQuest.reward.amount;
                return;
            }
        }
    } 
}


  