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
        let currencyAmount = document.querySelector(`#${currencyContainer[index].type}UserInterface`);
        currencyAmount.textContent = "";
        currencyAmount.textContent = (`: ${currencyContainer[index].amount}`);
    }
}


export function currencyAggregator (currencyContainer, currentQuest) {
    if (currentQuest.questComplete == true) {
        for (let index in currencyContainer) {
            if (currencyContainer[index].type == currentQuest.reward.type) {
                currencyContainer[index].amount += currentQuest.reward.amount;
            }
        }
    } 
    return currencyContainer;
}

