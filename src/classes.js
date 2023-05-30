export class Quest {
    constructor(objective, dateToComplete, questComplete, reward, id) {
        this.objective = objective;
        this.dateToComplete = dateToComplete;
        this.questComplete = questComplete;
        this.reward = reward;
        this.id = id;
    }

}

export class Currency {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
}

export const currencyContainer = [];