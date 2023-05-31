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

export class Equipment {
    constructor(name, type, isEquipped, inPlayerInventory, id) {
        this.name = name;
        this.type = type;
        this.isEquipped = isEquipped;
        this.inPlayerInventory = inPlayerInventory;
        this.id = id;
    }
}

export class Weapon {

}

export class Armour {

}

export class PlayerStats {
    constructor(classType) {
      this._classType = classType;
      this._baseStats = this.getInitialBaseStats(classType);
      this._equippedStats = {};
      this._skillPoints = 0;
    }
  
    getStat(statName) {
      const baseValue = this._baseStats[statName] || 0;
      const equippedValue = this._equippedStats[statName] || 0;
      return baseValue + equippedValue;
    }
  
    setStat(statName, value) {
      this._baseStats[statName] = value;
    }
  
    addStat(statName, value) {
      if (this._baseStats.hasOwnProperty(statName)) {
        this._baseStats[statName] += value;
      } else {
        this._baseStats[statName] = value;
      }
    }
  
    equipItemStats(itemStats) {
      for (const statName in itemStats) {
        if (itemStats.hasOwnProperty(statName)) {
          if (this._equippedStats.hasOwnProperty(statName)) {
            this._equippedStats[statName] += itemStats[statName];
          } else {
            this._equippedStats[statName] = itemStats[statName];
          }
        }
      }
    }
  
    unequipItemStats(itemStats) {
      for (const statName in itemStats) {
        if (itemStats.hasOwnProperty(statName) && this._equippedStats.hasOwnProperty(statName)) {
          this._equippedStats[statName] -= itemStats[statName];
          if (this._equippedStats[statName] <= 0) {
            delete this._equippedStats[statName];
          }
        }
      }
    }
  
    getInitialBaseStats(classType) {
      switch (classType) {
        case "sorcerer":
          return {
            strength: 4,
            agility: 6,
            intelligence: 8,
            constitution: 4,
          };
        case "priest":
          return {
            strength: 4,
            agility: 4,
            intelligence: 6,
            constitution: 8,
          };
        case "warrior":
          return {
            strength: 8,
            agility: 4,
            intelligence: 4,
            constitution: 6,
          };
        case "rogue":
          return {
            strength: 6,
            agility: 8,
            intelligence: 4,
            constitution: 4,
          };
        default:
          throw new Error("Invalid class type.");
      }
    }
  
    levelUp() {
      const level = this._baseStats.level || 1;
      this._baseStats.level = level + 1;
      this._skillPoints += 5; // Assuming the player receives 5 skill points per level
    }
  
    allocateSkillPoint(statName) {
      if (this._skillPoints > 0 && this._baseStats.hasOwnProperty(statName)) {
        this._baseStats[statName] += 1;
        this._skillPoints -= 1;
      }
    }
  
    get skillPoints() {
      return this._skillPoints;
    }
  }
  

export class PlayerCharacterSheet {
    constructor(spriteImage, stats, equippedItems) {
        this._spriteImage = spriteImage;
        this._stats = stats;
        this._equippedItems = equippedItems;
    }

    get spriteImage() {
        return this._spriteImage;
    }
    
    set spriteImage(spriteImage) {
        this._spriteImage = spriteImage;
    }
    
    get stats() {
        return this._stats;
    }
    
    set stats(stats) {
        this._stats = stats;
    }
    
    get equippedItems() {
        return this._equippedItems;
    }
    
    set equippedItems(equippedItems) {
        this._equippedItems = equippedItems;
    }

    equipItem(item) {
        // Additional logic for equipping an item
        this._equippedItems.push(item);
      }
    
    attack(target) {
        // Perform attack logic
        console.log(`Attacking ${target}!`);
    }

    specialAttack(target) {
        // Perform special attack logic here
        console.log(`Special Attacking ${target}!`);
    }
    
      // Other methods can be added here for further functionality
}
