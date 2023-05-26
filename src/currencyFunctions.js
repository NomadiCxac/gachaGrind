import GGTokenImage from "./images/GGToken.png"
import KeyImage from "./images/Key.png"


const validCurrencies = ["GGTokens", "Keys"]

const currencyImages = {
    GGTokens: GGTokenImage,
    Keys: KeyImage
};

export const rewardUtilities = {

    validCurrencies: [...validCurrencies],
    getRewardImage: function(quest) {

        const rewardType = quest.reward.type;

        if (validCurrencies.includes(rewardType)) {
            console.log(GGTokenImage )
            return currencyImages[rewardType];
        }

    // Return a default image or handle invalid reward types
    return null;
  }
};


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


  