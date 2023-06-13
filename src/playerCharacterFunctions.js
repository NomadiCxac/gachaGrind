export function calcHeroScore (playerCharacter) {
    let heroScore = 0;

    // Base stats calc
    let inherentStrength = playerCharacter._stats.getStat("strength");
    let inherentIntelligence = playerCharacter._stats.getStat("intelligence");
    let inherentDexterity = playerCharacter._stats.getStat("dexterity");
    let inherentConstitution = playerCharacter._stats.getStat("constitution");

    // Weapon Stats Calc
    let weaponStrength = 0;
    let weaponIntelligence = 0;
    let weaponDexterity = 0;
    let weaponConstitution = 0;
    let equipmentStat = 0;
   
    for (let weaponIndex = 0; weaponIndex < playerCharacter._equippedItems.length; weaponIndex++) {
        weaponStrength += playerCharacter._equippedItems[weaponIndex]._stats.strength;
        weaponIntelligence += playerCharacter._equippedItems[weaponIndex]._stats.intelligence;
        weaponDexterity += playerCharacter._equippedItems[weaponIndex]._stats.dexterity;
        weaponConstitution += playerCharacter._equippedItems[weaponIndex]._stats.constitution;
        let weaponCritChance = playerCharacter._equippedItems[weaponIndex]._stats.critChance;
        let weaponCritDamage = playerCharacter._equippedItems[weaponIndex]._stats.critDamage;
        let weaponDamage = playerCharacter._equippedItems[weaponIndex]._stats.damage;
        equipmentStat += (weaponDamage + (weaponDamage * weaponCritChance * weaponCritDamage));
    }
    
    




    // Total Stats

    let totalStrength = inherentStrength + weaponStrength;
    let totalIntelligence = inherentIntelligence + weaponIntelligence;
    let totalDexterity = inherentDexterity + weaponDexterity;
    let totalConstitution = inherentConstitution + weaponConstitution;

    switch(playerCharacter.heroType) {
        case "Warrior":
            totalStrength *= 2;
        case "Sorcerer":
            totalIntelligence *= 2;
        case "Rogue":
            totalDexterity *= 2;
        case "Priest":
            totalConstitution *= 2;
    }

    heroScore += (totalStrength + totalIntelligence + totalDexterity + totalConstitution + equipmentStat)



    return heroScore.toFixed(2);
}